// requires:farmersdelight
ServerEvents.recipes(event => {
  
    //手打牛肉饼
    event.custom({
        "type": "create:pressing",
        "ingredients": [{ "item": "minecraft:beef" }],
        "results": [{ "item": "farmersdelight:minced_beef", "count": 3 }],
    }).id("dut_create:eggs/pressing/minced_beef")
    //齿轮盛宴
    event.custom(
        {
            "type": "create:item_application",
            "ingredients": [
                { "item": "minecraft:pumpkin" },
                { "item": "kubejs:io_mechanism" }
            ],
            "results": [
                { "item": 'farmersdelight:stuffed_pumpkin_block' }
            ]
        }
    ).id("dut_create:eggs/deploying/createdelight")
    //“切洋葱”
    event.custom(
        {
            "type": "create:item_application",
            "ingredients": [
                { "item": "minecraft:obsidian" },
                { "item": "farmersdelight:onion" }
            ],
            "results": [
                { "item": "minecraft:crying_obsidian" }
            ]
        }
    ).id("dut_create:eggs/deploying/crying_obsidian")
  create2StepRecipe("farmersdelight:rice", "farmersdelight:rice_panicle", "farmersdelight:wild_rice", 4, 2, 0.36)
  create2StepRecipe("farmersdelight:cabbage_seeds", "farmersdelight:cabbage", "farmersdelight:wild_cabbages", 2, 1, 0.36)
  create2StepRecipe("farmersdelight:tomato_seeds", "farmersdelight:tomato", "farmersdelight:wild_tomatoes", 2, 1, 0.36)
  create2StepRecipe1("farmersdelight:onion", "minecraft:allium", "farmersdelight:wild_onions", 6, 1, 0.78)
  createRecipe("farmersdelight:rice", "kubejs:nitrogen_fertilizer", 25, 0.96)
  createRecipe("farmersdelight:cabbage_seeds", "kubejs:nitrogen_fertilizer", 25, 0.75)
  createRecipe("farmersdelight:tomato_seeds", "kubejs:nitrogen_fertilizer", 25, 0.75)
  event.remove({ output: "farmersdelight:organic_compost" })
  //氮肥制沃土
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "minecraft:dirt" },
    "results": [{ "item": "farmersdelight:rich_soil" }],
    "loops": 1,
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:dirt" },
        { "amount": 250, "fluid": "kubejs:saline_water" }],
        "results": [{ "item": "minecraft:dirt" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:dirt" },
        { "amount": 1000, "fluid": "kubejs:nitrogen_fertilizer" }],
        "results": [{ "item": "minecraft:dirt" }]
      }
    ],
    "transitionalItem": { "item": "minecraft:dirt" }
  }).id("dut_create:rich_soil_from_dirt")
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "item": "farmersdelight:tree_bark" },
      { "amount": 75, "fluid": "minecraft:water" }
    ],
    "results": [
      { "item": "minecraft:paper" }
    ]
  }).id("dut_create:compacting/paper_from_bark")

  if (Platform.isLoaded('nethersdelight')) {
      //枪药珠培育
      event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "nethersdelight:propelpearl" },
        "results": [{ "item": "nethersdelight:propelpearl", "count": 16, "chance": 0.25 },
        { "item": "nethersdelight:propelpearl", "chance": 0.75 }
        ],
        "loops": 1,
        "sequence": [
          {
            "type": "create:filling",
            "ingredients": [{ "item": "nethersdelight:propelplant_cane" },
            { "amount": 150, "fluid": "minecraft:lava" }],
            "results": [{ "item": "nethersdelight:propelplant_cane" }]
          },
          {
            "type": "create:filling",
            "ingredients": [{ "item": "nethersdelight:propelplant_cane" },
            { "amount": 250, "fluid": "vintageimprovements:sulfur_dioxide" }],
            "results": [{ "item": "nethersdelight:propelplant_cane" }]
          }
        ],
        "transitionalItem": { "item": "nethersdelight:propelplant_cane" }
      }).id("dut_create:soilless_culture/propelpearl")
      //枪药珠
      event.custom({
        "type": "create:mixing",
        "ingredients": [
          { "fluid": "vintageimprovements:sulfuric_acid", "amount": 250 },
          { "item": 'nethersdelight:propelpearl' },
          { "item": 'nethersdelight:propelpearl' },
          { "item": 'nethersdelight:propelpearl' },
          { "item": 'nethersdelight:propelpearl' }
        ],
        "results": [
          { "fluid": "kubejs:nitrogen_dioxide", "amount": 25 },
          { "item": "minecraft:gunpowder" }
        ],
        "heatRequirement": "heated"
      }).id("dut_create:propelpearl_gunpowder")
  }
  if (Platform.isLoaded('sliceanddice')) {
      event.remove({ id: "sliceanddice:mixing/fertilizer/from_compost" })
      event.remove({ id: "sliceanddice:mixing/fertilizer/from_tree_fertilizer" })
  }

  function create2StepRecipe(a, b, c, count1, count2, per) {
    let k = "dut_create:soilless_culture/two_productions/" + a.split(":")[1]
    event.custom({
      "type": "create:sequenced_assembly",
      "ingredient": { "item": a },
      "results": [{ "item": b, "count": 4 * count1, "chance": per },
      { "item": a, "count": count2, "chance": 1 - per }
      ],
      "loops": 1,
      "sequence": [
        {
          "type": "create:filling",
          "ingredients": [{ "item": c },
          { "amount": 25, "fluid": "kubejs:saline_water" }],
          "results": [{ "item": c }]
        },
        {
          "type": "create:filling",
          "ingredients": [{ "item": c },
          { "amount": 100, "fluid": "minecraft:water" }],
          "results": [{ "item": c }]
        },
        {
          "type": "create:filling",
          "ingredients": [{ "item": c },
          { "amount": 30, "fluid": "kubejs:nitrogen_fertilizer" }],
          "results": [{ "item": c }]
        }
      ],
      "transitionalItem": { "item": c }
    }).id(k);
    return 0
  }
  function create2StepRecipe1(a, b, c, count1, count2, per) {
    let k = "dut_create:soilless_culture/" + a.split(":")[1]
    event.custom({
      "type": "create:sequenced_assembly",
      "ingredient": { "item": a },
      "results": [{ "item": a, "count": 4 * count1, "chance": per },
      { "item": b, "count": count2, "chance": 1 - per }
      ],
      "loops": 1,
      "sequence": [
        {
          "type": "create:filling",
          "ingredients": [{ "item": c },
          { "amount": 25, "fluid": "kubejs:saline_water" }],
          "results": [{ "item": c }]
        },
        {
          "type": "create:filling",
          "ingredients": [{ "item": c },
          { "amount": 100, "fluid": "minecraft:water" }],
          "results": [{ "item": c }]
        },
        {
          "type": "create:filling",
          "ingredients": [{ "item": c },
          { "amount": 15, "fluid": "kubejs:nitrogen_fertilizer" }],
          "results": [{ "item": c }]
        }
      ],
      "transitionalItem": { "item": c }
    }).id(k);
    return 0
  }
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
})
