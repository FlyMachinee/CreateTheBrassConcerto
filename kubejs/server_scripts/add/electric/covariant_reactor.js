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
        "action": "check",
        "amount": 1,
        "pos": [1, 0, 1, -1, 0, -1],
        "filter": ["kubejs:bronze_fuel_rod"],
        "whitelist": true
    }
    const ReactorFilter = ["minecraft:air", "minecraft:void_air", "minecraft:cave_air"]
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
    function ReactorEnergy(amount1, amount2) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:covariant_reactor",
            "time": 60,
            "error": true,
            "hidden": true,
            "priority": 10 * amount1 + amount2 + 200,
            "requirements": [
                ReactorEnergyOutput(Math.floor(256 * Math.pow(2, amount1) * (1 - (0.125 * amount2)))),
                ReactorHeat(Math.floor(32 * Math.pow(2, amount1) * (1 - (0.125 * amount2)))),
                ReactorFuelInput(amount1, 0.025 * (1 - (0.125 * amount2))),
                ReactorController(amount2),
                ReactorSound
            ]
        }).id("dut_create:covariant_reactor/output_" + amount1 + "_" + amount2)
    }
    function ReactorHeatUp(amount1, amount2) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:covariant_reactor",
            "time": 60,
            "error": true,
            "hidden": true,
            "priority": 10 * amount1 + amount2 + 100,
            "requirements": [
                ReactorHeat(Math.floor(64 * Math.pow(2, amount1) * (1 - (0.125 * amount2)))),
                ReactorFuelInput(amount1, 0.025 * (1 - (0.125 * amount2))),
                ReactorController(amount2),
                ReactorSound
            ]
        }).id("dut_create:covariant_reactor/heatup_" + amount1 + "_" + amount2)
    }

    function ReactorEnergy1(amount2) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:covariant_reactor",
            "time": 60,
            "error": true,
            "hidden": true,
            "priority": 210 + amount2,
            "requirements": [
                ReactorEnergyOutput(Math.floor(512 * (1 - (0.125 * amount2)))),
                ReactorHeat(Math.floor(64 * (1 - (0.125 * amount2)))),
                ReactorFuelInput1,
                ReactorController(amount2),
                ReactorSound
            ]
        }).id("dut_create:covariant_reactor/output_1_" + amount2)
    }
    function ReactorHeatUp1(amount2) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:covariant_reactor",
            "time": 60,
            "error": true,
            "hidden": true,
            "priority": 110 + amount2,
            "requirements": [
                ReactorHeat(Math.floor(128 * (1 - (0.125 * amount2)))),
                ReactorFuelInput1,
                ReactorController(amount2),
                ReactorSound
            ]
        }).id("dut_create:covariant_reactor/heatup_1_" + amount2)
    }
    for (let i = 1; i < 9; i++) {
        for (let i1 = 0; i1 < 9 - i && i1 < 8; i1++) {
            if (i == 1) {
                ReactorEnergy1(i1)
                ReactorHeatUp1(i1)
                continue
            }
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
            "priority": 4 + amount,
            "requirements": [
                ReactorController(4),
                ReactorSound2,
                {
                    "type": "custommachinery:fluid_per_tick",
                    "mode": "input",
                    "tank": "heat",
                    "fluid": "kubejs:covariant_heat",
                    "amount": 4000 * amount
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
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:covariant_reactor",
        "time": 20,
        "error": true,
        "hidden": true,
        "priority": 9,
        "requirements": [
            ReactorController(4),
            {
                "type": "custommachinery:item",
                "mode": "input",
                "item": "kubejs:radiator",
                "amount": 1
            },
            ReactorSound2,
            {
                "type": "custommachinery:fluid_per_tick",
                "mode": "output",
                "tank": "steam",
                "fluid": "kubejs:superheated_steam",
                "amount": 2400
            },
            {
                "type": "custommachinery:fluid_per_tick",
                "mode": "input",
                "tank": "heat",
                "fluid": "kubejs:covariant_heat",
                "amount": 64000
            }
        ]
    }).id("dut_create:covariant_reactor/freeze")
    ReactorFreeze(1)
    ReactorFreeze(2)
    ReactorFreeze(3)
    ReactorFreeze(4)
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
})