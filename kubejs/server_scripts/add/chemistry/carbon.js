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
})