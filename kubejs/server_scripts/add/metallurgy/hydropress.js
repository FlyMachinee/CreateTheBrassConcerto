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
                "     ",
                "     ",
                "     ",
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
    function hydropressInput(block, mode, count) {
        return ({
            "type": "custommachinery:block",
            "mode": mode,
            "action": "replace_destroy",
            "amount": count,
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
    function checkPiston1(posmodify) {
        return (
            checkBlock([-1, 3 - posmodify, -3, 1, 3 - posmodify, -5], ['create:railway_casing', 'design_decor:industrial_plating_block'], 9, "input")
        )
    }
    function checkPiston2(posmodify) {
        return (
            checkBlock([0, 4 - posmodify, -4, 0, 8 - posmodify, -4], ['design_decor:industrial_iron_boiler'], 5, "input")
        )
    }
    function PlatePress(input, output, count) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:hydropress",
            "time": 1,
            "error": true,
            "priority": 3,
            "requirements": [
                HydropressCommon0,
                HydropressCommon3,
                checkPiston1(3),
                checkPiston2(3),
                hydropressInput([input], "input", 9),
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": output,
                    "amount": count * 9
                }
            ],
            "jei": [
                HydropressCommon2,
                HydropressStructure,
                hydropressInput([input], "input", 9),
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
                    "amount": count * 9
                }
            ]
        }).id("dut_create:hydropress/9/" + output.split(':')[1])
    }
    function FluidIn(input, output, count, count1, jei, priority) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:hydropress",
            "time": 1,
            "priority": priority,
            "error": true,
            "hidden": jei,
            "requirements": [
                HydropressCommon0,
                HydropressCommon3,
                checkPiston1(3),
                checkPiston2(3),
                hydropressInput([input + "[level=0]"], "input", count),
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": output,
                    "amount": count * count1
                }
            ],
            "jei": [
                HydropressCommon2,
                HydropressStructure,
                hydropressInput([input], "input", count),
                {
                    "type": "custommachinery:fluid",
                    "mode": "input",
                    "tank": "fluid_input",
                    "fluid": input,
                    "amount": count * 1000
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": output,
                    "amount": count * count1
                }
            ]
        }).id("dut_create:hydropress/" + count + "/" + output.split(':')[1])
    }
    function FluidPress(input, output, count) {
        FluidIn(input, output, 9, count, false, 4)
        FluidIn(input, output, 6, count, true, 3)
        FluidIn(input, output, 3, count, true, 2)
        FluidIn(input, output, 1, count, true, 1)
    }
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:hydropress",
        "time": 1,
        "error": true,
        "priority": 10,
        "requirements": [
            checkPiston1(0),
            checkPiston2(0),
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
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:hydropress",
        "time": 2,
        "error": true,
        "hidden": true,
        "priority": 0,
        "requirements": [
        ]
    }).id("dut_create:hydropress/empty")

    PlatePress("kubejs:aluminum_block", "kubejs:aluminum_sheet", 9)
    FluidPress("kubejs:aluminum", "kubejs:aluminum_ingot", 10)

    PlatePress("create:industrial_iron_block", "kubejs:industrial_iron_sheet", 9)
    FluidPress("kubejs:industrial_iron", "kubejs:industrial_iron_ingot", 10)

    PlatePress("create:brass_block", "create:brass_sheet", 9)
    FluidPress("kubejs:brass", "create:brass_ingot", 10)

    PlatePress("kubejs:new_zinc_block", "kubejs:new_zinc_sheet", 9)
    FluidPress("kubejs:new_zinc", "kubejs:new_zinc_ingot", 10)

    PlatePress("minecraft:iron_block", "create:iron_sheet", 9)
    FluidPress("kubejs:iron", "minecraft:iron_ingot", 10)

    PlatePress("minecraft:gold_block", "create:golden_sheet", 9)
    FluidPress("kubejs:gold", "minecraft:gold_ingot", 10)

    PlatePress("minecraft:copper_block", "create:copper_sheet", 9)
    FluidPress("kubejs:copper", "minecraft:copper_ingot", 10)

    FluidPress("createbigcannons:molten_steel", "ad_astra:steel_ingot", 10)
    FluidPress("createbigcannons:molten_cast_iron", "createbigcannons:cast_iron_ingot", 10)
    FluidPress("createbigcannons:molten_nethersteel", "createbigcannons:nethersteel_ingot", 10)

    PlatePress("ad_astra:desh_block", "ad_astra:desh_plate", 9)
    FluidPress("kubejs:desh", "ad_astra:desh_ingot", 10)

    PlatePress("kubejs:tin_block", "kubejs:tin_sheet", 9)
    FluidPress("kubejs:tin", "kubejs:tin_ingot", 10)

    PlatePress("minecraft:coal_block", "minecraft:diamond", 1)

    PlatePress("minecraft:obsidian", "create:sturdy_sheet", 4)

    FluidPress("kubejs:saline_water", "kubejs:salt", 8)
})
/*
  
    */