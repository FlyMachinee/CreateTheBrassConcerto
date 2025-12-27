ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom()
  event.remove({ output: "creategbd:basic_laser_turret", not: { mod: 'kubejs' } })
  event.remove({ output: "creategbd:advanced_laser_turret", not: { mod: 'kubejs' } })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "B": { "item": "create:framed_glass" },
      "C": { "item": "creategbd:guardian_beam_capacitor" },
      "I": { "item": "createaddition:modular_accumulator" }
    },
    "pattern": [
      "B",
      "C",
      "I"
    ],
    "result": { "item": "creategbd:basic_laser_turret" },
    "show_notification": true
  }).id("dut_create:basic_laser_turret")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "B": { "item": "create:framed_glass" },
      "C": [{ "item": "creategbd:elder_guardian_beam_capacitor" }],
      "I": { "item": "createaddition:modular_accumulator" }
    },
    "pattern": [
      "B",
      "C",
      "I"
    ],
    "result": { "item": "creategbd:advanced_laser_turret" },
    "show_notification": true
  }).id("dut_create:advanced_laser_turret")
  event.custom({
    "type": "createaddition:charging",
    "input": { "item": "create:electron_tube" },
    "result": { "item": "creategbd:guardian_beam_capacitor" },
    "energy": 40000,
    "maxChargeRate": 4000
  }).id("dut_create:beam_capacitor")
  event.custom({
    "type": "createaddition:charging",
    "input": { "tag": "forge:ingots/shadow_steel" },
    "result": { "item": "creategbd:elder_guardian_beam_capacitor" },
    "energy": 500000,
    "maxChargeRate": 10000
  }).id("dut_create:advanced_beam_capacitor")
})