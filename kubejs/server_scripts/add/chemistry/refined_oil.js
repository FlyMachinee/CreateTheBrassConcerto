ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //复合钻井液
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:saline_water_bucket" },
    "results": [
      { "item": "kubejs:drilling_fluid_bucket"}
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_fluid" },
        { "amount": 250, "fluid": "kubejs:caustic_soda"}],
        "results": [{ "item": "kubejs:incomplete_fluid" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_fluid" },
        { "amount": 50, "fluid": "kubejs:nitric_acid"}],
        "results": [{ "item": "kubejs:incomplete_fluid" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_fluid" },
        { "amount": 250, "fluid": "kubejs:carbon_dioxide"}],
        "results": [{ "item": "kubejs:incomplete_fluid" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_fluid" },
        { "amount": 100, "fluid": "create_enchantment_industry:experience"}],
        "results": [{ "item": "kubejs:incomplete_fluid" }]
      },
      {
        "type": "vintageimprovements:vacuumizing",
        "ingredients": [{ "item": "kubejs:incomplete_fluid" }],
        "results": [{ "item": "kubejs:incomplete_fluid" }], 
        "processingTime": 20
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_fluid" }
  }).id("dut_create:drilling_fluid")
  //精炼石油分馏
  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [{ "fluid": "kubejs:refined_oil", "amount": 150 }],
    "heatRequirement": "heated",
    "processingTime": 180,
    "results": [
      { "fluid": "kubejs:lube_oil", "amount": 75 },
      { "fluid": "createdieselgenerators:diesel", "amount": 100 },
      { "fluid": "createdieselgenerators:gasoline", "amount": 100 },
      { "fluid": "kubejs:ethylene", "amount": 100 }
    ]
  }).id('dut_create:refined_oil_distillation')
  //高级分馏
  event.custom({
    "type": "createloveandwar:fractional_distillation",
    "ingredients": [
      { "fluid": "kubejs:refined_oil", "amount": 1350 }
    ],
    "heatRequirement": "superheated",
    "processingTime": 180,
    "results": [
      { "fluid": "kubejs:lube_oil", "amount": 675 },
      { "fluid": "createdieselgenerators:diesel", "amount": 900 },
      { "fluid": "createdieselgenerators:gasoline", "amount": 900 },
      { "fluid": "kubejs:ethylene", "amount": 900 }
    ]
  }).id('dut_create:advanced_distillation/refined_oil')
})