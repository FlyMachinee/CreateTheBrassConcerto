ServerEvents.recipes(event => {
    function Reaping(block, bool) {
        return ({
            "type": "custommachinery:block",
            "mode": "input",
            "action": "replace_destroy",
            "amount": 1,
            "pos": [0, 1, 0, 0, 1, 0],
            "filter": block,
            "whitelist": bool,
            "block": "minecraft:air"
        })
    }
    function StemReapingItem(item, amount, mode) {
        return ({
            "type": "custommachinery:item",
            "mode": mode,
            "item": item,
            "amount": amount
        })
    }
    function StemReapingBlockIn(item) {
        return ({
            "type": "custommachinery:item",
            "mode": "input",
            "item": item,
            "slot": "block_input",
            "amount":1
        })
    }
    function StemReapingItemChance(item, amount, chance) {
        return ({
            "type": "custommachinery:item",
            "mode": "output",
            "chance": chance,
            "item": item,
            "amount": amount
        })
    }
    function StemReapingDimension(dimension) {
        return ({
            "type": "custommachinery:dimension",
            "filter": dimension,
            "blacklist": false
        })
    }
    function StemReapingBiome(biome) {
        return ({
            "type": "custommachinery:biome",
            "filter": biome,
            "blacklist": false
        })
    }
    function StemReapingFluid(fluid, mode, amount) {
        return ({
            "type": "custommachinery:fluid",
            "mode": mode,
            "fluid": fluid,
            "amount": amount
        })
    }
    function StemReapingRecipe(block, RequirementList, id, time) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:stem_reaping_machine",
            "time": time,
            "error": false,
            "priority": 1,
            "requirements": [
                Reaping(block, true)
            ].concat(RequirementList),
            "jei": [
                StemReapingBlockIn(block)
            ].concat(RequirementList)
        }).id("dut_create:stem_reaping_machine/" + id)
    }
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:stem_reaping_machine",
        "time": 10,
        "priority": 1,
        "hidden": true,
        "error": false,
        "requirements": [{
            "type": "custommachinery:command",
            "phase": "ending",
            "command": "/function dut:machine_broke",
            "log": false,
            "permissionlevel": 5
        },
        Reaping("#dut_create:cap", true)
        ]
    }).id("dut_create:stem_reaping_machine/boom")
    StemReapingRecipe("ad_astra:aeronos_stem", [
        StemReapingItem("kubejs:aeronos_stem_piece", 16, "output"),
        StemReapingItemChance("kubejs:aeronos_stem_piece", 8, 0.5),
        StemReapingItemChance("kubejs:aeronos_cap_piece", 12, 0.25)
    ], "aeronos_stem", 10)
    StemReapingRecipe("ad_astra:strophar_stem", [
        StemReapingItem("kubejs:strophar_stem_piece", 16, "output"),
        StemReapingItemChance("kubejs:strophar_stem_piece", 8, 0.5),
        StemReapingItemChance("kubejs:strophar_cap_piece", 12, 0.25)
    ], "strophar_stem", 10)
    StemReapingRecipe("minecraft:mushroom_stem", [
        StemReapingItem("kubejs:stem_silk", 16, "output"),
        StemReapingItemChance("kubejs:stem_silk", 8, 0.5),
        StemReapingItemChance("kubejs:red_mushroom_cap_piece", 8, 0.25),
        StemReapingItemChance("kubejs:brown_mushroom_cap_piece", 8, 0.25)
    ], "mushroom_stem", 10)


})