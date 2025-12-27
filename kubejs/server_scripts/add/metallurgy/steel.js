ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //钢水
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "heatRequirement": "superheated",
    "ingredients": [
      { "fluid": "kubejs:incomplete_steel", "amount": 500 },
      { "amount": 500, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:awkward" } },
    ],
    "results": [
      { "fluid": "createbigcannons:molten_steel", "amount": 250 }
    ],
    "processingTime": 300
  }).id('dut_create:steel/molten_steel1')
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluid": "kubejs:incomplete_steel", "amount": 500 },
      { "amount": 500, "fluid": "kubejs:ammonia" },
    ],
    "results": [
      { "fluid": "createbigcannons:molten_steel", "amount": 250 }
    ],
    "processingTime": 200
  }).id('dut_create:steel/molten_steel')
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluid": "kubejs:incomplete_steel", "amount": 500 },
      {  "item": "kubejs:aluminum_slag"},
      {  "item": "kubejs:aluminum_slag"},
      {  "item": "kubejs:aluminum_slag"},
    ],
    "results": [
      { "fluid": "createbigcannons:molten_steel", "amount": 400 }
    ],
    "processingTime": 200
  }).id('dut_create:steel/molten_steel_aluminum')
  //event.custom().id("dut_create:steel/")
})
