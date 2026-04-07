const DimensionToPlanetWithOrbit = {
    "minecraft:overworld": "earth",
    "ad_astra:earth_orbit": "earth_orbit",
    "ad_astra:moon": "moon",
    "ad_astra:moon_orbit": "moon_orbit",
    "dut:slimeria": "slimeria",
    "dut:slimeria_orbit": "slimeria_orbit",
}
const PlanetNameKey = {
    "dut:slimeria": "planet.dut.slimeria",
    "dut:slimeria_orbit": "planet.dut.slimeria_orbit",
    "minecraft:overworld": "planet.dut.earth",
    "ad_astra:earth_orbit": "planet.dut.earth_orbit",
    "ad_astra:moon": "planet.dut.moon",
    "ad_astra:moon_orbit": "planet.dut.moon_orbit"
}
const Orbit = ["ad_astra:earth_orbit", "ad_astra:moon_orbit", "dut:slimeria_orbit"]
const GalaxyNameKey = ["solar_system.dut.solar_system", "solar_system.dut.233b_system"]
const PlanetList = [
    ["minecraft:overworld", "ad_astra:earth_orbit", "ad_astra:moon", "ad_astra:moon_orbit"],//太阳系
    ["dut:slimeria", "dut:slimeria_orbit"]//233B
]
const alwaysAllowedDimensions = ["minecraft:overworld", "ad_astra:earth_orbit", "ad_astra:moon", "ad_astra:moon_orbit"]
const _233BDimensions = ["dut:slimeria", "dut:slimeria_orbit"]

const delayTime = 5

let has233BMap = false
let handlingRocket = true
let allowedDimensions = 0

let GalaxySelector = 0
let PlanetSelector = 0

let handlePadPainted = true
//重进游戏清除面板
PlayerEvents.loggedIn(event=>{
    event.player.paint({
        "rocket_hud0": { text: '' },
        "rocket_hud1": { text: '' },
        "rocket_hud2": { text: '' },
        "rocket_hud3": { text: '' },
        "rocket_hud4": { text: '' }
    })
    handlingRocket = false
    handlePadPainted = false
})
//开始操纵火箭
NetworkEvents.dataReceived("handleRocket", event => {
    let p = event.player
    has233BMap = event.data.has233BMap
    allowedDimensions = 0
    if (has233BMap == true) {
        allowedDimensions = alwaysAllowedDimensions.concat(_233BDimensions)
    } else {
        allowedDimensions = alwaysAllowedDimensions.slice()
    }
    GalaxySelector = 0
    PlanetSelector = 0
    handlingRocket = true
    allowToLaunchRocket = true
    //初始化面板
    p.paint({
        "rocket_hud0": {
            type: "text",
            text: Text.translate("kubejs.message.hand_control_rocket").getString(),
            x: 0,
            y: -10,
            alignX: 'center',
            alignY: 'center',
            draw: 'ingame',

        },
        "rocket_hud1": {
            type: "text",
            text: "§e" + Text.translate(GalaxyNameKey[0]).getString(),
            x: 0,
            y: 10,
            alignX: 'center',
            alignY: 'center',
            draw: 'ingame',
        },
        "rocket_hud2": {
            type: "text",
            text: "§e" + Text.translate(PlanetNameKey[PlanetList[GalaxySelector][PlanetSelector]]).getString(),
            x: 0,
            y: 22,
            alignX: 'center',
            alignY: 'center',
            draw: 'ingame',
        },
        "rocket_hud3": {
            type: "text",
            text: '',
            x: 0,
            y: 34,
            alignX: 'center',
            alignY: 'center',
            draw: 'ingame',
        }
        ,
        "rocket_hud4": {
            type: "text",
            text: Text.translate("kubejs.message.hand_control_rocket_launch").getString(),
            x: 0,
            y: 46,
            alignX: 'center',
            alignY: 'center',
            draw: 'ingame',
        }

    })
    handlePadPainted = true
})
//停止操纵火箭
NetworkEvents.dataReceived("disHandleRocket", event => {
    event.player.paint({
        "rocket_hud0": { text: '' },
        "rocket_hud1": { text: '' },
        "rocket_hud2": { text: '' },
        "rocket_hud3": { text: '' },
        "rocket_hud4": { text: '' }
    })
    handlingRocket = false
    handlePadPainted = false
})
function Clamp(a, b, c) {
    return Math.max(b, Math.min(a, c))
}
function clampPlanetSelector(G, P) {
    GalaxySelector = Clamp(G, 0, PlanetList.length)
    PlanetSelector = Clamp(P, 0, PlanetList[GalaxySelector].length)
}
let handlePadToggleDelay = 0
let allowToLaunchRocket = false
//面板逻辑
PlayerEvents.tick(event => {
    if (handlePadToggleDelay > 0) { handlePadToggleDelay-- }
    //必须正在操纵火箭
    if (!handlingRocket) {
        if (handlePadPainted) {
            event.player.paint({
                "rocket_hud0": { text: '' },
                "rocket_hud1": { text: '' },
                "rocket_hud2": { text: '' },
                "rocket_hud3": { text: '' },
                "rocket_hud4": { text: '' }
            })
            handlePadPainted = false
        }
        return
    }
    let p = event.player
    //若xxx，将handlingRocket转为false
    /*
    if (p.vehicle == null) {
        if (handlePadPainted) {
            p.paint({
                "rocket_hud0": { text: '' },
                "rocket_hud1": { text: '' },
                "rocket_hud2": { text: '' },
                "rocket_hud3": { text: '' },
                "rocket_hud4": { text: '' }
            })
            handlePadPainted = false
            p.tell(3)
        }
        handlingRocket = false
        return
    }
        */
    //切换目标
    if (handlePadToggleDelay === 0) {
        if (global.SwitchUp.isDown()) {
            GalaxySelector--
            GalaxySelector = Clamp(GalaxySelector, 0, PlanetList.length - 1)
            PlanetSelector = 0
            handlePadToggleDelay = delayTime
        } else if (global.SwitchDown.isDown()) {
            GalaxySelector++
            GalaxySelector = Clamp(GalaxySelector, 0, PlanetList.length - 1)
            PlanetSelector = 0
            handlePadToggleDelay = delayTime
        } else if (global.SwitchLeft.isDown()) {
            PlanetSelector--
            PlanetSelector = Clamp(PlanetSelector, 0, PlanetList[GalaxySelector].length - 1)
            handlePadToggleDelay = delayTime
        } else if (global.SwitchRight.isDown()) {
            PlanetSelector++
            PlanetSelector = Clamp(PlanetSelector, 0, PlanetList[GalaxySelector].length - 1)
            handlePadToggleDelay = delayTime
        }
    }
    //目标是否可发射
    let choosedPlanet = PlanetList[GalaxySelector][PlanetSelector]
    if (handlePadToggleDelay === delayTime) {
        if (allowedDimensions.some(i => i === choosedPlanet)) {
            allowToLaunchRocket = true
            p.paint({
                "rocket_hud4": {
                    text: Text.translate("kubejs.message.hand_control_rocket_launch").getString()
                }
            })
        } else {
            allowToLaunchRocket = false
            p.paint({
                "rocket_hud4": {
                    text: ''
                }
            })
        }
    }
    //更新行星面板
    if (handlePadToggleDelay === delayTime) {
        p.playSound("minecraft:ui.button.click")
        p.paint({
            "rocket_hud1": {
                text: "§e" + Text.translate(GalaxyNameKey[GalaxySelector]).getString()
            }
        })
        if (allowToLaunchRocket) {
            p.paint({
                "rocket_hud2": {
                    text: "§e" + Text.translate(PlanetNameKey[PlanetList[GalaxySelector][PlanetSelector]]).getString()
                }
            })
        } else {
            p.paint({
                "rocket_hud2": {
                    text: Text.translate("planet.dut.unlock").getString()
                }
            })
        }
        if (Orbit.some(i => i === choosedPlanet)) {
            p.paint({
                "rocket_hud3": {
                    text: Text.translate("kubejs.message.hand_control_rocket_orbit").getString()
                }
            })
        } else {
            p.paint({
                "rocket_hud3": {
                    text: ''
                }
            })
        }
    }
    //发射
    if (allowToLaunchRocket && Client.isAltDown()) {
        if (Orbit.some(i => i === choosedPlanet) && p.offHandItem.id === 'kubejs:emergency_industrial_platform_space') {
            p.sendData("handleRocketLaunch", { spacestation: true, target: DimensionToPlanetWithOrbit[choosedPlanet] })
        } else {
            p.sendData("handleRocketLaunch", { spacestation: false, target: DimensionToPlanetWithOrbit[choosedPlanet] })
        }
        event.player.paint({
            "rocket_hud0": { text: '' },
            "rocket_hud1": { text: '' },
            "rocket_hud2": { text: '' },
            "rocket_hud3": { text: '' },
            "rocket_hud4": { text: '' }
        })
        handlingRocket = false
        handlePadPainted = false
        Client.options.cameraType = $CameraType.THIRD_PERSON_BACK
    }
})
