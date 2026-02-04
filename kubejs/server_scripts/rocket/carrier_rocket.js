let $LaunchPadState = Java.loadClass("earth.terrarium.adastra.common.blocks.LaunchPadBlock")
BlockEvents.rightClicked("ad_astra:launch_pad", event => {
    let p = event.player
    if (p.mainHandItem.id !== "kubejs:carrier_rocket" || event.hand !== "MAIN_HAND") { return }
    let PartsBox = p.inventory.countItem("kubejs:parts_box")
    let FuelTank = p.inventory.countItem("kubejs:fuel_tank")
    if (p.isCreative() || (PartsBox >= 3 && FuelTank >= 3)) {
        if (!p.isCreative()) {
            p.inventory.clearOrCountMatchingItems(i => i.id === "kubejs:parts_box", 3, p.inventory.asContainer())
            p.inventory.clearOrCountMatchingItems(i => i.id === "kubejs:fuel_tank", 3, p.inventory.asContainer())
        }
    } else {
        p.setStatusMessage(Text.translate("kubejs.message.hand_control_rocket_need_item"))
        return
    }
    let b = event.block
    let pos = [b.x, b.y + 1, b.z]
    let part = b.blockState.getValue($LaunchPadState.PART).toString()
    //获得center的pos
    switch (part) {
        case "top":
            pos[0] -= 1
            break
        case "top_left":
            pos[0] -= 1
            pos[2] -= 1
            break
        case "top_right":
            pos[0] -= 1
            pos[2] += 1
            break
        case "left":
            pos[2] -= 1
            break
        case "right":
            pos[2] += 1
            break
        case "bottom":
            pos[0] += 1
            break
        case "bottom_left":
            pos[0] += 1
            pos[2] -= 1
            break
        case "bottom_right":
            pos[0] += 1
            pos[2] += 1
            break
    }
    let area = new AABB.of(pos[0] - 0.5, pos[1] - 1, pos[2] - 0.5, pos[0] + 0.5, pos[1] + 0.5, pos[2] + 0.5)
    let entities = event.level.getEntitiesWithin(area)
    for (let i of entities) {
        if (i.type !== "minecraft:armor_stand") {
            continue
        }
        if (i.tags.contains("dut_carrier_rocket_byhand")) {
            p.setStatusMessage("kubejs.message.set_rocket_hasset")
            return
        }
    }
    event.level.playSound(null, p.x, p.y, p.z, "minecraft:item.armor.equip_netherite", "players", 1, 1)
    p.swing()
    p.setStatusMessage(Text.translate("kubejs.message.set_rocket_byhand"))
    p.tell(Text.translate("kubejs.message.set_rocket_target_pos"))

    orCreateData(p.persistentData, "rocketTargetPos", { x: pos[0], z: pos[2] })
    let RocketTargetPos = p.persistentData.rocketTargetPos
    RocketTargetPos.x = pos[0]
    RocketTargetPos.z = pos[2]

    p.tell(Text.translate("kubejs.message.rocket_target_pos", RocketTargetPos.x, RocketTargetPos.z))

    let newEntity = event.level.createEntity("minecraft:armor_stand")
    newEntity.setPos(pos[0] + 0.5, pos[1], pos[2] + 0.5)
    newEntity.spawn()
    p.startRiding(newEntity, true)
    if (p.persistentData.has233BMap === true || p.isCreative()) {
        p.sendData("handleRocket", { has233BMap: true })
    } else {
        p.sendData("handleRocket", { has233BMap: false })
    }

    event.server.runCommandSilent(`/execute as ${newEntity.uuid.toString()} run function dut:carrier_rocket/set_rocket_byhand`)


})
//扳手拆除火箭
ItemEvents.firstLeftClicked("create:wrench", event => {
    let e = event.player.rayTrace(event.player.getAttributeValue("forge:block_reach"), true).entity
    if (e == null) { return }
    if (e.type != "minecraft:armor_stand") { return }
    if (!e.tags.contains("dut_carrier_rocket_byhand")) { return }
    if (!event.player.isCreative()) {
        event.player.give(Item.of("3x kubejs:parts_box"))
        event.player.give(Item.of("3x kubejs:fuel_tank"))
    }
    e.discard()
    event.level.playSound(null, event.player.x, event.player.y, event.player.z, "minecraft:item.armor.equip_netherite", "players", 1, 1)
})
NetworkEvents.dataReceived("handleRocketLaunch", event => {
    let d = event.data
    let p = event.player
    let Vehicle = p.vehicle
    let VehicleUUID = Vehicle.uuid.toString()
    orCreateData(p.persistentData, "rocketTargetPos", { x: Math.floor(p.x), z: Math.floor(p.z) })
    let pdata = p.persistentData.rocketTargetPos

    if (d.spacestation == true) {
        p.offHandItem.shrink(1)
        event.server.runCommandSilent(`/execute as ${p.username} at @s run spacestation ${PlanetToDimension[d.target]} ${pdata.x} ${pdata.z}`)
    }

    event.server.runCommandSilent(`/scoreboard players set ${VehicleUUID} dut_target_x ${pdata.x * 10 + 5}`)
    event.server.runCommandSilent(`/scoreboard players set ${VehicleUUID} dut_target_z ${pdata.z * 10 + 5}`)
    event.level.playSound(null, Vehicle.x, Vehicle.y, Vehicle.z, "create:whistle_high", "players", 0.6, 1.4)
    Vehicle.removeTag("dut_carrier_rocket_byhand")
    Vehicle.addTag("dut_carrier_rocket")
    Vehicle.addTag("dut_to_" + d.target)

    event.server.runCommandSilent(`/scoreboard players set ${VehicleUUID} dut_delay 60`)
    p.sendData("disHandleRocket")
})

const $EntityMountEvent = Java.loadClass("net.minecraftforge.event.entity.EntityMountEvent")
NativeEvents.onEvent($EntityMountEvent, event => {
    /**@type {Internal.EntityMountEvent}*/
    let e = event
    if (e.level.isClientSide()) { return }
    if (!e.entity.isPlayer()) { return }
    /**@type {Internal.ServerPlayer} */
    let p=e.entity
    if (e.entityBeingMounted.type !== "minecraft:armor_stand") { return }
    let vehicle=e.entityBeingMounted
    if (!vehicle.tags.contains('dut_carrier_rocket')){return}
    if (e.isMounting()){
        p.sendData("setVision",{type:'thridb'})
    }else{
        p.sendData("setVision",{type:'first'})
    }
})