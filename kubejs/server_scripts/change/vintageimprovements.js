ServerEvents.recipes(event => {
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom()
  //event.remove({input:'',not:{mod:'kubejs'}})
  event.remove({ id: "vintageimprovements:milling/sulfur" })
  event.remove({ id: "vintageimprovements:craft/sulfur_nuggets_to_item" })
  event.remove({ id: "vintageimprovements:craft/sulfur_items_to_block" })
  event.remove({ id: "vintageimprovements:craft/sulfur_item_to_nuggets" })
  event.remove({ id: "vintageimprovements:craft/sulfur_block_to_items" })
  event.remove({ id: "vintageimprovements:coiling/electrum_rod" })
  event.remove({ id: "vintageimprovements:coiling/electrum_wire" })
  //板
  event.remove({ type: "vintageimprovements:hammering" })
  event.remove({ type: "vintageimprovements:auto_smithing" })
  event.remove({ type: "vintageimprovements:auto_upgrade" })
  event.remove({ type: "vintageimprovements:coiling" })
  event.remove({ id: "vintageimprovements:craft/helve_hammer_slot_cover" })
  event.remove({ id: "vintageimprovements:mechanical_crafting/helve_hammer" })
  event.remove({ id: "vintageimprovements:pressing/andesite_alloy" })
  event.remove({ id: "vintageimprovements:rolling/andesite_alloy" })
  event.remove({ id: "vintageimprovements:rolling/andesite_plate" })
  event.remove({ id: "vintageimprovements:coiling/andesite_rod" })
  event.remove({ id: "vintageimprovements:coiling/andesite_wire" })
  event.remove({ id: "vintageimprovements:pressing/aluminum_ingot" })
  event.remove({ id: "vintageimprovements:pressing/tin_ingot" })
  event.remove({ id: "vintageimprovements:coiling/refined_radiance_rod" })
  event.remove({ id: "vintageimprovements:coiling/refined_radiance_wire" })
  event.remove({ id: "vintageimprovements:pressing/refined_radiance" })
  event.remove({ id: "vintageimprovements:rolling/refined_radiance" })
  event.remove({ id: "vintageimprovements:rolling/refined_radiance_plate" })
  event.remove({ id: "vintageimprovements:rolling/electrum_ingot" })
  event.remove({ id: "vintageimprovements:rolling/electrum_plate" })
  function removeMaterial(material) {
    event.remove({ id: "vintageimprovements:pressing/" + material + "_ingot" })
    event.remove({ id: "vintageimprovements:rolling/" + material + "_ingot" })
    event.remove({ id: "vintageimprovements:rolling/" + material + "_plate" })
  }
  function removeMaterial1(material) {
    event.remove({ id: "vintageimprovements:pressing/" + material })
    event.remove({ id: "vintageimprovements:rolling/" + material })
    event.remove({ id: "vintageimprovements:rolling/" + material + "_plate" })
  }
  removeMaterial("vanadium")
  removeMaterial("amethyst_bronze")
  removeMaterial("cast_iron")
  removeMaterial("pure_gold")
  removeMaterial("netherite")
  removeMaterial("nethersteel")
  removeMaterial("bronze")
  removeMaterial("cobalt")
  removeMaterial("manyullyn")
  removeMaterial("palladium")
  removeMaterial("hepatizon")
  removeMaterial("constantan")
  removeMaterial("rose_gold")
  removeMaterial("uranium")
  removeMaterial("rhodium")
  removeMaterial1("shadow_steel")
  removeMaterial("nickel")
  removeMaterial("platinum")
  removeMaterial("signalum")
  removeMaterial("lumium")
  removeMaterial("lead")
  removeMaterial("silver")
  removeMaterial("pig_iron")
  removeMaterial("enderium")
  removeMaterial("osmium")
  removeMaterial("ostrum")
  removeMaterial("calorite")
  removeMaterial("refined_glowstone")
  removeMaterial("refined_obsidian")
  removeMaterial("invar")
  removeMaterial("blaze")
  Coil('ad_astra:iron_rod', 'vintageimprovements:iron_spring', 60)
  Coil('createaddition:iron_wire', 'vintageimprovements:small_iron_spring', 30)
  Coil('ad_astra:steel_rod', 'vintageimprovements:steel_spring', 60)
  Coil('vintageimprovements:steel_wire', 'vintageimprovements:small_steel_spring', 30)
  Coil('createaddition:brass_rod', 'vintageimprovements:brass_spring', 60)
  Coil('vintageimprovements:brass_wire', 'vintageimprovements:small_brass_spring', 30)
  function Coil(input, output, time) {
    event.custom({
      "type": "vintageimprovements:coiling",
      "processingTime": time,
      "ingredients": [{ "item": input }],
      "results": [{ "item": output }]
    }).id("dut_create:coiling/" + input.split(":")[1])
  }
  //event.remove({id:"vintageimprovements:pressing"})
  event.remove({ output: "minecraft:netherite_upgrade_smithing_template", not: { mod: "kubejs" } })
  //
  event.remove({ id: 'vintageimprovements:craft/spring_coiling_machine_wheel' })
  event.remove({ id: 'vintageimprovements:craft/spring_coiling_machine' })
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
    "result": { "item": "vintageimprovements:spring_coiling_machine" },
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
  event.remove({ id: "vintageimprovements:sequenced_assembly/redstone_module" })

})