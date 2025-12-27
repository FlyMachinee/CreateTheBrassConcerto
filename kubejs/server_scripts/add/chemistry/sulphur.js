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
    "processingTime": 200
  }).id('dut_create:sulphur_from_gas')
  //event.remove({input: ''})
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "heatRequirement": "superheated",
    "ingredients": [
      { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 500 },
      { "tag": "forge:nuggets/iron" },
      { "fluid": "minecraft:water", "amount": 500 }
    ],
    "processingTime": 300,
    "results": [
      { "fluid": "vintageimprovements:sulfuric_acid", "amount": 500 }
    ]
  }).id('dut_create:sulfuric_acid_')
  //双酸反应
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "ingredients": [
      { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 500 },
      { "fluid": "kubejs:chlorine", "amount": 500 },
      { "fluid": "minecraft:water", "amount": 1000 }
    ],
    "processingTime": 300,
    "results": [
      { "fluid": "vintageimprovements:sulfuric_acid", "amount": 500 },
      { "fluid": "kubejs:muriatic_acid", "amount": 1000 }
    ]
  }).id('dut_create:sulfuric_muriatic_acid')
  //硫酸热解
  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [{ "fluid": "vintageimprovements:sulfuric_acid", "amount": 250 }],
    "heatRequirement": "superheated",
    "processingTime": 800,
    "results": [
      { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 250 },
      { "fluid": "kubejs:oxygen", "amount": 250 },
      { "fluid": "kubejs:hydrogen", "amount": 500 }
    ]
  }).id('dut_create:sulfuric_acid_cracking_distillation')
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