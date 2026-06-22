EntityJSEvents.biomeSpawns(event => {
    event.removeSpawn('minecraft:bat', ['#minecraft:is_overworld']);
})
/*
let a = Java.loadClass("net.minecraftforge.event.entity.living.MobSpawnEvent")
let EntityNotAllowed={"minecraft:creeper":"minecraft:overworld"}
NativeEvents.onEvent(a, event => {
    @type {Internal.MobSpawnEvent}
    let e = event
    let entity = e.getEntity().type.toString()
    let dim = e.getEntity().level.dimension.toString()
    console.log(entity)
    console.log(dim)
    if (EntityNotAllowed[entity]==dim){
        e.getEntity().discard()
        e.setCanceled(true)
    }
})
    "forge:spawn_type": "NATURAL"
*/