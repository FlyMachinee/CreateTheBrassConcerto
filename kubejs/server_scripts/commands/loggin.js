// priority: 512
PlayerEvents.loggedIn(event => {
    let pdata = event.player.persistentData
    orCreateData(pdata, "teleport",{})
    orCreateData(pdata.teleport, "lastpoint",{})
    orCreateData(pdata.teleport, "lastpoint1",{})
    orCreateData(pdata.teleport, "home",{})
})
ItemEvents.rightClicked("stick", event => {
    if (event.player.username != "Slimeli_") {
        return
    }
        event.player.tell(event.player.persistentData)
        event.player.tell(event.server.persistentData)
})
