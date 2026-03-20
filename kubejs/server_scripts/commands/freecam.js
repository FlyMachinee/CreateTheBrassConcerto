NetworkEvents.dataReceived("key.kubejs.freecam", event => {
    /**@type {Internal.ServerPlayer} */
    let p = event.player
    if (p.persistentData.needRespawn != false) { return }
    if (p.vehicle != null) { return }
    orCreateData(p.persistentData, "teleport", {})
    orCreateData(p.persistentData.teleport, "freecam", {})

    let pdata = p.persistentData.teleport.freecam
    orCreateData(p.persistentData, "FreeCaming", false)
    if (p.persistentData.FreeCaming) {
        p.persistentData.needRespawn = false
        p.persistentData.FreeCaming = false
        p.setGameMode(pdata.gamemode)
        p.setStatusMessage(Text.translate("kubejs.message.freecam_off"))
        p.teleportTo(pdata.dimension, pdata.pos.x, pdata.pos.y, pdata.pos.z, pdata.YRot || 0, pdata.XRot || 0)
    } else {
        if (p.isSpectator()) { return }
        orCreateData(pdata, "pos", {})
        pdata.pos.x = p.x
        pdata.pos.y = p.y
        pdata.pos.z = p.z
        pdata.YRot = p.YRot || 0
        pdata.XRot = p.XRot || 0
        pdata.dimension = p.level.dimension.toString()
        pdata.gamemode = getGamemodeString(p)
        p.persistentData.needRespawn = false
        p.persistentData.FreeCaming = true
        p.setGameMode("spectator")
        p.setStatusMessage(Text.translate("kubejs.message.freecam_on"))
    }
})
function getGamemodeString(player) {
    if (player.gameMode.isCreative()) { return "creative" }
    if (player.gameMode.isSurvival()) { return "survival" }
    if (player.isSpectator()) { return "spectator" }
    return "adventure"
}