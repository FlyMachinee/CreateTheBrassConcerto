ServerEvents.recipes(event => {
    const CondenserStructure = {
        "type": "custommachinery:general_structure",
        "id": "main"
    }
    const CondenserSound = {
        "type": "custommachinery:sound",
        "phase": "ending",
        "sound": "create:steam",
        "pos": [0, 3.5, 0],
        "volume": 0.5,
        "chance": 0.75
    }
    const CondenserParticle1 = {
        "type": "custommachinery:particle",
        "phase": "crafting_tickable",
        "particle": "minecraft:snowflake",
        "pos": [0, 6.5, 0],
        "delta": [0.3, 1.5, 0.3],
        "speed": 0,
        "count": 5,
        "chance": 0.75
    }
    const CondenserParticle2 = {
        "type": "custommachinery:command",
        "phase": "crafting_tickable",
        "command": "/particle minecraft:cloud ~ ~7.5 ~ 0.55 1 0.55 0 4",
        "log": false,
        "permissionlevel": 5
    }
    const CondenserReplaceBreakFliter = [
        "minecraft:air",
        "minecraft:void_air",
        "minecraft:cave_air",
        "kubejs:air_fluid[level=1]",
        "kubejs:air_fluid[level=2]",
        "kubejs:air_fluid[level=3]",
        "kubejs:air_fluid[level=4]",
        "kubejs:air_fluid[level=5]",
        "kubejs:air_fluid[level=6]",
        "kubejs:air_fluid[level=7]",
        "kubejs:air_fluid[level=8]",
        "kubejs:air_fluid[level=9]",
        "kubejs:air_fluid[level=10]",
        "kubejs:air_fluid[level=11]",
        "kubejs:air_fluid[level=12]",
        "kubejs:air_fluid[level=13]",
        "kubejs:air_fluid[level=14]",
        "kubejs:air_fluid[level=15]",
        "kubejs:end_air_fluid[level=1]",
        "kubejs:end_air_fluid[level=2]",
        "kubejs:end_air_fluid[level=3]",
        "kubejs:end_air_fluid[level=4]",
        "kubejs:end_air_fluid[level=5]",
        "kubejs:end_air_fluid[level=6]",
        "kubejs:end_air_fluid[level=7]",
        "kubejs:end_air_fluid[level=8]",
        "kubejs:end_air_fluid[level=9]",
        "kubejs:end_air_fluid[level=10]",
        "kubejs:end_air_fluid[level=11]",
        "kubejs:end_air_fluid[level=12]",
        "kubejs:end_air_fluid[level=13]",
        "kubejs:end_air_fluid[level=14]",
        "kubejs:end_air_fluid[level=15]",
        "kubejs:nether_air_fluid[level=1]",
        "kubejs:nether_air_fluid[level=2]",
        "kubejs:nether_air_fluid[level=3]",
        "kubejs:nether_air_fluid[level=4]",
        "kubejs:nether_air_fluid[level=5]",
        "kubejs:nether_air_fluid[level=6]",
        "kubejs:nether_air_fluid[level=7]",
        "kubejs:nether_air_fluid[level=8]",
        "kubejs:nether_air_fluid[level=9]",
        "kubejs:nether_air_fluid[level=10]",
        "kubejs:nether_air_fluid[level=11]",
        "kubejs:nether_air_fluid[level=12]",
        "kubejs:nether_air_fluid[level=13]",
        "kubejs:nether_air_fluid[level=14]",
        "kubejs:nether_air_fluid[level=15]",
        "kubejs:slimeria_air_fluid[level=1]",
        "kubejs:slimeria_air_fluid[level=2]",
        "kubejs:slimeria_air_fluid[level=3]",
        "kubejs:slimeria_air_fluid[level=4]",
        "kubejs:slimeria_air_fluid[level=5]",
        "kubejs:slimeria_air_fluid[level=6]",
        "kubejs:slimeria_air_fluid[level=7]",
        "kubejs:slimeria_air_fluid[level=8]",
        "kubejs:slimeria_air_fluid[level=9]",
        "kubejs:slimeria_air_fluid[level=10]",
        "kubejs:slimeria_air_fluid[level=11]",
        "kubejs:slimeria_air_fluid[level=12]",
        "kubejs:slimeria_air_fluid[level=13]",
        "kubejs:slimeria_air_fluid[level=14]",
        "kubejs:slimeria_air_fluid[level=15]",
        "kubejs:muriatic_acid[level=1]",
        "kubejs:muriatic_acid[level=2]",
        "kubejs:muriatic_acid[level=3]",
        "kubejs:muriatic_acid[level=4]",
        "kubejs:muriatic_acid[level=5]",
        "kubejs:muriatic_acid[level=6]",
        "kubejs:muriatic_acid[level=7]",
        "kubejs:muriatic_acid[level=8]",
        "kubejs:muriatic_acid[level=9]",
        "kubejs:muriatic_acid[level=10]",
        "kubejs:muriatic_acid[level=11]",
        "kubejs:muriatic_acid[level=12]",
        "kubejs:muriatic_acid[level=13]",
        "kubejs:muriatic_acid[level=14]",
        "kubejs:muriatic_acid[level=15]"
    ]
    function CondenserCryogen(amount) {
        return ({
            "type": "custommachinery:fluid",
            "mode": "input",
            "fluid": "kubejs:cryogen",
            "amount": amount
        })
    }
    function CondenserDimension(dimension) {
        return ({
            "type": "custommachinery:dimension",
            "filter": dimension,
            "blacklist": false
        })
    }
    function CondenserBiome(filter, blacklist) {
        return ({
            "type": "custommachinery:biome",
            "filter": filter,
            "blacklist": blacklist
        })
    }

    function CondenserDimensionRecipe(dimension, cryogenAmount, outputFluid, time) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:condenser",
            "time": time,
            "priority": 1,
            "requirements": [
                CondenserStructure,
                CondenserDimension(dimension),
                CondenserParticle1,
                //CondenserParticle2,
                CondenserSound,
                CondenserCryogen(cryogenAmount),
                {
                    "type": "custommachinery:block",
                    "mode": "output",
                    "action": "replace_break",
                    "pos": [-1, 0, -2, 1, 0, -4],
                    "filter": CondenserReplaceBreakFliter,
                    "whitelist": true,
                    "block": outputFluid
                }
            ],
            "jei": [
                CondenserStructure,
                CondenserDimension(dimension),
                {
                    "type": "custommachinery:block",
                    "mode": "output",
                    "action": "replace_break",
                    "pos": [-1, 0, -2, 1, 0, -4],
                    "filter": CondenserReplaceBreakFliter,
                    "whitelist": true,
                    "block": outputFluid
                },
                CondenserCryogen(cryogenAmount),
                {
                    "type": "custommachinery:fluid",
                    "mode": "output",
                    "fluid": outputFluid,
                    "amount": 1000
                }
            ]
        }).id("dut_create:condenser/" + dimension.split(':')[1] + '/' + outputFluid.split(':')[1] + "_liquefaction")
    }
    //
    CondenserDimensionRecipe("minecraft:overworld", 500, "kubejs:air_fluid", 10)
    CondenserDimensionRecipe("minecraft:the_nether", 2000, "kubejs:nether_air_fluid", 10)
    CondenserDimensionRecipe("minecraft:the_end", 500, "kubejs:end_air_fluid", 10)
    CondenserDimensionRecipe("ad_astra:moon", 2000, "kubejs:muriatic_acid", 30)
    CondenserDimensionRecipe("dut:slimeria", 1000, "kubejs:slimeria_air_fluid", 10)
    CondenserDimensionRecipe("dut:slimeria_orbit", 4000, "kubejs:slimeria_air_fluid", 120)
})