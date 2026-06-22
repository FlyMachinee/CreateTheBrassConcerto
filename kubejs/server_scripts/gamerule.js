ServerEvents.loaded(event => {
    event.server.gameRules.set("keepInventory", "true")
    event.server.gameRules.set("mobExplosionDropDecay", "true")
    event.server.gameRules.set("lavaSourceConversion", "true")
    event.server.gameRules.set("drowningDamage", "false")
})