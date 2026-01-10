ServerEvents.recipes(event => {
  //氯气漂白-染料
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "tag": "forge:dyes" },
      { "fluid": "kubejs:chlorine", "amount": 50 },
    ],
    "results": [
      { "item": "minecraft:white_dye" }
    ]
  }).id('dut_create:chlorine_bleach_dye')
  //氯气漂白-羊毛
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "tag": "minecraft:wool" },
      { "fluid": "kubejs:chlorine", "amount": 50 },
    ],
    "results": []
  }).id('dut_create:chlorine_bleach_wool')
  //氯气漂白-旗帜
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "tag": "minecraft:banners" },
      { "fluid": "kubejs:chlorine", "amount": 50 },
    ],
    "results": [{ "item": "minecraft:stick"}]
  }).id('dut_create:chlorine_bleach_banners')

  //氯气还原
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluid": "minecraft:water", "amount": 500 },
      { "fluid": "kubejs:chlorine", "amount": 500 },
    ],
    "results": [
      { "fluid": "kubejs:muriatic_acid", "amount": 500 },
      { "fluid": "kubejs:oxygen", "amount": 250 }
    ],
    "processingTime": 15
  }).id('dut_create:chlorine_reduction')
  //电解盐酸
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidOutput": 0,
    "ingredients": [
      { "fluid": "kubejs:muriatic_acid", "amount": 500 },
      { "item": "kubejs:electrolyzer" }
    ],
    "results": [
      { "fluid": "kubejs:hydrogen", "amount": 125 },
      { "fluid": "kubejs:chlorine", "amount": 125 },
      { "item": "kubejs:uncharged_electrolyzer" }
    ],
    "processingTime": 45
  }).id('dut_create:muriatic_acid_electrolysis')
})