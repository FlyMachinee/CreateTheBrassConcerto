ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({"item": ''})
  //event.remove({input: ''})
  //event.custom().id("dut_create:")
  //event.remove({ mod: '' })
  //创造便携储罐
  const RandomRecipeListOrign = [
    { "type": "create:filling", "input": { "fluid": "createdieselgenerators:biodiesel", "amount": 1000 } },
    { "type": "create:filling", "input": { "fluid": "createdieselgenerators:ethanol", "amount": 1000 } },
    { "type": "create:filling", "input": { "fluid": "createaddition:seed_oil", "amount": 1000 } },
    { "type": "create:filling", "input": { "fluid": "minecraft:lava", "amount": 1000 } },
    { "type": "create:filling", "input": { "fluid": "minecraft:milk", "amount": 1000 } },
    { "type": "create:filling", "input": { "fluid": "minecraft:water", "amount": 1000 } },
    { "type": "create:deploying", "input": { "item": "create:fluid_tank" } },
    { "type": "create:deploying", "input": { "item": "create:mechanical_pump" } },
    { "type": "create:deploying", "input": { "item": "create:hose_pulley" } },
    { "type": "create:deploying", "input": { "item": "create:smart_fluid_pipe" } },
    { "type": "create:deploying", "input": { "item": "kubejs:mechanical_core" } },
    { "type": "create:deploying", "input": { "item": "kubejs:circuit_board" } },
    { "type": "create:deploying", "input": { "item": "kubejs:bearing" } },
    { "type": "create:deploying", "input": { "item": "kubejs:electric_gear" } },
    { "type": "create:deploying", "input": { "item": "create:portable_storage_interface" } },
    { "type": "create:deploying", "input": { "item": "railways:portable_fuel_interface" } },
    { "type": "create:deploying", "input": { "item": "railways:fuel_tank" } },
    { "type": "create:deploying", "input": { "item": "create_connected:fluid_vessel" } },
    { "type": "create:deploying", "input": { "item": "create_sa:large_fueling_tank" } },
    { "type": "create:deploying", "input": { "item": "create_sa:large_filling_tank" } },
    { "type": "create:deploying", "input": { "item": "kubejs:large_fries" } },
    { "type": "create:deploying", "input": { "item": "create:precision_mechanism" } }
  ]
  //根据选中项生成配方
  function SpawnRecipe(In) {
    return ({
      "type": In.type,
      "ingredients": [
        { "item": "create_sa:large_filling_tank" },
        In.input
      ],
      "results": [{ "item": "create_sa:large_filling_tank" }]
    })
  }
  //随机选取一项生成配方
  function RandomSelect() {
    return (RandomRecipeListOrign[Math.round(21 * Math.random())])
  }
  let RandomRecipeList = []
  //生成配方列表
  for (let i = 0; i < Math.floor(2 * Math.random()) + 3; i++) {
    RandomRecipeList = RandomRecipeList.concat([
      SpawnRecipe(RandomSelect())
    ])
  }
  //生成循环次数
  let loop = Math.round(13 * Math.random()) - 6
  if (loop <= 0) {
    loop = 1
  }
  if (1000 * Math.random() <= 1) {
    loop = 114514
  }
  //生成配方
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "create_sa:large_filling_tank" },
    "results": [
      { "item": "create_sa:creative_filling_tank" }
    ],
    "loops": loop,
    "sequence": RandomRecipeList,
    "transitionalItem": { "item": "create_sa:large_filling_tank" }
  }).id("dut_create:creative_filling_tank_random")

  event.remove({ id: "create_sa:copper_magnet_recipe" })
  event.remove({ id: "create_sa:block_picker_recipe" })
  event.remove({ id: "create_sa:netherrack_recipe" })
  event.remove({ id: "create_sa:andesite_exoskeleton_recipe" })
  event.remove({ id: "create_sa:andesite_jetpack_recipe" })
  event.remove({ id: "create_sa:copper_exoskeleton_recipe" })
  event.remove({ id: "create_sa:copper_jetpack_recipe" })
  event.remove({ id: "create_sa:small_fueling_tank_recipe" })
  event.remove({ id: "create_sa:medium_fueling_tank_recipe" })
  event.remove({ id: "create_sa:large_fueling_tank_recipe" })
  event.remove({ id: "create_sa:small_filling_tank_recipe" })
  event.remove({ id: "create_sa:medium_filling_tank_recipe" })
  event.remove({ id: "create_sa:large_filling_tank_recipe" })
  event.remove({ id: "create_sa:experience_sword_recipe" })
  event.remove({ id: "create_sa:experience_shovel_recipe" })
  event.remove({ id: "create_sa:experience_pickaxe_recipe" })
  event.remove({ id: "create_sa:experience_axe_recipe" })
  event.remove({ id: "create_sa:heap_of_experience_recipe" })
  event.remove({ id: "create_sa:copper_sword_recipe" })
  event.remove({ id: "create_sa:copper_shovel_recipe" })
  event.remove({ id: "create_sa:copper_pickaxe_recipe" })
  event.remove({ id: "create_sa:copper_axe_recipe" })
  event.remove({ id: "create_sa:copper_hoe_recipe" })
  event.remove({ id: "create_sa:copper_helmet_recipe" })
  event.remove({ id: "create_sa:copper_chestplate_recipe" })
  event.remove({ id: "create_sa:copper_leggings_recipe" })
  event.remove({ id: "create_sa:copper_boots_recipe" })
  event.remove({ id: "create_sa:zinc_sword_recipe" })
  event.remove({ id: "create_sa:zinc_shovel_recipe" })
  event.remove({ id: "create_sa:zinc_pickaxe_recipe" })
  event.remove({ id: "create_sa:zinc_axe_recipe" })
  event.remove({ id: "create_sa:zinc_hoe_recipe" })
  event.remove({ id: "create_sa:zinc_helmet_recipe" })
  event.remove({ id: "create_sa:zinc_chestplate_recipe" })
  event.remove({ id: "create_sa:zinc_leggings_recipe" })
  event.remove({ id: "create_sa:zinc_boots_recipe" })
  event.remove({ id: "create_sa:heat_engine_recipe" })
  event.remove({ id: "create_sa:steam_engine_recipe" })
  event.remove({ id: "create_sa:hydraulic_engine_recipe" })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      " A ",
      "ABA",
      " A ",
    ],
    "key": {
      "A": { "item": "create:sturdy_sheet" },
      "B": { "item": "create:fluid_tank" }
    },
    "result": { "item": "create_sa:large_fueling_tank" }
  }).id("dut_create:large_fueling_tank")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      " A ",
      "ABA",
      " A ",
    ],
    "key": {
      "A": { "tag": "forge:ingots/copper" },
      "B": { "item": "create:fluid_tank" }
    },
    "result": { "item": "create_sa:large_filling_tank" }
  }).id("dut_create:large_filling_tank")
  event.remove({ id: "create_sa:brass_jetpack_recipe" })
  event.remove({ id: "create_sa:netherite_jetpack_recipe" })
  event.remove({ id: 'create_sa:fan_component_recipe' })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BEA",
      "ABA"
    ],
    "key": {
      "A": { "item": "create:andesite_alloy" },
      "B": { "tag": "forge:ingots/tin" },
      "E": { "item": "create:encased_fan" }
    },
    "result": { "item": "create_sa:fan_component" }
  }).id('dut_create:fan_component')
  event.remove({ id: "create_sa:blazing_shovel_recipe" })
  event.remove({ id: "create_sa:blazing_pickaxe_recipe" })
  event.remove({ id: "create_sa:blazing_axe_recipe" })
  event.remove({ id: "create_sa:blazing_sword_recipe" })
  event.remove({ id: "create_sa:zinc_handle_recipe" })
  event.replaceInput({ Input: "create_sa:zinc_handle" }, "create_sa:zinc_handle", "#forge:rods/tin")
  event.remove({ id: "create_sa:grapplin_whisk_recipe" })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": { "tag": "dut_create:cogwheel" },
      "B": { "item": "create:andesite_alloy" },
      "C": { "item": "create:minecart_coupling"},
      "D": { "item": "kubejs:electric_gear" },
      "E": { "item": "create:mechanical_mixer" }
    },
    "pattern": [
      "ABA",
      "CDC",
      "CEC"
    ],
    "result": { "item": "create_sa:grapplin_whisk" },
    "show_notification": true
  }).id("dut_create:grapplin_whisk")
})