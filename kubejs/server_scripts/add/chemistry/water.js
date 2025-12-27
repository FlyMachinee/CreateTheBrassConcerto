ServerEvents.recipes(event => {
    //event.replaceInput({ input: '' },'','')
    //event.remove({output: '',not:{mod:'kubejs'}})
    //event.remove({id: ''})
    //event.remove({input: ''})
    //event.custom({})
    //电解水
    event.custom({
        "type": "create:mixing",
        "ingredients": [{ "fluid": "minecraft:water", "amount": 500 },
        { "item": "kubejs:electrolyzer" }],
        "results": [
            { "fluid": "kubejs:oxygen", "amount": 125 },
            { "fluid": "kubejs:hydrogen", "amount": 250 },
            { "item": "kubejs:uncharged_electrolyzer" }
        ]
    }).id('dut_create:water_electrolysis')
    //水热解
    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [{ "fluid": "minecraft:water", "amount": 500 }],
        "heatRequirement": "superheated",
        "processingTime": 1200,
        "results": [
            { "fluid": "kubejs:oxygen", "amount": 250 },
            { "fluid": "kubejs:hydrogen", "amount": 500 }
        ]
    }).id('dut_create:water_cracking_distillation')
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [{ "fluid": "minecraft:water", "amount": 1000 }
        ],
        "heatRequirement": "superheated",
        "processingTime": 300,
        "results": [
            { "fluid": "kubejs:oxygen", "amount": 500 },
            { "fluid": "kubejs:hydrogen", "amount": 1000 }
        ]
    }).id('dut_create:water_cracking_ferment')
})