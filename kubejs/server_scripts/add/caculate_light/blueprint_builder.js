ServerEvents.recipes(event => {
  const BlueprintBuilderStructure =
  {
    "type": "custommachinery:general_structure",
    "id": "main"
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
  function BlueprintBuilderSetOut(nbt) {
    return ({
      "type": "custommachinery:item",
      "mode": "output",
      "item": "createandesiteabound:simple_schematic",
      "nbt": nbt,
      "amount": 1
    })
  }
  function BlueprintBuilderSetOutMore(nbt,amount) {
    return ({
      "type": "custommachinery:item",
      "mode": "output",
      "item": "createandesiteabound:simple_schematic",
      "nbt": nbt,
      "amount": amount
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
      "type": "custommachinery:item",
      "mode": "input",
      "item": item,
      "amount": 1
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
      BlueprintBuilderFliter("railways:track_create_andesite_narrow"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 512),
      BlueprintBuilderItemIn("kubejs:io_mechanism", 72),
      BlueprintBuilderItemIn("kubejs:fluid_mechanism", 18),
      BlueprintBuilderSetOutMore('{File:"CBC/schematic.train.narrow.nbt",Item:"railways:track_create_andesite_narrow"}',9)
    ], "track_create_andesite_narrow", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderFliter("railways:track_tieless_narrow"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 512),
      BlueprintBuilderItemIn("kubejs:io_mechanism", 72),
      BlueprintBuilderItemIn("kubejs:fluid_mechanism", 18),
      BlueprintBuilderSetOutMore('{File:"CBC/schematic.train.tieless_narrow.nbt",Item:"railways:track_tieless_narrow"}',9)
    ], "track_tieless_narrow", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderFliter("design_decor:metal_support"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 512),
      BlueprintBuilderItemIn("kubejs:io_mechanism", 72),
      BlueprintBuilderItemIn("kubejs:fluid_mechanism", 18),
      BlueprintBuilderSetOutMore('{File:"CBC/schematic.train.overhead.tieless_narrow.nbt",Item:"design_decor:metal_support"}',9)
    ], "metal_support", 120)

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
      BlueprintBuilderSetOut('{File:"CBC/schematic.hydropress.nbt",Item:"kubejs:hydropress"}')
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
      BlueprintBuilderSetOut('{File:"CBC/schematic.trading_station.nbt",Item:"kubejs:trading_station"}')
    ], "trading_station", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:electro_hydro_resonant_tower"),
      BlueprintBuilderDisk("kubejs:brass_hard_disk", 512),
      BlueprintBuilderItemIn("create:brass_block", 32),
      BlueprintBuilderItemIn("create:industrial_iron_block", 32),
      BlueprintBuilderItemIn("minecraft:copper_block", 16),
      BlueprintBuilderItemIn("kubejs:duraplas_ingot", 32),
      BlueprintBuilderItemIn("kubejs:carbon_electrode", 20),
      BlueprintBuilderSetOut('{File:"CBC/schematic.electro_hydro_resonant_tower.nbt",Item:"kubejs:electro_hydro_resonant_tower"}')
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
      BlueprintBuilderSetOut('{File:"CBC/schematic.space_elevator_controller.nbt",Item:"kubejs:space_elevator_controller"}')
    ], "space_elevator_controller", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:airdrop_station"),
      BlueprintBuilderDisk("kubejs:aluminum_hard_disk", 512),
      BlueprintBuilderItemIn("create:industrial_iron_block", 12),
      BlueprintBuilderItemIn("create:brass_block", 9),
      BlueprintBuilderItemIn("kubejs:mechanical_core", 16),
      BlueprintBuilderSetOut('{File:"CBC/schematic.airdrop_station.nbt",Item:"kubejs:airdrop_station"}')
    ], "airdrop_station", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:infinity_fetching_pool"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 512),
      BlueprintBuilderItemIn("create:industrial_iron_block", 16),
      BlueprintBuilderItemIn("create:brass_block", 9),
      BlueprintBuilderItemIn("createaddition:modular_accumulator", 9),
      BlueprintBuilderSetOut('{File:"CBC/schematic.infinity_fetching_pool.nbt",Item:"kubejs:infinity_fetching_pool"}')
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
      BlueprintBuilderSetOut('{File:"CBC/schematic.condenser.nbt",Item:"kubejs:condenser"}')
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
      BlueprintBuilderSetOut('{File:"CBC/schematic.construction_station.nbt",Item:"kubejs:construction_station"}')
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
      BlueprintBuilderSetOut('{File:"CBC/schematic.blasting_compressor.nbt",Item:"kubejs:blasting_compressor"}')
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
      BlueprintBuilderSetOut('{File:"CBC/schematic.electron_tube_computer.nbt",Item:"kubejs:electron_tube_computer"}')
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
      BlueprintBuilderSetOut('{File:"CBC/schematic.assembling_machine.nbt",Item:"kubejs:assembling_machine"}')
    ], "assembling_machine", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:large_difference_engine"),
      BlueprintBuilderDisk("kubejs:aluminum_hard_disk", 512),
      BlueprintBuilderItemIn("create:brass_block", 32),
      BlueprintBuilderItemIn("create:industrial_iron_block", 12),
      BlueprintBuilderItemIn("create:precision_mechanism", 16),
      BlueprintBuilderSetOut('{File:"CBC/schematic.large_difference_engine.nbt",Item:"kubejs:large_difference_engine"}')
    ], "large_difference_engine", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:satellite_station"),
      BlueprintBuilderDisk("kubejs:aluminum_hard_disk", 512),
      BlueprintBuilderItemIn("create:industrial_iron_block", 32),
      BlueprintBuilderItemIn("create:precision_mechanism", 8),
      BlueprintBuilderItemIn("ad_astra:steel_block", 8),
      BlueprintBuilderSetOut('{File:"CBC/schematic.satellite_station.nbt",Item:"kubejs:satellite_station"}')
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
      BlueprintBuilderSetOut('{File:"CBC/schematic.electrolytic_cell.nbt",Item:"kubejs:electrolytic_cell"}')
    ], "electrolytic_cell", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:alloy_furnace"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 512),
      BlueprintBuilderItemIn("create:industrial_iron_block", 64),
      BlueprintBuilderItemIn("kubejs:mechanical_core", 32),
      BlueprintBuilderItemIn("create:blaze_burner", 9),
      BlueprintBuilderSetOut('{File:"CBC/schematic.alloy_furnace.nbt",Item:"kubejs:alloy_furnace"}')
    ], "alloy_furnace", 120)
  BlueprintBuilderRecipe(
    [
      BlueprintBuilderBarrelIn(1),
      BlueprintBuilderFliter("kubejs:shaft_furnace"),
      BlueprintBuilderDisk("kubejs:tin_hard_disk", 1024),
      BlueprintBuilderItemIn("create:industrial_iron_block", 64),
      BlueprintBuilderItemIn("minecraft:copper_block", 32),
      BlueprintBuilderItemIn("create:brass_block", 24),
      BlueprintBuilderItemIn("create:precision_mechanism", 32),
      BlueprintBuilderItemIn("kubejs:mechanical_core", 32),
      BlueprintBuilderItemIn("create:blaze_burner", 9),
      BlueprintBuilderSetOut('{File:"CBC/schematic.shaft_furnace.nbt",Item:"kubejs:shaft_furnace"}'),
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
      BlueprintBuilderSetOut('{File:"CBC/schematic.launch_pad_controller.nbt",Item:"kubejs:launch_pad_controller"}')
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
      BlueprintBuilderSetOut('{File:"CBC/schematic.huge_crusher.nbt",Item:"kubejs:huge_crusher"}')
    ], "huge_crusher", 120)
})
