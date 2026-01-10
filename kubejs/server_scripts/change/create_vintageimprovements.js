ServerEvents.recipes(event => {
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom()
  //event.remove({input:'',not:{mod:'kubejs'}})
  event.remove({ id:"vintageimprovements:milling/sulfur" })
  event.remove({ id:"vintageimprovements:craft/sulfur_nuggets_to_item" })
  event.remove({ id:"vintageimprovements:craft/sulfur_items_to_block" })
  event.remove({ id:"vintageimprovements:craft/sulfur_item_to_nuggets" })
  event.remove({ id:"vintageimprovements:craft/sulfur_block_to_items" })
  event.remove({ id:"vintageimprovements:coiling/electrum_rod" })
  event.remove({ id:"vintageimprovements:coiling/electrum_wire" })
  //板
  event.remove({ type:"vintageimprovements:hammering" })
  event.remove({ type:"vintageimprovements:auto_smithing"})
  event.remove({ type:"vintageimprovements:auto_upgrade"})
  event.remove({ id: "vintageimprovements:craft/helve_hammer_slot_cover" })
  event.remove({ id: "vintageimprovements:mechanical_crafting/helve_hammer" })
  event.remove({ id: "vintageimprovements:pressing/andesite_alloy" })
  event.remove({ id: "vintageimprovements:pressing/aluminum_ingot" })
  event.remove({ id: "vintageimprovements:pressing/amethyst_bronze_ingot" })
  event.remove({ id: "vintageimprovements:pressing/bronze_ingot" })
  event.remove({ id: "vintageimprovements:pressing/cast_iron_ingot" })
  event.remove({ id: "vintageimprovements:pressing/tin_ingot" })
  event.remove({ id: "vintageimprovements:pressing/vanadium_ingot" })
  //event.remove({id:"vintageimprovements:pressing"})
  event.remove({ output: "minecraft:netherite_upgrade_smithing_template", not: { mod: "kubejs" } })
  //
  event.remove({id: 'vintageimprovements:craft/spring_coiling_machine_wheel' })
  event.remove({id: 'vintageimprovements:craft/spring_coiling_machine' })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": { "tag": "forge:storage_blocks/iron" },
      "B": { "tag": "forge:ingots/iron" },
      "C": { "item": "kubejs:mechanical_core" },
      "D": { "item": "kubejs:bearing" }
    },
    "pattern": [
      "B  ",
      "ACD",
      "B  "
    ],
    "result": { "item": "vintageimprovements:spring_coiling_machine"},
    "show_notification": true
  }).id("dut_create:spring_coiling_machine")
  event.replaceInput({ input: 'create:shaft', id: 'vintageimprovements:craft/centrifuge' }, 'create:shaft', 'kubejs:bearing')
  event.replaceInput({ input: 'create:shaft', id: 'vintageimprovements:mechanical_crafting/helve_hammer' }, 'create:shaft', 'kubejs:bearing')
  event.replaceInput({ input: 'create:shaft', id: 'vintageimprovements:mechanical_crafting/lathe' }, 'create:shaft', 'kubejs:bearing')
  //模板冲压
  event.custom({
    "type": "vintageimprovements:curving",
    "itemAsHead": "minecraft:netherite_upgrade_smithing_template",
    "ingredients": [
      { "item": "minecraft:netherite_scrap" }
    ],
    "results": [
      { "item": "minecraft:netherite_upgrade_smithing_template" }
    ]
  }).id("dut_create:smithing_template")
  event.remove({ id: "vintageimprovements:pressurizing/copper_sulfate" })
  //红石组件
  event.remove({id:"vintageimprovements:sequenced_assembly/redstone_module"})
  
})