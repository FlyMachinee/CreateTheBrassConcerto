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
    //锭、粒、块转换
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [{ "tag": "forge:ingots/new_zinc" }],
        "result": { "item": "kubejs:new_zinc_nugget", "count": 9 }
    }).id("dut_create:new_zinc/ingot_to_nugget")
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [{ "tag": "forge:storage_blocks/new_zinc" }],
        "result": { "item": "kubejs:new_zinc_ingot", "count": 9 }
    }).id("dut_create:new_zinc/block_to_ingot")
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            { "tag": "forge:ingots/new_zinc" },
            { "tag": "forge:ingots/new_zinc" },
            { "tag": "forge:ingots/new_zinc" },
            { "tag": "forge:ingots/new_zinc" },
            { "tag": "forge:ingots/new_zinc" },
            { "tag": "forge:ingots/new_zinc" },
            { "tag": "forge:ingots/new_zinc" },
            { "tag": "forge:ingots/new_zinc" },
            { "tag": "forge:ingots/new_zinc" }
        ],
        "result": { "item": "kubejs:new_zinc_block" }
    }).id("dut_create:new_zinc/ingot_to_block")
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            { "tag": "forge:nuggets/new_zinc" },
            { "tag": "forge:nuggets/new_zinc" },
            { "tag": "forge:nuggets/new_zinc" },
            { "tag": "forge:nuggets/new_zinc" },
            { "tag": "forge:nuggets/new_zinc" },
            { "tag": "forge:nuggets/new_zinc" },
            { "tag": "forge:nuggets/new_zinc" },
            { "tag": "forge:nuggets/new_zinc" },
            { "tag": "forge:nuggets/new_zinc" }
        ],
        "result": { "item": "kubejs:new_zinc_ingot" }
    }).id("dut_create:new_zinc/nugget_to_ingot")
    //压板
    event.custom({
        "type": "create:pressing",
        "ingredients": [{ "tag": "forge:ingots/new_zinc" }],
        "results": [{ "item": "kubejs:new_zinc_sheet" }]
    }).id("dut_create:new_zinc/get_sheet")
    //粉碎锌熔炼、洗涤
    event.custom({
        "type": "minecraft:blasting",
        "ingredient": { "item": "kubejs:new_crushed_raw_zinc" },
        "result": "kubejs:new_zinc_ingot",
        "experience": 0.1,
        "cookingtime": 100
    }).id("dut_create:new_zinc/blast")
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            { "item": "kubejs:new_crushed_raw_zinc" }
        ],
        "results": [
            { "item": "kubejs:zinc_nugget", "count": 9 }
        ]
    }).id("dut_create:new_zinc/splash")
    //杆
    event.custom({
        "type": "createaddition:rolling",
        "input": { "tag": "forge:ingots/new_zinc" },
        "result": { "item": 'vintageimprovements:zinc_rod', "count": 2 }
    }).id("dut_create:new_zinc/zinc_rod")
    //线
    event.custom({
        "type": "createaddition:rolling",
        "input": { "tag": "forge:plates/new_zinc" },
        "result": { "item": 'vintageimprovements:zinc_wire', "count": 2 }
    }).id("dut_create:new_zinc/zinc_wire")
})
ServerEvents.tags('item', event => {
    event.add("forge:ingots/new_zinc", ["kubejs:new_zinc_ingot"])
    event.add("forge:plates/new_zinc", ["kubejs:new_zinc_sheet"])
    event.add("forge:nuggets/new_zinc", ["kubejs:new_zinc_nugget"])
    event.add("forge:storage_blocks/new_zinc", ["kubejs:new_zinc_block"])
    event.add("forge:rods/new_zinc", ['vintageimprovements:zinc_rod'])
    event.add("forge:wires/new_zinc", ['vintageimprovements:zinc_wire'])
    event.add("forge:wires", ['#forge:wires/new_zinc'])
    event.add("forge:small_springs/new_zinc", ['vintageimprovements:small_zinc_spring'])
    event.add("forge:springs/new_zinc", ['vintageimprovements:zinc_spring'])
})