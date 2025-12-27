ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //种子油蒸汽液化
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "kubejs:superheated_steam", "amount": 500 },
      { "fluidTag": "dut_create:plantoil", "amount": 500 },
    ],
    "results": [
      { "fluid": "kubejs:refined_oil", "amount": 200 }
    ],
    "processingTime": 300
  }).id('dut_create:plantoil_steam_liquefaction')
  //种子油液化
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluidTag": "dut_create:plantoil", "amount": 500 },
      { "fluid": "minecraft:water", "amount": 500 }

    ],
    "results": [
      { "fluid": "createdieselgenerators:crude_oil", "amount": 250 }
    ],
    "processingTime": 300
  }).id('dut_create:plantoil_liquefaction')
  //生物质蒸汽液化
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "kubejs:superheated_steam", "amount": 400 },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" }
    ],
    "results": [
      { "fluid": "kubejs:refined_oil", "amount": 200 }
    ],
    "processingTime": 300
  }).id('dut_create:biomass_steam_liquefaction')
  //生物质液化
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluidTag": "forge:hydrogen", "amount": 300 },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "fluid": "minecraft:water", "amount": 300 }
    ],
    "processingTime": 300,
    "results": [
      { "fluid": "createdieselgenerators:crude_oil", "amount": 300 }
    ]
  }).id('dut_create:biomass_liquefaction')
  //煤蒸汽液化
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "kubejs:superheated_steam", "amount": 500 },
      { "item": "minecraft:coal" },
      { "item": "minecraft:coal" }
    ],
    "results": [
      { "fluid": "kubejs:refined_oil", "amount": 250 }
    ],
    "processingTime": 300
  }).id('dut_create:coal_steam_liquefaction')
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "kubejs:superheated_steam", "amount": 500 },
      { "item": "kubejs:crushed_coal" },
      { "item": "kubejs:crushed_coal" }
    ],
    "results": [
      { "fluid": "kubejs:refined_oil", "amount": 250 }
    ],
    "processingTime": 300
  }).id('dut_create:coal_steam_liquefaction1')
  //煤炭液化
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluidTag": "forge:hydrogen", "amount": 500 },
      { "item": "minecraft:coal" },
      { "item": "minecraft:coal" },
      { "item": "minecraft:coal" },
      { "item": "minecraft:coal" },
      { "fluid": "minecraft:water", "amount": 500 }
    ],
    "results": [
      { "fluid": "createdieselgenerators:crude_oil", "amount": 500 }
    ],
    "processingTime": 300
  }).id('dut_create:coal_liquefaction')
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluidTag": "forge:hydrogen", "amount": 500 },
      { "item": "kubejs:crushed_coal" },
      { "item": "kubejs:crushed_coal" },
      { "item": "kubejs:crushed_coal" },
      { "item": "kubejs:crushed_coal" },
      { "fluid": "minecraft:water", "amount": 500 }
    ],
    "results": [
      { "fluid": "createdieselgenerators:crude_oil", "amount": 500 }
    ],
    "processingTime": 300
  }).id('dut_create:coal_liquefaction1')
})