ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //give @s ad_astra:tier_1_rocket{BotariumData:{StoredFluids:[{Fluid:"kubejs:rocket_fuel",Amount:3000}]}}

  
  event.remove({id:"ad_astra:gravity_normalizer"})
  event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
          "B": { "item": "create:chromatic_compound" },
          "C": { "tag": "forge:plates/desh" },
          "D": { "item": "create:refined_radiance_casing" },
          "E": { "item": "kubejs:light_composite_plate" }
      },
      "pattern": [
          " B ",
          "EDE",
          "CCC"
      ],
      "result": { "item": "ad_astra:gravity_normalizer" },
      "show_notification": true
  }).id("dut_create:gravity_normalizer")
  //TI-69
  event.remove({ output: 'ad_astra:ti_69' })
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "kubejs:aluminum_hard_disk","nbt":{Damage:1024} },
      { "item": "create:framed_glass_pane" }
    ],
    "results": [{ "item": "ad_astra:ti_69" }]
  }).id("dut_create:deploying/ti_69")

  //火箭
  event.remove({ output: 'ad_astra:tier_1_rocket' })
  //宇航服
  event.remove({ output: 'ad_astra:space_helmet' })
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": true,
    "key": {
      "A": { "item": "create:precision_mechanism" },
      "B": { "item": "create:mechanical_pump" },
      "C": { "item": "create:smart_fluid_pipe" },
      "D": { "item": "create:fluid_valve" },
      "E": { "item": "create:redstone_link" },
      "F": { "item": "create:framed_glass" },
      "G": { "item": "kubejs:fiber_fabric" },
      "H": { "tag": "forge:plates/steel" }
    },
    "pattern": [
      " FFF ",
      "FFGGB",
      "FGEHD",
      "FGAHC",
      " HHH "
    ],
    "result": { "item": "ad_astra:space_helmet" }
  }
  ).id("dut_create:ad_astra/space_helmet")
  event.remove({ output: 'ad_astra:space_suit' })
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": true,
    "key": {
      "B": { "item": "kubejs:fiber_fabric" },
      "A": { "tag": "forge:plates/steel" },
      "C": { "item": "ad_astra:oxygen_gear" },
      "D": { "item": "ad_astra:gas_tank" },
      "E": { "item": "create:redstone_link" },
      "F": { "item": "create:precision_mechanism" },
    },
    "pattern": [
      " BBCE",
      "BBBDE",
      "BBBDF",
      "BBBAA",
      "BBB  ",
    ],
    "result": { "item": "ad_astra:space_suit" }
  }
  ).id("dut_create:ad_astra/space_suit")
  event.remove({ output: 'ad_astra:space_pants' })
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": true,
    "key": {
      "B": { "item": "kubejs:fiber_fabric" },
      "A": { "tag": "forge:plates/steel" }
    },
    "pattern": [
      "AAAAA",
      "ABBBA",
      "BBBBB",
      "BB BB",
      "BB BB",
      "AA AA",
    ],
    "result": { "item": "ad_astra:space_pants" }
  }
  ).id("dut_create:ad_astra/space_pants")
  event.remove({ output: 'ad_astra:space_boots' })
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": true,
    "key": {
      "B": { "item": "kubejs:fiber_fabric" },
      "A": { "tag": "forge:plates/steel" }
    },
    "pattern": [
      " AA AA ",
      " BB BB ",
      "ABB BBA",
      "AAA AAA",
    ],
    "result": { "item": "ad_astra:space_boots" }
  }
  ).id("dut_create:ad_astra/space_boots")
  event.remove({ output: 'ad_astra:netherite_space_helmet' })
  event.custom({
    "type": "minecraft:smithing_transform",
    "addition": { "tag": "forge:plates/netherite" },
    "base": { "item": "ad_astra:space_helmet" },
    "result": { "item": "ad_astra:netherite_space_helmet" },
    "template": { "item": "minecraft:netherite_upgrade_smithing_template" }
  }).id("dut_create:ad_astra/netherite_space_helmet")
  event.remove({ output: 'ad_astra:netherite_space_suit' })
  event.custom({
    "type": "minecraft:smithing_transform",
    "addition": { "item": "create:netherite_backtank" },
    "base": { "item": "ad_astra:space_suit" },
    "result": { "item": "ad_astra:netherite_space_suit" },
    "template": { "item": "minecraft:netherite_upgrade_smithing_template" }
  }).id("dut_create:ad_astra/netherite_space_suit")
  event.remove({ output: 'ad_astra:netherite_space_pants' })
  event.custom({
    "type": "minecraft:smithing_transform",
    "addition": { "tag": "forge:plates/netherite" },
    "base": { "item": "ad_astra:space_pants" },
    "result": { "item": "ad_astra:netherite_space_pants" },
    "template": { "item": "minecraft:netherite_upgrade_smithing_template" }
  }).id("dut_create:ad_astra/netherite_space_pants")
  event.remove({ output: 'ad_astra:netherite_space_boots' })
  event.custom({
    "type": "minecraft:smithing_transform",
    "addition": { "tag": "forge:plates/netherite" },
    "base": { "item": "ad_astra:space_boots" },
    "result": { "item": "ad_astra:netherite_space_boots" },
    "template": { "item": "minecraft:netherite_upgrade_smithing_template" }
  }).id("dut_create:ad_astra/netherite_space_boots")
  //引擎
  event.remove({ output: 'ad_astra:steel_engine' })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:cardan_joint" },
    "results": [
      { "item": "ad_astra:steel_engine" }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:mechanical_core" },
        { "tag": "forge:storage_blocks/steel" }],
        "results": [{ "item": "kubejs:mechanical_core" }]
      },
      {
        "type": "vintageimprovements:pressurizing",
        "ingredients": [{ "item": "kubejs:mechanical_core" },
        { "amount": 1000, "fluid": "kubejs:duraplas" }],
        "results": [{ "item": "kubejs:mechanical_core" }],
        "processingTime": 300
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:mechanical_core" },
        { "item": "create_connected:control_chip" }],
        "results": [{ "item": "kubejs:mechanical_core" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:mechanical_core" },
        { "item": "vintageimprovements:vacuum_chamber" }],
        "results": [{ "item": "kubejs:mechanical_core" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:mechanical_core" }
  }).id("dut_create:ad_astra/steel_engine")
  //燃料罐
  event.remove({ output: 'ad_astra:steel_tank' })
  //空盒子
  event.custom({
    "type": "vintageimprovements:curving",
    "mode": 4,
    "ingredients": [
      { "item": "kubejs:duraplas_sheet" }
    ],
    "results": [
      { "item": "kubejs:empty_parts_box" }
    ]
  }).id("dut_create:rocket/empty_parts_box")
  //钢维修盒
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:empty_parts_box" },
    "results": [
      { "item": "kubejs:steel_parts_box" }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_parts_box" },
        { "tag": "forge:plates/steel" }],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_parts_box" },
        { "tag": "forge:rods/steel" }],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_parts_box" },
        { "item": "vintageimprovements:steel_spring" }],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_parts_box" },
        { "item": "vintageimprovements:small_steel_spring" }],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      },
      {
        "type": "vintageimprovements:pressurizing",
        "ingredients": [{ "item": "kubejs:incomplete_parts_box" },
        { "amount": 250, "fluid": "kubejs:nitrogen" }],
        "results": [{ "item": "kubejs:incomplete_parts_box" }],
        "processingTime": 100
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_parts_box" }
  }).id("dut_create:ad_astra/steel_parts_box")
  //火箭充能
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "ad_astra:tier_1_rocket" },
    "results": [
      { "item": "ad_astra:tier_1_rocket", nbt: { BotariumData: { StoredFluids: [{ Fluid: "kubejs:rocket_fuel", Amount: 3000 }] } } }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "ad_astra:tier_1_rocket" },
        { "item": "ad_astra:steel_engine" }],
        "results": [{ "item": "ad_astra:tier_1_rocket" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "ad_astra:tier_1_rocket" },
        { "item": "ad_astra:steel_tank" }],
        "results": [{ "item": "ad_astra:tier_1_rocket" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "ad_astra:tier_1_rocket" },
        { "item": "kubejs:steel_parts_box" }],
        "results": [{ "item": "ad_astra:tier_1_rocket" }]
      }
    ],
    "transitionalItem": { "item": "ad_astra:tier_1_rocket" }
  }).id("dut_create:ad_astra/tier_1_rocket_change_engine")
})
