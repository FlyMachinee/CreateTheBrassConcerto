ServerEvents.recipes(event => {
  event.remove({ id: 'createaddition:mixing/biomass_from_flowers' })
  event.remove({ id: 'createaddition:mixing/biomass_from_plant_foods' })
  event.remove({ id: 'createaddition:crafting/biomass_pellet' })
  event.remove({ id: 'createaddition:crafting/biomass_pellet_block' })
  event.remove({ id: 'createaddition:compacting/biomass_pellet' })
  event.remove({ id: 'createaddition:crafting/diamond_grit_sandpaper' })
  event.remove({ id: "createaddition:crushing/diamond" })
  event.remove({ id: 'createaddition:liquid_burning/biofuel' })
  event.remove({ id: 'createaddition:crafting/electrum_amulet' })
  event.remove({ id: 'createaddition:crafting/electrum_ingot' })
  event.remove({ id: 'createaddition:crafting/electrum_nugget' })
  event.remove({ id: 'createaddition:crafting/electrum_spool' })
  event.remove({ id: 'createaddition:crafting/large_connector_electrum' })
  event.remove({ id: "createaddition:rolling/electrum_ingot" })
  event.remove({ id: "createaddition:rolling/electrum_plate" })
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [{ "item": "createaddition:biomass_pellet_block" }],
    "result": { "item": "createaddition:biomass", "count": 9 }
  }).id("dut_create:biomass_pellet_block")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "key": { "#": { "item": "createaddition:biomass" } },
    "result": { "item": "createaddition:biomass_pellet_block" }
  }).id("dut_create:biomass")
  //移除生物乙醇
  event.remove({ id: 'createaddition:mixing/bioethanol' })
  //电量销毁
  event.custom({
    "type": "createaddition:charging",
    "input": { "item": "minecraft:terracotta" },
    "result": { "item": "minecraft:terracotta" },
    "energy": 24000000,
    "maxChargeRate":24000
  }).id("dut_create:charging/terracota")
  //轧机
  event.replaceInput({ input: 'create:andesite_alloy', id: 'createaddition:crafting/rolling_mill' }, 'create:andesite_alloy', 'kubejs:bearing')
  //地狱岩
  event.remove({ id: 'createaddition:mixing/netherrack' })
  //快速种子油配方
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
      { "tag": "forge:seeds" },
      { "tag": "forge:seeds" },
      { "tag": "forge:seeds" },
      { "tag": "forge:seeds" }
    ],
    "results": [
      {
        "fluid": "createaddition:seed_oil",
        "amount": 500
      }
    ]
  }).id("dut_create:seed_oil_mixing")
  //蓄电池
  event.remove({ id: 'createaddition:crafting/modular_accumulator_electrum' })
  event.remove({ id: 'createaddition:crafting/modular_accumulator_gold' })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:storage_blocks/copper" },
    "loops": 1,
    "results": [{ "item": "createaddition:modular_accumulator" }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" },
        { "tag": "forge:storage_blocks/gold" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" },
        { "amount": 500, "fluid": "vintageimprovements:sulfuric_acid" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" },
        { "amount": 500, "fluid": "vintageimprovements:sulfuric_acid" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" },
        { "tag": "forge:storage_blocks/brass" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_copper_box" }
  }).id("dut_create:modular_accumulator")
  //发电机
  event.remove({ id: 'createaddition:mechanical_crafting/alternator' })
  //电动马达
  event.remove({ id: 'createaddition:mechanical_crafting/electric_motor' })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": { "item": "createaddition:capacitor" },
      "B": { "item": "createaddition:copper_spool" },
      "C": { "item": "create:precision_mechanism" },
      "D": { "item": "kubejs:electric_gear" }
    },
    "pattern": [
      "BBB",
      "DCD",
      "ADA"
    ],
    "result": { "item": "createaddition:electric_motor" },
    "show_notification": true
  }).id("dut_create:electric_motor")
  //特斯拉线圈
  event.remove({ id: 'createaddition:mechanical_crafting/tesla_coil' })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": { "item": "createaddition:capacitor" },
      "B": { "item": "createaddition:copper_spool" },
      "C": { "item": "kubejs:circuit_board" },
      "D": { "item": "create:brass_casing" },
      "E": { "item": "kubejs:electric_gear" }
    },
    "pattern": [
      "BBB",
      "ACA",
      "EDE"
    ],
    "result": { "item": "createaddition:tesla_coil" },
    "show_notification": true
  }).id("dut_create:tesla_coil")
  //电容
  event.remove({ id: 'createaddition:crafting/capacitor_1' })
  event.remove({ id: 'createaddition:crafting/capacitor_2' })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": { "tag": "forge:plates/gold" },
      "B": { "tag": "dut_create:ingots/polymer" },
      "C": { "tag": "forge:plates/copper" }
    },
    "pattern": [
      "A",
      "B",
      "C"
    ],
    "result": { "item": "createaddition:capacitor", "count": 2 },
    "show_notification": true
  }).id("dut_create:capacitor")
  //生物质高速产出
  event.remove({ id: 'createaddition:mixing/biomass_from_honeycomb' })
  event.remove({ id: 'createaddition:mixing/biomass_from_saplings' })
  event.remove({ id: 'createaddition:mixing/biomass_from_crops' })
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "tag": "dut_create:microbio" },
      { "tag": "dut_create:microbio" },
      { "tag": "dut_create:microbio" },
      { "tag": "dut_create:microbio" },
      { "fluidTag": "dut_create:plantoil", "amount": 400 }
    ],
    "results": [
      { "item": "createaddition:biomass", "count": 4 }
    ],
    "heatRequirement": "heated"
  }).id("dut_create:efficient_biomass_from_microbio")
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "tag": "forge:crops" },
      { "tag": "forge:crops" },
      { "tag": "forge:crops" },
      { "tag": "forge:crops" },
      { "tag": "forge:crops" },
      { "tag": "forge:crops" },
      { "tag": "forge:crops" },
      { "tag": "forge:crops" },
      { "fluidTag": "dut_create:plantoil", "amount": 400 }
    ],
    "results": [
      { "item": "createaddition:biomass", "count": 4 }
    ],
    "heatRequirement": "heated"
  }).id("dut_create:efficient_biomass_from_corps")
  //塑料吸管
  event.custom({
    "type": "createaddition:rolling",
    "input": { "item": "kubejs:polymer_sheet" },
    "result": { "item": "createaddition:straw", "count": 6 }
  }).id("dut_create:straw_from_plas")
  event.custom({
    "type": "createaddition:rolling",
    "input": { "item": "kubejs:duraplas_sheet" },
    "result": { "item": "createaddition:straw", "count": 16 }
  }).id("dut_create:straw_from_duraplas")
})