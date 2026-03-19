ServerEvents.recipes(event => {
    //
    function ReactorFuelInput(amount, chance) {
        return ({
            "type": "custommachinery:block",
            "mode": "input",
            "action": "replace_destroy",
            "amount": amount,
            "pos": [1, 0, 1, -1, 0, -1],
            "filter": ["kubejs:bronze_fuel_rod"],
            "chance": chance,
            "whitelist": true,
            "block": "create:brass_block"
        })
    }
    function ReactorController(amount) {
        return ({
            "type": "custommachinery:block",
            "mode": "input",
            "action": "replace_destroy",
            "amount": amount,
            "pos": [1, 0, 1, -1, 0, -1],
            "filter": ["kubejs:carbon_electrode"],
            "whitelist": true,
            "block": "kubejs:carbon_electrode"
        })
    }
    function ReactorHeat(amount) {
        return ({
            "type": "custommachinery:fluid_per_tick",
            "mode": "output",
            "tank": "heat",
            "fluid": "kubejs:covariant_heat",
            "amount": amount
        })
    }
    const ReactorFuelInput1 = {
        "type": "custommachinery:block",
        "mode": "input",
        "action": "replace_destroy",
        "amount": 1,
        "pos": [1, 0, 1, -1, 0, -1],
        "filter": ["kubejs:bronze_fuel_rod"],
        "whitelist": true,
        "block": "kubejs:bronze_fuel_rod"
    }
    const ReactorSound = {
        "type": "custommachinery:command",
        "phase": "starting",
        "command": "/playsound createaddition:electric_motor_buzz block @a[distance=..16] ~ ~ ~ 0.8 1.2 0.5",
        "log": false,
        "permissionlevel": 5
    }
    const ReactorSound1 = {
        "type": "custommachinery:command",
        "phase": "ending",
        "command": "/playsound createbigcannons:fire_big_cannon voice @a[distance=..36] ~ ~ ~ 2 0.8 0.8",
        "log": false,
        "permissionlevel": 5
    }
    const ReactorSound2 = {
        "type": "custommachinery:command",
        "phase": "starting",
        "command": "/playsound minecraft:block.lava.extinguish block @a[distance=..24] ~ ~ ~ 0.5",
        "log": false,
        "permissionlevel": 5
    }
    const ReactorParticle = {
        "type": "custommachinery:command",
        "phase": "ending",
        "command": "/particle createbigcannons:cannon_smoke 1 1 120 1 ~ ~1 ~ 2 2.5 2 0.2 128",
        "log": false,
        "permissionlevel": 5
    }
    const ReactorParticle1 = {
        "type": "custommachinery:command",
        "phase": "crafting_tickable",
        "command": "/particle createbigcannons:cannon_smoke 1 1 120 1 ~ ~ ~ 1 1.5 1 0.01 1",
        "log": false,
        "permissionlevel": 5
    }
    function ReactorEnergyOutput(amount) {
        return ({
            "type": "custommachinery:energy_per_tick",
            "mode": "output",
            "amount": amount
        })
    }
    //1棒普通
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:covariant_reactor",
        "time": 60,
        "error": true,
        "hidden": true,
        "priority": 210,
        "requirements": [
            ReactorEnergyOutput(120),
            ReactorHeat(1),
            ReactorFuelInput1,
            ReactorSound
        ]
    }).id("dut_create:covariant_reactor/output_1")
    //1棒满电
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:covariant_reactor",
        "time": 60,
        "error": true,
        "hidden": true,
        "priority": 110,
        "requirements": [
            ReactorHeat(2),
            ReactorFuelInput1,
            ReactorSound
        ]
    }).id("dut_create:covariant_reactor/heatup_1")
    //普通配方
    function ReactorEnergy(amount1, amount2) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:covariant_reactor",
            "time": 60,
            "error": true,
            "hidden": true,
            "priority": 10 * amount1 + amount2 + 200,
            "requirements": [
                ReactorEnergyOutput(60 * Math.pow(2, amount1)),
                ReactorHeat(Math.pow(2, Math.floor(amount1 * 1.500) + 1)),
                ReactorFuelInput(amount1, 1 - (0.125 * amount2)),
                ReactorController(amount2),
                ReactorSound
            ]
        }).id("dut_create:covariant_reactor/output_" + amount1 + "_" + amount2)
    }
    //满电配方
    function ReactorHeatUp(amount1, amount2) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:covariant_reactor",
            "time": 60,
            "error": true,
            "hidden": true,
            "priority": 10 * amount1 + amount2 + 100,
            "requirements": [
                ReactorHeat(Math.pow(2, Math.floor(amount1 * 1.500) + 2)),
                ReactorFuelInput(amount1, 1 - (0.125 * amount2)),
                ReactorController(amount2),
                ReactorSound
            ]
        }).id("dut_create:covariant_reactor/heatup_" + amount1 + "_" + amount2)
    }
    for (let i = 2; i < 9; i++) {
        let maxi1 = 9 - i
        for (let i1 = 0; i1 < maxi1; i1++) {
            ReactorEnergy(i, i1)
            ReactorHeatUp(i, i1)
        }
    }
    //反应堆降温
    function ReactorFreeze(amount) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:covariant_reactor",
            "time": 5,
            "error": true,
            "hidden": true,
            "priority": 20 + amount,
            "requirements": [
                ReactorController(4),
                ReactorSound2,
                {
                    "type": "custommachinery:fluid",
                    "mode": "input",
                    "tank": "heat",
                    "fluid": "kubejs:covariant_heat",
                    "amount": 480 * amount
                },
                {
                    "type": "custommachinery:block",
                    "mode": "input",
                    "action": "replace_destroy",
                    "amount": amount,
                    "pos": [2, 0, 2, -2, 0, -2],
                    "filter": ["kubejs:cryogen[level=0]"],
                    "whitelist": true,
                    "block": "kubejs:superheated_steam"
                }
            ]
        }).id("dut_create:covariant_reactor/freeze/" + amount)
    }
    ReactorFreeze(1)
    ReactorFreeze(2)
    ReactorFreeze(3)
    ReactorFreeze(4)
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:covariant_reactor",
        "time": 40,
        "error": true,
        "hidden": true,
        "priority": 10,
        "requirements": [
            ReactorController(4),
            {
                "type": "custommachinery:item",
                "mode": "input",
                "item": "kubejs:radiator",
                "amount": 6
            },
            ReactorSound2,
            {
                "type": "custommachinery:fluid",
                "mode": "output",
                "tank": "steam",
                "fluid": "kubejs:superheated_steam",
                "amount": 6000
            },
            {
                "type": "custommachinery:fluid",
                "mode": "input",
                "tank": "heat",
                "fluid": "kubejs:covariant_heat",
                "amount": 46080
            }
        ]
    }).id("dut_create:covariant_reactor/freeze")
    //融毁
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:covariant_reactor",
        "time": 60,
        "error": true,
        "hidden": true,
        "priority": 8192,
        "requirements": [
            ReactorSound1,
            ReactorParticle,
            ReactorParticle1,
            {
                "type": "custommachinery:command",
                "phase": "ending",
                "command": "/execute positioned ~ ~ ~ run function dut:particle/covariant_reactor",
                "log": false,
                "permissionlevel": 5
            },
            {
                "type": "custommachinery:fluid",
                "mode": "input",
                "tank": "heat",
                "fluid": "kubejs:covariant_heat",
                "amount": 1474560
            }

        ]
    }).id("dut_create:covariant_reactor/explode")
    //空转
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:covariant_reactor",
        "time": 5,
        "error": true,
        "hidden": true,
        "priority": 0,
        "requirements": [
        ]
    }).id("dut_create:covariant_reactor/empty")

    event.custom({
        "type": "vintageimprovements:vacuumizing",
        "secondaryFluidInput": 0,
        "ingredients": [
            { "item": 'iceandfire:stymphalian_skull' },
            { "fluid": "kubejs:brass", "amount": 4 * IngotFluid },
            { "fluid": "kubejs:slime_colloid", "amount": 250 }
        ],
        "results": [{ "item": 'iceandfire:stymphalian_bird_feather', "count": 6 }],
        "processingTime": 60
    }).id('dut_create:bronze_feather')
    event.custom({
        "type": "vintageimprovements:vacuumizing",
        "secondaryFluidInput": 0,
        "ingredients": [
            { "item": 'iceandfire:stymphalian_bird_feather' },
            { "item": 'iceandfire:stymphalian_bird_feather' },
            { "fluid": "kubejs:lube_oil", "amount": 500 }
        ],
        "results": [{ "item": 'iceandfire:stymphalian_skull' }],
        "processingTime": 30
    }).id('dut_create:bronze_skull')
    event.custom({
        "type": "vintageimprovements:vacuumizing",
        "secondaryFluidInput": 0,
        "ingredients": [
            { "item": 'iceandfire:stymphalian_bird_feather' },
            { "item": 'iceandfire:stymphalian_bird_feather' },
            { "item": 'ad_astra:cheese_block' },
            { "fluid": "kubejs:muriatic_acid", "amount": 500 }
        ],
        "results": [{ "item": 'iceandfire:stymphalian_skull',"count":2 }],
        "processingTime": 30
    }).id('dut_create:bronze_skull_advanced')
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": "superheated",
        "ingredients": [
            { "item": 'iceandfire:stymphalian_bird_feather' },
            { "item": 'iceandfire:stymphalian_bird_feather' },
            { "item": 'kubejs:granite_alloy' },
            { "item": 'kubejs:granite_alloy' },
            { "item": 'kubejs:granite_alloy' },
            { "item": 'kubejs:granite_alloy' }
        ],
        "processingTime": 30,
        "results": [{ "item": "kubejs:bronze_triangle" }]
    }).id("dut_create:bronze_triangle")
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": "superheated",
        "ingredients": [
            { "item": 'kubejs:phantom_fungus' },
            { "item": "kubejs:bronze_triangle" }
        ],
        "processingTime": 30,
        "results": [
            { "item": 'kubejs:phantom_fungus' },
            { "fluid": "kubejs:covariant_heat", "amount": 240 }
        ]
    }).id("dut_create:covariant_heat")
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": "superheated",
        "ingredients": [
            { "item": "kubejs:bronze_triangle" }
        ],
        "processingTime": 30,
        "results": [
            { "fluid": "kubejs:covariant_heat", "amount": 120 }
        ]
    }).id("dut_create:covariant_heat_basic")
})