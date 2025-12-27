ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom().id("dut_create:")
  //event.remove({ mod: '' })
  //配方移除
  event.remove({ output: 'laserio:logic_chip' })
  event.remove({ output: 'laserio:logic_chip_raw' })
  event.remove({ output: 'laserio:laser_connector_advanced' })
  //材料替换
  event.replaceInput({ input: 'laserio:logic_chip', mod: 'laserio' }, 'laserio:logic_chip', 'kubejs:magenta_circuit_board')
  event.replaceInput({ input: '#forge:ingots/iron', mod: 'laserio' }, '#forge:ingots/iron', '#forge:plates/iron')
  event.replaceInput({ input: '#forge:ingots/gold', mod: 'laserio' }, '#forge:ingots/gold', '#forge:plates/gold')
  event.replaceInput({ input: '#forge:nuggets/gold', mod: 'laserio' }, '#forge:nuggets/gold', 'kubejs:circuit_board')
  event.replaceInput({ input: 'minecraft:quartz', mod: 'laserio' }, 'minecraft:quartz', '#forge:plates/silicon')
  event.replaceInput({ input: 'minecraft:redstone', mod: 'laserio' }, 'minecraft:redstone', 'create:polished_rose_quartz')
  event.replaceInput({ input: 'minecraft:diamond', mod: 'laserio' }, 'minecraft:diamond', 'create_connected:control_chip')
  event.replaceInput({ input: 'minecraft:paper', mod: 'laserio' }, 'minecraft:paper', 'create:clipboard')
  event.replaceInput({ input: 'minecraft:lapis_lazuli', mod: 'laserio' }, 'minecraft:lapis_lazuli', '#forge:dyes/lime')
  event.replaceInput({ input: 'minecraft:bucket', mod: 'laserio' }, 'minecraft:bucket', 'create:fluid_tank')
  event.replaceInput({ input: '#forge:storage_blocks/redstone', mod: 'laserio' }, '#forge:storage_blocks/redstone', 'kubejs:electric_gear')

  
})