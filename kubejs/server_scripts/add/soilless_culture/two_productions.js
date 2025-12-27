ServerEvents.recipes(event => {
    create2StepRecipe("minecraft:beetroot_seeds", "minecraft:beetroot", "minecraft:fern", 2,1,0.36)
    create2StepRecipe("minecraft:wheat_seeds", "minecraft:wheat", "minecraft:grass", 3,2,0.36)
    create2StepRecipe1("minecraft:carrot", "minecraft:azure_bluet", "minecraft:grass", 3,1,0.85)
    create2StepRecipe1("minecraft:potato", "minecraft:poisonous_potato", "minecraft:fern", 4,1,0.98)
    create2StepRecipe1("minecraft:poisonous_potato", "minecraft:potato", "minecraft:fern", 1,3,0.64)
    create2StepRecipe("supplementaries:flax_seeds", "supplementaries:flax", "supplementaries:wild_flax", 2,1,0.36)
    //紫颂果
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "minecraft:chorus_flower" },
        "results": [{ "item": "minecraft:chorus_fruit", "count": 48,"chance": 0.12 },
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
    Ingredient.of("#minecraft:leaves").itemIds.forEach(i=>create2StepRecipe1(i, i, i, 2,1,0.5))
    
    function create2StepRecipe(a, b, c, count1,count2, per) {
        let k = "dut_create:soilless_culture/two_productions/" + a.split(":")[1]
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": { "item": a },
            "results": [{ "item": b, "count": 4*count1, "chance": per },
            { "item": a, "count": count2,"chance": 1-per }
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
    function create2StepRecipe1(a, b, c, count1,count2, per) {
        let k = "dut_create:soilless_culture/" + a.split(":")[1]
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": { "item": a },
            "results": [{ "item": a, "count": 4*count1, "chance": per },
            { "item": b, "count": count2,"chance": 1-per }
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
})