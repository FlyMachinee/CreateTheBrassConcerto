ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "tag": "forge:plates/gold" },
      { "item": "minecraft:grass_block" }
    ],
    "results": [{ "item": "ad_astra:earth_globe" }]
  }).id("dut_create:deploying/earth_globe")
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "tag": "forge:plates/gold" },
      { "tag": "dut_create:moon_solid" }
    ],
    "results": [{ "item": "ad_astra:moon_globe" }]
  }).id("dut_create:deploying/moon_globe")
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "kubejs:aluminum_hard_disk", "nbt": { Damage: 1024 } },
      { "item": "kubejs:optical_device" }
    ],
    "results": [{ "item": "kubejs:satellite_scanning_module" }]
  }).id("dut_create:deploying/satellite_scanning_module")
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "kubejs:planetary_gear" },
      { "item": "kubejs:optical_device" }
    ],
    "results": [{ "item": "kubejs:satellite_mining_module", "count": 2 }]
  }).id("dut_create:deploying/satellite_mining_module")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": { "item": "kubejs:satellite_scanning_module" }
    },
    "pattern": [
      "A",
    ],
    "result": {
      "item": "kubejs:satellite_scanning_module_local"
    },
    "show_notification": true
  }).id("dut_create:satellite_scanning_module_local")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": { "item": "kubejs:satellite_scanning_module_local" }
    },
    "pattern": [
      "A",
    ],
    "result": {
      "item": "kubejs:satellite_scanning_module"
    },
    "show_notification": true
  }).id("dut_create:satellite_scanning_module_transform")
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "kubejs:aluminum_hard_disk", "nbt": { Damage: 0 } },
      { "item": "kubejs:lime_circuit_board" }
    ],
    "results": [{ "item": "kubejs:navigate_data_empty" }]
  }).id("dut_create:deploying/navigate_data_empty")
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": true,
    "key": {
      "A": { "item": "kubejs:light_composite_plate" },
      "C": { "item": "kubejs:productivity_module" },
      "D": { "item": "kubejs:solar_panel" },
      "E": { "item": "kubejs:brass_hard_disk", "nbt": { Damage: 0 } },
      "G": { "item": "kubejs:rocket_gyro" },
      "H": { "item": 'create:refined_radiance' }
    },
    "pattern": [
      " ACA ",
      "DA AD",
      "DEGED",
      " HHH ",
    ],
    "result": { "item": "kubejs:satellite" }
  }
  ).id("dut_create:satellite")
  //碳化硅镜片
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:carborundum" },
    "loops": 1,
    "results": [
      { "item": "kubejs:carborundum_lens" }
    ],
    "sequence": [
      {
        "type": "vintageimprovements:pressurizing",
        "ingredients": [
          { "item": "kubejs:carborundum" },
          { "fluid": "kubejs:muriatic_acid", "amount": 250 }
        ],
        "results": [{ "item": "kubejs:carborundum" }],
        "processingTime": 20
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:carborundum" },
        { "amount": 250, "fluid": "kubejs:polymer" }],
        "results": [{ "item": "kubejs:carborundum" }]
      }
    ],
    "transitionalItem": {
      "item": "kubejs:carborundum"
    }
  }).id("dut_create:sequnced_assembly/carborundum_lens")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:carborundum" },
    "loops": 1,
    "results": [
      { "item": "kubejs:carborundum_lens" }
    ],
    "sequence": [
      {
        "type": "vintageimprovements:polishing",
        "speedLimits": 3,
        "ingredients": [{ "item": "kubejs:carborundum" }],
        "results": [
          { "item": "kubejs:carborundum" }
        ],
        "processingTime": 20
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:carborundum" },
        { "amount": 250, "fluid": "kubejs:duraplas" }],
        "results": [{ "item": "kubejs:carborundum" }]
      }
    ],
    "transitionalItem": {
      "item": "kubejs:carborundum"
    }
  }).id("dut_create:sequnced_assembly/carborundum_lens_duraplas")
  //光学设备
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": 'minecraft:amethyst_shard' },
    "loops": 1,
    "results": [
      { "item": "kubejs:optical_device" }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": 'minecraft:amethyst_shard' },
          { "tag": "forge:plates/brass" }
        ],
        "results": [{ "item": 'minecraft:amethyst_shard' }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": 'minecraft:amethyst_shard' },
        { "amount": 250, "fluid": "kubejs:duraplas" }],
        "results": [{ "item": 'minecraft:amethyst_shard' }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": 'minecraft:amethyst_shard' },
          { "item": "kubejs:carborundum_lens" }
        ],
        "results": [{ "item": 'minecraft:amethyst_shard' }]
      }
    ],
    "transitionalItem": {
      "item": 'minecraft:amethyst_shard'
    }
  }).id("dut_create:optical/optical_device_origin")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:resonant_bacteria" },
    "loops": 1,
    "results": [
      { "item": "kubejs:optical_device", "count": 8 }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:resonant_bacteria" },
          { "tag": "forge:plates/aluminum" }
        ],
        "results": [{ "item": "kubejs:resonant_bacteria" },]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:resonant_bacteria" },
        { "amount": 250, "fluid": "kubejs:duraplas" }],
        "results": [{ "item": "kubejs:resonant_bacteria" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:resonant_bacteria" },
          { "item": "kubejs:carborundum_lens" }
        ],
        "results": [{ "item": "kubejs:resonant_bacteria" },]
      },
      {
        "type": "vintageimprovements:laser_cutting",
        "ingredients": [
          { "item": "kubejs:resonant_bacteria" },
        ],
        "energy": 14400,
        "maxChargeRate": 1440,
        "results": [
          { "item": "kubejs:resonant_bacteria" },
        ]
      }
    ],
    "transitionalItem": {
      "item": "kubejs:resonant_bacteria"
    }
  }).id("dut_create:optical/optical_device")
})