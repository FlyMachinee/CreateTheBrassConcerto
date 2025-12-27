ServerEvents.recipes(event => {
    //alpha信息素
    event.custom({
        "type": "create:filling",
        "ingredients": [
            { "item": "kubejs:matrix_2", "nbt": '{RGB: [[[0, 0], [0, 0]]],matrix:[[[0,0],[0,0]]]}' },
            { "fluid": "kubejs:red_mushroom_spore", "amount": 250 }
        ],
        "results": [{ "item": "kubejs:matrix_2", "nbt": '{ RGB: [[[-1, 1], [2, 0]]], matrix: [[[-1, 1], [2, 0]]] }' }],
    }).id("dut_create:matrix_2/matrix_2_alpha")
    //beta信息素
    event.custom({
        "type": "create:filling",
        "ingredients": [
            { "item": "kubejs:matrix_2", "nbt": '{RGB: [[[0, 0], [0, 0]]],matrix:[[[0,0],[0,0]]]}' },
            { "fluid": "kubejs:brown_mushroom_spore", "amount": 250 }
        ],
        "results": [{ "item": "kubejs:matrix_2", "nbt": '{ RGB: [[[1, 0], [2, 0]]], matrix: [[[1, 0], [2, 0]]] }' }],
    }).id("dut_create:matrix_2/matrix_2_beta")
    //gama信息素
    event.custom({
        "type": "create:filling",
        "ingredients": [
            { "item": "kubejs:matrix_2", "nbt": '{RGB: [[[0, 0], [0, 0]]],matrix:[[[0,0],[0,0]]]}' },
            { "fluid": "createdieselgenerators:ethanol", "amount": 250 }
        ],
        "results": [{ "item": "kubejs:matrix_2", "nbt": '{ RGB: [[[2, 0], [0, 1]]], matrix: [[[2, 0], [0, 1]]] }' }],
    }).id("dut_create:matrix_2/matrix_2_gamma")
    //delta信息素
    event.custom({
        "type": "create:filling",
        "ingredients": [
            { "item": "kubejs:matrix_2", "nbt": '{RGB: [[[0, 0], [0, 0]]],matrix:[[[0,0],[0,0]]]}' },
            { "fluid": "kubejs:red_spore", "amount": 250 }
        ],
        "results": [{ "item": "kubejs:matrix_2", "nbt": '{ RGB: [[[0, 1], [2, 0]]], matrix: [[[0, 1], [2, 0]]] }' }],
    }).id("dut_create:matrix_2/matrix_2_delta")
    //epsilon信息素
    event.custom({
        "type": "create:filling",
        "ingredients": [
            { "item": "kubejs:matrix_2", "nbt": '{RGB: [[[0, 0], [0, 0]]],matrix:[[[0,0],[0,0]]]}' },
            { "fluid": "kubejs:green_spore", "amount": 250 }
        ],
        "results": [{ "item": "kubejs:matrix_2", "nbt": '{ RGB: [[[1, 1], [3, 1]]], matrix: [[[1, 1], [3, 1]]] }' }],
    }).id("dut_create:matrix_2/matrix_2_epsilon")
    //zeta信息素
    event.custom({
        "type": "create:filling",
        "ingredients": [
            { "item": "kubejs:matrix_2", "nbt": '{RGB: [[[0, 0], [0, 0]]],matrix:[[[0,0],[0,0]]]}' },
            { "fluid": "kubejs:blue_spore", "amount": 250 }
        ],
        "results": [{ "item": "kubejs:matrix_2", "nbt": '{ RGB: [[[0, 1], [1, 1]]], matrix: [[[0, 1], [1, 1]]] }' }],
    }).id("dut_create:matrix_2/matrix_2_zeta")
})
//{ RGB: [[[-1, 1], [2, 0]]], matrix: [[[-1, 1], [2, 0]]] }-alpha
//{ RGB: [[[1, 0], [2, 0]]], matrix: [[[1, 0], [2, 0]]] }-beta
//{ RGB: [[[2, 0], [0, 1]]], matrix: [[[2, 0], [0, 1]]] }-gamma
//{ RGB: [[[0, 1], [2, 0]]], matrix: [[[0, 1], [2, 0]]] }-delta
//{ RGB: [[[1, 1], [3, 1]]], matrix: [[[1, 1], [3, 1]]] }-epsilon
//{ RGB: [[[0, 1], [1, 1]]], matrix: [[[0, 1], [1, 1]]] }-zeta
//{ RGB: [[[1, -1], [-1, 1]]], matrix: [[[1, -1], [-1, 1]]] }-eta
//{ RGB: [[[1, 2], [5, 3]]], matrix: [[[1, 2], [5, 3]]] }-theta
//{ RGB: [[[1, -2], [-5, 3]]], matrix: [[[1, -2], [-5, 3]]] }-iota