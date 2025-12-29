ServerEvents.recipes(event => {
  const ElectronTubeComputerStructure =
  {
    "type": "custommachinery:structure",
    "pattern": [
      [
        "AAAAAA",
        "AAAAAA",
        "AAAAAA",
        "AAAAAA"
      ],
      [
        "ET  TE",
        "EFGGFE",
        "EFGGFE",
        "ETmDTE"
      ],
      [
        "      ",
        "IQPQPI",
        "ILLLLI",
        "      "
      ],
      [
        "      ",
        "ITSTSI",
        "ILLLLI",
        "      "
      ],
      [
        "      ",
        "ITSTSI",
        "ILLLLI",
        "      "
      ],
      [
        "      ",
        " MMMM ",
        " MMMM ",
        "      "
      ]
    ],
    "keys": {
      "S": "create:nixie_tube",
      "I": "create:framed_glass_trapdoor",
      "P": "create:stressometer",
      "E": "create:controls",
      "Q": "create:smart_fluid_pipe",
      "T": "create:display_link",
      "L": "create:display_board",
      "F": "create:railway_casing",
      "M": "create:item_drain",
      "A": "design_decor:ornate_grate",
      "G": "createaddition:modular_accumulator",
      "D": "design_decor:stepped_lever",
    },
    "jei": true
  }
  function ElectronTubeComputerFluid(fluid, amount, mode) {
    return ({
      "type": "custommachinery:fluid",
      "mode": mode,
      "fluid": fluid,
      "amount": amount
    })
  }
  function ElectronTubeComputerItem(item, amount) {
    return ({
      "type": "custommachinery:durability",
      "mode": "output",
      "item": item,
      "amount": amount
    })
  }

  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:electron_tube_computer",
    "time": 20,
    "priority": 12,
    "error": true,
    "requirements": [
      ElectronTubeComputerStructure,
      {
        "type": "custommachinery:energy_per_tick",
        "mode": "input",
        "amount": 75
      },
      {
        "type": "custommachinery:fluid_per_tick",
        "fluid": "kubejs:kibibyte",
        "mode": "output",
        "amount": 256
      }
    ],
  }).id("dut_create:electron_tube_computer/common")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:electron_tube_computer",
    "time": 60,
    "priority": 10,
    "error": true,
    "requirements": [
      ElectronTubeComputerStructure,
      {
        "type": "custommachinery:energy_per_tick",
        "mode": "input",
        "amount": 75
      },
      {
        "type": "custommachinery:fluid",
        "fluid": "kubejs:mebibyte",
        "mode": "output",
        "amount": 15
      }
    ],
  }).id("dut_create:electron_tube_computer/only_mbi")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:electron_tube_computer",
    "time": 1,
    "priority": 1,
    "hidden": true,
    "error": true,
    "requirements": [
      ElectronTubeComputerFluid("kubejs:kibibyte", 1, "input"),
      ElectronTubeComputerItem("kubejs:tin_hard_disk", 1)
    ],
  }).id("dut_create:electron_tube_computer/tin")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:electron_tube_computer",
    "time": 1,
    "priority": 2,
    "hidden": true,
    "error": true,
    "requirements": [
      ElectronTubeComputerFluid("kubejs:kibibyte", 64, "input"),
      ElectronTubeComputerItem("kubejs:tin_hard_disk", 64)
    ],
  }).id("dut_create:electron_tube_computer/tin_1")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:electron_tube_computer",
    "time": 1,
    "priority": 15,
    "hidden": true,
    "error": true,
    "requirements": [
      ElectronTubeComputerFluid("kubejs:kibibyte", 1024, "input"),
      ElectronTubeComputerItem("kubejs:tin_hard_disk", 1024)
    ],
  }).id("dut_create:electron_tube_computer/tin_2")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:electron_tube_computer",
    "time": 1,
    "priority": 1,
    "hidden": true,
    "error": true,
    "requirements": [
      ElectronTubeComputerFluid("kubejs:mebibyte", 1, "input"),
      ElectronTubeComputerItem("kubejs:aluminum_hard_disk", 1)
    ],
  }).id("dut_create:electron_tube_computer/aluminum")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:electron_tube_computer",
    "time": 1,
    "priority": 2,
    "hidden": true,
    "error": true,
    "requirements": [
      ElectronTubeComputerFluid("kubejs:mebibyte", 8, "input"),
      ElectronTubeComputerItem("kubejs:aluminum_hard_disk", 8)
    ],
  }).id("dut_create:electron_tube_computer/aluminum_1")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:electron_tube_computer",
    "time": 1,
    "priority": 15,
    "hidden": true,
    "error": true,
    "requirements": [
      ElectronTubeComputerFluid("kubejs:mebibyte", 1024, "input"),
      ElectronTubeComputerItem("kubejs:aluminum_hard_disk", 1024)
    ],
  }).id("dut_create:electron_tube_computer/aluminum_2")
})