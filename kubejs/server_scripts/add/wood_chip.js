ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "###",
            "   ",
            "###"
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_block" },
        },
        "result": { "item": "minecraft:spruce_slab", "count": 12 }
    }).id("dut_create:wood_chip/spruce_slab")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "# ",
            "##"
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_block" },
        },
        "result": { "item": "minecraft:spruce_stairs", "count": 2 }
    }).id("dut_create:wood_chip/spruce_stairs")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "##",
            "##",
            "##"
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_block" },
        },
        "result": { "item": "minecraft:spruce_door", "count": 3 }
    }).id("dut_create:wood_chip/spruce_door")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "###",
            "###"
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_block" },
        },
        "result": { "item": "minecraft:spruce_trapdoor", "count": 2 }
    }).id("dut_create:wood_chip/spruce_trapdoor")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "##"
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_block" },
        },
        "result": { "item": "minecraft:spruce_pressure_plate" }
    }).id("dut_create:wood_chip/spruce_pressure_plate")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "#I#",
            "#I#"
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_block" },
            "I": { "item": "minecraft:stick" }
        },
        "result": { "item": "minecraft:spruce_fence", "count": 3 }
    }).id("dut_create:wood_chip/spruce_fence")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "I#I",
            "I#I"
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_block" },
            "I": { "item": "minecraft:stick" }
        },
        "result": { "item": "minecraft:spruce_fence_gate" }
    }).id("dut_create:wood_chip/spruce_fence_gate")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "###",
            " I ",
            "###"
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_block" },
            "I": { "tag": "forge:chests/wooden" }
        },
        "result": { "item": "storagedrawers:spruce_full_drawers_1" }
    }).id("dut_create:wood_chip/spruce_full_drawers_1")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "#I#",
            "###",
            "#I#"
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_block" },
            "I": { "tag": "forge:chests/wooden" }
        },
        "result": { "item": "storagedrawers:spruce_full_drawers_2", "count": 2 }
    }).id("dut_create:wood_chip/spruce_full_drawers_2")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "I#I",
            "###",
            "I#I"
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_block" },
            "I": { "tag": "forge:chests/wooden" }
        },
        "result": { "item": "storagedrawers:spruce_full_drawers_4", "count": 4 }
    }).id("dut_create:wood_chip/spruce_full_drawers_4")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "#I#",
            "I#I",
            "#I#"
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_block" },
            "I": { "item": "minecraft:stick" }
        },
        "result": { "item": "storagedrawers:spruce_trim", "count": 4 }
    }).id("dut_create:wood_chip/spruce_trim")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "###",
            "###",
            " I "
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_block" },
            "I": { "item": "minecraft:stick" }
        },
        "result": { "item": "minecraft:spruce_sign", "count": 3 }
    }).id("dut_create:wood_chip/spruce_sign")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "I I",
            "###",
            "###"
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_block" },
            "I": { "item": "minecraft:chain" }
        },
        "result": { "item": "minecraft:spruce_hanging_sign", "count": 6 }
    }).id("dut_create:wood_chip/spruce_hanging_sign")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "#I#",
            " I ",
            "#I#"
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_slab" },
            "I": { "item": "createdieselgenerators:chip_wood_block" }
        },
        "result": { "item": "iceandfire:podium_spruce" }
    }).id("dut_create:wood_chip/podium_spruce")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "# #",
            "###"
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_block" }
        },
        "result": { "item": "minecraft:spruce_boat" }
    }).id("dut_create:wood_chip/spruce_boat")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            " # ",
            "#I#"
        ],
        "key": {
            "#": { "item": "createdieselgenerators:chip_wood_block" },
            "I": { "tag": "forge:glass/colorless" }
        },
        "result": { "item": "create:spruce_window","count":2 }
    }).id("dut_create:wood_chip/spruce_window")
})