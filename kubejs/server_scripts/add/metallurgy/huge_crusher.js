ServerEvents.recipes(event => {
    //
    function CrusherItem(mode, item, amount) {
        return ({
            "type": "custommachinery:item",
            "mode": mode,
            "item": item,
            "amount": amount
        })
    }
    const CrusherStructure = {
        "type": "custommachinery:general_structure",
        "id": "main"
    }
    const CrusherSound = {
        "type": "custommachinery:sound",
        "phase": "crafting_tickable",
        "sound": "create:crushing_1",
        "pos": [0.5, 2.5, 0.5]
    }
    const CrusherParticle1 = {
        "type": "custommachinery:particle",
        "phase": "crafting_tickable",
        "particle": "minecraft:crit",
        "pos": [0.5, 3.5, 0.5],
        "delta": [1, 0.5, 1],
        "speed": 0.1,
        "count": 6
    }
    const CrusherParticle2 = {
        "type": "custommachinery:particle",
        "phase": "crafting_tickable",
        "particle": "minecraft:smoke",
        "pos": [0.5, 3.5, 0.5],
        "delta": [1, 0.5, 1],
        "speed": 0.1,
        "count": 8
    }
    const CrusherStress = {
        "type": "custommachinery:contraption",
        "mode": "input",
        "speed": 256
    }
    const CrusherFluid = {
        "type": "custommachinery:fluid",
        "mode": "input",
        "fluid": "minecraft:water",
        "amount": 50
    }

    function CrusherCommon(InputList, OutputList, id) {
        let List = InputList.map(i => CrusherItem("input", i.id, i.count)).concat(OutputList.map(i => CrusherItem("output", i.id, i.count)))
        let List1 = InputList.map(i => CrusherItem("input", i.id, 2 * i.count)).concat(OutputList.map(i => CrusherItem("output", i.id, 2 * i.count)))
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:huge_crusher",
            "time": 1,
            "error": true,
            "hidden": false,
            "priority": 10,
            "requirements": [
                CrusherStructure,
                CrusherStress,
                CrusherFluid,
                CrusherSound,
                CrusherParticle1,
                CrusherParticle2
            ].concat(List)
        }).id("dut_create:huge_crusher/" + id)
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:huge_crusher",
            "time": 1,
            "error": true,
            "hidden": true,
            "priority": 20,
            "requirements": [
                CrusherStructure,
                CrusherStress,
                CrusherFluid,
                CrusherSound,
                CrusherParticle1,
                CrusherParticle2
            ].concat(List1)
        }).id("dut_create:huge_crusher/fast/" + id)
    }
    CrusherCommon([{ id: "minecraft:cobblestone", count: 64 }], [{ id: "minecraft:gravel", count: 64 }], "cobblestone")

    CrusherCommon([{ id: "minecraft:gravel", count: 64 }], [{ id: "minecraft:sand", count: 64 }, { id: "minecraft:flint", count: 6 }, { id: "minecraft:clay_ball", count: 4 }], "gravel")

    CrusherCommon([{ id: "#create:stone_types/limestone", count: 64 }], [{ id: "minecraft:calcite", count: 32 }, { id: "minecraft:clay_ball", count: 32 }], "limestone")

    CrusherCommon([{ id: "minecraft:coal", count: 64 }], [{ id: "kubejs:crushed_coal", count: 128 }, { id: "kubejs:graphite", count: 64 }], "coal")

    CrusherCommon([{ id: "minecraft:amethyst_cluster", count: 4 }], [{ id: "minecraft:quartz", count: 60 }, { id: "minecraft:purple_dye", count: 15 }], "amethyst_cluster")

    CrusherCommon([{ id: "createloveandwar:raw_sulphur", count: 64 }], [{ id: "kubejs:sulphur", count: 80 }], "sulphur")

    CrusherCommon([{ id: "minecraft:netherrack", count: 64 }], [{ id: "create:cinder_flour", count: 128 }], "netherrack")

    CrusherCommon([{ id: "createloveandwar:raw_tungsten", count: 32 }], [{ id: "createloveandwar:crushed_tungsten", count: 40 }], "tungsten")

    CrusherCommon([{ id: "kubejs:new_asurine", count: 64 }], [{ id: "kubejs:new_crushed_raw_zinc", count: 80 }], "zinc")

    CrusherCommon([{ id: "#create:stone_types/crimsite", count: 64 }], [{ id: "create:crushed_raw_iron", count: 96 }], "iron")

    CrusherCommon([{ id: "#create:stone_types/ochrum", count: 64 }], [{ id: "create:crushed_raw_gold", count: 96 }], "gold")

    CrusherCommon([{ id: "#create:stone_types/veridium", count: 64 }], [{ id: "create:crushed_raw_copper", count: 96 }], "copper")

    CrusherCommon([{ id: "kubejs:raw_tin", count: 64 }], [{ id: "create:crushed_raw_tin", count: 96 }], "tin")

    CrusherCommon([{ id: "kubejs:aluminite", count: 64 }], [{ id: "kubejs:aluminite_powder", count: 96 }], "aluminite")

    CrusherCommon([{ id: "minecraft:quartz", count: 64 }], [{ id: "create:experience_nugget", count: 32 }], "quartz")

    CrusherCommon([{ id: "#dut_create:moon_solid", count: 64 }], [{ id: "ad_astra:moon_sand", count: 64 }], "moon_sand")
})