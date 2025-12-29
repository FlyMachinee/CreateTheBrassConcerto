ServerEvents.recipes(event => {
    //橡胶
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "heatRequirement": "heated",
        "ingredients": [
            { "fluidTag": "dut_create:ethylene", "amount": 125 },
            { "item": "kubejs:sulphur" }
        ],
        "results": [
            { "item": "kubejs:rubber", "count": 8 }
        ],
        "processingTime": 200
    }).id("dut_create:rubber")
    //经验制法
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 1,
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "kubejs:natural_gas", "amount": 500 },
            { "fluid": "create_enchantment_industry:experience", "amount": 250 }
        ],
        "results": [
            { "fluid": "kubejs:ethylene", "amount": 250 },
            { "fluid": "kubejs:hydrogen", "amount": 500 }
        ],
        "processingTime": 100
    }).id('dut_create:ethylene_from_natural_gas')
    //乙醇制法1
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 2,
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "createdieselgenerators:ethanol", "amount": 500 },
            { "fluid": "kubejs:muriatic_acid", "amount": 500 },
            { "fluid": "kubejs:caustic_soda", "amount": 500 }
        ],
        "results": [
            { "fluid": "kubejs:ethylene", "amount": 500 },
            { "fluid": "kubejs:saline_water", "amount": 500 }
        ],
        "processingTime": 400
    }).id('dut_create:ethylene_from_ethylene_and_muriatic_acid')
    //乙醇制法2
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidOutput": 2,
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "createdieselgenerators:ethanol", "amount": 1000 },
            { "fluid": "vintageimprovements:sulfuric_acid", "amount": 1000 }
        ],
        "results": [
            { "fluid": "kubejs:ethylene", "amount": 1000 },
            { "fluid": "vintageimprovements:sulfuric_acid", "amount": 750 },
            { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 250 }
        ],
        "processingTime": 500
    }).id('dut_create:ethylene_from_ethylene_and_sulfuric_acid')
    //聚乙烯
    event.remove({ input: 'createloveandwar:catalyst', not: { mod: 'kubejs' } })
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "heatRequirement": "heated",
        "ingredients": [
            { "fluidTag": "dut_create:ethylene", "amount": 1000 }
        ],
        "results": [
            { "fluid": "kubejs:polymer", "amount": 225 }
        ],
        "processingTime": 400
    }).id('dut_create:polymer')
    event.custom({
        "type": "create:compacting",
        "ingredients": [{ "fluidTag": "dut_create:polymer", "amount": 250 }],
        "results": [{ "item": "kubejs:polymer_ingot", "count": 1 }]
    }).id("dut_create:polymer_ingot")
    event.custom({
        "type": "create:cutting",
        "ingredients": [{ "tag": "dut_create:ingots/polymer" }],
        "results": [{ "item": "kubejs:polymer_sheet", "count": 2 }, { "item": "kubejs:polymer_sheet", "chance": 0.5 }]
    }).id("dut_create:polymer_sheet")
    //聚乙烯醇
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "kubejs:caustic_soda", "amount": 250 },
            { "fluid": "kubejs:polymer", "amount": 500 },
            { "fluid": "kubejs:muriatic_acid", "amount": 250 }
        ],
        "results": [
            { "item": "minecraft:sponge" }
        ],
        "processingTime": 400
    }).id('dut_create:sponge')
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "minecraft:sponge" },
            { "item": "kubejs:crushed_coal" }
        ],
        "results": [
            { "fluid": "kubejs:polymer", "amount": 125 }
        ],
        "processingTime": 400
    }).id('dut_create:sponge_to_polymer')

    //聚氯乙烯
    event.remove({ input: 'create:powdered_obsidian', mod: 'createloveandwar' })
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 1,
        "heatRequirement": "superheated",
        "ingredients": [
            { "fluidTag": "dut_create:ethylene", "amount": 500 },
            { "fluid": "kubejs:chlorine", "amount": 500 }
        ],
        "results": [
            { "fluid": "kubejs:duraplas", "amount": 125 },
            { "fluid": "kubejs:muriatic_acid", "amount": 500 }
        ],
        "processingTime": 400
    }).id('dut_create:duraplas')
    event.custom({
        "type": "create:compacting",
        "ingredients": [{ "fluidTag": "dut_create:duraplas", "amount": 250 }],
        "results": [{ "item": "kubejs:duraplas_ingot", "count": 1 }]
    }).id("dut_create:duraplas_ingot")
    event.custom({
        "type": "create:cutting",
        "ingredients": [{ "tag": "dut_create:ingots/duraplas" }],
        "results": [{ "item": "kubejs:duraplas_sheet", "count": 2 }, { "item": "kubejs:duraplas_sheet", "chance": 0.5 }]
    }).id("dut_create:duraplas_sheet")
})