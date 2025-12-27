ServerEvents.recipes(event => {
    event.remove({output:"sophisticatedbackpacks:xp_pump_upgrade"})
    event.custom({
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:tin_hard_disk" },
        { "amount": 1, "fluid": "create_enchantment_industry:experience" }],
        "results": [{ "item": "kubejs:tin_hard_disk", nbt: { Damage: 1024 } }]
    }).id("dut_create:no_mending/tin_hard_disk")
    event.custom({
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:aluminum_hard_disk" },
        { "amount": 1, "fluid": "create_enchantment_industry:experience" }],
        "results": [{ "item": "kubejs:aluminum_hard_disk", nbt: { Damage: 1024 } }]
    }).id("dut_create:no_mending/aluminum_hard_disk")
    event.custom({
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:brass_hard_disk" },
        { "amount": 1, "fluid": "create_enchantment_industry:experience" }],
        "results": [{ "item": "kubejs:brass_hard_disk", nbt: { Damage: 1024 } }]
    }).id("dut_create:no_mending/brass_hard_disk")
    event.custom({
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:space_elevator" },
        { "amount": 1, "fluid": "create_enchantment_industry:experience" }],
        "results": [{ "item": "kubejs:space_elevator", nbt: { Damage: 12 } }]
    }).id("dut_create:no_mending/space_elevator")
})