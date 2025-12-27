let PlayerAlt = true
let PlayerAlt1 = true
PlayerEvents.tick(event => {
    PlayerAlt = Client.isAltDown()
    if (PlayerAlt != PlayerAlt1) {
        event.player.sendData("isPlayerAltDown", { "Alt": PlayerAlt })
    }
    PlayerAlt1=PlayerAlt
})