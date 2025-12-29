ServerEvents.recipes(event => {
    //
    function GeneratorStructure(pos) {
        return ({
            "type": "custommachinery:block",
            "mode": "input",
            "action": "check",
            "amount": 3,
            "pos": pos,
            "filter": GeneratorFilter,
            "whitelist": false
        })
    }
    function GeneratorInput(fliter, block, amount) {
        return ({
            "type": "custommachinery:block",
            "mode": "input",
            "action": "replace_destroy",
            "amount": amount,
            "pos": [1, 1, 0, -1, -1, 0],
            "filter": fliter,
            "whitelist": true,
            "block": block
        })
    }
    const GeneratorLube = {
        "type": "custommachinery:fluid",
        "mode": "input",
        "tank": "lube",
        "fluid": "kubejs:lube_oil",
        "amount": 20
    }
    const GeneratorFilter = ["minecraft:air", "minecraft:void_air", "minecraft:cave_air"]
    const GeneratorSound = {
        "type": "custommachinery:command",
        "phase": "ending",
        "command": "/playsound createaddition:electric_motor_buzz block @a[distance=..24] ~ ~ ~ 0.3 0.8 0.3",
        "log": false,
        "permissionlevel": 5
    }
    const GeneratorBird = {
        "type": "custommachinery:command",
        "phase": "ending",
        "command": "/execute as @e[type=iceandfire:stymphalian_bird,distance=..16] at @s run summon item ~ ~ ~ {Item:{id:'iceandfire:stymphalian_bird_feather',Count:1b}}",
        "log": false,
        "chance": 0.5,
        "permissionlevel": 5
    }
    const GeneratorParticle = {
        "type": "custommachinery:command",
        "phase": "crafting_tickable",
        "command": "/particle minecraft:electric_spark ~ ~ ~ 1.5 1.5 1.5 0.1 3",
        "log": false,
        "permissionlevel": 5
    }
    function GeneratorDimension(dimension, boolean) {
        return ({
            "type": "custommachinery:dimension",
            "filter": dimension,
            "blacklist": boolean
        })
    }
    const GasDimension = ["minecraft:overworld", "dut:slimeria", "dut:slimeria_orbit", "minecraft:the_end"]
    function GeneratorEnergyOutput(amount) {
        return ({
            "type": "custommachinery:energy_per_tick",
            "mode": "output",
            "amount": amount
        })
    }
    function GeneratorEnergy(amount1, amount2) {
        if (amount2 == 0) {
            event.custom({
                "type": "custommachinery:custom_machine",
                "machine": "dut:steam_generator",
                "time": 60,
                "hidden": true,
                "error": true,
                "priority": 100 * amount1,
                "requirements": [
                    GeneratorDimension(GasDimension,false),
                    GeneratorEnergyOutput(Math.floor(2048 * amount1)),
                    GeneratorParticle,
                    GeneratorSound,
                    GeneratorBird,
                    GeneratorLube,
                    GeneratorStructure([1, 2, 0, - 1, 2, 0]),
                    GeneratorStructure([1, -2, 0, -1, -2, 0]),
                    GeneratorStructure([2, 1, 0, 2, -1, 0]),
                    GeneratorStructure([-2, 1, 0, -2, -1, 0]),
                    GeneratorInput("kubejs:pressurized_steam[level=0]", "minecraft:water", amount1)
                ]
            }).id("dut_create:steam_generator/output_" + amount1)
            event.custom({
                "type": "custommachinery:custom_machine",
                "machine": "dut:steam_generator",
                "time": 60,
                "hidden": true,
                "error": true,
                "priority": 100 * amount1,
                "requirements": [
                    GeneratorDimension(GasDimension,true),
                    GeneratorEnergyOutput(Math.floor(2048 * amount1)),
                    GeneratorParticle,
                    GeneratorSound,
                    GeneratorBird,
                    GeneratorLube,
                    GeneratorStructure([1, 2, 0, - 1, 2, 0]),
                    GeneratorStructure([1, -2, 0, -1, -2, 0]),
                    GeneratorStructure([2, 1, 0, 2, -1, 0]),
                    GeneratorStructure([-2, 1, 0, -2, -1, 0]),
                    GeneratorInput("kubejs:pressurized_steam[level=0]", "minecraft:air", amount1)
                ]
            }).id("dut_create:steam_generator/nowater/output_" + amount1)
        }
        if (amount2 > 0) {
            event.custom({
                "type": "custommachinery:custom_machine",
                "machine": "dut:steam_generator",
                "time": 60,
                "error": true,
                "hidden": true,
                "priority": 100 * amount1 + 10 * amount2,
                "requirements": [
                    GeneratorDimension(GasDimension,false),
                    GeneratorEnergyOutput(Math.floor((2048 * amount1) / (amount2 + 1))),
                    GeneratorParticle,
                    GeneratorSound,
                    GeneratorLube,
                    GeneratorBird,
                    GeneratorStructure([1, 2, 0, - 1, 2, 0]),
                    GeneratorStructure([1, -2, 0, -1, -2, 0]),
                    GeneratorStructure([2, 1, 0, 2, -1, 0]),
                    GeneratorStructure([-2, 1, 0, -2, -1, 0]),
                    GeneratorInput("kubejs:pressurized_steam[level=0]", "minecraft:water", amount1),
                    GeneratorInput("minecraft:water", "minecraft:air", amount2)
                ]
            }).id("dut_create:steam_generator/output_" + amount1 + "_" + amount2)
            event.custom({
                "type": "custommachinery:custom_machine",
                "machine": "dut:steam_generator",
                "time": 60,
                "error": true,
                "hidden": true,
                "priority": 100 * amount1 + 10 * amount2,
                "requirements": [
                    GeneratorDimension(GasDimension,true),
                    GeneratorEnergyOutput(Math.floor((2048 * amount1) / (amount2 + 1))),
                    GeneratorParticle,
                    GeneratorSound,
                    GeneratorLube,
                    GeneratorBird,
                    GeneratorStructure([1, 2, 0, - 1, 2, 0]),
                    GeneratorStructure([1, -2, 0, -1, -2, 0]),
                    GeneratorStructure([2, 1, 0, 2, -1, 0]),
                    GeneratorStructure([-2, 1, 0, -2, -1, 0]),
                    GeneratorInput("kubejs:pressurized_steam[level=0]", "minecraft:air", amount1),
                    GeneratorInput("minecraft:water", "minecraft:air", amount2)
                ]
            }).id("dut_create:steam_generator/nowater/output_" + amount1 + "_" + amount2)
        }

    }
    for (let i = 1; i < 9; i++) {
        for (let i1 = 0; i1 < 9 - i; i1++) {
            GeneratorEnergy(i, i1)
        }
    }
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidOutput": 0,
        "heatRequirement": "superheated",
        "ingredients": [
            { "fluid": "minecraft:water", "amount": 500 },
            { "tag": "forge:nuggets/tin" }
        ],
        "results": [
            { "fluid": "kubejs:pressurized_steam", "amount": 500 }
        ],
        "processingTime": 80
    }).id('dut_create:advanced_pressurized_steam')
})