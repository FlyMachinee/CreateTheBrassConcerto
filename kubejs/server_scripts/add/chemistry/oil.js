ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //汽油裂解
  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [{ "fluidTag": "forge:gasoline", "amount": 400 }],
    "heatRequirement": "heated",
    "processingTime": 100,
    "results": [
      { "fluid": "kubejs:natural_gas", "amount": 800 }
    ]
  }).id('dut_create:gasoline_split')
  //柴油裂化
  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [{ "fluidTag": "forge:diesel", "amount": 200 }],
    "heatRequirement": "heated",
    "processingTime": 100,
    "results": [
      { "fluid": "createdieselgenerators:gasoline", "amount": 300 },
      { "fluid": "kubejs:natural_gas", "amount": 200 }
    ]
  }).id('dut_create:diesel_split')
  event.remove({ id: "createdieselgenerators:distillation/crude_oil" })
  //石油分馏
  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [{ "fluidTag": "forge:crude_oil", "amount": 300 }],
    "heatRequirement": "heated",
    "processingTime": 100,
    "results": [
      { "fluid": "createdieselgenerators:diesel", "amount": 100 },
      { "fluid": "minecraft:water", "amount": 50 },
      { "fluid": "createdieselgenerators:gasoline", "amount": 100 },
      { "fluid": "kubejs:natural_gas", "amount": 100 }
    ]
  }).id('dut_create:oil_distillation')
})
//高级分馏
ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //汽油裂解
  event.custom({
    "type": "createloveandwar:fractional_distillation",
    "ingredients": [
      { "fluidTag": "forge:gasoline", "amount": 800 }
    ],
    "heatRequirement": "superheated",
    "processingTime": 50,
    "results": [
      { "fluid": "kubejs:natural_gas", "amount": 1600 }
    ]
  }).id('dut_create:advanced_distillation/gasoline')
  //柴油裂化
  event.custom({
    "type": "createloveandwar:fractional_distillation",
    "ingredients": [
      { "fluidTag": "forge:diesel", "amount": 600 }
    ],
    "heatRequirement": "superheated",
    "processingTime": 50,
    "results": [
      { "fluid": "createdieselgenerators:gasoline", "amount": 800 },
      { "fluid": "kubejs:natural_gas", "amount": 800 }
    ]
  }).id('dut_create:advanced_distillation/diesel')
  //石油
  event.custom({
    "type": "createloveandwar:fractional_distillation",
    "ingredients": [
      { "fluidTag": "forge:crude_oil", "amount": 1200 }
    ],
    "heatRequirement": "superheated",
    "processingTime": 50,
    "results": [
      { "fluid": "createloveandwar:bitumen_fluid", "amount": 200 },
      { "fluid": "createdieselgenerators:diesel", "amount": 400 },
      { "fluid": "createdieselgenerators:gasoline", "amount": 400 },
      { "fluid": "kubejs:natural_gas", "amount": 400 }
    ]
  }).id('dut_create:advanced_distillation/oil')
})