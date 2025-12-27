ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:ingots/tin" },
    "results": [
      { "item": "kubejs:tin_hard_disk", "nbt": { Damage: 1024 } }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_tin_hard_disk" },
        { "item": "kubejs:electric_gear" }],
        "results": [{ "item": "kubejs:incomplete_tin_hard_disk" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_tin_hard_disk" },
        { "item": "kubejs:planetary_gear" }],
        "results": [{ "item": "kubejs:incomplete_tin_hard_disk" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_tin_hard_disk" },
        { "item": "kubejs:circuit_board" }],
        "results": [{ "item": "kubejs:incomplete_tin_hard_disk" }]
      },
      {
        "type": "vintageimprovements:pressurizing",
        "ingredients": [{ "item": "kubejs:incomplete_tin_hard_disk" },
        { "amount": 500, "fluid": "kubejs:nitrogen" }],
        "results": [{ "item": "kubejs:incomplete_tin_hard_disk" }],
        "processingTime": 50
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_tin_hard_disk" }
  }).id("dut_create:sequnced_assembly/tin_hard_disk")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:ingots/tin" },
    "results": [
      { "item": "kubejs:tin_hard_disk", "nbt": { Damage: 1024 },"chance":0.75 },
      { "item": "kubejs:tin_sheet","chance":0.25 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_tin_hard_disk" },
        { "item": "minecraft:slime_ball" }],
        "results": [{ "item": "kubejs:incomplete_tin_hard_disk" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_tin_hard_disk" },
        { "item": "kubejs:electric_gear" }],
        "results": [{ "item": "kubejs:incomplete_tin_hard_disk" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_tin_hard_disk" },
        { "item": "kubejs:circuit_board" }],
        "results": [{ "item": "kubejs:incomplete_tin_hard_disk" }]
      },
    ],
    "transitionalItem": { "item": "kubejs:incomplete_tin_hard_disk" }
  }).id("dut_create:sequnced_assembly/tin_hard_disk_early")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:plates/aluminum" },
    "results": [
      { "item": "kubejs:aluminum_hard_disk", "nbt": { Damage: 1024 } }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_aluminum_hard_disk" },
        { "item": "create:precision_mechanism" }],
        "results": [{ "item": "kubejs:incomplete_aluminum_hard_disk" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_aluminum_hard_disk" },
        { "item": "kubejs:magenta_circuit_board" }],
        "results": [{ "item": "kubejs:incomplete_aluminum_hard_disk" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_aluminum_hard_disk" },
        { "amount": 250, "fluid": "kubejs:slime_colloid" }],
        "results": [{ "item": "kubejs:incomplete_aluminum_hard_disk" }]
      },
      {
        "type": "vintageimprovements:pressurizing",
        "ingredients": [{ "item": "kubejs:incomplete_aluminum_hard_disk" },
        { "amount": 500, "fluid": "kubejs:nitrogen" }],
        "results": [{ "item": "kubejs:incomplete_aluminum_hard_disk" }],
        "processingTime": 50
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_aluminum_hard_disk" }
  }).id("dut_create:sequnced_assembly/aluminum_hard_disk")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:resonant_bacteria" },
    "results": [
      { "item": "kubejs:brass_hard_disk", "nbt": { Damage: 1024 } }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_brass_hard_disk" },
        { "item": "kubejs:differential" }],
        "results": [{ "item": "kubejs:incomplete_brass_hard_disk" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_brass_hard_disk" },
        { "item": "kubejs:lime_circuit_board" }],
        "results": [{ "item": "kubejs:incomplete_brass_hard_disk" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_hard_disk" },
        { "amount": 250, "fluid": "kubejs:slime_colloid" }],
        "results": [{ "item": "kubejs:incomplete_brass_hard_disk" }]
      },
      {
        "type": "vintageimprovements:pressurizing",
        "ingredients": [{ "item": "kubejs:incomplete_brass_hard_disk" },
        { "amount": 500, "fluid": "kubejs:nitrogen" }],
        "results": [{ "item": "kubejs:incomplete_brass_hard_disk" }],
        "processingTime": 50
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_brass_hard_disk" }
  }).id("dut_create:sequnced_assembly/brass_hard_disk")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "create_connected:crank_wheel" },
    "results": [
      { "item": "geckojs:stepping_caculator", "chance": 0.8 }, { "item": "create:cogwheel", "chance": 0.2 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "item": "kubejs:bearing" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "item": "create:andesite_alloy" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "item": "kubejs:electric_gear" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "item": "kubejs:mechanical_core" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
          { "fluidTag": "dut_create:plantoil", "amount": 250 }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_brass_box" }
  }).id("dut_create:sequnced_assembly/stepping_caculator")

})
ServerEvents.recipes(event => {
  function DiskTranslate(machine) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:" + machine,
      "time": 1,
      "priority": 12,
      "hidden": true,
      "error": true,
      "requirements": [
        {
          "type": "custommachinery:durability",
          "mode": "input",
          "item": "kubejs:aluminum_hard_disk",
          "amount": 1
        },
        {
          "type": "custommachinery:durability",
          "mode": "output",
          "item": "kubejs:tin_hard_disk",
          "amount": 1024
        }
      ],
    }).id("dut_create:" + machine + "/translate_tin")
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:" + machine,
      "time": 1,
      "priority": 12,
      "hidden": true,
      "error": true,
      "requirements": [
        {
          "type": "custommachinery:durability",
          "mode": "input",
          "item": "kubejs:brass_hard_disk",
          "amount": 1
        },
        {
          "type": "custommachinery:durability",
          "mode": "output",
          "item": "kubejs:aluminum_hard_disk",
          "amount": 1024
        }
      ],
    }).id("dut_create:" + machine + "/translate_aluminum")

  }
  DiskTranslate("large_difference_engine")
  DiskTranslate("electron_tube_computer")
})