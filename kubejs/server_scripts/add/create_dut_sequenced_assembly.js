ServerEvents.recipes(event => {
  //菌丝
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "minecraft:dirt" },
    "results": [
      { "item": "minecraft:mycelium" }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:dirt" },
        { "amount": 75, "fluid": "kubejs:red_mushroom_spore" }],
        "results": [{ "item": "minecraft:dirt" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:dirt" },
        { "amount": 75, "fluid": "kubejs:brown_mushroom_spore" }],
        "results": [{ "item": "minecraft:dirt" }]
      }
    ],
    "transitionalItem": { "item": "minecraft:dirt" }
  }).id("dut_create:sequnced_assembly/mycelium")
  //黄绿色集成电路板
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "dut_create:plates/duraplas" },
    "results": [
      { "item": "kubejs:lime_circuit_board", "count": 4 }
    ],
    "loops": 3,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:lime_substrate" },
          { "item": "kubejs:magenta_circuit_board" }
        ],
        "results": [{ "item": "kubejs:lime_substrate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:lime_substrate" },
          { "item": "kubejs:circuit_board" }
        ],
        "results": [{ "item": "kubejs:lime_substrate" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:lime_substrate" },
        { "amount": 250, "fluid": "kubejs:muriatic_acid" }],
        "results": [{ "item": "kubejs:lime_substrate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:lime_substrate" },
          { "tag": "forge:dyes/lime" }
        ],
        "results": [{ "item": "kubejs:lime_substrate" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:lime_substrate" }
  }).id("dut_create:sequnced_assembly/lime_circuit_board")
  //品红色集成电路板
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:lapis_plate" },
    "results": [
      { "item": "kubejs:magenta_circuit_board", "count": 4 }
    ],
    "loops": 3,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:magenta_substrate" },
          { "item": "kubejs:circuit_board" }
        ],
        "results": [{ "item": "kubejs:magenta_substrate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:magenta_substrate" },
          { "tag": "dut_create:plates/polymer" }
        ],
        "results": [{ "item": "kubejs:magenta_substrate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:magenta_substrate" },
          { "tag": "forge:dyes/magenta" }
        ],
        "results": [{ "item": "kubejs:magenta_substrate" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:magenta_substrate" },
        { "amount": 250, "fluid": "kubejs:saline_water" }],
        "results": [{ "item": "kubejs:magenta_substrate" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:magenta_substrate" }
  }).id("dut_create:sequnced_assembly/magenta_circuit_board")
  //集成电路板
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:silicon_plate" },
    "results": [
      { "item": "kubejs:circuit_board", "count": 1 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:substrate" },
          { "tag": "forge:plates/copper" }
        ],
        "results": [{ "item": "kubejs:substrate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:substrate" },
          { "item": "create:polished_rose_quartz" }
        ],
        "results": [{ "item": "kubejs:substrate" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:substrate" },
        { "fluidTag": "dut_create:plantoil", "amount": 250 }],
        "results": [{ "item": "kubejs:substrate" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:substrate" }
  }).id("dut_create:sequnced_assembly/circuit_board")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:silicon_plate" },
    "results": [
      { "item": "kubejs:circuit_board", "count": 2 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:substrate" },
          { "tag": "forge:plates/brass" }
        ],
        "results": [{ "item": "kubejs:substrate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:substrate" },
          { "item": "create:electron_tube" }
        ],
        "results": [{ "item": "kubejs:substrate" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:substrate" },
        { "amount": 250, "fluid": "kubejs:cryogen" }],
        "results": [{ "item": "kubejs:substrate" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:substrate" }
  }).id("dut_create:sequnced_assembly/circuit_board_fast")
  //铁质手部零件 100%
  event.replaceInput({ output: 'create:deployer' }, 'create:brass_hand', 'kubejs:iron_hand')
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "create:andesite_alloy" },
    "loops": 1,
    "results": [{ "chance": 1.0, "item": "kubejs:iron_hand", "count": 1 }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_iron_hand" },
        { "tag": "forge:plates/iron" }],
        "results": [{ "item": "kubejs:incomplete_iron_hand" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_iron_hand" },
        { "tag": "forge:rods/iron" }],
        "results": [{ "item": "kubejs:incomplete_iron_hand" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_iron_hand" },
        { "tag": "dut_create:craftnugget" }],
        "results": [{ "item": "kubejs:incomplete_iron_hand" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_iron_hand" }
  }).id("dut_create:sequnced_assembly/iron_hand")
  //桥式整流器
  /*
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:plates/iron" },
    "results": [
      { "item": "kubejs:bridge_rectifier" }
    ],
    "loops": 4,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_rectifier" },
          { "tag": "forge:wires" }
        ],
        "results": [{ "item": "kubejs:incomplete_rectifier" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_rectifier" },
          { "item": "minecraft:slime_ball" }
        ],
        "results": [{ "item": "kubejs:incomplete_rectifier" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_rectifier" },
          { "item": "create:electron_tube" }
        ],
        "results": [{ "item": "kubejs:incomplete_rectifier" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_rectifier" }
  }).id("dut_create:sequnced_assembly/bridge_rectifier")
  */
  //差速器
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:plates/brass" },
    "results": [
      { "item": "kubejs:differential", "count": 2 },
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_differential" },
          { "item": "kubejs:planetary_gear" }
        ],
        "results": [{ "item": "kubejs:incomplete_differential" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_differential" },
          { "item": "kubejs:planetary_gear" }
        ],
        "results": [{ "item": "kubejs:incomplete_differential" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_differential" },
          { "item": "create:precision_mechanism" }
        ],
        "results": [{ "item": "kubejs:incomplete_differential" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_differential" }
  }).id("dut_create:sequnced_assembly/differential_advanced")
  //万向节
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:plates/brass" },
    "results": [
      { "item": "kubejs:cardan_joint", "chance": 0.9, "count": 2 },
      { "item": "minecraft:iron_ingot", "chance": 0.025 },
      { "item": "kubejs:bearing", "chance": 0.025 },
      { "item": "createaddition:iron_rod", "chance": 0.025 },
      { "item": "create:brass_ingot", "chance": 0.025 }
    ],
    "loops": 2,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_cardan_joint" },
          { "tag": "forge:plates/iron" }
        ],
        "results": [{ "item": "kubejs:incomplete_cardan_joint" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_cardan_joint" },
          { "tag": "forge:rods/iron" }
        ],
        "results": [{ "item": "kubejs:incomplete_cardan_joint" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_cardan_joint" },
          { "item": "kubejs:bearing" }
        ],
        "results": [{ "item": "kubejs:incomplete_cardan_joint" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_cardan_joint" },
          { "item": "kubejs:bearing" }
        ],
        "results": [{ "item": "kubejs:incomplete_cardan_joint" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_cardan_joint" },
          { "item": "kubejs:bearing" }
        ],
        "results": [{ "item": "kubejs:incomplete_cardan_joint" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_cardan_joint" },
        { "amount": 500, "fluid": "kubejs:lube_oil" }],
        "results": [{ "item": "kubejs:incomplete_cardan_joint" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_cardan_joint" }
  }).id("dut_create:sequnced_assembly/cardan_joint")
  //行星齿轮组
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:plates/brass" },
    "results": [
      { "item": "kubejs:planetary_gear" }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_planetary_gear" },
          { "item": "kubejs:mechanical_core" }
        ],
        "results": [{ "item": "kubejs:incomplete_planetary_gear" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_planetary_gear" },
        { "amount": 250, "fluid": "kubejs:lube_oil" }],
        "results": [{ "item": "kubejs:incomplete_planetary_gear" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_planetary_gear" },
          { "item": "design_decor:industrial_gear" }
        ],
        "results": [{ "item": "kubejs:incomplete_planetary_gear" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_planetary_gear" },
          { "item": "design_decor:industrial_gear" }
        ],
        "results": [{ "item": "kubejs:incomplete_planetary_gear" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_planetary_gear" },
          { "item": "design_decor:industrial_gear" }
        ],
        "results": [{ "item": "kubejs:incomplete_planetary_gear" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_planetary_gear" }
  }).id("dut_create:sequnced_assembly/planetary_gear_advanced")
  //电气齿轮组
  event.replaceInput({ input: 'create:electron_tube', not: { output: 'create:nixie_tube' } }, 'create:electron_tube', 'kubejs:electric_gear')
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": [{ "item": "create:large_cogwheel" }, { "item": "design_decor:industrial_gear_large" }],
    "results": [
      { "item": "kubejs:electric_gear", "chance": 1.0 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_electric_gear" },
          { "item": "kubejs:bearing" }
        ],
        "results": [{ "item": "kubejs:incomplete_electric_gear" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_electric_gear" },
          [{ "item": "create:large_cogwheel" }, { "item": "design_decor:industrial_gear_large" }]
        ],
        "results": [{ "item": "kubejs:incomplete_electric_gear" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_electric_gear" },
          { "item": "create:electron_tube" }
        ],
        "results": [{ "item": "kubejs:incomplete_electric_gear" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_electric_gear" }
  }).id("dut_create:sequnced_assembly/electric_gear")
  //轴承
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:plates/iron" },
    "results": [
      { "item": "kubejs:incomplete_bearing", "count": 1 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "create:iron_sheet" },
          { "item": "create:andesite_alloy" }
        ],
        "results": [{ "item": "create:iron_sheet" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [{ "item": "create:iron_sheet" }],
        "results": [{ "item": "create:iron_sheet" }]
      }
    ],
    "transitionalItem": { "item": "create:iron_sheet" }
  }).id("dut_create:sequnced_assembly/incomplete_bearing")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:plates/industrial_iron" },
    "results": [
      { "item": "kubejs:incomplete_bearing", "count": 3 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_bearing" },
          { "tag": "forge:ingots/industrial_iron" }
        ],
        "results": [{ "item": "kubejs:incomplete_bearing" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [{ "item": "kubejs:incomplete_bearing" }],
        "results": [{ "item": "kubejs:incomplete_bearing" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_bearing" }
  }).id("dut_create:sequnced_assembly/incomplete_bearing_from_industrial_iron")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:incomplete_bearing" },
    "results": [
      { "item": "kubejs:bearing", "count": 2 }
    ],
    "loops": 3,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_bearing" },
          { "tag": "dut_create:craftnugget" }
        ],
        "results": [{ "item": "kubejs:incomplete_bearing" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_bearing" },
        { "fluidTag": "dut_create:plantoil", "amount": 250 }],
        "results": [{ "item": "kubejs:incomplete_bearing" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [{ "item": "kubejs:incomplete_bearing" }],
        "results": [{ "item": "kubejs:incomplete_bearing" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_bearing" }
  }).id("dut_create:sequnced_assembly/bearing")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:incomplete_bearing" },
    "results": [
      { "item": "kubejs:bearing", "count": 4 }
    ],
    "loops": 2,
    "sequence": [
      {
        "type": "vintageimprovements:curving",
        "mode": 1,
        "ingredients": [{ "item": "kubejs:incomplete_bearing" }],
        "results": [{ "item": "kubejs:incomplete_bearing" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_bearing" },
          [{ "tag": "forge:nuggets/industrial_iron" }]
        ],
        "results": [{ "item": "kubejs:incomplete_bearing" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_bearing" },
        { "amount": 125, "fluid": "kubejs:lube_oil" }],
        "results": [{ "item": "kubejs:incomplete_bearing" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_bearing" }
  }).id("dut_create:sequnced_assembly/bearing_from_lube_oil")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:incomplete_bearing" },
    "results": [
      { "item": "kubejs:bearing" }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_bearing" },
          { "item": "create:mechanical_bearing" }
        ],
        "results": [{ "item": "kubejs:incomplete_bearing" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_bearing" },
          { "item": "create:andesite_alloy" }
        ],
        "results": [{ "item": "kubejs:incomplete_bearing" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_bearing" },
          { "item": "create:mechanical_bearing" }
        ],
        "results": [{ "item": "kubejs:incomplete_bearing" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_bearing" }
  }).id("dut_create:sequnced_assembly/bearing/mechanical")
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  event.replaceInput({ output: ['create:gearbox', 'create:weighted_ejector', 'create:gearshift', 'create:gantry_carriage', 'create:brown_toolbox', 'create:millstone', 'create:wrench', 'sliceanddice:slicer', 'create_dd:reversed_gearshift', 'create_dd:deforester_saw', 'create_dd:', 'create_dd:inductive_mechanism', 'create_dd:infernal_mechanism', 'create_dd:sealed_mechanism', 'create_dd:cog_crank', 'create_sa:brass_jetpack_chestplate', 'create_sa:andesite_jetpack_chestplate', 'create_sa:steam_engine', 'create_sa:heat_engine', 'create_sa:portable_drill', 'create_sa:block_picker', 'create:mechanical_mixer', 'create_connected:freewheel_clutch', 'create_connected:encased_chain_cogwheel', 'create_connected:six_way_gearbox', 'create_connected:crank_wheel', 'create_connected:brass_gearbox', 'railways:handcar', 'createbigcannons:steel_sliding_breechblock', 'createbigcannons:cast_iron_sliding_breechblock', 'createbigcannons:quickfiring_mechanism', 'create_things_and_misc:vibration_mechanism'], }, 'create:cogwheel', '#dut_create:cogwheel')
  event.replaceInput({ output: ['createbigcannons:quickfiring_mechanism', 'create_sa:steam_engine', 'create_sa:heat_engine', 'create_connected:parallel_gearbox', 'create_connected:six_way_gearbox', 'create_connected:large_crank_wheel'], }, 'create:large_cogwheel', '#dut_create:cogwheel_large')
  //event.custom()
})