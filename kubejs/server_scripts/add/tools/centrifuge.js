
//右键切换管道箱开口，shift切换对面
BlockEvents.rightClicked("vintageimprovements:centrifuge", event => {
    let basin = event.block.entityData.Basins
    if (basin != 4 || event.hand != "MAIN_HAND" || event.player.mainHandItem.id != "create:wrench") { return }
    let redstone = event.block.entityData.RedstoneApp
    let Pos = event.block.pos
    event.entity.swing()
    event.block.level.playSound(null, event.block.x, event.block.y, event.block.z, "minecraft:block.copper.place", "blocks", 0.6, 1.2)
    if (redstone == 0) {
        event.block.level.server.runCommandSilent(`/execute in ${event.block.level.dimension} run data modify block ${Pos.x} ${Pos.y} ${Pos.z} RedstoneApp set value 1b`)
        return
    }
    event.block.level.server.runCommandSilent(`/execute in ${event.block.level.dimension} run data modify block ${Pos.x} ${Pos.y} ${Pos.z} RedstoneApp set value 0b`)
})