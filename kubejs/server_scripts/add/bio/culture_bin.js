//生产配方
ServerEvents.recipes(event => {
  //
  //event.custom().id("dut_create:")
  //event.custom().id("dut_create:")
  //event.custom().id("dut_create:")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 30,
    "requirements": [
      CultureBinItemInput("iceandfire:stymphalian_bird_feather", 2),
      CultureBinItemInput("ad_astra:cheese_block", 1),
      CultureBinItemChance("iceandfire:stymphalian_skull", 2, 1),
      CultureBinFluid("kubejs:muriatic_acid", "input", 500),
    ]
  }).id("dut_create:culture_bin/stymphalian_skull")
  //冰
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 10,
    "requirements": [
      CultureBinItemInput("minecraft:ice", 1),
      CultureBinFluid("minecraft:water", "output", 1000),
    ]
  }).id("dut_create:culture_bin/ice")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 10,
    "requirements": [
      CultureBinItemInput("minecraft:packed_ice", 1),
      CultureBinFluid("minecraft:water", "output", 9000)
    ]
  }).id("dut_create:culture_bin/packed_ice")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 20,
    "requirements": [
      CultureBinItemInput("minecraft:blue_ice", 1),
      CultureBinItemChance("minecraft:blue_ice", 1, 1),
      CultureBinItemChance("minecraft:packed_ice", 1, 1)
    ]
  }).id("dut_create:culture_bin/blue_ice")
  //牛奶
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 20,
    "requirements": [
      CultureBinItemInput("kubejs:useless_bacteria", 1),
      CultureBinItemChance("kubejs:useless_bacteria", 1, 1),
      CultureBinFluid("minecraft:milk", "output", 9000),
      CultureBinItemNBT("input", "kubejs:matrix_2", 1, '{matrix:[[[-1,1],[1,0]],[[-1,1],[-1,-1]],[[3,-1],[-1,-3]]]}'),
      CultureBinItemNBT("output", "kubejs:matrix_2", 1, '{matrix:[[[-1,1],[1,0]],[[-1,1],[-1,-1]],[[3,-1],[-1,-3]]],RGB:[[[-1,1],[1,0]],[[-1,1],[-1,-1]],[[3,-1],[-1,-3]]]}'),
    ]
  }).id("dut_create:culture_bin/milk")
  //魂质
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 120,
    "requirements": [
      CultureBinItemInput("iceandfire:ectoplasm", 6),
      CultureBinItemInput("create:refined_radiance", 1),
      CultureBinItemChance("iceandfire:ghost_ingot", 1, 1)
    ]
  }).id("dut_create:culture_bin/ghost_ingot")

  //
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinFluid("kubejs:muriatic_acid", "input", 2000),
      CultureBinFluidNBT("create:potion", "input", 2000, { Bottle: "REGULAR", Potion: "minecraft:mundane" }),
      CultureBinItemInput("#iceandfire:scales/dragon/ice", 1),
      CultureBinItemChance("iceandfire:shiny_scales", 3, 1),
      CultureBinFluid("kubejs:pressurized_steam", "output", 4000)
    ]
  }).id("dut_create:culture_bin/ice_dragon/steam")

  //冰龙培养
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 240,
    "requirements": [
      CultureBinDimension(["minecraft:overworld", "ad_astra:earth_orbit"]),
      CultureBinFluidNBT("create:potion", "output", 2000, { Bottle: "REGULAR", Potion: "minecraft:mundane" }),
      CultureBinItemInput("#dut_create:ice_dragonegg", 1),
      CultureBinItemInput("iceandfire:dragon_meal", 8),
      CultureBinItemInput("#forge:plates/gold", 1),
      CultureBinItemChance('iceandfire:dragonscales_silver', 24, 1),
    ]
  }).id("dut_create:culture_bin/ice_dragon/scales")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 240,
    "requirements": [
      CultureBinDimension(["minecraft:overworld", "ad_astra:earth_orbit"]),
      CultureBinFluidNBT("create:potion", "output", 2000, { Bottle: "REGULAR", Potion: "minecraft:mundane" }),
      CultureBinItemInput("#dut_create:ice_dragonegg", 1),
      CultureBinItemInput("iceandfire:dragon_meal", 8),
      CultureBinItemInput("#forge:plates/iron", 1),
      CultureBinItemChance('iceandfire:dragonbone', 18, 1)
    ]
  }).id("dut_create:culture_bin/ice_dragon/bones")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 240,
    "requirements": [
      CultureBinDimension(["minecraft:overworld", "ad_astra:earth_orbit"]),
      CultureBinFluidNBT("create:potion", "output", 2000, { Bottle: "REGULAR", Potion: "minecraft:mundane" }),
      CultureBinItemInput("#dut_create:ice_dragonegg", 1),
      CultureBinItemInput("iceandfire:dragon_meal", 8),
      CultureBinItemInput("#forge:plates/copper", 1),
      CultureBinItemChance('iceandfire:ice_dragon_heart', 2, 1),
      CultureBinItemChance('iceandfire:ice_dragon_flesh', 8, 1)
    ]
  }).id("dut_create:culture_bin/ice_dragon/flesh")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 240,
    "requirements": [
      CultureBinDimension(["minecraft:overworld", "ad_astra:earth_orbit"]),
      CultureBinFluidNBT("create:potion", "output", 2000, { Bottle: "REGULAR", Potion: "minecraft:mundane" }),
      CultureBinItemInput("#dut_create:ice_dragonegg", 1),
      CultureBinItemInput("iceandfire:dragon_meal", 8),
      CultureBinItemInput("#forge:plates/tin", 1),
      CultureBinItemChance('iceandfire:ice_dragon_blood', 9, 1)
    ]
  }).id("dut_create:culture_bin/ice_dragon/blood")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 240,
    "requirements": [
      CultureBinDimension(["minecraft:overworld", "ad_astra:earth_orbit"]),
      CultureBinFluidNBT("create:potion", "output", 2000, { Bottle: "REGULAR", Potion: "minecraft:mundane" }),
      CultureBinFluid("kubejs:slime_colloid", "input", 250),
      CultureBinItemInput("#iceandfire:scales/dragon/ice", 8),
      CultureBinItemInput("iceandfire:ice_dragon_blood", 3),
      CultureBinItemInput('iceandfire:ice_dragon_heart', 1),
      CultureBinItemInput('iceandfire:ice_dragon_flesh', 4),
      CultureBinItemInput("iceandfire:dragon_meal", 8),
      CultureBinItemChance('iceandfire:dragonegg_silver', 3, 1)
    ]
  }).id("dut_create:culture_bin/ice_dragon/egg")

  //泥炭原虫
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinItemInput("#dut_create:moon_solid", 1),
      CultureBinFluid("kubejs:carbon_dioxide", "input", 2000),
      CultureBinFluid("kubejs:oxygen", "output", 2000),
      CultureBinItemInput("kubejs:peat_protozoa", 1),
      CultureBinItemChance("minecraft:coal", 8, 1),
      CultureBinItemChance("kubejs:peat_protozoa", 1, 1)
    ]
  }).id("dut_create:culture_bin/peat/coal_from_co2")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinDimension("ad_astra:moon"),
      CultureBinFluid("kubejs:carbon_dioxide", "input", 2000),
      CultureBinFluid("kubejs:oxygen", "output", 2000),
      CultureBinItemInput("kubejs:peat_protozoa", 1),
      CultureBinItemChance("minecraft:coal", 8, 1),
      CultureBinItemChance("kubejs:peat_protozoa", 1, 1)
    ]
  }).id("dut_create:culture_bin/peat/coal_from_co2_moon")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinDimension(["dut:slimeria","dut:slimeria_orbit"]),
      CultureBinItemInput("minecraft:charcoal", 4),
      CultureBinFluid("kubejs:carbon_dioxide", "input", 2000),
      CultureBinFluid("kubejs:oxygen", "output", 2000),
      CultureBinItemInput("kubejs:peat_protozoa", 1),
      CultureBinItemChance("minecraft:coal", 8, 1),
      CultureBinItemChance("minecraft:mud", 4, 1),
      CultureBinItemChance("kubejs:peat_protozoa", 1, 1)
    ]
  }).id("dut_create:culture_bin/peat/coal_from_co2_slimeria")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinItemInput("minecraft:packed_mud", 8),
      CultureBinItemInput("minecraft:charcoal", 8),
      CultureBinItemInput("kubejs:peat_protozoa", 1),
      CultureBinItemChance("minecraft:coal", 8, 1),
      CultureBinItemChance("minecraft:mud", 8, 1),
      CultureBinItemChance("kubejs:peat_protozoa", 1, 1)
    ]
  }).id("dut_create:culture_bin/peat/coal")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinFluid("minecraft:water", "input", 500),
      CultureBinItemInput("minecraft:mud", 8),
      CultureBinItemInput("kubejs:peat_protozoa", 1),
      CultureBinItemChance("minecraft:packed_mud", 8, 1),
      CultureBinItemChance("kubejs:peat_protozoa", 1, 1)
    ]
  }).id("dut_create:culture_bin/peat/packed_mud")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 40,
    "requirements": [
      CultureBinFluid("minecraft:water", "input", 500),
      CultureBinItemInput("minecraft:packed_mud", 8),
      CultureBinItemInput("kubejs:peat_protozoa", 1),
      CultureBinItemChance("minecraft:charcoal", 6, 1),
      CultureBinItemChance("kubejs:peat_protozoa", 1, 1)
    ]
  }).id("dut_create:culture_bin/peat/charcoal")
  //酵母
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 80,
    "requirements": [
      CultureBinDimension("ad_astra:moon"),
      CultureBinFluid("kubejs:polymer", "output", 250),
      CultureBinItemInput("kubejs:empty_can", 8),
      CultureBinItemInput("kubejs:yeast", 1),
      CultureBinItemChance("create:andesite_alloy", 4, 1),
      CultureBinItemChance("kubejs:yeast", 1, 1),
      CultureBinItemChance("kubejs:yeast", 1, 0.25)
    ]
  }).id("dut_create:culture_bin/yeast/recycle_plastic")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 80,
    "requirements": [
      CultureBinFluid("minecraft:water", "input", 300),
      CultureBinFluid("createdieselgenerators:ethanol", "output", 1500),
      CultureBinItemInput("minecraft:sugar", 6),
      CultureBinItemInput("kubejs:yeast", 1),
      CultureBinItemChance("kubejs:yeast", 1, 1)
    ]
  }).id("dut_create:culture_bin/yeast/ferment_sugar_yeast")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinFluid("minecraft:water", "input", 500),
      CultureBinFluid("kubejs:carbon_dioxide", "output", 500),
      CultureBinItemInput("#dut_create:fermentable", 8),
      CultureBinItemInput("kubejs:yeast", 1),
      CultureBinItemChance("kubejs:yeast", 1, 1),
      CultureBinItemChance("kubejs:yeast", 1, 0.25),
      CultureBinItemChance("minecraft:sugar", 12, 1)
    ]
  }).id("dut_create:culture_bin/yeast/ferment_sugar_from_fermentable")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinFluid("minecraft:water", "input", 250),
      CultureBinFluid("kubejs:carbon_dioxide", "output", 250),
      CultureBinItemInput('minecraft:sweet_berries', 24),
      CultureBinItemInput("kubejs:yeast", 1),
      CultureBinItemChance("kubejs:yeast", 1, 1),
      CultureBinItemChance("minecraft:sugar", 6, 1)
    ]
  }).id("dut_create:culture_bin/yeast/ferment_sugar_from_berries")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 80,
    "requirements": [
      CultureBinFluid("minecraft:water", "input", 300),
      CultureBinFluid("kubejs:carbon_dioxide", "output", 500),
      CultureBinItemInput("create:wheat_flour", 8),
      CultureBinItemInput("kubejs:yeast", 1),
      CultureBinItemChance("kubejs:yeast", 1, 1),
      CultureBinItemChance("kubejs:yeast", 1, 0.25),
      CultureBinItemChance("minecraft:sugar", 10, 1),
    ]
  }).id("dut_create:culture_bin/yeast/ferment_sugar_from_yeast1")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 80,
    "requirements": [
      CultureBinFluid("kubejs:saline_water", "input", 500),
      CultureBinFluid("createaddition:seed_oil", "output", 1000),
      CultureBinItemInput("kubejs:yeast", 1),
      CultureBinItemInput("minecraft:sugar", 6),
      CultureBinItemChance("kubejs:yeast", 1, 1)
    ]
  }).id("dut_create:culture_bin/yeast/ferment_plantoil_from_yeast")
  //乳酪月藻
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 120,
    "requirements": [
      CultureBinFluid("minecraft:milk", "input", 250),
      CultureBinItemInput("kubejs:salt", 4),
      CultureBinItemInput("kubejs:cheese_moonalgae", 1),
      CultureBinItemInput("#dut_create:moon_solid", 1),
      CultureBinItemChance("ad_astra:cheese", 12, 1),
      CultureBinItemChance("kubejs:cheese_moonalgae", 1, 1),
    ]
  }).id("dut_create:culture_bin/cheese_moonalgae/cheese")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 80,
    "requirements": [
      CultureBinDimension("ad_astra:moon"),
      CultureBinFluid("minecraft:milk", "input", 250),
      CultureBinItemInput("kubejs:salt", 2),
      CultureBinItemInput("kubejs:cheese_moonalgae", 1),
      CultureBinItemChance("ad_astra:cheese", 8, 1),
      CultureBinItemChance("kubejs:cheese_moonalgae", 3, 1),
      CultureBinItemChance("kubejs:cheese_moonalgae", 2, 0.5)
    ]
  }).id("dut_create:culture_bin/cheese_moonalgae/cheese_in_moon")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinFluid("kubejs:nitrogen_dioxide", "input", 1000),
      CultureBinFluid("kubejs:nitrogen", "output", 500),
      CultureBinItemInput("ad_astra:cheese", 3),
      CultureBinItemInput("kubejs:cheese_moonalgae", 1),
      CultureBinItemInput("#dut_create:moon_solid", 1),
      CultureBinItemChance("kubejs:cheese_moonalgae", 1, 1)
    ]
  }).id("dut_create:culture_bin/cheese_moonalgae/nitrogen")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinDimension("ad_astra:moon"),
      CultureBinFluid("vintageimprovements:sulfuric_acid", "input", 500),
      CultureBinFluid("minecraft:milk", "input", 2000),
      CultureBinFluid("kubejs:refined_oil", "output", 500),
      CultureBinItemInput("ad_astra:cheese_block", 5)
    ]
  }).id("dut_create:culture_bin/cheese_moonalgae/refined_oil_in_moon")
  //粘菌
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinFluid("kubejs:polymer", "input", 250),
      CultureBinFluid("create_things_and_misc:slime", "output", 1500),
      CultureBinItemInput("kubejs:salt", 3),
      CultureBinItemInput("kubejs:mycetozoan", 1),
      CultureBinItemChance("kubejs:mycetozoan", 1, 1),
      CultureBinItemChance("kubejs:mycetozoan", 1, 0.125)
    ]
  }).id("dut_create:culture_bin/mycetozoan/slime")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 80,
    "requirements": [
      CultureBinBiome("ad_astra:orbit"),
      CultureBinFluid("create_things_and_misc:slime", "input", 1000),
      CultureBinFluid("kubejs:slime_colloid", "output", 500),
      CultureBinItemInput("kubejs:tin_nugget", 3),
      CultureBinItemInput("kubejs:mycetozoan", 1),
      CultureBinItemChance("kubejs:mycetozoan", 1, 1)
    ]
  }).id("dut_create:culture_bin/mycetozoan/slime_colloid_from_tin")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 120,
    "requirements": [
      CultureBinFluid("create_things_and_misc:slime", "input", 1000),
      CultureBinFluid("kubejs:slime_colloid", "output", 750),
      CultureBinItemInput("kubejs:aluminite_powder", 1),
      CultureBinItemInput("kubejs:mycetozoan", 1),
      CultureBinItemChance("kubejs:mycetozoan", 1, 1)
    ]
  }).id("dut_create:culture_bin/mycetozoan/slime_colloid")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinBiome("ad_astra:orbit"),
      CultureBinFluid("kubejs:oxygen", "output", 1000),
      CultureBinItemInput("minecraft:sugar", 4),
      CultureBinItemInput("kubejs:diorite_alloy", 4),
      CultureBinItemInput("kubejs:mycetozoan", 1),
      CultureBinItemChance("kubejs:mycetozoan", 1, 1),
      CultureBinItemChance("create:andesite_alloy", 4, 1)
    ]
  }).id("dut_create:culture_bin/mycetozoan/oxygen")
  //谐振原虫
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 20,
    "requirements": [
      CultureBinBiome('ad_astra:orbit'),
      CultureBinFluid("kubejs:hydrogen", "input", 4000),
      CultureBinFluid("kubejs:carbon_dioxide", "input", 1000),
      CultureBinFluid("kubejs:natural_gas", "output", 1000),
      CultureBinItemInput("kubejs:resonant_bacteria", 1),
      CultureBinItemChance("kubejs:resonant_bacteria", 1, 0.75)
    ]
  }).id("dut_create:culture_bin/resonant_bacteria/natural_gas")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 80,
    "requirements": [
      CultureBinBiome('ad_astra:orbit'),
      CultureBinFluid("kubejs:muriatic_acid", "input", 4000),
      CultureBinFluid("kubejs:chlorine", "output", 2000),
      CultureBinFluid("kubejs:hydrogen", "output", 2000),
      CultureBinItemInput("kubejs:resonant_bacteria", 1),
      CultureBinItemInput("#dut_create:moon_solid", 8),
      CultureBinItemChance("kubejs:resonant_bacteria", 1, 1)
    ]
  }).id("dut_create:culture_bin/resonant_bacteria/chlorine")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinBiome('ad_astra:orbit'),
      CultureBinFluid("kubejs:polymer", "input", 2000),
      CultureBinFluid("kubejs:duraplas", "output", 2000),
      CultureBinItemInput("kubejs:salt", 12),
      CultureBinItemInput("kubejs:resonant_bacteria", 1),
      CultureBinItemInput("kubejs:blaze_chlamydia", 1)
    ]
  }).id("dut_create:culture_bin/resonant_bacteria/duraplas")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 40,
    "requirements": [
      CultureBinBiome('ad_astra:orbit'),
      CultureBinFluid("minecraft:water", "input", 4000),
      CultureBinFluid("kubejs:hydrogen", "output", 4000),
      CultureBinFluid("kubejs:oxygen", "output", 2000),
      CultureBinItemInput("kubejs:resonant_bacteria", 1),
      CultureBinItemChance("kubejs:resonant_bacteria", 1, 1)
    ]
  }).id("dut_create:culture_bin/resonant_bacteria/water")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinBiome('ad_astra:orbit'),
      CultureBinFluid("kubejs:saline_water", "input", 4000),
      CultureBinFluid("kubejs:hydrogen", "output", 4000),
      CultureBinFluid("kubejs:chlorine", "output", 2000),
      CultureBinFluid("kubejs:caustic_soda", "output", 2000),
      CultureBinItemInput("kubejs:resonant_bacteria", 1)
    ]
  }).id("dut_create:culture_bin/resonant_bacteria/saline_water")

  //蓝焰衣原体
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 20,
    "requirements": [
      CultureBinItemInput("kubejs:blaze_chlamydia", 4),
      CultureBinItemInput("iceandfire:fire_dragon_blood", 4),
      CultureBinItemChance("kubejs:blaze_chlamydia", 8, 1)
    ]
  }).id("dut_create:culture_bin/blaze_chlamydia_from_dragon_blood")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinItemInput("kubejs:blaze_mycoplasma", 12),
      CultureBinItemNBT("input", "kubejs:matrix_2", 1, '{ matrix: [ [ [ 0, 1 ], [ 1, 0 ] ], [ [ -1, 3 ], [ 3, -1 ] ], [ [ 3, -1 ], [ -1, 3 ] ] ] }'),
      CultureBinItemChance("kubejs:blaze_chlamydia", 12, 1)
    ]
  }).id("dut_create:culture_bin/blaze_chlamydia_from_matrix")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 120,
    "requirements": [
      CultureBinFluid("kubejs:slime_colloid", "input", 500),
      CultureBinFluid("kubejs:electro_hydro", "input", 500),
      CultureBinItemInput("iceandfire:stymphalian_bird_feather", 16),
      CultureBinItemChance("kubejs:bronze_triangle", 8, 1)
    ]
  }).id("dut_create:culture_bin/blaze_chlamydia/bronze_triangle")

  //魅影真菌
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinItemInput("kubejs:phantom_fungus", 1),
      CultureBinItemInput("kubejs:useless_bacteria", 3),
      CultureBinItemInput("minecraft:dragon_breath", 2),
      CultureBinItemNBT("input", "kubejs:matrix_2", 1, '{matrix:[[[1,3],[-3,1]],[[-7,-11],[11,7]],[[13,17],[-17,-13]]]}'),
      CultureBinItemNBT("output", "kubejs:matrix_2", 1, '{RGB:[[[0,0],[0,0]]],matrix:[[[0,0],[0,0]]]}'),
      CultureBinItemChance("kubejs:phantom_fungus", 2, 1)
    ]
  }).id("dut_create:culture_bin/phantom_fungus/matrix")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinFluid("kubejs:covariant_heat", "input", 500),
      CultureBinItemInput("kubejs:phantom_fungus", 1),
      CultureBinItemInput("kubejs:matrix_2", 8),
      CultureBinItemChance("kubejs:phantom_fungus", 1, 1),
      {
        "type": "custommachinery:loot_table",
        "table": "dut:random_matrix"
      }
    ],
    "jei": [
      CultureBinFluid("kubejs:covariant_heat", "input", 500),
      CultureBinItemInput("kubejs:phantom_fungus", 1),
      CultureBinItemInput("kubejs:matrix_2", 8),
      CultureBinItemChance("kubejs:phantom_fungus", 1, 1),
      CultureBinItemNBT("output", "kubejs:matrix_2", 8, '{RGB:"random",matrix:[[[-8,1],[0,3]],[[1,0],[8,-1]],[[-1,1],[1,6]]]}'),
    ]
  }).id("dut_create:culture_bin/phantom_fungus/random_matrix")
  //杂菌
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinItemInput("minecraft:sugar", 2),
      CultureBinItemInput("kubejs:useless_bacteria", 1),
      CultureBinItemNBT("input", "kubejs:matrix_2", 1, '{matrix:[[[1,-1],[0,1]],[[0,1],[0,0]],[[0,0],[0,-1]]]}'),
      CultureBinItemNBT("output", "kubejs:matrix_2", 1, '{RGB:[[[0,0],[0,0]]],matrix:[[[0,0],[0,0]]]}'),
      CultureBinItemChance("kubejs:useless_bacteria", 9, 1)
    ]
  }).id("dut_create:culture_bin/useless_bacteria/matrix")
  //异彩原虫
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinFluid("kubejs:chromatic_waste", "input", 250),
      CultureBinItemInput("kubejs:chromatic_protozoa", 1),
      CultureBinItemNBT("input", "kubejs:matrix_2", 1, '{matrix:[[[1,0],[0,1]],[[0,1],[0,1]],[[1,0],[1,0]]]}'),
      CultureBinItemNBT("output", "kubejs:matrix_2", 1, '{RGB:[[[0,0],[0,0]]],matrix:[[[0,0],[0,0]]]}'),
      CultureBinItemChance("kubejs:chromatic_protozoa", 5, 1)
    ]
  }).id("dut_create:culture_bin/chromatic_protozoa/matrix")
  //异彩染色
  function chromaticDye(input, output, amount, dye) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:culture_bin",
      "time": 120,
      "requirements": [
        CultureBinDimension(["minecraft:overworld", "ad_astra:earth_orbit"]),
        CultureBinFluid("vintageimprovements:sulfuric_acid", "input", 50),
        CultureBinFluid("vintageimprovements:sulfur_dioxide", "output", 50),
        CultureBinItemInput("kubejs:chromatic_protozoa", 1),
        CultureBinItemInput("#forge:dyes/" + dye, 1),
        CultureBinItemInput(input, amount),
        CultureBinItemChance("kubejs:chromatic_protozoa", 1, 1),
        CultureBinItemChance(output, amount, 1)
      ]
    }).id("dut_create:culture_bin/chromatic_protozoa/dye/" + output.split(":")[1])
  }
  chromaticDye('#iceandfire:scales/dragon/ice', 'iceandfire:dragonscales_blue', 8, 'light_blue')
  chromaticDye('#iceandfire:scales/dragon/ice', 'iceandfire:dragonscales_sapphire', 8, 'blue')
  chromaticDye('#iceandfire:scales/dragon/ice', 'iceandfire:dragonscales_white', 8, 'white')
  chromaticDye('#iceandfire:scales/dragon/ice', 'iceandfire:dragonscales_silver', 8, 'light_gray')
  chromaticDye('#dut_create:ice_dragonegg', 'iceandfire:dragonegg_blue', 1, 'light_blue')
  chromaticDye('#dut_create:ice_dragonegg', 'iceandfire:dragonegg_sapphire', 1, 'blue')
  chromaticDye('#dut_create:ice_dragonegg', 'iceandfire:dragonegg_white', 1, 'white')
  chromaticDye('#dut_create:ice_dragonegg', 'iceandfire:dragonegg_silver', 1, 'light_gray')
  chromaticDye('#iceandfire:scales/dragon/fire', 'iceandfire:dragonscales_bronze', 8, 'brown')
  chromaticDye('#iceandfire:scales/dragon/fire', 'iceandfire:dragonscales_green', 8, 'green')
  chromaticDye('#iceandfire:scales/dragon/fire', 'iceandfire:dragonscales_gray', 8, 'gray')
  chromaticDye('#iceandfire:scales/dragon/fire', 'iceandfire:dragonscales_red', 8, 'red')
  chromaticDye('#dut_create:fire_dragonegg', 'iceandfire:dragonegg_bronze', 1, 'brown')
  chromaticDye('#dut_create:fire_dragonegg', 'iceandfire:dragonegg_green', 1, 'green')
  chromaticDye('#dut_create:fire_dragonegg', 'iceandfire:dragonegg_gray', 1, 'gray')
  chromaticDye('#dut_create:fire_dragonegg', 'iceandfire:dragonegg_red', 1, 'red')
  //烈焰疣
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinDimension(["minecraft:overworld", "ad_astra:earth_orbit"]),
      CultureBinFluid("kubejs:slime_colloid", "input", 250),
      CultureBinItemInput("kubejs:blaze_wart", 1),
      CultureBinItemInput("minecraft:soul_soil", 1),
      CultureBinItemChance("kubejs:blaze_wart", 1, 1),
      CultureBinItemChance("minecraft:soul_soil", 1, 1),
      CultureBinItemChance("iceandfire:ectoplasm", 6, 1)
    ]
  }).id("dut_create:culture_bin/ectoplasm")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 80,
    "requirements": [
      CultureBinDimension("dut:slimeria"),
      CultureBinFluid("kubejs:slime_colloid", "input", 1000),
      CultureBinItemInput("kubejs:blaze_wart", 1),
      CultureBinItemInput("kubejs:mycetozoan", 1),
      CultureBinItemChance("kubejs:blaze_wart", 1, 1),
      CultureBinItemChance("minecraft:slime_spawn_egg", 1, 1)
    ]
  }).id("dut_create:culture_bin/blaze_wart_slime_spawn_egg")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 80,
    "requirements": [
      CultureBinFluid("minecraft:water", "input", 1000),
      CultureBinItemInput("kubejs:blaze_wart", 1),
      CultureBinItemChance("kubejs:blaze_wart", 1, 1),
      CultureBinItemChance("kubejs:blaze_wart", 1, 0.125),
      CultureBinFluidNBT("create:potion", "output", 1000, { Bottle: "REGULAR", Potion: "minecraft:awkward" })
    ]
  }).id("dut_create:culture_bin/blaze_wart_awkward_potion")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinFluidNBT("create:potion", "input", 250, { Bottle: "REGULAR", Potion: "minecraft:awkward" }),
      CultureBinItemInput("kubejs:blaze_wart", 1),
      CultureBinItemChance("kubejs:blaze_wart", 1, 1),
      CultureBinItemInput("createaddition:biomass", 6),
      CultureBinItemInput("#forge:dyes/red", 1),
      CultureBinItemChance("minecraft:beef", 4, 1),
      CultureBinFluidNBT("create:potion", "output", 250, { Bottle: "REGULAR", Potion: "minecraft:thick" })
    ]
  }).id("dut_create:culture_bin/blaze_wart_beef")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinFluidNBT("create:potion", "input", 250, { Bottle: "REGULAR", Potion: "minecraft:awkward" }),
      CultureBinItemInput("kubejs:blaze_wart", 1),
      CultureBinItemChance("kubejs:blaze_wart", 1, 1),
      CultureBinItemInput("createaddition:biomass", 6),
      CultureBinItemInput("#forge:dyes/pink", 1),
      CultureBinItemChance("minecraft:porkchop", 5, 1),
      CultureBinFluidNBT("create:potion", "output", 250, { Bottle: "REGULAR", Potion: "minecraft:thick" })
    ]
  }).id("dut_create:culture_bin/blaze_wart_porkchop")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinFluidNBT("create:potion", "input", 250, { Bottle: "REGULAR", Potion: "minecraft:awkward" }),
      CultureBinItemInput("kubejs:blaze_wart", 1),
      CultureBinItemChance("kubejs:blaze_wart", 1, 1),
      CultureBinItemInput("createaddition:biomass", 3),
      CultureBinItemInput("#forge:dyes/white", 1),
      CultureBinItemChance("minecraft:cod", 4, 1),
      CultureBinFluidNBT("create:potion", "output", 250, { Bottle: "REGULAR", Potion: "minecraft:thick" })
    ]
  }).id("dut_create:culture_bin/blaze_wart_cod")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinFluidNBT("create:potion", "input", 250, { Bottle: "REGULAR", Potion: "minecraft:awkward" }),
      CultureBinItemInput("kubejs:blaze_wart", 1),
      CultureBinItemChance("kubejs:blaze_wart", 1, 1),
      CultureBinItemInput("createaddition:biomass", 3),
      CultureBinItemInput("minecraft:ink_sac", 1),
      CultureBinItemChance("minecraft:ink_sac", 6, 1),
      CultureBinFluidNBT("create:potion", "output", 250, { Bottle: "REGULAR", Potion: "minecraft:thick" })
    ]
  }).id("dut_create:culture_bin/blaze_wart_squid")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:culture_bin",
    "time": 60,
    "requirements": [
      CultureBinFluidNBT("create:potion", "input", 250, { Bottle: "REGULAR", Potion: "minecraft:awkward" }),
      CultureBinItemInput("kubejs:blaze_wart", 1),
      CultureBinItemChance("kubejs:blaze_wart", 1, 1),
      CultureBinItemInput("createaddition:biomass", 3),
      CultureBinItemInput("#forge:dyes/yellow", 1),
      CultureBinItemChance("minecraft:pufferfish", 4, 1),
      CultureBinFluidNBT("create:potion", "output", 250, { Bottle: "REGULAR", Potion: "minecraft:thick" })
    ]
  }).id("dut_create:culture_bin/blaze_wart_pufferfish")
})