ServerEvents.recipes(event => {
    //盐水蒸馏
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "kubejs:saline_water", "amount": 500 }
        ],
        "processingTime": 60,
        "results": [{ "item": "kubejs:salt", "count": 2 }]
    }).id('dut_create:ferment/saline_water')
    //一般发酵
    event.remove({ id: 'createdieselgenerators:basin_fermenting/fermentable' })
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "tag": "dut_create:fermentable" },
            { "fluid": "minecraft:water", "amount": 100 },
            { "item": "createdieselgenerators:wood_chip" },
            { "item": "createdieselgenerators:wood_chip" }
        ],
        "processingTime": 600,
        "results": [
            { "fluid": "createdieselgenerators:ethanol", "amount": 200 }
        ]
    }).id('dut_create:ferment/fermentable')
    //甜浆果发酵
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": 'minecraft:sweet_berries' },
            { "item": 'minecraft:sweet_berries' },
            { "item": 'minecraft:sweet_berries' },
            { "item": 'minecraft:sweet_berries' },
            { "item": 'minecraft:sweet_berries' },
            { "item": 'minecraft:sweet_berries' },
            { "fluid": "minecraft:water", "amount": 100 },
            { "item": "createdieselgenerators:wood_chip" },
            { "item": "createdieselgenerators:wood_chip" }
        ],
        "processingTime": 600,
        "results": [
            { "fluid": "createdieselgenerators:ethanol", "amount": 50 }
        ]
    }).id('dut_create:ferment/berries')
    //面粉发酵
    event.remove({ id: 'createdieselgenerators:basin_fermenting/dough' })
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": "create:wheat_flour" },
            { "fluid": "minecraft:water", "amount": 100 },
            { "item": "createdieselgenerators:wood_chip" }
        ],
        "processingTime": 500,
        "results": [
            { "fluid": "createdieselgenerators:ethanol", "amount": 200 }
        ]
    }).id('dut_create:ferment/dough')
    //海藻糖
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": "minecraft:kelp" },
            { "item": "minecraft:kelp" },
            { "item": "minecraft:kelp" },
            { "item": "minecraft:kelp" },
            { "fluid": "createdieselgenerators:ethanol", "amount": 250 },
            { "item": "createdieselgenerators:wood_chip" }
        ],
        "processingTime": 60,
        "results": [
            { "fluid": "createdieselgenerators:ethanol", "amount": 200 },
            { "item": "minecraft:sugar", "count": 3 }
        ]
    }).id('dut_create:ferment/kelp_sugar')
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": "minecraft:kelp" },
            { "item": "minecraft:kelp" },
            { "item": "minecraft:kelp" },
            { "item": "minecraft:kelp" },
            { "fluid": "kubejs:caustic_soda", "amount": 250 }
        ],
        "processingTime": 60,
        "results": [
            { "fluid": "kubejs:saline_water", "amount": 200 },
            { "item": "minecraft:sugar", "count": 2 }
        ]
    }).id('dut_create:ferment/kelp_sugar_soda')
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "fluid": "create:honey", "amount": 500 }
        ],
        "processingTime": 60,
        "results": [
            { "item": "minecraft:sugar", "count": 6 }
        ]
    }).id('dut_create:ferment/honey_sugar')
    //加压蒸汽
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "fluid": "kubejs:superheated_steam", "amount": 500 }
        ],
        "processingTime": 30,
        "results": [
            { "fluid": "kubejs:pressurized_steam", "amount": 625 }
        ]
    }).id('dut_create:ferment/pressurized_steam')
    //骨头
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": "minecraft:bone_meal" },
            { "item": "minecraft:bone_meal" },
            { "item": "minecraft:bone_meal" },
            { "fluid": "create:potion", "amount": 50, "nbt": { Bottle: "REGULAR", Potion: "minecraft:mundane" } }
        ],
        "processingTime": 80,
        "results": [
            { "item": "minecraft:bone", "count": 3 }
        ]
    }).id('dut_create:ferment/bone')

    //油发酵
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "kubejs:peat_protozoa" },
            { "fluidTag": "forge:crude_oil", "amount": 500 }
        ],
        "processingTime": 30,
        "results": [
            { "item": "kubejs:peat_protozoa" },
            { "fluid": "createdieselgenerators:diesel", "amount": 500 }
        ]
    }).id('dut_create:ferment/diesel')
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": "kubejs:blaze_wart" },
            { "fluid": "createdieselgenerators:diesel", "amount": 250 }
        ],
        "processingTime": 30,
        "results": [
            { "item": "kubejs:blaze_wart" },
            { "fluid": "createdieselgenerators:gasoline", "amount": 500 }
        ]
    }).id('dut_create:ferment/gasoline')
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "kubejs:yeast" },
            { "fluid": "createdieselgenerators:gasoline", "amount": 500 }
        ],
        "processingTime": 10,
        "results": [
            { "item": "kubejs:yeast" },
            { "fluid": "kubejs:natural_gas", "amount": 600 }
        ]
    }).id('dut_create:ferment/natural_gas')
})