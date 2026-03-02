ServerEvents.recipes(event => {
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom()
  event.remove({ id: "create:mechanical_crafting/crushing_wheel" })
  event.remove({ id: "create_connected:crafting/kinetics/inventory_bridge" })
  event.remove({ id: "create:filling/blaze_cake" })
  event.remove({ output: "create_connected:fan_seething_catalyst" })
  event.remove({ output: "create_connected:fan_freezing_catalyst" })
  event.remove({ output: "create_connected:fan_sanding_catalyst" })
  event.replaceOutput({ output: "farmersdelight:wheat_dough" }, "farmersdelight:wheat_dough", "create:dough")
  event.replaceInput({ Input: "farmersdelight:wheat_dough" }, "farmersdelight:wheat_dough", "#forge:dough/wheat")
  event.replaceInput({ Input: "create:dough" }, "create:dough", "#forge:dough/wheat")
  event.remove({ id: "create:crafting/materials/andesite_alloy_from_zinc" })
  event.remove({ id: "create:crafting/materials/andesite_alloy" })
  event.remove({ id: "create:crushing/obsidian" })
  //坚固板
  event.custom({
    "type": "create:compacting",
    "heatRequirement": "heated",
    "ingredients": [
      { "item": "minecraft:obsidian" }
    ],
    "results": [{ "item": "create:sturdy_sheet", "count": 2 }]
  }).id("dut_create:sturdy_sheet")
  //安山合金
  /*
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "minecraft:andesite" },
      { "tag": "dut_create:craftnugget" }
    ],
    "results": [{ "item": "create:andesite_alloy" }]
  }).id("dut_create:andesite_alloy_manual_only")
  event.remove({ id: "dut_create:andesite_alloy_manual_only_using_deployer" })
  */
  //event.recipes.create.item_application("create:andesite_alloy",["minecraft:andesite",["minecraft:iron_nugget", "create:zinc_nugget"]] ).id("dut_create:andesite_alloy_manual_only")
  //玫瑰石英灯
  event.remove({ id: "create:crafting/kinetics/rose_quartz_lamp" })
  event.shapeless("create:rose_quartz_lamp", ["#forge:ingots/tin", "minecraft:redstone", "create:polished_rose_quartz"]).id("dut_create:rose_quartz_lamp")
  //横向流体储罐
  event.remove({ id: "create_connected:crafting/kinetics/fluid_vessel_from_conversion" })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
    ],
    "key": {
      "A": { "item": "create:fluid_tank" }
    },
    "result": { "item": "create_connected:fluid_vessel", "count": 3 }
  }).id("dut_create:fluid_vessel")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "A",
      "A",
      "A"
    ],
    "key": {
      "A": { "item": "create_connected:fluid_vessel" }
    },
    "result": { "item": "create:fluid_tank", "count": 3 }
  }).id("dut_create:fluid_vessel1")
  //保险库
  event.remove({ output: "create_connected:item_silo", not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "A",
      "A",
      "A"
    ],
    "key": {
      "A": { "item": "create:item_vault" }
    },
    "result": { "item": "create_connected:item_silo", "count": 3 }
  }).id("dut_create:item_silo")
  //转速控制器
  event.remove({ output: 'create:rotation_speed_controller', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "A",
      "B",
      "C"
    ],
    "key": {
      "A": { "item": "kubejs:electric_gear" },
      "B": { "item": "kubejs:planetary_gear" },
      "C": { "item": "create:brass_casing" }
    },
    "result": { "item": "create:rotation_speed_controller" }
  }).id("dut_create:rotation_speed_controller")
  event.replaceInput(
    { input: 'create:turntable', mod: "vs_clockwork" },
    'create:turntable',
    'kubejs:planetary_gear')
  //升降机
  event.remove({ output: 'create:elevator_pulley', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "B": { "item": "kubejs:differential" },
      "C": { "item": "minecraft:dried_kelp_block" },
      "I": { "item": "create_connected:control_chip" }
    },
    "pattern": [
      "B",
      "I",
      "C"
    ],
    "result": { "item": "create:elevator_pulley" },
    "show_notification": true
  }).id("dut_create:elevator_pulley")
  //制动器
  event.replaceInput({ output: 'create_connected:brake' }, 'minecraft:obsidian', 'create:sturdy_sheet')
  //机械手
  event.remove({ output: 'create:deployer', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "C": {
        "item": "kubejs:iron_hand"
      },
      "R": {
        "item": "kubejs:mechanical_core"
      },
      "T": {
        "item": "create:piston_extension_pole"
      }
    },
    "pattern": [
      "T",
      "R",
      "C"
    ],
    "result": {
      "item": "create:deployer"
    },
    "show_notification": true
  }).id("dut_create:deployer")
  //显示连接器
  event.remove({ output: 'create:display_link', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": { "tag": "forge:plates/brass" },
      "C": { "item": "minecraft:redstone_torch" },
      "S": { "item": "kubejs:circuit_board" }
    },
    "pattern": [
      "C",
      "S",
      "A"
    ],
    "result": { "item": "create:display_link" },
    "show_notification": true
  }).id("dut_create:display_link")
  //可编程齿轮箱
  event.remove({ output: 'create:sequenced_gearshift', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      { "item": "create:brass_casing" },
      [{ "item": "create:cogwheel" }, { "item": "design_decor:industrial_gear" }],
      { "item": "kubejs:electric_gear" },
      { "item": "kubejs:lime_circuit_board" }
    ],
    "result": {
      "item": "create:sequenced_gearshift"
    }
  }).id("dut_create:sequenced_gearshift")
  //列车信号机
  event.remove({ output: 'create:track_signal', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      { "item": "create:railway_casing" },
      { "item": "kubejs:electric_gear" },
      { "item": "kubejs:circuit_board" }
    ],
    "result": { "count": 4, "item": "create:track_signal" }
  }).id("dut_create:track_signal")
  //列车侦测器
  event.remove({ output: 'create:track_observer', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      { "item": "create:railway_casing" },
      [{ "item": "minecraft:stone_pressure_plate" },
      { "item": "minecraft:polished_blackstone_pressure_plate" },
      { "item": "minecraft:heavy_weighted_pressure_plate" },
      { "item": "minecraft:light_weighted_pressure_plate" }],
      { "item": "kubejs:circuit_board" }
    ],
    "result": { "count": 4, "item": "create:track_observer" }
  }).id("dut_create:track_observer1")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      { "item": "create:railway_casing" },
      { "tag": "minecraft:wooden_pressure_plates" },
      { "item": "kubejs:circuit_board" }
    ],
    "result": { "count": 2, "item": "create:track_observer" }
  }).id("dut_create:track_observer")
  //移动结构控制器
  event.remove({ output: 'create:contraption_controls', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "B": {
        "tag": "minecraft:buttons"
      },
      "C": {
        "item": "kubejs:mechanical_core"
      },
      "I": {
        "item": "kubejs:circuit_board"
      }
    },
    "pattern": [
      "B",
      "C",
      "I"
    ],
    "result": {
      "item": "create:contraption_controls"
    },
    "show_notification": true
  }).id("dut_create:contraption_controls")
  //脉冲中继
  event.remove({ output: 'create:pulse_repeater', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "C": {
        "tag": "forge:plates/brass"
      },
      "R": {
        "item": "kubejs:circuit_board"
      },
      "S": {
        "tag": "forge:stone"
      },
      "T": {
        "item": "minecraft:redstone_torch"
      }
    },
    "pattern": [
      "RCT",
      "SSS"
    ],
    "result": {
      "item": "create:pulse_repeater"
    },
    "show_notification": true
  }).id("dut_create:pulse_repeater")
  //脉冲延长
  event.remove({ output: 'create:pulse_extender', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "C": {
        "tag": "forge:plates/brass"
      },
      "R": {
        "item": "kubejs:circuit_board"
      },
      "S": {
        "tag": "forge:stone"
      },
      "T": {
        "item": "minecraft:redstone_torch"
      }
    },
    "pattern": [
      "  T",
      "RCT",
      "SSS"
    ],
    "result": {
      "item": "create:pulse_extender"
    },
    "show_notification": true
  }).id("dut_create:pulse_extender")
  //存量转信器
  event.remove({ output: 'create:stockpile_switch', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "B": { "item": "create:brass_casing" },
      "R": { "item": "kubejs:electric_gear" },
      "C": { "item": "kubejs:circuit_board" }
    },
    "pattern": [
      "R",
      "C",
      "B"
    ],
    "result": {
      "item": "create:stockpile_switch"
    },
    "show_notification": true
  }).id("dut_create:stockpile_switch")
  //智能侦测器
  event.remove({ output: 'create:content_observer', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "I": { "item": "minecraft:observer" },
      "R": { "item": "kubejs:electric_gear" },
      "C": { "item": "kubejs:circuit_board" }
    },
    "pattern": [
      "R",
      "C",
      "I"
    ],
    "result": {
      "item": "create:content_observer"
    },
    "show_notification": true
  }).id("dut_create:content_observer")

  //列车站
  event.remove({ output: 'create:track_station', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "I": { "item": "create:railway_casing" },
      "R": { "item": "create:track_signal" },
      "C": { "item": "create:redstone_link" }
    },
    "pattern": [
      "C",
      "R",
      "I"
    ],
    "result": { "item": "create:track_station", "count": 4 },
    "show_notification": true
  }).id("dut_create:track_station")
  //列车控制台
  event.remove({ output: 'create:controls', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "I": { "item": "create:railway_casing" },
      "R": { "item": "create:analog_lever" },
      "C": { "item": "kubejs:differential" }
    },
    "pattern": [
      "R R",
      " C ",
      " I "
    ],
    "result": { "item": "create:controls", "count": 4 },
    "show_notification": true
  }).id("dut_create:controls")
  //无线红石
  event.replaceInput({ output: 'create:redstone_link', mod: 'create' }, 'create:brass_casing', 'kubejs:circuit_board')
  //石英
  event.custom({
    "type": "create:mixing",
    "ingredients": [{ "item": "minecraft:quartz" },
    { "amount": 100, "fluid": "minecraft:lava" }],
    "results": [{ "item": "minecraft:quartz", "count": 1 },
    { "item": "minecraft:quartz", "count": 1, "chance": 0.12 }]
  }).id("dut_create:quartz")
  //动力泵
  event.remove({ output: 'create:mechanical_pump', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      [{ "item": "create:cogwheel" }, { "item": "design_decor:industrial_gear" }],
      { "item": "kubejs:bearing" },
      { "item": "create:fluid_pipe" }
    ],
    "result": {
      "item": "create:mechanical_pump"
    }
  }).id("dut_create:mechanical_pump")
  //安山岩
  event.remove({ id: "create:compacting/andesite_from_flint" })
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "item": "minecraft:cobblestone" },
      { "item": "minecraft:gravel" },
      { "amount": 250, "fluid": "minecraft:lava" }
    ],
    "results": [{ "item": "minecraft:andesite" }]
  }).id("dut_create:andesite_from_cobble")
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "item": "minecraft:flint" },
      { "item": "minecraft:flint" },
      { "item": "minecraft:flint" },
      { "item": "minecraft:gravel" },
      { "item": "minecraft:gravel" },
      { "item": "minecraft:gravel" },
      { "amount": 500, "fluid": "minecraft:lava" }
    ],
    "results": [{ "item": "minecraft:andesite", "count": 4 }]
  }).id("dut_create:andesite_from_flint")
  //木棍
  event.custom({
    "type": "create:cutting",
    "ingredients": [
      { "tag": "minecraft:planks" }
    ],
    "processingTime": 5,
    "results": [{ "item": "minecraft:stick", "count": 6 }]
  }).id("dut_create:cutting/stick")
  event.custom({
    "type": "createaddition:rolling",
    "ingredients": [
      { "item": "createdieselgenerators:chip_wood_block" }
    ],
    "processingTime": 5,
    "results": [{ "item": "minecraft:stick", "count": 6 }]
  }).id("dut_create:rolling/stick")

})