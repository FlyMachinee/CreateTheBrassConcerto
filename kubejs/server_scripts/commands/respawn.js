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