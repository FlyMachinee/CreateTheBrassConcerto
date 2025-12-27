EntityJSEvents.spawnPlacement(event => {
    event.replace('minecraft:slime', 'on_ground', 'world_surface', (entity, levelaccesor, pos, random) => {
        return (levelaccesor.level.dimension == 'dut:slimeria')
    })
})
ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEvent$LivingTickEvent', event => {
    if ((event.entity.type != "minecraft:slime" && event.entity.type != "minecraft:magma_cube") || event.entity.age % 20 != 0) {
        return
    }
    if (event.entity.block.id == "kubejs:saline_water" && event.entity.level.dimension == "dut:slimeria") {
        event.entity.level.spawnParticles("minecraft:poof", false, event.entity.x, event.entity.y, event.entity.z, 0.3, 0.3, 0.3, 6, 0.02)
        event.entity.level.playSound(null, event.entity.x, event.entity.y, event.entity.z, 'minecraft:block.brewing_stand.brew', 'voice', 0.5, 1)

        let randomNum = Math.random()
        if (randomNum > 0.975) {
            event.entity.block.popItem('kubejs:myxomycetes_halophila')
            event.entity.discard()
        }
        if (0.94 > randomNum && randomNum > 0.915) {
            event.entity.block.popItem('kubejs:mycetozoan')
            event.entity.discard()
        }
        event.entity.discard()
    }
})