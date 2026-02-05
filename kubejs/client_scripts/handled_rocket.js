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
{
    let has233BMap = false
    let handlingRocket = true
    let allowedDimensions = 0

    let Galaxy = 0
    let Planet = 0

    let Painted = true

    NetworkEvents.dataReceived("handleRocket", event => {
        let p = event.player
        has233BMap = event.data.has233BMap
        allowedDimensions = 0
        if (has233BMap == true) {
            allowedDimensions = alwaysAllowedDimensions.concat(_233BDimensions)
        } else {
            allowedDimensions = alwaysAllowedDimensions.slice()
        }
        Galaxy = 0
        Planet = 0
        handlingRocket = true
        allowToLaunch = true
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
                text: "§e" + Text.translate(PlanetNameKey[PlanetList[Galaxy][Planet]]).getString(),
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
        Painted = true
    })
    NetworkEvents.dataReceived("disHandleRocket", event => {
        event.player.paint({
            "rocket_hud0": { text: '' },
            "rocket_hud1": { text: '' },
            "rocket_hud2": { text: '' },
            "rocket_hud3": { text: '' },
            "rocket_hud4": { text: '' }
        })
        handlingRocket = false
        Painted = false
    })
    function clampPlanetSelector(G, P) {
        Galaxy = JavaMath.clamp(G, 0, PlanetList.length)
        Planet = JavaMath.clamp(P, 0, PlanetList[Galaxy].length)
    }
    let delay = 0
    let allowToLaunch = false
    PlayerEvents.tick(event => {
        if (delay > 0) { delay-- }
        //必须正在操纵火箭
        if (!handlingRocket) {
            if (Painted) {
                event.player.paint({
                    "rocket_hud0": { text: '' },
                    "rocket_hud1": { text: '' },
                    "rocket_hud2": { text: '' },
                    "rocket_hud3": { text: '' },
                    "rocket_hud4": { text: '' }
                })
                Painted = false
            }
            return
        }
        let p = event.player
        //若不在火箭上，将handlingRocket转为false
        if (p.vehicle == null) {
            if (Painted) {
                p.paint({
                    "rocket_hud0": { text: '' },
                    "rocket_hud1": { text: '' },
                    "rocket_hud2": { text: '' },
                    "rocket_hud3": { text: '' },
                    "rocket_hud4": { text: '' }
                })
                Painted = false
            }
            handlingRocket = false
            return
        }
        //切换目标
        if (delay === 0) {
            switch (true) {
                case global.SwitchUp.isDown():
                    Galaxy--
                    Galaxy = JavaMath.clamp(Galaxy, 0, PlanetList.length - 1)
                    Planet = 0
                    delay = delayTime
                    break
                case global.SwitchDown.isDown():
                    Galaxy++
                    Galaxy = JavaMath.clamp(Galaxy, 0, PlanetList.length - 1)
                    Planet = 0
                    delay = delayTime
                    break
                case global.SwitchLeft.isDown():
                    Planet--
                    Planet = JavaMath.clamp(Planet, 0, PlanetList[Galaxy].length - 1)
                    delay = delayTime
                    break
                case global.SwitchRight.isDown():
                    Planet++
                    Planet = JavaMath.clamp(Planet, 0, PlanetList[Galaxy].length - 1)
                    delay = delayTime
                    break
            }
        }
        //目标是否可发射
        let choosedPlanet = PlanetList[Galaxy][Planet]
        if (delay === delayTime) {
            if (allowedDimensions.some(i => i === choosedPlanet)) {
                allowToLaunch = true
                p.paint({
                    "rocket_hud4": {
                        text: Text.translate("kubejs.message.hand_control_rocket_launch").getString()
                    }
                })
            } else {
                allowToLaunch = false
                p.paint({
                    "rocket_hud4": {
                        text: ''
                    }
                })
            }
        }
        //更新行星面板
        if (delay === delayTime) {
            p.playSound("minecraft:ui.button.click")
            p.paint({
                "rocket_hud1": {
                    text: "§e" + Text.translate(GalaxyNameKey[Galaxy]).getString()
                }
            })
            if (allowToLaunch) {
                p.paint({
                    "rocket_hud2": {
                        text: "§e" + Text.translate(PlanetNameKey[PlanetList[Galaxy][Planet]]).getString()
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
        if (allowToLaunch && Client.isAltDown()) {
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
            Painted = false
            Client.options.cameraType = $CameraType.THIRD_PERSON_BACK
        }
    })
}