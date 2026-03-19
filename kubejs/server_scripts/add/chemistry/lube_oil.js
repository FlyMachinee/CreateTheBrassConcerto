ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //润滑油制作
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "ingredients": [
      { "fluid": "createdieselgenerators:diesel", "amount": 500 },
      { "fluidTag": "dut_create:make_lube", "amount": 500 }
    ],
    "results": [
      { "fluid": "kubejs:lube_oil", "amount": 200 }
    ],
    "processingTime": 60
  }).id('dut_create:lube_from_oil')
  //除杂润滑油
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "ingredients": [
      { "fluid": "createdieselgenerators:diesel", "amount": 500 },
      { "fluidTag": "dut_create:make_lube", "amount": 500 },
      { "item": "kubejs:blaze_mycoplasma" },
      { "item": "kubejs:blaze_mycoplasma" }
    ],
    "results": [
      { "fluid": "kubejs:lube_oil", "amount": 500 }
    ],
    "processingTime": 40
  }).id('dut_create:blaze_mycoplasma/lube_from_oil_with_so2')
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "ingredients": [
      { "fluid": "kubejs:refined_oil", "amount": 250 },
      { "fluidTag": "dut_create:make_lube", "amount": 250 },
      { "item": "kubejs:blaze_mycoplasma" },
      { "item": "kubejs:blaze_mycoplasma" }
    ],
    "results": [
      { "fluid": "kubejs:lube_oil", "amount": 500 }
    ],
    "processingTime": 40
  }).id('dut_create:blaze_mycoplasma/lube_from_refined_oil_with_so2')
})
