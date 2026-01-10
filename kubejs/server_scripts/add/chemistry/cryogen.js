ServerEvents.recipes(event => {
  //雪球-顶层雪
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "kubejs:cryogen", "amount": 25 },
      { "item": "minecraft:snowball" }
    ],
    "results": [
      { "item": "minecraft:snow" }
    ],
    "processingTime": 5
  }).id('dut_create:cryogen/snow')
  //顶层雪-雪块
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "kubejs:cryogen", "amount": 25 },
      { "item": "minecraft:snow" }
    ],
    "results": [
      { "item": "minecraft:snow_block" }
    ],
    "processingTime": 20
  }).id('dut_create:cryogen/snow_block')
  //蓝冰制冰
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "minecraft:water", "amount": 250 },
      { "item": "minecraft:blue_ice" },
    ],
    "results": [
      { "item": "minecraft:blue_ice" },
      { "item": "minecraft:ice" }
    ],
    "processingTime": 35
  }).id('dut_create:cryogen/ice')
  //冰冷冻剂
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "ingredients": [
      { "item": "minecraft:ice" },
      { "item": "minecraft:ice" }
    ],
    "results": [
      { "fluid": "kubejs:cryogen", "amount": 500 }
    ],
    "processingTime": 80
  }).id('dut_create:cryogen/from_ice')

})