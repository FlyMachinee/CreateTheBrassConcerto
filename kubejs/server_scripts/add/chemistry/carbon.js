ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})create_dd
  //骨粉二氧化碳
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "heatRequirement": "superheated",
    "secondaryFluidOutput": 0,
    "ingredients": [
      { "item": "minecraft:bone_meal" },
      { "item": "minecraft:bone_meal" },
      { "item": "minecraft:bone_meal" },
      { "item": "minecraft:bone_meal" }
    ],
    "results": [{ "fluid": "kubejs:carbon_dioxide", "amount": 1000 },
    { "item": "kubejs:salt", "count":4 }],
    "processingTime": 40
  }).id('dut_create:co2_from_caco3')
  //甲烷二氧化碳
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidOutput": 0,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluid": "kubejs:natural_gas", "amount": 250 },
      { "fluidTag": "forge:oxygen", "amount": 500 }
    ],
    "results": [{ "fluid": "kubejs:carbon_dioxide", "amount": 250 },
    { "fluid": "minecraft:water", "amount": 500 }],
    "processingTime": 10
  }).id('dut_create:co2_from_ch4')
  //木炭二氧化碳
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidOutput": 0,
    "heatRequirement": "heated",
    "ingredients": [
      { "item": "minecraft:charcoal" },
      { "fluidTag": "forge:oxygen", "amount": 250 }
    ],
    "results": [{ "fluid": "kubejs:carbon_dioxide", "amount": 250 }],
    "processingTime": 60
  }).id('dut_create:co2_from_charcoal')
  //煤二氧化碳
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidOutput": 0,
    "heatRequirement": "heated",
    "ingredients": [
      { "item": "minecraft:coal" },
      { "fluidTag": "forge:oxygen", "amount": 250 }
    ],
    "results": [{ "fluid": "kubejs:carbon_dioxide", "amount": 250 }],
    "processingTime": 40
  }).id('dut_create:co2_from_coal')
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidOutput": 0,
    "heatRequirement": "heated",
    "ingredients": [
      { "item": "kubejs:crushed_coal" },
      { "fluidTag": "forge:oxygen", "amount": 250 }
    ],
    "results": [{ "fluid": "kubejs:carbon_dioxide", "amount": 250 }],
    "processingTime": 30
  }).id('dut_create:co2_from_crushed_coal')
  //石墨烯-胶带粘黏法
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:graphite" },
    "results": [
      { "item": "kubejs:graphene_coil", "chance": 0.01 },
      { "item": "kubejs:crushed_coal", "chance": 0.99 },
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "vintageimprovements:curving",
        "itemAsHead": "minecraft:slime_ball",
        "ingredients": [
          { "item": "kubejs:graphite" }
        ],
        "results": [
          { "item": "kubejs:graphite" }
        ]
      }
    ],
    "transitionalItem": { "item": "kubejs:graphite" }
  }).id("dut_create:sequnced_assembly/graphene_coil_from_graphite")
  //石墨烯-外延生长法-初级配方
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
    "ingredients": [
      { "item": "kubejs:carborundum" },
      { "item": "kubejs:carborundum" },
      { "item": "kubejs:carborundum" },
      { "item": "kubejs:carborundum" },
      { "item": "kubejs:carborundum" },
      { "item": "kubejs:carborundum" }
    ],
    "results": [
      { "item": "kubejs:graphene_coil", "chance": 0.5 },
      { "item": "kubejs:graphene_coil", "chance": 0.5 },
      { "item": "kubejs:graphene_coil", "chance": 0.5 }
    ],
    "processingTime": 20
  }).id('dut_create:graphene_coil_from_sic_basic')
  //碳化硅-初级配方
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "secondaryFluidOutput": 0,
    "heatRequirement": "superheated",
    "ingredients": [
      { "item": "kubejs:graphite" },
      { "item": "minecraft:quartz" }
    ],
    "results": [
      { "item": "kubejs:carborundum","chance":0.5 },
      { "fluid": "kubejs:carbon_dioxide", "amount": 250 }
    ],
    "processingTime": 25
  }).id('dut_create:carborundum')
  
})