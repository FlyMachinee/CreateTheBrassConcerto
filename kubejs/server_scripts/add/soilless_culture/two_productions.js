ServerEvents.recipes(event => {
    create2StepRecipe("minecraft:beetroot_seeds", "minecraft:beetroot", "minecraft:fern", 30, 75)
    create2StepRecipe("minecraft:wheat_seeds", "minecraft:wheat", "minecraft:tall_grass", 20, 75)
    create2StepRecipe("minecraft:carrot", "minecraft:carrot", "minecraft:grass", 31, 75)
    create2StepRecipe("minecraft:potato", "minecraft:poisonous_potato", "minecraft:azure_bluet", 32, 1, 0.5, 50)
    create2StepRecipe("minecraft:poisonous_potato", "minecraft:potato", "minecraft:vine", 54, 50)
    //紫颂果
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "minecraft:chorus_flower" },
        "results": [{ "item": "minecraft:chorus_fruit", "count": 48, "chance": 0.12 },
        { "item": "minecraft:chorus_flower", "count": 1, "chance": 0.88 }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "create:filling",
                "ingredients": [{ "item": "minecraft:chorus_plant" },
                { "amount": 200, "fluid": "kubejs:muriatic_acid" }],
                "results": [{ "item": "minecraft:chorus_plant" }]
            },
            {
                "type": "create:filling",
                "ingredients": [{ "item": "minecraft:chorus_plant" },
                { "amount": 100, "fluid": "kubejs:chlorine" }],
                "results": [{ "item": "minecraft:chorus_plant" }]
            }
        ],
        "transitionalItem": { "item": "minecraft:chorus_plant" }
    }).id("dut_create:soilless_culture/chorus_fruit")
    Ingredient.of("#minecraft:leaves").itemIds.forEach(i => create2StepRecipe1(i, i, i, 13, 0.5, 50))

    function create2StepRecipe(a, b, c, count1, nitrogen) {
        let k = "dut_create:soilless_culture/two_productions/" + a.split(":")[1]
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": { "item": a },
            "results": [{ "item": b, "count": count1 }
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
                    { "amount": nitrogen, "fluid": "kubejs:nitrogen_fertilizer" }],
                    "results": [{ "item": c }]
                }
            ],
            "transitionalItem": { "item": c }
        }).id(k)
        return 0
    }
    function create2StepRecipe1(a, b, c, count1, chance, nitrogen) {
        let k = "dut_create:soilless_culture/two_productions/" + a.split(":")[1]
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": { "item": a },
            "results": [
                { "item": b, "count": count1, "chance": chance },
                { "item": a, "chance": 1 - chance }
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
                    { "amount": nitrogen, "fluid": "kubejs:nitrogen_fertilizer" }],
                    "results": [{ "item": c }]
                }
            ],
            "transitionalItem": { "item": c }
        }).id(k)
        return 0
    }
})