EntityJSEvents.spawnPlacement(event => {
    event.replace('minecraft:slime', 'on_ground', 'world_surface', (entity, levelaccesor, pos, random) => {
        return (levelaccesor.level.dimension == 'dut:slimeria')
    })
})
