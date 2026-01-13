ServerEvents.recipes(event => {
    function waxCopperBlock(input){
        event.custom({
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidInput": 0,
            "heatRequirement": "heated",
            "ingredients": [
                {"item":input},
                { "fluid": "kubejs:polymer", "amount": 25 }
            ],
            "results": [
                {"item":input.split(":")[0]+":waxed_"+input.split(":")[1]}
            ],
            "processingTime": 5
        }).id('dut_create:polymer_wax/'+input.split(":")[1])
        event.custom({
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidInput": 0,
            "heatRequirement": "heated",
            "ingredients": [
                {"item":input.split(":")[0]+":exposed_"+input.split(":")[1]},
                { "fluid": "kubejs:polymer", "amount": 25 }
            ],
            "results": [
                {"item":input.split(":")[0]+":waxed_exposed_"+input.split(":")[1]}
            ],
            "processingTime": 5
        }).id('dut_create:polymer_wax/exposed_'+input.split(":")[1])
        event.custom({
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidInput": 0,
            "heatRequirement": "heated",
            "ingredients": [
                {"item":input.split(":")[0]+":weathered_"+input.split(":")[1]},
                { "fluid": "kubejs:polymer", "amount": 25 }
            ],
            "results": [
                {"item":input.split(":")[0]+":waxed_weathered_"+input.split(":")[1]}
            ],
            "processingTime": 5
        }).id('dut_create:polymer_wax/weathered_'+input.split(":")[1])
        event.custom({
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidInput": 0,
            "heatRequirement": "heated",
            "ingredients": [
                {"item":input.split(":")[0]+":oxidized_"+input.split(":")[1]},
                { "fluid": "kubejs:polymer", "amount": 25 }
            ],
            "results": [
                {"item":input.split(":")[0]+":waxed_oxidized_"+input.split(":")[1]}
            ],
            "processingTime": 5
        }).id('dut_create:polymer_wax/oxidized_'+input.split(":")[1])
    }
    waxCopperBlock("minecraft:cut_copper")
    waxCopperBlock("minecraft:cut_copper_stairs")
    waxCopperBlock("minecraft:cut_copper_slab")
    waxCopperBlock("create:copper_shingles")
    waxCopperBlock("create:copper_shingle_stairs")
    waxCopperBlock("create:copper_shingle_slab")
    waxCopperBlock("create:copper_tiles")
    waxCopperBlock("create:copper_tile_stairs")
    waxCopperBlock("create:copper_tile_slab")
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "heatRequirement": "heated",
        "ingredients": [
            {"item":"minecraft:copper_block"},
            { "fluid": "kubejs:polymer", "amount": 25 }
        ],
        "results": [
            {"item":"waxed_copper_block"}
        ],
        "processingTime": 5
    }).id('dut_create:polymer_wax/copper_block')
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "heatRequirement": "heated",
        "ingredients": [
            {"item":"minecraft:exposed_copper"},
            { "fluid": "kubejs:polymer", "amount": 25 }
        ],
        "results": [
            {"item":"waxed_exposed_copper"}
        ],
        "processingTime": 5
    }).id('dut_create:polymer_wax/exposed_copper')
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "heatRequirement": "heated",
        "ingredients": [
            {"item":"minecraft:weathered_copper"},
            { "fluid": "kubejs:polymer", "amount": 25 }
        ],
        "results": [
            {"item":"waxed_weathered_copper"}
        ],
        "processingTime": 5
    }).id('dut_create:polymer_wax/weathered_copper')
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "heatRequirement": "heated",
        "ingredients": [
            {"item":"minecraft:oxidized_copper"},
            { "fluid": "kubejs:polymer", "amount": 25 }
        ],
        "results": [
            {"item":"waxed_oxidized_copper"}
        ],
        "processingTime": 5
    }).id('dut_create:polymer_wax/oxidized_copper')
    
})