ServerEvents.recipes(event => {
  const ConstructionStationStructure =
  {
    "type": "custommachinery:structure",
    "pattern": [
      [
        "AAAAA  ",
        "AAAAAA ",
        "AAAATTT",
        "AAAATUT",
        "AAAATTT",
        "AAAAAA "
      ],
      [
        "BCCC   ",
        "BFGGC  ",
        "BF OCC ",
        "BF VCWC",
        "BCJCCC ",
        "  J    "
      ],
      [
        " CDD   ",
        " H  D  ",
        " HG DP ",
        " HX DWP",
        " CXCCP ",
        "  m    "
      ],
      [
        "SAAA   ",
        "IJKLA  ",
        "IJQRAY ",
        "JJJLAWY",
        "SAAAAY ",
        "       "
      ],
      [
        " EEE   ",
        " EEEE  ",
        " EEEE  ",
        " EEEEW ",
        " EEEE  ",
        "       "
      ],
      [
        "       ",
        "       ",
        "       ",
        "     Z ",
        "       ",
        "       "
      ]
    ],
    "keys": {
      "P": "create:brass_funnel",
      "F": "create:andesite_casing",
      "A": "create:copper_casing",
      "Z": "create:millstone",
      "D": "design_decor:tinted_framed_glass",
      "C": "create:secondary_linear_chassis",
      "G": "create:depot",
      "V": "create:basin",
      "I": "design_decor:industrial_gear",
      "K": "create:deployer",
      "O": "create:mechanical_arm",
      "E": "minecraft:smooth_stone_slab",
      "L": "create:mechanical_press",
      "W": "design_decor:industrial_iron_boiler",
      "Q": "create:mechanical_saw",
      "U": "design_decor:brass_boiler_large",
      "T": "design_decor:brass_boiler_structure",
      "B": "create:item_drain",
      "J": "create:gearbox",
      "S": "create:spout",
      "X": "create:encased_chain_drive",
      "H": "design_decor:industrial_gear_large",
      "R": "vintageimprovements:laser",
      "Y": "design_decor:diagonal_girder"
    },
    "jei": true
  }
  const ConstructionStationStress = {
    "type": "custommachinery:contraption",
    "mode": "input",
    "speed": 256
  }
  function ConstructionStationFluid(fluid, amount) {
    return ({
      "type": "custommachinery:fluid",
      "mode": "input",
      "fluid": fluid,
      "amount": amount
    })
  }
  function ConstructionStationItem(item, amount, mode) {
    return ({
      "type": "custommachinery:item",
      "mode": mode,
      "item": item,
      "amount": amount
    })
  }
  function ConstructionStationEnergy() {
    return ({
      "type": "custommachinery:energy_per_tick",
      "mode": "input",
      "amount": 150
    })
  }
  function ConstructionStationCustomEnergy(energy) {
    return ({
      "type": "custommachinery:energy_per_tick",
      "mode": "input",
      "amount": energy
    })
  }
  function ConstructionStationDisk(item, amount) {
    return ({
      "type": "custommachinery:durability",
      "mode": "input",
      "item": item,
      "amount": amount
    })
  }
  function ConstructionStationItemChance(item, amount, chance) {
    return ({
      "type": "custommachinery:item",
      "mode": "output",
      "chance": chance,
      "item": item,
      "amount": amount
    })
  }
  function ConstructionStationItemNbt(item, amount,nbt, mode) {
    return ({
      "type": "custommachinery:item",
      "mode": mode,
      "nbt": nbt,
      "item": item,
      "amount": amount
    })
  }
  function ConstructionStationDimension(dim) {
    return ({
      "type": "custommachinery:dimension",
      "filter": dim,
      "blacklist": false
    })
  }
  
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 1,
    "error": true,
    "priority": 10,
    "requirements": [
      ConstructionStationStructure,
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
  }).id("dut_create:construction_station/disk_translate/tin")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 1,
    "error": true,
    "priority": 10,
    "requirements": [
      ConstructionStationStructure,
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
  }).id("dut_create:construction_station/disk_translate/aluminum")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 1,
    "error": true,
    "priority": 10,
    "requirements": [
      ConstructionStationStructure,
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
  }).id("dut_create:construction_station/disk_translate/brass")

  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationCustomEnergy(360),
      ConstructionStationDimension("minecraft:the_nether"),
      ConstructionStationItem("#dut_create:fire_dragonscales", 2, "input"),
      ConstructionStationItem('iceandfire:fire_dragon_heart', 4, "input"),
      ConstructionStationItem('iceandfire:fire_dragon_flesh', 6, "input"),
      ConstructionStationItem('iceandfire:fire_dragon_blood', 8, "input"),
      ConstructionStationFluid("kubejs:gold", 810),
      ConstructionStationItemChance('iceandfire:dragonegg_red', 1, 1),
      ConstructionStationItemChance('iceandfire:dragonegg_red', 1, 0.5)
    ],
  }).id("dut_create:construction_station/fire_dragonegg_nether")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationCustomEnergy(360),
      ConstructionStationItem("#dut_create:fire_dragonscales", 2, "input"),
      ConstructionStationItem('iceandfire:fire_dragon_heart', 4, "input"),
      ConstructionStationItem('iceandfire:fire_dragon_flesh', 6, "input"),
      ConstructionStationItem('iceandfire:fire_dragon_blood', 8, "input"),
      ConstructionStationFluid("kubejs:covariant_heat", 250),
      ConstructionStationFluid("kubejs:gold", 810),
      ConstructionStationItemChance('iceandfire:dragonegg_red', 1, 1),
      ConstructionStationItemChance('iceandfire:dragonegg_red', 1, 0.5)
    ],
  }).id("dut_create:construction_station/fire_dragonegg")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationCustomEnergy(720),
      ConstructionStationItem("kubejs:graphene_coil", 3, "input"),
      ConstructionStationFluid("kubejs:electro_hydro", 250),
      ConstructionStationFluid("kubejs:tin", 500),
      ConstructionStationItem("kubejs:carbon_electrode", 48, "output")
    ],
  }).id("dut_create:construction_station/carbon_electrode")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationEnergy(),
      ConstructionStationItem("create:brass_sheet", 16, "input"),
      ConstructionStationItem("kubejs:mechanical_core", 16, "input"),
      ConstructionStationItem("design_decor:industrial_gear", 48, "input"),
      ConstructionStationItem("kubejs:graphene_coil", 4, "input"),
      ConstructionStationItem("kubejs:planetary_gear", 24, "output")
    ],
  }).id("dut_create:construction_station/planetary_gear/graphene_coil")

  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 120,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationFluid("kubejs:aluminum", 1440),
      ConstructionStationFluid("kubejs:gold", 360),
      ConstructionStationFluid("kubejs:slime_colloid", 750),
      ConstructionStationItem("kubejs:cheese_moonalgae", 4, "input"),
      ConstructionStationItem("ad_astra:ostrum_plate", 12, "output")
    ],
  }).id("dut_create:construction_station/ostrum")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 80,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("createdieselgenerators:diesel_engine", 4, "input"),
      ConstructionStationItem("create:mechanical_pump", 12, "input"),
      ConstructionStationFluid("kubejs:duraplas", 1000),
      ConstructionStationFluid("kubejs:desh", 720),
      ConstructionStationItem("ad_astra:desh_fluid_pipe", 64, "output")
    ],
  }).id("dut_create:construction_station/desh_fluid_pipe")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 80,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("kubejs:solar_panel", 4, "input"),
      ConstructionStationItem("create:mechanical_pump", 12, "input"),
      ConstructionStationFluid("kubejs:duraplas", 1000),
      ConstructionStationFluid("kubejs:desh", 360),
      ConstructionStationItem("ad_astra:desh_fluid_pipe", 64, "output")
    ],
  }).id("dut_create:construction_station/desh_fluid_pipe_solar")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 80,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("createdieselgenerators:diesel_engine", 8, "input"),
      ConstructionStationItem("ad_astra:desh_fluid_pipe", 64, "input"),
      ConstructionStationItem("ad_astra:ostrum_plate", 32, "input"),
      ConstructionStationFluid("kubejs:duraplas", 1000),
      ConstructionStationItem("ad_astra:ostrum_fluid_pipe", 64, "output")
    ],
  }).id("dut_create:construction_station/ostrum_fluid_pipe")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 80,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("kubejs:solar_panel", 8, "input"),
      ConstructionStationItem("ad_astra:desh_fluid_pipe", 64, "input"),
      ConstructionStationItem("ad_astra:ostrum_plate", 16, "input"),
      ConstructionStationFluid("kubejs:duraplas", 1000),
      ConstructionStationItem("ad_astra:ostrum_fluid_pipe", 64, "output")
    ],
  }).id("dut_create:construction_station/ostrum_fluid_pipe_solar")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 240,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("kubejs:silicon_plate", 16, "input"),
      ConstructionStationItem("#forge:dyes/magenta", 16, "input"),
      ConstructionStationItem("create:polished_rose_quartz", 48, "input"),
      ConstructionStationFluid("kubejs:slime_colloid", 6000),
      ConstructionStationItem("kubejs:magenta_circuit_board", 64, "output")
    ],
  }).id("dut_create:construction_station/magenta_circuit_board")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 240,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("kubejs:magenta_circuit_board", 48, "input"),
      ConstructionStationItem("kubejs:circuit_board", 48, "input"),
      ConstructionStationFluid("kubejs:slime_colloid", 4000),
      ConstructionStationFluid("kubejs:muriatic_acid", 4000),
      ConstructionStationItem("kubejs:lime_circuit_board", 64, "output")
    ],
  }).id("dut_create:construction_station/lime_circuit_board")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 120,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("kubejs:magenta_circuit_board", 16, "input"),
      ConstructionStationItem("kubejs:electric_gear", 16, "input"),
      ConstructionStationItem("create:mechanical_pump", 16, "input"),
      ConstructionStationItem("create:sturdy_sheet", 16, "input"),
      ConstructionStationFluid("kubejs:gold", 900),
      ConstructionStationFluid("kubejs:slime_colloid", 1800),
      ConstructionStationItem("create:precision_mechanism", 24, "output")
    ],
  }).id("dut_create:construction_station/precision_mechanism")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 180,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("create:sturdy_sheet", 16, "input"),
      ConstructionStationItem("kubejs:fluid_mechanism", 32, "input"),
      ConstructionStationItem("kubejs:circuit_board", 16, "input"),
      ConstructionStationFluid("kubejs:brass", 4320),
      ConstructionStationItem("create:precision_mechanism", 16, "output")
    ],
  }).id("dut_create:construction_station/precision_mechanism_set")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 120,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("kubejs:bearing", 1, "input"),
      ConstructionStationFluid("kubejs:brass", 540),
      ConstructionStationFluid("kubejs:slime_colloid", 250),
      ConstructionStationFluid("kubejs:lube_oil", 2000),
      ConstructionStationItem("create:brass_hand", 4, "output")
    ],
  }).id("dut_create:construction_station/brass_hand")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 120,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("create:brass_hand", 4, "input"),
      ConstructionStationItem("kubejs:differential", 4, "input"),
      ConstructionStationItem("kubejs:cardan_joint", 4, "input"),
      ConstructionStationItem("create_connected:control_chip", 4, "input"),
      ConstructionStationFluid("kubejs:slime_colloid", 500),
      ConstructionStationItem("create:mechanical_arm", 4, "output")
    ],
  }).id("dut_create:construction_station/mechanical_arm")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("create:precision_mechanism", 4, "input"),
      ConstructionStationItem("kubejs:electric_gear", 12, "input"),
      ConstructionStationItem("createaddition:capacitor", 12, "input"),
      ConstructionStationItem("createaddition:gold_spool", 12, "input"),
      ConstructionStationFluid("kubejs:lube_oil", 500),
      ConstructionStationItem("createaddition:electric_motor", 6, "output")
    ],
  }).id("dut_create:construction_station/electric_motor")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("kubejs:bridge_rectifier", 4, "input"),
      ConstructionStationItem("kubejs:magenta_circuit_board", 12, "input"),
      ConstructionStationItem("createaddition:capacitor", 12, "input"),
      ConstructionStationItem("createaddition:gold_spool", 12, "input"),
      ConstructionStationFluid("kubejs:lube_oil", 500),
      ConstructionStationItem("createaddition:alternator", 6, "output")
    ],
  }).id("dut_create:construction_station/alternator")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("kubejs:industrial_iron_sheet", 6, "input"),
      ConstructionStationItem("#forge:wires", 24, "input"),
      ConstructionStationItem("create:electron_tube", 24, "input"),
      ConstructionStationFluid("kubejs:slime_colloid", 1000),
      ConstructionStationItem("kubejs:bridge_rectifier", 8, "output")
    ],
  }).id("dut_create:construction_station/bridge_rectifier")

  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 120,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationFluid("kubejs:aluminum", 1800),
      ConstructionStationFluid("kubejs:copper", 720),
      ConstructionStationFluid("kubejs:slime_colloid", 750),
      ConstructionStationItem("kubejs:duraplas_sheet", 4, "input"),
      ConstructionStationItem("kubejs:light_composite_plate", 12, "output")
    ],
  }).id("dut_create:construction_station/light_composite_plate/metal")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 120,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("kubejs:fiber_fabric", 36, "input"),
      ConstructionStationFluid("kubejs:copper", 540),
      ConstructionStationFluid("kubejs:slime_colloid", 750),
      ConstructionStationItem("kubejs:duraplas_sheet", 4, "input"),
      ConstructionStationItem("kubejs:light_composite_plate", 12, "output")
    ],
  }).id("dut_create:construction_station/light_composite_plate/carbon")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 120,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("#dut_create:ice_dragonscales", 16, "input"),
      ConstructionStationFluid("kubejs:aluminum", 1440),
      ConstructionStationItem("kubejs:light_composite_plate", 12, "output")
    ],
  }).id("dut_create:construction_station/light_composite_plate/scales")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 60,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("#forge:plates/aluminum", 16, "input"),
      ConstructionStationFluid("#forge:oxygen", 16000),
      ConstructionStationFluid("kubejs:cryogen", 8000),
      ConstructionStationItem("kubejs:gas_tank", 16, "output")
    ],
  }).id("dut_create:construction_station/gas_tank")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 180,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("kubejs:differential", 4, "input"),
      ConstructionStationItem("kubejs:productivity_module", 12, "input"),
      ConstructionStationItem("kubejs:cardan_joint", 12, "input"),
      ConstructionStationFluid("kubejs:slime_colloid", 3000),
      ConstructionStationItem("kubejs:rocket_gyro", 6, "output")
    ],
  }).id("dut_create:construction_station/rocket_gyro")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 80,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("kubejs:empty_parts_box", 16, "input"),
      ConstructionStationFluid("kubejs:desh", 3600),
      ConstructionStationItem("kubejs:desh_parts_box", 16, "output")
    ],
  }).id("dut_create:construction_station/desh_parts_box")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 120,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("kubejs:empty_parts_box", 16, "input"),
      ConstructionStationItem("#forge:plates/tungsten", 16, "input"),
      ConstructionStationItem("#forge:plates/tin", 16, "input"),
      ConstructionStationItem("kubejs:fiber_fabric", 16, "input"),
      ConstructionStationItem("kubejs:parts_box", 24, "output")
    ],
  }).id("dut_create:construction_station/parts_box_tungsten")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 120,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("kubejs:desh_parts_box", 16, "input"),
      ConstructionStationItem("kubejs:light_composite_plate", 16, "input"),
      ConstructionStationItem("kubejs:fiber_fabric", 16, "input"),
      ConstructionStationItem("kubejs:parts_box", 16, "output")
    ],
  }).id("dut_create:construction_station/parts_box")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 80,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("create:sturdy_sheet", 4, "input"),
      ConstructionStationItem("#forge:plates/aluminum", 16, "input"),
      ConstructionStationItem("#forge:plates/copper", 4, "input"),
      ConstructionStationFluid("kubejs:cryogen", 1000),
      ConstructionStationFluid("kubejs:slime_colloid", 1000),
      ConstructionStationItem("kubejs:radiator", 48, "output")
    ],
  }).id("dut_create:construction_station/radiator/aluminum")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 80,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItem("create:sturdy_sheet", 4, "input"),
      ConstructionStationItem("#forge:plates/copper", 16, "input"),
      ConstructionStationItem("create:fluid_pipe", 8, "input"),
      ConstructionStationFluid("kubejs:cryogen", 1000),
      ConstructionStationFluid("kubejs:slime_colloid", 1000),
      ConstructionStationItem("kubejs:radiator", 24, "output")
    ],
  }).id("dut_create:construction_station/radiator/copper")

  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 160,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItemNbt("kubejs:aluminum_hard_disk", 1,"{Damage:0}", "input"),
      ConstructionStationItemNbt("kubejs:aluminum_hard_disk", 1,"{Damage:1024}", "output"),
      //ConstructionStationDisk("kubejs:aluminum_hard_disk", 1024),
      ConstructionStationItem("kubejs:magenta_circuit_board", 45, "input"),
      ConstructionStationItem("ad_astra:desh_plate", 45, "input"),
      ConstructionStationItem("kubejs:speed_module", 24, "input"),
      ConstructionStationItem("kubejs:speed_module_2", 3, "output")
    ],
  }).id("dut_create:construction_station/speed_module_2")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 160,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItemNbt("kubejs:aluminum_hard_disk", 1,"{Damage:0}", "input"),
      ConstructionStationItemNbt("kubejs:aluminum_hard_disk", 1,"{Damage:1024}", "output"),
      ConstructionStationItem("kubejs:efficiency_module_2", 3, "input"),
      ConstructionStationItem("kubejs:speed_module_2", 3, "input"),
      ConstructionStationItem("kubejs:productivity_module", 24, "input"),
      ConstructionStationItem("kubejs:productivity_module_2", 3, "output")
    ],
  }).id("dut_create:construction_station/productivity_module_2")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 160,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItemNbt("kubejs:aluminum_hard_disk", 1,"{Damage:0}", "input"),
      ConstructionStationItemNbt("kubejs:aluminum_hard_disk", 1,"{Damage:1024}", "output"),
      ConstructionStationItem("kubejs:magenta_circuit_board", 45, "input"),
      ConstructionStationItem("ad_astra:desh_plate", 45, "input"),
      ConstructionStationItem("kubejs:efficiency_module", 24, "input"),
      ConstructionStationItem("kubejs:efficiency_module_2", 3, "output")
    ],
  }).id("dut_create:construction_station/efficiency_module_2")

  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 160,
    "error": true,
    "priority": 3,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationDisk("kubejs:brass_hard_disk", 1),
      ConstructionStationItem("kubejs:magenta_circuit_board", 45, "input"),
      ConstructionStationItem("ad_astra:desh_plate", 45, "input"),
      ConstructionStationItem("kubejs:speed_module", 24, "input"),
      ConstructionStationItem("kubejs:speed_module_2", 3, "output")
    ],
  }).id("dut_create:construction_station/speed_module_2/brass")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 160,
    "error": true,
    "priority": 3,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationDisk("kubejs:brass_hard_disk", 1),
      ConstructionStationItem("kubejs:efficiency_module_2", 3, "input"),
      ConstructionStationItem("kubejs:speed_module_2", 3, "input"),
      ConstructionStationItem("kubejs:productivity_module", 24, "input"),
      ConstructionStationItem("kubejs:productivity_module_2", 3, "output")
    ],
  }).id("dut_create:construction_station/productivity_module_2/brass")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 160,
    "error": true,
    "priority": 3,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationDisk("kubejs:brass_hard_disk", 1),
      ConstructionStationItem("kubejs:magenta_circuit_board", 45, "input"),
      ConstructionStationItem("ad_astra:desh_plate", 45, "input"),
      ConstructionStationItem("kubejs:efficiency_module", 24, "input"),
      ConstructionStationItem("kubejs:efficiency_module_2", 3, "output")
    ],
  }).id("dut_create:construction_station/efficiency_module_2/brass")

  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 3600,
    "error": true,
    "priority": 1,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationEnergy(),
      ConstructionStationItemNbt("kubejs:brass_hard_disk", 1,"{Damage:0}", "input"),
      ConstructionStationItemNbt("kubejs:brass_hard_disk", 1,"{Damage:1024}", "output"),
      ConstructionStationItem("kubejs:productivity_module_2", 3, "input"),
      ConstructionStationItem("createdieselgenerators:distillation_controller", 3, "input"),
      ConstructionStationItem("createloveandwar:thermostat", 3, "output")
    ],
  }).id("dut_create:construction_station/thermostat")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:construction_station",
    "time": 120,
    "error": true,
    "priority": 3,
    "requirements": [
      ConstructionStationStructure,
      ConstructionStationStress,
      ConstructionStationCustomEnergy(16384),
      ConstructionStationItemNbt("kubejs:brass_hard_disk", 1,"{Damage:0}", "input"),
      ConstructionStationItemNbt("kubejs:brass_hard_disk", 1,"{Damage:1024}", "output"),
      ConstructionStationItem("kubejs:mycetozoan", 1, "input"),
      ConstructionStationItem("create:empty_schematic", 1, "input"),
      ConstructionStationItem("kubejs:creative_motor_blueprint", 1, "input"),
      ConstructionStationItem("kubejs:creative_motor_blueprint", 2, "output")
    ],
  }).id("dut_create:construction_station/creative_motor_blueprint")
})