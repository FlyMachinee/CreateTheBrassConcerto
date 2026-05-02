ServerEvents.recipes(event => {
  const AssemblingMachineStructure =
  {
    "type": "custommachinery:general_structure",
    "id": "main"
  }
  function AssemblingMachineFluid(fluid, amount) {
    return ({
      "type": "custommachinery:fluid",
      "mode": "input",
      "fluid": fluid,
      "amount": amount
    })
  }
  function AssemblingMachineItem(item, amount, mode) {
    return ({
      "type": "custommachinery:item",
      "mode": mode,
      "item": item,
      "amount": amount
    })
  }
  function AssemblingMachineItemNbt(item, amount, mode, nbt) {
    return ({
      "type": "custommachinery:item",
      "mode": mode,
      "item": item,
      "nbt": nbt,
      "amount": amount
    })
  }
  function AssemblingMachineEnergy() {
    return ({
      "type": "custommachinery:energy_per_tick",
      "mode": "input",
      "amount": 120
    })
  }
  function AssemblingMachineDisk(item, amount) {
    return ({
      "type": "custommachinery:durability",
      "mode": "input",
      "item": item,
      "amount": amount
    })
  }

  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 1,
    "error": true,
    "priority": 10,
    "requirements": [
      AssemblingMachineStructure,
      {
        "type": "custommachinery:item",
        "mode": "input",
        "item": "kubejs:tin_hard_disk",
        "amount": 1,
        "nbt": '{Damage:1024}'
      }, {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "kubejs:tin_hard_disk",
        "amount": 1,
        "nbt": '{Damage:1024}'
      }
    ],
  }).id("dut_create:assembling_machine/disk_translate/tin")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 1,
    "error": true,
    "priority": 10,
    "requirements": [
      AssemblingMachineStructure,
      {
        "type": "custommachinery:item",
        "mode": "input",
        "item": "kubejs:aluminum_hard_disk",
        "amount": 1,
        "nbt": '{Damage:1024}'
      }, {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "kubejs:aluminum_hard_disk",
        "amount": 1,
        "nbt": '{Damage:1024}'
      }
    ],
  }).id("dut_create:assembling_machine/disk_translate/aluminum")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 1,
    "error": true,
    "priority": 10,
    "requirements": [
      AssemblingMachineStructure,
      {
        "type": "custommachinery:item",
        "mode": "input",
        "item": "kubejs:brass_hard_disk",
        "amount": 1,
        "nbt": '{Damage:1024}'
      }, {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "kubejs:brass_hard_disk",
        "amount": 1,
        "nbt": '{Damage:1024}'
      }
    ],
  }).id("dut_create:assembling_machine/disk_translate/brass")
  
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 30,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:io_mechanism", 16, "input"),
      AssemblingMachineItem("kubejs:electric_gear", 16, "input"),
      AssemblingMachineItem("kubejs:rubber", 16, "input"),
      AssemblingMachineFluid("kubejs:copper", 48*IngotFluid),
      AssemblingMachineItem("kubejs:fluid_mechanism", 16, "output")
    ],
  }).id("dut_create:assembling_machine/fluid_mechanism")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 30,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:io_mechanism", 6, "input"),
      AssemblingMachineFluid("kubejs:industrial_iron", 32*IngotFluid),
      AssemblingMachineItem("kubejs:io_mechanism", 16, "output")
    ],
  }).id("dut_create:assembling_machine/io_mechanism")

  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 30,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem('kubejs:silicon_plate', 16, "input"),
      AssemblingMachineFluid("kubejs:aluminum", 1440),
      AssemblingMachineItem("kubejs:aluminum_sheet", 16, "output")
    ],
  }).id("dut_create:assembling_machine/aluminum_sheet")

  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("minecraft:obsidian", 4, "input"),
      AssemblingMachineFluid("minecraft:lava", 8000),
      AssemblingMachineItem("create:sturdy_sheet", 16, "output")
    ],
  }).id("dut_create:assembling_machine/sturdy_sheet")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:brass_sheet", 16, "input"),
      AssemblingMachineItem("kubejs:mechanical_core", 16, "input"),
      AssemblingMachineItem("design_decor:industrial_gear", 48, "input"),
      AssemblingMachineFluid("kubejs:lube_oil", 2400),
      AssemblingMachineItem("kubejs:planetary_gear", 16, "output")
    ],
  }).id("dut_create:assembling_machine/planetary_gear")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:brass_sheet", 16, "input"),
      AssemblingMachineItem("kubejs:io_mechanism", 8, "input"),
      AssemblingMachineFluid("kubejs:lube_oil", 2400),
      AssemblingMachineItem("kubejs:planetary_gear", 16, "output")
    ],
  }).id("dut_create:assembling_machine/planetary_gear_io_mechanism")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:brass_sheet", 16, "input"),
      AssemblingMachineItem("kubejs:io_mechanism", 8, "input"),
      AssemblingMachineItem("kubejs:graphene_coil", 4, "input"),
      AssemblingMachineItem("kubejs:planetary_gear", 16, "output")
    ],
  }).id("dut_create:assembling_machine/planetary_gear_io_mechanism_graphene_coil")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:planetary_gear", 32, "input"),
      AssemblingMachineItem("create:brass_sheet", 16, "input"),
      AssemblingMachineItem("create:precision_mechanism", 16, "input"),
      AssemblingMachineItem("kubejs:differential", 32, "output")
    ],
  }).id("dut_create:assembling_machine/differential")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 120,
    "error": true,
    "priority": 3,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:industrial_iron_sheet", 8, "input"),
      AssemblingMachineItem("kubejs:industrial_iron_ingot", 12, "input"),
      AssemblingMachineItem("kubejs:graphene_coil", 3, "input"),
      AssemblingMachineItem("kubejs:bearing", 64, "output")
    ],
  }).id("dut_create:assembling_machine/bearing/graphene_coil")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 30,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:electron_tube", 16, "input"),
      AssemblingMachineItem("kubejs:bearing", 16, "input"),
      AssemblingMachineItem("design_decor:industrial_gear_large", 32, "input"),
      AssemblingMachineItem("kubejs:electric_gear", 16, "output")
    ],
  }).id("dut_create:assembling_machine/electric_gear")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:silicon_plate", 12, "input"),
      AssemblingMachineItem("create:brass_sheet", 12, "input"),
      AssemblingMachineItem("create:polished_rose_quartz", 12, "input"),
      AssemblingMachineFluid("kubejs:cryogen", 3000),
      AssemblingMachineItem("kubejs:circuit_board", 32, "output")
    ],
  }).id("dut_create:assembling_machine/circuit_board")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:lapis_plate", 16, "input"),
      AssemblingMachineItem("#forge:dyes/pink", 16, "input"),
      AssemblingMachineItem("kubejs:circuit_board", 16, "input"),
      AssemblingMachineFluid("kubejs:saline_water", 4000),
      AssemblingMachineItem("kubejs:magenta_circuit_board", 16, "output")
    ],
  }).id("dut_create:assembling_machine/magenta_circuit_board")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 120,
    "error": true,
    "priority": 3,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:industrial_iron_sheet", 8, "input"),
      AssemblingMachineItem("kubejs:industrial_iron_ingot", 12, "input"),
      AssemblingMachineFluid("kubejs:lube_oil", 1500),
      AssemblingMachineItem("kubejs:bearing", 48, "output")
    ],
  }).id("dut_create:assembling_machine/bearing")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("design_decor:industrial_plating_block", 32, "input"),
      AssemblingMachineItem("design_decor:industrial_gear_large", 32, "input"),
      AssemblingMachineItem("kubejs:mechanical_core", 96, "output")
    ],
  }).id("dut_create:assembling_machine/mechanical_core")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 30,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:industrial_iron_nugget", 64, "input"),
      AssemblingMachineItem("create:shaft", 32, "output")
    ],
  }).id("dut_create:assembling_machine/shaft")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("design_decor:industrial_plating_block", 64, "input"),
      AssemblingMachineItem("design_decor:industrial_gear", 64, "input"),
      AssemblingMachineItem("design_decor:industrial_gear_large", 64, "output")
    ],
  }).id("dut_create:assembling_machine/industrial_gear_large")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:shaft", 64, "input"),
      AssemblingMachineItem("design_decor:industrial_plating_block", 64, "input"),
      AssemblingMachineItem("design_decor:industrial_gear", 64, "output")
    ],
  }).id("dut_create:assembling_machine/industrial_gear")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 30,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:copper_sheet", 16, "input"),
      AssemblingMachineItem("kubejs:polymer_ingot", 16, "input"),
      AssemblingMachineItem("#forge:plates/gold", 16, "input"),
      AssemblingMachineItem("createaddition:capacitor", 32, "output")
    ],
  }).id("dut_create:assembling_machine/capacitor")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 20,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:brass_sheet", 20, "input"),
      AssemblingMachineItem("create:copper_sheet", 16, "input"),
      AssemblingMachineItem("#forge:plates/gold", 16, "input"),
      AssemblingMachineFluid("vintageimprovements:sulfuric_acid", 3000),
      AssemblingMachineItem("createaddition:modular_accumulator", 4, "output")
    ],
  }).id("dut_create:assembling_machine/modular_accumulator")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:electric_gear", 8, "input"),
      AssemblingMachineItem("createaddition:capacitor", 6, "input"),
      AssemblingMachineItem("createaddition:gold_spool", 6, "input"),
      AssemblingMachineFluid("kubejs:slime_colloid", 250),
      AssemblingMachineItem("createaddition:tesla_coil", 6, "output")
    ],
  }).id("dut_create:assembling_machine/tesla_coil")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 30,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:polished_rose_quartz", 32, "input"),
      AssemblingMachineItem("create:iron_sheet", 32, "input"),
      AssemblingMachineItem("create:electron_tube", 32, "output")
    ],
  }).id("dut_create:assembling_machine/electron_tube")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 30,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("minecraft:quartz", 16, "input"),
      AssemblingMachineItem("minecraft:redstone", 64, "input"),
      AssemblingMachineItem("create:polished_rose_quartz", 16, "output")
    ],
  }).id("dut_create:assembling_machine/polished_rose_quartz")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 30,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("minecraft:amethyst_shard", 24, "input"),
      AssemblingMachineItem("minecraft:redstone", 64, "input"),
      AssemblingMachineItem("create:polished_rose_quartz", 32, "output")
    ],
  }).id("dut_create:assembling_machine/polished_rose_quartz_from_amethyst")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 20,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("minecraft:copper_ingot", 16, "input"),
      AssemblingMachineItem("create:copper_sheet", 32, "input"),
      AssemblingMachineItem("create:fluid_pipe", 64, "output")
    ],
  }).id("dut_create:assembling_machine/fluid_pipe")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 20,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:brass_ingot", 16, "input"),
      AssemblingMachineItem("create:brass_sheet", 32, "input"),
      AssemblingMachineItem("create:fluid_pipe", 128, "output")
    ],
  }).id("dut_create:assembling_machine/brass_fluid_pipe")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 20,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:fluid_pipe", 32, "input"),
      AssemblingMachineItem("design_decor:industrial_gear", 32, "input"),
      AssemblingMachineItem("kubejs:bearing", 32, "input"),
      AssemblingMachineItem("create:mechanical_pump", 32, "output")
    ],
  }).id("dut_create:assembling_machine/mechanical_pump")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 20,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:fluid_pipe", 32, "input"),
      AssemblingMachineItem("kubejs:electric_gear", 32, "input"),
      AssemblingMachineItem("#forge:plates/brass", 32, "input"),
      AssemblingMachineItem("create:smart_fluid_pipe", 32, "output")
    ],
  }).id("dut_create:assembling_machine/smart_fluid_pipe")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 10,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:encased_chain_drive", 32, "input"),
      AssemblingMachineItem("design_decor:industrial_gear", 32, "input"),
      AssemblingMachineItem("create_connected:encased_chain_cogwheel", 32, "output")
    ],
  }).id("dut_create:assembling_machine/encased_chain_cogwheel")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 20,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:mechanical_core", 48, "input"),
      AssemblingMachineItem("kubejs:industrial_iron_ingot", 16, "input"),
      AssemblingMachineItem("create:encased_chain_drive", 48, "output")
    ],
  }).id("dut_create:assembling_machine/encased_chain_drive")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 10,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:gearbox", 32, "input"),
      AssemblingMachineItem("design_decor:industrial_gear_large", 32, "input"),
      AssemblingMachineItem("create_connected:parallel_gearbox", 32, "output")
    ],
  }).id("dut_create:assembling_machine/parallel_gearbox")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 20,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:mechanical_core", 48, "input"),
      AssemblingMachineItem("design_decor:industrial_plating_block", 48, "input"),
      AssemblingMachineItem("create:gearbox", 48, "output")
    ],
  }).id("dut_create:assembling_machine/gearbox")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 30,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:brass_ingot", 4, "input"),
      AssemblingMachineItem("kubejs:industrial_iron_ingot", 4, "input"),
      AssemblingMachineItem("kubejs:bearing", 6, "input"),
      AssemblingMachineFluid("kubejs:lube_oil", 500),
      AssemblingMachineItem("kubejs:cardan_joint", 1, "output")
    ],
  }).id("dut_create:assembling_machine/cardan_joint")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 3,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:industrial_iron_ingot", 3, "input"),
      AssemblingMachineItem("create:brass_sheet", 6, "input"),
      AssemblingMachineItem("kubejs:bearing", 12, "input"),
      AssemblingMachineFluid("kubejs:copper", 60*IngotFluid),
      AssemblingMachineItem("create:steam_engine", 6, "output")
    ],
  }).id("dut_create:assembling_machine/steam_engine")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 3,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:brass_casing", 6, "input"),
      AssemblingMachineFluid("kubejs:industrial_iron", 54*IngotFluid),
      AssemblingMachineItem("create:railway_casing", 24, "output")
    ],
  }).id("dut_create:assembling_machine/railway_casing")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 120,
    "error": true,
    "priority": 3,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:brass_block", 6, "input"),
      AssemblingMachineItem("kubejs:industrial_iron_sheet", 9, "input"),
      AssemblingMachineItem("create:copper_sheet", 12, "input"),
      AssemblingMachineFluid("kubejs:lube_oil", 3000),
      AssemblingMachineItem("createdieselgenerators:diesel_engine", 6, "output")
    ],
  }).id("dut_create:assembling_machine/diesel_engine")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 120,
    "error": true,
    "priority": 3,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:mechanical_core", 12, "input"),
      AssemblingMachineItem("create:mechanical_pump", 12, "input"),
      AssemblingMachineFluid("kubejs:industrial_iron", 32*IngotFluid),
      AssemblingMachineItem("vintageimprovements:vacuum_chamber", 12, "output")
    ],
  }).id("dut_create:assembling_machine/vacuum_chamber")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 40,
    "error": true,
    "priority": 3,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineFluid("kubejs:duraplas", 1600),
      AssemblingMachineItem("kubejs:empty_parts_box", 16, "output")
    ],
  }).id("dut_create:assembling_machine/empty_parts_box")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 20,
    "error": true,
    "priority": 3,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:gas_tank", 4, "input"),
      AssemblingMachineItem("kubejs:carborundum", 12, "input"),
      AssemblingMachineFluid("#forge:hydrogen", 12000, "input"),
      AssemblingMachineItem("kubejs:fuel_tank", 8, "output")
    ],
  }).id("dut_create:assembling_machine/fuel_tank/hydrogen")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 20,
    "error": true,
    "priority": 3,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:gas_tank", 8, "input"),
      AssemblingMachineItem("#forge:plates/aluminum", 8, "input"),
      AssemblingMachineFluid("kubejs:natural_gas", 8000),
      AssemblingMachineItem("kubejs:fuel_tank", 16, "output")
    ],
  }).id("dut_create:assembling_machine/fuel_tank/gas")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 3,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("ad_astra:steel_plate", 12, "input"),
      AssemblingMachineItem("kubejs:fiber_fabric", 8, "input"),
      AssemblingMachineFluid("kubejs:ammonia", 16000),
      AssemblingMachineItem("kubejs:fuel_tank", 3, "output")
    ],
  }).id("dut_create:assembling_machine/fuel_tank/ammonia")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 20,
    "error": true,
    "priority": 3,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:silicon_plate", 16, "input"),
      AssemblingMachineItem("#forge:dyes/blue", 16, "input"),
      AssemblingMachineItem("kubejs:lapis_plate", 16, "output")
    ],
  }).id("dut_create:assembling_machine/lapis_plate/plate")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 80,
    "error": true,
    "priority": 3,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineDisk("kubejs:tin_hard_disk", 1024),
      AssemblingMachineItem("kubejs:circuit_board", 45, "input"),
      AssemblingMachineItem("#forge:plates/copper", 30, "input"),
      AssemblingMachineFluid("kubejs:tin", 1350, "input"),
      AssemblingMachineItem("kubejs:speed_module", 3, "output")
    ],
  }).id("dut_create:assembling_machine/speed_module")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 80,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineDisk("kubejs:tin_hard_disk", 1024),
      AssemblingMachineItem("kubejs:speed_module", 3, "input"),
      AssemblingMachineItem("kubejs:efficiency_module", 3, "input"),
      AssemblingMachineFluid("kubejs:tin", 1350, "input"),
      AssemblingMachineItem("kubejs:productivity_module", 3, "output")
    ],
  }).id("dut_create:assembling_machine/productivity_module")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 80,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineDisk("kubejs:tin_hard_disk", 1024),
      AssemblingMachineItem("kubejs:circuit_board", 45, "input"),
      AssemblingMachineItem("#forge:plates/gold", 30, "input"),
      AssemblingMachineFluid("kubejs:tin", 1350, "input"),
      AssemblingMachineItem("kubejs:efficiency_module", 3, "output")
    ],
  }).id("dut_create:assembling_machine/efficiency_module")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 80,
    "error": true,
    "priority": 3,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineDisk("kubejs:aluminum_hard_disk", 1),
      AssemblingMachineItem("kubejs:circuit_board", 45, "input"),
      AssemblingMachineItem("#forge:plates/copper", 30, "input"),
      AssemblingMachineFluid("kubejs:tin", 1350, "input"),
      AssemblingMachineItem("kubejs:speed_module", 3, "output")
    ],
  }).id("dut_create:assembling_machine/speed_module/aluminum")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 80,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineDisk("kubejs:aluminum_hard_disk", 1),
      AssemblingMachineItem("kubejs:speed_module", 3, "input"),
      AssemblingMachineItem("kubejs:efficiency_module", 3, "input"),
      AssemblingMachineFluid("kubejs:tin", 1350, "input"),
      AssemblingMachineItem("kubejs:productivity_module", 3, "output")
    ],
  }).id("dut_create:assembling_machine/productivity_module/aluminum")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 80,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineDisk("kubejs:aluminum_hard_disk", 1),
      AssemblingMachineItem("kubejs:circuit_board", 45, "input"),
      AssemblingMachineItem("#forge:plates/gold", 30, "input"),
      AssemblingMachineFluid("kubejs:tin", 1350, "input"),
      AssemblingMachineItem("kubejs:efficiency_module", 3, "output")
    ],
  }).id("dut_create:assembling_machine/efficiency_module/aluminum")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 300,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("ad_astra:steel_plate", 4, "input"),
      AssemblingMachineItem("iceandfire:ice_dragon_blood", 4, "input"),
      AssemblingMachineItem("minecraft:blue_ice", 48, "input"),
      AssemblingMachineFluid("kubejs:cryogen", 16000, "input"),
      AssemblingMachineItem("iceandfire:dragonsteel_ice_ingot", 4, "output")
    ],
  }).id("dut_create:assembling_machine/dragonsteel_ice_ingot")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 80,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:empty_parts_box", 16, "input"),
      AssemblingMachineItem("kubejs:planetary_gear", 16, "input"),
      AssemblingMachineItem("kubejs:electric_gear", 16, "input"),
      AssemblingMachineFluid("kubejs:brass", 16*IngotFluid),
      AssemblingMachineItem("kubejs:brass_parts_box", 16, "output")
    ],
  }).id("dut_create:assembling_machine/brass_parts_box")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 40,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:empty_parts_box", 4, "input"),
      AssemblingMachineItem("ad_astra:steel_plate", 12, "input"),
      AssemblingMachineFluid("kubejs:nitrogen", 1000),
      AssemblingMachineItem("kubejs:steel_parts_box", 4, "output")
    ],
  }).id("dut_create:assembling_machine/steel_parts_box")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 20,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:steam_engine", 1, "input"),
      AssemblingMachineItem("kubejs:differential", 1, "input"),
      AssemblingMachineItem("create:smart_fluid_pipe", 1, "input"),
      AssemblingMachineFluid("#forge:diesel", 500),
      AssemblingMachineItem("createdieselgenerators:huge_diesel_engine", 1, "output")
    ],
  }).id("dut_create:assembling_machine/huge_diesel_engine")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:copper_sheet", 128, "input"),
      AssemblingMachineItem("createaddition:spool", 64, "input"),
      AssemblingMachineItem("createaddition:copper_spool", 64, "output")
    ],
  }).id("dut_create:assembling_machine/copper_spool")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:golden_sheet", 128, "input"),
      AssemblingMachineItem("createaddition:spool", 64, "input"),
      AssemblingMachineItem("createaddition:gold_spool", 64, "output")
    ],
  }).id("dut_create:assembling_machine/gold_spool")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:industrial_iron_ingot", 32, "input"),
      AssemblingMachineItem("#forge:rods/copper", 32, "input"),
      AssemblingMachineFluid("kubejs:slime_colloid", 250),
      AssemblingMachineItem("createaddition:connector", 128, "output")
    ],
  }).id("dut_create:assembling_machine/connector")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:industrial_iron_ingot", 32, "input"),
      AssemblingMachineItem("#forge:rods/gold", 16, "input"),
      AssemblingMachineFluid("kubejs:slime_colloid", 250),
      AssemblingMachineItem("createaddition:large_connector", 64, "output")
    ],
  }).id("dut_create:assembling_machine/large_connector")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("kubejs:industrial_iron_sheet", 64, "input"),
      AssemblingMachineItem("kubejs:blaze_mycoplasma", 48, "input"),
      AssemblingMachineItem("minecraft:netherrack", 16, "input"),
      AssemblingMachineItem("create:blaze_burner", 48, "output")
    ],
  }).id("dut_create:assembling_machine/blaze_burner")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:assembling_machine",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      AssemblingMachineStructure,
      AssemblingMachineEnergy(),
      AssemblingMachineItem("create:iron_sheet", 64, "input"),
      AssemblingMachineItem("minecraft:netherrack", 16, "input"),
      AssemblingMachineItem("create:empty_blaze_burner", 16, "output")
    ],
  }).id("dut_create:assembling_machine/empty_blaze_burner")
  //硬币处理！
  function CoinMix(coin1, coin2) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:assembling_machine",
      "time": 10,
      "priority": 3,
      "error": true,
      "requirements": [
        AssemblingMachineStructure,
        AssemblingMachineEnergy(),
        AssemblingMachineItem(coin1, 100, "input"),
        AssemblingMachineItem(coin2, 10, "output")
      ],
    }).id("dut_create:assembling_machine/coin_mix/" + coin2.split(':')[1])
  }
  //CoinMix("kubejs:coin_copper", "kubejs:coin_iron")
  //CoinMix("kubejs:coin_iron", "kubejs:coin_gold")
  //CoinMix("kubejs:coin_gold", "kubejs:coin_diamond")
  //CoinMix("kubejs:coin_diamond", "kubejs:coin_emerald")
  //CoinMix("kubejs:coin_emerald", "kubejs:coin_netherite")

})