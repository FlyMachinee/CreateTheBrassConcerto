ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom()
  //event.replaceInput({ output: 'create_power_loader:empty_andesite_chunk_loader' }, 'create:shaft', 'create:precision_mechanism')
  event.remove({output: 'create_power_loader:empty_brass_chunk_loader',not:{mod:'kubejs'}})
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": true,
    "key": {
      "A": { "item": "create:precision_mechanism" },
      "P": { "item": "kubejs:differential" },
      "S": { "item": "create:brass_casing" },
      "M": { "item": "create:framed_glass" }
    },
    "pattern": [
      "MMM",
      "APA",
      "SSS",
    ],
    "result": { "item": "create_power_loader:empty_brass_chunk_loader" }
  }
).id("dut_create:empty_brass_chunk_loader")
})