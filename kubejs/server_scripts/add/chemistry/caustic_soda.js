ServerEvents.recipes(event => {
  //吸收氯气
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidOutput": 2,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluid": "kubejs:caustic_soda", "amount": 500 },
      { "fluid": "kubejs:chlorine", "amount": 500 }
    ],
    "results": [
      { "fluid": "kubejs:muriatic_acid", "amount": 500 },
      { "fluid": "kubejs:saline_water", "amount": 500 },
      { "fluid": "kubejs:oxygen", "amount": 250 }
    ],
    "processingTime": 25
  }).id('dut_create:remove_chlorine')
})