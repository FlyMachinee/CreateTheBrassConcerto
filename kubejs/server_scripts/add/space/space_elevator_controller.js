ServerEvents.recipes(event => {
  const SpaceELevatorStructure ={
    "type": "custommachinery:general_structure",
    "id": "main"
  }
  const SpaceELevatorDataOut = {
    "type": "custommachinery:item",
    "mode": "output",
    "item": "kubejs:navigate_data_empty",
    "amount": 1
  }
  const SpaceELevatorSound = {
    "type": "custommachinery:sound",
    "phase": "ending",
    "sound": "create:steam",
    "pos": [0.5, 2.5, 0.5],
    "volume": 0.3
  }
  const SpaceELevatorRedstone = {
    "type": "custommachinery:redstone",
    "power": "(1,)"
  }
  const SpaceELevatorCheck = {
    "type": "custommachinery:entity",
    "mode": "input",
    "amount": 4,
    "radius": 12,
    "action": "check_amount",
    "filter": ["minecraft:block_display"],
    "whitelist": true
  }
  const SpaceELevatorDimension = {
    "type": "custommachinery:dimension",
    "filter": ['minecraft:overworld', 'minecraft:the_nether', 'minecraft:the_end', 'ad_astra:moon', 'ad_astra:glacio', 'dut:slimeria'],
    "blacklist": false
  }
  function SpaceELevatorDurability(item, amount, mode, breakable) {
    return ({
      "type": "custommachinery:durability",
      "mode": mode,
      "item": item,
      "amount": amount,
      "break": breakable
    })
  }
  function SpaceELevatorFluid(fluid, amount) {
    return ({
      "type": "custommachinery:fluid",
      "mode": "input",
      "fluid": fluid,
      "amount": amount
    })
  }
  function SpaceELevatorItem(item, amount, mode) {
    return ({
      "type": "custommachinery:item",
      "mode": mode,
      "item": item,
      "amount": amount
    })
  }
  function SpaceELevatorFrom(Start) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:space_elevator_controller",
      "time": 320,
      "error": true,
      "requirements": [
        SpaceELevatorStructure,
        SpaceELevatorRocketIn,
        SpaceELevatorDataOut,
        {
          "type": "custommachinery:command",
          "phase": "starting",
          "command": "/function dut:carrier_rocket/set_launch_pad/to_" + target,
          "log": false,
          "permissionlevel": 5
        }
      ],
      "jei": [
        SpaceELevatorStructure,
        SpaceELevatorRocketIn,
        SpaceELevatorItem("kubejs:navigate_data_" + target, 1, "input"),
      ]
    }).id("dut_create:space_elevator_controller/rocket_" + target)
  }
  function SpaceELevatorEnergyInput(amount) {
    return ({
      "type": "custommachinery:energy_per_tick",
      "mode": "input",
      "amount": amount
    })
  }
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:space_elevator_controller",
    "time": 10,
    "error": true,
    "hidden": true,
    "priority": 2,
    "requirements": [
      SpaceELevatorStructure,
      SpaceELevatorCheck,
      SpaceELevatorDimension,
      SpaceELevatorEnergyInput(6144)
    ]
  }).id("dut_create:space_elevator_controller/empty")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:space_elevator_controller",
    "time": 1,
    "error": true,
    "priority": 3,
    "requirements": [
      SpaceELevatorDimension,
      {
        "type": "custommachinery:fluid",
        "mode": "output",
        "fluid": "kubejs:gibibyte",
        "amount": 1024
      },
      SpaceELevatorDurability("kubejs:brass_hard_disk", 1024, "input", false)
    ]
  }).id("dut_create:space_elevator_controller/data")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:space_elevator_controller",
    "time": 30,
    "error": true,
    "priority": 5,
    "requirements": [
      SpaceELevatorStructure,
      SpaceELevatorDimension,
      SpaceELevatorSound,
      SpaceELevatorCheck,
      SpaceELevatorEnergyInput(12288),
      SpaceELevatorItem("kubejs:differential", 6, "input"),
      SpaceELevatorItem("kubejs:carbon_electrode", 6, "input"),
      SpaceELevatorItem("kubejs:steel_parts_box", 2, "input"),
      SpaceELevatorDurability("kubejs:space_elevator", 1, "output", false)
    ],
    "jei": [
      SpaceELevatorStructure,
      SpaceELevatorDimension,
      SpaceELevatorEnergyInput(12288),
      SpaceELevatorItem("kubejs:differential", 6, "input"),
      SpaceELevatorItem("kubejs:carbon_electrode", 6, "input"),
      SpaceELevatorItem("kubejs:steel_parts_box", 2, "input"),
      SpaceELevatorDurability("kubejs:space_elevator", 1, "output", false)
    ]
  }).id("dut_create:space_elevator_controller/repair")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:space_elevator_controller",
    "time": 1,
    "error": true,
    "hidden": true,
    "priority": 3,
    "requirements": [
      SpaceELevatorStructure,
      SpaceELevatorDimension,
      SpaceELevatorEnergyInput(16384),
      SpaceELevatorRedstone,
      SpaceELevatorCheck,
      SpaceELevatorFluid("kubejs:gibibyte", 8),
      SpaceELevatorDurability("kubejs:space_elevator", 1, "input", false),
      {
        "type": "custommachinery:fluid",
        "mode": "output",
        "fluid": "minecraft:water",
        "amount": 500
      }
    ]
  }).id("dut_create:space_elevator_controller/launch_prepare")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:space_elevator_controller",
    "time": 409,
    "error": false,
    "priority": 5,
    "requirements": [
      SpaceELevatorStructure,
      SpaceELevatorDimension,
      SpaceELevatorCheck,
      SpaceELevatorEnergyInput(16384),
      SpaceELevatorFluid("minecraft:water", 500),
      {
        "type": "custommachinery:command",
        "phase": "starting",
        "command": "/function dut:space_elevator/control_pad/set_elevator",
        "log": false,
        "permissionlevel": 5
      }
    ],
    "jei": [
      SpaceELevatorStructure,
      SpaceELevatorDimension,
      SpaceELevatorRedstone,
      SpaceELevatorEnergyInput(16384),
      SpaceELevatorFluid("minecraft:water", 500),
      SpaceELevatorFluid("kubejs:gibibyte", 8),
      SpaceELevatorDurability("kubejs:space_elevator", 1, "input", false)
    ]
  }).id("dut_create:space_elevator_controller/launch")

  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:space_elevator_controller",
    "time": 600,
    "error": false,
    "priority": 1,
    "requirements": [
      SpaceELevatorStructure,
      SpaceELevatorDimension,
      SpaceELevatorEnergyInput(36864),
      SpaceELevatorFluid("kubejs:gibibyte", 1024),
      SpaceELevatorItem("kubejs:electro_hydro_capacitor", 16, "input"),
      SpaceELevatorItem("kubejs:steel_parts_box", 64, "input"),
      SpaceELevatorItem("kubejs:carbon_electrode", 64, "input"),
      SpaceELevatorItem("kubejs:carrier_rocket", 1, "input"),
      {
        "type": "custommachinery:command",
        "phase": "starting",
        "command": "/function dut:space_elevator/control_pad/build",
        "log": false,
        "permissionlevel": 5
      }
    ],
    "jei": [
      SpaceELevatorStructure,
      SpaceELevatorDimension,
      SpaceELevatorEnergyInput(36864),
      SpaceELevatorFluid("kubejs:gibibyte", 1024),
      SpaceELevatorItem("kubejs:electro_hydro_capacitor", 16, "input"),
      SpaceELevatorItem("kubejs:steel_parts_box", 64, "input"),
      SpaceELevatorItem("kubejs:carbon_electrode", 64, "input"),
      SpaceELevatorItem("kubejs:carrier_rocket", 1, "input")
    ]
  }).id("dut_create:space_elevator_controller/build")
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": true,
    "key": {
      "E": { "item": "kubejs:light_composite_plate" },
      "B": { "item": "kubejs:mycetozoan" },
      "C": { "item": "kubejs:rocket_gyro" },
      "D": { "item": "kubejs:lime_circuit_board" },
      "A": { "item": "createloveandwar:tungsten_sheet" },
      "F": { "item": "kubejs:electro_hydro_capacitor" },
      "G": { "item": "kubejs:productivity_module_2" }
    },
    "pattern": [
      "FEEEF",
      "GDDDG",
      "GCBCG",
      "GAAAG",
      "FEEEF"
    ],
    "result": { "item": "kubejs:space_elevator", "nbt": { Damage: 12 } }
  }
  ).id("dut_create:space_elevator")
})