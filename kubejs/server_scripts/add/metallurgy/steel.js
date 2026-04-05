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
    "heatRequirement": "heated",
    "ingredients": [
      { "fluid": "kubejs:incomplete_steel", "amount": 4*IngotFluid },
      { "amount": 250, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:awkward" } },
    ],
    "results": [
      { "fluid": "createbigcannons:molten_steel", "amount": 2*IngotFluid }
    ],
    "processingTime": 30
  }).id('dut_create:steel/molten_steel')
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluid": "kubejs:incomplete_steel", "amount": 4*IngotFluid },
      {  "item": "kubejs:aluminum_slag"}
    ],
    "results": [
      { "fluid": "createbigcannons:molten_steel", "amount": 3*IngotFluid }
    ],
    "processingTime": 30
  }).id('dut_create:steel/molten_steel_aluminum')
  //event.custom().id("dut_create:steel/")
})
