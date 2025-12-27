ServerEvents.recipes(event => {
    //
    function CrusherItem(mode, item, amount) {
        return ({
            "type": "custommachinery:item",
            "mode": mode,
            "item": item,
            "amount": amount
        })
    }
    const CrusherStructure =
    {
        "type": "custommachinery:structure",
        "pattern": [
            [
                "  AAA  ",
                " BACAB ",
                "HHAAAHH",
                "   B   ",
                "   B   ",
                "   B   ",
                "   B   ",
                "   B   ",
                "HHAAAHH",
                " BACAB ",
                "  AAA  "
            ],
            [
                "  AAA  ",
                " BACAB ",
                "HHAAAHH",
                "   B   ",
                "   B   ",
                "   B   ",
                "   B   ",
                "   B   ",
                "HHAAAHH",
                " BACAB ",
                "  AAA  "
            ],
            [
                "       ",
                " B D B ",
                "HHIDIHH",
                "   D   ",
                "   D   ",
                "  Mmg  ",
                "   R   ",
                "   R   ",
                "HHSqSHH",
                " B   B ",
                "       "
            ],
            [
                "       ",
                " B E B ",
                "JBAAABJ",
                "JB   BJ",
                "JB P BJ",
                "JB Q BJ",
                "JB R BJ",
                "JB P BJ",
                "JBAAABJ",
                " B E B ",
                "       "
            ],
            [
                "       ",
                " FEGEF ",
                " KACAK ",
                " KN OK ",
                " KO NK ",
                " KN OK ",
                " KO NK ",
                " KN OK ",
                " KACAK ",
                " FEGEF ",
                "       "
            ],
            [
                "       ",
                "       ",
                " LAAAL ",
                "       ",
                "       ",
                "       ",
                "       ",
                "       ",
                " LAAAL ",
                "       ",
                "       "
            ]
        ],
        "keys":
        {
            "E": "design_decor:diagonal_metal_support",
            "P": "design_decor:industrial_gear",
            "O": "create:crushing_wheel",
            "R": "create:encased_chain_drive",
            "G": "design_decor:industrial_iron_boiler",
            "J": "minecraft:smooth_stone_slab",
            "L": "design_decor:andesite_floodlight[facing=up]",
            "B": "ad_astra:iron_pillar",
            "Q": "create:gearbox",
            "q": "create:gearbox[axis=y]",
            "K": "create_things_and_misc:brass_bricks",
            "F": "create_things_and_misc:brass_brick_stairs",
            "N": "design_decor:industrial_gear_large",
            "H": "design_decor:industrial_plating_block",
            "M": "#dut_create:red_container",
            "g": "#dut_create:green_container",
            "A": "design_decor:industrial_iron_boiler_structure",
            "I": "create:display_board",
            "C": "design_decor:industrial_iron_boiler_large",
            "S": "create:andesite_casing",
            "D": "create:encased_fluid_pipe"
        }
    }
    const CrusherSound = {
        "type": "custommachinery:command",
        "phase": "crafting_tickable",
        "command": "/playsound create:crushing_1 block @a[distance=..24] ~ ~2 ~",
        "log": false,
        "permissionlevel": 5
    }
    const CrusherParticle = {
        "type": "custommachinery:command",
        "phase": "crafting_tickable",
        "command": "/function dut:particle/crusher",
        "log": false,
        "permissionlevel": 5
    }
    const CrusherStress = {
        "type": "custommachinery:contraption",
        "mode": "input",
        "speed": 256
    }
    const CrusherFluid = {
        "type": "custommachinery:fluid",
        "mode": "input",
        "fluid": "kubejs:hydrofluid",
        "amount": 1
    }
    const CrusherFluid1 = {
        "type": "custommachinery:fluid",
        "mode": "input",
        "fluid": "minecraft:water",
        "amount": 50
    }
    
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:huge_crusher",
        "time": 10,
        "error": true,
        "hidden": true,
        "priority": 0,
        "requirements": [
            CrusherStructure,
            {
                "type": "custommachinery:fluid_per_tick",
                "mode": "input",
                "fluid": "minecraft:water",
                "amount": 50
            },
            {
                "type": "custommachinery:fluid_per_tick",
                "mode": "output",
                "fluid": "kubejs:hydrofluid",
                "amount": 50
            }
        ]
    }).id("dut_create:huge_crusher/empty")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:huge_crusher",
        "time": 1,
        "error": true,
        "hidden": true,
        "priority": 1,
        "requirements": [
            CrusherStructure,
            CrusherFluid1,
            CrusherStress,
            {
                "type": "custommachinery:fluid",
                "mode": "output",
                "fluid": "kubejs:hydrofluid",
                "amount": 1000
            }
        ]
    }).id("dut_create:huge_crusher/fluid")
    function CrusherCommon(InputList, OutputList, id) {
        let List = InputList.map(i => CrusherItem("input", i.id, i.count)).concat(OutputList.map(i => CrusherItem("output", i.id, i.count)))
        let List1 = InputList.map(i => CrusherItem("input", i.id, 2*i.count)).concat(OutputList.map(i => CrusherItem("output", i.id, 2*i.count)))
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:huge_crusher",
            "time": 1,
            "error": true,
            "hidden":false,
            "priority": 10,
            "requirements": [
                CrusherStress,
                CrusherFluid,
                CrusherFluid1
            ].concat(List),
            "jei": [
                CrusherStructure,
                CrusherStress,
                CrusherFluid,
                CrusherFluid1
            ].concat(List)
        }).id("dut_create:huge_crusher/" + id)
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:huge_crusher",
            "time": 1,
            "error": true,
            "hidden":true,
            "priority": 20,
            "requirements": [
                CrusherStress,
                CrusherFluid,
                CrusherFluid1
            ].concat(List1)
        }).id("dut_create:huge_crusher/fast/" + id)
    }
    CrusherCommon([{ id: "minecraft:cobblestone", count: 64 }], [{ id: "minecraft:gravel", count: 64 }], "cobblestone")

    CrusherCommon([{ id: "minecraft:gravel", count: 64 }], [{ id: "minecraft:sand", count: 64 }, { id: "minecraft:flint", count: 6 }, { id: "minecraft:clay_ball", count: 4 }], "gravel")

    CrusherCommon([{ id: "#create:stone_types/limestone", count: 64 }], [{ id: "minecraft:calcite", count: 32 }, { id: "minecraft:bone_meal", count: 32 }, { id: "minecraft:clay_ball", count: 8 }], "limestone")

    CrusherCommon([{ id: "minecraft:coal", count: 64 }], [{ id: "kubejs:crushed_coal", count: 112 }, { id: "kubejs:graphite", count: 32 }], "coal")

    CrusherCommon([{ id: "minecraft:amethyst_cluster", count: 4 }], [{ id: "minecraft:quartz", count: 60 }, { id: "minecraft:purple_dye", count: 15 }], "amethyst_cluster")

    CrusherCommon([{ id: "createloveandwar:raw_sulphur", count: 64 }], [{ id: "kubejs:sulphur", count: 80 }], "sulphur")

    CrusherCommon([{ id: "minecraft:netherrack", count: 64 }], [{ id: "create:cinder_flour", count: 128 }], "netherrack")

    CrusherCommon([{ id: "createloveandwar:raw_tungsten", count: 32 }], [{ id: "createloveandwar:crushed_tungsten", count: 40 }], "tungsten")

    CrusherCommon([{ id: "#create:stone_types/asurine", count: 64 }], [{ id: "create:crushed_raw_zinc", count: 80 }], "zinc")

    CrusherCommon([{ id: "#create:stone_types/crimsite", count: 64 }], [{ id: "create:crushed_raw_iron", count: 80 }], "iron")

    CrusherCommon([{ id: "#create:stone_types/ochrum", count: 64 }], [{ id: "create:crushed_raw_gold", count: 80 }], "gold")

    CrusherCommon([{ id: "#create:stone_types/veridium", count: 64 }], [{ id: "create:crushed_raw_copper", count: 80 }], "copper")

    CrusherCommon([{ id: "kubejs:raw_tin", count: 64 }], [{ id: "create:crushed_raw_tin", count: 80 }], "tin")

    CrusherCommon([{ id: "kubejs:aluminite", count: 64 }], [{ id: "kubejs:aluminite_powder", count: 80 }], "aluminite")

    CrusherCommon([{ id: "minecraft:quartz", count: 64 }], [{ id: "create:experience_nugget", count: 32 }], "quartz")

    CrusherCommon([{ id: "#dut_create:moon_solid", count: 64 }], [{ id: "ad_astra:moon_sand", count: 64 }], "moon_sand")
})