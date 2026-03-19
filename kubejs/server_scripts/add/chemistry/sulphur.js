ServerEvents.recipes(event => {
  //制取硫磺
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "heatRequirement": "heated",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "kubejs:natural_gas", "amount": 500 },
      { "amount": 500, "fluid": "minecraft:water" }
    ],
    "results": [
      { "item": "kubejs:sulphur", "count": 2 }
    ],
    "processingTime": 20
  }).id('dut_create:sulphur_from_gas')
  //二氧化硫
  event.remove({ id: "vintageimprovements:pressurizing/sulfur_dioxide" })
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "heatRequirement": "heated",
    "secondaryFluidOutput": 0,
    "ingredients": [
      { "item": "kubejs:sulphur" }
    ],
    "results": [
      { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 500 }
    ],
    "processingTime": 30
  }).id('dut_create:sulfur_dioxide')
  //三氧化硫
  event.remove({ id: "vintageimprovements:pressurizing/sulfur_trioxide" })
  event.remove({ id: "vintageimprovements:pressurizing/sulfur_trioxide_alt" })
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "heatRequirement": "superheated",
    "secondaryFluidOutput": 0,
    "ingredients": [
      { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 250 },
      { "tag": "forge:nuggets/iron" }
    ],
    "results": [
      { "fluid": "vintageimprovements:sulfur_trioxide", "amount": 250 }
    ],
    "processingTime": 30
  }).id('dut_create:sulfur_trioxide')
  //硫酸
  event.remove({ id: "vintageimprovements:pressurizing/sulfuric_acid" })
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "ingredients": [
      { "fluid": "vintageimprovements:sulfur_trioxide", "amount": 250 },
      { "fluid": "minecraft:water", "amount": 250 }
    ],
    "processingTime": 60,
    "results": [
      { "fluid": "vintageimprovements:sulfuric_acid", "amount": 250 }
    ]
  }).id('dut_create:sulfuric_acid_from_sulfur_trioxide')
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "heatRequirement": "superheated",
    "ingredients": [
      { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 500 },
      { "fluid": "minecraft:water", "amount": 500 },
      { "tag": "forge:plates/iron" }
    ],
    "processingTime": 45,
    "results": [
      { "fluid": "vintageimprovements:sulfuric_acid", "amount": 500 }
    ]
  }).id('dut_create:sulfuric_acid')
  //双酸反应
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "ingredients": [
      { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 500 },
      { "fluid": "kubejs:chlorine", "amount": 500 }
    ],
    "processingTime": 60,
    "results": [
      { "fluid": "vintageimprovements:sulfuric_acid", "amount": 500 },
      { "fluid": "kubejs:muriatic_acid", "amount": 1000 }
    ]
  }).id('dut_create:sulfuric_muriatic_acid')
  //二氧化硫漂白-羊毛
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "tag": "minecraft:wool" },
      { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 125 },
    ],
    "results": [
      { "item": "minecraft:white_wool" }
    ]
  }).id('dut_create:so2_bleach_wool')
  //二氧化硫漂白-染料
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "tag": "forge:dyes" },
      { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 50 },
    ],
    "results": [
      { "item": "minecraft:white_dye" }
    ]
  }).id('dut_create:so2_bleach_dyes')
  //二氧化硫漂白-旗帜
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "tag": "minecraft:banners" },
      { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 125 },
    ],
    "results": [{ "item": "minecraft:white_banner" }]
  }).id('dut_create:so2_bleach_banners')
})