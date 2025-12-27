ServerEvents.recipes(event => {
  const AirdropStationStructure =
  {
    "type": "custommachinery:structure",
    "pattern": [
      [
        "     ",
        "  A  ",
        " AIA ",
        "  A  ",
        "     "
      ],
      [
        "  A  ",
        "     ",
        "A J A",
        "     ",
        "  A  "
      ],
      [
        "  B  ",
        " DDD ",
        "BDLDB",
        " DDD ",
        "  B  "
      ],
      [
        "     ",
        " B B ",
        "  J  ",
        " B B ",
        "     "
      ],
      [
        "     ",
        " A A ",
        "  m  ",
        " A A ",
        "     "
      ],
      [
        "  B  ",
        " DDD ",
        "BDLDB",
        " DDD ",
        "  B  "
      ],
      [
        "  B  ",
        " HHH ",
        "BHNHB",
        " HHH ",
        "  B  "
      ],
      [
        "  C  ",
        "     ",
        "C O C",
        "     ",
        "  C  "
      ]
    ],
    "keys": {
      "A": "create:chute",
      "N": "design_decor:brass_boiler_large",
      "O": "design_decor:brass_boiler",
      "J": "design_decor:copper_boiler",
      "D": "design_decor:cast_iron_boiler_structure",
      "I": "design_decor:cast_iron_boiler",
      "C": "design_decor:andesite_floodlight",
      "B": "#dut_create:metal_girder",
      "L": "design_decor:cast_iron_boiler_large",
      "H": "design_decor:brass_boiler_structure"
    },
    "jei": true
  }
  const AirdropStationRedstone =
  {
    "type": "custommachinery:redstone",
    "power": "(1,)"
  }
  function AirdropStationDimension(dimension) {
    return ({
      "type": "custommachinery:dimension",
      "filter": dimension,
      "blacklist": false
    })
  }
  function AirdropStationFluid(fluid, amount) {
    return ({
      "type": "custommachinery:fluid",
      "mode": "input",
      "fluid": fluid,
      "amount": amount
    })
  }
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:airdrop_station",
    "time": 10,
    "priority": 0,
    "hidden": true,
    "error": true,
    "requirements": [
      AirdropStationStructure
    ]
  }).id("dut_create:airdrop_station/empty")

  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:airdrop_station",
    "time": 1,
    "priority": 1,
    "hidden": true,
    "error": true,
    "requirements": [
      AirdropStationStructure,
      AirdropStationRedstone, 
      {
        "type": "custommachinery:fluid",
        "mode": "output",
        "fluid": "minecraft:water",
        "amount": 500
      }
    ]
  }).id("dut_create:airdrop_station/prepare")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:airdrop_station",
    "time": 59,
    "priority": 1,
    "hidden": false,
    "error": true,
    "requirements": [
      AirdropStationStructure,
      {
        "type": "custommachinery:command",
        "phase": "starting",
        "command": "/function dut:airdrop/set_airdrop",
        "log": false,
        "permissionlevel": 5
      },
      AirdropStationFluid("minecraft:water", 500)
    ],
    "jei": [
      AirdropStationStructure,
      AirdropStationRedstone,
      {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "kubejs:airdrop",
        "amount": 1,
        "slot": "output"
      },
      AirdropStationFluid("kubejs:pressurized_steam", 2000)
    ]
  }).id("dut_create:airdrop_station/launch")
})