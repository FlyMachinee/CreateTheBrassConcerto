ServerEvents.recipes(event => {
  function createRecipe(a, b) {
    event.custom({
      "type": "create:filling",
      "ingredients": [{ "item": "create:cinder_flour" },
      { "amount": b, "fluid": a }],
      "results": [{ "item": "minecraft:redstone" }]
    }).id("dut_create:filling/redstone_from_" + a.split(":")[0] + "_" + a.split(":")[1]);
    event.custom({
      "type": "vintageimprovements:pressurizing",
      "secondaryFluidInput": 0,
      "ingredients": [
        { "amount": b * 4, "fluid": a },
        { "item": "create:cinder_flour" },
        { "item": "create:cinder_flour" },
        { "item": "create:cinder_flour" },
        { "item": "create:cinder_flour" },
      ],
      "results": [
        { "item": "minecraft:redstone", "count": 4 }
      ],
      "processingTime": 15
    }).id("dut_create:filling/fast_redstone_from_" + a.split(":")[0] + "_" + a.split(":")[1]);
  }
  function createRecipe1(a, b) {
    event.custom({
      "type": "create:filling",
      "ingredients": [{ "item": "create:cinder_flour" },
      { "amount": b, "fluidTag": a }],
      "results": [{ "item": "minecraft:redstone" }]
    }).id("dut_create:filling/redstone_from_" + a.split(":")[0] + "_" + a.split(":")[1]);
    event.custom({
      "type": "vintageimprovements:pressurizing",
      "secondaryFluidInput": 0,
      "ingredients": [
        { "amount": b * 4, "fluidTag": a },
        { "item": "create:cinder_flour" },
        { "item": "create:cinder_flour" },
        { "item": "create:cinder_flour" },
        { "item": "create:cinder_flour" },
      ],
      "results": [
        { "item": "minecraft:redstone", "count": 4 }
      ],
      "processingTime": 15
    }).id("dut_create:filling/fast_redstone_from_" + a.split(":")[0] + "_" + a.split(":")[1]);
  }
  //createRecipe("createloveandwar:kerosene", 45)
  //createRecipe("createloveandwar:diesel", 25)
  //createRecipe("createloveandwar:crude_oil", 50)
  createRecipe1("forge:crude_oil",50)
  createRecipe1("dut_create:plantoil",125)
  createRecipe1("forge:hydrogen",250)
  createRecipe1("forge:biodiesel",25)
  createRecipe("createdieselgenerators:gasoline", 45)
  createRecipe("createdieselgenerators:diesel", 25)
  createRecipe("createdieselgenerators:ethanol", 150)
  createRecipe("kubejs:natural_gas", 75)
  createRecipe("kubejs:ammonia", 50)
  createRecipe("kubejs:lube_oil", 25)
})
ServerEvents.recipes(event => {
  //萤石粉
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "minecraft:redstone" },
      { "amount": 50, "fluidTag": "forge:biodiesel" }
    ],
    "results": [
      { "item": "minecraft:glowstone_dust" }
    ]
  }).id("dut_create:filling/glowstone_dust")
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "amount": 200, "fluidTag": "forge:biodiesel" },
      { "item": "minecraft:redstone" },
      { "item": "minecraft:redstone" },
      { "item": "minecraft:redstone" },
      { "item": "minecraft:redstone" }
    ],
    "results": [
      { "item": "minecraft:glowstone_dust", "count": 4 }
    ],
    "processingTime": 45
  }).id("dut_create:pressurizing/glowstone_dust")
})
