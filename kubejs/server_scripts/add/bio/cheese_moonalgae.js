ServerEvents.recipes(event => {
  //奶酪发酵
  event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "ingredients": [
      { "fluid": "minecraft:milk", "amount": 1000 },
      {"tag":"dut_create:moon_solid"},
      { "item": "kubejs:cheese_moonalgae" },
      { "item": "kubejs:salt" },
      { "item": "kubejs:salt" }
    ],
    "processingTime": 240,
    "results": [
      { "item": "ad_astra:cheese","count":2 },
      { "item": "ad_astra:cheese","chance":0.5 },
      { "item": "kubejs:cheese_moonalgae", "chance": 0.55 },
      { "item": "kubejs:cheese_moonalgae", "chance": 0.5 }
    ]
  }).id('dut_create:ferment_cheese')
})