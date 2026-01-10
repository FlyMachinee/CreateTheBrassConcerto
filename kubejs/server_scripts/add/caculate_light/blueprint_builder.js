ServerEvents.recipes(event => {
  const BlueprintBuilderStructure =
  {
    "type": "custommachinery:structure",
    "pattern": [
      [
        "ABCBBBCBA",
        "BBBBBBBBB",
        "CBBBBBBBC",
        "BBBBBBBBB",
        "BBBBBBBBB",
        "BBBBBBBBB",
        "CBBBBBBBC",
        "BBBBBBBBB",
        "ABBBBBBBA",
        "  GBBBG  ",
        "  GBBBG  ",
        "  GBBBG  "
      ],
      [
        "AAAAAAAAA",
        "A       A",
        "A       A",
        "A       A",
        "A       A",
        "A       A",
        "A       A",
        "A       A",
        "AAAAAAAAA",
        "  G   G  ",
        "  G   G  ",
        "  G H G  "
      ],
      [
        "D       D",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "D       D",
        "         ",
        "         ",
        "    m    "
      ],
      [
        "D       D",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "D       D",
        "         ",
        "         ",
        "         "
      ],
      [
        "DDDDDDDDD",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "DDDDDDDDD",
        "         ",
        "         ",
        "         "
      ],
      [
        "D       D",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "D       D",
        "         ",
        "         ",
        "         "
      ],
      [
        "D       D",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "D       D",
        "         ",
        "         ",
        "         "
      ],
      [
        "D       D",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "D       D",
        "         ",
        "         ",
        "         "
      ],
      [
        "DDDDDDDDD",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "DDDDDDDDD",
        "         ",
        "         ",
        "         "
      ],
      [
        "DDDDDDDDD",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "DDDDDDDDD",
        "         ",
        "         ",
        "         "
      ]
    ],
    "keys": {
      "H": "create:gearbox",
      "D": "create:andesite_scaffolding",
      "A": "create:linear_chassis",
      "G": "create:secondary_linear_chassis",
      "B": "create:andesite_casing",
      "C": "create:metal_girder",
    },
    "jei": true
  }
  const BlueprintBuilderStress = {
    "type": "custommachinery:contraption",
    "mode": "input",
    "speed": 64
  }
  const BlueprintBuilderSandIn = {
    "type": "custommachinery:block",
    "mode": "output",
    "action": "replace_destroy",
    "amount": 392,
    "pos": [-3, -1, -4, 3, 6, -10],
    "filter": "minecraft:sand",
    "whitelist": true,
    "block": "minecraft:air"
  }
  const BlueprintBuilderSound = {
    "type": "custommachinery:command",
    "phase": "crafting_tickable",
    "command": "/playsound minecraft:block.sand.break block @a[distance=..16] ~ ~ ~",
    "log": false,
    "chance": 0.35,
    "permissionlevel": 5
  }
  function BlueprintBuilderItemIn(item, amount) {
    return ({
      "type": "custommachinery:item",
      "mode": "input",
      "item": item,
      "amount": amount
    })
  }
  function BlueprintBuilderBarrelIn(amount) {
    return ({
      "type": "custommachinery:item",
      "mode": "input",
      "slot": "barrel_input",
      "item": "minecraft:barrel",
      "amount": amount
    })
  }
  function BlueprintBuilderBarrelOut(nbt) {
    return ({
      "type": "custommachinery:item",
      "mode": "output",
      "item": "minecraft:barrel",
      "nbt": nbt,
      "amount": 1
    })
  }
  function BlueprintBuilderDisk(item, amount) {
    return ({
      "type": "custommachinery:durability",
      "mode": "input",
      "slot": "disk_input",
      "item": item,
      "amount": amount
    })
  }
  function BlueprintBuilderFliter(item) {
    return ({
      "type": "custommachinery:item_filter",
      "ingredient": { "item": item },
      "slot": "filter"
    })
  }
  function BlueprintBuilderRecipe(RequirementList, id, time) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:blueprint_builder",
      "time": time,
      "error": true,
      "priority": 1,
      "requirements": [
        BlueprintBuilderStructure,
        BlueprintBuilderSandIn,
        BlueprintBuilderSound,
        BlueprintBuilderStress,
      ].concat(RequirementList),
      "jei": [
        BlueprintBuilderStructure,
        BlueprintBuilderSandIn,
        BlueprintBuilderStress,
      ].concat(RequirementList)
    }).id("dut_create:blueprint_builder/" + id)
  }

  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:hydropress"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 512),
      BlueprintBuilderItemIn("create:brass_block", 12),
      BlueprintBuilderItemIn("create:industrial_iron_block", 8),
      BlueprintBuilderItemIn("minecraft:copper_block", 6),
      BlueprintBuilderItemIn("kubejs:electric_gear", 8),
      BlueprintBuilderItemIn("create:precision_mechanism", 1),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:14b,Slot:0b,id:"create:copper_casing"},{Count:9b,Slot:1b,id:"create:railway_casing"},{Count:4b,Slot:2b,id:"design_decor:industrial_plating_block"},{Count:1b,Slot:3b,id:"create:gearshift"},{Count:1b,Slot:4b,id:"create:gearbox"},{Count:10b,Slot:5b,id:"design_decor:industrial_iron_boiler"},{Count:2b,Slot:6b,id:"design_decor:brass_boiler"},{Count:2b,Slot:7b,id:"design_decor:industrial_gear_large"},{Count:2b,Slot:8b,id:"create:mechanical_pump"},{Count:1b,Slot:9b,id:"create:gantry_carriage"},{Count:3b,Slot:10b,id:"design_decor:diagonal_metal_support"},{Count:6b,Slot:11b,id:"create:metal_girder"},{Count:1b,Slot:12b,id:"create:brass_funnel"},{Count:10b,Slot:13b,id:"design_decor:diagonal_girder"},{Count:4b,Slot:14b,id:"create:gantry_shaft"},{Count:1b,Slot:15b,id:"design_decor:andesite_floodlight"},{Count:1b,Slot:16b,id:"design_decor:brass_boiler_large"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.hydropress","italic":false}\'}}')
    ], "hydropress", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:trading_station"),
      BlueprintBuilderDisk("kubejs:brass_hard_disk", 64),
      BlueprintBuilderItemIn("minecraft:gold_block", 12),
      BlueprintBuilderItemIn("create:industrial_iron_block", 8),
      BlueprintBuilderItemIn("minecraft:copper_block", 4),
      BlueprintBuilderItemIn("kubejs:circuit_board", 16),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:3b,Slot:0b,id:"design_decor:industrial_gold_block"},{Count:1b,Slot:1b,id:"storagedrawers:controller"},{Count:1b,Slot:2b,id:"design_decor:gold_boiler_large"},{Count:2b,Slot:3b,id:"design_decor:gold_boiler"},{Count:2b,Slot:4b,id:"design_decor:copper_boiler"},{Count:2b,Slot:5b,id:"create:mechanical_pump"},{Count:1b,Slot:6b,id:"create:brass_funnel"},{Count:4b,Slot:7b,id:"create:fluid_pipe"},{Count:3b,Slot:8b,id:"design_decor:diagonal_girder"},{Count:2b,Slot:9b,id:"design_decor:stepped_lever"},{Count:1b,Slot:10b,id:"design_decor:andesite_floodlight"},{Count:2b,Slot:11b,id:"design_decor:brass_lamp"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.trading_station","italic":false}\'}}')
    ], "trading_station", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:electro_hydro_resonant_tower"),
      BlueprintBuilderDisk("kubejs:brass_hard_disk", 512),
      BlueprintBuilderItemIn("create:brass_block", 32),
      BlueprintBuilderItemIn("create:industrial_iron_block", 32),
      BlueprintBuilderItemIn("minecraft:copper_block", 16),
      BlueprintBuilderItemIn("createaddition:capacitor", 32),
      BlueprintBuilderItemIn("kubejs:carbon_electrode", 20),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:5b,Slot:0b,id:"design_decor:brass_boiler_large"},{Count:16b,Slot:1b,id:"create_things_and_misc:brass_bricks"},{Count:16b,Slot:2b,id:"design_decor:industrial_plating_block"},{Count:2b,Slot:3b,id:"create:fluid_tank"},{Count:21b,Slot:4b,id:"design_decor:industrial_iron_boiler"},{Count:12b,Slot:5b,id:"design_decor:copper_boiler"},{Count:34b,Slot:6b,id:"create:chute"},{Count:6b,Slot:7b,id:"design_decor:diagonal_metal_support"},{Count:28b,Slot:8b,id:"create:metal_girder"},{Count:16b,Slot:9b,id:"kubejs:carbon_electrode"},{Count:20b,Slot:10b,id:"design_decor:diagonal_girder"},{Count:4b,Slot:11b,id:"design_decor:copper_lamp"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.electro_hydro_resonant_tower","italic":false}\'}}')
    ], "electro_hydro_resonant_tower", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:space_elevator_controller"),
      BlueprintBuilderDisk("kubejs:brass_hard_disk", 512),
      BlueprintBuilderItemIn("create:brass_block", 32),
      BlueprintBuilderItemIn("create:industrial_iron_block", 16),
      BlueprintBuilderItemIn("ad_astra:steel_block", 4),
      BlueprintBuilderItemIn("minecraft:copper_block", 4),
      BlueprintBuilderItemIn("create:precision_mechanism", 8),
      BlueprintBuilderItemIn("kubejs:carbon_electrode", 8),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:4b,Slot:0b,id:"design_decor:cast_iron_boiler_large"},{Count:2b,Slot:1b,id:"design_decor:brass_boiler_large"},{Count:1b,Slot:2b,id:"design_decor:industrial_iron_boiler_large"},{Count:5b,Slot:3b,id:"design_decor:cast_iron_boiler"},{Count:4b,Slot:4b,id:"design_decor:brass_boiler"},{Count:4b,Slot:5b,id:"design_decor:copper_boiler"},{Count:16b,Slot:6b,id:"design_decor:industrial_plating_block"},{Count:12b,Slot:7b,id:"create_things_and_misc:brass_bricks"},{Count:12b,Slot:8b,id:"ad_astra:steel_plateblock"},{Count:9b,Slot:9b,id:"create_connected:item_silo"},{Count:4b,Slot:10b,id:"ad_astra:steel_panel"},{Count:9b,Slot:11b,id:"design_decor:ornate_grate"},{Count:8b,Slot:12b,id:"create:chute"},{Count:16b,Slot:13b,id:"ad_astra:steel_plating_slab"},{Count:4b,Slot:14b,id:"design_decor:metal_support"},{Count:8b,Slot:15b,id:"kubejs:carbon_electrode"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.space_elevator_controller","italic":false}\'}}')
    ], "space_elevator_controller", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:airdrop_station"),
      BlueprintBuilderDisk("kubejs:aluminum_hard_disk", 512),
      BlueprintBuilderItemIn("create:industrial_iron_block", 12),
      BlueprintBuilderItemIn("create:brass_block", 9),
      BlueprintBuilderItemIn("kubejs:mechanical_core", 16),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:1b,Slot:0b,id:"design_decor:brass_boiler_large"},{Count:2b,Slot:1b,id:"design_decor:cast_iron_boiler_large"},{Count:1b,Slot:2b,id:"design_decor:cast_iron_boiler"},{Count:2b,Slot:3b,id:"design_decor:copper_boiler"},{Count:1b,Slot:4b,id:"design_decor:brass_boiler"},{Count:16b,Slot:5b,id:"create:metal_girder"},{Count:12b,Slot:6b,id:"create:chute"},{Count:4b,Slot:7b,id:"design_decor:andesite_floodlight"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.airdrop_station","italic":false}\'}}')
    ], "airdrop_station", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:infinity_fetching_pool"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 512),
      BlueprintBuilderItemIn("create:industrial_iron_block", 16),
      BlueprintBuilderItemIn("create:brass_block", 9),
      BlueprintBuilderItemIn("createaddition:modular_accumulator", 9),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:4b,Slot:0b,id:"design_decor:industrial_iron_boiler"},{Count:4b,Slot:1b,id:"design_decor:andesite_floodlight"},{Count:4b,Slot:2b,id:"design_decor:diagonal_girder"},{Count:4b,Slot:3b,id:"design_decor:diagonal_metal_support"},{Count:12b,Slot:4b,id:"create:industrial_iron_block"},{Count:12b,Slot:5b,id:"design_decor:brass_railing"},{Count:1b,Slot:6b,id:"design_decor:brass_boiler_large"},{Count:9b,Slot:7b,id:"createaddition:modular_accumulator"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.infinity_fetching_pool","italic":false}\'}}')
    ], "infinity_fetching_pool", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:condenser"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 512),
      BlueprintBuilderItemIn("create:brass_block", 12),
      BlueprintBuilderItemIn("minecraft:copper_block", 8),
      BlueprintBuilderItemIn("create:andesite_alloy_block", 4),
      BlueprintBuilderItemIn("kubejs:circuit_board", 16),
      BlueprintBuilderItemIn("kubejs:electric_gear", 8),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:4b,Slot:0b,id:"design_decor:andesite_floodlight"},{Count:22b,Slot:1b,id:"create:copper_casing"},{Count:15b,Slot:2b,id:"create:item_drain"},{Count:3b,Slot:3b,id:"create:smart_fluid_pipe"},{Count:1b,Slot:4b,id:"vintageimprovements:vacuum_chamber"},{Count:2b,Slot:5b,id:"design_decor:stepped_lever"},{Count:1b,Slot:6b,id:"design_decor:brass_boiler_large"},{Count:2b,Slot:7b,id:"design_decor:brass_boiler"},{Count:1b,Slot:8b,id:"create:mechanical_pump"},{Count:4b,Slot:9b,id:"design_decor:metal_support"},{Count:2b,Slot:10b,id:"design_decor:copper_boiler"},{Count:4b,Slot:11b,id:"design_decor:diagonal_metal_support"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.condenser","italic":false}\'}}')
    ], "condenser", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:construction_station"),
      BlueprintBuilderDisk("kubejs:aluminum_hard_disk", 512),
      BlueprintBuilderItemIn("create:industrial_iron_block", 16),
      BlueprintBuilderItemIn("create:brass_block", 8),
      BlueprintBuilderItemIn("minecraft:copper_block", 8),
      BlueprintBuilderItemIn("kubejs:mechanical_core", 64),
      BlueprintBuilderItemIn("create:precision_mechanism", 12),
      BlueprintBuilderItemIn("kubejs:lime_circuit_board", 12),
      BlueprintBuilderItemIn("create:mechanical_arm", 1),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:5b,Slot:0b,id:"design_decor:tinted_framed_glass"},{Count:2b,Slot:1b,id:"create:encased_chain_drive"},{Count:39b,Slot:2b,id:"create:copper_casing"},{Count:1b,Slot:3b,id:"create:mechanical_saw"},{Count:1b,Slot:4b,id:"create:millstone"},{Count:1b,Slot:5b,id:"create:mechanical_arm"},{Count:3b,Slot:6b,id:"create:depot"},{Count:3b,Slot:7b,id:"create:brass_funnel"},{Count:1b,Slot:8b,id:"create:deployer"},{Count:5b,Slot:9b,id:"create:item_drain"},{Count:1b,Slot:10b,id:"vintageimprovements:laser"},{Count:2b,Slot:11b,id:"create:spout"},{Count:3b,Slot:12b,id:"create:andesite_casing"},{Count:19b,Slot:13b,id:"minecraft:smooth_stone_slab"},{Count:7b,Slot:14b,id:"create:gearbox"},{Count:16b,Slot:15b,id:"create:secondary_linear_chassis"},{Count:3b,Slot:16b,id:"design_decor:industrial_gear_large"},{Count:1b,Slot:17b,id:"design_decor:brass_boiler_large"},{Count:3b,Slot:18b,id:"design_decor:diagonal_girder"},{Count:1b,Slot:19b,id:"create:basin"},{Count:4b,Slot:20b,id:"design_decor:industrial_iron_boiler"},{Count:2b,Slot:21b,id:"design_decor:industrial_gear"},{Count:2b,Slot:22b,id:"create:mechanical_press"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.construction_station","italic":false}\'}}')
    ], "construction_station", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:blasting_compressor"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 1024),
      BlueprintBuilderItemIn("create:industrial_iron_block", 24),
      BlueprintBuilderItemIn("create:brass_block", 16),
      BlueprintBuilderItemIn("createbigcannons:cast_iron_block", 8),
      BlueprintBuilderItemIn("vintageimprovements:iron_spring", 32),
      BlueprintBuilderItemIn("kubejs:circuit_board", 8),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:18b,Slot:0b,id:"create:industrial_iron_block"},{Count:2b,Slot:1b,id:"design_decor:brass_boiler_large"},{Count:1b,Slot:2b,id:"design_decor:cast_iron_boiler_large"},{Count:26b,Slot:3b,id:"create:metal_girder"},{Count:5b,Slot:4b,id:"design_decor:industrial_iron_boiler"},{Count:2b,Slot:5b,id:"design_decor:green_container"},{Count:8b,Slot:6b,id:"design_decor:diagonal_metal_support"},{Count:4b,Slot:7b,id:"create:shaft"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.blasting_compressor","italic":false}\'}}')
    ], "blasting_compressor", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:electron_tube_computer"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 512),
      BlueprintBuilderItemIn("create:industrial_iron_block", 8),
      BlueprintBuilderItemIn("create:brass_block", 6),
      BlueprintBuilderItemIn("minecraft:copper_block", 6),
      BlueprintBuilderItemIn("kubejs:electric_gear", 16),
      BlueprintBuilderItemIn("create:precision_mechanism", 4),
      BlueprintBuilderItemIn("createaddition:modular_accumulator", 4),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:4b,Slot:0b,id:"create:railway_casing"},{Count:24b,Slot:1b,id:"design_decor:ornate_grate"},{Count:8b,Slot:2b,id:"create:controls"},{Count:8b,Slot:3b,id:"create:item_drain"},{Count:4b,Slot:4b,id:"create:nixie_tube"},{Count:2b,Slot:5b,id:"create:stressometer"},{Count:4b,Slot:6b,id:"createaddition:modular_accumulator"},{Count:1b,Slot:7b,id:"design_decor:stepped_lever"},{Count:12b,Slot:8b,id:"create:framed_glass_trapdoor"},{Count:2b,Slot:9b,id:"create:smart_fluid_pipe"},{Count:12b,Slot:10b,id:"create:display_board"},{Count:8b,Slot:11b,id:"create:display_link"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.electron_tube_computer","italic":false}\'}}')
    ], "electron_tube_computer", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:assembling_machine"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 512),
      BlueprintBuilderItemIn("create:industrial_iron_block", 8),
      BlueprintBuilderItemIn("create:brass_block", 8),
      BlueprintBuilderItemIn("minecraft:copper_block", 8),
      BlueprintBuilderItemIn("create:precision_mechanism", 4),
      BlueprintBuilderItemIn("kubejs:electric_gear", 8),
      BlueprintBuilderItemIn("kubejs:lime_circuit_board", 6),
      BlueprintBuilderItemIn("create:mechanical_arm", 2),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:1b,Slot:0b,id:"vintageimprovements:laser"},{Count:1b,Slot:1b,id:"createaddition:tesla_coil"},{Count:1b,Slot:2b,id:"create:spout"},{Count:5b,Slot:3b,id:"create:depot"},{Count:18b,Slot:4b,id:"minecraft:smooth_stone_slab"},{Count:4b,Slot:5b,id:"create:nixie_tube"},{Count:1b,Slot:6b,id:"create:millstone"},{Count:1b,Slot:7b,id:"create:deployer"},{Count:6b,Slot:8b,id:"create:secondary_linear_chassis"},{Count:2b,Slot:10b,id:"create:mechanical_pump"},{Count:2b,Slot:11b,id:"create:fluid_pipe"},{Count:2b,Slot:12b,id:"design_decor:industrial_gear_large"},{Count:1b,Slot:13b,id:"create:mechanical_mixer"},{Count:1b,Slot:14b,id:"create:mechanical_saw"},{Count:1b,Slot:15b,id:"create:mechanical_press"},{Count:1b,Slot:16b,id:"createaddition:rolling_mill"},{Count:1b,Slot:17b,id:"create:basin"},{Count:1b,Slot:18b,id:"vintageimprovements:spring_coiling_machine"},{Count:26b,Slot:19b,id:"create:framed_glass_trapdoor"},{Count:12b,Slot:20b,id:"create:copper_casing"},{Count:2b,Slot:21b,id:"create:mechanical_arm"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.assembling_machine","italic":false}\'}}')
    ], "assembling_machine", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:large_difference_engine"),
      BlueprintBuilderDisk("kubejs:aluminum_hard_disk", 512),
      BlueprintBuilderItemIn("create:brass_block", 32),
      BlueprintBuilderItemIn("create:industrial_iron_block", 12),
      BlueprintBuilderItemIn("create:precision_mechanism", 16),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:3b,Slot:0b,id:"design_decor:andesite_floodlight"},{Count:10b,Slot:1b,id:"design_decor:copper_railing"},{Count:4b,Slot:2b,id:"create_things_and_misc:brass_brick_stairs"},{Count:5b,Slot:3b,id:"create:gearbox"},{Count:2b,Slot:4b,id:"design_decor:brass_boiler_large"},{Count:4b,Slot:5b,id:"create:shaft"},{Count:15b,Slot:6b,id:"create_things_and_misc:brass_bricks"},{Count:8b,Slot:7b,id:"create:depot"},{Count:23b,Slot:8b,id:"create:brass_casing"},{Count:16b,Slot:9b,id:"create:brass_funnel"},{Count:13b,Slot:10b,id:"create_things_and_misc:brass_brick_slab"},{Count:4b,Slot:11b,id:"design_decor:brass_boiler"},{Count:2b,Slot:12b,id:"design_decor:industrial_iron_boiler"},{Count:9b,Slot:13b,id:"create_connected:encased_chain_cogwheel"},{Count:4b,Slot:14b,id:"design_decor:industrial_gear"},{Count:25b,Slot:15b,id:"create:encased_chain_drive"},{Count:17b,Slot:16b,id:"create:cogwheel"},{Count:12b,Slot:17b,id:"design_decor:ochrum_crushing_wheel"},{Count:3b,Slot:18b,id:"design_decor:industrial_gear_large"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.large_difference_engine","italic":false}\'}}')
    ], "large_difference_engine", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:satellite_station"),
      BlueprintBuilderDisk("kubejs:aluminum_hard_disk", 512),
      BlueprintBuilderItemIn("create:industrial_iron_block", 32),
      BlueprintBuilderItemIn("create:precision_mechanism", 8),
      BlueprintBuilderItemIn("ad_astra:steel_block", 8),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:4b,Slot:0b,id:"design_decor:andesite_floodlight"},{Count:10b,Slot:1b,id:"ad_astra:steel_pillar"},{Count:2b,Slot:2b,id:"design_decor:cast_iron_boiler"},{Count:9b,Slot:3b,id:"create:depot"},{Count:8b,Slot:4b,id:"ad_astra:steel_plating_slab"},{Count:6b,Slot:5b,id:"design_decor:iron_railing"},{Count:12b,Slot:6b,id:"design_decor:ornate_grate"},{Count:1b,Slot:7b,id:"design_decor:cast_iron_boiler_large"},{Count:2b,Slot:8b,id:"create:metal_girder"},{Count:25b,Slot:9b,id:"create:industrial_iron_block"},{Count:3b,Slot:10b,id:"design_decor:industrial_iron_boiler"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.satellite_station","italic":false}\'}}')
    ], "satellite_station", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:electrolytic_cell"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 512),
      BlueprintBuilderItemIn("create:brass_block", 16),
      BlueprintBuilderItemIn("minecraft:copper_block", 16),
      BlueprintBuilderItemIn("createaddition:modular_accumulator", 4),
      BlueprintBuilderItemIn("create:industrial_iron_block", 2),
      BlueprintBuilderItemIn("create:precision_mechanism", 4),
      BlueprintBuilderItemIn("kubejs:carbon_electrode", 2),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:29b,Slot:0b,id:"create:copper_casing"},{Count:9b,Slot:1b,id:"create:railway_casing"},{Count:4b,Slot:2b,id:"create:fluid_pipe"},{Count:6b,Slot:3b,id:"create:fluid_tank"},{Count:6b,Slot:4b,id:"create:item_drain"},{Count:8b,Slot:5b,id:"create:mechanical_pump"},{Count:5b,Slot:6b,id:"create:smart_fluid_pipe"},{Count:2b,Slot:7b,id:"create_things_and_misc:brass_brick_slab"},{Count:4b,Slot:8b,id:"createaddition:modular_accumulator"},{Count:5b,Slot:9b,id:"design_decor:andesite_floodlight"},{Count:2b,Slot:10b,id:"design_decor:brass_boiler"},{Count:1b,Slot:11b,id:"design_decor:brass_boiler_large"},{Count:3b,Slot:12b,id:"design_decor:copper_boiler"},{Count:4b,Slot:13b,id:"design_decor:copper_railing"},{Count:5b,Slot:14b,id:"design_decor:diagonal_metal_support"},{Count:1b,Slot:15b,id:"design_decor:stepped_lever"},{Count:2b,Slot:16b,id:"kubejs:carbon_electrode"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.electrolytic_cell","italic":false}\'}}')
    ], "electrolytic_cell", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:alloy_furnace"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 512),
      BlueprintBuilderItemIn("create:industrial_iron_block", 64),
      BlueprintBuilderItemIn("kubejs:mechanical_core", 32),
      BlueprintBuilderItemIn("create:blaze_burner", 9),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:16b,Slot:0b,id:"create:industrial_iron_block"},{Count:9b,Slot:1b,id:"design_decor:ornate_grate"},{Count:4b,Slot:2b,id:"design_decor:industrial_iron_boiler_large"},{Count:4b,Slot:3b,id:"design_decor:industrial_iron_boiler"},{Count:1b,Slot:4b,id:"railways:smokestack_oilburner"},{Count:15b,Slot:5b,id:"create:metal_girder"},{Count:6b,Slot:6b,id:"design_decor:diagonal_metal_support"},{Count:4b,Slot:7b,id:"design_decor:metal_support"},{Count:9b,Slot:8b,id:"create:blaze_burner"},{Count:4b,Slot:9b,id:"create:andesite_funnel"},{Count:8b,Slot:10b,id:"design_decor:iron_railing"},{Count:8b,Slot:11b,id:"design_decor:diagonal_girder"},{Count:4b,Slot:12b,id:"design_decor:andesite_floodlight"},{Count:1b,Slot:13b,id:"design_decor:stepped_lever"},{Count:9b,Slot:14b,id:"createaddition:straw"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.alloy_furnace","italic":false}\'}}')
    ], "alloy_furnace", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(2),
      BlueprintBuilderFliter("kubejs:shaft_furnace"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 1024),
      BlueprintBuilderItemIn("create:industrial_iron_block", 64),
      BlueprintBuilderItemIn("minecraft:copper_block", 32),
      BlueprintBuilderItemIn("create:brass_block", 24),
      BlueprintBuilderItemIn("create:precision_mechanism", 32),
      BlueprintBuilderItemIn("kubejs:mechanical_core", 32),
      BlueprintBuilderItemIn("create:blaze_burner", 9),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:63b,Slot:0b,id:"design_decor:ornate_grate"},{Count:4b,Slot:1b,id:"create:andesite_funnel"},{Count:4b,Slot:2b,id:"create:andesite_bars"},{Count:8b,Slot:3b,id:"design_decor:brass_lamp"},{Count:12b,Slot:4b,id:"design_decor:industrial_iron_boiler"},{Count:3b,Slot:5b,id:"create:mechanical_pump"},{Count:3b,Slot:6b,id:"design_decor:industrial_iron_boiler_large"},{Count:11b,Slot:7b,id:"ad_astra:iron_plating_slab"},{Count:2b,Slot:8b,id:"design_decor:brass_boiler_large"},{Count:6b,Slot:9b,id:"create:cogwheel"},{Count:3b,Slot:10b,id:"design_decor:brass_boiler"},{Count:4b,Slot:11b,id:"create_things_and_misc:brass_brick_slab"},{Count:9b,Slot:12b,id:"design_decor:diagonal_metal_support"},{Count:24b,Slot:13b,id:"create:metal_girder"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.shaft_furnace","italic":false}\',Lore:[\'{"text":"I"}\']}}'),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:1b,Slot:0b,id:"design_decor:stepped_lever"},{Count:1b,Slot:1b,id:"railways:smokestack_oilburner"},{Count:4b,Slot:2b,id:"create:brass_funnel"},{Count:54b,Slot:3b,id:"create:fluid_tank"},{Count:12b,Slot:4b,id:"create:copper_casing"},{Count:15b,Slot:5b,id:"design_decor:iron_railing"},{Count:3b,Slot:6b,id:"design_decor:copper_boiler"},{Count:15b,Slot:7b,id:"ad_astra:iron_pillar"},{Count:22b,Slot:8b,id:"create:industrial_iron_block"},{Count:9b,Slot:9b,id:"create:fluid_pipe"},{Count:48b,Slot:10b,id:"create:railway_casing"},{Count:9b,Slot:11b,id:"createaddition:straw"},{Count:9b,Slot:12b,id:"create:blaze_burner"},{Count:12b,Slot:13b,id:"design_decor:diagonal_girder"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.shaft_furnace","italic":false}\',Lore:[\'{"text":"II"}\']}}')
    ], "shaft_furnace", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:launch_pad_controller"),
      BlueprintBuilderDisk("kubejs:aluminum_hard_disk", 512),
      BlueprintBuilderItemIn("create:brass_block", 48),
      BlueprintBuilderItemIn("create:industrial_iron_block", 12),
      BlueprintBuilderItemIn("minecraft:copper_block", 8),
      BlueprintBuilderItemIn("kubejs:electric_gear", 12),
      BlueprintBuilderItemIn("create:precision_mechanism", 1),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:4b,Slot:0b,id:"design_decor:brass_boiler_large"},{Count:33b,Slot:1b,id:"create_things_and_misc:brass_bricks"},{Count:2b,Slot:2b,id:"design_decor:cast_iron_boiler"},{Count:9b,Slot:3b,id:"create:depot"},{Count:4b,Slot:4b,id:"design_decor:diagonal_girder"},{Count:4b,Slot:5b,id:"create:gantry_shaft"},{Count:2b,Slot:6b,id:"design_decor:diagonal_metal_support"},{Count:20b,Slot:7b,id:"create:metal_girder"},{Count:2b,Slot:8b,id:"create:smart_fluid_pipe"},{Count:7b,Slot:9b,id:"create:fluid_pipe"},{Count:18b,Slot:10b,id:"design_decor:ornate_grate"},{Count:4b,Slot:11b,id:"design_decor:industrial_iron_boiler"},{Count:6b,Slot:12b,id:"design_decor:brass_boiler"},{Count:2b,Slot:13b,id:"create:mechanical_pump"},{Count:8b,Slot:14b,id:"create:industrial_iron_block"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.launch_pad_controller","italic":false}\'}}')
    ], "launch_pad_controller", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:huge_crusher"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 512),
      BlueprintBuilderItemIn("create:industrial_iron_block", 56),
      BlueprintBuilderItemIn("create:brass_block", 8),
      BlueprintBuilderItemIn("minecraft:copper_block", 4),
      BlueprintBuilderItemIn("kubejs:mechanical_core", 32),
      BlueprintBuilderBarrelOut('{BlockEntityTag:{Items:[{Count:24b,Slot:0b,id:"design_decor:industrial_plating_block"},{Count:4b,Slot:1b,id:"design_decor:andesite_floodlight"},{Count:1b,Slot:2b,id:"design_decor:green_container"},{Count:14b,Slot:3b,id:"minecraft:smooth_stone_slab"},{Count:2b,Slot:4b,id:"design_decor:industrial_gear"},{Count:2b,Slot:5b,id:"create:gearbox"},{Count:3b,Slot:6b,id:"create:encased_chain_drive"},{Count:4b,Slot:7b,id:"create:fluid_pipe"},{Count:6b,Slot:8b,id:"design_decor:diagonal_metal_support"},{Count:5b,Slot:9b,id:"design_decor:industrial_gear_large"},{Count:5b,Slot:10b,id:"create:crushing_wheel"},{Count:2b,Slot:11b,id:"create:andesite_casing"},{Count:2b,Slot:12b,id:"design_decor:industrial_iron_boiler"},{Count:1b,Slot:13b,id:"design_decor:red_container"},{Count:2b,Slot:14b,id:"create:display_board"},{Count:6b,Slot:15b,id:"design_decor:industrial_iron_boiler_large"},{Count:14b,Slot:16b,id:"create_things_and_misc:brass_bricks"},{Count:4b,Slot:17b,id:"create_things_and_misc:brass_brick_stairs"},{Count:40b,Slot:18b,id:"ad_astra:iron_pillar"}],id:"minecraft:barrel"},display:{Name:\'{"translate":"block.kubejs.huge_crusher","italic":false}\'}}')
    ], "huge_crusher", 120)
})
