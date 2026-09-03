// priority: 128
EntityJSEvents.biomeSpawns(event => {
    event.removeSpawn('minecraft:bat', ['#minecraft:is_overworld']);
})

let $PotentialSpawns = Java.loadClass("net.minecraftforge.event.level.LevelEvent$PotentialSpawns")
let EntityNotAllowed = null
NativeEvents.onEvent($PotentialSpawns, event => {
    //console.log(event.getMobCategory().getName())
    //console.log(EntityNotAllowed)
    if (EntityNotAllowed === null) { EntityNotAllowed = event.getLevel().server.persistentData.EntityNotAllowed || {} }
    let dim = event.getLevel().dimension.toString()
    if (EntityNotAllowed[dim] == undefined) {
        return
    }
    let disabledType = EntityNotAllowed[dim] || "allowed"
    let type = event.getMobCategory().getName()
    if (disabledType == "allowed") {
        return
    }
    if (disabledType == "not_monster" && type == "monster") {
        return
    }
    if (disabledType == "only_monster" && type != "monster") {
        return
    }

    event.setCanceled(true);
    //console.log("spawn canceled at: " + dim + ", " + event.getPos());
    /*
    for (let data of event.getSpawnerDataList()) {
        console.log(data.type.getKey(data.type).toString())
    }
    */
})

//"forge:spawn_type": "CHUNK_GENERATION"