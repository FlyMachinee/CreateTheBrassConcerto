// priority: 512
ServerEvents.loaded(event => {
    event.server.runCommandSilent(`/execute in ad_astra:earth_orbit run forceload add 0 0 0 0`)
    event.server.runCommandSilent(`/execute in ad_astra:moon_orbit run forceload add 0 0 0 0`)
    event.server.runCommandSilent(`/execute in dut:slimeria_orbit run forceload add 0 0 0 0`)

    event.server.runCommandSilent(`/execute in ad_astra:earth_orbit run forceload remove 0 0 0 0`)
    event.server.runCommandSilent(`/execute in ad_astra:moon_orbit run forceload remove 0 0 0 0`)
    event.server.runCommandSilent(`/execute in dut:slimeria_orbit run forceload remove 0 0 0 0`)
})
PlayerEvents.loggedIn(event => {
    let p = event.player
    let pdata = p.persistentData
    if (Platform.isLoaded('ftbessentials')) {
        p.tell(Text.translate("kubejs.message.unacceptable"))
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
    let p = event.player
    /*
    let l=event.server.getLevel('ad_astra:moon')
    p.tell(l.getBlock(p.x,p.y,p.z).id.toString())
    */
    p.tell(p.persistentData)
})