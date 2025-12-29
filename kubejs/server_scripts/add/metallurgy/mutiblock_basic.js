ServerEvents.recipes(event => {
    //event.replaceInput({ input: '' },'','')
    //event.remove({output: '',not:{mod:'kubejs'}})
    //event.remove({id: ''})
    //event.remove({input: ''})
    //event.custom({})
    function craftBoiler(tag, item) {
        event.remove({ output: item })
        event.custom({
            "type": "minecraft:crafting_shaped",
            "pattern": [
                "#",
                "&",
                "#"
            ],
            "key": {
                "#": { "tag": tag },
                "&": { "item": "create:fluid_tank" }
            },
            "result": { "item": item }
        }).id("dut_create:" + item.split(":")[1])
    }
    //普通锅炉
    event.remove({ output: 'design_decor:andesite_boiler' })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "#",
            "&",
            "#"
        ],
        "key": {
            "#": { "item": "create:andesite_alloy" },
            "&": { "item": "create:fluid_tank" }
        },
        "result": { "item": "design_decor:andesite_boiler" }
    }).id("dut_create:andesite_boiler")
    event.remove({ output: 'design_decor:cast_iron_boiler' })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "#",
            "&",
            "#"
        ],
        "key": {
            "#": { "item": "createbigcannons:cast_iron_ingot" },
            "&": { "item": "create:fluid_tank" }
        },
        "result": { "item": "design_decor:cast_iron_boiler" }
    }).id("dut_create:cast_iron_boiler")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "#",
            "&",
            "#"
        ],
        "key": {
            "#": { "tag": "forge:plates/aluminum"},
            "&": { "item": "create:fluid_tank" }
        },
        "result": { "item": "design_decor:aluminium_boiler" }
    }).id("dut_create:aluminium_boiler")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "#",
            "&",
            "#"
        ],
        "key": {
            "#": { "item": "kubejs:new_zinc_sheet"},
            "&": { "item": "create:fluid_tank" }
        },
        "result": { "item": "design_decor:zinc_boiler" }
    }).id("dut_create:zinc_boiler")
    craftBoiler("forge:plates/industrial_iron", 'design_decor:industrial_iron_boiler')
    craftBoiler("forge:plates/brass", 'design_decor:brass_boiler')
    craftBoiler("forge:plates/gold", 'design_decor:gold_boiler')
    craftBoiler("forge:plates/copper", 'design_decor:copper_boiler')
    //大型锅炉
    event.remove({ output: 'design_decor:andesite_boiler_large' })
    event.remove({ output: 'design_decor:industrial_iron_boiler_large' })
    event.remove({ output: 'design_decor:zinc_boiler_large' })
    event.remove({ output: 'design_decor:brass_boiler_large' })
    event.remove({ output: 'design_decor:gold_boiler_large' })
    event.remove({ output: 'design_decor:copper_boiler_large' })
    event.remove({ output: 'design_decor:cast_iron_boiler_large' })

})