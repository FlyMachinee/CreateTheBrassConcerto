StartupEvents.registry('item', event => {
    event.create('lamb_kebabs').food(food => {
        food.hunger(6)
        food.saturation(2)
        food.fastToEat()
        food.meat()
        food.eaten(kebabs => {
            if (kebabs.player == null) { return }
            kebabs.player.give(Item.of("minecraft:stick"));
        })
    }).maxStackSize(64)
    event.create('large_fries').food(food => {
        food.hunger(20)
        food.saturation(1)
        food.effect("minecraft:regeneration", 1200, 2, 1)
        food.effect("minecraft:instant_health", 20, 2, 1)
        food.removeEffect("minecraft:slowness")
        food.removeEffect("minecraft:weakness")
        food.removeEffect("minecraft:hunger")
        food.removeEffect("minecraft:nausea")
        food.removeEffect("minecraft:mining_fatigue")
    }).maxStackSize(64)
    event.create('french_fries').food(food => {
        food.hunger(4)
        food.saturation(1)
        food.fastToEat()
    })
    event.create('slime_cola_can').food(food => {
        food.hunger(3)
        food.saturation(4)
        food.fastToEat()
        food.alwaysEdible()
        food.effect("minecraft:haste", 3600, 0, 1)
        food.effect("minecraft:speed", 1200, 0, 1)
        food.effect("minecraft:resistance", 1800, 0, 2)
        food.effect("minecraft:fire_resistance", 3600, 0, 1)
        food.effect("minecraft:regeneration", 1200, 0, 2)
        food.removeEffect("minecraft:bad_omen")
        food.removeEffect("minecraft:unluck")
        food.removeEffect("minecraft:poison")
        food.removeEffect("minecraft:slowness")
        food.removeEffect("minecraft:weakness")
        food.removeEffect("minecraft:hunger")
        food.removeEffect("minecraft:nausea")
        food.removeEffect("minecraft:mining_fatigue")
        food.eaten(cola => {
            if (cola.player == null) { return }
            cola.player.give(Item.of("kubejs:empty_can"));
            cola.player.potionEffects.add("parcool:inexhaustible", 9600, 1, false, true)
        })
    }).maxStackSize(64)

})
StartupEvents.registry('item', event => {
    event.create('position_data').maxStackSize(1).tooltip(Text.translate("kubejs.tooltip.position_data"))
    event.create('satellite_scanning_data').maxStackSize(1)
    event.create('scanner').maxStackSize(1)
    //塑钢钻头
    event.create("steel_impact_drill")
        .rarity("rare")
        .tooltip(Text.translate("kubejs.tooltip.steel_impact_drill"))
    //塑钢剑
    event.create("steel_power_sword", "sword")
        .rarity("rare")
        .tooltip(Text.translate("kubejs.tooltip.steel_power_sword"))
        .attackDamageBaseline(61)
        .speedBaseline(-2)
    //火箭剑
    event.create("rocket_sword", "sword")
        .rarity("rare")
        .tooltip(Text.translate("kubejs.tooltip.rocket_sword"))
        .attackDamageBaseline(95)
        .speedBaseline(-2.4)
})