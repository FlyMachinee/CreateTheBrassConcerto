ServerEvents.recipes(event => {
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_pickaxe" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_axe" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_sword" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_hoe" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_shovel" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_helmet" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_chestplate" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_leggings" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_boots" })

    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_pickaxe" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_axe" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_sword" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_hoe" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_shovel" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_helmet" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_chestplate" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_leggings" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_boots" })

    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_pickaxe" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_axe" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_sword" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_hoe" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_shovel" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_helmet" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_chestplate" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_leggings" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_boots" })

    event.remove({ id: "minecraft:wooden_hoe" })
    event.remove({ id: "minecraft:wooden_shovel" })
    event.remove({ id: "minecraft:wooden_sword" })

    event.remove({ id: "minecraft:golden_axe" })
    event.remove({ id: "minecraft:golden_pickaxe" })
    event.remove({ id: "minecraft:golden_hoe" })
    event.remove({ id: "minecraft:golden_shovel" })
    event.remove({ id: "minecraft:golden_sword" })
    event.remove({ id: "minecraft:golden_helmet" })
    event.remove({ id: "minecraft:golden_chestplate" })
    event.remove({ id: "minecraft:golden_leggings" })
    event.remove({ id: "minecraft:golden_boots" })

    event.remove({ id: "minecraft:iron_axe" })
    event.remove({ id: "minecraft:iron_pickaxe" })
    event.remove({ id: "minecraft:iron_hoe" })
    event.remove({ id: "minecraft:iron_shovel" })
    event.remove({ id: "minecraft:iron_sword" })
    event.remove({ id: "minecraft:iron_helmet" })
    event.remove({ id: "minecraft:iron_chestplate" })
    event.remove({ id: "minecraft:iron_leggings" })
    event.remove({ id: "minecraft:iron_boots" })

    event.remove({ id: "minecraft:stone_axe" })
    event.remove({ id: "minecraft:stone_pickaxe" })
    event.remove({ id: "minecraft:stone_hoe" })
    event.remove({ id: "minecraft:stone_shovel" })
    event.remove({ id: "minecraft:stone_sword" })

    event.remove({ id: "minecraft:leather_helmet" })
    event.remove({ id: "minecraft:leather_chestplate" })
    event.remove({ id: "minecraft:leather_leggings" })
    event.remove({ id: "minecraft:leather_boots" })

    event.remove({ id: "minecraft:chainmail_helmet" })
    event.remove({ id: "minecraft:chainmail_chestplate" })
    event.remove({ id: "minecraft:chainmail_leggings" })
    event.remove({ id: "minecraft:chainmail_boots" })


    event.remove({ id: "createloveandwar:tungsten_axe" })
    event.remove({ id: "createloveandwar:tungsten_pickaxe" })
    event.remove({ id: "createloveandwar:tungsten_hoe" })
    event.remove({ id: "createloveandwar:tungsten_shovel" })
    event.remove({ id: "createloveandwar:tungsten_sword" })
    event.remove({ id: "createloveandwar:tungsten_helmet" })
    event.remove({ id: "createloveandwar:tungsten_chestplate" })
    event.remove({ id: "createloveandwar:tungsten_leggings" })
    event.remove({ id: "createloveandwar:tungsten_boots" })

    event.remove({ id: "minecraft:diamond_axe" })
    event.remove({ id: "minecraft:diamond_pickaxe" })
    event.remove({ id: "minecraft:diamond_hoe" })
    event.remove({ id: "minecraft:diamond_shovel" })
    event.remove({ id: "minecraft:diamond_sword" })
    event.remove({ id: "minecraft:diamond_helmet" })
    event.remove({ id: "minecraft:diamond_chestplate" })
    event.remove({ id: "minecraft:diamond_leggings" })
    event.remove({ id: "minecraft:diamond_boots" })
})
const UseableDrawersList = [
    "storagedrawers:spruce_full_drawers_1", "storagedrawers:spruce_full_drawers_2", "storagedrawers:spruce_full_drawers_4", "fluiddrawerslegacy:fluiddrawer", "fluiddrawerslegacy:fluiddrawer_2", "fluiddrawerslegacy:fluiddrawer_4", "storagedrawers:framed_compacting_drawers_3", "storagedrawers:framed_compacting_drawers_2", "storagedrawers:compacting_drawers_3", "storagedrawers:compacting_drawers_2", "storagedrawers:framed_full_drawers_1", "storagedrawers:framed_full_drawers_2", "storagedrawers:framed_full_drawers_4"
]
for (let i of UseableDrawersList) {
    BlockEvents.broken(i, event => {
        if (!event.player.shiftKeyDown) {
            event.player.setStatusMessage(Text.translate("kubejs.message.drawers1"))
            event.cancel()
        }
    })
}


/*
const Backpacks = [
    'sophisticatedbackpacks:backpack',
    'sophisticatedbackpacks:copper_backpack',
    'sophisticatedbackpacks:iron_backpack',
    'sophisticatedbackpacks:gold_backpack',
    'sophisticatedbackpacks:diamond_backpack',
    'sophisticatedbackpacks:netherite_backpack'
]
for (let i of Backpacks) {
    BlockEvents.placed(i, event => {
        event.cancel()
    })
}
const AllDrawersList = [
    "storagedrawers:oak_full_drawers_1", "storagedrawers:oak_full_drawers_2", "storagedrawers:oak_full_drawers_4", "storagedrawers:oak_half_drawers_1", "storagedrawers:oak_half_drawers_2", "storagedrawers:oak_half_drawers_4", "storagedrawers:spruce_full_drawers_1", "storagedrawers:spruce_full_drawers_2", "storagedrawers:spruce_full_drawers_4", "storagedrawers:spruce_half_drawers_1", "storagedrawers:spruce_half_drawers_2", "storagedrawers:spruce_half_drawers_4", "storagedrawers:birch_full_drawers_1", "storagedrawers:birch_full_drawers_2", "storagedrawers:birch_full_drawers_4", "storagedrawers:birch_half_drawers_1", "storagedrawers:birch_half_drawers_2", "storagedrawers:birch_half_drawers_4", "storagedrawers:jungle_full_drawers_1", "storagedrawers:jungle_full_drawers_2", "storagedrawers:jungle_full_drawers_4", "storagedrawers:jungle_half_drawers_1", "storagedrawers:jungle_half_drawers_2", "storagedrawers:jungle_half_drawers_4", "storagedrawers:acacia_full_drawers_1", "storagedrawers:acacia_full_drawers_2", "storagedrawers:acacia_full_drawers_4", "storagedrawers:acacia_half_drawers_1", "storagedrawers:acacia_half_drawers_2", "storagedrawers:acacia_half_drawers_4", "storagedrawers:dark_oak_full_drawers_1", "storagedrawers:dark_oak_full_drawers_2", "storagedrawers:dark_oak_full_drawers_4", "storagedrawers:dark_oak_half_drawers_1", "storagedrawers:dark_oak_half_drawers_2", "storagedrawers:dark_oak_half_drawers_4", "storagedrawers:mangrove_full_drawers_1", "storagedrawers:mangrove_full_drawers_2", "storagedrawers:mangrove_full_drawers_4", "storagedrawers:mangrove_half_drawers_1", "storagedrawers:mangrove_half_drawers_2", "storagedrawers:mangrove_half_drawers_4", "storagedrawers:cherry_full_drawers_1", "storagedrawers:cherry_full_drawers_2", "storagedrawers:cherry_full_drawers_4", "storagedrawers:cherry_half_drawers_1", "storagedrawers:cherry_half_drawers_2", "storagedrawers:cherry_half_drawers_4", "storagedrawers:bamboo_full_drawers_1", "storagedrawers:bamboo_full_drawers_2", "storagedrawers:bamboo_full_drawers_4", "storagedrawers:bamboo_half_drawers_1", "storagedrawers:bamboo_half_drawers_2", "storagedrawers:bamboo_half_drawers_4", "storagedrawers:crimson_full_drawers_1", "storagedrawers:crimson_full_drawers_2", "storagedrawers:crimson_full_drawers_4", "storagedrawers:crimson_half_drawers_1", "storagedrawers:crimson_half_drawers_2", "storagedrawers:crimson_half_drawers_4", "storagedrawers:warped_full_drawers_1", "storagedrawers:warped_full_drawers_2", "storagedrawers:warped_full_drawers_4", "storagedrawers:warped_half_drawers_1", "storagedrawers:warped_half_drawers_2", "storagedrawers:warped_half_drawers_4", "fluiddrawerslegacy:fluiddrawer", "fluiddrawerslegacy:fluiddrawer_half", "fluiddrawerslegacy:fluiddrawer_2", "fluiddrawerslegacy:fluiddrawer_2_half", "fluiddrawerslegacy:fluiddrawer_4", "fluiddrawerslegacy:fluiddrawer_4_half", "storagedrawers:compacting_drawers_3", "storagedrawers:compacting_drawers_2", "storagedrawers:framed_compacting_drawers_3", "storagedrawers:framed_compacting_half_drawers_2", "storagedrawers:framed_compacting_half_drawers_3", "storagedrawers:framed_full_drawers_1", "storagedrawers:framed_full_drawers_2", "storagedrawers:framed_full_drawers_4", "storagedrawers:framed_half_drawers_1", "storagedrawers:framed_half_drawers_2", "storagedrawers:framed_half_drawers_4"
]
const DrawersList = [
    "storagedrawers:oak_full_drawers_1", "storagedrawers:oak_full_drawers_2", "storagedrawers:oak_full_drawers_4", "storagedrawers:oak_half_drawers_1", "storagedrawers:oak_half_drawers_2", "storagedrawers:oak_half_drawers_4", "storagedrawers:spruce_full_drawers_1", "storagedrawers:spruce_full_drawers_2", "storagedrawers:spruce_full_drawers_4", "storagedrawers:spruce_half_drawers_1", "storagedrawers:spruce_half_drawers_2", "storagedrawers:spruce_half_drawers_4", "storagedrawers:birch_full_drawers_1", "storagedrawers:birch_full_drawers_2", "storagedrawers:birch_full_drawers_4", "storagedrawers:birch_half_drawers_1", "storagedrawers:birch_half_drawers_2", "storagedrawers:birch_half_drawers_4", "storagedrawers:jungle_full_drawers_1", "storagedrawers:jungle_full_drawers_2", "storagedrawers:jungle_full_drawers_4", "storagedrawers:jungle_half_drawers_1", "storagedrawers:jungle_half_drawers_2", "storagedrawers:jungle_half_drawers_4", "storagedrawers:acacia_full_drawers_1", "storagedrawers:acacia_full_drawers_2", "storagedrawers:acacia_full_drawers_4", "storagedrawers:acacia_half_drawers_1", "storagedrawers:acacia_half_drawers_2", "storagedrawers:acacia_half_drawers_4", "storagedrawers:dark_oak_full_drawers_1", "storagedrawers:dark_oak_full_drawers_2", "storagedrawers:dark_oak_full_drawers_4", "storagedrawers:dark_oak_half_drawers_1", "storagedrawers:dark_oak_half_drawers_2", "storagedrawers:dark_oak_half_drawers_4", "storagedrawers:mangrove_full_drawers_1", "storagedrawers:mangrove_full_drawers_2", "storagedrawers:mangrove_full_drawers_4", "storagedrawers:mangrove_half_drawers_1", "storagedrawers:mangrove_half_drawers_2", "storagedrawers:mangrove_half_drawers_4", "storagedrawers:cherry_full_drawers_1", "storagedrawers:cherry_full_drawers_2", "storagedrawers:cherry_full_drawers_4", "storagedrawers:cherry_half_drawers_1", "storagedrawers:cherry_half_drawers_2", "storagedrawers:cherry_half_drawers_4", "storagedrawers:bamboo_full_drawers_1", "storagedrawers:bamboo_full_drawers_2", "storagedrawers:bamboo_full_drawers_4", "storagedrawers:bamboo_half_drawers_1", "storagedrawers:bamboo_half_drawers_2", "storagedrawers:bamboo_half_drawers_4", "storagedrawers:crimson_full_drawers_1", "storagedrawers:crimson_full_drawers_2", "storagedrawers:crimson_full_drawers_4", "storagedrawers:crimson_half_drawers_1", "storagedrawers:crimson_half_drawers_2", "storagedrawers:crimson_half_drawers_4", "storagedrawers:warped_full_drawers_1", "storagedrawers:warped_full_drawers_2", "storagedrawers:warped_full_drawers_4", "storagedrawers:warped_half_drawers_1", "storagedrawers:warped_half_drawers_2", "storagedrawers:warped_half_drawers_4", "storagedrawers:framed_full_drawers_1", "storagedrawers:framed_full_drawers_2", "storagedrawers:framed_full_drawers_4", "storagedrawers:framed_half_drawers_1", "storagedrawers:framed_half_drawers_2", "storagedrawers:framed_half_drawers_4"
]
const FluidDrawersList = [
    "fluiddrawerslegacy:fluiddrawer", "fluiddrawerslegacy:fluiddrawer_half", "fluiddrawerslegacy:fluiddrawer_2", "fluiddrawerslegacy:fluiddrawer_2_half", "fluiddrawerslegacy:fluiddrawer_4", "fluiddrawerslegacy:fluiddrawer_4_half"
]
const CompactingDrawersList = [
    "storagedrawers:compacting_drawers_3", "storagedrawers:framed_compacting_drawers_2", "storagedrawers:framed_compacting_drawers_3", "storagedrawers:framed_compacting_half_drawers_2", "storagedrawers:framed_compacting_half_drawers_3"
]
for (let i of DrawersList) {
    BlockEvents.broken(i, event => {
        let drawer = event.block.entityData?.Drawers
        let hasItem = 0
        for (let i of drawer) {
            if (Number(i?.Count) != 0 && i?.Count != undefined) {
                hasItem = 1
                break
            }
        }
        if (hasItem == 1) {
            event.player.setStatusMessage(Text.translate("kubejs.message.drawers"))
            event.cancel()
        }
    })
}
for (let i of CompactingDrawersList) {
    BlockEvents.broken(i, event => {
        let drawer = event.block.entityData?.Drawers
        if (Number(drawer?.Count) != 0 && drawer?.Count != undefined) {
            event.player.setStatusMessage(Text.translate("kubejs.message.drawers"))
            event.cancel()
        }
    })
}
for (let i of FluidDrawersList) {
    BlockEvents.broken(i, event => {
        let tank = event.block.entityData?.tanks
        let hasFluid = 0
        for (let i of tank) {
            if (Number(i?.Amount) != 0 && i?.Amount != undefined) {
                hasFluid = 1
                break
            }
        }
        if (hasFluid == 1) {
            event.player.setStatusMessage(Text.translate("kubejs.message.drawers"))
            event.cancel()
        }
    })
}
*/
