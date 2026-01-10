ServerEvents.recipes(event => {
  //转化经验
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidOutput": 0,
    "ingredients": [
      { "fluid": "minecraft:water", "amount": 500 },
      { "item": "minecraft:sculk_catalyst" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" }
    ],
    "processingTime": 30,
    "results": [
      { "amount": 200, "fluid": "create_enchantment_industry:experience" },
      { "item": "minecraft:sculk_catalyst" },
      { "item": "minecraft:sculk_vein", "chance":0.2 },
      { "item": "minecraft:sculk_sensor", "chance":0.06 },
      { "item": "minecraft:sculk_shrieker", "chance": 0.02},
      { "item": "minecraft:sculk", "chance": 0.1},
      { "item": "minecraft:echo_shard", "chance":0.005 }
    ]
  }).id("dut_create:sculk/experience")
  //幽匿回收
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": "minecraft:sculk_vein" },
      { "item": "minecraft:sculk_vein" },
      { "item": "minecraft:sculk_vein" },
      { "item": "minecraft:sculk_vein" }
    ],
    "results": [
      { "amount": 50, "fluid": "create_enchantment_industry:experience" },
    ]
  }).id('dut_create:sculk_recycle/vein')
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": "minecraft:sculk" },
      { "item": "minecraft:sculk" }
    ],
    "results": [
      { "amount": 75, "fluid": "create_enchantment_industry:experience" },
    ]
  }).id('dut_create:sculk_recycle/sculk')
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": "minecraft:sculk_shrieker" }
    ],
    "results": [
      { "amount": 250, "fluid": "create_enchantment_industry:experience" },
    ]
  }).id('dut_create:sculk_recycle/sculk_shrieker')
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": "minecraft:echo_shard" }
    ],
    "results": [
      { "amount": 750, "fluid": "create_enchantment_industry:experience" },
    ]
  }).id('dut_create:sculk_recycle/echo_shard')
  //幽匿增殖
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "ingredients": [{ "amount": 250, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:awkward" } },
      { "item": "minecraft:sculk_catalyst" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" }
    ],
    "processingTime": 30,
    "results": [
      { "item": "minecraft:sculk_catalyst" },
      { "item": "minecraft:sculk_catalyst","chance":0.5 },
      { "item": "kubejs:useless_bacteria","chance":0.75},
      { "item": "kubejs:useless_bacteria","chance":0.5 ,"count":2}
    ]
  }).id("dut_create:sculk/get_more")
  //强化深板岩
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "ingredients": [
      { "item": "minecraft:sculk_catalyst" },
      { "item": "minecraft:deepslate" }
    ],
    "processingTime": 30,
    "results": [
      { "item": "minecraft:reinforced_deepslate" ,"chance":0.5}
    ]
  }).id("dut_create:sculk/reinforced_deepslate")
  //刷怪笼
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": true,
    "key": {
      "A": {"tag": "forge:plates/shadow_steel" },
      "B": { "item": "minecraft:echo_shard" },
      "C": { "item": "minecraft:sculk_shrieker" },
      "D": { "item": "minecraft:reinforced_deepslate" }
    },
    "pattern": [
      "ABA",
      "ACA",
      "ADA",
    ],
    "result": { "item": "minecraft:spawner" }
  }
).id("dut_create:sculk/mob_spawner")
  //转化暗影钢
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "ingredients": [
      { "tag": "forge:ingots/chromatic" },
      { "tag": "forge:ingots/chromatic" },
      { "tag": "forge:ingots/chromatic" },
      { "tag": "forge:ingots/chromatic" },
      { "tag": "forge:ingots/chromatic" },
      { "tag": "forge:ingots/chromatic" },
      { "tag": "forge:ingots/chromatic" },
      { "tag": "forge:ingots/chromatic" },
      { "item": "minecraft:sculk_catalyst" }
    ],
    "processingTime": 15,
    "results": [
      { "item": "create:shadow_steel","count":8 },
      { "item": "minecraft:sculk_catalyst" }
    ]
  }).id("dut_create:shadow_steel/from_chromatic")
})