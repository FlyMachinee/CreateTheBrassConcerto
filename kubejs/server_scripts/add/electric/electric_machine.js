ServerEvents.recipes(event => {
    //太阳能板
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "create:brass_casing" },
        "results": [
            { "item": "kubejs:solar_panel", "count": 2 }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_brass_box" },
                    { "item": "kubejs:circuit_board" }
                ],
                "results": [{ "item": "kubejs:incomplete_brass_box" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_brass_box" },
                    { "item": "kubejs:circuit_board" }
                ],
                "results": [{ "item": "kubejs:incomplete_brass_box" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_brass_box" },
                    { "item": "createaddition:capacitor" }
                ],
                "results": [{ "item": "kubejs:incomplete_brass_box" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_brass_box" },
                    { "tag": "dut_create:plates/polymer" }
                ],
                "results": [{ "item": "kubejs:incomplete_brass_box" }]
            },
            {
                "type": "create:pressing",
                "ingredients": [{ "item": "kubejs:incomplete_brass_box" }],
                "results": [{ "item": "kubejs:incomplete_brass_box" }]
            }
        ],
        "transitionalItem": { "item": "kubejs:incomplete_brass_box" }
    }).id("dut_create:solar_panel")
    //太阳能板-石墨烯
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "create:brass_casing" },
        "results": [
            { "item": "kubejs:solar_panel", "count": 6 }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_brass_box" },
                    { "item": "kubejs:magenta_circuit_board" }
                ],
                "results": [{ "item": "kubejs:incomplete_brass_box" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_brass_box" },
                    { "tag": "forge:plates/tin" }
                ],
                "results": [{ "item": "kubejs:incomplete_brass_box" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_brass_box" },
                    { "item": "kubejs:graphene_coil" }
                ],
                "results": [{ "item": "kubejs:incomplete_brass_box" }]
            }
        ],
        "transitionalItem": { "item": "kubejs:incomplete_brass_box" }
    }).id("dut_create:solar_panel_from_graphene_coil")
    //电池插槽
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "ADA",
            "ABA",
            " C "
        ],
        "key": {
            "A": { "item": "createaddition:copper_spool" },
            "B": { "item": "createaddition:capacitor" },
            "C": { "item": "create:andesite_casing" },
            "D": { "item": "kubejs:circuit_board" }
        },
        "result": { "item": "kubejs:battery_slot" }
    }).id("dut_create:battery_slot")
    //碳素电极
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidOutput": 0,
        "heatRequirement": "heated",
        "ingredients": [
            { "amount": 500, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:awkward" }},
            { "item": "kubejs:graphene_coil"},
            { "tag": "forge:plates/tin"},
            { "tag": "forge:plates/tin"},
            { "tag": "forge:plates/tin"},
            { "tag": "forge:plates/tin"}
        ],
        "results": [{ "fluid": "kubejs:carbon_dioxide", "amount": 250 },
        { "item": "kubejs:carbon_electrode","count":6 }],
        "processingTime": 50
    }).id('dut_create:carbon_electrode')
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidOutput": 0,
        "heatRequirement": "heated",
        "ingredients": [
            { "amount": 500, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:awkward" }},
            { "item": "kubejs:graphite"},
            { "item": "kubejs:graphite"},
            { "item": "kubejs:graphite"},
            { "item": "kubejs:graphite"},
            { "tag": "forge:plates/tin"},
            { "tag": "forge:plates/tin"}
        ],
        "results": [{ "fluid": "kubejs:carbon_dioxide", "amount": 250 },
        { "item": "kubejs:carbon_electrode","count":1 }],
        "processingTime": 50
    }).id('dut_create:carbon_electrode1')
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidOutput": 0,
        "heatRequirement": "heated",
        "ingredients": [
            { "amount": 500, "fluid": "kubejs:aluminum"},
            { "item": "kubejs:graphene_coil"}
        ],
        "results": [{ "fluid": "kubejs:carbon_dioxide", "amount": 250 },
        { "item": "kubejs:carbon_electrode","count":8 }],
        "processingTime": 50
    }).id('dut_create:carbon_electrode2')
    //大型电解池
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "ABA",
            "CDC",
            "EFE"
        ],
        "key": {
            "A": { "item": "createaddition:large_connector" },
            "B": { "item": "createaddition:gold_spool" },
            "C": { "tag": "forge:ingots/industrial_iron" },
            "D": { "item": "create:fluid_tank" },
            "E": { "item": "createaddition:modular_accumulator" },
            "F": { "item": "createaddition:tesla_coil" }
        },
        "result": { "item": "kubejs:electrolytic_cell" }
    }).id("dut_create:electrolytic_cell")
    //蒸汽发电机
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "ABA",
            "CDC",
            "EEE"
        ],
        "key": {
            "A": { "tag": "forge:plates/brass"  },
            "B": { "item": "create:flywheel" },
            "C": { "item": "kubejs:magenta_circuit_board" },
            "D": { "item": "createaddition:alternator" },
            "E": {"tag": "forge:storage_blocks/tin"  }
        },
        "result": { "item": "kubejs:steam_generator" }
    }).id("dut_create:steam_generator")
})