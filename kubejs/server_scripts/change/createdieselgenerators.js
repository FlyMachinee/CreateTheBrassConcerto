ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  event.remove({ id: "createdieselgenerators:basin_fermenting/fermented_spider_eye" })
  //木屑
  event.remove({ id: "createdieselgenerators:crushing/wood_chip_planks" })

  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "item": "createdieselgenerators:chip_wood_block" }
    ],
    "processingTime": 5,
    "results": [
      { "item": "createdieselgenerators:wood_chip", "count": 8 }
    ]
  }).id("dut_create:crushing/wood_chip")
  //沥青
  event.remove({ id: "createdieselgenerators:mixing/asphalt_block" })
  event.remove({ id: "createdieselgenerators:crafting/asphalt_block" })

  event.custom({
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
      { "fluid": "createloveandwar:bitumen_fluid", "amount": 125 },
      { "item": "minecraft:sand" },
      { "item": "minecraft:sand" },
      { "item": "minecraft:sand" },
      { "item": "minecraft:sand" },
      { "item": "minecraft:gravel" },
      { "item": "minecraft:gravel" },
      { "item": "minecraft:gravel" },
      { "item": "minecraft:gravel" }
    ],
    "results": [
      { "item": "createdieselgenerators:asphalt_block", "count": 8 }
    ]
  }).id("dut_create:mixing/asphalt_block")
  //生物柴油
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInputs": 1,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluidTag": "forge:ethanol", "amount": 200 },
      { "fluidTag": "forge:gasoline", "amount": 150 }
    ],
    "results": [
      { "fluid": "createdieselgenerators:biodiesel", "amount": 500 },
    ],
    "processingTime": 45
  }).id('dut_create:pressurizing/biodiesel_from_gasoline')
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluidTag": "forge:ethanol", "amount": 200 },
      { "fluidTag": "dut_create:plantoil", "amount": 200 }
    ],
    "results": [
      { "fluid": "createdieselgenerators:biodiesel", "amount": 500 },
    ],
    "processingTime": 30
  }).id('dut_create:pressurizing/biodiesel_0')
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluidTag": "dut_create:plantoil", "amount": 200 },
      { "fluidTag": "forge:ethanol", "amount": 200 }
    ],
    "results": [
      { "fluid": "createdieselgenerators:biodiesel", "amount": 500 },
    ],
    "processingTime": 30
  }).id('dut_create:pressurizing/biodiesel_1')
  //植物燃油
  event.remove({ id: 'createdieselgenerators:compacting/plant_oil' })
  //木屑块
  event.remove({ id: 'createdieselgenerators:crushing/wood_chip_slabs' })
  event.remove({ id: 'createdieselgenerators:crushing/wood_chip_stairs' })
  event.remove({ id: 'createdieselgenerators:crushing/wood_chip_fences' })
  //木炭
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "heatRequirement": "heated",
    "ingredients": [
      { "item": "createdieselgenerators:chip_wood_block" }
    ],
    "results": [{ "item": "minecraft:charcoal" }, { "item": "minecraft:charcoal", "chance": 0.5 }],
    "processingTime": 30
  }).id('dut_create:charcoal_from_chip_wood_block')
  //木棍
  event.custom({
    "type": "create:cutting",
    "ingredients": [{ "item": "createdieselgenerators:chip_wood_block" }],
    "processingTime": 5,
    "results": [
      { "item": "minecraft:stick", "count": 6 }
    ]
  }).id('dut_create:stick_from_chip_wood_block')
  function Planks(i) {
    event.custom({
      "type": "create:compacting",
      "ingredients": [{ "item": "createdieselgenerators:chip_wood_block" }],
      "results": [{ "item": "minecraft:" + i + "_planks", "count": 6 }],
    }).id("dut_create:compacting/" + i + "_planks_from_woodchip")
  }
  const WoodType = [
    "spruce",
    "oak",
    "birch",
    "dark_oak",
    "jungle",
    "acacia",
    "mangrove",
    "cherry",
    "warped",
    "crimson"
  ]
  for (let i of WoodType) {
    Planks(i)
  }

  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "item": "createdieselgenerators:chip_wood_block" }
    ],
    "result": { "item": "createdieselgenerators:wood_chip", "count": 4 }
  }).id("dut_create:wood_chip_split")
  //原油探测器
  event.remove({ output: 'createdieselgenerators:oil_scanner', not: { mod: 'kubejs' } })
  event.remove({ id: 'createdieselgenerators:mechanical_crafting/pumpjack_crank' })
  event.remove({ id: 'createdieselgenerators:crafting/pumpjack_bearing' })
  event.remove({ id: 'createdieselgenerators:crafting/pumpjack_head' })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CCC",
      "ADA"
    ],
    "key": {
      "A": { "tag": "forge:ingots/tin" },
      "B": { "item": "create:andesite_alloy" },
      "C": { "item": "kubejs:bearing" },
      "D": { "item": "kubejs:mechanical_core" }
    },
    "result": { "item": "createdieselgenerators:pumpjack_crank" }
  }).id('dut_create:pumpjack_crank')
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "BAB",
      "ACA",
      "BAB"
    ],
    "key": {
      "A": { "tag": "forge:ingots/tin" },
      "B": { "item": "create:andesite_alloy" },
      "C": { "item": "create:mechanical_bearing" },
    },
    "result": { "item": "createdieselgenerators:pumpjack_bearing" }
  }).id('dut_create:pumpjack_bearing')
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "A A",
      "BCB",
      "A A"
    ],
    "key": {
      "B": { "tag": "forge:ingots/tin" },
      "A": { "item": "create:andesite_alloy" },
      "C": { "tag": "dut_create:belt" },
    },
    "result": { "item": "createdieselgenerators:pumpjack_head" }
  }).id('dut_create:pumpjack_head')
  //密封液罐
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "A"
    ],
    "key": {
      "A": { "item": "createdieselgenerators:canister" }
    },
    "result": { "item": "createdieselgenerators:canister" }
  }).id('dut_create:canister_emptying')
  //分馏塔控制器
  event.remove({ output: 'createdieselgenerators:distillation_controller', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "BBB",
      "PCP",
      "AIA"
    ],
    "key": {
      "A": {
        "item": "create:andesite_alloy"
      },
      "B": {
        "tag": "dut_create:plates/polymer"
      },
      "I": {
        "tag": "forge:plates/iron"
      },
      "C": {
        "item": "minecraft:clock"
      },
      "P": {
        "item": "create:fluid_pipe"
      }
    },
    "result": { "item": "createdieselgenerators:distillation_controller", "count": 4 }
  }).id('dut_create:distillation_controller')
  //大型柴油引擎
  event.remove({ id: "createdieselgenerators:compacting/plant_oil" })
  event.remove({ id: "createdieselgenerators:crafting/huge_diesel_engine" })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "create:steam_engine" },
    "loops": 3,
    "results": [{ "item": "createdieselgenerators:huge_diesel_engine" }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_huge_diesel_engine" },
        { "item": "kubejs:differential" }],
        "results": [{ "item": "kubejs:incomplete_huge_diesel_engine" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_huge_diesel_engine" },
        { "item": "create:smart_fluid_pipe" }],
        "results": [{ "item": "kubejs:incomplete_huge_diesel_engine" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_huge_diesel_engine" },
        { "amount": 250, "fluidTag": "forge:diesel" }],
        "results": [{ "item": "kubejs:incomplete_huge_diesel_engine" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_huge_diesel_engine" }
  }).id('dut_create:huge_diesel_engine')
  //小型柴油引擎
  event.remove({ id: "createdieselgenerators:crafting/diesel_engine" })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:storage_blocks/brass" },
    "loops": 1,
    "results": [{ "item": "createdieselgenerators:diesel_engine" }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_diesel_engine" },
        { "item": "create:fluid_tank" }],
        "results": [{ "item": "kubejs:incomplete_diesel_engine" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_diesel_engine" },
        { "item": "createdieselgenerators:engine_piston" }],
        "results": [{ "item": "kubejs:incomplete_diesel_engine" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_diesel_engine" },
        { "item": "createdieselgenerators:engine_piston" }],
        "results": [{ "item": "kubejs:incomplete_diesel_engine" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_diesel_engine" },
        { "item": "create:sturdy_sheet" }],
        "results": [{ "item": "kubejs:incomplete_diesel_engine" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_diesel_engine" },
        { "amount": 250, "fluid": "createdieselgenerators:gasoline" }],
        "results": [{ "item": "kubejs:incomplete_diesel_engine" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_diesel_engine" }
  }).id('dut_create:diesel_engine')
  //引擎活塞
  event.remove({ id: "createdieselgenerators:crafting/engine_piston" })
  event.remove({ id: "createdieselgenerators:crafting/engine_piston_from_rods" })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "B": { "item": "create:shaft" },
      "C": { "tag": "dut_create:craftnugget" },
      "A": { "item": "kubejs:bearing" }
    },
    "pattern": [
      "C",
      "B",
      "A"
    ],
    "result": { "item": "createdieselgenerators:engine_piston" },
    "show_notification": true
  }).id("dut_create:engine_piston")

  //涡轮增压
  event.remove({ id: 'createdieselgenerators:crafting/engine_turbocharger' })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABC",
      "DED",
      "ABA"
    ],
    "key": {
      "A": { "item": "create:andesite_alloy" },
      "B": { "tag": "forge:ingots/tin" },
      "C": { "item": "create:fluid_pipe" },
      "D": { "tag": "forge:plates/iron" },
      "E": { "item": "create:encased_fan" }
    },
    "result": { "item": "createdieselgenerators:engine_turbocharger" }
  }).id('dut_create:engine_turbocharger')
})