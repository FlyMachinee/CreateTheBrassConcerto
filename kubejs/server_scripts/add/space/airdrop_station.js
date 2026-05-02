ServerEvents.recipes(event => {
  const AirdropStationStructure =
  {
    "type": "custommachinery:general_structure",
    "id": "main"
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