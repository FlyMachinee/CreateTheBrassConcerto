ServerEvents.recipes(event => {
    //倒空
    event.custom({
        "type": "create:emptying",
        "ingredients": [
            { "item": "kubejs:slime_cola_can" }
        ],
        "results": [
            { "item": "kubejs:empty_can" },
            { "amount": 250, "fluid": "kubejs:slime_cola" }
        ]
    }).id("dut_create:slime_cola_emptying")
    //罐装
    event.custom({
        "type": "create:filling",
        "ingredients": [
            { "item": "kubejs:empty_can" },
            { "amount": 250, "fluid": "kubejs:slime_cola" }
        ],
        "results": [
            { "item": "kubejs:slime_cola_can" }
        ]
    }).id("dut_create:slime_cola_can")
    //绝秘！史莱姆可乐秘方
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "create:tea", "amount": 50 },
            { "fluid": "create_things_and_misc:slime", "amount": 100 },
            { "item": "minecraft:cocoa_beans" },
            { "item": "minecraft:sugar" }
        ],
        "results": [{ "fluid": "kubejs:cola_puree", "amount": 150 }],
        "processingTime": 60
    }).id('dut_create:secret_recipe_of_slime_cola')
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "ingredients": [
            { "fluid": "kubejs:cola_puree", "amount": 75 },
            { "fluid": "kubejs:carbon_dioxide", "amount": 100 },
            { "item": "minecraft:ice" },
            { "fluid": "minecraft:water", "amount": 250 }
        ],
        "results": [{ "fluid": "kubejs:slime_cola", "amount": 500 }],
        "processingTime": 30
    }).id('dut_create:slime_cola')
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "ingredients": [
            { "fluid": "kubejs:cryogen", "amount": 50 },
            { "fluid": "create_things_and_misc:slime", "amount": 900 }
        ],
        "results": [{ "item": "minecraft:slime_block" }],
        "processingTime": 30
    }).id('dut_create:slime_block')
})