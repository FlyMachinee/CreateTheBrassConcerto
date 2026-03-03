//使用物品冷却作为计时器
NetworkEvents.dataReceived("isPlayerAltDown", event => {
    if (!event.data.Alt) { return }
    let p =event.player
    if (p.stats.playTime % 60 == 0) {
        if (p.gameMode.toString() != "spectator") {
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
        p.potionEffects.add('minecraft:resistance',100,4,false,true)
    }
})