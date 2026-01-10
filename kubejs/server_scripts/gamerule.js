ServerEvents.loaded(event => {
    event.server.gameRules.set("keepInventory", "true")
    event.server.gameRules.set("mobExplosionDropDecay", "true")
})