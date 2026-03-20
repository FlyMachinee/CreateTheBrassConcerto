ServerEvents.recipes(event => {
    //导航数据擦去
    function NavigateDataEmptying(item) {
        event.custom({
            "type": "vintageimprovements:vibrating",
            "ingredients": [
                { "item": item }
            ],
            "results": [
                { "item": "kubejs:navigate_data_empty" }
            ]
        }).id("dut_create:emptying/" + item.split(":")[1])
    }
    Ingredient.of("#dut_create:navigate_data").itemIds.forEach(i => NavigateDataEmptying(i))
    //250-75%对应期望333.33..  80%对应期望312.5
    event.custom({
        "type": "create:emptying",
        "ingredients": [
            { "item": "minecraft:red_mushroom" }
        ],
        "results": [
            { "fluid": "kubejs:red_mushroom_spore", "amount": 50 }
        ]
    }).id("dut_create:emptying/red_mushroom_spore")
    event.custom({
        "type": "create:emptying",
        "ingredients": [
            { "item": "minecraft:brown_mushroom" }
        ],
        "results": [
            { "fluid": "kubejs:brown_mushroom_spore", "amount": 50 }
        ]
    }).id("dut_create:emptying/brown_mushroom_spore")
    event.custom({
        "type": "create:emptying",
        "ingredients": [
            { "item": "kubejs:red_mushroom_cap_piece" }
        ],
        "results": [
            { "item": "kubejs:red_mushroom_cap_piece", "chance": 0.25 },
            { "fluid": "kubejs:red_mushroom_spore", "amount": 10 }
        ]
    }).id("dut_create:emptying/red_mushroom_spore_cap")
    event.custom({
        "type": "create:emptying",
        "ingredients": [
            { "item": "kubejs:brown_mushroom_cap_piece" }
        ],
        "results": [
            { "item": "kubejs:brown_mushroom_cap_piece", "chance": 0.25 },
            { "fluid": "kubejs:brown_mushroom_spore", "amount": 10 }
        ]
    }).id("dut_create:emptying/brown_mushroom_spore_cap")
    event.custom({
        "type": "create:emptying",
        "ingredients": [
            { "item": "kubejs:aeronos_cap_piece" }
        ],
        "results": [
            { "item": "kubejs:aeronos_cap_piece", "chance": 0.25 },
            { "fluid": "kubejs:aeronos_spore", "amount": 10 }
        ]
    }).id("dut_create:emptying/aeronos_spore_cap")
    event.custom({
        "type": "create:emptying",
        "ingredients": [
            { "item": "kubejs:strophar_cap_piece" }
        ],
        "results": [
            { "item": "kubejs:strophar_cap_piece", "chance": 0.25 },
            { "fluid": "kubejs:strophar_spore", "amount": 10 }
        ]
    }).id("dut_create:emptying/strophar_spore_cap")
})