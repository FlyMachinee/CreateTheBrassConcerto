ServerEvents.recipes(event => {
    const PoolStructure ={
    "type": "custommachinery:general_structure",
    "id": "main"
  }
    function PoolFluid(block) {
        return ({
            "type": "custommachinery:structure",
            "pattern": [
                ["m"],
                [" "],
                ["A"]
            ],
            "keys": {
                "A": block
            },
            "jei": true
        })
    }
    const PoolEnergyInput = {
        "type": "custommachinery:energy_per_tick",
        "mode": "input",
        "amount": 360
    }
    function PoolFliter(item) {
        return ({
            "type": "custommachinery:item_filter",
            "ingredient": { "item": item },
            "slot": "filter"
        })
    }
    function PoolGenerate(fluid, amount) {
        return ({
            "type": "custommachinery:fluid_per_tick",
            "mode": "output",
            "fluid": fluid,
            "amount": amount
        })
    }
    function PoolBiome(biome) {
        return ({
            "type": "custommachinery:biome",
            "filter": biome,
            "blacklist": false
        })
    }
    //
    function PoolExactCommon(block, fluid, speed, extra) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:infinity_fetching_pool",
            "time": 60,
            "priority": 2,
            "hidden": false,
            "error": true,
            "requirements": [
                PoolStructure,
                PoolFluid(block),
                PoolGenerate(fluid, speed),
                PoolEnergyInput
            ].concat(extra),
            "jei": [
                PoolStructure,
                PoolFluid(block),
                PoolEnergyInput,
                PoolGenerate(fluid, speed)
            ].concat(extra)
        }).id("dut_create:infinity_fetching_pool/" + fluid.split(":")[1])
    }
    PoolExactCommon("kubejs:saline_water", "kubejs:saline_water", 16000, [])
    PoolExactCommon("kubejs:cryogen", "kubejs:cryogen", 16000, [])
    PoolExactCommon("minecraft:lava", "minecraft:lava", 16000, [])
    PoolExactCommon("minecraft:water", "minecraft:water", 16000, [])
    PoolExactCommon("create:honey", "create:honey", 1000, [PoolBiome("dut:chromatic_agros")])
    PoolExactCommon("kubejs:nitric_acid", "kubejs:nitric_acid", 1000, [PoolBiome("dut:nitrolithic_shore")])
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:infinity_fetching_pool",
        "time": 5,
        "priority": 0,
        "hidden": true,
        "error": true,
        "requirements": [
            PoolStructure,
            {
                "type": "custommachinery:energy_per_tick",
                "mode": "input",
                "amount": 180
            }
        ]
    }).id("dut_create:infinity_fetching_pool/empty")
})