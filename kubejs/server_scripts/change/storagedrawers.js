ServerEvents.recipes(event => {
    const noRecipe = [
        "storagedrawers:oak_full_drawers_1",
        "storagedrawers:birch_full_drawers_1",
        "storagedrawers:jungle_full_drawers_1",
        "storagedrawers:acacia_full_drawers_1",
        "storagedrawers:dark_oak_full_drawers_1",
        "storagedrawers:mangrove_full_drawers_1",
        "storagedrawers:cherry_full_drawers_1",
        "storagedrawers:bamboo_full_drawers_1",
        "storagedrawers:crimson_full_drawers_1",
        "storagedrawers:warped_full_drawers_1",
        "storagedrawers:oak_full_drawers_2",
        "storagedrawers:birch_full_drawers_2",
        "storagedrawers:jungle_full_drawers_2",
        "storagedrawers:acacia_full_drawers_2",
        "storagedrawers:dark_oak_full_drawers_2",
        "storagedrawers:mangrove_full_drawers_2",
        "storagedrawers:cherry_full_drawers_2",
        "storagedrawers:bamboo_full_drawers_2",
        "storagedrawers:crimson_full_drawers_2",
        "storagedrawers:warped_full_drawers_2",
        "storagedrawers:oak_full_drawers_4",
        "storagedrawers:birch_full_drawers_4",
        "storagedrawers:jungle_full_drawers_4",
        "storagedrawers:acacia_full_drawers_4",
        "storagedrawers:dark_oak_full_drawers_4",
        "storagedrawers:mangrove_full_drawers_4",
        "storagedrawers:cherry_full_drawers_4",
        "storagedrawers:bamboo_full_drawers_4",
        "storagedrawers:crimson_full_drawers_4",
        "storagedrawers:warped_full_drawers_4",
        "storagedrawers:oak_half_drawers_1",
        "storagedrawers:oak_half_drawers_2",
        "storagedrawers:oak_half_drawers_4",
        "storagedrawers:spruce_half_drawers_1",
        "storagedrawers:spruce_half_drawers_2",
        "storagedrawers:spruce_half_drawers_4",
        "storagedrawers:birch_half_drawers_1",
        "storagedrawers:birch_half_drawers_2",
        "storagedrawers:birch_half_drawers_4",
        "storagedrawers:jungle_half_drawers_1",
        "storagedrawers:jungle_half_drawers_2",
        "storagedrawers:jungle_half_drawers_4",
        "storagedrawers:acacia_half_drawers_1",
        "storagedrawers:acacia_half_drawers_2",
        "storagedrawers:acacia_half_drawers_4",
        "storagedrawers:dark_oak_half_drawers_1",
        "storagedrawers:dark_oak_half_drawers_2",
        "storagedrawers:dark_oak_half_drawers_4",
        "storagedrawers:mangrove_half_drawers_1",
        "storagedrawers:mangrove_half_drawers_2",
        "storagedrawers:mangrove_half_drawers_4",
        "storagedrawers:cherry_half_drawers_1",
        "storagedrawers:cherry_half_drawers_2",
        "storagedrawers:cherry_half_drawers_4",
        "storagedrawers:bamboo_half_drawers_1",
        "storagedrawers:bamboo_half_drawers_2",
        "storagedrawers:bamboo_half_drawers_4",
        "storagedrawers:crimson_half_drawers_1",
        "storagedrawers:crimson_half_drawers_2",
        "storagedrawers:crimson_half_drawers_4",
        "storagedrawers:warped_half_drawers_1",
        "storagedrawers:warped_half_drawers_2",
        "storagedrawers:warped_half_drawers_4",
        "storagedrawers:framed_half_drawers_1",
        "storagedrawers:framed_half_drawers_2",
        "storagedrawers:framed_half_drawers_4",
        "fluiddrawerslegacy:fluiddrawer_half",
        "fluiddrawerslegacy:fluiddrawer_2_half",
        "fluiddrawerslegacy:fluiddrawer_4_half",
        "storagedrawers:framed_compacting_half_drawers_2",
        "storagedrawers:framed_compacting_half_drawers_3",
        "storagedrawers:detached_drawer",
        "storagedrawers:personal_key_cofh",
        "storagedrawers:drawer_puller",
        "storagedrawers:keybutton_drawer",
        "storagedrawers:keybutton_quantify",
        "storagedrawers:keybutton_concealment",
        'storagedrawers:obsidian_storage_upgrade',
        'storagedrawers:copper_storage_upgrade',
        'storagedrawers:gold_storage_upgrade',
        'storagedrawers:diamond_storage_upgrade',
        'storagedrawers:netherite_storage_upgrade',
        'storagedrawers:void_upgrade'
    ]
    for (let i of noRecipe) {
        event.remove({ id: i })
    }
    Ingredient.of("#storagedrawers:trim").itemIds.forEach(i =>
        event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": { "tag": "storagedrawers:trim" },
            "result": i,
            "count": 1
        }).id("dut_create:trim/" + i.split(":")[1])
    )
    event.remove({id:"storagedrawers:remote_group_upgrade"})
    event.remove({id:"storagedrawers:remote_group_upgrade_bound"})
    event.remove({id:"storagedrawers:remote_upgrade"})
    event.remove({id:"storagedrawers:remote_group_upgrade_inc"})
    event.remove({id:"storagedrawers:upgrade_template"})
    //event.remove({ output: 'storagedrawers:remote_upgrade', not: { mod: 'kubejs' } })
    //event.remove({ output: 'storagedrawers:remote_upgrade_bound', not: { mod: 'kubejs' } })
    //event.remove({ output: 'storagedrawers:remote_group_upgrade', not: { mod: 'kubejs' } })
    //event.remove({ output: 'storagedrawers:remote_group_upgrade_bound', not: { mod: 'kubejs' } })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "###",
            "#X#",
            "###"
        ],
        "key": {
            "X": { "tag": "dut_create:drawers" },
            "#": { "item": "minecraft:stick" }
        },
        "result": { "item": "storagedrawers:upgrade_template", "count": 4 }
    }).id("dut_create:upgrade_template")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "###",
            "#X#",
            "###"
        ],
        "key": {
            "X": { "item": "create:crushing_wheel" },
            "#": { "item": "storagedrawers:upgrade_template" }
        },
        "result": { "item": "storagedrawers:void_upgrade", "count": 8 }
    }).id("dut_create:void_upgrade")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "###",
            "CXC",
            "#D#"
        ],
        "key": {
            "#": { "tag": "forge:plates/aluminum" },
            "C": { "item": "kubejs:resonant_bacteria" },
            "X": { "item": "storagedrawers:upgrade_template" },
            "D": { "item": "kubejs:phantom_fungus" }
        },
        "result": { "item": "storagedrawers:remote_upgrade", "count": 8 }
    }).id("dut_create:remote_upgrade")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "###",
            "CXC",
            "#D#"
        ],
        "key": {
            "#": { "tag": "forge:plates/aluminum" },
            "C": { "item": "kubejs:resonant_bacteria" },
            "X": { "item": "storagedrawers:remote_upgrade" },
            "D": { "item": "kubejs:phantom_fungus" }
        },
        "result": { "item": "storagedrawers:remote_group_upgrade", "count": 8 }
    }).id("dut_create:remote_group_upgrade")

    //抽屉控制器传动方块
    event.remove({ output: 'storagedrawers:controller_slave', not: { mod: 'kubejs' } })
    //抽屉控制器
    event.remove({ output: 'storagedrawers:controller', not: { mod: 'kubejs' } })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "###",
            "CXC",
            "#D#"
        ],
        "key": {
            "#": { "tag": "forge:plates/iron" },
            "C": { "item": "kubejs:circuit_board" },
            "X": { "tag": "dut_create:drawers" },
            "D": { "item": "kubejs:electric_gear" }
        },
        "result": { "item": "storagedrawers:controller" }
    }).id("dut_create:drawer_controller")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "###",
            "CXC",
            "#D#"
        ],
        "key": {
            "#": { "tag": "forge:plates/industrial_iron" },
            "C": { "item": "kubejs:circuit_board" },
            "X": { "tag": "dut_create:drawers" },
            "D": { "item": "kubejs:electric_gear" }
        },
        "result": { "item": "storagedrawers:controller", "count": 2 }
    }).id("dut_create:drawer_controller_advanced")
    //压缩抽屉
    event.remove({ output: 'storagedrawers:compacting_drawers_3', not: { mod: 'kubejs' } })
    event.remove({ output: 'storagedrawers:compacting_drawers_2', not: { mod: 'kubejs' } })
    event.remove({ output: 'storagedrawers:compacting_half_drawers_3', not: { mod: 'kubejs' } })
    event.remove({ output: 'storagedrawers:compacting_half_drawers_2', not: { mod: 'kubejs' } })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "###",
            "TXT",
            "#I#"
        ],
        "key": {
            "#": { "tag": "forge:plates/iron" },
            "T": { "item": "create:mechanical_press" },
            "X": { "tag": "dut_create:drawers" },
            "I": { "item": "kubejs:circuit_board" }
        },
        "result": { "item": "storagedrawers:compacting_drawers_3" }
    }).id("dut_create:compacting_drawers_3")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "###",
            "TXT",
            "#I#"
        ],
        "key": {
            "#": { "tag": "forge:plates/industrial_iron" },
            "T": { "item": "create:mechanical_press" },
            "X": { "tag": "dut_create:drawers" },
            "I": { "item": "kubejs:circuit_board" }
        },
        "result": { "item": "storagedrawers:compacting_drawers_3", "count": 3 }
    }).id("dut_create:compacting_drawers_3_advanced")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "#T#",
            "#X#",
            "#I#"
        ],
        "key": {
            "#": { "tag": "forge:plates/iron" },
            "T": { "item": "create:mechanical_press" },
            "X": { "tag": "dut_create:drawers" },
            "I": { "item": "kubejs:circuit_board" }
        },
        "result": { "item": "storagedrawers:compacting_drawers_2" }
    }).id("dut_create:compacting_drawers_2")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "#T#",
            "#X#",
            "#I#"
        ],
        "key": {
            "#": { "tag": "forge:plates/industrial_iron" },
            "T": { "item": "create:mechanical_press" },
            "X": { "tag": "dut_create:drawers" },
            "I": { "item": "kubejs:circuit_board" }
        },
        "result": { "item": "storagedrawers:compacting_drawers_2", "count": 3 }
    }).id("dut_create:compacting_drawers_2_advanced")
    /*
        event.custom({
            "type": "minecraft:crafting_shaped",
            "pattern": [
                "###",
                "TXT",
                "#I#"
            ],
            "key": {
                "#": { "tag": "forge:plates/iron" },
                "T": { "item": "create:mechanical_press" },
                "X": { "tag": "storagedrawers:half_drawers" },
                "I": { "item": "kubejs:circuit_board" }
            },
            "result": { "item": "storagedrawers:compacting_half_drawers_3" }
        }).id("dut_create:compacting_half_drawers_3")
        event.custom({
            "type": "minecraft:crafting_shaped",
            "pattern": [
                "###",
                "TXT",
                "#I#"
            ],
            "key": {
                "#": { "tag": "forge:plates/industrial_iron" },
                "T": { "item": "create:mechanical_press" },
                "X": { "tag": "storagedrawers:half_drawers" },
                "I": { "item": "kubejs:circuit_board" }
            },
            "result": { "item": "storagedrawers:compacting_half_drawers_3", "count": 3 }
        }).id("dut_create:compacting_half_drawers_3_advanced")
        event.custom({
            "type": "minecraft:crafting_shaped",
            "pattern": [
                "#T#",
                "#X#",
                "#I#"
            ],
            "key": {
                "#": { "tag": "forge:plates/iron" },
                "T": { "item": "create:mechanical_press" },
                "X": { "tag": "storagedrawers:half_drawers" },
                "I": { "item": "kubejs:circuit_board" }
            },
            "result": { "item": "storagedrawers:compacting_half_drawers_2" }
        }).id("dut_create:compacting_half_drawers_2")
        event.custom({
            "type": "minecraft:crafting_shaped",
            "pattern": [
                "#T#",
                "#X#",
                "#I#"
            ],
            "key": {
                "#": { "tag": "forge:plates/industrial_iron" },
                "T": { "item": "create:mechanical_press" },
                "X": { "tag": "storagedrawers:half_drawers" },
                "I": { "item": "kubejs:circuit_board" }
            },
            "result": { "item": "storagedrawers:compacting_half_drawers_2", "count": 3 }
        }).id("dut_create:compacting_half_drawers_2_advanced")
        */
})