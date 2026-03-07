ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom().id("dut_create:")
  //event.remove({ mod: '' })
  //配方移除
  event.remove({ id:"laserio:logic_chip_raw"})
  event.remove({ id:"laserio:logic_chip_raw"})
  event.remove({ id:"laserio:laser_connector_advanced"})
  event.remove({ id:"laserio:overclocker_card"})
  event.remove({ id:"laserio:overclocker_node"})
  event.remove({ id:"laserio:filter_basic"})
  
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": Item.of("kubejs:tin_hard_disk", { Damage: 0 }).weakNBT(),
      "B": { "item": "create:filter" }
    },
    "pattern": [
      "B",
      "A"
    ],
    "result": {
      "item": "laserio:filter_basic"
    },
    "show_notification": true
  }).id("dut_create:laserio/filter_basic")

  //材料替换
  event.replaceInput({ input: 'laserio:logic_chip', mod: 'laserio' }, 'laserio:logic_chip', 'kubejs:lime_circuit_board')
  event.replaceInput({ input: '#forge:nuggets/gold', mod: 'laserio' }, '#forge:nuggets/gold', 'kubejs:magenta_circuit_board')
  event.replaceInput({ input: 'minecraft:redstone', mod: 'laserio' }, 'minecraft:redstone', 'kubejs:circuit_board')
  event.replaceInput({ input: '#forge:ingots/iron', mod: 'laserio' }, '#forge:ingots/iron', '#forge:plates/industrial_iron')
  event.replaceInput({ input: '#forge:ingots/gold', mod: 'laserio' }, '#forge:ingots/gold', '#forge:plates/gold')
  event.replaceInput({ input: 'minecraft:quartz', mod: 'laserio' }, 'minecraft:quartz', 'kubejs:duraplas_sheet')
  event.replaceInput({ input: 'minecraft:paper', mod: 'laserio' }, 'minecraft:paper', 'create:clipboard')
  event.replaceInput({ input: '#forge:storage_blocks/redstone', mod: 'laserio' }, '#forge:storage_blocks/redstone', 'kubejs:efficiency_module')
  event.replaceInput({ input: 'minecraft:lapis_lazuli', mod: 'laserio' }, 'minecraft:lapis_lazuli', 'kubejs:speed_module')
  event.replaceInput({ input: 'minecraft:bucket', mod: 'laserio' }, 'minecraft:bucket', 'kubejs:productivity_module')
})