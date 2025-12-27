BlockEvents.rightClicked("supplementaries:cage", event => {
    if (event.block.entityData?.MobHolder?.EntityData?.id != "minecraft:chicken") { return }
    if (event.item.id != "kubejs:french_fries") { return }
    event.block.popItemFromFace("minecraft:egg", event.facing)
    event.block.level.playSound(null, event.block.x, event.block.y, event.block.z, "minecraft:entity.player.burp", "blocks", 0.2, 1.1)
    event.item.shrink(1)
})
BlockEvents.rightClicked("supplementaries:cage", event => {
    if (event.block.entityData?.MobHolder?.EntityData?.id != "minecraft:cow") { return }
    if (event.item.id != "minecraft:bucket") { return }
    event.block.level.playSound(null, event.block.x, event.block.y, event.block.z, "minecraft:entity.cow.milk", "blocks", 1, 1)
    event.item.shrink(1)
    event.player.give(Item.of('minecraft:milk_bucket'))
})