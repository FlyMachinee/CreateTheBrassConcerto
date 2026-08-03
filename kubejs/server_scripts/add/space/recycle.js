ServerEvents.recipes(event => {

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "kubejs:scrap" },
        "results": [
            { "chance": 0.125, "item": "kubejs:io_mechanism" },
            { "chance": 0.125, "item": "kubejs:salt" },
            { "chance": 0.5, "item": "kubejs:empty_can" },
            { "chance": 0.25, "item": "kubejs:rubber" }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "vintageimprovements:vibrating",
                "ingredients": [{ "item": "kubejs:scrap" }],
                "results": [
                    { "item": "kubejs:scrap" }
                ],
                "processingTime": 5
            }
        ],
        "transitionalItem": { "item": "kubejs:scrap" }
    }).id("dut_create:recycle/scrap_vibrating")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "kubejs:scrap_1" },
        "results": [
            { "chance": 0.125, "item": "kubejs:circuit_board" },
            { "chance": 0.125, "item": "ad_astra:steel_nugget" },
            { "chance": 0.5, "item": "kubejs:silicon_plate" },
            { "chance": 0.25, "item": "minecraft:redstone" }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "vintageimprovements:vibrating",
                "ingredients": [{ "item": "kubejs:scrap_1" }],
                "results": [
                    { "item": "kubejs:scrap_1" }
                ],
                "processingTime": 5
            }
        ],
        "transitionalItem": { "item": "kubejs:scrap_1" }
    }).id("dut_create:recycle/scrap_1_vibrating")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "kubejs:scrap_2" },
        "results": [
            { "chance": 0.125, "item": "kubejs:magenta_circuit_board" },
            { "chance": 0.125, "item": "kubejs:diorite_alloy","count":4 },
            { "chance": 0.5, "item": "create:sturdy_sheet","count":2 },
            { "chance": 0.25, "item": "kubejs:empty_parts_box" }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "vintageimprovements:vibrating",
                "ingredients": [{ "item": "kubejs:scrap_2" }],
                "results": [
                    { "item": "kubejs:scrap_2" }
                ],
                "processingTime": 5
            }
        ],
        "transitionalItem": { "item": "kubejs:scrap_2" }
    }).id("dut_create:recycle/scrap_2_vibrating")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "kubejs:scrap_3" },
        "results": [
            { "chance": 0.125, "item": "kubejs:lime_circuit_board" },
            { "chance": 0.25, "item": "kubejs:brass_parts_box" },
            { "chance": 0.5, "item": "ad_astra:steel_nugget" },
            { "chance": 0.125, "item": "kubejs:fluid_mechanism" }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "vintageimprovements:vibrating",
                "ingredients": [{ "item": "kubejs:scrap_3" }],
                "results": [
                    { "item": "kubejs:scrap_3" }
                ],
                "processingTime": 5
            }
        ],
        "transitionalItem": { "item": "kubejs:scrap_3" }
    }).id("dut_create:recycle/scrap_3_vibrating")
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            { "item": "ad_astra:moon_sand" }
        ],
        "results": [
            { "chance": 0.10, "item": "kubejs:scrap" },
            { "chance": 0.10, "item": "kubejs:scrap" }
        ]
    }).id("dut_create:recycle/scrap_splash")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "ad_astra:moon_sand" },
        "results": [
            { "chance": 0.5, "item": "kubejs:salt" },
            { "chance": 0.375, "item": "kubejs:scrap" },
            { "chance": 0.125, "item": "kubejs:scrap_1" }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "vintageimprovements:vibrating",
                "ingredients": [{ "item": "ad_astra:moon_sand" }],
                "results": [
                    { "item": "ad_astra:moon_sand" }
                ],
                "processingTime": 20
            }
        ],
        "transitionalItem": { "item": "ad_astra:moon_sand" }
    }).id("dut_create:recycle/sand_vibrating")
})