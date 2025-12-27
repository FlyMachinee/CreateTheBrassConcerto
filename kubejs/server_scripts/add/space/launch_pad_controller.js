ServerEvents.recipes(event => {
  const LaunchPadStructure =
  {
    "type": "custommachinery:structure",
    "pattern": [
      [
        "   MMM   ",
        "  IMKMI  ",
        " IIMMMII ",
        "MMMXIXMMM",
        "MKMIIIMKM",
        "MMMXIXMMM",
        " IIMMMII ",
        "  IMKMI  ",
        "  DMMMD  "
      ],
      [
        "         ",
        "  I   I  ",
        " II   II ",
        "  I   I  ",
        "  X   X  ",
        "  I   I  ",
        " IINNNII ",
        "  IL LI  ",
        "  EE EE  ",
      ],
      [
        "         ",
        "         ",
        "  V   V  ",
        "  V   V  ",
        "         ",
        "  V   V  ",
        "  Q m Q  ",
        "         ",
        "         "
      ],
      [
        "         ",
        "         ",
        "  RA AR  ",
        "  V   V  ",
        "         ",
        "  V   V  ",
        "  Q   Q  ",
        "         ",
        "         "
      ],
      [
        "         ",
        "         ",
        "   SHS   ",
        "  SZZZS  ",
        " ]HZZZH] ",
        "  SZZZS  ",
        "  RSHSR  ",
        "         ",
        "         "
      ],
      [
        "         ",
        "         ",
        "   VVV   ",
        "  V   V  ",
        "         ",
        "  V   V  ",
        "   VVV   ",
        "         ",
        "         "
      ],
      [
        "         ",
        "         ",
        "         ",
        "  [   [  ",
        "  [   [  ",
        "  [   [  ",
        "         ",
        "         ",
        "         "
      ],
      [
        "         ",
        "         ",
        "         ",
        "  [   [  ",
        "  [   [  ",
        "  [   [  ",
        "         ",
        "         ",
        "         "
      ],
      [
        "         ",
        "         ",
        "         ",
        "  [   [  ",
        "  [   [  ",
        "  [   [  ",
        "         ",
        "         ",
        "         "
      ]
    ],
    "keys": {
      "M": "design_decor:brass_boiler_structure",
      "V": "create:metal_girder",
      "Q": "create:gantry_shaft",
      "H": "design_decor:industrial_iron_boiler",
      "E": "create:fluid_pipe",
      "X": "design_decor:brass_boiler",
      "K": "design_decor:brass_boiler_large",
      "Z": "create:depot",
      "N": "create:encased_fluid_pipe",
      "]": "design_decor:cast_iron_boiler",
      "A": "design_decor:diagonal_metal_support",
      "L": "create:smart_fluid_pipe",
      "R": "design_decor:diagonal_girder",
      "S": "create:industrial_iron_block",
      "I": "create_things_and_misc:brass_bricks",
      "D": "create:mechanical_pump",
      "[": "design_decor:ornate_grate"
    },
    "jei": true
  }
  const LaunchPadRocketIn = {
    "type": "custommachinery:item",
    "mode": "input",
    "item": "kubejs:carrier_rocket",
    "amount": 1,
    "nbt": "{Damage:0}"
  }
  const LaunchPadDataOut = {
    "type": "custommachinery:item",
    "mode": "output",
    "item": "kubejs:navigate_data_empty",
    "amount": 1
  }
  const LaunchPadSound = {
    "type": "custommachinery:command",
    "phase": "ending",
    "command": "/playsound create:steam block @a[distance=..48] ~ ~2.5 ~ 0.3",
    "log": false,
    "permissionlevel": 5
  }
  const LaunchPadRedstone = {
    "type": "custommachinery:redstone",
    "power": "(1,)"
  }
  function LaunchPadFluid(amount, mode) {
    return ({
      "type": "custommachinery:fluid",
      "mode": mode,
      "fluid": "kubejs:cryogen",
      "amount": amount
    })
  }
  function LaunchPadItem(item, amount, mode) {
    return ({
      "type": "custommachinery:item",
      "mode": mode,
      "item": item,
      "amount": amount
    })
  }
  const LaunchOrbit = {
    "type": "custommachinery:biome",
    "filter": ["ad_astra:orbit"],
    "blacklist": false
  }
  const LaunchGround = {
    "type": "custommachinery:biome",
    "filter": ["ad_astra:orbit"],
    "blacklist": true
  }
  function LaunchPadTo(target) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:launch_pad_controller",
      "time": 320,
      "error": true,
      "hidden": true,
      "priority": 10,
      "requirements": [
        LaunchPadStructure,
        LaunchPadItem("kubejs:navigate_data_" + target, 1, "input"),
        LaunchPadDataOut,
        LaunchGround,
        LaunchPadFluid(12000, "input"),
        LaunchPadItem("kubejs:parts_box", 12, "input"),
        LaunchPadItem("kubejs:fuel_tank", 12, "input"),
        {
          "type": "custommachinery:command",
          "phase": "starting",
          "command": "/function dut:carrier_rocket/set_launch_pad/to_" + target,
          "log": false,
          "permissionlevel": 5
        }
      ]
    }).id("dut_create:launch_pad_controller/rocket_ground_" + target)
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:launch_pad_controller",
      "time": 320,
      "error": true,
      "hidden": true,
      "priority": 10,
      "requirements": [
        LaunchPadStructure,
        LaunchPadItem("kubejs:navigate_data_" + target, 1, "input"),
        LaunchPadDataOut,
        LaunchOrbit,
        LaunchPadFluid(1000, "input"),
        LaunchPadItem("kubejs:parts_box", 1, "input"),
        LaunchPadItem("kubejs:fuel_tank", 1, "input"),
        {
          "type": "custommachinery:command",
          "phase": "starting",
          "command": "/function dut:carrier_rocket/set_launch_pad/to_" + target,
          "log": false,
          "permissionlevel": 5
        }
      ]
    }).id("dut_create:launch_pad_controller/rocket_orbit_" + target)
  }
  function LaunchPadToWithPlayer(target) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:launch_pad_controller",
      "time": 320,
      "priority": 20,
      "error": true,
      "hidden": true,
      "requirements": [
        LaunchPadStructure,
        LaunchPadItem("kubejs:navigate_data_" + target, 1, "input"),
        LaunchPadDataOut,
        LaunchGround,
        LaunchPadFluid(12000, "input"),
        LaunchPadItem("kubejs:parts_box", 12, "input"),
        LaunchPadItem("kubejs:fuel_tank", 12, "input"),
        {
          "type": "button",
          "id": "player",
        },
        {
          "type": "custommachinery:command",
          "phase": "starting",
          "command": "/function dut:carrier_rocket/set_launch_pad/to_" + target + "_withplayer",
          "log": false,
          "permissionlevel": 5
        }
      ]
    }).id("dut_create:launch_pad_controller/rocket_ground_" + target + "_withplayer")
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:launch_pad_controller",
      "time": 320,
      "priority": 20,
      "error": true,
      "hidden": true,
      "requirements": [
        LaunchPadStructure,
        LaunchPadItem("kubejs:navigate_data_" + target, 1, "input"),
        LaunchPadDataOut,
        LaunchOrbit,
        LaunchPadFluid(1000, "input"),
        LaunchPadItem("kubejs:parts_box", 1, "input"),
        LaunchPadItem("kubejs:fuel_tank", 1, "input"),
        {
          "type": "button",
          "id": "player",
        },
        {
          "type": "custommachinery:command",
          "phase": "starting",
          "command": "/function dut:carrier_rocket/set_launch_pad/to_" + target + "_withplayer",
          "log": false,
          "permissionlevel": 5
        }
      ]
    }).id("dut_create:launch_pad_controller/rocket_orbit_" + target + "_withplayer")
  }
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:launch_pad_controller",
    "time": 10,
    "hidden": true,
    "error": true,
    "priority": 10,
    "requirements": [
      LaunchPadStructure
    ]
  }).id("dut_create:launch_pad_controller/empty")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:launch_pad_controller",
    "time": 320,
    "error": true,
    "priority": 0,
    "requirements": [
      LaunchPadStructure
    ],
    "jei": [
      LaunchPadStructure,
      LaunchGround,
      LaunchPadFluid(12000, "input"),
      LaunchPadItem("kubejs:parts_box", 12, "input"),
      LaunchPadItem("kubejs:fuel_tank", 12, "input"),
      LaunchPadItem("#dut_create:navigate_data", 1, "input"),
    ]
  }).id("dut_create:launch_pad_controller/launch_in_ground")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:launch_pad_controller",
    "time": 320,
    "error": true,
    "priority": 0,
    "requirements": [
      LaunchPadStructure
    ],
    "jei": [
      LaunchPadStructure,
      LaunchOrbit,
      LaunchPadFluid(1000, "input"),
      LaunchPadItem("kubejs:parts_box", 1, "input"),
      LaunchPadItem("kubejs:fuel_tank", 1, "input"),
      LaunchPadItem("#dut_create:navigate_data", 1, "input"),
    ]
  }).id("dut_create:launch_pad_controller/launch_in_orbit")
  LaunchPadTo("earth")
  LaunchPadToWithPlayer("earth")

  LaunchPadTo("earth_orbit")
  LaunchPadToWithPlayer("earth_orbit")

  LaunchPadTo("moon")
  LaunchPadToWithPlayer("moon")

  LaunchPadTo("moon_orbit")
  LaunchPadToWithPlayer("moon_orbit")

  LaunchPadTo("slimeria")
  LaunchPadToWithPlayer("slimeria")

  LaunchPadTo("slimeria_orbit")
  LaunchPadToWithPlayer("slimeria_orbit")

  LaunchPadTo("glacio")
  LaunchPadToWithPlayer("glacio_orbit")
  function NavigateDataTransform(type) {
    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "A": { "item": "kubejs:navigate_data_" + type + "_orbit" }
      },
      "pattern": [
        "A"
      ],
      "result": { "item": "kubejs:navigate_data_" + type },
      "show_notification": true
    }).id("dut_create:navigate_data_transform/" + type)
    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "A": { "item": "kubejs:navigate_data_" + type }
      },
      "pattern": [
        "A"
      ],
      "result": { "item": "kubejs:navigate_data_" + type + "_orbit" },
      "show_notification": true
    }).id("dut_create:navigate_data_transform/" + type + "_orbit")
  }
  NavigateDataTransform("earth")
  NavigateDataTransform("moon")
  NavigateDataTransform("slimeria")
  NavigateDataTransform("glacio")
})