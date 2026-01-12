NetworkEvents.dataReceived("key.kubejs.freecam", event => {
    /**@type {Internal.ServerPlayer} */
    let p = event.player
    if (p.persistentData.needRespawn != false) { return }
    orCreateData(p.persistentData, "teleport", false)
    orCreateData(p.persistentData.teleport, "freecam", false)

    let pdata = p.persistentData.teleport.freecam
    orCreateData(p.persistentData, "FreeCaming", false)
    if (p.persistentData.FreeCaming) {
        p.persistentData.needRespawn = false
        p.persistentData.FreeCaming = false
        p.setGameMode(pdata.gamemode)
        p.setStatusMessage(Text.translate("kubejs.message.freecam_off"))
        p.teleportTo(pdata.dimension, pdata.pos.x, pdata.pos.y, pdata.pos.z, pdata.YRot, pdata.XRot)
    } else {
        if (p.isSpectator()) { return }
        pdata.pos = {}
        pdata.pos.x = p.x
        pdata.pos.y = p.y
        pdata.pos.z = p.z
        pdata.YRot = p.YRot
        pdata.XRot = p.XRot
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