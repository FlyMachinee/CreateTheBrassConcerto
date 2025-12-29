ServerEvents.recipes(event => {
  function mycoplasmaIncrease(fluid, amount, count) {
    event.custom({
      "type": "create:filling",
      "ingredients": [{ "item": "kubejs:blaze_mycoplasma" },
      { "amount": amount, "fluid": fluid }],
      "results": [{ "item": "kubejs:blaze_mycoplasma", "count": count }]
    }).id("dut_create:blaze_mycoplasma/from_" + fluid.split(":")[1]);
    return 0
  }
  function mycoplasmaIncreaseByTag(fluidTag, amount, count) {
    event.custom(
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:blaze_mycoplasma" },
        { "amount": amount, "fluidTag": fluidTag }],
        "results": [{ "item": "kubejs:blaze_mycoplasma", "count": count }]
      }).id("dut_create:blaze_mycoplasma/from_" + fluidTag.split(":")[1]);
    return 0
  }
  //烈焰增殖
  mycoplasmaIncrease('minecraft:lava', 50, 3)
  mycoplasmaIncrease('kubejs:natural_gas', 50, 8)
  mycoplasmaIncrease('kubejs:refined_oil', 50, 6)
  mycoplasmaIncreaseByTag('forge:crude_oil', 50, 4)
  mycoplasmaIncreaseByTag('dut_create:plantoil', 50, 4)
  mycoplasmaIncreaseByTag('forge:hydrogen', 50, 6)
  mycoplasmaIncreaseByTag('forge:ethanol', 50, 2)
  //烈焰人燃烧室
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "create:empty_blaze_burner" },
      { "item": "kubejs:blaze_mycoplasma" }
    ],
    "results": [{ "item": "create:blaze_burner" }]
  }).id("dut_create:blaze_mycoplasma/blaze_burner")
  //安山区块加载器
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "create_power_loader:empty_andesite_chunk_loader" },
      { "item": "kubejs:blaze_mycoplasma" }
    ],
    "results": [{ "item": "create_power_loader:andesite_chunk_loader" }]
  }).id("dut_create:blaze_mycoplasma/andesite_chunk_loader")
  //乙烯转化
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "kubejs:natural_gas", "amount": 500 },
      { "item": "kubejs:blaze_mycoplasma" }

    ],
    "results": [
      { "fluid": "kubejs:ethylene", "amount": 250 },
      { "item": "kubejs:blaze_mycoplasma", "count": 2 },
    ],
    "processingTime": 100
  }).id('dut_create:blaze_mycoplasma/ethylene')
  //聚乙烯
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "ingredients": [
      { "fluidTag": "dut_create:ethylene", "amount": 500 },
      { "item": "kubejs:blaze_mycoplasma" }

    ],
    "results": [
      { "fluid": "kubejs:polymer", "amount": 125 }
    ],
    "processingTime": 100
  }).id('dut_create:blaze_mycoplasma/polymer')
  //合成天然气
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "secondaryFluidOutput": 0,
    "ingredients": [
      { "fluidTag": "forge:hydrogen", "amount": 1000 },
      { "fluid": "kubejs:carbon_dioxide", "amount": 250 },
      { "item": "kubejs:blaze_mycoplasma" }
    ],
    "results": [
      { "fluid": "minecraft:water", "amount": 500 },
      { "fluid": "kubejs:natural_gas", "amount": 250 }
    ],
    "processingTime": 100
  }).id('dut_create:blaze_mycoplasma/natural_gas_from_co2')
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 1,
    "ingredients": [
      { "fluid": "kubejs:ethylene", "amount": 500 },
      { "fluidTag": "forge:hydrogen", "amount": 1000 },
      { "item": "kubejs:blaze_mycoplasma" }

    ],
    "results": [
      { "fluid": "kubejs:natural_gas", "amount": 1000 }
    ],
    "processingTime": 300
  }).id('dut_create:blaze_mycoplasma/natural_gas_from_ethylene')
  //氨
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluidTag": "forge:hydrogen", "amount": 450 },
      { "fluid": "kubejs:nitrogen", "amount": 150 },
      { "item": "kubejs:blaze_mycoplasma" }
    ],
    "results": [
      { "fluid": "kubejs:ammonia", "amount": 300 }
    ],
    "processingTime": 400
  }).id('dut_create:blaze_mycoplasma/ammonia_from_nitrogen_with_iron')
  //黄铜
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "tag": "forge:ingots/gold" },
      { "tag": "forge:ingots/copper" },
      { "item": "kubejs:blaze_mycoplasma" }
    ],
    "results": [
      { "item": "create:brass_ingot", "count": 3 }
    ]
  }).id('dut_create:blaze_mycoplasma/brass')
  //烈焰蛋糕
  event.remove({ id: "create:compacting/blaze_cake" })
  event.remove({ id: "create:blaze_cake" })
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": "create:cinder_flour" },
      { "item": "minecraft:sugar" },
      { "item": "create:cinder_flour" },
      { "item": "minecraft:sugar" },
      { "item": "kubejs:blaze_mycoplasma" },
      { "item": "kubejs:blaze_mycoplasma" },
      { "fluid": "kubejs:nitric_acid", "amount": 125 }
    ],
    "results": [
      { "item": "create:blaze_cake", "count": 3 }
    ]
  }).id("dut_create:blaze_cake")
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "superheated",
    "ingredients": [
      { "item": "create:cinder_flour" },
      { "item": "create:cinder_flour" },
      { "item": "create:cinder_flour" },
      { "item": "minecraft:sugar" },
      { "item": "minecraft:sugar" },
      { "item": "minecraft:sugar" },
      { "fluid": "vintageimprovements:sulfuric_acid", "amount": 500 }
    ],
    "results": [
      { "item": "create:blaze_cake" }
    ]
  }).id("dut_create:blaze_cake_sulfuric_acid")

})