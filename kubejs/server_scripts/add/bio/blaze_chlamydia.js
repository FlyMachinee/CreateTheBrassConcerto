ServerEvents.recipes(event => {
  //增殖
    event.custom({
      "type": "create:sequenced_assembly",
      "ingredient": { "item": "kubejs:blaze_chlamydia" },
      "results": [
        { "item": "kubejs:blaze_chlamydia", "count": 2 },
      ],
      "loops": 1,
      "sequence": [
        {
          "type": "create:filling",
          "ingredients": [{ "item": "kubejs:blaze_chlamydia" },
          { "amount": 1000, "fluidTag": "dut_create:superheated_fuel" }],
          "results": [{ "item": "kubejs:blaze_chlamydia" }]
        },
        {
          "type": "create:filling",
          "ingredients": [{ "item": "kubejs:blaze_chlamydia" },
          { "amount": 250, "fluid": "kubejs:nitric_acid" }],
          "results": [{ "item": "kubejs:blaze_chlamydia" }]
        }
      ],
      "transitionalItem": { "item": "kubejs:blaze_chlamydia" }
    }).id("dut_create:blaze_chlamydia")
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
      { "item": "kubejs:blaze_chlamydia"}
    ],
    "results": [
      { "item": "kubejs:graphene_coil", "count": 4 }
    ],
    "processingTime": 200
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
      { "item": "kubejs:blaze_chlamydia" }
    ],
    "results": [
      { "item": "kubejs:carborundum", "count": 4 },
      { "fluid": "kubejs:carbon_dioxide", "amount": 250 }
    ],
    "processingTime": 200
  }).id('dut_create:blaze_chlamydia/carborundum')
  //过热蒸汽
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidOutput": 0,
    "ingredients": [
      { "fluid": "minecraft:water", "amount": 1000 },
      { "item": "kubejs:blaze_chlamydia" },
      { "item": "kubejs:carborundum"}
    ],
    "results": [
      { "fluid": "kubejs:superheated_steam", "amount": 500 },
      { "item": "kubejs:carborundum"}
    ],
    "processingTime": 400
  }).id('dut_create:blaze_chlamydia/superheated_steam_with_carborundum')
  //合成天然气
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluidTag": "forge:hydrogen", "amount": 1000 },
      { "item": "kubejs:crushed_coal" },
      { "item": "kubejs:crushed_coal" },
      { "item": "kubejs:blaze_chlamydia" }
    ],
    "results": [
      { "fluid": "kubejs:natural_gas", "amount": 500 }
    ],
    "processingTime": 300
  }).id('dut_create:blaze_chlamydia/natural_gas_from_coal')
  //纤维布
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "ingredients": [
      { "item": "kubejs:graphene_coil" },
      { "item": "kubejs:graphene_coil" },
      { "item": "kubejs:graphene_coil" },
      { "item": "kubejs:graphene_coil" },
      { "amount": 250, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:thick" } },
      { "item": "kubejs:blaze_chlamydia" }
    ],
    "results": [
      { "item": "kubejs:fiber_fabric", "count": 3 }
    ],
    "processingTime": 200
  }).id('dut_create:fiber_fabric')
  //末影之眼
  event.remove({ output: "minecraft:ender_eye"})
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "ingredients": [
      { "item": "minecraft:ender_pearl" },
      { "item": "kubejs:blaze_chlamydia" }
    ],
    "results": [{ "item": "minecraft:ender_eye" }],
    "processingTime": 600
  }).id("dut_create:ender_eye")
})