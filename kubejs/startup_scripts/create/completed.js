StartupEvents.registry('item', event => {
    event.create('optical_device').maxStackSize(16)
    event.create('io_mechanism').food(food => {
        food.hunger(6)
        food.saturation(6)
        food.alwaysEdible()
        food.effect("minecraft:resistance", 1800, 0, 3)
    })
    event.create('fluid_mechanism')
    event.create('mechanical_core')
    event.create('circuit_board')
    event.create('magenta_circuit_board')
    event.create('lime_circuit_board')
    event.create('bridge_rectifier')
    event.create('bearing')
    event.create('planetary_gear')
    event.create('cardan_joint')
    event.create('differential')
    event.create('electric_gear')
    event.create('iron_hand')
    event.create('uncharged_electrolyzer')
    event.create('electrolyzer')
    event.create('bullet_shells')
    event.create('filled_bullets')
    event.create('empty_can')
    event.create('radiator')
    //一次性电池
    event.create("disposable_battery")
        .maxDamage(240000)
        .attachCapability(
            CapabilityBuilder.ENERGY.customItemStack()
                .canExtract(() => true)
                .getEnergyStored(be => { return (240000 - be.damageValue) })
                .extractEnergy((item, amount, sim) => {
                    const extract = Math.min(360, amount, 240000 - item.damageValue)
                    if (item.damageValue < 240000 && !sim) {
                        item.damageValue += extract
                        if (item.damageValue >= 240000) { item.shrink(1) }
                    }
                    return extract
                })
        )
    //充电电池
    event.create("chargeable_battery")
        .maxDamage(320000)
        .attachCapability(
            CapabilityBuilder.ENERGY.customItemStack()
                .canExtract(() => true)
                .canReceive(() => true)
                .receiveEnergy((item, amount, sim) => {
                    const receive = Math.min(640, amount, item.damageValue)
                    if (item.damageValue > 0 && !sim) {
                        item.damageValue -= receive
                    }
                    return receive
                })
                .getEnergyStored(be => { return (320000 - be.damageValue) })
                .extractEnergy((item, amount, sim) => {
                    const extract = Math.min(720, amount, 320000 - item.damageValue)
                    if (item.damageValue < 320000 && !sim) {
                        item.damageValue += extract
                    }
                    return extract
                })
        )

})