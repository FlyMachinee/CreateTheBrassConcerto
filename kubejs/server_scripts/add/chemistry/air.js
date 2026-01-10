ServerEvents.recipes(event => {
  //空气分馏
  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [{ "fluid": "kubejs:air_fluid", "amount": 1000 }],
    "processingTime": 180,
    "heatRequirement": "heated",
    "results": [
      { "fluid": "kubejs:oxygen", "amount": 200 },
      { "fluid": "kubejs:nitrogen", "amount": 800 }
    ]
  }).id('dut_create:air_distillation')
  //高级分馏
  event.custom({
    "type": "createloveandwar:fractional_distillation",
    "ingredients": [{ "fluid": "kubejs:air_fluid", "amount": 2000 }],
    "heatRequirement": "superheated",
    "processingTime": 120,
    "results": [
      { "fluid": "kubejs:oxygen", "amount": 400 },
      { "fluid": "kubejs:nitrogen", "amount": 1600 }
    ]
  }).id('dut_create:advanced_distillation/air')
  //下界空气分馏
  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [{ "fluid": "kubejs:nether_air_fluid", "amount": 2000 }],
    "processingTime": 900,
    "heatRequirement": "heated",
    "results": [
      { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 500 },
      { "fluid": "kubejs:nitrogen_dioxide", "amount": 250 },
      { "fluid": "vintageimprovements:sulfur_trioxide", "amount": 250 },
      { "fluid": "kubejs:oxygen", "amount": 200 },
      { "fluid": "kubejs:nitrogen", "amount": 800 }
    ]
  }).id('dut_create:nether_air_distillation')
  //高级分馏
  event.custom({
    "type": "createloveandwar:fractional_distillation",
    "ingredients": [{ "fluid": "kubejs:nether_air_fluid", "amount": 2000 }],
    "heatRequirement": "superheated",
    "processingTime": 360,
    "results": [
      { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 300 },
      { "fluid": "kubejs:nitrogen_dioxide", "amount": 300 },
      { "fluid": "vintageimprovements:sulfur_trioxide", "amount": 500 },
      { "fluid": "kubejs:oxygen", "amount": 500 },
      { "fluid": "kubejs:nitrogen", "amount": 400 }
    ]
  }).id('dut_create:advanced_distillation/nether_air')
  //末地空气分馏
  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [{ "fluid": "kubejs:end_air_fluid", "amount": 1000 }],
    "processingTime": 450,
    "heatRequirement": "heated",
    "results": [
      { "fluid": "kubejs:nitrogen_dioxide", "amount": 210 },
      { "fluid": "kubejs:chlorine", "amount": 210 },
      { "fluid": "kubejs:oxygen", "amount": 175 },
      { "fluid": "kubejs:nitrogen", "amount": 400 }
    ]
  }).id('dut_create:end_air_distillation')
  //高级分馏
  event.custom({
    "type": "createloveandwar:fractional_distillation",
    "ingredients": [{ "fluid": "kubejs:end_air_fluid", "amount": 2000 }],
    "heatRequirement": "superheated",
    "processingTime": 450,
    "results": [
      { "fluid": "kubejs:nitrogen_dioxide", "amount": 420 },
      { "fluid": "kubejs:chlorine", "amount": 420 },
      { "fluid": "kubejs:oxygen", "amount": 350 },
      { "fluid": "kubejs:nitrogen", "amount": 800 }
    ]
  }).id('dut_create:advanced_distillation/end_air')
  event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "ingredients": [
      { "fluid": "kubejs:end_air_fluid", "amount": 1000 }
    ],
    "processingTime": 80,
    "heatRequirement": "superheated",
    "results": [
      { "item": "minecraft:dragon_breath", "chance": 0.05 }
    ]
  }).id('dut_create:dragon_breath')
})