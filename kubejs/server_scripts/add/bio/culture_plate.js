ServerEvents.recipes(event => {
  //空培养皿
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:plates/tin" },
    "loops": 1,
    "results": [
      { "item": "kubejs:empty_culture_plate" },
    ],
    "sequence": [
      {
        "type": "vintageimprovements:curving",
        "ingredients": [{ "item": "kubejs:incomplete_culture_plate" }],
        "results": [{ "item": "kubejs:incomplete_culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_culture_plate" },
        { "item": "create:framed_glass_pane" }],
        "results": [{ "item": "kubejs:incomplete_culture_plate" }]
      },
      {
        "type": "vintageimprovements:curving",
        "ingredients": [{ "item": "kubejs:incomplete_culture_plate" }],
        "results": [{ "item": "kubejs:incomplete_culture_plate" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_culture_plate" }
  }).id("dut_create:sequenced_assembly/empty_culture_plate")
  //生物质培养基
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:empty_culture_plate" },
    "loops": 1,
    "results": [{ "item": "kubejs:pasteurized_culture_plate", "nbt": { biomass: true, display: { Name: '{"translate":"kubejs.item.culture.biomass","italic":false}' }  } }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "createaddition:biomass" }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "createaddition:biomass" }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:filling",
        "ingredients": [
          { "item": "kubejs:culture_plate" },
          { "amount": 250, "fluid": "minecraft:water" }
        ],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "vintageimprovements:vacuumizing",
        "ingredients": [
          { "item": "kubejs:culture_plate" }
        ],
        "results": [
          { "item": "kubejs:culture_plate" }
        ],
        "processingTime": 20
      }
    ],
    "transitionalItem": { "item": "kubejs:culture_plate" }
  }).id("dut_create:sequenced_assembly/culture_plate")
  //牛奶培养基
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:empty_culture_plate" },
    "loops": 1,
    "results": [{ "item": "kubejs:pasteurized_culture_plate", "nbt": { milk: true, display: { Name: '{"translate":"kubejs.item.culture.milk","italic":false}' }  } }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "kubejs:salt" }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:filling",
        "ingredients": [
          { "item": "kubejs:culture_plate" },
          { "amount": 250, "fluid": "minecraft:milk" }
        ],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "vintageimprovements:vacuumizing",
        "ingredients": [
          { "item": "kubejs:culture_plate" }
        ],
        "results": [
          { "item": "kubejs:culture_plate" }
        ],
        "processingTime": 20
      }
    ],
    "transitionalItem": { "item": "kubejs:culture_plate" }
  }).id("dut_create:sequenced_assembly/culture_plate_milk")
  //异彩培养基
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:empty_culture_plate" },
    "loops": 1,
    "results": [{ "item": "kubejs:pasteurized_culture_plate", "nbt": {dye: true, display: { Name: '{"translate":"kubejs.item.culture.dye","italic":false}' }  } }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "minecraft:white_dye"  }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "minecraft:black_dye"  }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "minecraft:brown_dye"  }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "minecraft:red_dye"  }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "minecraft:yellow_dye"  }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "minecraft:green_dye"  }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "minecraft:blue_dye"  }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:filling",
        "ingredients": [
          { "item": "kubejs:culture_plate" },
          { "amount": 250, "fluid": "vintageimprovements:sulfuric_acid" }
        ],
        "results": [{ "item": "kubejs:culture_plate" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:culture_plate" }
  }).id("dut_create:sequenced_assembly/culture_plate_dye")
  //经验培养基
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:empty_culture_plate" },
    "loops": 1,
    "results": [{ "item": "kubejs:pasteurized_culture_plate", "nbt": {exp: true, display: { Name: '{"translate":"kubejs.item.culture.exp","italic":false}' }  } }],
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [
          { "item": "kubejs:culture_plate" },
          { "amount": 500, "fluid": "create_enchantment_industry:experience" }
        ],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "kubejs:useless_bacteria"  }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "vintageimprovements:vacuumizing",
        "ingredients": [
          { "item": "kubejs:culture_plate" }
        ],
        "results": [
          { "item": "kubejs:culture_plate" }
        ],
        "processingTime": 20
      }
    ],
    "transitionalItem": { "item": "kubejs:culture_plate" }
  }).id("dut_create:sequenced_assembly/culture_plate_exp")
  //木屑培养基
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:empty_culture_plate" },
    "loops": 1,
    "results": [{ "item": "kubejs:pasteurized_culture_plate", "nbt": { wood_chip: true, display: { Name: '{"translate":"kubejs.item.culture.wood_chip","italic":false}' } } }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "createdieselgenerators:wood_chip" }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "minecraft:sugar" }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "minecraft:dried_kelp" }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:filling",
        "ingredients": [
          { "item": "kubejs:culture_plate" },
          { "amount": 250, "fluid": "minecraft:water" }
        ],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "vintageimprovements:vacuumizing",
        "ingredients": [
          { "item": "kubejs:culture_plate" }
        ],
        "results": [
          { "item": "kubejs:culture_plate" }
        ],
        "processingTime": 20
      }
    ],
    "transitionalItem": { "item": "kubejs:culture_plate" }
  }).id("dut_create:sequenced_assembly/culture_plate_wood_chip")
  //泥浆培养基
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:empty_culture_plate" },
    "loops": 1,
    "results": [{ "item": "kubejs:pasteurized_culture_plate", "nbt": { mud: true, display: { Name: '{"translate":"kubejs.item.culture.mud","italic":false}' } } }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "minecraft:mud" }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "minecraft:packed_mud" }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "minecraft:dried_kelp"  }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:filling",
        "ingredients": [
          { "item": "kubejs:culture_plate" },
          { "amount": 250, "fluid": "minecraft:water" }
        ],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "vintageimprovements:vacuumizing",
        "ingredients": [
          { "item": "kubejs:culture_plate" }
        ],
        "results": [
          { "item": "kubejs:culture_plate" }
        ],
        "processingTime": 20
      }
    ],
    "transitionalItem": { "item": "kubejs:culture_plate" }
  }).id("dut_create:sequenced_assembly/culture_plate_mud")
  //燃料培养基
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:empty_culture_plate" },
    "loops": 1,
    "results": [{ "item": "kubejs:pasteurized_culture_plate", "nbt": { fuel: true, display: { Name: '{"translate":"kubejs.item.culture.fuel","italic":false}' } } }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "create:cinder_flour" }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
      { "item": "kubejs:sulphur" },],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "kubejs:crushed_coal" }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:filling",
        "ingredients": [
          { "item": "kubejs:culture_plate" },
          { "amount": 250, "fluid": "minecraft:lava" }
        ],
        "results": [{ "item": "kubejs:culture_plate" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:culture_plate" }
  }).id("dut_create:sequenced_assembly/culture_plate_fuel")
  //烈焰蛋糕培养基
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:empty_culture_plate" },
    "loops": 1,
    "results": [{ "item": "kubejs:pasteurized_culture_plate", "nbt": { super_fuel: true, display: { Name: '{"translate":"kubejs.item.culture.super_fuel","italic":false}' } } }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "create:blaze_cake" }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:culture_plate" },
        { "item": "create:cinder_flour" }],
        "results": [{ "item": "kubejs:culture_plate" }]
      },
      {
        "type": "vintageimprovements:vacuumizing",
        "ingredients": [
          { "item": "kubejs:culture_plate" }
        ],
        "results": [
          { "item": "kubejs:culture_plate" }
        ],
        "processingTime": 20
      }
    ],
    "transitionalItem": { "item": "kubejs:culture_plate" }
  }).id("dut_create:sequenced_assembly/culture_plate_blaze_cake")
})

