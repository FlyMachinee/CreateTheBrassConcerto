ServerEvents.recipes(event => {
    //
    function ElectrolyzeFluid(fluid, mode, tank, amount) {
        return ({
            "type": "custommachinery:fluid",
            "mode": mode,
            "tank": tank,
            "fluid": fluid,
            "amount": amount
        })
    }
    function ElectrolyzeFluidInput1(fluid, amount) {
        return (ElectrolyzeFluid(fluid, "input", "fluidInput1", amount))
    }
    function ElectrolyzeFluidInput2(fluid, amount) {
        return (ElectrolyzeFluid(fluid, "input", "fluidInput2", amount))
    }
    //阴极
    function ElectrolyzeFluidOutput1(fluid, amount) {
        return (ElectrolyzeFluid(fluid, "output", "fluidOutput1", amount))
    }
    //阳极
    function ElectrolyzeFluidOutput2(fluid, amount) {
        return (ElectrolyzeFluid(fluid, "output", "fluidOutput2", amount))
    }
    function ElectrolyzeFluidOutput3(fluid, amount) {
        return (ElectrolyzeFluid(fluid, "output", "fluidOutput3", amount))
    }
    function ElectrolyzeEnergyInput(amount) {
        return ({
            "type": "custommachinery:energy_per_tick",
            "mode": "input",
            "amount": amount
        })
    }
    const ElectrolyzeStructure =
    {
        "type": "custommachinery:structure",
        "pattern": [
            [
                "AACCCAA",
                " AEEEA ",
                " AEEEA ",
                " AEEEA ",
                "AAAAAAA",
                " AbbbA "
            ],
            [
                "BD   DB",
                "NFHHHRN",
                "NFHQHRN",
                "NFHHHRN",
                "lACCCAl",
                " A   A "
            ],
            [
                "       ",
                "   I   ",
                "S MUK S",
                "   J   ",
                " D   D ",
                "       "
            ],
            [
                "       ",
                "   k   ",
                "WJAYAJW",
                "       ",
                "       ",
                "       "
            ],
            [
                "       ",
                "       ",
                "WJAYAJW",
                "       ",
                "       ",
                "       "
            ],
            [
                "       ",
                "       ",
                "W  Y  W",
                "   L   ",
                "       ",
                "       "
            ],
            [
                "       ",
                "       ",
                "  ama  ",
                "       ",
                "       ",
                "       "
            ],
            [
                "       ",
                "       ",
                "G  U  G",
                "       ",
                "       ",
                "       "
            ],
            [
                "       ",
                "       ",
                "G  D  G",
                "       ",
                "       ",
                "       "
            ]
        ],
        "keys":
        {
            "A": "create:copper_casing",
            "B": "design_decor:copper_railing[south=true]",
            "C": "create:item_drain",
            "D": "design_decor:andesite_floodlight[facing=up]",
            "E": "create:railway_casing",
            "F": "create:mechanical_pump[facing=west]",
            "G": "createaddition:modular_accumulator",
            "H": "design_decor:brass_boiler_structure",
            "Q": "design_decor:brass_boiler_large",
            "U": "design_decor:brass_boiler",
            "Y": "design_decor:copper_boiler",
            "R": "create:mechanical_pump[facing=east]",
            "k": "design_decor:stepped_lever",
            "W": "create:fluid_tank",
            "l": "design_decor:copper_railing[north=true]",
            "J": "create:smart_fluid_pipe",
            "S": "create_things_and_misc:brass_brick_slab[type=top]",
            "L": "design_decor:diagonal_metal_support[facing=south]",
            "I": "design_decor:diagonal_metal_support[facing=north]",
            "K": "design_decor:diagonal_metal_support[facing=east]",
            "M": "design_decor:diagonal_metal_support[facing=west]",
            "N": "create_connected:fluid_vessel[axis=z]",
            "b": "create_connected:fluid_vessel[axis=x]",
            "a": "#dut_create:funnel",
        }
    }
    const ElectrolyzeSound = {
        "type": "custommachinery:command",
        "phase": "ending",
        "command": "/playsound create:steam block @a[distance=..24] ~ ~-3.5 ~ 0.3",
        "log": false,
        "permissionlevel": 5
    }
    function ElectrolyzeElectrodePositive(chance) {
        if (chance === 0) {
            return ({
                "type": "custommachinery:block",
                "mode": "input",
                "action": "check",
                "amount": 1,
                "pos": [-3, 0, 0, -3, 0, 0],
                "filter": ["kubejs:carbon_electrode"],
                "whitelist": true
            })
        }
        return ({
            "type": "custommachinery:block",
            "mode": "input",
            "action": "replace_destroy",
            "amount": 1,
            "pos": [-3, 0, 0, -3, 0, 0],
            "filter": ["kubejs:carbon_electrode"],
            "whitelist": true,
            "block": "minecraft:air",
            "chance": 0.05 * chance
        })
    }
    function ElectrolyzeElectrodeNegative(chance) {
        if (chance === 0) {
            return ({
                "type": "custommachinery:block",
                "mode": "input",
                "action": "check",
                "amount": 1,
                "pos": [3, 0, 0, 3, 0, 0],
                "filter": ["kubejs:carbon_electrode"],
                "whitelist": true
            })
        }
        return ({
            "type": "custommachinery:block",
            "mode": "input",
            "action": "replace_destroy",
            "amount": 1,
            "pos": [3, 0, 0, 3, 0, 0],
            "filter": ["kubejs:carbon_electrode"],
            "whitelist": true,
            "block": "minecraft:air",
            "chance": 0.05 * chance
        })
    }

    function ElectrolyzeItem(mode, item, amount) {
        return ({
            "type": "custommachinery:item",
            "mode": mode,
            "item": item,
            "amount": amount
        })
    }
    function ElectrolyzeBiome(biome) {
        return ({
            "type": "custommachinery:biome",
            "filter": biome,
            "blacklist": false
        })
    }
    function ElectrolyzeDimension(dimension) {
        return ({
            "type": "custommachinery:dimension",
            "filter": dimension,
            "blacklist": false
        })
    }
    function ElectrolyzeCommonRecipe(energy_per_tick, positiveChance, negativeChance, requirements, jei, time, id) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:electrolytic_cell",
            "time": time,
            "priority": 1,
            "error": true,
            "requirements": [
                ElectrolyzeStructure,
                ElectrolyzeEnergyInput(energy_per_tick),
                ElectrolyzeElectrodePositive(positiveChance),
                ElectrolyzeElectrodeNegative(negativeChance),
                ElectrolyzeSound
            ].concat(requirements),
            "jei": [
                ElectrolyzeStructure,
                ElectrolyzeEnergyInput(energy_per_tick),
                ElectrolyzeElectrodePositive(positiveChance),
                ElectrolyzeElectrodeNegative(negativeChance)
            ].concat(requirements).concat(jei)
        }).id("dut_create:electrolytic_cell/" + id)
    }
    ElectrolyzeCommonRecipe(720, 0, 0, [
        ElectrolyzeFluidInput1("minecraft:water", 4000),
        ElectrolyzeFluidOutput1("kubejs:hydrogen", 4000),
        ElectrolyzeFluidOutput2("kubejs:oxygen", 2000)
    ], [], 20, "water")

    ElectrolyzeCommonRecipe(1440, 1, 0, [
        ElectrolyzeFluidInput1("kubejs:saline_water", 3000),
        ElectrolyzeFluidOutput3("kubejs:caustic_soda", 3000)
    ], [], 20, "saline_water")

    ElectrolyzeCommonRecipe(1800, 1, 1, [
        ElectrolyzeItem("input", "kubejs:salt", 48),
        ElectrolyzeFluidOutput1("minecraft:lava", 6000),
        ElectrolyzeFluidOutput2("kubejs:chlorine", 6000)
    ], [], 40, "salt")

    ElectrolyzeCommonRecipe(1800, 1, 1, [
            ElectrolyzeFluidInput1("kubejs:nitrogen", 3000),
            ElectrolyzeFluidInput2("kubejs:oxygen", 6000),
            ElectrolyzeFluidOutput3("kubejs:nitrogen_dioxide", 6000)
    ], [], 60, "nitrogen_dioxide")

    ElectrolyzeCommonRecipe(720, 1, 1, [
            ElectrolyzeFluidInput1("kubejs:ammonia", 2000),
            ElectrolyzeFluidInput2("kubejs:oxygen", 4000),
            ElectrolyzeFluidOutput1("kubejs:nitrogen_dioxide", 1000),
            ElectrolyzeFluidOutput3("kubejs:nitric_acid", 1000)
    ], [], 20, "nitric_acid")

    ElectrolyzeCommonRecipe(2880, 1, 0, [
            ElectrolyzeFluidInput1("kubejs:muriatic_acid", 6000),
            ElectrolyzeFluidOutput1("kubejs:hydrogen", 3000),
            ElectrolyzeFluidOutput3("kubejs:chlorine", 3000)
    ], [], 20, "muriatic_acid")

    ElectrolyzeCommonRecipe(2880, 0, 1, [
            ElectrolyzeFluidInput2("kubejs:fused_alumina", 2880),
            ElectrolyzeItem("output", "kubejs:aluminum_slag", 32)
    ], [], 60, "aluminum_slag")

    ElectrolyzeCommonRecipe(2880, 0, 0, [
            ElectrolyzeBiome("ad_astra:orbit"),
            ElectrolyzeItem("input", "kubejs:granite_alloy", 24),
            ElectrolyzeItem("output", "kubejs:diorite_alloy", 24),
            ElectrolyzeFluidOutput3("kubejs:nitrogen", 1000)
    ], [], 20, "granite_alloy")

    ElectrolyzeCommonRecipe(360, 1, 1, [
            ElectrolyzeDimension("ad_astra:moon"),
            ElectrolyzeFluidInput1("#forge:hydrogen", 500),
            ElectrolyzeFluidInput2("kubejs:chlorine", 500),
            ElectrolyzeItem("input", "minecraft:packed_mud", 8),
            ElectrolyzeItem("input", "ad_astra:cheese", 4),
            ElectrolyzeItem("output", "ad_astra:moon_sand", 24),
    ], [], 30, "moon_solid")

    ElectrolyzeCommonRecipe(24576, 0, 1, [
            ElectrolyzeFluidInput2("createbigcannons:molten_steel", 1500),
            ElectrolyzeItem("input", "iceandfire:lightning_dragon_blood", 4),
            ElectrolyzeItem("output", "iceandfire:dragonsteel_lightning_ingot", 4)
    ], [], 60, "dragonsteel_lightning_ingot")
})