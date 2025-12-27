ServerEvents.recipes(event => {
  function coinMix(coin2,coin1){
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": coin1 },
      { "item": coin1 },
      { "item": coin1 },
      { "item": coin1 },
      { "item": coin1 },
      { "item": coin1 },
      { "item": coin1 },
      { "item": coin1 },
      { "item": coin1 },
      { "item": coin1 }
    ],
    "results": [
      { "item": coin2 }
    ]
  }).id("dut_create:coin/"+coin1.split(":")[1]+"_to_"+coin2.split(":")[1])
  }
  coinMix('kubejs:coin_netherite', 'kubejs:coin_emerald')
  coinMix('kubejs:coin_emerald', 'kubejs:coin_diamond')
  coinMix('kubejs:coin_diamond', 'kubejs:coin_gold')
  coinMix('kubejs:coin_gold', 'kubejs:coin_iron')
  coinMix('kubejs:coin_iron', 'kubejs:coin_copper')
  
})