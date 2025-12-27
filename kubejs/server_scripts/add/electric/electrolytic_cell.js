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
                "AABBBAA",
                " AEEEA ",
                " AEEEA ",
                " AEEEA ",
                "AAAAAAA",
                " A   A "
            ],
            [
                "CD   DC",
                " FGGGF ",
                " FGNGF ",
                " FGGGF ",
                "CABBBAC",
                " A   A "
            ],
            [
                "       ",
                "   J   ",
                "P JRJ P",
                "   U   ",
                " D   D ",
                "       "
            ],
            [
                "       ",
                "   K   ",
                "WUAVAUW",
                "   J   ",
                "       ",
                "       "
            ],
            [
                "       ",
                "       ",
                "WUAVAUW",
                "       ",
                "       ",
                "       "
            ],
            [
                "       ",
                "   J   ",
                "W AVA W",
                "  F F  ",
                "       ",
                "       "
            ],
            [
                "       ",
                "       ",
                "L HmH L",
                "  H H  ",
                "       ",
                "       "
            ],
            [
                "       ",
                "       ",
                "I  R  I",
                "       ",
                "       ",
                "       "
            ],
            [
                "       ",
                "       ",
                "I  D  I",
                "       ",
                "       ",
                "       "
            ]
        ],
        "keys":
        {
            "U": "create:smart_fluid_pipe",
            "W": "create:fluid_tank",
            "A": "create:copper_casing",
            "L": "kubejs:carbon_electrode",
            "C": "design_decor:copper_railing",
            "G": "design_decor:brass_boiler_structure",
            "H": "create:fluid_pipe",
            "K": "design_decor:stepped_lever",
            "F": "create:mechanical_pump",
            "B": "create:item_drain",
            "P": "create_things_and_misc:brass_brick_slab",
            "N": "design_decor:brass_boiler_large",
            "R": "design_decor:brass_boiler",
            "E": "create:railway_casing",
            "J": "design_decor:diagonal_metal_support",
            "D": "design_decor:andesite_floodlight",
            "I": "createaddition:modular_accumulator",
            "V": "design_decor:copper_boiler",
        }
    }
    const ElectrolyzeSound = {
        "type": "custommachinery:command",
        "phase": "ending",
        "command": "/playsound create:steam block @a[distance=..24] ~ ~-3.5 ~ 0.3",
        "log": false,
        "permissionlevel": 5
    }
    const ElectrolyzeParticle = {
        "type": "custommachinery:command",
        "phase": "crafting_tickable",
        "command": "/particle minecraft:electric_spark ~ ~-2.5 ~ 1 2.5 1 0.1 8",
        "log": false,
        "permissionlevel": 5
    }
    const ElectrolyzeFluidFilter = [
        "minecraft:air",
        "minecraft:void_air",
        "minecraft:cave_air",
        "kubejs:oxygen[level=1]",
        "kubejs:oxygen[level=2]",
        "kubejs:oxygen[level=3]",
        "kubejs:oxygen[level=4]",
        "kubejs:oxygen[level=5]",
        "kubejs:oxygen[level=6]",
        "kubejs:oxygen[level=7]",
        "kubejs:oxygen[level=8]",
        "kubejs:oxygen[level=9]",
        "kubejs:oxygen[level=10]",
        "kubejs:oxygen[level=11]",
        "kubejs:oxygen[level=12]",
        "kubejs:oxygen[level=13]",
        "kubejs:oxygen[level=14]",
        "kubejs:oxygen[level=15]",
        "kubejs:hydrogen[level=1]",
        "kubejs:hydrogen[level=2]",
        "kubejs:hydrogen[level=3]",
        "kubejs:hydrogen[level=4]",
        "kubejs:hydrogen[level=5]",
        "kubejs:hydrogen[level=6]",
        "kubejs:hydrogen[level=7]",
        "kubejs:hydrogen[level=8]",
        "kubejs:hydrogen[level=9]",
        "kubejs:hydrogen[level=10]",
        "kubejs:hydrogen[level=11]",
        "kubejs:hydrogen[level=12]",
        "kubejs:hydrogen[level=13]",
        "kubejs:hydrogen[level=14]",
        "kubejs:hydrogen[level=15]",
        "kubejs:nitrogen[level=1]",
        "kubejs:nitrogen[level=2]",
        "kubejs:nitrogen[level=3]",
        "kubejs:nitrogen[level=4]",
        "kubejs:nitrogen[level=5]",
        "kubejs:nitrogen[level=6]",
        "kubejs:nitrogen[level=7]",
        "kubejs:nitrogen[level=8]",
        "kubejs:nitrogen[level=9]",
        "kubejs:nitrogen[level=10]",
        "kubejs:nitrogen[level=11]",
        "kubejs:nitrogen[level=12]",
        "kubejs:nitrogen[level=13]",
        "kubejs:nitrogen[level=14]",
        "kubejs:nitrogen[level=15]",
        "kubejs:nitrogen_dioxide[level=1]",
        "kubejs:nitrogen_dioxide[level=2]",
        "kubejs:nitrogen_dioxide[level=3]",
        "kubejs:nitrogen_dioxide[level=4]",
        "kubejs:nitrogen_dioxide[level=5]",
        "kubejs:nitrogen_dioxide[level=6]",
        "kubejs:nitrogen_dioxide[level=7]",
        "kubejs:nitrogen_dioxide[level=8]",
        "kubejs:nitrogen_dioxide[level=9]",
        "kubejs:nitrogen_dioxide[level=10]",
        "kubejs:nitrogen_dioxide[level=11]",
        "kubejs:nitrogen_dioxide[level=12]",
        "kubejs:nitrogen_dioxide[level=13]",
        "kubejs:nitrogen_dioxide[level=14]",
        "kubejs:nitrogen_dioxide[level=15]",
        "kubejs:chlorine[level=1]",
        "kubejs:chlorine[level=2]",
        "kubejs:chlorine[level=3]",
        "kubejs:chlorine[level=4]",
        "kubejs:chlorine[level=5]",
        "kubejs:chlorine[level=6]",
        "kubejs:chlorine[level=7]",
        "kubejs:chlorine[level=8]",
        "kubejs:chlorine[level=9]",
        "kubejs:chlorine[level=10]",
        "kubejs:chlorine[level=11]",
        "kubejs:chlorine[level=12]",
        "kubejs:chlorine[level=13]",
        "kubejs:chlorine[level=14]",
        "kubejs:chlorine[level=15]",
        "kubejs:caustic_soda[level=1]",
        "kubejs:caustic_soda[level=2]",
        "kubejs:caustic_soda[level=3]",
        "kubejs:caustic_soda[level=4]",
        "kubejs:caustic_soda[level=5]",
        "kubejs:caustic_soda[level=6]",
        "kubejs:caustic_soda[level=7]",
        "kubejs:caustic_soda[level=8]",
        "kubejs:caustic_soda[level=9]",
        "kubejs:caustic_soda[level=10]",
        "kubejs:caustic_soda[level=11]",
        "kubejs:caustic_soda[level=12]",
        "kubejs:caustic_soda[level=13]",
        "kubejs:caustic_soda[level=14]",
        "kubejs:caustic_soda[level=15]",
        "kubejs:nitric_acid[level=1]",
        "kubejs:nitric_acid[level=2]",
        "kubejs:nitric_acid[level=3]",
        "kubejs:nitric_acid[level=4]",
        "kubejs:nitric_acid[level=5]",
        "kubejs:nitric_acid[level=6]",
        "kubejs:nitric_acid[level=7]",
        "kubejs:nitric_acid[level=8]",
        "kubejs:nitric_acid[level=9]",
        "kubejs:nitric_acid[level=10]",
        "kubejs:nitric_acid[level=11]",
        "kubejs:nitric_acid[level=12]",
        "kubejs:nitric_acid[level=13]",
        "kubejs:nitric_acid[level=14]",
        "kubejs:nitric_acid[level=15]"
    ]
    const ElectrolyzecheckBlock1 =
    {
        "type": "custommachinery:block",
        "mode": "input",
        "action": "check",
        "amount": 1,
        "pos": [3, 0, 0, 3, 0, 0],
        "filter": ["kubejs:carbon_electrode"],
        "whitelist": true
    }
    const ElectrolyzecheckBlock2 =
    {
        "type": "custommachinery:block",
        "mode": "input",
        "action": "check",
        "amount": 1,
        "pos": [-3, 0, 0, -3, 0, 0],
        "filter": ["kubejs:carbon_electrode"],
        "whitelist": true
    }
    function ElectrolyzeElectrodePositive(chance) {
        return ({
            "type": "custommachinery:block",
            "mode": "output",
            "action": "replace_destroy",
            "amount": 1,
            "pos": [-3, 0, 0, -3, 0, 0],
            "filter": ["kubejs:carbon_electrode"],
            "whitelist": true,
            "block": "minecraft:air",
            "chance": 0.01 * chance
        })
    }
    function ElectrolyzeElectrodeNegative(chance) {
        return ({
            "type": "custommachinery:block",
            "mode": "output",
            "action": "replace_destroy",
            "amount": 1,
            "pos": [3, 0, 0, 3, 0, 0],
            "filter": ["kubejs:carbon_electrode"],
            "whitelist": true,
            "block": "minecraft:air",
            "chance": 0.01 * chance
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
    function ElectrolyzeFluidOutNegative(fluid, amount) {
        return (
            {
                "type": "custommachinery:block",
                "mode": "output",
                "action": "replace_destroy",
                "amount": amount,
                "pos": [3, -5, 1, 3, -6, -1],
                "filter": ElectrolyzeFluidFilter,
                "whitelist": true,
                "block": fluid
            }
        )
    }
    function ElectrolyzeFluidOutPositive(fluid, amount) {
        return (
            {
                "type": "custommachinery:block",
                "mode": "output",
                "action": "replace_destroy",
                "amount": amount,
                "pos": [-3, -5, 1, -3, -6, -1],
                "filter": ElectrolyzeFluidFilter,
                "whitelist": true,
                "block": fluid
            }
        )
    }
    function ElectrolyzeFluidOutSub(fluid, amount) {
        return ({
            "type": "custommachinery:block",
            "mode": "output",
            "action": "replace_destroy",
            "amount": amount,
            "pos": [1, -5, 3, -1, -6, 3],
            "filter": ElectrolyzeFluidFilter,
            "whitelist": true,
            "block": fluid
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
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:electrolytic_cell",
        "time": 40,
        "priority": 1,
        "error": true,
        "requirements": [
            ElectrolyzeStructure,
            ElectrolyzeSound,
            ElectrolyzeParticle,
            ElectrolyzeEnergyInput(720),
            ElectrolyzeFluidInput1("minecraft:water", 6000),
            ElectrolyzeFluidOutNegative("kubejs:hydrogen", 6),
            ElectrolyzeFluidOutPositive("kubejs:oxygen", 3)
        ],
        "jei": [
            ElectrolyzeStructure,
            ElectrolyzeEnergyInput(720),
            ElectrolyzeFluidInput1("minecraft:water", 6000),
            ElectrolyzeFluidOutput1("kubejs:hydrogen", 6000),
            ElectrolyzeFluidOutput2("kubejs:oxygen", 3000)
        ]
    }).id("dut_create:electrolytic_cell/water")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:electrolytic_cell",
        "time": 20,
        "priority": 1,
        "error": true,
        "requirements": [
            ElectrolyzeStructure,
            ElectrolyzeSound,
            ElectrolyzeParticle,
            ElectrolyzeEnergyInput(1440),
            ElectrolyzeElectrodePositive(1),
            ElectrolyzeElectrodeNegative(1),
            ElectrolyzeFluidInput1("kubejs:saline_water", 6000),
            ElectrolyzeFluidOutNegative("kubejs:hydrogen", 3),
            ElectrolyzeFluidOutPositive("kubejs:chlorine", 3),
            ElectrolyzeFluidOutSub("kubejs:caustic_soda", 6)
        ],
        "jei": [
            ElectrolyzeStructure,
            ElectrolyzeEnergyInput(1440),
            ElectrolyzeFluidInput1("kubejs:saline_water", 6000),
            ElectrolyzeFluidOutput1("kubejs:hydrogen", 3000),
            ElectrolyzeFluidOutput2("kubejs:chlorine", 3000),
            ElectrolyzeFluidOutput3("kubejs:caustic_soda", 6000)
        ]
    }).id("dut_create:electrolytic_cell/saline_water")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:electrolytic_cell",
        "time": 30,
        "priority": 1,
        "error": true,
        "requirements": [
            ElectrolyzeStructure,
            ElectrolyzeSound,
            ElectrolyzeParticle,
            ElectrolyzeEnergyInput(1080),
            ElectrolyzeFluidInput1("kubejs:nitrogen", 3000),
            ElectrolyzeFluidInput2("#forge:oxygen", 6000),
            ElectrolyzeFluidOutSub("kubejs:nitrogen_dioxide", 6)
        ],
        "jei": [
            ElectrolyzeStructure,
            ElectrolyzeEnergyInput(1080),
            ElectrolyzeFluidInput1("kubejs:nitrogen", 3000),
            ElectrolyzeFluidInput2("#forge:oxygen", 6000),
            ElectrolyzeFluidOutput3("kubejs:nitrogen_dioxide", 6000)
        ]
    }).id("dut_create:electrolytic_cell/nitrogen_dioxide")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:electrolytic_cell",
        "time": 40,
        "priority": 1,
        "error": true,
        "requirements": [
            ElectrolyzeStructure,
            ElectrolyzeSound,
            ElectrolyzeParticle,
            ElectrolyzeEnergyInput(720),
            ElectrolyzeElectrodeNegative(1),
            ElectrolyzeFluidInput1("kubejs:ammonia", 4000),
            ElectrolyzeFluidInput2("#forge:oxygen", 16000),
            ElectrolyzeFluidOutNegative("kubejs:nitrogen_dioxide", 2),
            ElectrolyzeFluidOutSub("kubejs:nitric_acid", 2)
        ],
        "jei": [
            ElectrolyzeStructure,
            ElectrolyzeEnergyInput(720),
            ElectrolyzeFluidInput1("kubejs:ammonia", 4000),
            ElectrolyzeFluidInput2("#forge:oxygen", 16000),
            ElectrolyzeFluidOutput1("kubejs:nitrogen_dioxide", 2000),
            ElectrolyzeFluidOutput3("kubejs:nitric_acid", 2000)
        ]
    }).id("dut_create:electrolytic_cell/nitric_acid")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:electrolytic_cell",
        "time": 60,
        "priority": 1,
        "error": true,
        "requirements": [
            ElectrolyzeStructure,
            ElectrolyzeSound,
            ElectrolyzeParticle,
            ElectrolyzeEnergyInput(1440),
            ElectrolyzeElectrodePositive(1),
            ElectrolyzeElectrodeNegative(1),
            ElectrolyzeFluidInput1("kubejs:muriatic_acid", 6000),
            ElectrolyzeFluidOutNegative("kubejs:hydrogen", 3),
            ElectrolyzeFluidOutPositive("kubejs:chlorine", 3),
        ],
        "jei": [
            ElectrolyzeStructure,
            ElectrolyzeEnergyInput(1440),
            ElectrolyzeFluidInput1("kubejs:muriatic_acid", 6000),
            ElectrolyzeFluidOutput1("kubejs:hydrogen", 3000),
            ElectrolyzeFluidOutput3("kubejs:chlorine", 3000)
        ]
    }).id("dut_create:electrolytic_cell/muriatic_acid")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:electrolytic_cell",
        "time": 60,
        "priority": 1,
        "error": true,
        "requirements": [
            ElectrolyzeStructure,
            ElectrolyzeSound,
            ElectrolyzeParticle,
            ElectrolyzeEnergyInput(1800),
            ElectrolyzeElectrodeNegative(1),
            ElectrolyzeFluidInput2("kubejs:fused_alumina", 2880),
            ElectrolyzeItem("output", "kubejs:aluminum_slag", 32)
        ],
        "jei": [
            ElectrolyzeStructure,
            ElectrolyzeEnergyInput(1800),
            ElectrolyzeFluidInput2("kubejs:fused_alumina", 2880),
            ElectrolyzeItem("output", "kubejs:aluminum_slag", 32)
        ]
    }).id("dut_create:electrolytic_cell/aluminum_slag")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:electrolytic_cell",
        "time": 240,
        "priority": 1,
        "error": true,
        "requirements": [
            ElectrolyzeStructure,
            ElectrolyzeSound,
            ElectrolyzeParticle,
            ElectrolyzeEnergyInput(24576),
            ElectrolyzeElectrodePositive(1),
            ElectrolyzeFluidInput2("createbigcannons:molten_steel", 360),
            ElectrolyzeItem("input", "iceandfire:lightning_dragon_blood", 4),
            ElectrolyzeItem("output", "iceandfire:dragonsteel_lightning_ingot", 4)
        ],
        "jei": [
            ElectrolyzeStructure,
            ElectrolyzeEnergyInput(24576),
            ElectrolyzeFluidInput2("createbigcannons:molten_steel", 360),
            ElectrolyzeItem("input", "iceandfire:lightning_dragon_blood", 4),
            ElectrolyzeItem("output", "iceandfire:dragonsteel_lightning_ingot", 4)
        ]
    }).id("dut_create:electrolytic_cell/dragonsteel_lightning_ingot")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:electrolytic_cell",
        "time": 240,
        "priority": 1,
        "error": true,
        "requirements": [
            ElectrolyzeStructure,
            ElectrolyzeSound,
            ElectrolyzeParticle,
            ElectrolyzeEnergyInput(2880),
            ElectrolyzeElectrodePositive(1),
            ElectrolyzeElectrodeNegative(1),
            ElectrolyzeFluidInput1("kubejs:desh", 10800),
            ElectrolyzeFluidInput2("kubejs:tin", 7200),
            ElectrolyzeItem("input", "kubejs:granite_alloy", 24),
            ElectrolyzeItem("output", "kubejs:bronze_triangle", 4)
        ],
        "jei": [
            ElectrolyzeStructure,
            ElectrolyzeEnergyInput(2880),
            ElectrolyzeFluidInput1("kubejs:desh", 10800),
            ElectrolyzeFluidInput2("kubejs:tin", 7200),
            ElectrolyzeItem("input", "kubejs:granite_alloy", 24),
            ElectrolyzeItem("output", "kubejs:bronze_triangle", 4)
        ]
    }).id("dut_create:electrolytic_cell/bronze_triangle")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:electrolytic_cell",
        "time": 20,
        "priority": 1,
        "error": true,
        "requirements": [
            ElectrolyzeStructure,
            ElectrolyzeSound,
            ElectrolyzeParticle,
            ElectrolyzeEnergyInput(360),
            ElectrolyzeBiome("ad_astra:orbit"),
            ElectrolyzeItem("input", "kubejs:granite_alloy", 24),
            ElectrolyzeItem("output", "kubejs:diorite_alloy", 24),
            ElectrolyzeFluidOutSub("kubejs:nitrogen", 1)
        ],
        "jei": [
            ElectrolyzeStructure,
            ElectrolyzeEnergyInput(360),
            ElectrolyzeBiome("ad_astra:orbit"),
            ElectrolyzeItem("input", "kubejs:granite_alloy", 24),
            ElectrolyzeItem("output", "kubejs:diorite_alloy", 24),
            ElectrolyzeFluidOutput3("kubejs:nitrogen", 1000)
        ]
    }).id("dut_create:electrolytic_cell/granite_alloy")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:electrolytic_cell",
        "time": 30,
        "priority": 1,
        "error": true,
        "requirements": [
            ElectrolyzeStructure,
            ElectrolyzeSound,
            ElectrolyzeParticle,
            ElectrolyzeEnergyInput(360),
            ElectrolyzeDimension("ad_astra:moon"),
            ElectrolyzeFluidInput1("#forge:hydrogen", 500),
            ElectrolyzeFluidInput2("kubejs:chlorine", 500),
            ElectrolyzeItem("input", "minecraft:packed_mud", 8),
            ElectrolyzeItem("input", "ad_astra:cheese", 4),
            ElectrolyzeItem("output", "ad_astra:moon_sand", 24),
        ],
        "jei": [
            ElectrolyzeStructure,
            ElectrolyzeEnergyInput(360),
            ElectrolyzeDimension("ad_astra:moon"),
            ElectrolyzeFluidInput1("#forge:hydrogen", 500),
            ElectrolyzeFluidInput2("kubejs:chlorine", 500),
            ElectrolyzeItem("input", "minecraft:packed_mud", 8),
            ElectrolyzeItem("input", "ad_astra:cheese", 4),
            ElectrolyzeItem("output", "ad_astra:moon_sand", 24),
        ]
    }).id("dut_create:electrolytic_cell/moon_solid")
})