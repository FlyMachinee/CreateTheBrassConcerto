// requires:dread_steel
ServerEvents.recipes(event => {
  event.remove({ output: 'dreadsteel:dreadsteel_ingot', mod: 'dreadsteel' })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "A": { "item": "iceandfire:dragonsteel_fire_ingot" },
      "B": { "item": "iceandfire:dragonsteel_ice_ingot" },
      "C": { "item": "iceandfire:dragonsteel_lightning_ingot" },
      "D": { "item": "minecraft:dragon_egg" },
      "E": { "tag": "forge:ingots/chromatic" }
    },
    "pattern": [
      "ABC",
      "DDD",
      "EEE"
    ],
    "result": { "item": "dreadsteel:dreadsteel_ingot", "count": 3 },
    "show_notification": true
  }).id("dut_create:dread_steel")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "createloveandwar:steel_ingot" },
    "loops": 1,
    "results": [
      { "item": "dreadsteel:dreadsteel_ingot", "chance": 0.05 },
      { "item": "createloveandwar:steel_ingot", "chance": 0.95 }
    ],
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "createloveandwar:steel_ingot" },
        { "amount": 500, "fluid": "kubejs:chromatic_waste" }],
        "results": [{ "item": "createloveandwar:steel_ingot" }]
      }
    ],
    "transitionalItem": { "item": "createloveandwar:steel_ingot" }
  }).id("dut_create:tools/dreadsteel_ingot")
})