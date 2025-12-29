ServerEvents.recipes(event => {
    //
    const HydropressStructure =
    {
        "type": "custommachinery:structure",
        "pattern": [
            [
                "A   A",
                "     ",
                "     ",
                "     ",
                "A   A",
                " BBB ",
                " BGB ",
                " BBB "
            ],
            [
                "AAAAA",
                "A   A",
                "A   A",
                "A   A",
                "AAAAA",
                " CDC ",
                " HIH ",
                "     "
            ],
            [
                "     ",
                "     ",
                "     ",
                "     ",
                "     ",
                "     ",
                " JmJ ",
                "  P  "
            ],
            [
                "     ",
                "     ",
                "     ",
                "     ",
                "     ",
                "  F  ",
                "  L  ",
                "     "
            ],
            [
                "     ",
                "     ",
                "     ",
                "     ",
                "     ",
                "  F  ",
                " MIM ",
                "  M  "
            ],
            [
                "     ",
                "     ",
                "     ",
                "     ",
                "     ",
                "  F  ",
                " NIN ",
                "  N  "
            ],
            [
                "     ",
                "     ",
                "     ",
                "     ",
                "     ",
                "  F  ",
                " NIN ",
                "  N  "
            ],
            [
                "     ",
                "     ",
                "     ",
                "     ",
                "     ",
                "  H  ",
                " HIH ",
                "  H  "
            ],
            [
                "     ",
                "     ",
                "     ",
                "     ",
                "     ",
                "     ",
                "  L  ",
                "     "
            ],
            [
                "     ",
                "     ",
                "     ",
                "     ",
                "     ",
                "     ",
                "  O  ",
                "     "
            ]
        ],
        "keys":
        {
            "G": "design_decor:brass_boiler_large",
            "C": "design_decor:industrial_gear_large",
            "M": "design_decor:diagonal_metal_support",
            "N": "create:metal_girder",
            "J": "create:mechanical_pump",
            "I": "design_decor:industrial_iron_boiler",
            "P": "#dut_create:brass_funnel",
            "O": "design_decor:andesite_floodlight",
            "D": "create:gearbox",
            "F": "create:gantry_shaft",
            "H": "design_decor:diagonal_girder",
            "A": "create:copper_casing",
            "B": "design_decor:brass_boiler_structure",
            "L": "design_decor:brass_boiler"
        },
        "jei": true
    }
    const HydropressCommon3 = {
        "type": "custommachinery:fluid",
        "mode": "input",
        "tank": "sim_fluid",
        "fluid": "kubejs:hydrofluid",
        "amount": 1000
    }
    const HydropressCommon2 = {
        "type": "custommachinery:fluid",
        "mode": "input",
        "tank": "fluid_tank",
        "fluid": "kubejs:hydrofluid",
        "amount": 1000
    }
    const HydropressCommon0 = {
        "type": "custommachinery:command",
        "phase": "ending",
        "command": "/playsound create:mechanical_press_activation block @a",
        "log": false,
        "permissionlevel": 5
    }
    function hydropressInput(block, mode) {
        return ({
            "type": "custommachinery:block",
            "mode": mode,
            "action": "replace_destroy",
            "amount": 9,
            "pos": [-1, -1, -3, 1, -1, -5],
            "filter": block,
            "whitelist": true,
            "block": "minecraft:air"
        })
    }
    function checkBlock(pos, block, amount, mode) {
        return (
            {
                "type": "custommachinery:block",
                "mode": mode,
                "action": "check",
                "amount": amount,
                "pos": pos,
                "filter": block,
                "whitelist": true
            }
        )
    }
    function checkPiston(mode, posmodify) {
        return (
            checkBlock([-1, 3 - posmodify, -3, 1, 3 - posmodify, -5], ['create:railway_casing', 'design_decor:industrial_plating_block'], 9, mode),
            
            checkBlock([0, 5 - posmodify, -3,], ["design_decor:diagonal_girder"], 2, mode),
            checkBlock([0, 5 - posmodify, -5,], ["design_decor:diagonal_girder"], 2, mode),
            checkBlock([1, 5 - posmodify, -4,], ["design_decor:diagonal_girder"], 2, mode),
            checkBlock([-1, 5 - posmodify, -4,], ["design_decor:diagonal_girder"], 2, mode),

            checkBlock([0, 4 - posmodify, -3,], ["design_decor:industrial_plating_block"], 2, mode),
            checkBlock([0, 4 - posmodify, -5,], ["design_decor:industrial_plating_block"], 2, mode),
            checkBlock([1, 4 - posmodify, -4,], ["design_decor:industrial_plating_block"], 2, mode),
            checkBlock([-1, 4 - posmodify, -4,], ["design_decor:industrial_plating_block"], 2, mode),
            checkBlock([0, 4 - posmodify, -4, 0, 8 - posmodify, -4], ['design_decor:industrial_iron_boiler'], 5, mode)
        )
    }
    function PlatePress(input, output, count) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:hydropress",
            "time": 1,
            "error": true,
            "priority": 1,
            "requirements": [
                HydropressCommon0,
                HydropressCommon3,
                HydropressStructure,
                checkPiston("input", 3),
                hydropressInput([input], "input"),
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": output,
                    "amount": count
                }
            ],
            "jei": [
                HydropressCommon2,
                HydropressStructure,
                hydropressInput([input], "input"),
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": input,
                    "amount": 9
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": output,
                    "amount": count
                }
            ]
        }).id("dut_create:hydropress/" + output.split(':')[1])
    }
    function FluidPress(input, output) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:hydropress",
            "time": 1,
            "priority": 1,
            "error": true,
            "requirements": [
                HydropressCommon0,
                HydropressCommon3,
                HydropressStructure,
                checkPiston("input", 3),
                hydropressInput([input + "[level=0]"], "input"),
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": output,
                    "amount": 100
                }
            ],
            "jei": [
                HydropressCommon2,
                HydropressStructure,
                hydropressInput([input], "input"),
                {
                    "type": "custommachinery:fluid",
                    "mode": "input",
                    "tank": "fluid_input",
                    "fluid": input,
                    "amount": 9000
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": output,
                    "amount": 100
                }
            ]
        }).id("dut_create:hydropress/" + output.split(':')[1])
    }
    
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:hydropress",
        "time": 1,
        "error": true,
        "priority": 10,
        "requirements": [
            checkPiston("input", 0),
            HydropressStructure,
            {
                "type": "custommachinery:fluid",
                "mode": "input",
                "fluid": "minecraft:water",
                "amount": 1000
            },
            {
                "type": "custommachinery:fluid",
                "mode": "output",
                "fluid": "kubejs:hydrofluid",
                "amount": 1000
            },
            {
                "type": "custommachinery:command",
                "phase": "ending",
                "command": "/playsound create:steam block @a ~ ~ ~ 0.5",
                "log": false,
                "permissionlevel": 5
            }
        ],
        "jei": [
            HydropressStructure,
            {
                "type": "custommachinery:fluid",
                "mode": "input",
                "tank": "fluid_input",
                "fluid": "minecraft:water",
                "amount": 1000
            },
            {
                "type": "custommachinery:fluid",
                "mode": "output",
                "tank": "sim_fluid",
                "fluid": "kubejs:hydrofluid",
                "amount": 1000
            }
        ]
    }).id("dut_create:hydropress/get_fluid")

    PlatePress("kubejs:aluminum_block", "kubejs:aluminum_sheet", 81)
    FluidPress("kubejs:aluminum", "kubejs:aluminum_ingot")

    PlatePress("create:industrial_iron_block", "kubejs:industrial_iron_sheet", 81)
    FluidPress("kubejs:industrial_iron", "kubejs:industrial_iron_ingot")

    PlatePress("create:brass_block", "create:brass_sheet", 81)
    FluidPress("kubejs:brass", "create:brass_ingot")

    PlatePress("kubejs:new_zinc_block", "kubejs:new_zinc_sheet", 81)
    FluidPress("kubejs:new_zinc", "kubejs:new_zinc_ingot")

    PlatePress("minecraft:iron_block", "create:iron_sheet", 81)
    FluidPress("kubejs:iron", "minecraft:iron_ingot")

    PlatePress("minecraft:gold_block", "create:golden_sheet", 81)
    FluidPress("kubejs:gold", "minecraft:gold_ingot")

    PlatePress("minecraft:copper_block", "create:copper_sheet", 81)
    FluidPress("kubejs:copper", "minecraft:copper_ingot")

    FluidPress("createbigcannons:molten_steel", "ad_astra:steel_ingot")
    FluidPress("createbigcannons:molten_cast_iron", "createbigcannons:cast_iron_ingot")
    FluidPress("createbigcannons:molten_nethersteel", "createbigcannons:nethersteel_ingot")

    PlatePress("ad_astra:desh_block", "ad_astra:desh_plate", 81)
    FluidPress("kubejs:desh", "ad_astra:desh_ingot")

    PlatePress("kubejs:tin_block", "kubejs:tin_sheet", 81)
    FluidPress("kubejs:tin", "kubejs:tin_ingot")

    PlatePress("minecraft:coal_block", "minecraft:diamond", 1)

    PlatePress("minecraft:obsidian", "create:sturdy_sheet",36)
})
/*
  
    */