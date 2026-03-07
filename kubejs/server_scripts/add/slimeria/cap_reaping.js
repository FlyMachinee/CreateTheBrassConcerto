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
    function CapReapingItem(item, amount, mode) {
        return ({
            "type": "custommachinery:item",
            "mode": mode,
            "item": item,
            "amount": amount
        })
    }
    function CapReapingItemChance(item, amount, chance) {
        return ({
            "type": "custommachinery:item",
            "mode": "output",
            "chance": chance,
            "item": item,
            "amount": amount
        })
    }
    function CapReapingDimension(dimension) {
        return ({
            "type": "custommachinery:dimension",
            "filter": dimension,
            "blacklist": false
        })
    }
    function CapReapingBiome(biome) {
        return ({
            "type": "custommachinery:biome",
            "filter": biome,
            "blacklist": false
        })
    }
    function CapReapingFluid(fluid, mode, amount) {
        return ({
            "type": "custommachinery:fluid",
            "mode": mode,
            "fluid": fluid,
            "amount": amount
        })
    }
    function CapReapingBlockIn(item) {
        return ({
            "type": "custommachinery:item",
            "mode": "input",
            "item": item,
            "slot": "block_input",
            "amount": 1
        })
    }
    function CapReapingRecipe(block, RequirementList, id, time) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:cap_reaping_machine",
            "time": time,
            "error": false,
            "priority": 1,
            "requirements": [
                Reaping(block, true)
            ].concat(RequirementList),
            "jei": [
                CapReapingBlockIn(block)
            ].concat(RequirementList)
        }).id("dut_create:cap_reaping_machine/" + id)
    }
    //
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:cap_reaping_machine",
        "time": 5,
        "priority": 0,
        "hidden": true,
        "error": false,
        "requirements": []
    }).id("dut_create:cap_reaping_machine/empty")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:cap_reaping_machine",
        "time": 5,
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
        Reaping("#dut_create:stem", true)
        ]
    }).id("dut_create:cap_reaping_machine/boom")
    CapReapingRecipe("ad_astra:aeronos_cap", [
        CapReapingItem("kubejs:aeronos_cap_piece", 16, "output"),
        CapReapingItemChance("kubejs:aeronos_cap_piece", 8, 0.5),
        CapReapingItemChance("kubejs:aeronos_stem_piece", 8, 0.5),
        CapReapingItemChance("ad_astra:aeronos_mushroom", 1, 0.25),
    ], "aeronos_cap", 5)
    CapReapingRecipe("ad_astra:strophar_cap", [
        CapReapingItem("kubejs:strophar_cap_piece", 16, "output"),
        CapReapingItemChance("kubejs:strophar_cap_piece", 8, 0.5),
        CapReapingItemChance("kubejs:strophar_stem_piece", 8, 0.5),
        CapReapingItemChance("ad_astra:strophar_mushroom", 1, 0.25),
    ], "strophar_cap", 5)

    CapReapingRecipe("minecraft:red_mushroom_block", [
        CapReapingItem("kubejs:red_mushroom_cap_piece", 16, "output"),
        CapReapingItemChance("kubejs:red_mushroom_cap_piece", 8, 0.5),
        CapReapingItemChance("kubejs:stem_silk", 8, 0.5),
        CapReapingItemChance("minecraft:red_mushroom", 1, 0.025),
    ], "red_mushroom_block", 5)
    CapReapingRecipe("minecraft:brown_mushroom_block", [
        CapReapingItem("kubejs:brown_mushroom_cap_piece", 16, "output"),
        CapReapingItemChance("kubejs:brown_mushroom_cap_piece", 8, 0.5),
        CapReapingItemChance("kubejs:stem_silk", 8, 0.5),
        CapReapingItemChance("minecraft:brown_mushroom", 1, 0.025),
    ], "brown_mushroom_block", 5)

})