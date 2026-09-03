//需要显示结构的多方块机器
let multiblock_display_list = [
  'kubejs:blueprint_builder',
  'kubejs:trading_station',
  "kubejs:large_difference_engine",
  "kubejs:electron_tube_computer",
  "kubejs:space_elevator_controller",
  "kubejs:launch_pad_controller",
  "kubejs:satellite_station",
  'kubejs:airdrop_station',
  "kubejs:condenser",
  "kubejs:hydropress",
  "kubejs:blasting_compressor",
  "kubejs:alloy_furnace",
  "kubejs:huge_crusher",
  "kubejs:shaft_furnace",
  "kubejs:infinity_fetching_pool",
  "kubejs:electrolytic_cell",
  'kubejs:electro_hydro_resonant_tower',
  "kubejs:assembling_machine",
  "kubejs:construction_station"
]
let multiblock_list = [
  "kubejs:condenser",
  "kubejs:hydropress",
  "kubejs:blasting_compressor",
  "kubejs:alloy_furnace",
  "kubejs:huge_crusher",
  "kubejs:electron_tube_computer",
  "kubejs:assembling_machine",
  "kubejs:infinity_fetching_pool",
  "kubejs:electrolytic_cell",
  "kubejs:shaft_furnace",
  "kubejs:construction_station",
  "kubejs:satellite_station",
  "kubejs:large_difference_engine",
  'kubejs:airdrop_station',
  "kubejs:launch_pad_controller",
  'kubejs:trading_station',
  'kubejs:electro_hydro_resonant_tower',
  "kubejs:space_elevator_controller",
]
let switchable_platform_list = [
  "kubejs:emergency_industrial_platform_lime",
  "kubejs:emergency_industrial_platform_lime_block",
  "kubejs:emergency_industrial_platform",
  "kubejs:emergency_industrial_platform_block",
  "kubejs:emergency_industrial_platform_dark",
  "kubejs:emergency_industrial_platform_dark_block"
]
ServerEvents.tags('item', event => {
  event.add('dut_create:seed', ['minecraft:wheat_seeds','minecraft:beetroot_seeds','minecraft:carrot','minecraft:potato'])
  event.add('dut_create:switchable_platform', switchable_platform_list)
  event.remove("forge:plates/silver", ["vintageimprovements:silver_sheet"])
  event.remove("forge:storage_blocks/silver", 'iceandfire:silver_block')
  event.remove("forge:nuggets/silver", 'iceandfire:silver_nugget')
  event.remove("forge:ingots/silver", 'iceandfire:silver_ingot')
  event.remove("forge:plates/zinc", ['createadditon:zinc_sheet', "vintageimprovements:zinc_sheet"])
  event.remove("forge:storage_blocks/zinc", 'create:zinc_block')
  event.remove("forge:nuggets/zinc", 'create:zinc_nugget')
  event.remove("forge:ingots/zinc", 'create:zinc_ingot')
  event.remove("create:stone_types/asurine", 'create:asurine')
  event.add("create:stone_types/asurine", ["kubejs:new_asurine"])
  event.remove("railways:internal/nuggets/zinc_nuggets", ["create:zinc_nugget"])
  event.add("railways:internal/nuggets/zinc_nuggets", ["kubejs:tin_nugget"])
  //需要显示结构的多方块机器
  event.add('dut_create:multiblock', multiblock_list)
  event.add('dut_create:multiblock_display', multiblock_display_list)
  //steel
  event.add("dut_create:make_steel", [
    "create:limestone", "minecraft:bone_meal"
  ])
  //
  event.add("dut_create:beltcasing", [
    "create:brass_casing", "create:andesite_casing"
  ])
  //
  event.add("dut_create:drawers", [
    "storagedrawers:spruce_full_drawers_1", "storagedrawers:spruce_full_drawers_2", "storagedrawers:spruce_full_drawers_4", "fluiddrawerslegacy:fluiddrawer", "fluiddrawerslegacy:fluiddrawer_2", "fluiddrawerslegacy:fluiddrawer_4", "storagedrawers:framed_compacting_drawers_3", "storagedrawers:framed_controller", "storagedrawers:framed_compacting_drawers_2", "storagedrawers:compacting_drawers_3", "storagedrawers:compacting_drawers_2", "storagedrawers:framed_full_drawers_1", "storagedrawers:framed_full_drawers_2", "storagedrawers:framed_full_drawers_4"
  ])
  //网络操作符
  event.add('dut_create:net_operator', ["beyonddimensions:net_manager_inviter", "beyonddimensions:net_member_inviter", "beyonddimensions:net_destroyer", "beyonddimensions:net_gifter"])
  //背包
  event.add('dut_create:backpack', ['sophisticatedbackpacks:backpack', 'sophisticatedbackpacks:copper_backpack', 'sophisticatedbackpacks:iron_backpack', 'sophisticatedbackpacks:gold_backpack'])
  //微生物
  event.add('dut_create:microbio', ['kubejs:yeast', 'kubejs:chromatic_protozoa', 'kubejs:peat_protozoa', 'kubejs:resonant_bacteria', 'kubejs:useless_bacteria', 'kubejs:blaze_wart', 'kubejs:cheese_moonalgae', 'kubejs:mycetozoan', 'kubejs:phantom_fungus', 'kubejs:myxomycetes_halophila'])
  //鱼
  event.add('dut_create:fish', ["minecraft:cod", "minecraft:salmon", "minecraft:tropical_fish", "minecraft:pufferfish"])
  //铜块
  event.add('dut_create:copper_block', ["minecraft:copper_block", "minecraft:exposed_copper", "minecraft:weathered_copper", "minecraft:oxidized_copper", "minecraft:waxed_copper_block", "minecraft:waxed_exposed_copper", "minecraft:waxed_weathered_copper", "minecraft:waxed_oxidized_copper"])
  //高炉
  event.add('dut_create:shaft_furnace', ['kubejs:blaze_chlamydia'])
  //钻井可用钻头
  event.remove('createoreexcavation:drills', ['createoreexcavation:diamond_drill'])
  event.add('createoreexcavation:drills', ['create:mechanical_arm'])
  //钻头
  event.add('dut_create:drills', ['createoreexcavation:drill', 'createoreexcavation:netherite_drill'])
  event.add('dut_create:tier_2_drills', ['createoreexcavation:netherite_drill'])
  //装卸机
  event.add('dut_create:fluid_container', [
    "minecraft:bucket",
    "createandesiteabound:fluid_vessel",
    "ad_astra:gas_tank",
    "ad_astra:large_gas_tank",
    "#ad_astra:space_suit_items"
  ])
  //储液抽屉
  event.add('dut_create:fluiddrawers', ["fluiddrawerslegacy:fluiddrawer", "fluiddrawerslegacy:fluiddrawer_half", "fluiddrawerslegacy:fluiddrawer_2", "fluiddrawerslegacy:fluiddrawer_2_half", "fluiddrawerslegacy:fluiddrawer_4", "fluiddrawerslegacy:fluiddrawer_4_half"])
  //无限取液池
  event.add('dut_create:infinity_fluid_bucket', ["kubejs:saline_water_bucket", "kubejs:cryogen_bucket", "minecraft:lava_bucket", "minecraft:water_bucket", "create:honey_bucket"])
  //地球仪
  event.add('dut_create:earth_globe', ["ad_astra:earth_globe", "supplementaries:globe", "supplementaries:globe_sepia"])
  //导航仪
  event.add('dut_create:navigate_data', [
    'kubejs:navigate_data_earth', 'kubejs:navigate_data_earth_orbit',
    'kubejs:navigate_data_moon', 'kubejs:navigate_data_moon_orbit',
    //'kubejs:navigate_data_mars', 'kubejs:navigate_data_mars_orbit', 
    //'kubejs:navigate_data_venus', 'kubejs:navigate_data_venus_orbit', 
    //'kubejs:navigate_data_mercury', 'kubejs:navigate_data_mercury_orbit', 
    //'kubejs:navigate_data_glacio', 'kubejs:navigate_data_glacio_orbit', 
    'kubejs:navigate_data_slimeria', 'kubejs:navigate_data_slimeria_orbit'
  ])
  event.add('dut_create:data_disk', ["kubejs:brass_hard_disk", "kubejs:aluminum_hard_disk", "kubejs:tin_hard_disk"])
  event.add('dut_create:no_enchantment', ["#dut_create:battery", "kubejs:carrier_rocket", "kubejs:scanner", "kubejs:space_elevator", "#dut_create:data_disk"])
  //
  event.add("minecraft:planks", ["createdieselgenerators:chip_wood_block"])
  event.add("minecraft:logs_that_burn", ["createdieselgenerators:chip_wood_block"])
  event.add("forge:stripped_wood", ["createdieselgenerators:chip_wood_block"])
  event.add("forge:ground_beef", ["farmersdelight:minced_beef"])
  event.add("forge:beef_patty", ["farmersdelight:beef_patty", "gourmet:beef_patty"])
  event.add("forge:cooked_bacon", ["gourmet:cooked_bacon"])
  event.add("forge:tools/pickaxes", ["kubejs:steel_impact_drill"])
  event.add("forge:tools/axes", ["kubejs:steel_impact_drill"])
  event.add("forge:tools/axe", ["kubejs:steel_impact_drill"])
  event.add("forge:tools/shovels", ["kubejs:steel_impact_drill"])
  event.add("forge:tools", ["kubejs:steel_impact_drill"])
  event.add("forge:storage_blocks/nethersteel", ['createbigcannons:nethersteel_block'])
  event.add("forge:storage_blocks/aluminum", ['kubejs:aluminum_block'])
  //Love&War
  event.remove("forge:ingots/steel", ["createloveandwar:steel_ingot"])
  event.remove("forge:plates/steel", ["createloveandwar:steel_sheet"])
  event.remove("forge:nuggets/steel", ["createloveandwar:steel_nugget"])
  //发酵专用
  event.add('dut_create:fermentable', ["#forge:dough", "minecraft:bread", "minecraft:potato", "minecraft:baked_potato", "minecraft:apple", "minecraft:beetroot", "farmersdelight:rice", 'kubejs:red_mushroom_cap_piece', 'kubejs:brown_mushroom_cap_piece', 'kubejs:stem_silk'])
  //月壤
  event.add('dut_create:moon_solid', ['ad_astra:moon_sand', 'ad_astra:moon_stone', 'ad_astra:moon_deepslate', 'ad_astra:moon_cobblestone'])
  //大齿轮
  event.add('dut_create:cogwheel_large', ['create:large_cogwheel', 'design_decor:industrial_gear_large'])
  //齿轮
  event.add('dut_create:cogwheel', ['create:cogwheel', 'design_decor:industrial_gear'])
  //龙息方块
  event.add('iceandfire:charred_blocks', ['iceandfire:ash'])
  event.add('iceandfire:frozen_blocks', ['iceandfire:dragon_ice', 'iceandfire:dragon_ice_spikes'])
  event.add('iceandfire:crackled_blocks', ['iceandfire:crackled_gravel'])
  //火龙鳞片
  event.add('dut_create:fire_dragonscales', ['iceandfire:dragonscales_red', 'iceandfire:dragonscales_green', 'iceandfire:dragonscales_bronze', 'iceandfire:dragonscales_gray'])
  //冰龙鳞片
  event.add('dut_create:ice_dragonscales', ['iceandfire:dragonscales_blue', 'iceandfire:dragonscales_white', 'iceandfire:dragonscales_silver', 'iceandfire:dragonscales_sapphire'])
  //雷龙鳞片
  event.add('dut_create:lightning_dragonscales', ['iceandfire:dragonscales_electric', 'iceandfire:dragonscales_copper', 'iceandfire:dragonscales_black', 'iceandfire:dragonscales_amythest'])
  //龙蛋
  event.add('dut_create:dragonegg', ['#dut_create:fire_dragonegg', '#dut_create:ice_dragonegg', '#dut_create:lightning_dragonegg'])
  //火龙蛋
  event.add('dut_create:fire_dragonegg', ['iceandfire:dragonegg_red', 'iceandfire:dragonegg_green', 'iceandfire:dragonegg_bronze', 'iceandfire:dragonegg_gray'])
  //冰龙蛋
  event.add('dut_create:ice_dragonegg', ['iceandfire:dragonegg_blue', 'iceandfire:dragonegg_white', 'iceandfire:dragonegg_silver', 'iceandfire:dragonegg_sapphire'])
  //雷龙蛋
  event.add('dut_create:lightning_dragonegg', ['iceandfire:dragonegg_electric', 'iceandfire:dragonegg_copper', 'iceandfire:dragonegg_black', 'iceandfire:dragonegg_amythest'])
  //电池
  event.add('dut_create:battery', ['kubejs:chargeable_battery', 'kubejs:disposable_battery'])
  //无土栽培用
  event.add('dut_create:flowers', [])
  //自定义冲压模板
  event.add('vintageimprovements:curving_heads', ['minecraft:netherite_upgrade_smithing_template', "minecraft:slime_ball"])
  //原油桶
  event.add('dut_create:crude_oil_bucket', ['createloveandwar:crude_oil_bucket', 'createdieselgenerators:crude_oil_bucket', 'ad_astra:oil_bucket'])
  event.add('dut_create:buckets/crude_oil', ['createloveandwar:crude_oil_bucket', 'createdieselgenerators:crude_oil_bucket', 'ad_astra:oil_bucket'])
  event.add('dut_create:ingots/duraplas', 'kubejs:duraplas_ingot')
  event.add('dut_create:ingots/polymer', 'kubejs:polymer_ingot')
  event.add('dut_create:plates/duraplas', 'kubejs:duraplas_sheet')
  event.add('dut_create:plates/polymer', 'kubejs:polymer_sheet')
  event.add('forge:plates/silicon', 'kubejs:silicon_plate')
  //event.add('forge:gems/sulfur', 'createloveandwar:sulphur')
  event.add('forge:gems/sulfur', 'kubejs:sulphur')

  event.add('minecraft:wooden_slabs', 'createdieselgenerators:chip_wood_slab')


  event.add('forge:ingots/chromatic', ['create:chromatic_compound', 'create_dd:chromatic_compound'])
  event.add('forge:ingots/refined_radiance', ['create:refined_radiance', 'create_dd:refined_radiance'])
  event.add('forge:ingots/shadow_steel', ['create:shadow_steel', 'create_dd:shadow_steel'])

  event.add('forge:plates', [
    'kubejs:tin_sheet',
    'kubejs:industrial_iron_sheet',
    'kubejs:aluminum_sheet',
    'kubejs:silicon_plate', 
    'kubejs:polymer_sheet', 
    'kubejs:duraplas_sheet'
  ])
  event.add('forge:nuggets/industrial_iron', ['kubejs:industrial_iron_nugget'])
  event.add('forge:ingots/industrial_iron', ['kubejs:industrial_iron_ingot'])
  event.add('forge:plates/industrial_iron', ['kubejs:industrial_iron_sheet'])
  event.add('forge:storage_blocks/industrial_iron', ['create:industrial_iron_block'])
  event.remove('design_decor:industrial_iron', ['create:industrial_iron_block'])
  event.remove('forge:storage_blocks/industrial_iron', ['design_decor:industrial_plating_block'])
  event.add('forge:nuggets/tin', ['kubejs:tin_nugget'])
  event.add('forge:ingots/tin', ['kubejs:tin_ingot'])
  event.add('forge:plates/tin', ['kubejs:tin_sheet'])
  event.add('forge:storage_blocks/tin', ['kubejs:tin_block'])
  event.add('forge:nuggets/cast_iron', ['createbigcannons:cast_iron_nugget'])
  event.add('forge:ingots/cast_iron', ['createbigcannons:cast_iron_ingot'])
  event.add('forge:plates/cast_iron', ['vintageimprovements:cast_iron_sheet'])
  event.add('forge:storage_blocks/cast_iron', ['createbigcannons:cast_iron_block'])
  event.add('forge:ingots/aluminum', ['kubejs:aluminum_ingot'])
  event.add('forge:plates/aluminum', ['kubejs:aluminum_sheet'])
  //event.add('forge:nuggets/', ['kubejs:_nugget'])
  //event.add('forge:ingots/', ['kubejs:_ingot'])
  //event.add('forge:plates/', ['kubejs:_sheet'])
  //event.add('forge:storage_blocks/', ['kubejs:_block'])
  event.remove('minecraft:flowers', ['farmersdelight:wild_beetroots', 'farmersdelight:wild_cabbages', 'farmersdelight:wild_onions', 'farmersdelight:wild_carrots', 'farmersdelight:wild_tomatoes', 'farmersdelight:wild_rice', 'farmersdelight:wild_potatoes'])
  event.remove('minecraft:small_flowers', ['farmersdelight:wild_beetroots', 'farmersdelight:wild_cabbages', 'farmersdelight:wild_onions', 'farmersdelight:wild_carrots', 'farmersdelight:wild_tomatoes', 'farmersdelight:wild_rice', 'farmersdelight:wild_potatoes'])
  event.add('dut_create:belt', ['minecraft:dried_kelp', 'kubejs:rubber'])
  //event.add('dut_create:ingots/duraplas', 'createloveandwar:duraplas_ingot')
  //event.add('dut_create:ingots/polymer', 'createloveandwar:polymer_ingot')
  //event.add('dut_create:plates/duraplas', 'createloveandwar:duraplas_sheet')
  //event.add('dut_create:plates/polymer', 'createloveandwar:polymer_sheet')
  event.add('forge:fermentable', ['minecraft:beetroot', 'minecraft:sugar', 'farmersdelight:rice', 'createaddition:biomass', 'minecraft:sweet_berries'])
})
ServerEvents.tags('block', event => {

  //需要显示结构的多方块机器

  event.add('dut_create:industrial_platform', switchable_platform_list.concat(["kubejs:emergency_industrial_platform_space"]))
  event.add('dut_create:multiblock_display', multiblock_display_list)

  event.add('dut_create:hydropress_piston', ["create:railway_casing", "design_decor:industrial_plating_block"])

  event.add('dut_create:uncasingable', ["create:brass_encased_shaft", "create:andesite_encased_shaft"])
  event.add('dut_create:encasable', ['create:shaft', 'create:belt'])
  //抽屉
  event.add("dut_create:drawers", [
    "storagedrawers:spruce_full_drawers_1", "storagedrawers:spruce_full_drawers_2", "storagedrawers:spruce_full_drawers_4", "fluiddrawerslegacy:fluiddrawer", "fluiddrawerslegacy:fluiddrawer_2", "fluiddrawerslegacy:fluiddrawer_4", "storagedrawers:framed_controller", "storagedrawers:framed_compacting_drawers_3", "storagedrawers:framed_compacting_drawers_2", "storagedrawers:compacting_drawers_3", "storagedrawers:compacting_drawers_2", "storagedrawers:framed_full_drawers_1", "storagedrawers:framed_full_drawers_2", "storagedrawers:framed_full_drawers_4"
  ])
  event.add("dut_create:drawers1", [
    "storagedrawers:spruce_full_drawers_1", "storagedrawers:spruce_full_drawers_2", "storagedrawers:spruce_full_drawers_4", "storagedrawers:framed_compacting_drawers_3", "storagedrawers:framed_compacting_drawers_2", "storagedrawers:compacting_drawers_3", "storagedrawers:compacting_drawers_2", "storagedrawers:framed_full_drawers_1", "storagedrawers:framed_full_drawers_2", "storagedrawers:framed_full_drawers_4"
  ])
  event.remove('ad_astra:destroyed_in_space', ["minecraft:mushroom_stem", "minecraft:red_mushroom_block", "minecraft:brown_mushroom_block"])
  event.add('create:non_movable', [
    'ad_astra:iron_pillar',
    'ad_astra:steel_pillar',
    '#dut_create:drawers',
    'ad_astra:desh_fluid_pipe',
    'ad_astra:ostrum_fluid_pipe',
    'ad_astra:fluid_pipe_duct',
    'sophisticatedbackpacks:backpack',
    'sophisticatedbackpacks:copper_backpack',
    'sophisticatedbackpacks:iron_backpack',
    'sophisticatedbackpacks:gold_backpack',
    'sophisticatedbackpacks:diamond_backpack',
    'sophisticatedbackpacks:netherite_backpack'])
  event.add('minecraft:mineable/pickaxe', 'snow_block')
  event.add('minecraft:mineable/axe', 'snow_block')
  event.add('minecraft:mineable/hoe', 'snow_block')
  //铜块
  event.add('dut_create:copper_block', ["minecraft:copper_block", "minecraft:exposed_copper", "minecraft:weathered_copper", "minecraft:oxidized_copper", "minecraft:waxed_copper_block", "minecraft:waxed_exposed_copper", "minecraft:waxed_weathered_copper", "minecraft:waxed_oxidized_copper"])
  //流体抽屉
  event.add('dut_create:fluiddrawers', ["fluiddrawerslegacy:fluiddrawer", "fluiddrawerslegacy:fluiddrawer_2", "fluiddrawerslegacy:fluiddrawer_4"])
  //可挖掘
  event.add('dut_create:breakable', ["#minecraft:mineable/pickaxe", "#minecraft:mineable/axe", "#minecraft:mineable/shovel", "#minecraft:mineable/hoe", "#create:wrench_pickup", "#forge:glass", "#forge:glass_panes"])
  //平台替换
  event.add('dut_create:platform', [
    "minecraft:air",
    "minecraft:void_air",
    "minecraft:cave_air",
    "#minecraft:sculk_replaceable_world_gen",
    "#minecraft:replaceable_by_trees",
    "#minecraft:moss_replaceable",
    "minecraft:water",
    "minecraft:lava"
  ])
  event.add("dut_create:supplemantaries", [
    'supplementaries:timber_cross_brace', 'supplementaries:timber_brace', 'supplementaries:timber_frame', 'supplementaries:pedestal', 'supplementaries:stone_lamp', 'supplementaries:blackstone_lamp', 'supplementaries:deepslate_lamp', 'supplementaries:end_stone_lamp', 'supplementaries:pulley_block', 'supplementaries:clock_block', 'supplementaries:notice_board', 'supplementaries:goblet', 'supplementaries:hourglass', 'supplementaries:globe_sepia', 'supplementaries:globe', 'supplementaries:cage', 'supplementaries:jar', 'supplementaries:item_shelf', 'supplementaries:planter', 'supplementaries:safe', 'supplementaries:statue', 'supplementaries:flower_box', 'supplementaries:doormat', 'supplementaries:sack', 'supplementaries:urn', 'supplementaries:cog_block', 'supplementaries:turn_table', 'supplementaries:spring_launcher', 'supplementaries:lock_block', 'supplementaries:crystal_display', 'supplementaries:speaker_block', 'supplementaries:bellows', 'supplementaries:relayer', 'supplementaries:redstone_illuminator', 'supplementaries:netherite_door', 'supplementaries:gold_door', 'supplementaries:gold_trapdoor', 'supplementaries:netherite_trapdoor', 'supplementaries:faucet', "#supplementaries:trapped_presents", "#supplementaries:presents", "#supplementaries:flags", "#supplementaries:candle_holders"
  ])
  event.add("dut_create:minecrafts", [
    'minecraft:soul_lantern', 'minecraft:lantern', 'minecraft:beehive', 'minecraft:lightning_rod', 'minecraft:jukebox', 'minecraft:note_block', '#minecraft:anvil', 'minecraft:redstone_lamp', 'minecraft:fletching_table', 'minecraft:enchanting_table', 'minecraft:smithing_table', 'minecraft:cartography_table', 'minecraft:grindstone', 'minecraft:loom', 'minecraft:brewing_stand', 'minecraft:cauldron', 'minecraft:furnace', 'minecraft:blast_furnace', 'minecraft:smoker', 'minecraft:chain', 'minecraft:crafting_table', 'minecraft:bell', 'minecraft:beacon', 'minecraft:respawn_anchor'
  ])
  event.add("dut_create:framed_drawers", [
    'storagedrawers:framed_compacting_drawers_2', 'storagedrawers:framed_compacting_drawers_3', 'storagedrawers:framed_controller', 'storagedrawers:framed_trim', 'storagedrawers:framed_framed_controller_io', 'storagedrawers:framed_full_drawers_1', 'storagedrawers:framed_full_drawers_2', 'storagedrawers:framed_full_drawers_4',
  ])
  //扳手
  event.add('create:wrench_pickup', ["#dut_create:drawers1", "#dut_create:minecrafts", "#dut_create:supplemantaries", "enchantinginfuser:enchanting_infuser", "enchantinginfuser:advanced_enchanting_infuser", 'storagedrawers:controller', '#storagedrawers:trim', "ad_astra:desh_fluid_pipe", "ad_astra:fluid_pipe_duct", "ad_astra:cable_duct", "ad_astra:ostrum_fluid_pipe", "ad_astra:oxygen_sensor", "ad_astra:oxygen_distributor", "ad_astra:coal_generator", "ad_astra:desh_cable", "ad_astra:steel_cable", "ad_astra:cryo_freezer", "ad_astra:gravity_normalizer", "design_decor:iron_railing", "design_decor:zinc_railing", "design_decor:copper_railing", "design_decor:brass_railing", "design_decor:copper_lamp", "design_decor:brass_lamp", "design_decor:zinc_lamp", "design_decor:metal_support", "design_decor:diagonal_metal_support", "design_decor:stepped_lever", "design_decor:breaker_switch", "design_decor:copper_light", "design_decor:brass_light", "design_decor:zinc_light", "kubejs:condenser", "kubejs:hydropress", "kubejs:alloy_furnace", "kubejs:huge_crusher", "kubejs:shaft_furnace", "kubejs:infinity_fetching_pool", "kubejs:emergency_industrial_platform", "kubejs:culture_bin", "kubejs:carbon_electrode", "kubejs:electrolytic_cell", "kubejs:steam_generator", 'kubejs:battery_slot', "kubejs:assemblying_machine", "farmersdelight:basket", "create:schematicannon", "create:schematic_table", "create_things_and_misc:sprinkler", "create_things_and_misc:sprinkleron", "beyonddimensions:net_interface", "storagedrawers:framed_trim", "storagedrawers:framed_controller", "storagedrawers:framed_controller_io", 'createoreexcavation:sample_drill'
  ])

})
//陨石
ServerEvents.tags('block', event => {
  //幽匿扩散
  event.add('minecraft:sculk_replaceable', ["ad_astra:conglomerate", "minecraft:packed_mud", "minecraft:clay", "ad_astra:sky_block", "#minecraft:sculk_replaceable_world_gen", "#minecraft:replaceable_by_trees", "#minecraft:moss_replaceable", "#minecraft:stone_bricks", "#minecraft:wool", 'ad_astra:moon_sand', 'ad_astra:moon_stone', 'ad_astra:moon_deepslate', 'ad_astra:moon_cobblestone', "minecraft:obsidian", '#minecraft:terracotta', '#createbigcannons:concrete', '#minecraft:mineable/shovel', 'minecraft:sandstone'])
})
//史莱利亚
ServerEvents.tags('block', event => {
  //青蛙生成
  event.add('minecraft:frogs_spawnable_on', ["ad_astra:conglomerate", "minecraft:packed_mud", "minecraft:clay"])
  event.add('dut:slimeria_ore_replace', ["ad_astra:conglomerate", "minecraft:packed_mud", "ad_astra:sky_block", "minecraft:stone", "minecraft:deepslate", "create:cut_granite", "create:cut_tuff", "create:cut_ochrum", "create:cut_scoria", "create:cut_deepslate", "create:cut_dripstone", "create:cut_crimsite"])
  //苔藓可替换
  event.add('dut:moss_replace', ["ad_astra:conglomerate", "minecraft:packed_mud"])
  //
})
//多方块机器
ServerEvents.tags('block', event => {
  event.add('dut_create:container_fluid', [
    "create:fluid_tank",
    "create_connected:fluid_vessel",
    "storagedrawers:controller",
    "#dut_create:fluiddrawers"
  ])
  event.add('dut_create:platform', ["kubejs:emergency_industrial_platform_lime", "kubejs:emergency_industrial_platform_lime_block", "kubejs:emergency_industrial_platform", "kubejs:emergency_industrial_platform_block", "kubejs:emergency_industrial_platform_dark", "kubejs:emergency_industrial_platform_dark_block", "kubejs:emergency_industrial_platform_space"])
  //菌柄 
  event.add('dut_create:stem', ['minecraft:crimson_stem', 'minecraft:warped_stem', 'minecraft:mushroom_stem', 'ad_astra:strophar_stem', 'ad_astra:aeronos_stem'])
  //菌盖
  event.add('dut_create:cap', ['minecraft:nether_wart_block', 'minecraft:warped_wart_block', 'minecraft:red_mushroom_block', 'minecraft:brown_mushroom_block', 'ad_astra:strophar_cap', 'ad_astra:aeronos_cap'])
  //巨型粉碎机
  event.add('dut_create:green_container', ['design_decor:green_container', 'storagedrawers:controller', "#dut_create:drawers"])
  event.add('dut_create:red_container', ['storagedrawers:controller', 'design_decor:red_container', "#dut_create:drawers"])

  //交互容器
  event.add('dut_create:storage', ['#dut_create:container', '#dut_create:drawer_controller', '#dut_create:item_vault', 'create_connected:inventory_access_port', "#dut_create:drawers"])
  //保险库
  event.add('dut_create:item_vault', ['create:item_vault', 'create_connected:item_silo'])
  //集装箱
  event.add('dut_create:container', ['design_decor:green_container', 'design_decor:red_container', 'design_decor:blue_container'])
  //控制器
  event.add('dut_create:drawer_controller', ['storagedrawers:controller'])
  //传动杆
  event.add('dut_create:shaft', ['create:shaft', 'create:andesite_encased_shaft', 'create:brass_encased_shaft'])
  //金属梁
  event.add('dut_create:metal_girder', ['create:metal_girder', 'create:metal_girder_encased_shaft'])
  //反转齿轮箱
  event.add('dut_create:gearshift', ['create:gearshift', 'create_connected:inverted_gearshift'])
  //燃烧室
  event.add('dut_create:burnner', ['create:blaze_burner', 'createaddition:liquid_blaze_burner'])
  //漏斗
  event.add('dut_create:funnel', ['create:brass_funnel', 'create:brass_belt_funnel', 'create:andesite_funnel', 'create:andesite_belt_funnel'])
  //安山漏斗
  event.add('dut_create:andesite_funnel', ['create:andesite_funnel', 'create:andesite_belt_funnel'])
  //黄铜漏斗
  event.add('dut_create:brass_funnel', ['create:brass_funnel', 'create:brass_belt_funnel'])
  //安山漏斗
  event.add('dut_create:andesite_funnel', ['create:andesite_funnel', 'create:andesite_belt_funnel'])
  //流体管道
  event.add('dut_create:pipe', ['create:fluid_pipe', 'create:encased_fluid_pipe'])
  //
})
ServerEvents.tags('worldgen/biome', event => {
  event.add('dut_create:has_lily', ['dut:nitrolithic_shore'])
  event.add('dut_create:is_slimeria', ['dut:thalassgel', 'dut:chromatic_agros', 'dut:nitrolithic_shore', 'dut:spore_jungle'])
  event.add('dut_create:clay', ['dut:chromatic_agros'])
  event.add('dut_create:stone', ["#minecraft:is_overworld", '#dut_create:is_slimeria'])
  event.add('dut_create:yeast', '#minecraft:is_overworld')
  event.add('dut_create:moon', 'ad_astra:lunar_wastelands')
  event.add('dut_create:sulphur', ["#minecraft:is_overworld", 'ad_astra:lunar_wastelands', '#minecraft:is_nether', 'dut:spore_jungle'])
  event.add('dut_create:burnable_ice', ["#minecraft:is_deep_ocean", '#dut_create:moon'])
})
ServerEvents.tags('fluid', event => {
  event.remove('minecraft:water', ["createaddition:bioethanol"])
  event.add('dut_create:make_lube', ["vintageimprovements:sulfur_dioxide", "kubejs:hydrogen"])
  event.add('dut_create:fries_oil', ['kubejs:refined_oil', '#forge:crude_oil', '#forge:lube_oil', '#forge:gasoline', '#forge:biodiesel', '#forge:kerosene', '#forge:diesel'])
  event.add('dut_create:carrier_rocket_fuel', ['#forge:biodiesel', '#forge:diesel'])
  event.add('dut_create:superheated_fuel', ["kubejs:lube_oil", "kubejs:ammonia", "createdieselgenerators:biodiesel"])
  event.add('dut_create:tier_1_fuel', ['kubejs:natural_gas', '#forge:biodiesel', '#forge:diesel'])
  //ad_astra
  event.remove('ad_astra:destroyed_in_space', ["minecraft:lantern"])
  event.add('ad_astra:destroyed_in_space', ["minecraft:campfire", "minecraft:fire"])
  event.removeAll('ad_astra:fuel')
  event.add('ad_astra:fuel', 'kubejs:rocket_fuel')
  event.remove('ad_astra:hydrogen', ['ad_astra:hydrogen'])
  event.add('ad_astra:hydrogen', 'kubejs:hydrogen')
  event.add('ad_astra:oxygen', 'kubejs:oxygen')

  event.add('dut_create:plantoil', 'createaddition:seed_oil')
  event.add('forge:plantoil', 'createaddition:seed_oil')
  event.remove('forge:plantoil', 'createdieselgenerators:plant_oil')
  //event.add('forge:biodiesel', 'createaddition:bioethanol')
  event.add('forge:kerosene', 'createloveandwar:kerosene')
  event.add('forge:crude_oil', 'createloveandwar:crude_oil')
  event.add('forge:crude_oil', 'createdieselgenerators:crude_oil')
  event.add('forge:crude_oil', 'ad_astra:oil')
  event.add('forge:hydrogen', ['ad_astra:hydrogen', 'kubejs:hydrogen'])
  event.add('forge:oxygen', ['ad_astra:oxygen', 'kubejs:oxygen'])
  event.add('forge:natural_gas', 'kubejs:natural_gas')
  event.add('forge:lube_oil', 'kubejs:lube_oil')
  event.add('forge:molten_steel', 'kubejs:steel')
  event.add('dut_create:refined_oil', 'kubejs:refined_oil')
  event.add('dut_create:duraplas', 'kubejs:duraplas')
  event.add('dut_create:polymer', 'kubejs:polymer')
  event.add('dut_create:ethylene', 'kubejs:ethylene')
  //超级加热液体
  event.add('dut_create:superheated', ["kubejs:lube_oil", "kubejs:ammonia", "createdieselgenerators:biodiesel"])
  //可无限液体
  event.add('create:bottomless/allow', ['kubejs:saline_water', 'minecraft:milk', 'kubejs:cryogen'])
})
ServerEvents.tags("item", e => {
  // 给各类刀提供农夫乐事兼容-by jason
  e.add("farmersdelight:tools/knives", [
    "nethersdelight:iron_machete",
    "nethersdelight:golden_machete",
    "nethersdelight:diamond_machete",
    "nethersdelight:netherite_machete"
  ])
  e.add("sliceanddice:allowed_tools", [
    "nethersdelight:iron_machete",
    "nethersdelight:golden_machete",
    "nethersdelight:diamond_machete",
    "nethersdelight:netherite_machete"
  ])
  e.add("farmersdelight:straw_harvesters", [
    "nethersdelight:iron_machete",
    "nethersdelight:golden_machete",
    "nethersdelight:diamond_machete",
    "nethersdelight:netherite_machete"
  ])
  e.add("create:upright_on_deployer", [
    "nethersdelight:iron_machete",
    "nethersdelight:golden_machete",
    "nethersdelight:diamond_machete",
    "nethersdelight:netherite_machete"
  ])
  e.add("forge:tools/knives", [
    "nethersdelight:iron_machete",
    "nethersdelight:golden_machete",
    "nethersdelight:diamond_machete",
    "nethersdelight:netherite_machete"
  ])
  e.add("forge:tools", [
    "nethersdelight:iron_machete",
    "nethersdelight:golden_machete",
    "nethersdelight:diamond_machete",
    "nethersdelight:netherite_machete"
  ])
})
//饰品
ServerEvents.tags("item", event => {
  event.add("curios:necklace", ["beyonddimensions:net_feeder_item", 'beyonddimensions:net_restocker_item'])
  event.add("curios:belt", ['create_sa:creative_filling_tank', "beyonddimensions:net_feeder_item", 'beyonddimensions:net_restocker_item'])
  event.add("curios:hands", ["beyonddimensions:net_feeder_item", 'beyonddimensions:net_restocker_item'])
})