// requires:immersive_aircraft
ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "create:steam_engine" },
            "B": { "item": "kubejs:mechanical_core" },
            "C": { "item": 'create:white_sail' },
            "D": { "item": "create:encased_fan" }
        },
        "pattern": [
            " C ",
            "BAD",
            " C "
        ],
        "result": { "item": "immersive_aircraft:biplane" },
        "show_notification": true
    }).id("dut_create:biplane")
  event.remove({ id:"immersive_aircraft:biplane" })
  event.remove({ id:"immersive_aircraft:propeller" })
  event.remove({ id:"immersive_aircraft:sail" })
  event.remove({ id:"immersive_aircraft:hull" })
  event.remove({ id:"immersive_aircraft:engine" })
  event.remove({ id:"immersive_aircraft:boiler" })
})