ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //压板
  event.custom({
    "type": "create:pressing",
    "ingredients": [ {"tag": "forge:ingots/aluminum"}],
    "results": [ {"item": "kubejs:aluminum_sheet"}]
  }).id("dut_create:aluminum/get_sheet")

  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [{"tag": "forge:storage_blocks/aluminum"}],
    "result": {"item": "kubejs:aluminum_ingot","count": 9}
  }).id("dut_create:aluminum/block_to_ingot")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "key": {"#": {"tag": "forge:ingots/aluminum"}},
    "result": {"item": "kubejs:aluminum_block"}
  }).id("dut_create:aluminum/ingot_to_block")
  //
  //event.custom().id("dut_create:aluminum/")
})
