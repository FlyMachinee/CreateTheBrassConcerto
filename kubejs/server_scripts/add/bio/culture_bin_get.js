const CultureBinEmptyPlate = {
  "type": "custommachinery:item",
  "mode": "output",
  "item": "kubejs:empty_culture_plate",
  "amount": 1
}
function CultureBinPlateInput(nbt) {
  return ({
    "type": "custommachinery:item",
    "mode": "input",
    "slot": "plateinput",
    "item": "kubejs:pasteurized_culture_plate",
    "nbt": nbt,
    "amount": 1
  })
}
function CultureBinItemChance(item, amount, chance) {
  return ({
    "type": "custommachinery:item",
    "mode": "output",
    "item": item,
    "amount": amount,
    "chance": chance
  })
}
function CultureBinItemInput(item, amount) {
  return ({
    "type": "custommachinery:item",
    "mode": "input",
    "item": item,
    "amount": amount,
  })
}
function CultureBinItemNBT(mode, item, amount, nbt) {
  return ({
    "type": "custommachinery:item",
    "mode": mode,
    "item": item,
    "nbt": nbt,
    "amount": amount
  })
}
function CultureBinDimension(dimension) {
  return ({
    "type": "custommachinery:dimension",
    "filter": dimension,
    "blacklist": false
  })
}
function CultureBinBiome(biome) {
  return ({
    "type": "custommachinery:biome",
    "filter": biome,
    "blacklist": false
  })
}
function CultureBinFluid(fluid, mode, amount) {
  return ({
    "type": "custommachinery:fluid",
    "mode": mode,
    "fluid": fluid,
    "amount": amount
  })
}
function CultureBinFluidNBT(fluid, mode, amount, nbt) {
  return ({
    "type": "custommachinery:fluid",
    "mode": mode,
    "fluid": fluid,
    "amount": amount,
    "nbt": nbt
  })
}
//获取菌种
ServerEvents.recipes(event => {
  //
  //event.custom().id("dut_create:")
  //event.custom().id("dut_create:")
  //event.custom().id("dut_create:")
  function CultureBinPlate(id, time, plateIn, requirements, jeiPlate) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:culture_bin",
      "time": time,
      "requirements": [
        plateIn,
        CultureBinEmptyPlate,
      ].concat(requirements),
      "jei": requirements.concat([CultureBinEmptyPlate]).concat([jeiPlate])
    }).id("dut_create:culture_bin/get_" + id)
  }
  //酵母
  CultureBinPlate("yeast", 100,
    CultureBinPlateInput({ "type": "wood_chip" }),
    [
      {
        "type": "custommachinery:biome",
        "filter": ["minecraft:bamboo_jungle", "minecraft:birch_forest", "minecraft:cherry_grove", "minecraft:dark_forest", "minecraft:flower_forest", "minecraft:forest", "minecraft:grove", "minecraft:jungle", "minecraft:lush_caves", "minecraft:mangrove_swamp", "minecraft:meadow", "minecraft:mushroom_fields", "minecraft:old_growth_birch_forest", "minecraft:old_growth_pine_taiga", "minecraft:old_growth_spruce_taiga", "minecraft:snowy_taiga", "minecraft:sparse_jungle", "minecraft:sunflower_plains", "minecraft:swamp", "minecraft:taiga", "minecraft:windswept_forest", "dut:thalassgel", "dut:chromatic_agros"],
        "blacklist": false
      },
      CultureBinItemChance("kubejs:yeast", 1, 0.48),
      CultureBinItemChance("kubejs:yeast", 2, 0.16),
      CultureBinItemChance("kubejs:useless_bacteria", 3, 0.36),
      CultureBinItemChance("kubejs:useless_bacteria", 1, 0.78)
    ],
    CultureBinPlateInput({ "type": "wood_chip", display: { Name: '{"translate":"kubejs.item.culture.wood_chip","italic":false}' } })
  )
  //奶酪月藻
  CultureBinPlate("cheese_moonalgae", 300,
    CultureBinPlateInput({ "type": "milk" }),
    [
      {
        "type": "custommachinery:biome",
        "filter": ["ad_astra:lunar_wastelands"]
      },
      CultureBinItemChance("kubejs:cheese_moonalgae", 1, 0.21),
      CultureBinItemChance("kubejs:cheese_moonalgae", 1, 0.16),
      CultureBinItemChance("ad_astra:cheese", 1, 0.36),
      CultureBinItemChance("ad_astra:cheese", 1, 0.68)
    ],
    CultureBinPlateInput({ "type": "milk", display: { Name: '{"translate":"kubejs.item.culture.milk","italic":false}' } })
  )
  //泥炭原虫
  CultureBinPlate("peat_protozoa", 100,
    CultureBinPlateInput({ "type": "mud" }),
    [
      {
        "type": "custommachinery:biome",
        "filter": ["minecraft:jungle", "minecraft:lush_caves", "minecraft:mangrove_swamp", "minecraft:mushroom_fields", "minecraft:old_growth_birch_forest", "minecraft:old_growth_pine_taiga", "minecraft:old_growth_spruce_taiga", "minecraft:swamp", "dut:thalassgel", "dut:chromatic_agros"]
      },
      CultureBinItemChance("kubejs:peat_protozoa", 1, 0.21),
      CultureBinItemChance("kubejs:peat_protozoa", 2, 0.16),
      CultureBinItemChance("kubejs:yeast", 1, 0.48),
      CultureBinItemChance("kubejs:useless_bacteria", 2, 0.36),
    ],
      CultureBinPlateInput({ "type": "mud", display: { Name: '{"translate":"kubejs.item.culture.mud","italic":false}' } }),
  )
  //异彩原虫
  CultureBinPlate("chromatic_protozoa", 100,
    CultureBinPlateInput({ "type": "dye" }),
    [
      {
        "type": "custommachinery:biome",
        "filter": ["minecraft:the_end", "minecraft:end_midlands", "minecraft:end_highlands", "minecraft:end_barrens", "minecraft:the_void"]
      },
      CultureBinItemChance("kubejs:chromatic_protozoa", 1, 0.12),
      CultureBinItemChance("kubejs:useless_bacteria", 2, 0.68),
      CultureBinItemChance("kubejs:useless_bacteria", 2, 0.36)
    ],
      CultureBinPlateInput({ "type": "dye", display: { Name: '{"translate":"kubejs.item.culture.dye","italic":false}' } }),
  )
  //烈焰支原体
  CultureBinPlate("blaze_mycoplasma", 100,
    CultureBinPlateInput({ "type": "fuel" }),
    [
      CultureBinDimension("minecraft:the_nether"),
      CultureBinItemChance("kubejs:blaze_mycoplasma", 1, 0.48)
    ],
      CultureBinPlateInput({ "type": "fuel", display: { Name: '{"translate":"kubejs.item.culture.fuel","italic":false}' } }),
  )
  //蓝焰衣原体
  CultureBinPlate("blaze_chlamydia", 180,
    CultureBinPlateInput({ "type": "super_fuel" }),
    [
      CultureBinDimension("minecraft:the_nether"),
      CultureBinItemChance("kubejs:blaze_chlamydia", 1, 0.08),
      CultureBinItemChance("kubejs:blaze_mycoplasma", 1, 0.78),
      CultureBinItemChance("kubejs:blaze_mycoplasma", 2, 0.12)
    ],
      CultureBinPlateInput({ "type": "super_fuel", display: { Name: '{"translate":"kubejs.item.culture.super_fuel","italic":false}' } }),
  )
  //幽匿催发体
  CultureBinPlate("sculk_catalyst", 120,
    CultureBinPlateInput({ "type": "biomass" }),
    [
      {
        "type": "custommachinery:biome",
        "filter": ["minecraft:deep_dark"],
        "blacklist": false
      },
      CultureBinItemChance("minecraft:sculk_catalyst", 1, 0.28),
      CultureBinItemChance("minecraft:sculk_catalyst", 2, 0.18),
      CultureBinItemChance("minecraft:sculk_vein", 1, 0.36),
      CultureBinItemChance("kubejs:useless_bacteria", 3, 0.48)
    ],
      CultureBinPlateInput({ "type": "biomass", display: { Name: '{"translate":"kubejs.item.culture.biomass","italic":false}' } }),
  )
  //谐振原虫
  CultureBinPlate("resonant_bacteria", 120,
    CultureBinPlateInput({ "type": "exp" }),
    [
      {
        "type": "custommachinery:biome",
        "filter": ["ad_astra:orbit"],
        "blacklist": false
      },
      CultureBinItemChance("kubejs:resonant_bacteria", 1, 0.28),
      CultureBinItemChance("kubejs:useless_bacteria", 1, 0.36),
      CultureBinItemChance("kubejs:useless_bacteria", 2, 0.88)
    ],
      CultureBinPlateInput({ "type": "exp", display: { Name: '{"translate":"kubejs.item.culture.exp","italic":false}' } }),
  )
  //烈焰疣
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 80,
    "requirements": [
      CultureBinItemInput("kubejs:blaze_mycoplasma", 3),
      CultureBinItemInput("minecraft:nether_wart", 3),
      CultureBinItemChance("kubejs:blaze_wart", 1, 1)
    ]
  }).id("dut_create:culture_bin/get_blaze_wart")
  //粘菌
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 80,
    "requirements": [
      {
        "type": "custommachinery:biome",
        "filter": ["ad_astra:orbit"],
        "blacklist": false
      },
      CultureBinItemInput("kubejs:resonant_bacteria", 2),
      CultureBinItemInput("minecraft:slime_block", 2),
      CultureBinFluid("kubejs:refined_oil", "input", 500),
      CultureBinFluid("kubejs:chromatic_waste", "output", 250),
      CultureBinItemChance("kubejs:mycetozoan", 1, 0.25),
      CultureBinItemChance("kubejs:mycetozoan", 1, 0.25)
    ]
  }).id("dut_create:culture_bin/get_mycetozoan")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 20,
    "requirements": [
      CultureBinItemInput("kubejs:granite_alloy", 3),
      CultureBinItemInput("minecraft:slime_block", 1),
      CultureBinFluid("kubejs:refined_oil", "input", 100),
      CultureBinFluid("kubejs:chromatic_waste", "output", 25),
      CultureBinItemChance("kubejs:mycetozoan", 1, 0.002)
    ]
  }).id("dut_create:culture_bin/get_mycetozoan_from_radiation")

})