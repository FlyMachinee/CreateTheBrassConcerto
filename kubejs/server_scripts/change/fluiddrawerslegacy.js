ServerEvents.recipes(event => {
    event.replaceInput({ mod: 'fluiddrawerslegacy' }, '#createbigcannons:glass', '#forge:ingots/aluminum')
    event.replaceInput({ mod: 'fluiddrawerslegacy' }, '#forge:glass_panes', '#forge:plates/aluminum')
    event.replaceInput({ mod: 'fluiddrawerslegacy' }, 'minecraft:bucket', 'create:fluid_tank')
    Ingredient.of("#dut_create:fluiddrawers").itemIds.forEach(i => {
        event.custom({
            "type": "minecraft:crafting_shaped",
            "pattern": [
                "A"
            ],
            "key": {
                "A": { "item": i }
            },
            "result": { "item": i }
        }).id('dut_create:fluiddrawers/clear/'+i.split(":")[1])
    })
})