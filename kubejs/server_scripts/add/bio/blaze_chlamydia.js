ServerEvents.recipes(event => {
  //增殖
  event.custom({
    "type": "create:filling",
    "ingredients": [{ "item": "kubejs:blaze_chlamydia" },
    { "amount": 500, "fluid": "kubejs:superheated_steam" }],
    "results": [{ "item": "kubejs:blaze_chlamydia", "count": 4 }]
  }).id("dut_create:blaze_chlamydia_from_steam")
  //黄铜区块加载器
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "create_power_loader:empty_brass_chunk_loader" },
      { "item": "kubejs:blaze_chlamydia" }
    ],
    "results": [{ "item": "create_power_loader:brass_chunk_loader" }]
  }).id("dut_create:blaze_chlamydia/brass_chunk_loader")
  //石墨烯-外延生长法
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "ingredients": [
      { "item": "kubejs:carborundum" },
      { "item": "kubejs:carborundum" },
      { "item": "kubejs:carborundum" },
      { "item": "kubejs:carborundum" },
      { "item": "kubejs:carborundum" },
      { "item": "kubejs:carborundum" },
      { "item": "kubejs:carborundum" },
      { "item": "kubejs:carborundum" },
      { "tag": "dut_create:shaft_furnace" }
    ],
    "results": [
      { "item": "kubejs:graphene_coil", "count": 4 }
    ],
    "processingTime": 40
  }).id('dut_create:blaze_chlamydia/graphene_coil_from_sic')
  //碳化硅
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "secondaryFluidOutput": 0,
    "ingredients": [
      { "item": "kubejs:graphite" },
      { "item": "kubejs:graphite" },
      { "item": "kubejs:silicon_plate" },
      { "item": "kubejs:silicon_plate" },
      { "tag": "dut_create:shaft_furnace" }
    ],
    "results": [
      { "item": "kubejs:carborundum", "count": 4 },
      { "fluid": "kubejs:carbon_dioxide", "amount": 250 }
    ],
    "processingTime": 30
  }).id('dut_create:blaze_chlamydia/carborundum')
  //纤维布
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "ingredients": [
      { "item": "kubejs:graphene_coil" },
      { "item": "kubejs:graphene_coil" },
      { "item": "kubejs:graphene_coil" },
      { "item": "kubejs:graphene_coil" },
      { "amount": 250, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:thick" } },
      { "tag": "dut_create:shaft_furnace" }
    ],
    "results": [
      { "item": "kubejs:fiber_fabric", "count": 3 }
    ],
    "processingTime": 30
  }).id('dut_create:fiber_fabric')
  //末影之眼
  event.remove({ output: "minecraft:ender_eye" })
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "ingredients": [
      { "item": "minecraft:ender_pearl" },
      { "item": "kubejs:blaze_chlamydia" }
    ],
    "results": [{ "item": "minecraft:ender_eye" }],
    "processingTime": 90
  }).id("dut_create:ender_eye")
})