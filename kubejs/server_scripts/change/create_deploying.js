ServerEvents.recipes(event => {
  //
  event.remove({id:"create:item_application/brass_casing_from_wood"})
  event.remove({id:"create:item_application/brass_casing_from_log"})
  event.remove({id:"create:item_application/andesite_casing_from_wood"})
  event.remove({id:"create:item_application/andesite_casing_from_log"})
  event.remove({id:"create:item_application/copper_casing_from_wood"})
  event.remove({id:"create:item_application/copper_casing_from_log"})
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "create:andesite_alloy_block" },
      { "item": "kubejs:io_mechanism" },
    ],
    "results": [{ "item": "create:crushing_wheel" ,"count":2}]
  }).id("dut_create:deploying/crushing_wheel")
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "createdieselgenerators:chip_wood_block" },
      { "tag": "forge:ingots/brass" },
    ],
    "results": [{ "item": "create:brass_casing" }]
  }).id("dut_create:deploying/brass_casing_chip")
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "createdieselgenerators:chip_wood_block" },
      { "tag": "forge:ingots/copper" },
    ],
    "results": [{ "item": "create:copper_casing" }]
  }).id("dut_create:deploying/copper_casing_chip")
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "createdieselgenerators:chip_wood_block" },
      { "item": "create:andesite_alloy" },
    ],
    "results": [{ "item": "create:andesite_casing" }]
  }).id("dut_create:deploying/andesite_casing_chip")
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "tag": "minecraft:logs" },
      { "tag": "forge:ingots/brass" },
    ],
    "results": [{ "item": "create:brass_casing" }]
  }).id("dut_create:deploying/brass_casing")
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "tag": "minecraft:logs" },
      { "tag": "forge:ingots/copper" },
    ],
    "results": [{ "item": "create:copper_casing" }]
  }).id("dut_create:deploying/copper_casing")
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "tag": "minecraft:logs" },
      { "item": "create:andesite_alloy" },
    ],
    "results": [{ "item": "create:andesite_casing" }]
  }).id("dut_create:deploying/andesite_casing")
  //反应堆燃料棒
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "kubejs:carbon_electrode" },
      { "item": "kubejs:bronze_triangle" }
    ],
    "results": [{ "item": "kubejs:bronze_fuel_rod" }]
  }).id("dut_create:deploying/bronze_fuel_rod")
  //分馏塔控制器
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "create:precision_mechanism" },
      { "tag": "dut_create:ingots/polymer" }
    ],
    "results": [{ "item": "createdieselgenerators:distillation_controller", "count": 27 }]
  }).id('dut_create:distillation_controller_from_precision_mechanism')
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "item": "create:precision_mechanism" },
      { "tag": "dut_create:ingots/polymer" }
    ],
    "result": { "item": "createdieselgenerators:distillation_controller", "count": 18 }
  }).id('dut_create:distillation_controller_from_precision_mechanism_hand')
  
  //香烟
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "createloveandwar:fuel_pellet" },
      { "item": "minecraft:paper" }
    ],
    "results": [{ "item": 'createloveandwar:cigarette', "count": 16 }]
  }).id("dut_create:deploying/cigarette")
  //TNT
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "minecraft:sand" },
      { "item": "minecraft:gunpowder" }
    ],
    "results": [{ "item": "minecraft:tnt" }]
  }).id("dut_create:deploying/tnt")
  //电子管
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "tag": "forge:plates/iron" },
      { "item": "create:polished_rose_quartz" }
    ],
    "results": [{ "item": "create:electron_tube" }]
  }).id("dut_create:deploying/electron_tube")
  //暗影机壳
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "create:brass_casing" },
      { "tag": "forge:ingots/shadow_steel" }
    ],
    "results": [{ "item": "create:shadow_steel_casing" }]
  }).id("dut_create:deploying/shadow_steel_casing")
  //光辉机壳
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "create:brass_casing" },
      { "tag": "forge:ingots/refined_radiance" }
    ],
    "results": [{ "item": "create:refined_radiance_casing" }]
  }).id("dut_create:deploying/refined_radiance_casing")
  //青金石板
  event.custom(
    {
      "type": "create:deploying",
      "ingredients": [
        { "item": "kubejs:silicon_plate" },
        { "tag": "forge:dyes/blue" }
      ],
      "results": [{ "item": "kubejs:lapis_plate" }]
    }
  ).id("dut_create:deploying/lapis_plate")
  event.custom(
    {
      "type": "create:mixing",
      "ingredients": [
        { "item": "kubejs:silicon_plate" },
        { "tag": "forge:dyes/blue" }
      ],
      "results": [
        { "item": "kubejs:lapis_plate" }
      ]
    }
  ).id("dut_create:mixing/lapis_plate")
  //六向齿轮箱
  event.custom(
    {
      "type": "create:deploying",
      "ingredients": [
        { "item": "create_connected:parallel_gearbox" },
        { "tag": "dut_create:cogwheel_large" }
      ],
      "results": [
        { "item": "create_connected:six_way_gearbox" }
      ]
    }
  ).id("dut_create:deploying/six_way_gearbox")
  //平行齿轮箱
  event.custom(
    {
      "type": "create:deploying",
      "ingredients": [
        { "item": "create:gearbox" },
        { "tag": "dut_create:cogwheel_large" }
      ],
      "results": [
        { "item": "create_connected:parallel_gearbox" }
      ]
    }
  ).id("dut_create:deploying/parallel_gearbox")
  //链式齿轮箱
  event.custom(
    {
      "type": "create:deploying",
      "ingredients": [
        { "item": "create:encased_chain_drive" },
        { "tag": "dut_create:cogwheel" }
      ],
      "results": [
        { "item": "create_connected:encased_chain_cogwheel" }
      ]
    }
  ).id("dut_create:deploying/encased_chain_cogwheel")
  //机械核心
  event.custom(
    {
      "type": "create:deploying",
      "ingredients": [
        { "item": "create:andesite_casing" },
        { "tag": "dut_create:cogwheel_large" }
      ],
      "results": [
        { "item": "kubejs:mechanical_core" }
      ]
    }
  ).id("dut_create:deploying/mechanical_core")
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "design_decor:industrial_plating_block" },
      { "item": "design_decor:industrial_gear_large" }
    ],
    "results": [
      { "item": "kubejs:mechanical_core", "count": 3 }
    ]
  }).id("dut_create:deploying/mechanical_core_advanced")
  event.replaceInput(
    { input: 'create:andesite_casing', not: { mod: 'kubejs' }, not: { output: "create:depot" } },
    'create:andesite_casing',
    'kubejs:mechanical_core')
  //动力活塞
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "B": { "tag": "minecraft:wooden_slabs" },
      "C": { "item": "create:andesite_casing" },
      "I": { "item": "create:piston_extension_pole" }
    },
    "pattern": [
      "B",
      "C",
      "I"
    ],
    "result": { "item": "create:mechanical_piston" },
    "show_notification": true
  }).id("dut_create:mechanical_piston")
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom()

})