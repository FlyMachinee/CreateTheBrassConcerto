ServerEvents.recipes(event => {
  //
  function createRecipe(a, b, c, d) {
    let e = "dut_create:soilless_culture/one_step/" + a.split(":")[1]
    event.custom({
      "type": "create:sequenced_assembly",
      "ingredient": { "item": a },
      "results": [
        { "item": a, "count": 8, "chance": d }, { "item": a, "chance": 1 - d }
      ],
      "loops": 1,
      "sequence": [
        {
          "type": "create:filling",
          "ingredients": [{ "item": a },
          { "amount": c, "fluid": b }],
          "results": [{ "item": a }]
        }
      ],
      "transitionalItem": { "item": a }
    }).id(e);
    return 0
  }
  createRecipe("minecraft:nether_wart", "vintageimprovements:sulfur_dioxide", 25, 0.12)
  createRecipe("minecraft:glow_berries", "kubejs:nitrogen_fertilizer", 25, 0.25)
  createRecipe("minecraft:sweet_berries", "kubejs:nitrogen_fertilizer", 25, 0.36)
  createRecipe("minecraft:sugar_cane", "kubejs:nitrogen_fertilizer", 25, 0.5)
  createRecipe("minecraft:bamboo", "kubejs:nitrogen_fertilizer", 5, 0.75)
  createRecipe("minecraft:kelp", "kubejs:nitrogen_fertilizer", 25, 0.80)
  createRecipe("minecraft:cocoa_beans", "kubejs:nitrogen_fertilizer", 25, 0.36)
  //种子增殖
  createRecipe("minecraft:beetroot_seeds", "kubejs:nitrogen_fertilizer", 25, 0.75)
  createRecipe("minecraft:wheat_seeds", "kubejs:nitrogen_fertilizer", 25, 0.9)
  createRecipe("supplementaries:flax_seeds", "kubejs:nitrogen_fertilizer", 25, 0.75)
  createRecipe("minecraft:chorus_flower", "kubejs:chlorine", 50, 0.25)
  createRecipe("minecraft:cactus", "kubejs:nitrogen_fertilizer", 75, 0.16)
  createRecipe("minecraft:sea_pickle", "kubejs:nitrogen_fertilizer", 75, 0.5)
  Ingredient.of("#minecraft:flowers").itemIds.forEach(i => createRecipe(i, "kubejs:nitrogen_fertilizer", 75, 0.5))
  //南瓜
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "minecraft:pumpkin_seeds" },
    "results": [
      { "item": "minecraft:pumpkin", "count": 3, "chance": 0.25 },
      { "item": "minecraft:pumpkin_seeds", "chance": 0.75 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:pumpkin_seeds" },
        { "amount": 25, "fluid": "kubejs:nitrogen_fertilizer" }],
        "results": [{ "item": "minecraft:pumpkin_seeds" }]
      }
    ],
    "transitionalItem": { "item": "minecraft:pumpkin_seeds" }
  }).id("dut_create:soilless_culture/pumpkin")
  //西瓜
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "minecraft:melon_seeds" },
    "results": [
      { "item": "minecraft:melon", "count": 3, "chance": 0.25 },
      { "item": "minecraft:melon_seeds", "chance": 0.75 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:melon_seeds" },
        { "amount": 25, "fluid": "kubejs:nitrogen_fertilizer" }],
        "results": [{ "item": "minecraft:melon_seeds" }]
      }
    ],
    "transitionalItem": { "item": "minecraft:melon_seeds" }
  }).id("dut_create:soilless_culture/melon")
  /*
  //蘑菇
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "minecraft:brown_mushroom" },
    "results": [
      { "item": "minecraft:brown_mushroom", "count": 10, "chance": 0.25 },
      { "item": "minecraft:brown_mushroom", "chance": 0.75 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:brown_mushroom" },
        { "amount": 25, "fluid": "kubejs:nitrogen_fertilizer" }],
        "results": [{ "item": "minecraft:brown_mushroom" }]
      }
    ],
    "transitionalItem": { "item": "minecraft:brown_mushroom" }
  }).id("dut_create:soilless_culture/brown_mushroom")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "minecraft:red_mushroom" },
    "results": [
      { "item": "minecraft:red_mushroom", "count": 10, "chance": 0.25 },
      { "item": "minecraft:red_mushroom", "chance": 0.75 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:red_mushroom" },
        { "amount": 25, "fluid": "kubejs:nitrogen_fertilizer" }],
        "results": [{ "item": "minecraft:red_mushroom" }]
      }
    ],
    "transitionalItem": { "item": "minecraft:red_mushroom" }
  }).id("dut_create:soilless_culture/red_mushroom")
  */
  //下界蘑菇
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "minecraft:crimson_fungus" },
    "results": [
      { "item": "minecraft:crimson_fungus", "count": 10, "chance": 0.25 },
      { "item": "minecraft:crimson_fungus", "chance": 0.75 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:crimson_fungus" },
        { "amount": 25, "fluid": "kubejs:nitrogen_fertilizer" }],
        "results": [{ "item": "minecraft:crimson_fungus" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:crimson_fungus" },
        { "amount": 50, "fluid": "vintageimprovements:sulfur_dioxide" }],
        "results": [{ "item": "minecraft:crimson_fungus" }]
      }
    ],
    "transitionalItem": { "item": "minecraft:crimson_fungus" }
  }).id("dut_create:soilless_culture/crimson_fungus")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "minecraft:warped_fungus" },
    "results": [
      { "item": "minecraft:warped_fungus", "count": 10, "chance": 0.25 },
      { "item": "minecraft:warped_fungus", "chance": 0.75 }
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:warped_fungus" },
        { "amount": 25, "fluid": "kubejs:nitrogen_fertilizer" }],
        "results": [{ "item": "minecraft:warped_fungus" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:warped_fungus" },
        { "amount": 50, "fluid": "vintageimprovements:sulfur_dioxide" }],
        "results": [{ "item": "minecraft:warped_fungus" }]
      }
    ],
    "transitionalItem": { "item": "minecraft:warped_fungus" }
  }).id("dut_create:soilless_culture/warped_fungus")
  //骨粉稀释液
  event.remove({ id: "create_things_and_misc:diluted_bonemeal_craft" })
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": "minecraft:bone_meal", "count": 4 },
      { "fluid": "minecraft:water", "amount": 500 }
    ],
    "results": [
      { "fluid": "create_things_and_misc:diluted_bonemeal", "amount": 500 }
    ]
  }).id("dut_create:diluted_bonemeal")
})