ServerEvents.recipes(event => {
  event.remove({id:"ad_astra:blasting/desh_ingot_from_blasting_deepslate_desh_ore"})
  event.remove({id:"ad_astra:blasting/desh_ingot_from_blasting_moon_desh_ore"})
  event.remove({id:"ad_astra:blasting/desh_ingot_from_blasting_raw_desh"})
  event.remove({id:"ad_astra:smelting/desh_ingot_from_smelting_deepslate_desh_ore"})
  event.remove({id:"ad_astra:smelting/desh_ingot_from_blasting_moon_desh_ore"})
  event.remove({id:"ad_astra:smelting/desh_ingot_from_blasting_raw_desh"})
  event.remove({id:"ad_astra:steel_cable"})
  event.remove({id:"ad_astra:desh_cable"})
  event.remove({id:"ad_astra:cable_duct"})
  event.remove({id:"ad_astra:oxygen_sensor"})
  event.remove({id:"ad_astra:wrench"})
  event.remove({id:"ad_astra:coal_generator"})
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "tag": "forge:nuggets/desh" },
      { "tag": "forge:nuggets/desh" },
      { "tag": "forge:nuggets/desh" },
      { "tag": "forge:nuggets/desh" },
      { "tag": "forge:nuggets/desh" },
      { "tag": "forge:nuggets/desh" },
      { "tag": "forge:nuggets/desh" },
      { "tag": "forge:nuggets/desh" },
      { "tag": "forge:nuggets/desh" }
    ],
    "result": { "item": "ad_astra:desh_ingot" }
  }).id("dut_create:ad_astra/desh_ingot")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "tag": "forge:nuggets/ostrum" },
      { "tag": "forge:nuggets/ostrum" },
      { "tag": "forge:nuggets/ostrum" },
      { "tag": "forge:nuggets/ostrum" },
      { "tag": "forge:nuggets/ostrum" },
      { "tag": "forge:nuggets/ostrum" },
      { "tag": "forge:nuggets/ostrum" },
      { "tag": "forge:nuggets/ostrum" },
      { "tag": "forge:nuggets/ostrum" }
    ],
    "result": { "item": "ad_astra:ostrum_ingot" }
  }).id("dut_create:ad_astra/ostrum_ingot")
  //月岩粉碎
  event.custom({
    "type": "create:crushing",
    "ingredients": [{ "item": "ad_astra:moon_deepslate" }],
    "results": [
      { "item": "ad_astra:moon_stone" },
      { "item": "ad_astra:moon_stone", "chance": 0.75 }
    ],
    "processingTime": 80
  }).id("dut_create:ad_astra/crushing/moon_deepslate")
  event.custom({
    "type": "create:crushing",
    "ingredients": [{ "item": "ad_astra:moon_stone" }],
    "results": [
      { "item": "ad_astra:moon_cobblestone" }
    ],
    "processingTime": 80
  }).id("dut_create:ad_astra/crushing/moon_stone")
  event.custom({
    "type": "create:crushing",
    "ingredients": [{ "item": "ad_astra:moon_cobblestone" }],
    "results": [
      { "item": "ad_astra:moon_sand" }
    ],
    "processingTime": 80
  }).id("dut_create:ad_astra/crushing/moon_cobblestone")
  //管道箱
  event.remove({ id:'ad_astra:fluid_pipe_duct' })
  event.custom(
    {
      "type": "create:deploying",
      "ingredients": [
        { "item": "ad_astra:desh_fluid_pipe" },
        { "item": "create:copper_casing" }
      ],
      "results": [
        { "item": "ad_astra:fluid_pipe_duct" }
      ]
    }
  ).id("dut_create:ad_astra/delpoying/fluid_pipe_duct")
  //戴斯管道
  event.remove({ id:'ad_astra:desh_fluid_pipe' })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:solar_panel" },
    "results": [
      { "item": "ad_astra:desh_fluid_pipe", "count": 12 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "item": "create:mechanical_pump" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "item": "kubejs:mechanical_core" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "tag": "dut_create:plates/duraplas" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "tag": "forge:plates/desh" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_copper_box" }
  }).id("dut_create:ad_astra/desh_pipe_solar")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "createdieselgenerators:diesel_engine" },
    "results": [
      { "item": "ad_astra:desh_fluid_pipe", "count": 16 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "item": "create:mechanical_pump" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "item": "kubejs:mechanical_core" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "tag": "dut_create:plates/duraplas" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "tag": "forge:plates/desh" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "tag": "forge:plates/desh" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_copper_box" }
  }).id("dut_create:ad_astra/desh_pipe_diesel")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "createdieselgenerators:large_diesel_engine" },
    "results": [
      { "item": "ad_astra:desh_fluid_pipe", "count": 16 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "item": "create:mechanical_pump" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "item": "kubejs:mechanical_core" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "tag": "dut_create:plates/duraplas" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "tag": "forge:plates/desh" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "tag": "forge:plates/desh" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_copper_box" }
  }).id("dut_create:ad_astra/desh_pipe_motor")
  //发射台
  event.remove({ id:'ad_astra:launch_pad'})
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "#&#",
      "###"
    ],
    "key": {
      "#": { "tag": "forge:storage_blocks/industrial_iron" },
      "&": { "tag": "forge:storage_blocks/steel" }
    },
    "result": { "item": "ad_astra:launch_pad" }
  }).id("dut_create:ad_astra/launch_pad")
  //氧气装载机
  event.remove({ id:'ad_astra:oxygen_loader' })
  event.remove({ id:'ad_astra:oxygen_distributor' })
  //event.replaceOutput({}, '','')
  //event.remove({input: ''})
  //event.custom()
  event.remove({ output: ['ad_astra:etrionic_capacitor', 'ad_astra:solar_panel', 'ad_astra:nasa_workbench', 'ad_astra:etrionic_blast_furnace', 'ad_astra:compressor', 'ad_astra:compressing', 'ad_astra:cryo_freezer', "ad_astra:tier_1_rover", "ad_astra:energizer", "ad_astra:water_pump", "ad_astra:fan", "ad_astra:photovolatic_etrium_cell", "ad_astra:wheel", "ad_astra:engine_frame", "ad_astra:rocket_nose_cone", "ad_astra:rocket_fin"] })
  event.replaceInput({ input: "ad_astra:fan" }, 'ad_astra:fan', 'create:propeller')
  event.remove({ output: 'ad_astra:fuel', not: { mod: 'kubejs' } })
  event.remove({ output: 'ad_astra:fuel_refinery' })
  event.remove({ type: "ad_astra:compressing" })
  event.remove({ type: "ad_astra:alloying" })
  event.remove({ type: "ad_astra:cryo_freezing" })
  event.remove({ type: "ad_astra:nasa_workbench" })
  event.remove({ type: "ad_astra:refining" })
  //event.remove({ input: 'ad_astra:desh_plate', not: { mod: 'kubejs' } })
  //event.remove({ input: 'ad_astra:steel_plate', not: { mod: 'kubejs' } })
  //event.remove({ input: 'ad_astra:ostrum_plate', not: { mod: 'kubejs' } })
  //火箭
  event.remove({ id: 'ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench' })
  event.remove({ id: 'ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench' })
  event.remove({ id: 'ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench' })
  event.remove({ id: 'ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench' })
  //宇航服
  event.remove({ output: 'ad_astra:jet_suit_helmet' })
  event.remove({ output: 'ad_astra:jet_suit' })
  event.remove({ output: 'ad_astra:jet_suit_pants' })
  event.remove({ output: 'ad_astra:jet_suit_boots' })
  //燃料罐
  event.remove({ output: 'ad_astra:desh_tank' })
  event.remove({ output: 'ad_astra:ostrum_tank' })
  event.remove({ output: 'ad_astra:calorite_tank' })
  //引擎
  event.remove({ output: 'ad_astra:desh_engine' })
  event.remove({ output: 'ad_astra:ostrum_engine' })
  event.remove({ output: 'ad_astra:calorite_engine' })
  //气罐
  event.remove({ output: 'ad_astra:gas_tank', mod: 'ad_astra' })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:plates/steel" },
    "results": [
      { "item": "ad_astra:gas_tank", "nbt": { BotariumData: { StoredFluids: [{ Amount: 0, Fluid: "minecraft:empty" }] } } }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "ad_astra:steel_plate" },
        { "tag": "forge:plates/steel" }],
        "results": [{ "item": "ad_astra:steel_plate" }]
      },
      {
        "type": "vintageimprovements:curving",
        "ingredients": [{ "item": "ad_astra:steel_plate" }],
        "results": [{ "item": "ad_astra:steel_plate" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "ad_astra:steel_plate" },
        { "amount": 250, "fluid": "kubejs:cryogen" }],
        "results": [{ "item": "ad_astra:steel_plate" }]
      }
    ],
    "transitionalItem": { "item": "ad_astra:steel_plate" }
  }).id("dut_create:ad_astra/gas_tank")
  //大型气罐
  event.remove({ output: 'ad_astra:large_gas_tank', mod: 'ad_astra' })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:storage_blocks/steel" },
    "results": [
      { "item": "ad_astra:large_gas_tank", "nbt": { BotariumData: { StoredFluids: [{ Amount: 0, Fluid: "minecraft:empty" }] } } }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "ad_astra:steel_block" },
        { "tag": "forge:plates/steel" }],
        "results": [{ "item": "ad_astra:steel_block" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [{ "item": "ad_astra:steel_block" }],
        "results": [{ "item": "ad_astra:steel_block" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "ad_astra:steel_block" },
        { "amount": 500, "fluid": "kubejs:cryogen" }],
        "results": [{ "item": "ad_astra:steel_block" }]
      }
    ],
    "transitionalItem": { "item": "ad_astra:steel_block" }
  }).id("dut_create:ad_astra/large_gas_tank")
})