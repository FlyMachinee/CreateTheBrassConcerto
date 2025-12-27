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
  }).id("dut_create:sequnced_assembly/light_composite_plate/carbon")
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
        "processingTime": 300
      }
    ],
    "transitionalItem": { "item": "kubejs:aluminum_sheet" }
  }).id("dut_create:sequnced_assembly/light_composite_plate/metal")
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
  }).id("dut_create:sequnced_assembly/radiator")
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
  }).id("dut_create:sequnced_assembly/radiator_advanced")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:rubber" },
    "results": [
      { "item": "kubejs:rocket_electric_connector", "count": 2 }
    ],
    "loops": 5,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "tag": "forge:plates/aluminum" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "vintageimprovements:small_aluminum_spring" }
        ],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" },
        { "amount": 50, "fluid": "kubejs:slime_colloid" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_copper_box" },
          { "tag": "forge:rods/gold" }
        ],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_copper_box" }
  }).id("dut_create:sequnced_assembly/rocket_electric_connector")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "createaddition:electric_motor" },
    "results": [
      { "item": "kubejs:rocket_gyro" }
    ],
    "loops": 3,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "kubejs:differential" }
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
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "kubejs:rocket_electric_connector" }
        ],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "kubejs:rocket_electric_connector" }
        ],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "amount": 100, "fluid": "kubejs:slime_colloid" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_brass_box" }
  }).id("dut_create:sequnced_assembly/rocket_gyro")
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
        { "amount": 500, "fluidTag": "forge:oxygen" }],
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
  }).id("dut_create:sequnced_assembly/gas_tank")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:light_composite_plate" },
    "results": [
      { "item": "kubejs:fuel_tank" }
    ],
    "loops": 5,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "amount": 500, "fluidTag": "dut_create:carrier_rocket_fuel" },],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "kubejs:gas_tank" }
        ],
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
  }).id("dut_create:sequnced_assembly/fuel_tank/fluid_common")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:light_composite_plate" },
    "results": [
      { "item": "kubejs:fuel_tank" }
    ],
    "loops": 5,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "amount": 750, "fluid": "kubejs:natural_gas" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "kubejs:gas_tank" }
        ],
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
  }).id("dut_create:sequnced_assembly/fuel_tank/fluid_gas")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:light_composite_plate" },
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
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "kubejs:gas_tank" }
        ],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_brass_box" }
  }).id("dut_create:sequnced_assembly/fuel_tank/fluid_hydrogen")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:light_composite_plate" },
    "results": [
      { "item": "kubejs:fuel_tank" }
    ],
    "loops": 5,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "amount": 500, "fluid": "kubejs:slime_colloid" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "amount": 250, "fluid": "kubejs:cola_puree" }],
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
  }).id("dut_create:sequnced_assembly/fuel_tank/fluid_slime")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:light_composite_plate" },
    "results": [
      { "item": "kubejs:rocket_mechanism" }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "kubejs:radiator" }
        ],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "kubejs:fuel_tank" }
        ],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_brass_box" },
          { "item": "kubejs:speed_module_2" }
        ],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_brass_box" },
        { "amount": 150, "fluid": "kubejs:slime_colloid" }],
        "results": [{ "item": "kubejs:incomplete_brass_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_brass_box" }
  }).id("dut_create:sequnced_assembly/rocket_mechanism")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:empty_parts_box" },
    "results": [
      { "item": "kubejs:desh_parts_box" }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_parts_box" },
        { "tag": "forge:plates/desh" }],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_parts_box" },
        { "tag": "forge:rods/desh" }],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_parts_box" },
        { "item": "vintageimprovements:desh_spring" }],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_parts_box" },
        { "item": "vintageimprovements:small_desh_spring" }],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_parts_box" }
  }).id("dut_create:sequnced_assembly/desh_parts_box")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:empty_parts_box" },
    "results": [
      { "item": "kubejs:parts_box" }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_parts_box" },
          { "item": "kubejs:light_composite_plate" }
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
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_parts_box" },
          { "item": "kubejs:desh_parts_box" }
        ],
        "results": [{ "item": "kubejs:incomplete_parts_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_parts_box" }
  }).id("dut_create:sequnced_assembly/parts_box")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:rocket_gyro" },
    "results": [
      { "item": "kubejs:carrier_rocket" }
    ],
    "loops": 6,
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
          { "item": "kubejs:aluminum_hard_disk", "nbt": { Damage: 0 } }
        ],
        "results": [{ "item": "kubejs:rocket_gyro" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:rocket_gyro" },
        { "amount": 150, "fluid": "kubejs:slime_colloid" }],
        "results": [{ "item": "kubejs:rocket_gyro" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:rocket_gyro" }
  }).id("dut_create:sequnced_assembly/carrier_rocket")
})