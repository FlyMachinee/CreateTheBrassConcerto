ServerEvents.recipes(event => {
    function stoneCutting(item, item1, count) {
        event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": { "item": item },
            "result": item1,
            "count": count
        }).id("dut_create:stonecutting/" + item1.split(":")[1] + "_from_" + item.split(":")[1])
    }
    function stoneCuttingByTag(tag, item, count) {
        event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": { "item": tag },
            "result": item,
            "count": count
        }).id("dut_create:stonecutting/" + item.split(":")[1] + "_from_" + tag.split(":")[1])
    }
    event.remove({ id: "design_decor:crafting/zinc_lamp" })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            " A ",
            "ABA",
            " A ",
        ],
        "key": {
            "A": { "tag": "forge:nuggets/tin" },
            "B": { "item": "minecraft:glowstone_dust" }
        },
        "result": { "item": "design_decor:zinc_lamp", "count": 2 }
    }).id("dut_create:zinc_lamp")

    event.remove({ id: "design_decor:crafting/stepped_lever" })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            " C ",
            "AAA",
            "DED",
        ],
        "key": {
            "A": { "item": "create:andesite_alloy" },
            "C": { "item": "minecraft:stick" },
            "D": { "tag": "forge:nuggets/brass" },
            "E": { "item": "minecraft:redstone" }
        },
        "result": { "item": "design_decor:stepped_lever" }
    }).id("dut_create:stepped_lever")

    //黄铜锭
    event.remove({ id: "create:mixing/brass_ingot" })
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            { "tag":"forge:ingots/copper"},
            { "tag":"forge:ingots/gold"}
        ],
        "results": [
            { "item": "create:brass_ingot","count":2 }
        ]
    }).id("dut_create:brass_ingot")
    
    event.remove({ id: "create:crushing/zinc_ore" })
    event.remove({ id: "create:crushing/deepslate_zinc_ore" })
    event.remove({ id: "create:crafting/materials/raw_zinc_block" })
    event.remove({ id: "create:crafting/materials/raw_zinc" })
    event.remove({ id: "create:crafting/materials/zinc_block_from_compacting" })
    event.remove({ id: "create:crafting/materials/zinc_ingot_from_compacting" })
    event.remove({ id: "create:crafting/materials/zinc_ingot_from_decompacting" })
    event.remove({ id: "create:crafting/materials/zinc_nugget_from_decompacting" })
    event.remove({ id: "create:blasting/zinc_ingot_from_ore" })
    event.remove({ id: "create:smelting/zinc_ingot_from_crushed" })
    event.remove({ id: "create:smelting/zinc_ingot_from_ore" })
    event.remove({ id: "create:smelting/zinc_ingot_from_raw_ore" })
    event.remove({ id: "createaddition:pressing/zinc_ingot" })
    event.remove({ id: "vintageimprovements:rolling/zinc_ingot" })
    event.remove({ id: "vintageimprovements:rolling/zinc_plate" })


    event.remove({ id: "create:asurine_from_stone_types_asurine_stonecutting" })
    stoneCuttingByTag("#create:stone_types/asurine", "kubejs:new_asurine", 1)

    event.remove({ id: "design_decor:item_application/millstones/asurine_millstone" })
    event.remove({ id: "design_decor:item_application/crushing_wheels/asurine_crushing_wheel" })
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "create:millstone" },
      { "tag": "create:stone_types/asurine" }
    ],
    "results": [{ "item": "design_decor:asurine_millstone" }]
  }).id("dut_create:deploying/asurine_millstone")
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "create:crushing_wheel" },
      { "tag": "create:stone_types/asurine" }
    ],
    "results": [{ "item": "design_decor:asurine_crushing_wheel" }]
  }).id("dut_create:deploying/asurine_crushing_wheel")
    event.remove({ id: "design_decor:stonecutting/cyllinder/zinc_cyllinder" })
    event.remove({ id: "design_decor:stonecutting/blank_sign" })
    stoneCutting("create:andesite_alloy", "design_decor:blank_sign", 1)

    event.remove({ id: "create_enchantment_industry:crafting/experience_rotor" })
    event.remove({ id: "create_enchantment_industry:compat/sophisticatedcore/mixing/experience_conversion" })
    event.remove({ id: "create_connected:crafting/palettes/copycat_block_from_slabs" })
    event.remove({ id: "create_connected:crafting/palettes/copycat_block" })
    stoneCutting("create:andesite_alloy", "create_connected:copycat_block", 1)
    event.remove({ id: "create_connected:crafting/palettes/copycat_beam" })
    stoneCutting("create:andesite_alloy", "create_connected:copycat_beam", 4)
    event.remove({ id: "create_connected:crafting/palettes/copycat_slab" })
    event.remove({ id: "create_connected:crafting/palettes/copycat_slab_from_beams" })
    event.remove({ id: "create_connected:crafting/palettes/copycat_slab_from_panels" })
    event.remove({ id: "create_connected:crafting/palettes/copycat_slab_from_steps" })
    stoneCutting("create:andesite_alloy", "create_connected:copycat_slab", 2)
    event.remove({ id: "create_connected:crafting/palettes/copycat_vertical_step" })
    event.remove({ id: "create_connected:crafting/palettes/copycat_vertical_step_from_conversion" })
    stoneCutting("create:andesite_alloy", "create_connected:copycat_vertical_step", 4)
    event.remove({ id: "create_connected:crafting/palettes/copycat_stairs" })
    stoneCutting("create:andesite_alloy", "create_connected:copycat_stairs", 1)
    event.remove({ id: "create_connected:crafting/palettes/copycat_fence" })
    stoneCutting("create:andesite_alloy", "create_connected:copycat_fence", 1)
    event.remove({ id: "create_connected:crafting/palettes/copycat_fence_gate" })
    stoneCutting("create:andesite_alloy", "create_connected:copycat_fence_gate", 1)
    event.remove({ id: "create_connected:crafting/palettes/copycat_wall" })
    stoneCutting("create:andesite_alloy", "create_connected:copycat_wall", 1)
    event.remove({ id: "create_connected:crafting/palettes/copycat_board" })
    stoneCutting("create:andesite_alloy", "create_connected:copycat_board", 8)
    event.remove({ id: "create_connected:crafting/palettes/copycat_box" })
    stoneCutting("create:andesite_alloy", "create_connected:copycat_box", 1)
    event.remove({ id: "create_connected:crafting/palettes/copycat_catwalk" })
    stoneCutting("create:andesite_alloy", "create_connected:copycat_catwalk", 2)
    event.remove({ id: "create:copycat_panel_from_ingots_zinc_stonecutting" })
    stoneCutting("create:andesite_alloy", "create:copycat_panel", 4)
    event.remove({ id: "create:copycat_step_from_ingots_zinc_stonecutting" })
    event.remove({ id: "create_connected:crafting/palettes/copycat_step_from_conversion" })
    stoneCutting("create:andesite_alloy", "create:copycat_step", 4)

    event.remove({ id: "design_decor:stonecutting/metals/zinc/screw" })
    stoneCutting("kubejs:new_zinc_ingot", "design_decor:zinc_screw", 4)
    event.remove({ id: "design_decor:stonecutting/metals/zinc/bolt" })
    stoneCutting("kubejs:new_zinc_ingot", "design_decor:zinc_bolt", 4)
    event.remove({ id: "design_decor:stonecutting/metals/zinc/catwalk" })
    stoneCutting("kubejs:new_zinc_ingot", "design_decor:zinc_catwalk", 4)
    event.remove({ id: "design_decor:stonecutting/metals/zinc/railing" })
    stoneCutting("kubejs:new_zinc_ingot", "design_decor:zinc_railing", 4)
    event.remove({ id: "design_decor:stonecutting/zinc_floor" })
    stoneCutting("kubejs:new_zinc_ingot", "design_decor:zinc_floor", 4)
    event.remove({ id: "design_decor:stonecutting/chain/zinc_large_chain" })
    stoneCutting("kubejs:new_zinc_ingot", "design_decor:zinc_large_chain", 4)

})
ServerEvents.tags('item', event => {
    event.add("dut_create:craftnugget", ["kubejs:tin_nugget", "minecraft:iron_nugget"])
})