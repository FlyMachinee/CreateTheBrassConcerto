ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //沥青
  event.remove({id:"createdieselgenerators:mixing/asphalt_block"})
  event.remove({id:"createdieselgenerators:crafting/asphalt_block"})
  
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
      {"fluid": "createloveandwar:bitumen_fluid","amount": 125},
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
      { "item": "createdieselgenerators:asphalt_block","count":8 }
    ]
  }).id("dut_create:mixing/asphalt_block")
  //生物柴油
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInputs": 1,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluidTag": "forge:ethanol", "amount": 200 },
      { "fluidTag": "forge:gasoline", "amount": 160 }
    ],
    "results": [
      { "fluid": "createdieselgenerators:biodiesel", "amount": 450 },
    ],
    "processingTime": 300
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
      { "fluid": "createdieselgenerators:biodiesel", "amount": 450 },
    ],
    "processingTime": 200
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
      { "fluid": "createdieselgenerators:biodiesel", "amount": 450 },
    ],
    "processingTime": 200
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
    "processingTime": 200
  }).id('dut_create:charcoal_from_chip_wood_block')
  //木棍
  event.custom({
    "type": "create:cutting",
    "ingredients": [{"item": "createdieselgenerators:chip_wood_block"}],
    "processingTime": 60,
    "results": [
      {"item": "minecraft:stick","count":6}
    ]
  }).id('dut_create:stick_from_chip_wood_block')
  function Planks(i){
    event.custom({
    "type": "create:compacting",
    "ingredients": [{ "item": "createdieselgenerators:chip_wood_block" }],
    "results": [{ "item": "minecraft:"+i+"_planks","count":6}],
  }).id("dut_create:compacting/"+i+"_planks_from_woodchip")
  }
  const WoodType=[
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
  for (let i of WoodType){
    Planks(i)
  }
  
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "item": "createdieselgenerators:chip_wood_block" }
    ],
    "result": { "item": "createdieselgenerators:wood_chip" , "count": 4 }
  }).id("dut_create:wood_chip_split")
  //原油探测器
  event.remove({ output: 'createdieselgenerators:oil_scanner', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ACA",
      "SIS",
      " B "
    ],
    "key": {
      "A": { "item": "create:andesite_alloy" },
      "B": { "tag": "dut_create:buckets/crude_oil" },
      "S": { "tag": "forge:plates/iron" },
      "I": { "tag": "forge:ingots/iron" },
      "C": { "item": "minecraft:clock" }
    },
    "result": {
      "item": "createdieselgenerators:oil_scanner",
      "count": 1
    }
  }).id('dut_create:oil_scanner')
  event.remove({ id: 'createdieselgenerators:mechanical_crafting/pumpjack_crank', not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CCC",
      "ADA"
    ],
    "key": {
      "A": { "tag": "forge:ingots/zinc" },
      "B": { "item": "create:andesite_alloy" },
      "C": { "item": "kubejs:bearing" },
      "D": { "item": "kubejs:mechanical_core" }
    },
    "result": {"item": "createdieselgenerators:pumpjack_crank"}
  }).id('dut_create:pumpjack_crank')
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
    "result": {
      "item": "createdieselgenerators:distillation_controller",
      "count": 4
    }
  }).id('dut_create:distillation_controller')
  //大型柴油引擎
  event.remove({ output: 'createdieselgenerators:plant_oil', not: { mod: 'kubejs' } })
  event.remove({ output: 'createdieselgenerators:huge_diesel_engine', not: { mod: 'kubejs' } })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "create:steam_engine" },
    "loops": 3,
    "results": [{ "chance": 1.0, "item": "createdieselgenerators:huge_diesel_engine" }],
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
  event.remove({ output: 'createdieselgenerators:diesel_engine', not: { mod: 'kubejs' } })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:storage_blocks/brass" },
    "loops": 1,
    "results": [{ "chance": 1.0, "item": "createdieselgenerators:diesel_engine" }],
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
        { "amount": 250, "fluidTag": "forge:gasoline" }],
        "results": [{ "item": "kubejs:incomplete_diesel_engine" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_diesel_engine" }
  }).id('dut_create:diesel_engine')
  //引擎活塞
  event.remove({ output: 'createdieselgenerators:engine_piston', not: { mod: 'kubejs' } })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:bearing" },
    "loops": 1,
    "results": [{ "chance": 1.0, "item": "createdieselgenerators:engine_piston" }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_engine_piston" },
        [{ "item": "create:shaft" },
        { "item": "createaddition:iron_rod" },{"item":"ad_astra:iron_rod"}]],
        "results": [{ "item": "kubejs:incomplete_engine_piston" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_engine_piston" },
        [{ "tag": "forge:nuggets/zinc" },
        { "tag": "forge:nuggets/iron" }]],
        "results": [{ "item": "kubejs:incomplete_engine_piston" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_engine_piston" },
          { "fluidTag": "dut_create:plantoil", "amount": 125 }],
        "results": [{ "item": "kubejs:incomplete_engine_piston" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_engine_piston" }
  }).id('dut_create:engine_pisto')
})