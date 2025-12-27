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
            { "fluidTag": "forge:diesel", "amount": 300 },
            { "fluidTag": "forge:hydrogen", "amount": 1000 }
        ],
        "results": [
            { "fluid": "kubejs:lube_oil", "amount": 100 }
        ],
        "processingTime": 800
    }).id('dut_create:lube_from_oil')
    //除杂润滑油
    event.custom({
      "type": "vintageimprovements:pressurizing",
      "secondaryFluidInput": 2,
      "ingredients": [
        { "fluidTag": "forge:diesel", "amount": 250 },
        { "fluidTag": "forge:hydrogen", "amount": 500 },
        { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 500 },
        { "item": "kubejs:blaze_mycoplasma" },
        { "item": "kubejs:blaze_mycoplasma" }
      ],
      "results": [
        { "fluid": "kubejs:lube_oil", "amount": 250 }
      ],
      "processingTime": 200
    }).id('dut_create:blaze_mycoplasma/lube_from_oil_with_so2')
    event.custom({
      "type": "vintageimprovements:pressurizing",
      "secondaryFluidInput": 2,
      "ingredients": [
        { "fluid": "kubejs:refined_oil", "amount": 250 },
        { "fluidTag": "forge:hydrogen", "amount": 500 },
        { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 500 },
        { "item": "kubejs:blaze_mycoplasma" },
        { "item": "kubejs:blaze_mycoplasma" }
      ],
      "results": [
        { "fluid": "kubejs:lube_oil", "amount": 500 }
      ],
      "processingTime": 150
    }).id('dut_create:blaze_mycoplasma/lube_from_refined_oil_with_so2')
})
