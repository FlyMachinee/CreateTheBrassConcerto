ServerEvents.recipes(event => {
  //归中反应
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "kubejs:nitrogen_dioxide", "amount": 300 },
      { "fluid": "kubejs:ammonia", "amount": 400 },
      { "item": "kubejs:salt" }
    ],
    "results": [
      { "fluid": "kubejs:nitrogen", "amount": 350 },
      { "fluid": "kubejs:saline_water", "amount": 600 }
    ],
    "processingTime": 40
  }).id('dut_create:comproportionation_nitrogen')
  //硝酸
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "ingredients": [
      { "fluidTag": "forge:oxygen", "amount": 500 },
      { "fluid": "kubejs:ammonia", "amount": 250 },
      { "item": "kubejs:electrolyzer" }
    ],
    "results": [
      { "fluid": "kubejs:nitric_acid", "amount": 125 },
      { "fluid": "kubejs:nitrogen_dioxide", "amount": 125 },
      { "item": "kubejs:uncharged_electrolyzer"}
    ],
    "processingTime": 40
  }).id('dut_create:nitric_acid_from_ammonia')
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "ingredients": [
      { "fluid": "kubejs:nitrogen_dioxide", "amount": 500 },
      { "amount": 250, "fluid": "minecraft:water" }
    ],
    "results": [
      { "fluid": "kubejs:nitric_acid", "amount": 250 }
    ],
    "processingTime": 50
  }).id('dut_create:nitric_acid_from_nitrogen_dioxide')
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "heatRequirement": "superheated",
    "ingredients": [
      { "fluidTag": "forge:oxygen", "amount": 125 },
      { "fluid": "kubejs:nitrogen_dioxide", "amount": 500 },
      { "amount": 250, "fluid": "minecraft:water" }
    ],
    "results": [
      { "fluid": "kubejs:nitric_acid", "amount": 500 }
    ],
    "processingTime": 50
  }).id('dut_create:nitric_acid_from_nitrogen_dioxide_better')
  //二氧化氮
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluidTag": "forge:oxygen", "amount": 250 },
      { "fluid": "kubejs:nitrogen", "amount": 125 },
      { "item": "kubejs:electrolyzer" }
    ],
    "results": [
      { "fluid": "kubejs:nitrogen_dioxide", "amount": 125 },
      { "item": "kubejs:uncharged_electrolyzer"}
    ],
    "processingTime": 25
  }).id('dut_create:nitrogen_dioxide_crafted')
  //氮肥制树木肥料
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "minecraft:bone_meal" },
      { "amount": 50, "fluid": "kubejs:nitrogen_fertilizer" }
    ],
    "results": [
      { "item": "create:tree_fertilizer" }
    ]
  }).id("dut_create:tree_fertilizer")
  //制氮肥
  function createRecipe(a, b, c) {
    let d = "dut_create:nitrogen_fertilizer_from_" + a.split(":")[1]
    event.custom({
      "type": "vintageimprovements:pressurizing",
      "secondaryFluidInput": 1,
      "ingredients": [
        { "fluid": "kubejs:ammonia", "amount": 250 * b },
        { "fluid": a, "amount": 250 }
      ],
      "results": [
        { "fluid": "kubejs:nitrogen_fertilizer", "amount": 250 * c },
        { "fluid": "minecraft:water", "amount": 250 * b }
      ],
      "processingTime": 30
    }).id(d);
    return 0
  }
  createRecipe('kubejs:nitric_acid', 1, 2)
  createRecipe('kubejs:muriatic_acid', 1, 1)
  createRecipe('vintageimprovements:sulfuric_acid', 2, 2)
  //侯氏制碱法
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 2,
    "ingredients": [
      { "fluid": "kubejs:saline_water", "amount": 250 },
      { "fluid": "kubejs:ammonia", "amount": 250 },
      { "fluid": "kubejs:carbon_dioxide", "amount": 250 }
    ],
    "results": [
      { "fluid": "kubejs:nitrogen_fertilizer", "amount": 250 },
      { "item": "kubejs:salt"},
      { "item": "minecraft:bone_meal"}
    ],
    "processingTime": 25
  }).id('dut_create:nitrogen_fertilizer_from_carbon_dioxide')
  //合成氨
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "heatRequirement": "superheated",
    "ingredients": [
      { "fluidTag": "forge:hydrogen", "amount": 300 },
      { "fluid": "kubejs:nitrogen", "amount": 100 },
      [{ "item": "create:iron_sheet" },{ "item": "kubejs:industrial_iron_ingot" }]
    ],
    "results": [
      { "fluid": "kubejs:ammonia", "amount": 200 }
    ],
    "processingTime": 20
  }).id('dut_create:ammonia_from_nitrogen_with_iron_superheated')
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "heatRequirement": "heated",
    "ingredients": [
      { "fluidTag": "forge:hydrogen", "amount": 450 },
      { "fluid": "kubejs:nitrogen", "amount": 150 }
    ],
    "results": [
      { "fluid": "kubejs:ammonia", "amount": 200 }
    ],
    "processingTime": 80
  }).id('dut_create:ammonia_from_nitrogen')
})