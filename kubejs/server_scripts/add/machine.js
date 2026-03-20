ServerEvents.recipes(event => {
    //event.remove({output: '',not:{mod:'kubejs'}})
    //event.remove({id: ''})
    //event.remove({input: ''})
    //event.custom().id("dut_create:")
    //液压机核心
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "tag": "forge:plates/brass" },
            "B": { "item": "create:steam_engine" },
            "C": { "item": "kubejs:electric_gear" },
            "D": { "item": "storagedrawers:compacting_drawers_3" },
            "E": { "item": "create:fluid_pipe" }
        },
        "pattern": [
            "AAA",
            "CDC",
            "EBE"
        ],
        "result": { "item": "kubejs:hydropress" },
        "show_notification": true
    }).id("dut_create:hydropress")
    //菌盖收割机
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "kubejs:mycetozoan" },
            "B": { "item": "kubejs:electric_gear" },
            "C": { "item": "kubejs:red_mushroom_cap_piece" },
            "D": { "tag": "forge:plates/copper" },
            "E": { "item": "create:mechanical_saw" }
        },
        "pattern": [
            "DED",
            "BAB",
            "DCD"
        ],
        "result": { "item": "kubejs:cap_reaping_machine" },
        "show_notification": true
    }).id("dut_create:cap_reaping_machine")
    //菌盖收割机
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "kubejs:mycetozoan" },
            "B": { "item": "kubejs:electric_gear" },
            "C": { "item": "kubejs:brown_mushroom_cap_piece" },
            "D": { "tag": "forge:plates/copper" },
            "E": { "item": "create:mechanical_saw" }
        },
        "pattern": [
            "DED",
            "BAB",
            "DCD"
        ],
        "result": { "item": "kubejs:stem_reaping_machine" },
        "show_notification": true
    }).id("dut_create:stem_reaping_machine")
    //协变反应堆
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "kubejs:resonant_bacteria" },
            "B": { "item": "kubejs:productivity_module" },
            "D": { "item": "kubejs:electro_hydro_capacitor" },
            "C": { "item": "kubejs:bronze_triangle" }
        },
        "pattern": [
            "DDD",
            "BAB",
            "CCC"
        ],
        "result": { "item": "kubejs:covariant_reactor" },
        "show_notification": true
    }).id("dut_create:covariant_reactor")
    //红石雷达
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "kubejs:resonant_bacteria" },
            "B": { "item": "minecraft:calibrated_sculk_sensor" },
            "C": { "item": "minecraft:reinforced_deepslate" }
        },
        "pattern": [
            "A",
            "B",
            "C"
        ],
        "result": { "item": "createandesiteabound:redstone_radar" },
        "show_notification": true
    }).id("dut_create:redstone_radar")
    //高速装罐机
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "create:fluid_tank" },
            "B": { "item": "create:spout" },
            "C": { "tag": "forge:plates/steel" },
            "D": { "item": "create:hose_pulley" },
            "E": { "item": "kubejs:lime_circuit_board" }
        },
        "pattern": [
            "ABA",
            "EDE",
            "CCC"
        ],
        "result": { "item": "kubejs:filling_machine" },
        "show_notification": true
    }).id("dut_create:filling_machine")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "kubejs:filling_machine" }
        },
        "pattern": [
            "A"
        ],
        "result": { "item": "kubejs:emptying_machine" },
        "show_notification": true
    }).id("dut_create:emptying_machine")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "kubejs:emptying_machine" }
        },
        "pattern": [
            "A"
        ],
        "result": { "item": "kubejs:filling_machine" },
        "show_notification": true
    }).id("dut_create:emptying_machine1")
    //恒温器复制
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "createloveandwar:thermostat" }
        },
        "pattern": [
            "A"
        ],
        "result": { "item": "createloveandwar:thermostat", "count": 2 },
        "show_notification": true
    }).id("dut_create:thermostat_copy")
    //培养仓
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "tag": "forge:plates/brass" },
            "B": { "item": "create:framed_glass_trapdoor" },
            "C": { "tag": "forge:ingots/brass" },
            "D": { "item": "create_connected:control_chip" },
            "E": { "item": "create:encased_fan" }
        },
        "pattern": [
            "ABA",
            "CDC",
            "EAE"
        ],
        "result": { "item": "kubejs:culture_bin" },
        "show_notification": true
    }).id("dut_create:culture_bin")
    //合金炉核心
    event.shaped("kubejs:alloy_furnace", [
        "CCC",
        "BDB",
        "AAA"
    ], {
        A: "#forge:storage_blocks/tin",
        B: Item.of("kubejs:tin_hard_disk", { Damage: 0 }).weakNBT(),
        D: "create:blaze_burner",
        C: "#forge:ingots/industrial_iron"
    }).id("dut_create:alloy_furnace")
    //大型粉碎机核心
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "create:precision_mechanism" },
            "B": { "item": "create:item_vault" },
            "E": { "item": "create:brass_funnel" },
            "D": { "item": "create:fluid_tank" },
            "C": { "tag": "forge:ingots/industrial_iron" }
        },
        "pattern": [
            "EBE",
            "ADA",
            "CCC"
        ],
        "result": { "item": "kubejs:huge_crusher" },
        "show_notification": true
    }).id("dut_create:huge_crusher")
    //爆破压缩机核心
    event.shaped("kubejs:blasting_compressor", [
        "AAA",
        "CDC",
        "EBE"
    ], {
        A: "#forge:plates/brass",
        B: "kubejs:electric_gear",
        C: Item.of("kubejs:tin_hard_disk", { Damage: 0 }).weakNBT(),
        D: "create:gantry_carriage",
        E: "create:precision_mechanism"
    }).id("dut_create:blasting_compressor")
    //大气冷凝机
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "create:precision_mechanism" },
            "B": { "item": "vintageimprovements:vacuum_chamber" },
            "C": { "tag": "forge:plates/tin" },
            "D": { "item": "kubejs:planetary_gear" },
            "E": { "item": "create:fluid_tank" }
        },
        "pattern": [
            "ABA",
            "CDC",
            "EAE"
        ],
        "result": { "item": "kubejs:condenser" },
        "show_notification": true
    }).id("dut_create:condenser")
    //无限取液池
    event.shaped("kubejs:infinity_fetching_pool", [
        "CCC",
        "BDB",
        "EAE"
    ], {
        C: "#forge:plates/brass",
        B: "createaddition:capacitor",
        A: Item.of("kubejs:tin_hard_disk", { Damage: 0 }).weakNBT(),
        D: "kubejs:magenta_circuit_board",
        E: "#forge:ingots/industrial_iron"
    }).id("dut_create:infinity_fetching_pool")
    //工业高炉核心
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "kubejs:lime_circuit_board" },
            "B": { "item": "kubejs:alloy_furnace" },
            "E": { "tag": "forge:storage_blocks/industrial_iron" },
            "D": { "item": "storagedrawers:controller" },
            "C": { "item": "kubejs:differential" }
        },
        "pattern": [
            "ABA",
            "CDC",
            "EEE"
        ],
        "result": { "item": "kubejs:shaft_furnace" },
        "show_notification": true
    }).id("dut_create:shaft_furnace")
    //应急工业平台
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "create:deployer" },
            "B": { "item": "kubejs:differential" },
            "D": { "item": "create:industrial_iron_block" },
            "C": { "item": "create:andesite_alloy_block" }
        },
        "pattern": [
            "ABA",
            "CCC",
            "DDD"
        ],
        "result": { "item": "kubejs:emergency_industrial_platform_space" },
        "show_notification": true
    }).id("dut_create:emergency_industrial_platform_space")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "create:deployer" },
            "B": { "item": "kubejs:electric_gear" },
            "D": { "item": "minecraft:smooth_stone" },
            "C": { "item": "minecraft:stone" }
        },
        "pattern": [
            "ABA",
            "CCC",
            "DDD"
        ],
        "result": { "item": "kubejs:emergency_industrial_platform" },
        "show_notification": true
    }).id("dut_create:emergency_industrial_platform")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "create:deployer" },
            "B": { "item": "kubejs:electric_gear" },
            "D": { "item": "minecraft:polished_deepslate" },
            "C": { "item": "minecraft:deepslate" }
        },
        "pattern": [
            "ABA",
            "CCC",
            "DDD"
        ],
        "result": { "item": "kubejs:emergency_industrial_platform_dark" },
        "show_notification": true
    }).id("dut_create:emergency_industrial_platform_dark")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "create:deployer" },
            "B": { "item": "kubejs:electric_gear" },
            "D": { "item": "minecraft:packed_mud" },
            "C": { "item": "minecraft:mud_bricks" }
        },
        "pattern": [
            "ABA",
            "CCC",
            "DDD"
        ],
        "result": { "item": "kubejs:emergency_industrial_platform_lime" },
        "show_notification": true
    }).id("dut_create:emergency_industrial_platform_lime")
    //应急工业平台转换
    function switchPlatform(item) {
        event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": { "tag": "dut_create:switchable_platform" },
            "result": item,
            "count": 1
        }).id("dut_create:machine/switch_platform/" + item.split(":")[1])
    }
    Ingredient.of("#dut_create:switchable_platform").itemIds.forEach(i => switchPlatform(i))
    //电子管计算机
    event.shaped("kubejs:electron_tube_computer", [
            "AAA",
            "EDE",
            "FFF"
    ], {
        A: "kubejs:circuit_board",
        E: Item.of("kubejs:tin_hard_disk", { Damage: 0 }).weakNBT(),
        D: "kubejs:electric_gear",
        F: "#forge:storage_blocks/tin"
    }).id("dut_create:electron_tube_computer")
    //蓝图构筑站
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "create:industrial_iron_block" },
            "B": { "item": "minecraft:slime_block" },
            "D": { "item": "kubejs:electron_tube_computer" },
            "C": { "tag": "forge:plates/industrial_iron" }
        },
        "pattern": [
            "CCC",
            "BDB",
            "AAA"
        ],
        "result": { "item": "kubejs:blueprint_builder" },
        "show_notification": true
    }).id("dut_create:blueprint_builder")
    //大型差分机
    event.shaped("kubejs:large_difference_engine", [
            "AAA",
            "EDE",
            "FFF"
    ], {
        A: "kubejs:light_composite_plate",
        E: "kubejs:differential",
        D: "kubejs:mycetozoan",
        F: "#forge:storage_blocks/steel"
    }).id("dut_create:large_difference_engine")
    //组装机控制器
    event.shaped("kubejs:assembling_machine", [
            "ABA",
            "EDE",
            "FFF"
    ], {
        A: "create:stockpile_switch",
        B: "kubejs:magenta_circuit_board",
        D: Item.of("kubejs:tin_hard_disk", { Damage: 0 }).weakNBT(),
        E: "createaddition:modular_accumulator",
        F: "#forge:storage_blocks/industrial_iron"
    }).id("dut_create:assembling_machine")
    //构筑站控制器
    event.shaped("kubejs:construction_station", [
            "ABA",
            "DED",
            "FFF"
    ], {
        A: "kubejs:assembling_machine",
        B: "create:mechanical_arm",
        E: Item.of("kubejs:aluminum_hard_disk", { Damage: 0 }).weakNBT(),
        D: "#forge:storage_blocks/desh",
        F: "#forge:storage_blocks/industrial_iron"
    }).id("dut_create:construction_station")
    //轨道空投炮
    event.shaped("kubejs:airdrop_station", [
            "DBD",
            "EAE",
            "FFF"
    ], {
        A: "kubejs:filling_machine",
        B: "kubejs:satellite",
        E: Item.of("kubejs:brass_hard_disk", { Damage: 0 }).weakNBT(),
        D: "#forge:storage_blocks/steel",
        F: "#forge:storage_blocks/desh"
    }).id("dut_create:airdrop_station")
    //卫星收发站
    event.shaped("kubejs:satellite_station", [
            "DBD",
            "EAE",
            "FFF"
    ], {
        A: "kubejs:electron_tube_computer",
        B: "kubejs:satellite",
        E: Item.of("kubejs:brass_hard_disk", { Damage: 0 }).weakNBT(),
        D: "kubejs:lime_circuit_board",
        F: "#forge:storage_blocks/steel"
    }).id("dut_create:satellite_station")
    //火箭发射台
    event.shaped("kubejs:launch_pad_controller", [
            "DDD",
            "EAE",
            "FFF"
    ], {
        A: "kubejs:carrier_rocket",
        E: Item.of("kubejs:brass_hard_disk", { Damage: 0 }).weakNBT(),
        D: "kubejs:light_composite_plate",
        F: "#forge:storage_blocks/steel"
    }).id("dut_create:launch_pad_controller")
    //电流体谐振塔
    event.shaped("kubejs:electro_hydro_resonant_tower", [
            "DFD",
            "DAD",
            "DED"
    ], {
        A: "kubejs:efficiency_module_2",
        E: Item.of("kubejs:brass_hard_disk", { Damage: 0 }).weakNBT(),
        D: "create:refined_radiance",
        F: "kubejs:electrolytic_cell"
    }).id("dut_create:electro_hydro_resonant_tower")
    //太空电梯控制台
    event.shaped("kubejs:space_elevator_controller", [
            "DDD",
            "EAE",
            "FFF"
    ], {
        A: "kubejs:efficiency_module_2",
        E: Item.of("kubejs:brass_hard_disk", { Damage: 0 }).weakNBT(),
        D: "kubejs:lime_circuit_board",
        F: "kubejs:electro_hydro_capacitor"
    }).id("dut_create:space_elevator_controller")
    //自动化贸易终端
    event.shaped("4x kubejs:trading_station", [
            "DDD",
            "EAE",
            "FFF"
    ], {
        A: "kubejs:carrier_rocket",
        E: Item.of("kubejs:brass_hard_disk", { Damage: 0 }).weakNBT(),
        D: "#forge:storage_blocks/copper",
        F: "#forge:storage_blocks/brass"
    }).id("dut_create:trading_station")
    //样本钻井
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "create:industrial_iron_block" },
            "B": { "item": "create:railway_casing" },
            "C": { "item": "create:fluid_pipe" },
            "D": { "item": "kubejs:differential" },
            "E": { "item": "createoreexcavation:drill" },
        },
        "pattern": [
            " C ",
            "BDB",
            "AEA"
        ],
        "result": { "item": "createoreexcavation:sample_drill" },
        "show_notification": true
    }).id("dut_create:sample_drill")

    function clearNbt(item) {
        event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": { "item": item },
            "result": item,
            "count": 1
        }).id("dut_create:machine/clearnbt/" + item.split(":")[1])
    }
    const List = [
        "kubejs:launch_pad_controller",
        "kubejs:condenser",
        "kubejs:alloy_furnace",
        "kubejs:huge_crusher",
        "kubejs:shaft_furnace",
        "kubejs:infinity_fetching_pool",
        "kubejs:electrolytic_cell",
        "kubejs:steam_generator",
        "kubejs:assembling_machine",
        "kubejs:construction_station",
        "kubejs:large_difference_engine",
        "kubejs:electron_tube_computer",
        "kubejs:satellite_station",
        "kubejs:airdrop_station",
        "kubejs:blueprint_builder",
        "kubejs:blasting_compressor",
        "kubejs:hydropress",
        "kubejs:covariant_reactor",
        "kubejs:space_elevator_controller",
        "kubejs:electro_hydro_resonant_tower",
        "kubejs:planting_tower",
        "kubejs:trading_station",
        "kubejs:emergency_industrial_platform_space",
        "kubejs:battery_slot",
        "kubejs:culture_bin",
        "kubejs:filling_machine",
        "kubejs:emptying_machine",
        "kubejs:anti_warden_bomb",
        "kubejs:cap_reaping_machine",
        "kubejs:stem_reaping_machine"]
    List.forEach(i => clearNbt(i))
})