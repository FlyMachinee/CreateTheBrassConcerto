ServerEvents.recipes(event => {
    const PoolStructure =
    {
        "type": "custommachinery:structure",
        "pattern": [
            [
                "AABAA",
                "ACCCA",
                "BCCCB",
                "ACCCA",
                "AABAA"
            ],
            [
                "E J E",
                "  M  ",
                "KNmOL",
                "  I  ",
                "E D E"
            ],
            [
                "  H  ",
                " FFF ",
                "HFGFH",
                " FFF ",
                "  H  "
            ]
        ],
        "keys": {
            "A": "create:industrial_iron_block",
            "B": "design_decor:industrial_iron_boiler",
            "C": "createaddition:modular_accumulator",
            "D": "design_decor:diagonal_girder[facing=north,facing_up=false]",
            "J": "design_decor:diagonal_girder[facing=south,facing_up=false]",
            "K": "design_decor:diagonal_girder[facing=east,facing_up=false]",
            "L": "design_decor:diagonal_girder[facing=west,facing_up=false]",
            "E": "design_decor:andesite_floodlight[facing=up]",
            "F": "design_decor:brass_boiler_structure",
            "G": "design_decor:brass_boiler_large",
            "H": "#dut_create:container_fluid",
            "I": "design_decor:diagonal_metal_support[facing=north]",
            "M": "design_decor:diagonal_metal_support[facing=south]",
            "N": "design_decor:diagonal_metal_support[facing=east]",
            "O": "design_decor:diagonal_metal_support[facing=west]"
        },
        "jei": true
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
        "time": 10,
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