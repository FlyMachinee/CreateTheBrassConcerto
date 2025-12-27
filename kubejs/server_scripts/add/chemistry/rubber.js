ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "###",
            "###"
        ],
        "key": { "#": { "item": "kubejs:rubber" } },
        "result": { "item": "create:belt_connector", "count": 4 }
    }).id("dut_create:rubber/belt_connector")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "B": { "item": "kubejs:differential" },
            "C": { "item": "kubejs:rubber" },
            "I": { "item": "create_connected:control_chip" }
        },
        "pattern": [
            " B ",
            " I ",
            "CCC"
        ],
        "result": { "item": "create:elevator_pulley" },
        "show_notification": true
    }).id("dut_create:elevator_pulley_rubber")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "B": { "item": "create:copper_casing" },
            "C": { "item": "kubejs:rubber" },
            "I": { "tag": "forge:plates/copper" }
        },
        "pattern": [
            " B ",
            "CCC",
            " I "
        ],
        "result": { "item": "create:hose_pulley" },
        "show_notification": true
    }).id("dut_create:hose_pulley_rubber")
    //橡胶代替海带
    event.replaceInput({ output: 'create:andesite_funnel' }, 'minecraft:dried_kelp', '#dut_create:belt')
    event.replaceInput({ output: 'create:brass_funnel' }, 'minecraft:dried_kelp', '#dut_create:belt')
    event.replaceInput({ output: 'create:andesite_tunnel' }, 'minecraft:dried_kelp', '#dut_create:belt')
    event.replaceInput({ output: 'create:brass_tunnel' }, 'minecraft:dried_kelp', '#dut_create:belt')
    event.replaceInput({ output: 'create:spout' }, 'minecraft:dried_kelp', '#dut_create:belt')
    event.replaceInput({ output: 'create_enchantment_industry:printer' }, 'minecraft:dried_kelp', '#dut_create:belt')
    event.replaceInput({ output: 'createdieselgenerators:pumpjack_head' }, 'minecraft:dried_kelp', '#dut_create:belt')
})