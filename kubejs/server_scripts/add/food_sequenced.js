ServerEvents.recipes(event => {
    //大份薯条
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "minecraft:paper" },
        "results": [
            { "item": "kubejs:large_fries","count":2}
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:french_fries" },
                    { "tag": "forge:dyes/red" }
                ],
                "results": [{ "item": "kubejs:french_fries" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:french_fries" },
                    { "item": "kubejs:french_fries" }
                ],
                "results": [{ "item": "kubejs:french_fries" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:french_fries" },
                    { "item": "kubejs:french_fries" }
                ],
                "results": [{ "item": "kubejs:french_fries" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:french_fries" },
                    { "item": "kubejs:french_fries" }
                ],
                "results": [{ "item": "kubejs:french_fries" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:french_fries" },
                    { "item": "kubejs:salt" }
                ],
                "results": [{ "item": "kubejs:french_fries" }]
            }
        ],
        "transitionalItem": { "item": "kubejs:french_fries" }
    }).id("dut_create:food_sequnced/large_fries")
    //薯条
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "minecraft:baked_potato" },
        "results": [
            { "item": "kubejs:french_fries", "count": 2 }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "create:cutting",
                "ingredients": [
                    { "item": "minecraft:baked_potato" }
                ],
                "results": [{ "item": "minecraft:baked_potato" }]
            },
            {
                "type": "create:cutting",
                "ingredients": [
                    { "item": "minecraft:baked_potato" }
                ],
                "results": [{ "item": "minecraft:baked_potato" }]
            },
            {
                "type": "create:filling",
                "ingredients": [{ "item": "minecraft:baked_potato" },
                    { "fluidTag": "dut_create:plantoil", "amount": 50 }],
                "results": [{ "item": "minecraft:baked_potato" }]
            }
        ],
        "transitionalItem": { "item": "minecraft:baked_potato" }
    }).id("dut_create:food_sequnced/french_fries")
    //羊肉串
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            { "item": "minecraft:cooked_mutton" },
            { "item": "minecraft:stick" }
        ],
        "results": [{ "item": "kubejs:lamb_kebabs","count":2 }]
    }).id("dut_create:food_sequnced/lamb_kebabs")
})