const CultureBinEmptyPlate = {
  "type": "custommachinery:item",
  "mode": "output",
  "item": "kubejs:empty_culture_plate",
  "slot": "plateoutput",
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
function CultureBinItemNBT(mode, item, amount,nbt) {
  return ({
    "type": "custommachinery:item",
    "mode": mode,
    "item": item,
    "nbt":nbt,
    "amount": amount
  })
}
function CultureBinDimension(dimension) {
  return ({
    "type": "custommachinery:dimension",
    "filter": dimension,
    "blacklist":false
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
function CultureBinFluidNBT(fluid, mode, amount,nbt) {
  return ({
    "type": "custommachinery:fluid",
    "mode": mode,
    "fluid": fluid,
    "amount": amount,
    "nbt":nbt
  })
}
//获取菌种
ServerEvents.recipes(event => {
  //
  //event.custom().id("dut_create:")
  //event.custom().id("dut_create:")
  //event.custom().id("dut_create:")
  //酵母
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 100,
    "requirements": [
      {
        "type": "custommachinery:biome",
        "filter": ["minecraft:bamboo_jungle", "minecraft:birch_forest", "minecraft:cherry_grove", "minecraft:dark_forest", "minecraft:flower_forest", "minecraft:forest", "minecraft:grove", "minecraft:jungle", "minecraft:lush_caves", "minecraft:mangrove_swamp", "minecraft:meadow", "minecraft:mushroom_fields", "minecraft:old_growth_birch_forest", "minecraft:old_growth_pine_taiga", "minecraft:old_growth_spruce_taiga", "minecraft:snowy_taiga", "minecraft:sparse_jungle", "minecraft:sunflower_plains", "minecraft:swamp", "minecraft:taiga", "minecraft:windswept_forest","dut:thalassgel","dut:chromatic_agros"],
        "blacklist": false
      },
      CultureBinPlateInput({ "wood_chip": true, display: { Name: '{"translate":"kubejs.item.culture.wood_chip","italic":false}' } }),
      CultureBinEmptyPlate,
      CultureBinItemChance("kubejs:yeast", 1, 0.48),
      CultureBinItemChance("kubejs:yeast", 2, 0.16),
      CultureBinItemChance("kubejs:useless_bacteria", 3, 0.36),
      CultureBinItemChance("kubejs:useless_bacteria", 1, 0.78)
    ]
  }).id("dut_create:get_yeast")
  //奶酪月藻
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 300,
    "requirements": [
      {
        "type": "custommachinery:biome",
        "filter": ["ad_astra:lunar_wastelands"]
      },
      CultureBinPlateInput({ "milk": true, display: { Name: '{"translate":"kubejs.item.culture.milk","italic":false}' } }),
      CultureBinEmptyPlate,
      CultureBinItemChance("kubejs:cheese_moonalgae", 1, 0.21),
      CultureBinItemChance("kubejs:cheese_moonalgae", 1, 0.16),
      CultureBinItemChance("ad_astra:cheese", 1, 0.36),
      CultureBinItemChance("ad_astra:cheese", 1, 0.68)
    ]
  }).id("dut_create:get_moonalgae")
  //泥炭原虫
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 100,
    "requirements": [
      {
        "type": "custommachinery:biome",
        "filter": ["minecraft:jungle", "minecraft:lush_caves", "minecraft:mangrove_swamp", "minecraft:mushroom_fields", "minecraft:old_growth_birch_forest", "minecraft:old_growth_pine_taiga", "minecraft:old_growth_spruce_taiga", "minecraft:swamp","dut:thalassgel","dut:chromatic_agros"]
      },
      CultureBinPlateInput({ "mud": true, display: { Name: '{"translate":"kubejs.item.culture.mud","italic":false}' } }),
      CultureBinEmptyPlate,
      CultureBinItemChance("kubejs:peat_protozoa", 1, 0.21),
      CultureBinItemChance("kubejs:peat_protozoa", 2, 0.16),
      CultureBinItemChance("kubejs:yeast", 1, 0.48),
      CultureBinItemChance("kubejs:useless_bacteria", 2, 0.36),
    ]
  }).id("dut_create:get_peat")
  //异彩原虫
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 100,
    "requirements": [
      {
        "type": "custommachinery:biome",
        "filter": ["minecraft:the_end", "minecraft:end_midlands", "minecraft:end_highlands", "minecraft:end_barrens", "minecraft:the_void"]
      },
      CultureBinPlateInput({ "dye": true, display: { Name: '{"translate":"kubejs.item.culture.dye","italic":false}' } }),
      CultureBinEmptyPlate,
      CultureBinItemChance("kubejs:chromatic_protozoa", 1, 0.12),
      CultureBinItemChance("kubejs:useless_bacteria", 2, 0.68),
      CultureBinItemChance("kubejs:useless_bacteria", 2, 0.36)
    ]
  }).id("dut_create:get_chormatic")
  //烈焰支原体
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 100,
    "requirements": [
      CultureBinDimension("minecraft:the_nether"),
      CultureBinPlateInput({ "fuel": true, display: { Name: '{"translate":"kubejs.item.culture.fuel","italic":false}' } }),
      CultureBinEmptyPlate,
      CultureBinItemChance("kubejs:blaze_mycoplasma", 1, 0.48)
    ]
  }).id("dut_create:get_blaze")
  //蓝焰衣原体
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 180,
    "requirements": [
      CultureBinDimension("minecraft:the_nether"),
      CultureBinPlateInput({ "super_fuel": true, display: { Name: '{"translate":"kubejs.item.culture.super_fuel","italic":false}' } }),
      CultureBinEmptyPlate,
      CultureBinItemChance("kubejs:blaze_chlamydia", 1, 0.08),
      CultureBinItemChance("kubejs:blaze_mycoplasma", 1, 0.78),
      CultureBinItemChance("kubejs:blaze_mycoplasma", 2, 0.12)
    ]
  }).id("dut_create:get_blue_blaze")
  //幽匿催发体
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 120,
    "requirements": [
      {
        "type": "custommachinery:biome",
        "filter": ["minecraft:deep_dark"],
        "blacklist": false
      },
      CultureBinPlateInput({ "biomass": true, display: { Name: '{"translate":"kubejs.item.culture.biomass","italic":false}' } }),
      CultureBinEmptyPlate,
      CultureBinItemChance("minecraft:sculk_catalyst", 1, 0.28),
      CultureBinItemChance("minecraft:sculk_catalyst", 2, 0.18),
      CultureBinItemChance("minecraft:sculk_vein", 1, 0.36),
      CultureBinItemChance("kubejs:useless_bacteria", 3, 0.48)
    ]
  }).id("dut_create:get_sculk")
  //谐振原虫
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 120,
    "requirements": [
      {
        "type": "custommachinery:biome",
        "filter": ["ad_astra:orbit"],
        "blacklist": false
      },
      CultureBinPlateInput({ "exp": true, display: { Name: '{"translate":"kubejs.item.culture.exp","italic":false}' } }),
      CultureBinEmptyPlate,
      CultureBinItemChance("kubejs:resonant_bacteria", 1, 0.28),
      CultureBinItemChance("kubejs:useless_bacteria", 1, 0.36),
      CultureBinItemChance("kubejs:useless_bacteria", 2, 0.88)
    ]
  }).id("dut_create:get_resonant")
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
  }).id("dut_create:get_blaze_wart")
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
  }).id("dut_create:get_mycetozoan")
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
  }).id("dut_create:get_mycetozoan_from_radiation")

})