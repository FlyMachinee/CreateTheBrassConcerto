ServerEvents.recipes(event => {   
    //孢子提取
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": "kubejs:red_mushroom_cap_piece" },
            [{ "item": "create:andesite_alloy" },{"item":"kubejs:industrial_iron_nugget"}]
        ],
        "processingTime": 60,
        "results": [
            { "fluid": "kubejs:red_mushroom_spore", "amount": 50 }
        ]
    }).id('dut_create:red_mushroom_spore')
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": "kubejs:brown_mushroom_cap_piece" },
            [{ "item": "create:andesite_alloy" },{"item":"kubejs:industrial_iron_nugget"}]
        ],
        "processingTime": 60,
        "results": [
            { "fluid": "kubejs:brown_mushroom_spore", "amount": 50 }
        ]
    }).id('dut_create:brown_mushroom_spore')
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": "kubejs:red_mushroom_cap_piece" },
            { "item": "kubejs:red_mushroom_cap_piece" },
            { "item": "kubejs:red_mushroom_cap_piece" },
            { "item": "kubejs:red_mushroom_cap_piece" },
            { "item": "kubejs:aluminum_slag" }
        ],
        "processingTime": 60,
        "results": [
            { "fluid": "kubejs:red_mushroom_spore", "amount": 250 }
        ]
    }).id('dut_create:red_mushroom_spore/aluminum')
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": "kubejs:brown_mushroom_cap_piece" },
            { "item": "kubejs:brown_mushroom_cap_piece" },
            { "item": "kubejs:brown_mushroom_cap_piece" },
            { "item": "kubejs:brown_mushroom_cap_piece" },
            { "item": "kubejs:aluminum_slag" }
        ],
        "processingTime": 60,
        "results": [
            { "fluid": "kubejs:brown_mushroom_spore", "amount": 250 }
        ]
    }).id('dut_create:brown_mushroom_spore/aluminum')
    //蘑菇分馏
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": "kubejs:red_mushroom_cap_piece" },
            { "fluid": "kubejs:air_fluid", "amount": 500 }
        ],
        "processingTime": 20,
        "results": [
            { "fluid": "kubejs:nitrogen", "amount": 400 }
        ]
    }).id('dut_create:nitrogen_fermentable')
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": "kubejs:brown_mushroom_cap_piece" },
            { "fluid": "kubejs:air_fluid", "amount": 500 }
        ],
        "processingTime": 20,
        "results": [
            { "fluid": "kubejs:oxygen", "amount": 100 }
        ]
    }).id('dut_create:oxygen_fermentable')
    //分离盐水
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": "kubejs:red_mushroom_cap_piece" },
            { "fluid": "kubejs:saline_water", "amount": 500 }
        ],
        "processingTime": 20,
        "results": [
            { "item": "kubejs:salt", "count": 4 },
            { "fluid": "minecraft:water", "amount": 500 }
        ]
    }).id('dut_create:salt_fermentable')
    //产硫
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": "kubejs:brown_mushroom_cap_piece" },
            { "item": "kubejs:brown_mushroom_cap_piece" },
            { "item": "kubejs:brown_mushroom_cap_piece" },
            { "item": "kubejs:brown_mushroom_cap_piece" },
            { "amount": 250, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:awkward" } }
        ],
        "processingTime": 20,
        "results": [
            { "item": "createloveandwar:sulphur", "count": 2 }
        ]
    }).id('dut_create:sulphur_fermentable')
    //硅板
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "minecraft:sand" },
            { "item": "minecraft:sand" },
            { "item": "minecraft:sand" },
            { "item": "minecraft:sand" },
            { "fluid": "kubejs:brown_mushroom_spore", "amount": 250 }
        ],
        "processingTime": 60,
        "results": [
            { "item": "kubejs:silicon_plate", "count": 16 },
        ]
    }).id('dut_create:silicon_plate_fermentable')
    //石英
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "minecraft:sand" },
            { "item": "minecraft:sand" },
            { "item": "minecraft:sand" },
            { "item": "minecraft:sand" },
            { "fluid": "kubejs:red_mushroom_spore", "amount": 250 }
        ],
        "processingTime": 60,
        "results": [
            { "item": "minecraft:quartz", "count": 32 },
        ]
    }).id('dut_create:quartz_fermentable')
    //菌类塑料
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "kubejs:stem_silk" },
            { "item": "kubejs:stem_silk" },
            { "item": "kubejs:stem_silk" },
            { "item": "kubejs:stem_silk" },
            { "fluid": "kubejs:brown_mushroom_spore", "amount": 250 },
            { "fluid": "kubejs:red_mushroom_spore", "amount": 250 }
        ],
        "processingTime": 60,
        "results": [
            { "item": "kubejs:polymer_ingot", "count": 2 },
        ]
    }).id('dut_create:polymer_fermentable')

    //磨制玫瑰石英
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "minecraft:sand" },
            { "fluid": "kubejs:red_spore", "amount": 500 }
        ],
        "processingTime": 60,
        "results": [
            { "item": "create:polished_rose_quartz", "count": 2 },
        ]
    }).id('dut_create:polished_rose_quartz_fermentable')
})
ServerEvents.recipes(event => {   
    //红色孢子
    event.custom({
        "type": "create:mixing",
        "heatRequirement":"heated",
        "ingredients": [
            { "item": "kubejs:sulphur" },
            { "item": "kubejs:red_mushroom_cap_piece", "count": 5 }
        ],
        "results": [
            { "fluid": "kubejs:red_spore", "amount": 250 }
        ]
    }).id("dut_create:slimeria/start/red_from_cap")
    //绿色孢子
    event.custom({
        "type": "create:mixing",
        "heatRequirement":"heated",
        "ingredients": [
            { "item": "kubejs:salt" },
            { "item": "kubejs:brown_mushroom_cap_piece", "count": 5 }
        ],
        "results": [
            { "fluid": "kubejs:green_spore", "amount": 200 },
            { "fluid": "kubejs:red_spore", "amount": 300 }
        ]
    }).id("dut_create:slimeria/start/green_from_cap")
    //蓝色孢子
    event.custom({
        "type": "create:mixing",
        "heatRequirement":"heated",
        "ingredients": [
            { "item": "minecraft:clay" },
            { "item": "kubejs:strophar_cap_piece", "count": 5 }
        ],
        "results": [
            { "fluid": "kubejs:red_spore", "amount": 300 },
            { "fluid": "kubejs:blue_spore", "amount": 200 }
        ]
    }).id("dut_create:slimeria/start/blue_from_strophar")
    event.custom({
        "type": "create:mixing",
        "heatRequirement":"heated",
        "ingredients": [
            { "item": "minecraft:clay" },
            { "item": "kubejs:aeronos_cap_piece", "count": 5 }
        ],
        "results": [
            { "fluid": "kubejs:green_spore", "amount": 300 },
            { "fluid": "kubejs:blue_spore", "amount": 200 }
        ]
    }).id("dut_create:slimeria/start/blue_from_aeronos")
})