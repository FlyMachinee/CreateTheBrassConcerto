ServerEvents.recipes(event => {
    //event.remove({output: '',not:{mod:'kubejs'}})
    //event.remove({id: ''})
    //event.remove({input: ''})
    //event.custom()
    function Logs(i) {
        event.custom({
            "type": "vintageimprovements:turning",
            "ingredients": [
                { "item": "createdieselgenerators:chip_wood_block" }
            ],
            "results": [
                { "item": "minecraft:" + i + "_log" }
            ],
            "processingTime": 60
        }).id("dut_create:turning/" + i + "_log_from_woodchip")
    }
    const WoodType = [
        "spruce",
        "oak",
        "birch",
        "dark_oak",
        "jungle",
        "acacia",
        "mangrove",
        "cherry"
    ]
    for (let i of WoodType) {
        //Logs(i)
    }

    Ingredient.of('#minecraft:music_discs').itemIds.forEach(i => {
        event.custom({
            "type": "vintageimprovements:turning",
            "ingredients": [
                { "tag": 'dut_create:plates/duraplas' }
            ],
            "results": [
                { "item": i }
            ],
            "processingTime": 240
        }).id("dut_create:turning/" + i.split(':')[1])
    })
    //钻头
    event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [
            { "item": "create:industrial_iron_block" }
        ],
        "results": [
            { "item": "createoreexcavation:drill" }
        ],
        "processingTime": 180
    }).id("dut_create:turning/drill")
    event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [
            { "item": "minecraft:netherite_block" }
        ],
        "results": [
            { "item": "createoreexcavation:netherite_drill" }
        ],
        "processingTime": 180
    }).id("dut_create:turning/netherite_drill")
    //木桶
    event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [
            { "item": "createdieselgenerators:chip_wood_block" }
        ],
        "results": [
            { "item": "minecraft:barrel" }
        ],
        "processingTime": 60
    }).id("dut_create:turning/barrel")
    //电子管
    event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [
            { "item": "create:rose_quartz" }
        ],
        "results": [
            { "item": "create:polished_rose_quartz" }
        ],
        "processingTime": 5
    }).id("dut_create:turning/polished_rose_quartz")
    //密封液罐
    event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [
            { "item": "design_decor:industrial_plating_block" }
        ],
        "results": [
            { "item": "createdieselgenerators:canister" }
        ],
        "processingTime": 80
    }).id("dut_create:turning/canister")
    //金属支架
    event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [
            { "item": "design_decor:industrial_plating_block" }
        ],
        "results": [
            { "item": "create:metal_bracket" }
        ],
        "processingTime": 40
    }).id("dut_create:turning/metal_bracket")
    //溜槽
    event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [
            { "item": "design_decor:industrial_plating_block" }
        ],
        "results": [
            { "item": "create:chute" }
        ],
        "processingTime": 40
    }).id("dut_create:turning/chute")
    //工作盆
    event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [
            { "item": "design_decor:industrial_plating_block" }
        ],
        "results": [
            { "item": "create:basin" }
        ],
        "processingTime": 60
    }).id("dut_create:turning/basin")
    //工作盆盖板
    event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [
            { "item": "design_decor:industrial_plating_block" }
        ],
        "results": [
            { "item": "createdieselgenerators:basin_lid" }
        ],
        "processingTime": 40
    }).id("dut_create:turning/basin_lid")
    //工作盆铸造盖
    event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [
            { "item": "design_decor:industrial_plating_block" }
        ],
        "results": [
            { "item": "createbigcannons:basin_foundry_lid" }
        ],
        "processingTime": 60
    }).id("dut_create:turning/basin_foundry_lid")
    //工业齿轮
    event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [
            { "item": "design_decor:industrial_plating_block" }
        ],
        "results": [
            { "item": "design_decor:industrial_gear" }
        ],
        "processingTime": 20
    }).id("dut_create:turning/industrial_gear")
    //工业大齿轮
    event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [
            { "item": "design_decor:industrial_plating_block" }
        ],
        "results": [
            { "item": "design_decor:industrial_gear_large" }
        ],
        "processingTime": 20
    }).id("dut_create:turning/industrial_gear_large")
    //齿轮
    event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [
            { "item": "design_decor:industrial_gear" }
        ],
        "results": [
            { "item": "create:cogwheel" }
        ],
        "processingTime": 30
    }).id("dut_create:turning/cogwheel")
    //大齿轮
    event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [
            { "item": "design_decor:industrial_gear_large" }
        ],
        "results": [
            { "item": "create:large_cogwheel" }
        ],
        "processingTime": 20
    }).id("dut_create:turning/large_cogwheel")
})