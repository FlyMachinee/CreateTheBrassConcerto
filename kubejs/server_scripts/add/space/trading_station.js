ServerEvents.recipes(event => {
  const TradingStationStructure = {
    "type": "custommachinery:structure",
    "pattern": [
      [
        " AAA ",
        "FAHAF",
        " AAA "
      ],
      [
        "  F  ",
        "IJKJI",
        " C C "
      ],
      [
        "  V  ",
        " JmJ ",
        " DED "
      ],
      [
        "  Q  ",
        " QRQ ",
        "     "
      ],
      [
        "     ",
        "  R  ",
        "     "
      ],
      [
        "     ",
        "  K  ",
        "     "
      ],
      [
        "     ",
        "  T  ",
        "     "
      ]
    ],
    "keys": {
      "V": "#dut_create:storage",
      "I": "create:mechanical_pump",
      "A": "design_decor:gold_boiler_structure",
      "H": "design_decor:gold_boiler_large",
      "K": "design_decor:gold_boiler",
      "F": "design_decor:industrial_gold_block",
      "Q": "design_decor:diagonal_girder",
      "D": "design_decor:brass_lamp",
      "J": "create:encased_fluid_pipe",
      "T": "design_decor:andesite_floodlight",
      "R": "design_decor:copper_boiler",
      "C": "design_decor:stepped_lever",
      "E": "#dut_create:brass_funnel"
    },
    "jei": true
  }
  const TradingStationCommon = {
    "type": "custommachinery:fluid",
    "mode": "input",
    "tank": "fluid",
    "fluid": "kubejs:hydrofluid",
    "amount": 1
  }
  function TradingStationFluid(fluid, amount, mode) {
    return ({
      "type": "custommachinery:fluid",
      "mode": mode,
      "fluid": fluid,
      "amount": amount
    })
  }
  function TradingStationItem(item, amount, mode) {
    return ({
      "type": "custommachinery:item",
      "mode": mode,
      "item": item,
      "amount": amount
    })
  }
  function TradingStationFliter(item) {
    return ({
      "type": "custommachinery:item_filter",
      "ingredient": { "item": item },
      "slot": "filter"
    })
  }

  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:trading_station",
    "time": 1,
    "error": true,
    "hidden": true,
    "priority": 1,
    "requirements": [
      TradingStationStructure,
      {
        "type": "custommachinery:fluid",
        "mode": "output",
        "fluid": "kubejs:hydrofluid",
        "amount": 1000
      }
    ]
  }).id("dut_create:trading_station/fluid")
  //硬币存入与取出
  function TradingStationCoin(i) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:trading_station",
      "time": 1,
      "error": true,
      "hidden": false,
      "priority": 1,
      "requirements": [
        TradingStationCommon,
        TradingStationFluid("kubejs:slime_coin", i.value, "output"),
        TradingStationItem(i.id, 1, "input")
      ],
    }).id("dut_create:trading_station/coin/in/" + i.id.split(":")[1])
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:trading_station",
      "time": 1,
      "error": true,
      "hidden": true,
      "priority": 2,
      "requirements": [
        TradingStationCommon,
        TradingStationFluid("kubejs:slime_coin", i.value * 64, "output"),
        TradingStationItem(i.id, 64, "input")
      ],
    }).id("dut_create:trading_station/coin/in_fast/" + i.id.split(":")[1])
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:trading_station",
      "time": 1,
      "error": true,
      "hidden": false,
      "priority": 3,
      "requirements": [
        TradingStationCommon,
        TradingStationFliter(i.id),
        TradingStationFluid("kubejs:slime_coin", i.value, "input"),
        TradingStationItem(i.id, 1, "output")
      ],
    }).id("dut_create:trading_station/coin/out/" + i.id.split(":")[1])
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:trading_station",
      "time": 1,
      "error": true,
      "hidden": true,
      "priority": 4,
      "requirements": [
        TradingStationCommon,
        TradingStationFliter(i.id),
        TradingStationFluid("kubejs:slime_coin", i.value * 64, "input"),
        TradingStationItem(i.id, 64, "output")
      ],
    }).id("dut_create:trading_station/coin/out_fast/" + i.id.split(":")[1])
  }
  const CoinType = [
    { "id": "kubejs:coin_copper", "value": 1 },
    { "id": "kubejs:coin_iron", "value": 10 },
    { "id": "kubejs:coin_gold", "value": 100 },
    { "id": "kubejs:coin_diamond", "value": 1000 },
    { "id": "kubejs:coin_emerald", "value": 10000 },
    { "id": "kubejs:coin_netherite", "value": 100000 },
  ]
  for (let i of CoinType) {
    TradingStationCoin(i)
  }
  //售卖物品&流体
  function TradingStationSellItem(inputItem) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:trading_station",
      "time": 1,
      "error": true,
      "priority": 1,
      "requirements": [
        TradingStationCommon,
        TradingStationFluid("kubejs:slime_coin", inputItem.value, "output")
      ].concat([TradingStationItem(inputItem.id, inputItem.amount, "input")]),
    }).id("dut_create:trading_station/selling/item/" + inputItem.id.split(":")[1])
  }
  function TradingStationSellFluid(inputFluid) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:trading_station",
      "time": 1,
      "error": true,
      "priority": 1,
      "requirements": [
        TradingStationCommon,
        TradingStationFluid("kubejs:slime_coin", inputFluid.value, "output")
      ].concat([TradingStationFluid(inputFluid.id, inputFluid.amount, "input")]),
    }).id("dut_create:trading_station/selling/fluid/" + inputFluid.id.split(":")[1])
  }
  let ItemSold = [
    { "id": "minecraft:iron_block", "amount": 64, "value": 45 },
    { "id": "minecraft:copper_block", "amount": 64, "value": 45 },
    { "id": "minecraft:gold_block", "amount": 64, "value": 45 },
    { "id": "minecraft:redstone_block", "amount": 64, "value": 75 },
    { "id": "minecraft:glowstone", "amount": 64, "value": 75 },
    { "id": "create:andesite_alloy_block", "amount": 64, "value": 75 },
    { "id": "create:brass_block", "amount": 64, "value": 75 },
    { "id": "minecraft:slime_block", "amount": 64, "value": 60 },
    { "id": "minecraft:netherite_block", "amount": 64, "value": 7500 },
    { "id": "ad_astra:steel_block", "amount": 64, "value": 13500 },
    { "id": "kubejs:tin_block", "amount": 64, "value": 45 },
    { "id": "create:experience_block", "amount": 64, "value": 45 },
    { "id": "minecraft:hay_block", "amount": 64, "value": 60 },
    { "id": "minecraft:mutton", "amount": 64, "value": 60 },
    { "id": "minecraft:chicken", "amount": 64, "value": 30 },
    { "id": "minecraft:porkchop", "amount": 64, "value": 60 },
    { "id": "minecraft:rabbit", "amount": 64, "value": 60 },
    { "id": "minecraft:beef", "amount": 64, "value": 60 },
    { "id": "minecraft:salmon", "amount": 256, "value": 30 },
    { "id": "minecraft:cod", "amount": 256, "value": 30 },
    { "id": "minecraft:tropical_fish", "amount": 256, "value": 30 },
    { "id": "minecraft:pufferfish", "amount": 256, "value": 45 },
    { "id": "minecraft:melon", "amount": 64, "value": 60 },
    { "id": "minecraft:pumpkin", "amount": 64, "value": 60 },
    { "id": "minecraft:honey_block", "amount": 64, "value": 60 },
    { "id": "minecraft:honeycomb_block", "amount": 64, "value": 60 },
    { "id": "createloveandwar:slime_resin_block", "amount": 64, "value": 300 },
    { "id": "createloveandwar:block_of_polymer", "amount": 64, "value": 300 },
    { "id": "createloveandwar:block_of_duraplas", "amount": 64, "value": 450 },
    { "id": "createloveandwar:tungsten_block", "amount": 64, "value": 12000 },
    { "id": "kubejs:mechanical_core", "amount": 64, "value": 16 },
    { "id": "kubejs:bearing", "amount": 64, "value": 24 },
    { "id": "kubejs:electric_gear", "amount": 64, "value": 128 },
    { "id": "kubejs:planetary_gear", "amount": 64, "value": 96 },
    { "id": "kubejs:differential", "amount": 64, "value": 896 },
    { "id": "create:precision_mechanism", "amount": 64, "value": 2048 },
    { "id": "kubejs:circuit_board", "amount": 64, "value": 128 },
    { "id": "kubejs:magenta_circuit_board", "amount": 64, "value": 1024 },
    { "id": "kubejs:lime_circuit_board", "amount": 64, "value": 3584 },
    { "id": "kubejs:cardan_joint", "amount": 64, "value": 2048 },
    { "id": "kubejs:radiator", "amount": 64, "value": 4096 },
    { "id": "kubejs:steel_parts_box", "amount": 64, "value": 32000 },
    { "id": "kubejs:brass_parts_box", "amount": 64, "value": 2048 },
    { "id": "kubejs:parts_box", "amount": 64, "value": 32000 },
    { "id": "kubejs:electro_hydro_capacitor", "amount": 16, "value": 40960 },
    { "id": 'create:tree_fertilizer', "amount": 64, "value": 640 },
    { "id": 'iceandfire:ice_dragon_blood', "amount": 64, "value": 8192 },
    { "id": 'iceandfire:fire_dragon_blood', "amount": 64, "value": 8192 },
    { "id": 'iceandfire:lightning_dragon_blood', "amount": 64, "value": 8192 },
    { "id": 'iceandfire:sapphire_block', "amount": 64, "value": 8000 },
    { "id": 'createbigcannons:nitropowder', "amount": 64, "value": 1024 },
    { "id": 'minecraft:sponge', "amount": 64, "value": 1024 },
    { "id": 'kubejs:productivity_module', "amount": 64, "value": 24576 },
    { "id": 'kubejs:productivity_module_2', "amount": 64, "value": 1024000 },
    { "id": 'minecraft:dragon_breath', "amount": 64, "value": 6400 },
    //{ "id": , "amount": , "value":  },
  ]
  const FluidSold = [
    { "id": "kubejs:nitrogen_fertilizer", "amount": 32000, "value": 4096 },
    { "id": "kubejs:lube_oil", "amount": 32000, "value": 640 },
    { "id": "kubejs:drilling_fluid", "amount": 32000, "value": 8192 },
    { "id": "kubejs:chromatic_waste", "amount": 32000, "value": 32768 },
    { "id": "kubejs:ammonia", "amount": 32000, "value": 2000 },
    { "id": "kubejs:cola_puree", "amount": 32000, "value": 32768 },
    { "id": "kubejs:aluminum", "amount": 32000, "value": 8192 },
    { "id": "kubejs:refined_oil", "amount": 32000, "value": 960 },
    { "id": "kubejs:chlorine", "amount": 32000, "value": 160 }
  ]
  if (Platform.isLoaded('farmersdelight')) {
    ItemSold = ItemSold.concat([
      { "id": "farmersdelight:beetroot_crate", "amount": 64, "value": 60 },
      { "id": "farmersdelight:cabbage_crate", "amount": 64, "value": 60 },
      { "id": "farmersdelight:tomato_crate", "amount": 64, "value": 60 },
      { "id": "farmersdelight:onion_crate", "amount": 64, "value": 60 },
      { "id": "farmersdelight:carrot_crate", "amount": 64, "value": 60 },
      { "id": "farmersdelight:potato_crate", "amount": 64, "value": 60 },
      { "id": "farmersdelight:rice_bag", "amount": 64, "value": 60 },
      { "id": "farmersdelight:straw_bale", "amount": 64, "value": 60 }
    ])
  }
  for (let i of ItemSold) {
    TradingStationSellItem(i)
  }
  for (let i of FluidSold) {
    TradingStationSellFluid(i)
  }
  //购买物品
  function TradingStationBuyItem(inputItem) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:trading_station",
      "time": 5,
      "error": true,
      "priority": 3,
      "requirements": [
        TradingStationCommon,
        TradingStationFliter(inputItem.id),
        TradingStationFluid("kubejs:slime_coin", inputItem.value, "input")
      ].concat([TradingStationItem(inputItem.id, inputItem.amount, "output")]),
    }).id("dut_create:trading_station/buying/item/" + inputItem.id.split(":")[1])
  }
  function TradingStationBuyFluid(inputFluid) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:trading_station",
      "time": 1,
      "error": true,
      "priority": 3,
      "requirements": [
        TradingStationCommon,
        TradingStationFliter(inputFluid.bucket),
        TradingStationFluid("kubejs:slime_coin", inputFluid.value, "input")
      ].concat([TradingStationFluid(inputFluid.id, inputFluid.amount, "output")]),
    }).id("dut_create:trading_station/buying/fluid/" + inputFluid.id.split(":")[1])
  }
  const ItemBuy = [
    { "id": "minecraft:red_mushroom_block", "amount": 1, "value": 100 },
    { "id": "minecraft:brown_mushroom_block", "amount": 1, "value": 100 },
    { "id": "minecraft:iron_block", "amount": 64, "value": 60 },
    { "id": "minecraft:copper_block", "amount": 64, "value": 60 },
    { "id": "minecraft:gold_block", "amount": 64, "value": 60 },
    { "id": "create:andesite_alloy_block", "amount": 64, "value": 100 },
    { "id": "create:brass_block", "amount": 64, "value": 100 },
    { "id": "kubejs:tin_block", "amount": 64, "value": 60 },
    { "id": "kubejs:large_fries", "amount": 64, "value": 240 },
    { "id": "iceandfire:dragon_meal", "amount": 64, "value": 400 },
    { "id": 'iceandfire:rotten_egg', "amount": 1, "value": 100 },
    { "id": "minecraft:ochre_froglight", "amount": 64, "value": 10000 },
    { "id": "minecraft:verdant_froglight", "amount": 64, "value": 10000 },
    { "id": "minecraft:pearlescent_froglight", "amount": 64, "value": 10000 },
    { "id": 'railways:track_monorail', "amount": 64, "value": 100 },
    { "id": 'railways:track_phantom', "amount": 64, "value": 1600 },
    { "id": 'storagedrawers:emerald_storage_upgrade', "amount": 8, "value": 100 },
    { "id": 'storagedrawers:void_upgrade', "amount": 16, "value": 100 },
    { "id": 'storagedrawers:controller', "amount": 1, "value": 100 },
    { "id": 'storagedrawers:compacting_drawers_3', "amount": 24, "value": 800 },
    { "id": 'sophisticatedbackpacks:netherite_backpack', "amount": 1, "value": 20000 },
    { "id": 'create_power_loader:andesite_chunk_loader', "amount": 1, "value": 160 },
    { "id": 'create_power_loader:brass_chunk_loader', "amount": 1, "value": 1600 },
    { "id": 'create:blaze_burner', "amount": 64, "value": 640 },
    { "id": 'iceandfire:dragonegg_red', "amount": 1, "value": 100000 },
    { "id": 'iceandfire:dragonegg_green', "amount": 1, "value": 100000 },
    { "id": 'iceandfire:dragonegg_bronze', "amount": 1, "value": 100000 },
    { "id": 'iceandfire:dragonegg_gray', "amount": 1, "value": 100000 },
    { "id": 'iceandfire:dragonegg_blue', "amount": 1, "value": 100000 },
    { "id": 'iceandfire:dragonegg_white', "amount": 1, "value": 100000 },
    { "id": 'iceandfire:dragonegg_sapphire', "amount": 1, "value": 100000 },
    { "id": 'iceandfire:dragonegg_silver', "amount": 1, "value": 100000 },
    { "id": 'iceandfire:dragonegg_electric', "amount": 1, "value": 100000 },
    { "id": 'iceandfire:dragonegg_amythest', "amount": 1, "value": 100000 },
    { "id": 'iceandfire:dragonegg_copper', "amount": 1, "value": 100000 },
    { "id": 'iceandfire:dragonegg_black', "amount": 1, "value": 100000 },
    { "id": 'creategbd:advanced_laser_turret', "amount": 1, "value": 8000 },
    { "id": 'createloveandwar:caseless_bullet', "amount": 64, "value": 1200 },
    { "id": 'createloveandwar:caseless_bullet_ap', "amount": 64, "value": 1200 },
    { "id": 'createloveandwar:caseless_bullet_soft', "amount": 64, "value": 1200 },
    { "id": 'createloveandwar:gyrojet_basic', "amount": 32, "value": 1200 },
    { "id": 'createloveandwar:gyrojet_heatseeker_top', "amount": 16, "value": 1200 },
    { "id": 'createloveandwar:gyrojet_heatseeker', "amount": 16, "value": 1200 },
    { "id": 'createloveandwar:gyrojet_pen', "amount": 32, "value": 1200 },
    { "id": 'createloveandwar:gyrojet_he', "amount": 16, "value": 1200 },
    { "id": 'createloveandwar:grenade_round_he', "amount": 4, "value": 1200 },
    { "id": 'createloveandwar:grenade_round_buckshot', "amount": 4, "value": 1200 },
    { "id": 'createloveandwar:black_powder_cartridge', "amount": 32, "value": 1200 },
    { "id": 'createloveandwar:buckshot_shell', "amount": 32, "value": 1200 },
    { "id": 'createloveandwar:slug_shell', "amount": 32, "value": 1200 },
    { "id": 'createloveandwar:flechette_shell', "amount": 32, "value": 1200 },
    { "id": 'createloveandwar:explosive_shell', "amount": 16, "value": 1200 },
    { "id": 'createloveandwar:artillery_shell', "amount": 1, "value": 1200 },
    { "id": 'createloveandwar:artillery_shell_ap', "amount": 1, "value": 1200 },
    { "id": 'createloveandwar:artillery_shell_he', "amount": 1, "value": 1200 },
    { "id": 'kubejs:creative_motor_blueprint', "amount": 1, "value": 6400000 },
    { "id": 'minecraft:sculk_catalyst', "amount": 1, "value": 64800 },
    { "id": 'createbigcannons:cannon_crafting_wand', "amount": 1, "value": 64800000 },
    { "id": 'kubejs:tin_hard_disk', "amount": 1, "value": 800 },
    { "id": 'kubejs:aluminum_hard_disk', "amount": 1, "value": 12000 },
    { "id": 'kubejs:brass_parts_box', "amount": 64, "value": 2048 },
    { "id": 'kubejs:fuel_tank', "amount": 64, "value": 18000 },
    { "id": 'kubejs:radiator', "amount": 64, "value": 4096 },
    { "id": 'kubejs:emergency_industrial_platform', "amount": 1, "value": 240 },
    { "id": 'kubejs:emergency_industrial_platform_dark', "amount": 1, "value": 240 },
    { "id": 'kubejs:emergency_industrial_platform_lime', "amount": 1, "value": 240 },
    { "id": 'kubejs:emergency_industrial_platform_block', "amount": 1, "value": 240 },
    { "id": 'kubejs:emergency_industrial_platform_dark_block', "amount": 1, "value": 240 },
    { "id": 'kubejs:emergency_industrial_platform_lime_block', "amount": 1, "value": 240 },
    { "id": "kubejs:bearing", "amount": 64, "value": 24 },
    { "id": "kubejs:electric_gear", "amount": 64, "value": 192 },
    { "id": "kubejs:planetary_gear", "amount": 64, "value": 96 },
    { "id": "kubejs:circuit_board", "amount": 64, "value": 192 },
    { "id": "kubejs:magenta_circuit_board", "amount": 64, "value": 1536 },
    { "id": "kubejs:slime_cola_can", "amount": 64, "value": 640 },
    //{ "id": , "amount": , "value":  },
  ]
  const FluidBuy = [
    { "id": "createdieselgenerators:diesel", "amount": 4000, "value": 160, "bucket": 'createdieselgenerators:diesel_bucket' },
    { "id": "createdieselgenerators:biodiesel", "amount": 4000, "value": 400, "bucket": 'createdieselgenerators:biodiesel_bucket' },
    { "id": "createdieselgenerators:crude_oil", "amount": 4000, "value": 40, "bucket": 'createdieselgenerators:crude_oil_bucket' },
    { "id": "create:honey", "amount": 4000, "value": 400, "bucket": 'create:honey_bucket' },
    { "id": "kubejs:caustic_soda", "amount": 4000, "value": 80, "bucket": 'kubejs:caustic_soda_bucket' },
    { "id": "kubejs:carbon_dioxide", "amount": 4000, "value": 80, "bucket": 'kubejs:carbon_dioxide_bucket' },
    //{ "id": , "amount": , "value": ,"bucket": },
  ]
  for (let i of ItemBuy) {
    TradingStationBuyItem(i)
  }
  for (let i of FluidBuy) {
    TradingStationBuyFluid(i)
  }
})