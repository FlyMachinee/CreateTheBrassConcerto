ServerEvents.recipes(event => {
  function transformItem(item1, item2) {
    event.custom({
      "type": "minecraft:stonecutting",
      "ingredient": { "item": item1 },
      "result": item2,
      "count": 1
    }).id("dut_create:transform/" + item1.split(':')[1] + '_to_' + item2.split(':')[1])
    event.custom({
      "type": "minecraft:stonecutting",
      "ingredient": { "item": item2 },
      "result": item1,
      "count": 1
    }).id("dut_create:transform/" + item2.split(':')[1] + '_to_' + item1.split(':')[1])
  }
  transformItem("minecraft:stone", "minecraft:cobblestone")
  transformItem("minecraft:deepslate", "minecraft:cobbled_deepslate")

  Ingredient.of("#minecraft:leaves").itemIds.forEach(i => {
    event.custom({
      "type": "minecraft:stonecutting",
      "ingredient": { "tag": "minecraft:leaves" },
      "result": i,
      "count": 1
    }).id("dut_create:transform/leaves/" + i.split(':')[1])
  })
  //
  //event.custom().id("dut_create:")
  //event.custom().id("dut_create:")
  //event.custom().id("dut_create:")
  function PlanksAndLogs(item2) {
    event.custom({
      "type": "minecraft:stonecutting",
      "ingredient": { "tag": "minecraft:logs" },
      "result": "minecraft:" + item2 + "_log",
      "count": 1
    }).id("dut_create:transform/log/" + item2)
    event.custom({
      "type": "minecraft:stonecutting",
      "ingredient": { "tag": "minecraft:planks" },
      "result": "minecraft:" + item2 + "_planks",
      "count": 1
    }).id("dut_create:transform/planks/" + item2)
  }
  const WoodType = [
    "spruce",
    "oak",
    "birch",
    "dark_oak",
    "jungle",
    "acacia",
    "mangrove",
    "cherry"
  ]
  for (let i1 of WoodType) {
    PlanksAndLogs(i1)

  }
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "item": "minecraft:map" },
      { "item": "minecraft:feather" }
    ],
    "result": { "item": "supplementaries:slice_map" }
  }).id("dut_create:slice_map")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "item": "minecraft:snow_block" }
    ],
    "result": { "item": "minecraft:snowball", "count": 4 }
  }).id("dut_create:transform/snow")
  event.remove({ id: "create:filling/redstone" })
  event.remove({ id: "create:filling/glowstone" })
  event.remove({ id: "create:filling/gunpowder" })
  event.remove({ id: "create:mixing/andesite_alloy" })
  event.remove({ id: "create:mixing/andesite_alloy_from_zinc" })
  event.remove({ id: "minecraft:sugar_from_sugar_cane" })
  event.remove({ id: "create:milling/sugar_cane" })
  event.remove({ id: "minecraft:sugar_from_honey_bottle" })
  event.remove({ id: "create:crushing/amethyst_cluster" })
  
  //小麦
  event.remove({ id: "create:milling/wheat" })
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "item": "minecraft:wheat" }
    ],
    "processingTime": 80,
    "results": [
      { "item": "create:wheat_flour" },
      { "chance": 0.5, "item": "create:wheat_flour" },
      { "item": "minecraft:wheat_seeds" }
    ]
  }).id("dut_create:wheat")
  //圆石
  event.remove({ id: "create:milling/cobblestone" })
  event.custom({
    "type": "create:milling",
    "ingredients": [
      { "item": "minecraft:cobblestone" }
    ],
    "results": [
      { "item": "minecraft:gravel" }
    ],
    "processingTime": 80
  }).id("dut_create:milling/cobblestone")
  //砂砾
  event.remove({ id: "create:milling/gravel" })
  event.remove({ id: "create:crushing/gravel" })
  event.custom({
    "type": "create:milling",
    "ingredients": [
      { "item": "minecraft:gravel" }
    ],
    "results": [
      { "item": "minecraft:flint" }
    ],
    "processingTime": 80
  }).id("dut_create:milling/flint")
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "item": "minecraft:gravel" }
    ],
    "results": [
      { "item": "minecraft:sand" },
      { "item": "minecraft:flint","chance":0.1 },
      { "item": "minecraft:clay_ball","chance":0.05 }
    ],
    "processingTime": 80
  }).id("dut_create:crushing/flint")

  //黄铜板
  event.custom({
    "type": "create:compacting",
    "ingredients": [{ "tag": "forge:plates/gold" },
    { "tag": "forge:plates/copper" }],
    "results": [{ "item": "create:brass_sheet", "count": 2 }]
  }).id("dut_create:brass_sheet")
  //电子管
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "create:polished_rose_quartz" },
      { "amount": 45, "fluid": "kubejs:iron" }
    ],
    "results": [
      { "item": "create:electron_tube" }
    ]
  }).id("dut_create:filling/electron_tube/iron")
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "create:polished_rose_quartz" },
      { "amount": 10, "fluid": "kubejs:industrial_iron" }
    ],
    "results": [
      { "item": "create:electron_tube" }
    ]
  }).id("dut_create:filling/electron_tube/industrial_iron")
  //腐化鸡蛋
  event.custom({
    "type": "create:haunting",
    "ingredients": [
      { "item": "minecraft:egg" }
    ],
    "results": [
      { "item": "iceandfire:rotten_egg" }
    ]
  }).id("dut_create:haunting/rotten_egg")
  //熔融黄铜
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "amount": 3*IngotFluid, "fluid": "kubejs:copper" },
      { "amount": 3*IngotFluid, "fluid": "kubejs:gold" }
    ],
    "results": [
      { "amount": 6*IngotFluid, "fluid": "kubejs:brass" }
    ]
  }).id("dut_create:molten_brass")
  //紫金锭
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "item": "ad_astra:ostrum_plate" }
    ],
    "results": [
      { "item": "ad_astra:ostrum_ingot" }
    ]
  }).id("dut_create:ostrum_ingot")
  //羊毛
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "tag": "minecraft:wool" }
    ],
    "processingTime": 20,
    "results": [
      { "count": 5, "item": "minecraft:string" },
      { "chance": 0.5, "item": "minecraft:string" }
    ]
  }).id("dut_create:wool")
  event.remove({ id: "create:crushing/wool" })
  //石灰岩
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "item": "minecraft:calcite" },
      { "item": "minecraft:bone_meal" },
      { "item": "minecraft:clay_ball" }
    ],
    "results": [
      { "item": "create:limestone" }
    ],
    "heatRequirement": "heated"
  }).id("dut_create:limestone")
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "item": "createdieselgenerators:wood_chip" },
      { "item": "createdieselgenerators:wood_chip" },
      { "item": "createdieselgenerators:wood_chip" },
      { "amount": 50, "fluid": "minecraft:water" }
    ],
    "results": [
      { "item": "minecraft:paper" }
    ]
  }).id("dut_create:compacting/paper")
  event.remove({ output: "minecraft:paper" })
  event.remove({ id: "create:compacting/ice" })
  //紫水晶量产
  event.custom({
    "type": "create:haunting",
    "ingredients": [
      { "item": "minecraft:quartz" }
    ],
    "results": [
      { "item": "minecraft:amethyst_shard", "chance": 0.25 }
    ]
  }).id("dut_create:haunting/amethyst_shard")
  event.custom({
    "type": "create:haunting",
    "ingredients": [
      { "item": "minecraft:amethyst_block" }
    ],
    "results": [
      { "item": "minecraft:budding_amethyst", "chance": 0.25 }
    ]
  }).id("dut_create:budding_amethyst")
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": "minecraft:budding_amethyst" },
      { "amount": 75, "fluid": "minecraft:water" }
    ],
    "results": [
      { "item": "minecraft:budding_amethyst" },
      { "item": "minecraft:small_amethyst_bud" },
    ]
  }).id("dut_create:small_amethyst_bud")
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "minecraft:small_amethyst_bud" },
      { "amount": 75, "fluid": "minecraft:water" }
    ],
    "results": [
      { "item": "minecraft:medium_amethyst_bud" },
    ]
  }).id("dut_create:medium_amethyst_bud")
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "minecraft:medium_amethyst_bud" },
      { "amount": 75, "fluid": "minecraft:water" }
    ],
    "results": [
      { "item": "minecraft:large_amethyst_bud" },
    ]
  }).id("dut_create:large_amethyst_bud")
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "minecraft:large_amethyst_bud" },
      { "amount": 75, "fluid": "minecraft:water" }
    ],
    "results": [
      { "item": "minecraft:amethyst_cluster" },
    ]
  }).id("dut_create:amethyst_cluster")
  event.custom({
    "type": "create:milling",
    "ingredients": [
      { "item": "minecraft:amethyst_cluster" },
    ],
    "results": [
      { "item": "minecraft:amethyst_shard", "count": 12 }
    ],
    "processingTime": 10
  }).id("dut_create:amethyst_shard")
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "heatRequirement": "heated",
    "ingredients": [
      { "amount": 250, "fluid": "kubejs:saline_water" },
      { "item": "minecraft:budding_amethyst" }
    ],
    "results": [
      { "item": "minecraft:budding_amethyst" },
      { "item": "minecraft:amethyst_cluster" },
      { "item": "minecraft:amethyst_cluster", "chance": 0.25 }
    ],
    "processingTime": 10
  }).id('dut_create:pressurizing/amethyst_cluster')
  event.custom({
    "type": "minecraft:smelting",
    "category": "misc",
    "cookingtime": 200,
    "experience": 0.0,
    "ingredient": {
      "item": "minecraft:amethyst_shard"
    },
    "result": "minecraft:quartz"
  }).id("dut_create:smelting/quartz")
  //水晶簇分解
  event.custom({
    "type": "vintageimprovements:vibrating",
    "ingredients": [
      { "item": "minecraft:amethyst_cluster" }
    ],
    "results": [
      { "item": "minecraft:amethyst_shard", "count": 12 },
      { "item": "minecraft:amethyst_shard", "count": 6, "chance": 0.5 }
    ],
    "processingTime": 10
  }).id("dut_create:vibrating/amethyst_cluster")
  //石英
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "item": "minecraft:amethyst_shard" }
    ],
    "results": [
      { "item": "minecraft:purple_dye", "chance": 0.5 },
      { "item": "minecraft:quartz" }
    ],
    "processingTime": 5
  }).id("dut_create:crushing/amethyst_shard")
  //硅板
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "heatRequirement": "heated",
    "ingredients": [
      { "item": "minecraft:amethyst_shard" }
    ],
    "results": [{ "item": "kubejs:silicon_plate" }],
    "processingTime": 5
  }).id("dut_create:pressurizing/silicon_plate")

  event.remove({ output: "minecraft:sugar", mod: 'create' })
  event.remove({ id: "minecraft:sugar_from_sugar_cane" })
  //泥巴
  event.remove({ id: "create:mixing/mud_by_mixing" })
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      [{ "item": "minecraft:dirt" }, { "item": "minecraft:coarse_dirt" }],
      [{ "item": "minecraft:dirt" }, { "item": "minecraft:coarse_dirt" }],
      { "fluid": "minecraft:water", "amount": 250 }
    ],
    "results": [
      { "item": "minecraft:mud", "count": 2 }
    ]
  }).id("dut_create:mixing/mud")
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "fluid": "kubejs:saline_water", "amount": 250 },
      { "fluid": "minecraft:water", "amount": 250 }
    ],
    "results": [
      { "item": "minecraft:mud", "count": 4 }
    ]
  }).id("dut_create:mud_mixing")
  //泥胚
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "item": "minecraft:mud" },
      { "item": "createdieselgenerators:wood_chip" },
      { "item": "createdieselgenerators:wood_chip" },
      { "item": "createdieselgenerators:wood_chip" }
    ],
    "result": { "item": "minecraft:packed_mud" }
  }).id("dut_create:packed_mud")
  event.custom({
    "type": "minecraft:smelting",
    "category": "misc",
    "cookingtime": 200,
    "experience": 0.0,
    "ingredient": {
      "item": "minecraft:packed_mud"
    },
    "result": "minecraft:coarse_dirt"
  }).id("dut_create:packed_mud_dirt")
  event.custom({
    "type": "minecraft:smelting",
    "category": "misc",
    "cookingtime": 200,
    "experience": 0.7,
    "ingredient": {
      "item": "kubejs:incomplete_disposable_battery"
    },
    "result": "minecraft:copper_ingot"
  }).id("dut_create:metal_recycle/copper")
  event.custom({
    "type": "minecraft:smelting",
    "category": "misc",
    "cookingtime": 200,
    "experience": 0.7,
    "ingredient": {
      "item": "kubejs:incomplete_chargeable_battery"
    },
    "result": "create:brass_ingot"
  }).id("dut_create:metal_recycle/brass")
  //甜菜制糖
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "item": "minecraft:beetroot" }
    ],
    "results": [
      { "item": "minecraft:sugar" }
    ],
    "heatRequirement": "heated"
  }).id("dut_create:sugar_from_beetroot")
  //滴水石锥
  event.custom({
    "type": "create:haunting",
    "ingredients": [
      { "item": "minecraft:calcite" }
    ],
    "results": [
      { "item": "minecraft:pointed_dripstone" },
      { "item": "minecraft:pointed_dripstone", "chance": 0.75 }
    ]
  }).id("dut_create:haunting/pointed_dripstone")
  //下界岩
  event.custom({
    "type": "create:filling",
    "ingredients": [{ "item": "minecraft:cobblestone" },
    { "amount": 500, "fluid": "minecraft:lava" }],
    "results": [{ "item": "minecraft:netherrack" }]
  }).id("dut_create:netherrack")
  event.custom({
    "type": "create:filling",
    "ingredients": [{ "item": "create:cinder_flour" },
    { "amount": 250, "fluid": "minecraft:lava" }],
    "results": [{ "item": "minecraft:netherrack" }]
  }).id("dut_create:netherrack1")
  //冰
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "item": "minecraft:snow_block" },
      { "item": "minecraft:snow_block" },
      { "item": "minecraft:snow_block" },
      { "item": "minecraft:snow_block" },
    ],
    "results": [
      { "item": "minecraft:ice" }
    ]
  }).id("dut_create:ice")
  //泥土
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": "minecraft:coarse_dirt" },
      { "item": "minecraft:coarse_dirt" },
      { "item": "minecraft:coarse_dirt" },
      { "item": "minecraft:coarse_dirt" }
    ],
    "results": [
      { "item": "minecraft:dirt", "count": 4 }
    ]
  }).id("dut_create:dirt")
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": "minecraft:gravel" },
      { "item": "minecraft:dirt" }
    ],
    "results": [
      { "item": "minecraft:coarse_dirt", "count": 2 }
    ]
  }).id("dut_create:coarse_dirt")
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "fluid": "kubejs:saline_water", "amount": 250 },
      { "fluid": "minecraft:lava", "amount": 250 }
    ],
    "results": [
      { "item": "minecraft:coarse_dirt" }
    ]
  }).id("dut_create:coarse_dirt_mixing")
  //深板岩圆石
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "item": "minecraft:cobblestone" },
      { "item": "minecraft:cobblestone" }
    ],
    "results": [
      { "item": "minecraft:cobbled_deepslate" }
    ],
    "heatRequirement": "heated"
  }).id("dut_create:cobbled_deepslate")
  //圆石
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "fluid": "minecraft:lava", "amount": 125 },
      { "fluid": "minecraft:water", "amount": 125 }
    ],
    "results": [
      { "item": "minecraft:cobblestone", "count": 16 }
    ]
  }).id("dut_create:cobblestone_mixing")
  //鞍
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "T&T"
    ],
    "key": {
      "#": { "item": "minecraft:leather" },
      "&": { "item": "minecraft:string" },
      "T": { "item": "minecraft:tripwire_hook" }
    },
    "result": { "item": "saddle" }
  }).id("dut_create:saddle")
  //线
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "##"
    ],
    "key": {
      "#": { "item": "minecraft:white_carpet" }
    },
    "result": { "item": "string", "count": 4 }
  }).id("dut_create:string")
  //火药
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      [{ "item": "minecraft:redstone" },
      { "item": "minecraft:blaze_powder" },
      { "item": "kubejs:sulphur" }],
      [{ "item": "minecraft:sugar" },
      { "item": "minecraft:bone_meal" }],
      [{ "item": "minecraft:coal" },
      { "item": "minecraft:charcoal" },
      { "item": "kubejs:crushed_coal" }]
    ],
    "result": { "item": "minecraft:gunpowder", "count": 3 }
  }).id("dut_create:gunpowder")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "item": "createbigcannons:nitropowder" }
    ],
    "result": { "item": "minecraft:gunpowder", "count": 3 }
  }).id("dut_create:gunpowder1")
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "fluid": "kubejs:cryogen", "amount": 250 },
      { "fluid": "minecraft:lava", "amount": 250 }
    ],
    "results": [
      { "item": "minecraft:obsidian" }
    ]
  }).id("dut_create:obsidian")
})