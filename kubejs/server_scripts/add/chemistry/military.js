ServerEvents.recipes(event => {
    //硝粉
    event.remove({ output: 'createbigcannons:nitropowder', not: { mod: 'kubejs' } })
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            { "item": "createbigcannons:congealed_nitro"},
            { "item": "minecraft:sugar"}
        ],
        "results": [{ "item": "createbigcannons:nitropowder", "count": 2 }]
    }).id("dut_create:nitropowder")
    //硝
    event.remove({ input: 'createbigcannons:congealed_nitro', not: { mod: 'kubejs' } })
    event.remove({ output: 'createbigcannons:congealed_nitro', not: { mod: 'kubejs' } })
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 2,
        "ingredients": [
            { "fluid": "kubejs:nitric_acid", "amount": 300 },
            { "fluid": "vintageimprovements:sulfuric_acid", "amount": 600 },
            { "fluidTag": "dut_create:plantoil", "amount": 100 }

        ],
        "results": [
            { "fluid": "vintageimprovements:sulfuric_acid", "amount": 300 },
            { "item": "createbigcannons:congealed_nitro", "count": 6 }
        ],
        "processingTime": 600
    }).id('dut_create:congealed_nitro')
})