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
    "processingTime": 300
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
    "processingTime": 300
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
    "processingTime": 600
  }).id('dut_create:cryogen/ice')
  //冰冷却液
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "ingredients": [
      { "item": "minecraft:ice" },
      { "item": "minecraft:ice" },
      { "item": "minecraft:ice" }
    ],
    "results": [
      { "fluid": "kubejs:cryogen", "amount": 300 }
    ],
    "processingTime": 600
  }).id('dut_create:cryogen/from_ice')
  //细雪冷却液
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "ingredients": [
      { "item": "minecraft:powder_snow_bucket" },
      { "fluid": "minecraft:water", "amount": 225 }
    ],
    "results": [
      { "item": "minecraft:bucket", },
      { "fluid": "kubejs:cryogen", "amount": 500 }
    ],
    "processingTime": 600
  }).id('dut_create:cryogen/from_powder_snow')

  function cryogenCooldownMetal(input, output) {
    event.custom({
      "type": "vintageimprovements:pressurizing",
      "secondaryFluidInput": 0,
      "ingredients": [
        { "fluid": "kubejs:cryogen", "amount": 100 },
        { "fluid": input, "amount": 360 }
      ],
      "results": [
        { "item": output, "count": 4 },
      ],
      "processingTime": 10
    }).id("dut_create:fluid_cooldown/" + input.split(':')[1])
  }
  cryogenCooldownMetal("kubejs:aluminum", "kubejs:aluminum_ingot")
  cryogenCooldownMetal("kubejs:industrial_iron", "kubejs:industrial_iron_ingot")
  cryogenCooldownMetal("kubejs:brass", "create:brass_ingot")
  cryogenCooldownMetal("kubejs:new_zinc", "kubejs:new_zinc_ingot")
  cryogenCooldownMetal("kubejs:iron", "minecraft:iron_ingot")
  cryogenCooldownMetal("kubejs:gold", "minecraft:gold_ingot")
  cryogenCooldownMetal("kubejs:copper", "minecraft:copper_ingot")
  cryogenCooldownMetal("createbigcannons:molten_steel", "ad_astra:steel_ingot")
  cryogenCooldownMetal("createbigcannons:molten_cast_iron", "createbigcannons:cast_iron_ingot")
  cryogenCooldownMetal("createbigcannons:molten_nethersteel", "createbigcannons:nethersteel_ingot")
  cryogenCooldownMetal("kubejs:desh", "ad_astra:desh_ingot")
  cryogenCooldownMetal("kubejs:tin", "kubejs:tin_ingot")
})