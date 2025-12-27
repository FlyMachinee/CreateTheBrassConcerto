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
                "E D E",
                "  I  ",
                "DImID",
                "  I  ",
                "E D E"
            ],
            [
                "     ",
                " FFF ",
                " FGF ",
                " FFF ",
                "     "
            ],
            [
                " HHH ",
                "H   H",
                "H   H",
                "H   H",
                " HHH "
            ]
        ],
        "keys": {
            "A": "create:industrial_iron_block",
            "B": "design_decor:industrial_iron_boiler",
            "C": "createaddition:modular_accumulator",
            "D": "design_decor:diagonal_girder",
            "E": "design_decor:andesite_floodlight[facing=up]",
            "F": "design_decor:brass_boiler_structure",
            "G": "design_decor:brass_boiler_large",
            "H": "design_decor:brass_railing",
            "I": "design_decor:diagonal_metal_support"
        },
        "jei": true
    }
    const PoolEnergyInput = {
        "type": "custommachinery:energy_per_tick",
        "mode": "input",
        "amount": 60
    }
    const PoolEnergyInput1 = {
        "type": "custommachinery:energy_per_tick",
        "mode": "input",
        "amount": 180
    }
    function PoolFliter(item) {
        return ({
            "type": "custommachinery:item_filter",
            "ingredient": { "item": item },
            "slot": "filter"
        })
    }
    function PoolReplace(amount, block) {
        return ({
            "type": "custommachinery:block",
            "mode": "output",
            "action": "replace_destroy",
            "amount": amount,
            "pos": [-1, 2, -1, 1, 2, 1],
            "block": block
        })
    }
    function PoolBiome(biome) {
        return ({
            "type": "custommachinery:biome",
            "filter": biome,
            "blacklist": false
        })
    }
    //PoolExactCommon("kubejs:saline_water_bucket", "kubejs:saline_water")
    //PoolExactCommon("kubejs:cryogen_bucket", "kubejs:cryogen")
    //PoolExactCommon("minecraft:lava_bucket", "minecraft:lava")
    //PoolExactCommon("minecraft:water_bucket", "minecraft:water")

    //
    function PoolExactCommon1(fliter, block, time, extra) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:infinity_fetching_pool",
            "time": time,
            "priority": 2,
            "hidden": false,
            "error": true,
            "requirements": [
                {
                    "type": "custommachinery:fluid",
                    "mode": "input",
                    "fluid": "kubejs:hydrofluid",
                    "amount": 1
                },
                PoolEnergyInput1,
                PoolFliter(fliter),
                PoolReplace(9, block)
            ].concat(extra),
            "jei": [
                PoolStructure,
                PoolEnergyInput1,
                PoolFliter(fliter),
                PoolReplace(9, block)
            ].concat(extra)
        }).id("dut_create:infinity_fetching_pool/" + block.split(":")[1])
    }
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:infinity_fetching_pool",
        "time": 1,
        "error": true,
        "hidden": true,
        "priority": 1,
        "requirements": [
            PoolStructure,
            PoolEnergyInput1,
            {
                "type": "custommachinery:fluid",
                "mode": "output",
                "fluid": "kubejs:hydrofluid",
                "amount": 1000
            }
        ]
    }).id("dut_create:infinity_fetching_pool/fluid")
    PoolExactCommon1("kubejs:saline_water_bucket", "kubejs:saline_water", 1, [])
    PoolExactCommon1("kubejs:cryogen_bucket", "kubejs:cryogen", 1, [])
    PoolExactCommon1("minecraft:lava_bucket", "minecraft:lava", 1, [])
    PoolExactCommon1("minecraft:water_bucket", "minecraft:water", 1, [])
    PoolExactCommon1("create:honey_bucket", "create:honey", 9, [PoolBiome("dut:chromatic_agros")])
    PoolExactCommon1("kubejs:nitric_acid_bucket", "kubejs:nitric_acid", 9, [PoolBiome("dut:nitrolithic_shore")])
})