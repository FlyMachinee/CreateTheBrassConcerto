// requires:gourmet
ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom()
  event.remove({ id: "gourmet:seed_oil"})
  event.remove({ id: "gourmet:seed_oil_from_pumpkin"})
  event.remove({ id: "gourmet:seed_oil_from_beetroot"})
  event.remove({ id: "gourmet:seed_oil_from_melon"})
  event.remove({ output: "gourmet:ice_cube", not: { mod: 'kubejs' } })
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      {"item": "minecraft:ice"}
    ],
    "results": [
      {"item": "gourmet:ice_cube","count":4}
    ]
  }).id("dut_create:ice_cube")
  event.remove({ output: "gourmet:raw_potato_fry", not: { mod: 'kubejs' } })
  event.remove({ output: "gourmet:cooked_fries", not: { mod: 'kubejs' } })
  event.replaceInput({ input: 'gourmet:cooked_bacon' },'gourmet:cooked_bacon','#forge:cooked_bacon')
  event.replaceInput({ input: 'gourmet:ground_beef' },'gourmet:ground_beef','#forge:ground_beef')
  event.replaceInput({ input: 'gourmet:beef_patty' },'gourmet:beef_patty','#forge:beef_patty')
  event.replaceInput({ input: 'gourmet:cooked_fries' },'gourmet:cooked_fries','kubejs:large_fries')
})