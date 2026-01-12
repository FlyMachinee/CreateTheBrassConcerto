// priority: 512
PlayerEvents.loggedIn(event => {
    let p = event.player
    let pdata = p.persistentData
    if (Platform.isLoaded('ftbessentials')){
        p.tell(Text.translatable("kubejs.message.unacceptable"))
    }
    orCreateData(pdata, "needRespawn", false)
    orCreateData(pdata, "FreeCaming", false)
    orCreateData(pdata, "teleport", {})
    if (pdata.contains("tpa_requirement")) {
        pdata.remove("tpa_requirement")
    }
    orCreateData(pdata, "tpa_requirement", {})
    orCreateData(pdata.teleport, "lastpoint", {})
    orCreateData(pdata.teleport, "lastpoint1", {})
    orCreateData(pdata.teleport, "home", {})
    orCreateData(pdata.teleport, "freecam", {})
    if (pdata.FreeCaming) {
        pdata.needRespawn = false
        pdata.FreeCaming = false
        let freecamData = pdata.teleport.freecam
        p.teleportTo(freecamData.dimension, freecamData.pos.x, freecamData.pos.y, freecamData.pos.z, freecamData.YRot, freecamData.XRot)
        p.setGameMode(freecamData.gamemode)
    }
    if (pdata.needRespawn) {
        p.persistentData.needRespawn = false
        p.setGameMode("survival")
        let LastPoint = p.persistentData.teleport.lastpoint
        p.teleportTo(LastPoint.dimension, LastPoint.pos.x, LastPoint.pos.y, LastPoint.pos.z, p.YRot, p.XRot)
    }
})
ItemEvents.rightClicked("stick", event => {
    if (event.player.username != "Slimeli_") {
        return
    }
    event.player.tell(event.player.persistentData)
    event.player.tell(event.server.persistentData)
    event.player.tell(event.player.stringUuid)
})