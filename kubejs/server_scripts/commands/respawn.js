NativeEvents.onEvent("highest", true, $LivingDeath, e => {
    /**@type {Internal.LivingDeathEvent} */
    let event = e
    /**@type {Internal.Entity} */
    let entity = event.entity
    if (entity.type == "minecraft:ender_dragon") {
        entity.level.runCommandSilent(`/summon item ${entity.x} ${entity.y} ${entity.z} {Glowing:1b,NoGravity:1b,Invulnerable:1b,Item:{id:"kubejs:phantom_fungus",Count:${randomOne(3, 9).toString()}b}}`)
    }
    if (!entity.isPlayer()) { return }
    /**@type {Internal.ServerPlayer} */
    let player = entity
    player.persistentData.needRespawn = true
    player.persistentData.FreeCaming = false
    player.addItemCooldown("kubejs:unknown_prototype", 20)

    if (player.y <= player.level.dimensionType().minY() - 64) {
        player.y = 0
    }
    let LastPoint = player.persistentData.teleport.lastpoint
    LastPoint.pos = {}
    LastPoint.pos.x = player.x
    LastPoint.pos.y = player.y
    LastPoint.pos.z = player.z
    LastPoint.dimension = player.level.dimension.toString()

    player.setGameMode("spectator")
    player.setHealth(player.maxHealth)
    player.respawn()
    player.server.tell(event.getSource().getLocalizedDeathMessage(player))
    player.setStatusMessage(Text.translate("kubejs.message.redeploy_tips"))
    event.setCanceled(true)
})
//使用物品冷却作为计时器
NetworkEvents.dataReceived("isPlayerAltDown", event => {
    if (!event.data.Alt) { return }
    if (event.player.stats.playTime % 60 == 0) {
        if (event.player.gameMode.toString() != "spectator") {
            event.player.cooldowns.removeCooldown("kubejs:unknown_prototype")
            event.player.persistentData.needRespawn = false
            return
        }
    }
    if (event.player.persistentData.needRespawn != true) { return }
    if (event.player.stats.playTime % 3600 == 0) {
        event.player.tell(Text.translate("kubejs.message.remake_warn"))
    }
    if (event.data.Alt == true && !event.player.cooldowns.isOnCooldown("kubejs:unknown_prototype")) {
        event.player.persistentData.needRespawn = false
        event.player.persistentData.FreeCaming = false
        event.player.setGameMode("survival")
        event.player.setStatusMessage(Text.translate("kubejs.message.redeploy"))
    }
})