ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom()
  event.remove({output:"balancedflight:flight_anchor",not:{mod:'kubejs'}})
  event.remove({output:"balancedflight:ascended_flight_ring",not:{mod:'kubejs'}})
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "minecraft:dragon_egg" },
    "results": [
      { "item": "balancedflight:ascended_flight_ring"}
    ],
    "loops": 16,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "minecraft:dragon_egg" },
          { "item": "create_connected:control_chip" }
        ],
        "results": [{ "item": "minecraft:dragon_egg" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "minecraft:dragon_egg" },
          { "item": "balancedflight:flight_anchor" }
        ],
        "results": [{ "item": "minecraft:dragon_egg" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:dragon_egg" },
        { "amount": 500, "fluid": "kubejs:cola_puree"}],
        "results": [{ "item": "minecraft:dragon_egg" }]
      }
    ],
    "transitionalItem": { "item": "minecraft:dragon_egg" }
  }).id("dut_create:sequnced_assembly/ascended_flight_ring")
  //
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "minecraft:beacon" },
    "results": [
      { "item": "balancedflight:flight_anchor"}
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "minecraft:beacon" },
          { "item": "kubejs:magenta_circuit_board" }
        ],
        "results": [{ "item": "minecraft:beacon" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "minecraft:beacon" },
          { "item": "kubejs:planetary_gear" }
        ],
        "results": [{ "item": "minecraft:beacon" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "minecraft:beacon" },
          { "item": "kubejs:electric_gear" }
        ],
        "results": [{ "item": "minecraft:beacon" }]
      }
    ],
    "transitionalItem": { "item": "minecraft:beacon" }
  }).id("dut_create:sequnced_assembly/flight_anchor_beacon")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "create_power_loader:brass_chunk_loader" },
    "results": [
      { "item": "balancedflight:flight_anchor"}
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "create_power_loader:brass_chunk_loader" },
          { "item": "create:precision_mechanism" }
        ],
        "results": [{ "item": "create_power_loader:brass_chunk_loader" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "create_power_loader:brass_chunk_loader" },
          { "item": "kubejs:lime_circuit_board" }
        ],
        "results": [{ "item": "create_power_loader:brass_chunk_loader" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "create_power_loader:brass_chunk_loader" },
          { "item": "kubejs:differential" }
        ],
        "results": [{ "item": "create_power_loader:brass_chunk_loader" }]
      }
    ],
    "transitionalItem": { "item": "create_power_loader:brass_chunk_loader" }
  }).id("dut_create:sequnced_assembly/flight_anchor")
})