EntityEvents.spawned("minecraft:slime", event => {
    if (event.entity.block.getBlockLight() > 0 && event.entity.block.dimension == "dut:slimeria") {
        event.cancel()
    }
})
EntityEvents.spawned("minecraft:magma_cube", event => {
    if (event.entity.block.getBlockLight() > 0 && event.entity.block.dimension == "dut:slimeria") {
        event.cancel()
    }
})