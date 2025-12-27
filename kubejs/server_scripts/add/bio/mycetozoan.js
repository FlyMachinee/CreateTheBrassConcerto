ServerEvents.recipes(event => {
  //-粘菌回收
  event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "ingredients": [
      { "item": "kubejs:mycetozoan" },
      { "item": "kubejs:mycetozoan" },
      { "item": "kubejs:mycetozoan" },
      { "item": "kubejs:mycetozoan" }
    ],
    "processingTime": 600,
    "results": [
      { "item": "minecraft:slime_block"}
    ]
  }).id('dut_create:mycetozoan_recycle')
})