ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:duraplas_sheet" },
    "results": [
      { "item": "kubejs:light_composite_plate" }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:duraplas_sheet" },
        { "item": "kubejs:fiber_fabric" }],
        "results": [{ "item": "kubejs:duraplas_sheet" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:duraplas_sheet" },
        { "amount": 270, "fluid": "kubejs:copper" }],
        "results": [{ "item": "kubejs:duraplas_sheet" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:duraplas_sheet" },
        { "item": "kubejs:fiber_fabric" }],
        "results": [{ "item": "kubejs:duraplas_sheet" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:duraplas_sheet" },
        { "amount": 250, "fluid": "kubejs:slime_colloid" }],
        "results": [{ "item": "kubejs:duraplas_sheet" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:duraplas_sheet" },
        { "item": "kubejs:fiber_fabric" }],
        "results": [{ "item": "kubejs:duraplas_sheet" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:duraplas_sheet" }
  }).id("dut_create:rocket/light_composite_plate/carbon")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:duraplas_sheet" },
    "results": [
      { "item": "kubejs:light_composite_plate", "count": 2 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:aluminum_sheet" },
        { "amount": 180, "fluid": "kubejs:aluminum" }],
        "results": [{ "item": "kubejs:aluminum_sheet" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:aluminum_sheet" },
        { "amount": 180, "fluid": "kubejs:copper" }],
        "results": [{ "item": "kubejs:aluminum_sheet" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:aluminum_sheet" },
        { "amount": 250, "fluid": "kubejs:slime_colloid" }],
        "results": [{ "item": "kubejs:aluminum_sheet" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:aluminum_sheet" },
        { "amount": 270, "fluid": "kubejs:aluminum" }],
        "results": [{ "item": "kubejs:aluminum_sheet" }]
      },
      {
        "type": "vintageimprovements:pressurizing",
        "ingredients": [
          { "item": "kubejs:aluminum_sheet" },
          { "amount": 250, "fluid": "kubejs:cryogen" }],
        "results": [{ "item": "kubejs:aluminum_sheet" }],
        "processingTime": 20
      }
    ],
    "transitionalItem": { "item": "kubejs:aluminum_sheet" }
  }).id("dut_create:rocket/light_composite_plate/metal")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "create:sturdy_sheet" },
    "results": [
      { "item": "kubejs:radiator" ,"count":4}
    ],
    "loops": 2,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          [{ "tag": "forge:plates/aluminum" }, { "tag": "forge:plates/copper" }]
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          [{ "tag": "forge:plates/aluminum" }, { "tag": "forge:plates/copper" }]
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "item": "create:fluid_pipe" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" },
        { "amount": 125, "fluid": "kubejs:slime_colloid" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" },
        { "amount": 125, "fluid": "kubejs:cryogen" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_copper_box" }
  }).id("dut_create:rocket/radiator")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "create:sturdy_sheet" },
    "results": [
      { "item": "kubejs:radiator", "count": 8 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "tag": "forge:plates/desh" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "tag": "forge:plates/desh" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "item": "create:fluid_pipe" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" },
        { "amount": 250, "fluid": "kubejs:slime_colloid" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" },
        { "amount": 250, "fluid": "kubejs:cryogen" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_copper_box" }
  }).id("dut_create:rocket/radiator_advanced")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:differential" },
    "results": [
      { "item": "kubejs:rocket_gyro" }
    ],
    "loops": 3,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "kubejs:productivity_module" }
        ],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "kubejs:cardan_joint" }
        ],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "amount": 250, "fluid": "kubejs:duraplas" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_brass_box" }
  }).id("dut_create:rocket/rocket_gyro")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:plates/aluminum" },
    "results": [
      { "item": "kubejs:gas_tank" }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "amount": 1000, "fluidTag": "forge:oxygen" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "amount": 500, "fluid": "kubejs:cryogen" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_brass_box" }
  }).id("dut_create:rocket/gas_tank")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:gas_tank" },
    "results": [
      { "item": "kubejs:fuel_tank" }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "amount": 1000, "fluid": "kubejs:natural_gas" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "tag": "forge:plates/aluminum" }
        ],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_brass_box" }
  }).id("dut_create:rocket/fuel_tank/fluid_gas")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:gas_tank" },
    "results": [
      { "item": "kubejs:fuel_tank" }
    ],
    "loops": 3,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "kubejs:carborundum" }
        ],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "amount": 1000, "fluidTag": "forge:hydrogen" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_brass_box" }
  }).id("dut_create:rocket/fuel_tank/fluid_hydrogen")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:aluminum_sheet" },
    "results": [
      { "item": "kubejs:fuel_tank" }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "amount": 1000, "fluid": "kubejs:slime_colloid" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "amount": 500, "fluid": "kubejs:cola_puree" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "kubejs:aluminum_slag" }
        ],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_brass_box" }
  }).id("dut_create:rocket/fuel_tank/fluid_slime")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:differential" },
    "results": [
      { "item": "kubejs:rocket_mechanism" }
    ],
    "loops": 3,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "kubejs:lime_circuit_board" }
        ],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "kubejs:lime_circuit_board" }
        ],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "amount": 250, "fluid": "kubejs:duraplas" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_brass_box" }
  }).id("dut_create:rocket/rocket_mechanism")
  event.custom({
    "type": "vintageimprovements:curving",
    "mode": 4,
    "ingredients": [
      { "item": "kubejs:duraplas_sheet" }
    ],
    "results": [
      { "item": "kubejs:empty_parts_box" }
    ]
  }).id("dut_create:rocket/empty_parts_box")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:empty_parts_box" },
    "results": [
      { "item": "kubejs:steel_parts_box" }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_parts_box" },
        { "tag": "forge:plates/steel" }],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_parts_box" },
        { "tag": "forge:rods/steel" }],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_parts_box" },
        { "item": "vintageimprovements:steel_spring" }],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_parts_box" },
        { "item": "vintageimprovements:small_steel_spring" }],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      },
      {
        "type": "vintageimprovements:pressurizing",
        "ingredients": [{ "item": "kubejs:incomplete_parts_box" },
        { "amount": 250, "fluid": "kubejs:nitrogen" }],
        "results": [{ "item": "kubejs:incomplete_parts_box" }],
        "processingTime": 15
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_parts_box" }
  }).id("dut_create:rocket/steel_parts_box")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:steel_parts_box" },
    "results": [
      { "item": "kubejs:parts_box" }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_parts_box" },
          { "item": "kubejs:lime_circuit_board" }
        ],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_parts_box" },
          { "item": "kubejs:fiber_fabric" }
        ],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [
          { "item": "kubejs:incomplete_parts_box" },
          { "fluid": "kubejs:nitrogen","amount":500 }
        ],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_parts_box" }
  }).id("dut_create:rocket/parts_box")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:rocket_gyro" },
    "results": [
      { "item": "kubejs:carrier_rocket" }
    ],
    "loops": 3,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:rocket_gyro" },
          { "item": "kubejs:rocket_mechanism" }
        ],
        "results": [{ "item": "kubejs:rocket_gyro" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:rocket_gyro" },
          { "item": "kubejs:parts_box" }
        ],
        "results": [{ "item": "kubejs:rocket_gyro" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:rocket_gyro" },
          { "item": "kubejs:parts_box" }
        ],
        "results": [{ "item": "kubejs:rocket_gyro" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:rocket_gyro" }
  }).id("dut_create:rocket/carrier_rocket")
})