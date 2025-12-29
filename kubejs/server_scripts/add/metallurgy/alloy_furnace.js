ServerEvents.recipes(event => {
    //
    const AlloyFurnaceCommand1 = {
        "type": "custommachinery:command",
        "phase": "ending",
        "command": "/playsound minecraft:block.lava.extinguish block @a[distance=..24] ~ ~-5 ~ 0.5",
        "log": false,
        "chance": 0.5,
        "permissionlevel": 5
    }
    const AlloyFurnaceCommand2 = {
        "type": "custommachinery:command",
        "phase": "ending",
        "command": "/playsound minecraft:block.lava.ambient block @a[distance=..24] ~ ~-5 ~ 0.5",
        "log": false,
        "chance": 0.75,
        "permissionlevel": 5
    }
    const AlloyFurnaceStructure =
    {
        "type": "custommachinery:structure",
        "pattern":
            [
                [
                    "       ",
                    "  C C  ",
                    " CGGGC ",
                    "  GGG  ",
                    " CGGGC ",
                    "  C C  ",
                    "       "
                ],
                [
                    "       ",
                    "  DDD  ",
                    " DHHHD ",
                    " DHHHD ",
                    " DHHHD ",
                    "  DDD  ",
                    "       "
                ],
                [
                    " AABAA ",
                    "A  E  A",
                    "A III A",
                    "AFIMIFA",
                    "A III A",
                    "A  F  A",
                    " AAAAA "
                ],
                [
                    "       ",
                    "       ",
                    "  III  ",
                    " FIMIF ",
                    "  III  ",
                    "   O   ",
                    "       "
                ],
                [
                    "       ",
                    "   F   ",
                    "  III  ",
                    " CIMIC ",
                    "  III  ",
                    "   C   ",
                    "       "
                ],
                [
                    "       ",
                    "   C   ",
                    "  III  ",
                    " CIMIC ",
                    "  III  ",
                    "   C   ",
                    "       "
                ],
                [
                    "       ",
                    "   B   ",
                    "  JDJ  ",
                    " BDEDB ",
                    "  JDJ  ",
                    "   B   ",
                    "       "
                ],
                [
                    "       ",
                    "       ",
                    "       ",
                    "   E   ",
                    "       ",
                    "       ",
                    "       "
                ],
                [
                    "       ",
                    "       ",
                    "   K   ",
                    "  KmK  ",
                    "   K   ",
                    "       ",
                    "       "
                ],
                [
                    "       ",
                    "       ",
                    "   L   ",
                    "  LNL  ",
                    "   L   ",
                    "       ",
                    "       "
                ],
                [
                    "       ",
                    "       ",
                    "   B   ",
                    "  BEB  ",
                    "   B   ",
                    "       ",
                    "       "
                ]
            ],
        "keys": {
            "O": "design_decor:stepped_lever",
            "K": "#dut_create:funnel",
            "B": "design_decor:diagonal_girder",
            "N": "railways:smokestack_oilburner",
            "J": "design_decor:andesite_floodlight[facing=up]",
            "M": "design_decor:industrial_iron_boiler_large",
            "A": "design_decor:iron_railing",
            "E": "design_decor:industrial_iron_boiler",
            "I": "design_decor:industrial_iron_boiler_structure",
            "C": "create:metal_girder",
            "L": "design_decor:metal_support",
            "G": "createaddition:liquid_blaze_burner[blaze=kindled]",
            "D": "create:industrial_iron_block",
            "F": "design_decor:diagonal_metal_support",
            "H": "design_decor:ornate_grate"
        },
        "jei": true
    }
    const AlloyFurnaceReplaceFliter = [
        "minecraft:air",
        "minecraft:void_air",
        "minecraft:cave_air",
        "kubejs:industrial_iron[level=1]",
        "kubejs:industrial_iron[level=2]",
        "kubejs:industrial_iron[level=3]",
        "kubejs:industrial_iron[level=4]",
        "kubejs:industrial_iron[level=5]",
        "kubejs:industrial_iron[level=6]",
        "kubejs:industrial_iron[level=7]",
        "kubejs:industrial_iron[level=8]",
        "kubejs:industrial_iron[level=9]",
        "kubejs:industrial_iron[level=10]",
        "kubejs:industrial_iron[level=11]",
        "kubejs:industrial_iron[level=12]",
        "kubejs:industrial_iron[level=13]",
        "kubejs:industrial_iron[level=14]",
        "kubejs:industrial_iron[level=15]",
        "kubejs:brass[level=1]",
        "kubejs:brass[level=2]",
        "kubejs:brass[level=3]",
        "kubejs:brass[level=4]",
        "kubejs:brass[level=5]",
        "kubejs:brass[level=6]",
        "kubejs:brass[level=7]",
        "kubejs:brass[level=8]",
        "kubejs:brass[level=9]",
        "kubejs:brass[level=10]",
        "kubejs:brass[level=11]",
        "kubejs:brass[level=12]",
        "kubejs:brass[level=13]",
        "kubejs:brass[level=14]",
        "kubejs:brass[level=15]",
        "kubejs:new_zinc[level=1]",
        "kubejs:new_zinc[level=2]",
        "kubejs:new_zinc[level=3]",
        "kubejs:new_zinc[level=4]",
        "kubejs:new_zinc[level=5]",
        "kubejs:new_zinc[level=6]",
        "kubejs:new_zinc[level=7]",
        "kubejs:new_zinc[level=8]",
        "kubejs:new_zinc[level=9]",
        "kubejs:new_zinc[level=10]",
        "kubejs:new_zinc[level=11]",
        "kubejs:new_zinc[level=12]",
        "kubejs:new_zinc[level=13]",
        "kubejs:new_zinc[level=14]",
        "kubejs:new_zinc[level=15]",
        "kubejs:copper[level=1]",
        "kubejs:copper[level=2]",
        "kubejs:copper[level=3]",
        "kubejs:copper[level=4]",
        "kubejs:copper[level=5]",
        "kubejs:copper[level=6]",
        "kubejs:copper[level=7]",
        "kubejs:copper[level=8]",
        "kubejs:copper[level=9]",
        "kubejs:copper[level=10]",
        "kubejs:copper[level=11]",
        "kubejs:copper[level=12]",
        "kubejs:copper[level=13]",
        "kubejs:copper[level=14]",
        "kubejs:copper[level=15]",
        "kubejs:tin[level=1]",
        "kubejs:tin[level=2]",
        "kubejs:tin[level=3]",
        "kubejs:tin[level=4]",
        "kubejs:tin[level=5]",
        "kubejs:tin[level=6]",
        "kubejs:tin[level=7]",
        "kubejs:tin[level=8]",
        "kubejs:tin[level=9]",
        "kubejs:tin[level=10]",
        "kubejs:tin[level=11]",
        "kubejs:tin[level=12]",
        "kubejs:tin[level=13]",
        "kubejs:tin[level=14]",
        "kubejs:tin[level=15]",
        "kubejs:iron[level=1]",
        "kubejs:iron[level=2]",
        "kubejs:iron[level=3]",
        "kubejs:iron[level=4]",
        "kubejs:iron[level=5]",
        "kubejs:iron[level=6]",
        "kubejs:iron[level=7]",
        "kubejs:iron[level=8]",
        "kubejs:iron[level=9]",
        "kubejs:iron[level=10]",
        "kubejs:iron[level=11]",
        "kubejs:iron[level=12]",
        "kubejs:iron[level=13]",
        "kubejs:iron[level=14]",
        "kubejs:iron[level=15]",
        "kubejs:gold[level=1]",
        "kubejs:gold[level=2]",
        "kubejs:gold[level=3]",
        "kubejs:gold[level=4]",
        "kubejs:gold[level=5]",
        "kubejs:gold[level=6]",
        "kubejs:gold[level=7]",
        "kubejs:gold[level=8]",
        "kubejs:gold[level=9]",
        "kubejs:gold[level=10]",
        "kubejs:gold[level=11]",
        "kubejs:gold[level=12]",
        "kubejs:gold[level=13]",
        "kubejs:gold[level=14]",
        "kubejs:gold[level=15]",
        "kubejs:silver[level=1]",
        "kubejs:silver[level=2]",
        "kubejs:silver[level=3]",
        "kubejs:silver[level=4]",
        "kubejs:silver[level=5]",
        "kubejs:silver[level=6]",
        "kubejs:silver[level=7]",
        "kubejs:silver[level=8]",
        "kubejs:silver[level=9]",
        "kubejs:silver[level=10]",
        "kubejs:silver[level=11]",
        "kubejs:silver[level=12]",
        "kubejs:silver[level=13]",
        "kubejs:silver[level=14]",
        "kubejs:silver[level=15]",
        "kubejs:desh[level=1]",
        "kubejs:desh[level=2]",
        "kubejs:desh[level=3]",
        "kubejs:desh[level=4]",
        "kubejs:desh[level=5]",
        "kubejs:desh[level=6]",
        "kubejs:desh[level=7]",
        "kubejs:desh[level=8]",
        "kubejs:desh[level=9]",
        "kubejs:desh[level=10]",
        "kubejs:desh[level=11]",
        "kubejs:desh[level=12]",
        "kubejs:desh[level=13]",
        "kubejs:desh[level=14]",
        "kubejs:desh[level=15]",
        "kubejs:aluminum[level=1]",
        "kubejs:aluminum[level=2]",
        "kubejs:aluminum[level=3]",
        "kubejs:aluminum[level=4]",
        "kubejs:aluminum[level=5]",
        "kubejs:aluminum[level=6]",
        "kubejs:aluminum[level=7]",
        "kubejs:aluminum[level=8]",
        "kubejs:aluminum[level=9]",
        "kubejs:aluminum[level=10]",
        "kubejs:aluminum[level=11]",
        "kubejs:aluminum[level=12]",
        "kubejs:aluminum[level=13]",
        "kubejs:aluminum[level=14]",
        "kubejs:aluminum[level=15]",
        "kubejs:ammonia[level=1]",
        "kubejs:ammonia[level=2]",
        "kubejs:ammonia[level=3]",
        "kubejs:ammonia[level=4]",
        "kubejs:ammonia[level=5]",
        "kubejs:ammonia[level=6]",
        "kubejs:ammonia[level=7]",
        "kubejs:ammonia[level=8]",
        "kubejs:ammonia[level=9]",
        "kubejs:ammonia[level=10]",
        "kubejs:ammonia[level=11]",
        "kubejs:ammonia[level=12]",
        "kubejs:ammonia[level=13]",
        "kubejs:ammonia[level=14]",
        "kubejs:ammonia[level=15]",
        "kubejs:pressurized_steam[level=1]",
        "kubejs:pressurized_steam[level=2]",
        "kubejs:pressurized_steam[level=3]",
        "kubejs:pressurized_steam[level=4]",
        "kubejs:pressurized_steam[level=5]",
        "kubejs:pressurized_steam[level=6]",
        "kubejs:pressurized_steam[level=7]",
        "kubejs:pressurized_steam[level=8]",
        "kubejs:pressurized_steam[level=9]",
        "kubejs:pressurized_steam[level=10]",
        "kubejs:pressurized_steam[level=11]",
        "kubejs:pressurized_steam[level=12]",
        "kubejs:pressurized_steam[level=13]",
        "kubejs:pressurized_steam[level=14]",
        "kubejs:pressurized_steam[level=15]",
        "vintageimprovements:sulfuric_acid[level=1]",
        "vintageimprovements:sulfuric_acid[level=2]",
        "vintageimprovements:sulfuric_acid[level=3]",
        "vintageimprovements:sulfuric_acid[level=4]",
        "vintageimprovements:sulfuric_acid[level=5]",
        "vintageimprovements:sulfuric_acid[level=6]",
        "vintageimprovements:sulfuric_acid[level=7]",
        "vintageimprovements:sulfuric_acid[level=8]",
        "vintageimprovements:sulfuric_acid[level=9]",
        "vintageimprovements:sulfuric_acid[level=10]",
        "vintageimprovements:sulfuric_acid[level=11]",
        "vintageimprovements:sulfuric_acid[level=12]",
        "vintageimprovements:sulfuric_acid[level=13]",
        "vintageimprovements:sulfuric_acid[level=14]",
        "vintageimprovements:sulfuric_acid[level=15]"
    ]
    function AlloyFurnaceItemNBT(mode, item, amount, nbt) {
        return ({
            "type": "custommachinery:item",
            "mode": mode,
            "item": item,
            "nbt": nbt,
            "amount": amount
        })
    }
    function AlloyFurnaceReplace(amount, block) {
        return ({
            "type": "custommachinery:block",
            "mode": "output",
            "action": "replace_break",
            "amount": amount,
            "pos": [-1, -7, -3, 1, -7, -8],
            "filter": AlloyFurnaceReplaceFliter,
            "whitelist": true,
            "block": block
        })
    }
    function AlloyFurnaceItem(item, amount, mode) {
        return ({
            "type": "custommachinery:item",
            "mode": mode,
            "item": item,
            "amount": amount
        })
    }
    function AlloyFurnaceItemChance(item, amount, chance) {
        return ({
            "type": "custommachinery:item",
            "mode": "output",
            "chance": chance,
            "item": item,
            "amount": amount
        })
    }
    function AlloyFurnaceFluid(fluid, amount) {
        return ({
            "type": "custommachinery:fluid",
            "mode": "output",
            "tank": "sim_fluid",
            "fluid": fluid,
            "amount": amount * 1000
        })
    }
    function AlloyFurnaceDimension(dimension) {
        return ({
            "type": "custommachinery:dimension",
            "filter": dimension,
            "blacklist": false
        })
    }
    function AlloyFurnaceBiome(biome) {
        return ({
            "type": "custommachinery:biome",
            "filter": biome,
            "blacklist": false
        })
    }
    function AlloyFurnaceRecipe(Requirements, jeiExtra, time, id) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:alloy_furnace",
            "time": time,
            "priority": 2,
            "error": true,
            "requirements": [
                AlloyFurnaceStructure,
                AlloyFurnaceCommand1,
                AlloyFurnaceCommand2
            ].concat(Requirements),
            "jei": [
                AlloyFurnaceStructure
            ].concat(Requirements).concat(jeiExtra)
        }).id("dut_create:alloy_furnace/" + id)
    }
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 20,
        "priority": 1,
        "error": true,
        "requirements": [
            AlloyFurnaceStructure,
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceItem("minecraft:cobblestone", 128, "input"),
            AlloyFurnaceItem("minecraft:red_dye", 8, "input"),
            AlloyFurnaceItem("create:cinder_flour", 128, "output"),
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceItem("minecraft:cobblestone", 128, "input"),
            AlloyFurnaceItem("minecraft:red_dye", 8, "input"),
            AlloyFurnaceItem("create:cinder_flour", 128, "output"),
        ]
    }).id("dut_create:alloy_furnace/cinder_flour")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 20,
        "priority": 1,
        "error": true,
        "requirements": [
            AlloyFurnaceStructure,
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceItem("#minecraft:logs_that_burn", 96, "input"),
            AlloyFurnaceItem("minecraft:charcoal", 128, "output"),
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceItem("#minecraft:logs_that_burn", 96, "input"),
            AlloyFurnaceItem("minecraft:charcoal", 128, "output"),
        ]
    }).id("dut_create:alloy_furnace/charcoal")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 20,
        "priority": 1,
        "error": true,
        "requirements": [
            AlloyFurnaceStructure,
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceItem("minecraft:potato", 32, "input"),
            AlloyFurnaceItem("kubejs:salt", 16, "input"),
            AlloyFurnaceItem("kubejs:french_fries", 96, "output")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceItem("minecraft:potato", 32, "input"),
            AlloyFurnaceItem("kubejs:salt", 16, "input"),
            AlloyFurnaceItem("kubejs:french_fries", 96, "output")

        ]
    }).id("dut_create:alloy_furnace/french_fries")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 30,
        "priority": 2,
        "error": true,
        "requirements": [
            AlloyFurnaceStructure,
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceReplace(6, "kubejs:industrial_iron"),
            AlloyFurnaceItem("#forge:plates/iron", 54, "input"),
            AlloyFurnaceItem("create:andesite_alloy", 18, "input"),
            AlloyFurnaceItem("kubejs:granite_alloy", 18, "output")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(6, "kubejs:industrial_iron"),
            AlloyFurnaceItem("#forge:plates/iron", 54, "input"),
            AlloyFurnaceItem("create:andesite_alloy", 18, "input"),
            AlloyFurnaceItem("kubejs:granite_alloy", 18, "output"),
            AlloyFurnaceFluid("kubejs:industrial_iron", 6)
        ]
    }).id("dut_create:alloy_furnace/industrial_iron")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 100,
        "error": true,
        "priority": 1,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:industrial_iron"),
            AlloyFurnaceItem("#forge:ingots/industrial_iron", 100, "input")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:industrial_iron"),
            AlloyFurnaceItem("#forge:ingots/industrial_iron", 100, "input"),
            AlloyFurnaceFluid("kubejs:industrial_iron", 9)
        ]
    }).id("dut_create:alloy_furnace/industrial_iron_melt")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 30,
        "error": true,
        "priority": 2,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(6, "kubejs:industrial_iron"),
            AlloyFurnaceItem("minecraft:iron_block", 6, "input"),
            AlloyFurnaceItem("create:andesite_alloy", 18, "input"),
            AlloyFurnaceItem("kubejs:granite_alloy", 18, "output")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(6, "kubejs:industrial_iron"),
            AlloyFurnaceItem("minecraft:iron_block", 6, "input"),
            AlloyFurnaceItem("create:andesite_alloy", 18, "input"),
            AlloyFurnaceItem("kubejs:granite_alloy", 18, "output"),
            AlloyFurnaceFluid("kubejs:industrial_iron", 6)
        ]
    }).id("dut_create:alloy_furnace/industrial_iron_from_block")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 100,
        "error": true,
        "priority": 1,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:brass"),
            AlloyFurnaceItem("#forge:ingots/brass", 100, "input")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:brass"),
            AlloyFurnaceItem("#forge:ingots/brass", 100, "input"),
            AlloyFurnaceFluid("kubejs:brass", 9)
        ]
    }).id("dut_create:alloy_furnace/brass_melt")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "priority": 1,
        "time": 40,
        "error": true,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(12, "kubejs:brass"),
            AlloyFurnaceItem("#forge:plates/copper", 54, "input"),
            AlloyFurnaceItem("#forge:plates/gold", 54, "input"),
            AlloyFurnaceItem("kubejs:diorite_alloy", 18, "output")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(12, "kubejs:brass"),
            AlloyFurnaceItem("#forge:plates/copper", 54, "input"),
            AlloyFurnaceItem("#forge:plates/gold", 54, "input"),
            AlloyFurnaceItem("kubejs:diorite_alloy", 18, "output"),
            AlloyFurnaceFluid("kubejs:brass", 12)
        ]
    }).id("dut_create:alloy_furnace/brass")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "priority": 1,
        "time": 60,
        "error": true,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(12, "kubejs:brass"),
            AlloyFurnaceItem("#forge:storage_blocks/copper", 6, "input"),
            AlloyFurnaceItem("#forge:storage_blocks/gold", 6, "input"),
            AlloyFurnaceItem("kubejs:diorite_alloy", 18, "output")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(12, "kubejs:brass"),
            AlloyFurnaceItem("#forge:storage_blocks/copper", 6, "input"),
            AlloyFurnaceItem("#forge:storage_blocks/gold", 6, "input"),
            AlloyFurnaceItem("kubejs:diorite_alloy", 18, "output"),
            AlloyFurnaceFluid("kubejs:brass", 12)
        ]
    }).id("dut_create:alloy_furnace/brass_from_block")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 100,
        "priority": 1,
        "error": true,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:copper"),
            AlloyFurnaceItem("#forge:ingots/copper", 100, "input")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:copper"),
            AlloyFurnaceItem("#forge:ingots/copper", 100, "input"),
            AlloyFurnaceFluid("kubejs:copper", 9)
        ]
    }).id("dut_create:alloy_furnace/copper_melt")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 30,
        "priority": 1,
        "error": true,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(6, "kubejs:copper"),
            AlloyFurnaceItem("create:crushed_raw_copper", 54, "input"),
            AlloyFurnaceItem("create:andesite_alloy", 6, "output")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(6, "kubejs:copper"),
            AlloyFurnaceItem("create:crushed_raw_copper", 54, "input"),
            AlloyFurnaceItem("create:andesite_alloy", 6, "output"),
            AlloyFurnaceFluid("kubejs:copper", 6)
        ]
    }).id("dut_create:alloy_furnace/copper_from_ore")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 100,
        "priority": 1,
        "error": true,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:new_zinc"),
            AlloyFurnaceItem("kubejs:new_zinc_ingot", 100, "input")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:new_zinc"),
            AlloyFurnaceItem("kubejs:new_zinc_ingot", 100, "input"),
            AlloyFurnaceFluid("kubejs:new_zinc", 9)
        ]
    }).id("dut_create:alloy_furnace/new_zinc_melt")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 30,
        "priority": 1,
        "error": true,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(6, "kubejs:new_zinc"),
            AlloyFurnaceItem("kubejs:new_crushed_raw_zinc", 54, "input"),
            AlloyFurnaceItem("create:andesite_alloy", 6, "output")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(6, "kubejs:new_zinc"),
            AlloyFurnaceItem("kubejs:new_crushed_raw_zinc", 54, "input"),
            AlloyFurnaceItem("create:andesite_alloy", 6, "output"),
            AlloyFurnaceFluid("kubejs:new_zinc", 6)
        ]
    }).id("dut_create:alloy_furnace/new_zinc_from_ore")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 100,
        "priority": 1,
        "error": true,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:iron"),
            AlloyFurnaceItem("#forge:ingots/iron", 100, "input")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:iron"),
            AlloyFurnaceItem("#forge:ingots/iron", 100, "input"),
            AlloyFurnaceFluid("kubejs:iron", 9)
        ]
    }).id("dut_create:alloy_furnace/iron_melt")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 30,
        "error": true,
        "priority": 1,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:iron"),
            AlloyFurnaceItem("create:crushed_raw_iron", 81, "input"),
            AlloyFurnaceItem("create:andesite_alloy", 9, "output")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:iron"),
            AlloyFurnaceItem("create:crushed_raw_iron", 81, "input"),
            AlloyFurnaceItem("create:andesite_alloy", 9, "output"),
            AlloyFurnaceFluid("kubejs:iron", 9)
        ]
    }).id("dut_create:alloy_furnace/iron_from_ore")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 100,
        "error": true,
        "priority": 1,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:gold"),
            AlloyFurnaceItem("#forge:ingots/gold", 100, "input")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:gold"),
            AlloyFurnaceItem("#forge:ingots/gold", 100, "input"),
            AlloyFurnaceFluid("kubejs:gold", 9)
        ]
    }).id("dut_create:alloy_furnace/gold_melt")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 30,
        "error": true,
        "priority": 1,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(6, "kubejs:gold"),
            AlloyFurnaceItem("create:crushed_raw_gold", 54, "input"),
            AlloyFurnaceItem("create:andesite_alloy", 6, "output")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(6, "kubejs:gold"),
            AlloyFurnaceItem("create:crushed_raw_gold", 54, "input"),
            AlloyFurnaceItem("create:andesite_alloy", 6, "output"),
            AlloyFurnaceFluid("kubejs:gold", 6)
        ]
    }).id("dut_create:alloy_furnace/gold_from_ore")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 100,
        "error": true,
        "priority": 1,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:tin"),
            AlloyFurnaceItem("#forge:ingots/tin", 100, "input")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:tin"),
            AlloyFurnaceItem("#forge:ingots/tin", 100, "input"),
            AlloyFurnaceFluid("kubejs:tin", 9)
        ]
    }).id("dut_create:alloy_furnace/tin_melt")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 30,
        "error": true,
        "priority": 1,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(6, "kubejs:tin"),
            AlloyFurnaceItem("create:crushed_raw_tin", 54, "input"),
            AlloyFurnaceItem("create:andesite_alloy", 6, "output")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(6, "kubejs:tin"),
            AlloyFurnaceItem("create:crushed_raw_tin", 54, "input"),
            AlloyFurnaceItem("create:andesite_alloy", 6, "output"),
            AlloyFurnaceFluid("kubejs:tin", 6)
        ]
    }).id("dut_create:alloy_furnace/tin_from_ore")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 20,
        "error": true,
        "priority": 2,
        "requirements": [
            AlloyFurnaceStructure,
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceItem("kubejs:blaze_chlamydia", 1, "input"),
            AlloyFurnaceItem("create:blaze_cake", 6, "input"),
            AlloyFurnaceItem("kubejs:blaze_chlamydia", 12, "output")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceItem("kubejs:blaze_chlamydia", 1, "input"),
            AlloyFurnaceItem("create:blaze_cake", 6, "input"),
            AlloyFurnaceItem("kubejs:blaze_chlamydia", 12, "output")
        ]
    }).id("dut_create:alloy_furnace/blaze_chlamydia")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 200,
        "error": true,
        "priority": 1,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:desh"),
            AlloyFurnaceItem("#forge:ingots/desh", 100, "input")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:desh"),
            AlloyFurnaceItem("#forge:ingots/desh", 100, "input"),
            AlloyFurnaceFluid("kubejs:desh", 9)
        ]
    }).id("dut_create:alloy_furnace/desh_melt")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 128,
        "error": true,
        "priority": 1,
        "requirements": [
            AlloyFurnaceDimension(["ad_astra:moon", "ad_astra:moon_orbit"]),
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(3, "kubejs:desh"),
            AlloyFurnaceItem("ad_astra:raw_desh", 27, "input"),
            AlloyFurnaceItem("ad_astra:moon_sand", 9, "input"),
            AlloyFurnaceItem("kubejs:salt", 3, "output")
        ],
        "jei": [
            AlloyFurnaceDimension(["ad_astra:moon", "ad_astra:moon_orbit"]),
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(3, "kubejs:desh"),
            AlloyFurnaceItem("ad_astra:raw_desh", 27, "input"),
            AlloyFurnaceItem("ad_astra:moon_sand", 9, "input"),
            AlloyFurnaceItem("kubejs:salt", 3, "output"),
            AlloyFurnaceFluid("kubejs:desh", 3)
        ]
    }).id("dut_create:alloy_furnace/desh_from_ore")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 96,
        "error": true,
        "priority": 1,
        "requirements": [
            AlloyFurnaceDimension(["ad_astra:moon", "ad_astra:moon_orbit"]),
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(5, "kubejs:desh"),
            AlloyFurnaceItem("ad_astra:raw_desh", 27, "input"),
            AlloyFurnaceItemNBT("input", "kubejs:matrix_2", 1, '{matrix:[[[0,3],[0,7]],[[0,0],[1,-2]]]}'),
            AlloyFurnaceItem("kubejs:salt", 3, "output")
        ],
        "jei": [
            AlloyFurnaceDimension(["ad_astra:moon", "ad_astra:moon_orbit"]),
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(5, "kubejs:desh"),
            AlloyFurnaceItem("ad_astra:raw_desh", 27, "input"),
            AlloyFurnaceItemNBT("input", "kubejs:matrix_2", 1, '{matrix:[[[0,3],[0,7]],[[0,0],[1,-2]]]}'),
            AlloyFurnaceItem("kubejs:salt", 3, "output"),
            AlloyFurnaceFluid("kubejs:desh", 5)
        ]
    }).id("dut_create:alloy_furnace/desh_from_ore/matrix")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 360,
        "priority": 1,
        "error": true,
        "requirements": [
            AlloyFurnaceStructure,
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceReplace(2, "kubejs:ammonia"),
            AlloyFurnaceItem("createloveandwar:crushed_tungsten", 54, "input"),
            AlloyFurnaceItem("#forge:ingots/tin", 18, "input"),
            AlloyFurnaceItem("createloveandwar:tungsten", 6, "output"),
            AlloyFurnaceItem("create:crushed_raw_tin", 18, "output")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(2, "kubejs:ammonia"),
            AlloyFurnaceItem("createloveandwar:crushed_tungsten", 54, "input"),
            AlloyFurnaceItem("#forge:ingots/tin", 18, "input"),
            AlloyFurnaceItem("createloveandwar:tungsten", 6, "output"),
            AlloyFurnaceItem("create:crushed_raw_tin", 18, "output"),
            AlloyFurnaceFluid("kubejs:ammonia", 2)
        ]
    }).id("dut_create:alloy_furnace/tungsten")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 240,
        "priority": 1,
        "error": true,
        "requirements": [
            AlloyFurnaceStructure,
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceReplace(3, "kubejs:ammonia"),
            AlloyFurnaceItem("createloveandwar:crushed_tungsten", 32, "input"),
            AlloyFurnaceItem("#forge:ingots/tin", 18, "input"),
            AlloyFurnaceItemNBT("input", "kubejs:matrix_2", 1, '{matrix:[[[3,7],[0,0]],[[0,-2],[0,1]]]}'),
            AlloyFurnaceItem("createloveandwar:tungsten", 8, "output"),
            AlloyFurnaceItem("create:crushed_raw_tin", 18, "output")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(3, "kubejs:ammonia"),
            AlloyFurnaceItem("createloveandwar:crushed_tungsten", 32, "input"),
            AlloyFurnaceItem("#forge:ingots/tin", 18, "input"),
            AlloyFurnaceItemNBT("input", "kubejs:matrix_2", 1, '{matrix:[[[3,7],[0,0]],[[0,-2],[0,1]]]}'),
            AlloyFurnaceItem("createloveandwar:tungsten", 8, "output"),
            AlloyFurnaceItem("create:crushed_raw_tin", 18, "output"),
            AlloyFurnaceFluid("kubejs:ammonia", 3)
        ]
    }).id("dut_create:alloy_furnace/tungsten/matrix")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 200,
        "error": true,
        "priority": 1,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:aluminum"),
            AlloyFurnaceItem("#forge:ingots/aluminum", 100, "input")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(9, "kubejs:aluminum"),
            AlloyFurnaceItem("#forge:ingots/aluminum", 100, "input"),
            AlloyFurnaceFluid("kubejs:aluminum", 9)
        ]
    }).id("dut_create:alloy_furnace/aluminum_melt")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 80,
        "error": true,
        "priority": 1,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(4, "kubejs:aluminum"),
            AlloyFurnaceItem("kubejs:aluminum_slag", 48, "input"),
            AlloyFurnaceItem("kubejs:salt", 8, "input"),
            AlloyFurnaceItem("kubejs:granite_alloy", 4, "input"),
            AlloyFurnaceItem("kubejs:diorite", 4, "output"),
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(4, "kubejs:aluminum"),
            AlloyFurnaceFluid("kubejs:aluminum", 4),
            AlloyFurnaceItem("kubejs:aluminum_slag", 48, "input"),
            AlloyFurnaceItem("kubejs:salt", 8, "input"),
            AlloyFurnaceItem("kubejs:granite_alloy", 4, "input"),
            AlloyFurnaceItem("kubejs:diorite", 4, "output"),
        ]
    }).id("dut_create:alloy_furnace/aluminum_from_slag")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 40,
        "error": true,
        "priority": 1,
        "requirements": [
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(1, "kubejs:aluminum"),
            AlloyFurnaceBiome("ad_astra:orbit"),
            AlloyFurnaceItem("kubejs:aluminite", 12, "input"),
            AlloyFurnaceItem("kubejs:diorite_alloy", 1, "input"),
            AlloyFurnaceItem("#forge:ingots/brass", 9, "input"),
            AlloyFurnaceItem("kubejs:granite_alloy", 1, "output"),
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceReplace(1, "kubejs:aluminum"),
            AlloyFurnaceFluid("kubejs:aluminum", 1),
            AlloyFurnaceBiome("ad_astra:orbit"),
            AlloyFurnaceItem("kubejs:aluminite", 12, "input"),
            AlloyFurnaceItem("kubejs:diorite_alloy", 1, "input"),
            AlloyFurnaceItem("#forge:ingots/brass", 9, "input"),
            AlloyFurnaceItem("kubejs:granite_alloy", 1, "output"),
        ]
    }).id("dut_create:alloy_furnace/aluminum_orbit")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:alloy_furnace",
        "time": 20,
        "error": true,
        "priority": 2,
        "requirements": [
            AlloyFurnaceStructure,
            AlloyFurnaceCommand1,
            AlloyFurnaceCommand2,
            AlloyFurnaceItem("kubejs:blaze_chlamydia", 1, "input"),
            AlloyFurnaceItem("kubejs:aluminum_slag", 6, "input"),
            AlloyFurnaceItem("kubejs:industrial_iron_ingot", 18, "input"),
            AlloyFurnaceItem("kubejs:blaze_chlamydia", 6, "output")
        ],
        "jei": [
            AlloyFurnaceStructure,
            AlloyFurnaceItem("kubejs:blaze_chlamydia", 1, "input"),
            AlloyFurnaceItem("kubejs:aluminum_slag", 6, "input"),
            AlloyFurnaceItem("kubejs:industrial_iron_ingot", 18, "input"),
            AlloyFurnaceItem("kubejs:blaze_chlamydia", 6, "output")
        ]
    }).id("dut_create:alloy_furnace/blaze_chlamydia_aluminum")
    let scalesTotal = randomOne(20, 32)
    let heartTotal = randomOne(20, 32)
    let fleshTotal = randomOne(20, 32)
    let bloodTotal = randomOne(20, 32)
    let scales = randomOne(9, 15)
    let heart = randomOne(9, 15)
    let flesh = randomOne(9, 15)
    let blood = randomOne(9, 15)
    let scalesIn = randomOne(9, 15)
    let heartIn = randomOne(9, 15)
    let fleshIn = randomOne(9, 15)
    let bloodIn = randomOne(9, 15)
    AlloyFurnaceRecipe([
        AlloyFurnaceReplace(1, "vintageimprovements:sulfuric_acid"),
        AlloyFurnaceItem("#dut_create:fire_dragonscales", scalesIn, "input"),
        AlloyFurnaceItemChance('iceandfire:fire_dragon_heart', scales, 0.75),
        AlloyFurnaceItemChance('iceandfire:fire_dragon_flesh', scalesTotal - scales, 0.2)],
        [AlloyFurnaceFluid("vintageimprovements:sulfuric_acid", 1)],
        20,
        "fire_dragon_scales")
    AlloyFurnaceRecipe([
        AlloyFurnaceReplace(1, "vintageimprovements:sulfuric_acid"),
        AlloyFurnaceItem("iceandfire:fire_dragon_heart", heartIn, "input"),
        AlloyFurnaceItemChance('iceandfire:fire_dragon_flesh', heart, 0.75),
        AlloyFurnaceItemChance('iceandfire:fire_dragon_blood', heartTotal - heart, 0.2)],
        [AlloyFurnaceFluid("vintageimprovements:sulfuric_acid", 1)],
        20,
        "fire_dragon_heart")
    AlloyFurnaceRecipe([
        AlloyFurnaceReplace(1, "vintageimprovements:sulfuric_acid"),
        AlloyFurnaceItem("iceandfire:fire_dragon_flesh", fleshIn, "input"),
        AlloyFurnaceItemChance('iceandfire:fire_dragon_blood', flesh, 0.75),
        AlloyFurnaceItemChance('iceandfire:dragonscales_red', fleshTotal - flesh, 0.2)],
        [AlloyFurnaceFluid("vintageimprovements:sulfuric_acid", 1)],
        20,
        "fire_dragon_flesh")
    AlloyFurnaceRecipe([
        AlloyFurnaceReplace(1, "vintageimprovements:sulfuric_acid"),
        AlloyFurnaceItem("iceandfire:fire_dragon_blood", bloodIn, "input"),
        AlloyFurnaceItemChance('iceandfire:dragonscales_red', blood, 0.75),
        AlloyFurnaceItemChance('iceandfire:fire_dragon_heart', bloodTotal - blood, 0.2)],
        [AlloyFurnaceFluid("vintageimprovements:sulfuric_acid", 1)],
        20,
        "fire_dragon_blood")

})