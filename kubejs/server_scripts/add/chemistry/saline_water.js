ServerEvents.recipes(event => {
  //酸碱中和
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "fluid": "kubejs:muriatic_acid", "amount": 250 },
      { "fluid": "kubejs:caustic_soda", "amount": 250 },
    ],
    "results": [
      { "fluid": "kubejs:saline_water", "amount": 250 }
    ]
  }).id('dut_create:saline_water_mixing')
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "fluid": "kubejs:nitric_acid", "amount": 250 },
      { "fluid": "kubejs:caustic_soda", "amount": 250 },
    ],
    "results": [
      { "fluid": "kubejs:saline_water", "amount": 250 }
    ]
  }).id('dut_create:saline_water_mixing_2')
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "fluid": "vintageimprovements:sulfuric_acid", "amount": 125 },
      { "fluid": "kubejs:caustic_soda", "amount": 250 },
    ],
    "results": [
      { "fluid": "kubejs:saline_water", "amount": 250 }
    ]
  }).id('dut_create:saline_water_mixing_3')
  //电解食盐水
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidOutput": 2,
    "ingredients": [
      { "fluid": "kubejs:saline_water", "amount": 500 },
      { "item": "kubejs:electrolyzer" }
    ],
    "results": [
      { "fluid": "kubejs:caustic_soda", "amount": 250 },
      { "fluid": "kubejs:hydrogen", "amount": 125 },
      { "fluid": "kubejs:chlorine", "amount": 125 },
      { "item": "kubejs:uncharged_electrolyzer" }
    ],
    "processingTime": 50
  }).id('dut_create:saline_water_electrolysis')
  //煮盐
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
      { "fluid": "kubejs:saline_water", "amount": 1000 }
    ],
    "results": [
      { "item": "kubejs:salt", "count": 4 }
    ]
  }).id('dut_create:saline_water_heated')
  //离心取盐
  event.custom({
    "type": "vintageimprovements:centrifugation",
    "ingredients": [
      { "fluid": "kubejs:saline_water", "amount": 500 }
    ],
    "results": [
      { "item": "kubejs:salt", "count": 2 },
      { "fluid": "minecraft:water", "amount": 500 }
    ],
    "processingTime": 70
  }).id('dut_create:saline_water_centrifugation')
  //盐溶解
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "fluid": "minecraft:water", "amount": 1000 },
      { "item": "kubejs:salt" },
      { "item": "kubejs:salt" },
      { "item": "kubejs:salt" },
      { "item": "kubejs:salt" }
    ],
    "results": [{ "fluid": "kubejs:saline_water", "amount": 1000 }]
  }).id('dut_create:saline_water_from_salt')
})