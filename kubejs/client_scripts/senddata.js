let PlayerAlt = false
let PlayerAlt1 = false
let PlayerFreeCam = false
let PlayerFreeCam1 = false
PlayerEvents.tick(event => {
    PlayerAlt = Client.isAltDown()
    if (PlayerAlt != PlayerAlt1) {
        event.player.sendData("isPlayerAltDown", { "Alt": PlayerAlt })
        PlayerAlt1 = PlayerAlt
    }
    PlayerFreeCam = global.FreeCam.isDown()
    if (PlayerFreeCam==false&&PlayerFreeCam1==true) {
        event.player.sendData("key.kubejs.freecam")
    }
    PlayerFreeCam1 = PlayerFreeCam
})