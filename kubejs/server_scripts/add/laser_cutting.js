ServerEvents.recipes(event => {
    //event.remove({output: '',not:{mod:'kubejs'}})
    //event.remove({id: ''})
    //event.remove({input: ''})
    //event.custom()
    //激光切割机
    event.remove({ output: 'vintageimprovements:laser_item', not: { mod: 'kubejs' } })
    event.remove({ output: 'vintageimprovements:laser', not: { mod: 'kubejs' } })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "tag": "forge:plates/brass" },
            "B": { "item": "kubejs:planetary_gear" },
            "C": { "item": "createaddition:modular_accumulator" },
            "D": { "item": "kubejs:electric_gear" }
        },
        "pattern": [
            "ABA",
            "ACA",
            "ADA"
        ],
        "result": {
            "item": "vintageimprovements:laser"
        },
        "show_notification": true
    }).id("dut_create:laser")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "create:brass_casing" },
            "B": { "item": "vintageimprovements:laser_item" }
        },
        "pattern": [
            "A",
            "B"
        ],
        "result": {
            "item": "vintageimprovements:laser"
        },
        "show_notification": true
    }).id("dut_create:laser1")
    //激光器
    event.custom({
        "type": "createaddition:charging",
        "input": [{"item": "iceandfire:cyclops_eye"},
                {"item": "iceandfire:cockatrice_eye"},
                {"item": "kubejs:resonant_bacteria"}],
        "result": {"item": "vintageimprovements:laser_item"},
        "energy": 1500000,
    }).id("dut_create:charging/laser_item")
    //空白标志
    event.custom({
        "type": "vintageimprovements:laser_cutting",
        "ingredients": [
            { "item": "create:andesite_alloy" }
        ],
        "results": [
            { "item": "design_decor:blank_sign", "count": 12 }
        ],
        "energy": 500,
        "maxChargeRate": 80
    }).id("dut_create:laser_cutting/blank_sign")
    //空白字符标志
    event.custom({
        "type": "vintageimprovements:laser_cutting",
        "ingredients": [
            { "tag": "forge:ingots/brass" }
        ],
        "results": [
            { "item": "design_decor:letter_sign", "count": 12 }
        ],
        "energy": 500,
        "maxChargeRate": 80
    }).id("dut_create:laser_cutting/letter_sign")
    //光辉石
    event.custom(
    {
        "type": "vintageimprovements:laser_cutting",
      "ingredients": [
        { "item": "create:shadow_steel" }
      ],
        "energy": 14400,
        "maxChargeRate": 1440,
      "results": [
        { "item": "create:refined_radiance" },
      ]
    }).id("dut_create:laser_cutting/refined_radiance")
})