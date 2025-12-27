ServerEvents.recipes(event => {
  //获得金属原虫 期望处理次数是4次，原虫期望为0.2
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "item": "minecraft:netherite_scrap" }
    ],
    "processingTime": 250,
    "results": [
      { "item": "minecraft:netherite_scrap", "chance": 0.75 },
      { "item": "kubejs:metal_protozoa", "chance": 0.05 }
    ]
  }).id("dut_create:get_metal")
  //金属转化
  //铁-铜锌金
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "minecraft:lava", "amount": 500 },
      { "item": "kubejs:metal_protozoa" },
      { "item": "create:crimsite" },
      { "item": "create:crimsite" },
      { "item": "create:crimsite" },
      { "item": "create:crimsite" },
      { "item": "create:crimsite" },
      { "item": "create:crimsite" },
    ],
    "processingTime": 60,
    "results": [
      { "item": "create:veridium", "count": 2 },
      { "item": "create:ochrum", "count": 2 },
      { "item": "create:asurine", "count": 2 },
      { "item": "kubejs:metal_protozoa" },
      { "item": "create:limestone" }
    ]
  }).id("dut_create:metal/iron_to_basic")
  //铜-铁锡银
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "minecraft:lava", "amount": 500 },
      { "item": "kubejs:metal_protozoa" },
      { "item": "create:veridium" },
      { "item": "create:veridium" },
      { "item": "create:veridium" },
      { "item": "create:veridium" },
      { "item": "create:veridium" },
      { "item": "create:veridium" },
      { "item": "create:veridium" },
      { "item": "create:veridium" }
    ],
    "processingTime": 60,
    "results": [
      { "item": "create:crushed_raw_silver", "count": 5 },
      { "item": "kubejs:raw_tin", "count": 4 },
      { "item": "kubejs:metal_protozoa" },
      { "item": "create:limestone" }
    ]
  }).id("dut_create:metal/copper_to_advanced")
  //锌-锡银
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "minecraft:lava", "amount": 500 },
      { "item": "kubejs:metal_protozoa" },
      { "item": "create:asurine" },
      { "item": "create:asurine" },
      { "item": "create:asurine" },
      { "item": "create:asurine" },
      { "item": "create:asurine" },
      { "item": "create:asurine" },
      { "item": "create:asurine" },
      { "item": "create:asurine" }
    ],
    "processingTime": 60,
    "results": [
      { "item": "create:crushed_raw_silver", "count": 5 },
      { "item": "kubejs:raw_tin", "count": 4 },
      { "item": "kubejs:metal_protozoa" },
      { "item": "create:limestone" }
    ]
  }).id("dut_create:metal/zinc_to_advanced")
  //金-锡银
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "minecraft:lava", "amount": 500 },
      { "item": "kubejs:metal_protozoa" },
      { "item": "create:ochrum" },
      { "item": "create:ochrum" },
      { "item": "create:ochrum" },
      { "item": "create:ochrum" },
      { "item": "create:ochrum" },
      { "item": "create:ochrum" },
      { "item": "create:ochrum" },
      { "item": "create:ochrum" }
    ],
    "processingTime": 60,
    "results": [
      { "item": "create:crushed_raw_silver", "count": 5 },
      { "item": "kubejs:raw_tin", "count": 4 },
      { "item": "kubejs:metal_protozoa" },
      { "item": "create:limestone" }
    ]
  }).id("dut_create:metal/gold_to_advanced")
  //金属流体转化
  const metalFluid = [
    ["kubejs:iron", "kubejs:copper", "kubejs:tin"],
    ["kubejs:copper", "kubejs:gold", "kubejs:zinc"],
    ["kubejs:gold", "kubejs:silver", "kubejs:iron"],
    ["kubejs:silver", "kubejs:tin", "kubejs:copper"],
    ["kubejs:tin", "kubejs:zinc", "kubejs:gold"],
    ["kubejs:zinc", "kubejs:iron", "kubejs:silver"]
  ]
  function FluidTransform(fluid) {
    event.custom({
      "type": "vintageimprovements:pressurizing",
      "secondaryFluidInput": 0,
      "ingredients": [
        { "fluid": "minecraft:lava", "amount": 125 },
        { "item": "kubejs:metal_protozoa" },
        { "fluid": fluid[0], "amount": 450 }
      ],
      "processingTime": 60,
      "results": [
        { "fluid": fluid[1], "amount": 300 },
        { "fluid": fluid[2], "amount": 300 },
        { "item": "kubejs:metal_protozoa" },
        { "item": "create:limestone", "chance": 0.5 }
      ]
    }).id("dut_create:metal/fluid/" + fluid[0].split(":")[1])
  }
  for (let i of metalFluid){
    FluidTransform(i)
  }

  //催化绯红岩
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "minecraft:lava", "amount": 500 },
      { "item": "kubejs:metal_protozoa" },
      { "item": "minecraft:cobblestone" },
      { "item": "minecraft:cobblestone" },
      { "item": "minecraft:cobblestone" }
    ],
    "processingTime": 240,
    "results": [
      { "item": "create:crimsite", "count": 15 },
      { "item": "kubejs:metal_protozoa" },
      { "item": "create:limestone", "count": 12, "chance": 0.25 }
    ]
  }).id("dut_create:metal/get_crimsite")

  //原虫增殖
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "ingredients": [
      { "fluid": "minecraft:lava", "amount": 500 },
      { "item": "kubejs:metal_protozoa" },
      { "item": "kubejs:metal_protozoa" },
      { "item": "create:crimsite" },
      { "item": "create:veridium" },
      { "item": "create:ochrum" },
      { "item": "create:asurine" },
      { "item": "create:limestone" },
      { "item": "kubejs:raw_tin" }
    ],
    "processingTime": 300,
    "results": [
      { "item": "kubejs:metal_protozoa", "count": 2, "chance": 0.5 },
      { "item": "kubejs:metal_protozoa", "count": 2, "chance": 0.6 }
    ]
  }).id("dut_create:metal/get_metal_protozoa")
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "ingredients": [
      { "fluid": "minecraft:lava", "amount": 500 },
      { "item": "kubejs:metal_protozoa" },
      { "item": "minecraft:netherite_scrap" }
    ],
    "processingTime": 300,
    "results": [
      { "item": "kubejs:metal_protozoa" },
      { "item": "kubejs:metal_protozoa", "chance": 0.5 }
    ]
  }).id("dut_create:metal/get_metal_protozoa1")
})