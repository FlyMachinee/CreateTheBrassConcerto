ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom())
  event.remove({id:"create:mechanical_crafting/ascended_flight_ring"})
  event.remove({id:"balancedflight:sequenced_assembly/flight_anchor"})

  event.shapeless("balancedflight:ascended_flight_ring", [Item.of("kubejs:tin_hard_disk", { Damage: 0 }).weakNBT(),"create:sturdy_sheet","minecraft:poppy",'create:goggles']).id("dut_create:ascended_flight_ring")
})