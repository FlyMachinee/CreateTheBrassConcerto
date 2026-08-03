ServerEvents.recipes(event => {
  //
  //event.remove({output:'',not:{mod:'kubejs'}})
  //event.remove({id:''})
  //event.remove({input:''})
  //event.custom()
  event.remove({ id:'create:sequenced_assembly/sturdy_sheet'})
  //精密构件
  event.remove({ id:'create:sequenced_assembly/precision_mechanism'})
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "tag": "forge:plates/gold"
    },
    "loops": 3,
    "results": [{ "item": "create:precision_mechanism" }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "create:incomplete_precision_mechanism" },
          { "item": "create_connected:encased_chain_cogwheel" }
        ],
        "results": [
          { "item": "create:incomplete_precision_mechanism" }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "create:incomplete_precision_mechanism" },
          { "item": "kubejs:mechanical_core" }
        ],
        "results": [
          { "item": "create:incomplete_precision_mechanism" }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "create:incomplete_precision_mechanism" },
          { "item": "create:mechanical_pump" }
        ],
        "results": [
          { "item": "create:incomplete_precision_mechanism" }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "create:incomplete_precision_mechanism" },
          { "item": "kubejs:circuit_board" }
        ],
        "results": [
          { "item": "create:incomplete_precision_mechanism" }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "create:incomplete_precision_mechanism" },
          { "item": "create:sturdy_sheet" }
        ],
        "results": [
          { "item": "create:incomplete_precision_mechanism" }
        ]
      }
    ],
    "transitionalItem": {"item": "create:incomplete_precision_mechanism"}
  }).id("dut_create:tech/precision_mechanism")
  //鞘翅
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:industrial_iron_sheet" },
    "loops": 1,
    "results": [{ "item": "minecraft:elytra"}],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:industrial_iron_sheet" },
        { "item": "vintageimprovements:small_brass_spring" }],
        "results": [{ "item": "kubejs:industrial_iron_sheet" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:industrial_iron_sheet" },
        { "item": "kubejs:duraplas_sheet" }],
        "results": [{ "item": "kubejs:industrial_iron_sheet" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:industrial_iron_sheet" },
        { "item": "kubejs:duraplas_sheet" }],
        "results": [{ "item": "kubejs:industrial_iron_sheet" }]
      },
      {
        "type": "vintageimprovements:laser_cutting",
        "ingredients": [{ "item": "kubejs:industrial_iron_sheet" }],
        "results": [{ "item": "kubejs:industrial_iron_sheet"}],
        "energy": 48000,
        "maxChargeRate": 400
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:industrial_iron_sheet" },
        { "amount": 500, "fluid": "kubejs:cryogen" }],
        "results": [{ "item": "kubejs:industrial_iron_sheet" }]
      },
      {
        "type":"vintageimprovements:polishing",
        "speedLimits": 3,
        "ingredients": [{"item": "kubejs:industrial_iron_sheet"}],
        "results": [{"item": "kubejs:industrial_iron_sheet"}],
        "processingTime": 120
      }
    ],
    "transitionalItem": { "item": "kubejs:industrial_iron_sheet" }
  }).id("dut_create:sequenced_assembly/elytra")
  //不死图腾
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "minecraft:gold_ingot" },
    "loops": 1,
    "results": [{ "item": "minecraft:totem_of_undying"}],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "minecraft:gold_ingot" },
        { "item": "minecraft:emerald" }],
        "results": [{ "item": "minecraft:gold_ingot" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "minecraft:gold_ingot" },
        { "item": "create:golden_sheet" }],
        "results": [{ "item": "minecraft:gold_ingot" }]
      },
      {
        "type": "vintageimprovements:laser_cutting",
        "ingredients": [{ "item": "minecraft:gold_ingot" }],
        "results": [{ "item": "minecraft:gold_ingot"}],
        "energy": 48000,
        "maxChargeRate": 400
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:gold_ingot" },
        { "amount": 500, "fluid": "create_enchantment_industry:hyper_experience" }],
        "results": [{ "item": "minecraft:gold_ingot" }]
      },
      {
        "type":"vintageimprovements:polishing",
        "speedLimits": 1,
        "ingredients": [{"item": "minecraft:gold_ingot"}],
        "results": [{"item": "minecraft:gold_ingot"}],
        "processingTime": 60
      }
    ],
    "transitionalItem": { "item": "minecraft:gold_ingot" }
  }).id("dut_create:sequenced_assembly/totem_of_undying")
  //附魔金苹果
  event.remove({ output: 'minecraft:enchanted_golden_apple', not: { mod: 'kubejs' } })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "minecraft:golden_apple" },
    "loops": 1,
    "results": [{ "item": "minecraft:enchanted_golden_apple"}],
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:golden_apple" },
        { "amount": 250, "fluid": "create_enchantment_industry:hyper_experience" }],
        "results": [{ "item": "minecraft:golden_apple" }]
      },
      {
        "type":"vintageimprovements:polishing",
        "speedLimits": 1,
        "ingredients": [{"item": "minecraft:golden_apple"}],
        "results": [{"item": "minecraft:golden_apple"}],
        "processingTime": 60
      }
    ],
    "transitionalItem": { "item": "minecraft:golden_apple" }
  }).id("dut_create:sequenced_assembly/enchanted_golden_apple")
  //动力臂
  event.remove({ output: 'create:mechanical_arm', not: { mod: 'kubejs' } })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "create:brass_hand" },
    "loops": 1,
    "results": [
      { "item": "create:mechanical_arm"},
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "item": "kubejs:cardan_joint" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "item": "kubejs:differential" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "item": "kubejs:lime_circuit_board" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_brass_box" }
  }).id("dut_create:sequenced_assembly/mechanical_arm")
  //列车机壳
  event.remove({ output: 'create:railway_casing', not: { mod: 'kubejs' } })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "create:brass_casing" },
    "loops": 1,
    "results": [
      { "item": "create:railway_casing", "count": 2 },
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_railway_box" },
        { "item": "kubejs:mechanical_core" }],
        "results": [{ "item": "kubejs:incomplete_railway_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_railway_box" },
        { "item": "create:sturdy_sheet" }],
        "results": [{ "item": "kubejs:incomplete_railway_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_railway_box" },
        { "tag": "forge:storage_blocks/iron" }],
        "results": [{ "item": "kubejs:incomplete_railway_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_railway_box" }
  }).id("dut_create:sequenced_assembly/railway_casing")
  //黄铜手部零件 100%
  event.remove({ output: 'create:brass_hand', not: { mod: 'kubejs' } })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:cardan_joint" },
    "loops": 3,
    "results": [{ "item": "create:brass_hand", "count": 3 }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_brass_hand" },
        { "item": "create:andesite_alloy" }],
        "results": [{ "item": "kubejs:incomplete_brass_hand" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_brass_hand" },
        { "tag": "forge:plates/brass" }],
        "results": [{ "item": "kubejs:incomplete_brass_hand" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_brass_hand" },
        { "item": "createaddition:brass_rod" }],
        "results": [{ "item": "kubejs:incomplete_brass_hand" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_brass_hand" },
        { "tag": "forge:nuggets/brass" }],
        "results": [{ "item": "kubejs:incomplete_brass_hand" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_hand" },
        { "amount": 500, "fluidTag": "forge:lube_oil"}],
        "results": [{ "item": "kubejs:incomplete_brass_hand" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_brass_hand" }
  }).id("dut_create:sequenced_assembly/brass_hand")
  //十字齿轮箱
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:mechanical_core" },
    "loops": 1,
    "results": [{  "item": "create:gearbox" }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_andesite_box" },
        { "tag": "dut_create:cogwheel" }],
        "results": [{ "item": "kubejs:incomplete_andesite_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_andesite_box" },
        { "tag": "dut_create:cogwheel" }],
        "results": [{ "item": "kubejs:incomplete_andesite_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_andesite_box" },
        { "tag": "dut_create:cogwheel" }],
        "results": [{ "item": "kubejs:incomplete_andesite_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_andesite_box" },
        { "tag": "dut_create:cogwheel" }],
        "results": [{ "item": "kubejs:incomplete_andesite_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_andesite_box" }
  }).id("dut_create:sequenced_assembly/gearbox")
  //链式传动箱
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:mechanical_core" },
    "loops": 1,
    "results": [{ "item": "create:encased_chain_drive" }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_andesite_box" },
        { "tag": "forge:nuggets/iron" }],
        "results": [{ "item": "kubejs:incomplete_andesite_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_andesite_box" },
        { "tag": "forge:nuggets/iron" }],
        "results": [{ "item": "kubejs:incomplete_andesite_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_andesite_box" },
        { "tag": "forge:nuggets/iron" }],
        "results": [{ "item": "kubejs:incomplete_andesite_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_andesite_box" }
  }).id("dut_create:sequenced_assembly/encased_chain_drive")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:mechanical_core" },
    "loops": 1,
    "results": [{ "count": 3, "item": "create:encased_chain_drive" }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_andesite_box" },
        { "tag": "forge:nuggets/industrial_iron" }],
        "results": [{ "item": "kubejs:incomplete_andesite_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_andesite_box" },
        { "tag": "forge:nuggets/industrial_iron" }],
        "results": [{ "item": "kubejs:incomplete_andesite_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_andesite_box" },
        { "tag": "forge:nuggets/industrial_iron" }],
        "results": [{ "item": "kubejs:incomplete_andesite_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_andesite_box" }
  }).id("dut_create:sequenced_assembly/encased_chain_drive_industrial")
  //蒸汽机
  event.remove({ output: 'create:steam_engine', not: { mod: 'kubejs' } })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "tag": "forge:storage_blocks/copper"
    },
    "loops": 1,
    "results": [{  "item": "create:steam_engine" }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_steam_engine" },
        { "item": "create:fluid_pipe" }],
        "results": [{ "item": "kubejs:incomplete_steam_engine" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_steam_engine" },
        { "item": "create:andesite_alloy" }],
        "results": [{ "item": "kubejs:incomplete_steam_engine" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_steam_engine" },
        { "item": "kubejs:bearing" }],
        "results": [{ "item": "kubejs:incomplete_steam_engine" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_steam_engine" },
        { "item": "kubejs:bearing" }],
        "results": [{ "item": "kubejs:incomplete_steam_engine" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_steam_engine" },
        { "tag": "forge:plates/brass" }],
        "results": [{ "item": "kubejs:incomplete_steam_engine" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_steam_engine" }
  }).id("dut_create:sequenced_assembly/steam_engine")
})