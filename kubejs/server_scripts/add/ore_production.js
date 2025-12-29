ServerEvents.recipes(event => {
  //event.custom().id("dut_create:")
  //event.custom().id("dut_create:")
  event.remove({ id: 'create:crushing/raw_gold_block' })
  event.remove({ id: 'create:crushing/raw_zinc_block' })
  event.remove({ id: 'create:crushing/raw_silver_block' })
  event.remove({ id: 'create:crushing/raw_iron_block' })
  event.remove({ id: 'create:crushing/raw_copper_block' })
  //探矿杖
  event.remove({ output: 'createoreexcavation:vein_finder' })
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": true,
    "key": {
      "A": { "item": "create:precision_mechanism" },
      "B": { "item": "create:display_link" },
      "P": { "item": "create:nixie_tube" },
      "S": { "tag": "forge:rods/iron" },
      "M": { "item": "create:redstone_link" }
    },
    "pattern": [
      " B ",
      "MPM",
      " A ",
      " S ",
      " S "
    ],
    "result": { "item": "kubejs:scanner", "nbt": { Unbreakable: 1 } },
  }
  ).id("dut_create:scanner")
  //暗影钢
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": "create:sturdy_sheet" },
      { "item": "create:sturdy_sheet" },
      { "item": "create:sturdy_sheet" },
      { "item": "minecraft:glowstone_dust" },
      { "item": "minecraft:glowstone_dust" },
      { "item": "minecraft:glowstone_dust" },
      { "item": "create:polished_rose_quartz" }
    ],
    "results": [
      { "item": "create:shadow_steel" }
    ],
    "heatRequirement": "superheated"
  }).id("dut_create:shadow_steel")
  //残骸增殖
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "fluid": "vintageimprovements:sulfuric_acid", "amount": 250 },
      { "tag": "forge:ingots/shadow_steel" },
      { "item": "minecraft:netherite_scrap" }
    ],
    "results": [
      { "item": "minecraft:netherite_scrap" },
      { "item": "minecraft:netherite_scrap", "chance": 0.5 }
    ],
    "heatRequirement": "superheated"
  }).id("dut_create:netherite_from_shadow_steel")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:ingots/shadow_steel" },
    "loops": 1,
    "results": [
      { "item": "minecraft:netherite_scrap", "chance": 0.05},
      { "item": 'create:cinder_flour', "chance": 0.95 },
    ],
    "sequence": [{
      "type": "create:filling",
      "ingredients": [
        { "item": "create:shadow_steel" },
        { "fluid": "create_enchantment_industry:experience", "amount": 1000 }
      ],
      "results": [{ "item": "create:shadow_steel" }],
    },{
      "type": "create:filling",
      "ingredients": [
        { "item": "create:shadow_steel" },
        { "fluid": "kubejs:nitric_acid", "amount": 500 }
      ],
      "results": [{ "item": "create:shadow_steel" }],
    }],
    "transitionalItem": { "item": "create:shadow_steel" }
  }).id("dut_create:netherite_from_shadow_steel_first")
  //酸洗增产
  function createRecipe(a, b, c) {
    let d = "dut_create:" + a.split(":")[1] + 'washing/' + b.split(":")[1]
    let e = 'create:crushed_raw_' + c
    event.custom({
      "type": "create:mixing",
      "ingredients": [{ "item": b },
      { "amount": 25, "fluid": a }],
      "results": [{ "item": e, "count": 2 }, { "item": e, "chance": 0.75 }]
    }).id(d);
    return 0
  }
  //createRecipe('kubejs:muriatic_acid', "create:asurine", "zinc")
  //createRecipe('kubejs:muriatic_acid', "create:veridium", "copper")
  //createRecipe('kubejs:muriatic_acid', "create:crimsite", "iron")
  //createRecipe('kubejs:muriatic_acid', "create:ochrum", "gold")
  //createRecipe('kubejs:muriatic_acid', "kubejs:raw_tin", "tin")
  //createRecipe('kubejs:nitric_acid', "create:asurine", "zinc")
  //createRecipe('kubejs:nitric_acid', "create:veridium", "copper")
  //createRecipe('kubejs:nitric_acid', "create:crimsite", "iron")
  //createRecipe('kubejs:nitric_acid', "create:ochrum", "gold")
  //createRecipe('kubejs:nitric_acid', "kubejs:raw_tin", "tin")
  //createRecipe("vintageimprovements:sulfuric_acid", "create:asurine", "zinc")
  //createRecipe('vintageimprovements:sulfuric_acid', "create:veridium", "copper")
  //createRecipe('vintageimprovements:sulfuric_acid', "create:crimsite", "iron")
  //createRecipe('vintageimprovements:sulfuric_acid', "create:ochrum", "gold")
  //createRecipe('vintageimprovements:sulfuric_acid', "kubejs:raw_tin", "tin")
  //皓蓝石粉碎
  event.remove({ id: 'create:crushing/asurine' })
  event.remove({ id: 'create:crushing/asurine_recycling' })
  //绯红岩粉碎
  event.remove({ id: 'create:crushing/crimsite' })
  event.remove({ id: 'create:crushing/crimsite_recycling' })
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "tag": "create:stone_types/crimsite" }
    ],
    "processingTime": 250,
    "results": [
      { "item": "create:crushed_raw_iron" },
      { "chance": 0.25, "item": "create:crushed_raw_iron" }
    ]
  }).id("dut_create:ore_production/crimsite")
  //赭金砂粉碎
  event.remove({ id: 'create:crushing/ochrum' })
  event.remove({ id: 'create:crushing/ochrum_recycling' })
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "tag": "create:stone_types/ochrum" }
    ],
    "processingTime": 250,
    "results": [
      { "item": "create:crushed_raw_gold" },
      { "chance": 0.25, "item": "create:crushed_raw_gold" }
    ]
  }).id("dut_create:ore_production/ochrum")
  //辉绿岩粉碎
  event.remove({ id: 'create:crushing/veridium' })
  event.remove({ id: 'create:crushing/veridium_recycling' })
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "tag": "create:stone_types/veridium" }
    ],
    "processingTime": 250,
    "results": [
      { "item": "create:crushed_raw_copper" },
      { "chance": 0.25, "item": "create:crushed_raw_copper" }
    ]
  }).id("dut_create:ore_production/veridium")
  //石灰岩粉碎
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "tag": "create:stone_types/limestone" }
    ],
    "processingTime": 250,
    "results": [
      { "item": "minecraft:calcite", "chance": 0.5 },
      { "item": "minecraft:bone_meal", "chance": 0.5 },
      { "item": "minecraft:clay_ball", "chance": 0.125 }
    ]
  }).id("dut_create:ore_production/limestone")
  //绯红岩
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "tag": "forge:plates/iron" },
      { "amount": 250, "fluid": "minecraft:lava" }
    ],
    "results": [
      { "item": "create:crimsite", "count": 2 }
    ]
  }).id("dut_create:ore_production/iron")
  //赭金砂
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "tag": "forge:plates/gold" },
      { "amount": 250, "fluid": "minecraft:lava" }
    ],
    "results": [
      { "item": "create:ochrum", "count": 2 }
    ]
  }).id("dut_create:ore_production/gold")
  //辉绿岩
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "tag": "forge:plates/copper" },
      { "amount": 250, "fluid": "minecraft:water" }
    ],
    "results": [
      { "item": "create:veridium", "count": 2 }
    ]
  }).id("dut_create:ore_production/copper")
  //锡石
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "tag": "forge:plates/tin" },
      { "amount": 250, "fluid": "minecraft:water" }
    ],
    "results": [
      { "item": "kubejs:raw_tin", "count": 2 }
    ]
  }).id("dut_create:ore_production/tin")
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "item": "kubejs:raw_tin" }
    ],
    "results": [
      { "item": "create:crushed_raw_tin" },
      { "item": "create:crushed_raw_tin", "chance": 0.25 }
    ],
    "processingTime": 250
  }).id("dut_create:ore_production/crushed_tin")
  //矿洗涤
  event.remove({ id: "create:splashing/crushed_raw_iron" })
  event.custom({
    "type": "create:splashing",
    "ingredients": [
      { "item": "create:crushed_raw_iron" }
    ],
    "results": [
      { "count": 9, "item": "minecraft:iron_nugget" },
      { "chance": 0.025, "item": "minecraft:tuff" }
    ]
  }).id("dut_create:ore_production/crushed_raw_iron_wash")

  event.remove({ id: "create:splashing/crushed_raw_zinc" })
  event.remove({ id: "create:splashing/iceandfire/crushed_raw_silver" })
  event.remove({ id: "create:splashing/crushed_raw_gold" })
  event.custom({
    "type": "create:splashing",
    "ingredients": [
      { "item": "create:crushed_raw_gold" }
    ],
    "results": [
      { "count": 9, "item": "minecraft:gold_nugget" },
      { "chance": 0.025, "item": "minecraft:quartz" }
    ]
  }).id("dut_create:ore_production/crushed_raw_gold_wash")
  event.remove({ id: "create:splashing/crushed_raw_copper" })
  event.custom({
    "type": "create:splashing",
    "ingredients": [
      { "item": "create:crushed_raw_copper" }
    ],
    "results": [
      { "count": 9, "item": "create:copper_nugget" },
      { "chance": 0.05, "item": "minecraft:clay_ball" }
    ]
  }).id("dut_create:ore_production/crushed_raw_copper_wash")
  event.remove({ id: "create:splashing/gravel" })
  event.custom({
    "type": "create:splashing",
    "ingredients": [
      { "item": "minecraft:gravel" }
    ],
    "results": [
      { "chance": 0.5, "item": "minecraft:flint" }
    ]
  }).id("dut_create:ore_production/gravel_wash")
  event.remove({ id: "create:splashing/soul_sand" })
  event.custom({
    "type": "create:splashing",
    "ingredients": [
      { "item": "minecraft:soul_sand" }
    ],
    "results": [
      { "chance": 0.05, "item": "minecraft:nether_wart" }
    ]
  }).id("dut_create:ore_production/soul_sand_wash")
  event.remove({ id: "create:splashing/red_sand" })
  event.custom({
    "type": "create:splashing",
    "ingredients": [
      { "item": "minecraft:red_sand" }
    ],
    "results": [
      { "chance": 0.05, "item": "kubejs:raw_tin" },
      { "chance": 0.125, "item": "minecraft:dead_bush" }
    ]
  }).id("dut_create:ore_production/red_sand_wash")
  //煤炭粉碎
  event.remove({ id: "create:milling/coal" })
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "item": "minecraft:coal" }
    ],
    "processingTime": 100,
    "results": [
      { "item": "kubejs:crushed_coal" },
      { "item": "kubejs:crushed_coal", "chance": 0.75 },
      { "item": "kubejs:graphite", "chance": 0.5 }
    ]
  }).id("dut_create:ore_production/graphite")
  //焦黑熔渣
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "tag": "create:stone_types/scorchia" }
    ],
    "processingTime": 250,
    "results": [
      { "chance": 0.5, "item": "create:cinder_flour" },
      { "chance": 0.05, "item": "kubejs:crushed_coal" },
      { "chance": 0.25, "item": "kubejs:sulphur" }
    ]
  }).id("dut_create:ore_production/scorchia")
  //凝灰岩粉碎
  event.remove({ id: 'create:crushing/tuff' })
  event.remove({ id: 'create:crushing/tuff_recycling' })
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "tag": "create:stone_types/tuff" }
    ],
    "processingTime": 350,
    "results": [
      { "chance": 0.25, "item": "minecraft:flint" },
      { "chance": 0.1, "item": "minecraft:gold_nugget" },
      { "chance": 0.1, "item": "create:copper_nugget" },
      { "chance": 0.1, "item": "minecraft:iron_nugget" },
      { "chance": 0.1, "item": "kubejs:tin_nugget" }
    ]
  }).id("dut_create:ore_production/tuff")
  //铝土
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "item": "kubejs:aluminite" }
    ],
    "results": [
      { "item": "kubejs:aluminite_powder" }
    ],
    "processingTime": 250
  }).id("dut_create:ore_production/aluminite_powder")
})