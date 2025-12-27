ServerEvents.recipes(event => {
    event.custom({
        "type": "vintageimprovements:vibrating",
        "ingredients": [{ "item": "kubejs:scrap" }],
        "results": [
            { "item": "minecraft:obsidian", "chance": 0.03, "count": 2 },
            { "item": "create:rose_quartz", "chance": 0.025 },
            { "item": "create:brass_nugget", "chance": 0.25, "count": 6 },
            { "item": "create:cinder_flour", "chance": 0.15 },
            { "item": "kubejs:empty_can", "chance": 0.25 , "count": 3},
            { "item": "kubejs:industrial_iron_ingot", "chance": 0.35 },
            { "item": "kubejs:mechanical_core", "chance": 0.25, "count": 2 },
            { "item": "kubejs:rubber", "chance": 0.125, "count": 3 }
        ],
        "processingTime": 20
    }).id("dut_create:recycle/scrap")
    event.custom({
        "type": "vintageimprovements:vibrating",
        "ingredients": [{ "item": "kubejs:scrap_1" }],
        "results": [
            { "item": "design_decor:industrial_gear", "chance": 0.5, "count": 2 },
            { "item": "design_decor:industrial_gear_large", "chance": 0.5 },
            { "item": "ad_astra:steel_nugget", "chance": 0.012},
            { "item": "create:electron_tube", "chance": 0.03 },
            { "item": "kubejs:bearing", "chance": 0.1 },
            { "item": "kubejs:circuit_board", "chance": 0.02 },
            { "item": "kubejs:silicon_plate", "chance": 0.3, "count": 2 },
            { "item": "create:copper_sheet", "chance": 0.35, "count": 3 }
        ],
        "processingTime": 20
    }).id("dut_create:recycle/scrap_1")
    event.custom({
        "type": "vintageimprovements:vibrating",
        "ingredients": [{ "item": "kubejs:scrap_2" }],
        "results": [
            { "item": "minecraft:magenta_dye", "chance": 0.15 },
            { "item": "kubejs:diorite_alloy", "chance": 0.15},
            { "item": "kubejs:magenta_circuit_board", "chance": 0.02 },
            { "item": "kubejs:circuit_board", "chance": 0.05, "count": 2 },
            { "item": "kubejs:lapis_plate", "chance": 0.3, "count": 2 },
            { "item": "create:sturdy_sheet", "chance": 0.25 },
            { "item": "create:fluid_pipe", "chance": 0.1, "count": 3  },
            { "item": "create:mechanical_pump", "chance": 0.05}
        ],
        "processingTime": 20
    }).id("dut_create:recycle/scrap_2")
    event.custom({
        "type": "vintageimprovements:vibrating",
        "ingredients": [{ "item": "kubejs:scrap_3" }],
        "results": [
            { "item": "ad_astra:steel_nugget", "chance": 0.024,"count":2},
            { "item": "kubejs:lime_circuit_board", "chance": 0.015 },
            { "item": "kubejs:circuit_board", "chance": 0.03, "count": 2 },
            { "item": "kubejs:duraplas_sheet", "chance": 0.2 },
            { "item": "kubejs:graphite", "chance": 0.005 },
            { "item": "create:precision_mechanism", "chance": 0.02 },
            { "item": "kubejs:planetary_gear", "chance": 0.05 },
            { "item": "kubejs:differential", "chance": 0.02}
        ],
        "processingTime": 20
    }).id("dut_create:recycle/scrap_3")
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
        "type": "vintageimprovements:vibrating",
        "ingredients": [{ "item": "ad_astra:moon_sand" }],
        "results": [
            { "chance": 0.15, "item": "kubejs:scrap" },
            { "chance": 0.05, "item": "kubejs:scrap_1" }
        ],
        "processingTime": 20
    }).id("dut_create:recycle/scrap_vibrating")
})