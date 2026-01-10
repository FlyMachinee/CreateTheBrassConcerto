ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //合成天然气
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "heatRequirement": "superheated",
    "ingredients": [
      { "fluidTag": "forge:hydrogen", "amount": 1000 },
      { "fluid": "minecraft:water", "amount": 500 },
      { "item": "kubejs:crushed_coal" },
      { "item": "kubejs:crushed_coal" }
    ],
    "results": [
      { "fluid": "kubejs:natural_gas", "amount": 500 },
      { "fluid": "minecraft:water", "amount": 500 }
    ],
    "processingTime": 45
  }).id('dut_create:natural_gas_from_coal')
  //合成天然气
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "secondaryFluidOutput": 0,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluidTag": "forge:hydrogen", "amount": 1000 },
      { "fluid": "kubejs:carbon_dioxide", "amount": 250 }
    ],
    "results": [
      { "fluid": "minecraft:water", "amount": 500 },
      { "fluid": "kubejs:natural_gas", "amount": 250 }
    ],
    "processingTime": 15
  }).id('dut_create:natural_gas_from_co2')
  //可燃冰
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "ingredients": [
      { "item": "ad_astra:ice_shard" },
    ],
    "results": [
      { "fluid": "kubejs:natural_gas", "amount": 125 },
      { "item": "minecraft:ice", "chance": 0.8 },
      { "item": "kubejs:diorite_alloy", "chance": 0.03 },
      { "item": "kubejs:crushed_coal", "chance": 0.03 },
      { "item": "minecraft:clay_ball", "chance": 0.03 },
      { "item": "minecraft:mud", "chance": 0.03 },
      { "item": "minecraft:gravel", "chance": 0.03 }
    ],
    "processingTime": 15
  }).id('dut_create:vacuumizing/natural_gas_from_ice')
})