NativeEvents.onEvent("highest", true, $LivingDeath, e => {
    /**@type {Internal.LivingDeathEvent} */
    let event = e
    if (!event.entity.isPlayer()) { return }
    /**@type {Internal.ServerPlayer} */
    let player = event.entity
    player.persistentData.needRespawn = true
    player.persistentData.FreeCaming = false
    player.addItemCooldown("kubejs:unknown_prototype", 20)

    if (player.y <= player.level.dimensionType().minY() - 64) {
        player.y = 0
    }
    orCreateData(player.persistentData, "teleport", {})
    orCreateData(player.persistentData.teleport, "lastpoint", {})
    let LastPoint = player.persistentData.teleport.lastpoint
    orCreateData(LastPoint, "pos", {})
    LastPoint.pos.x = player.x
    LastPoint.pos.y = player.y
    LastPoint.pos.z = player.z
    LastPoint.dimension = player.level.dimension.toString()

    player.setGameMode("spectator")
    player.setHealth(player.maxHealth)
    player.setFoodLevel(20)
    player.setSaturation(3)
    player.respawn()
    player.potionEffects.clear()
    player.server.tell(event.getSource().getLocalizedDeathMessage(player))
    player.setStatusMessage(Text.translate("kubejs.message.redeploy_tips"))
    event.setCanceled(true)
})
//使用物品冷却作为计时器
NetworkEvents.dataReceived("isPlayerAltDown", event => {
    if (!event.data.Alt) { return }
    let p = event.player
    if (p.stats.playTime % 60 == 0) {
        if (p.gameMode.toString() != "spectator" && !p.cooldowns.isOnCooldown("kubejs:unknown_prototype")) {
            p.cooldowns.removeCooldown("kubejs:unknown_prototype")
            p.persistentData.needRespawn = false
            return
        }
    }
    if (p.persistentData.needRespawn != true) { return }
    if (p.stats.playTime % 3600 == 0) {
        p.tell(Text.translate("kubejs.message.remake_warn"))
    }
    if (event.data.Alt == true && !p.cooldowns.isOnCooldown("kubejs:unknown_prototype")) {
        p.persistentData.needRespawn = false
        p.persistentData.FreeCaming = false
        p.setGameMode("survival")
        p.setStatusMessage(Text.translate("kubejs.message.redeploy"))
        p.potionEffects.add('minecraft:resistance', 100, 4, false, true)
    }
})