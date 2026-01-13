ServerEvents.recipes(event => {

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "ad_astra:sky_stone" },
        "loops": 1,
        "results": [
            { "item": "kubejs:slime_crystal", "chance": 0.25, "count": 4 },
            { "item": 'kubejs:blaze_chlamydia', "chance": 0.125 },
            { "item": 'kubejs:blaze_mycoplasma', "chance": 0.125 },
            { "item": 'kubejs:blaze_wart', "chance": 0.125 },
            { "item": 'kubejs:chromatic_protozoa', "chance": 0.125 },
            { "item": 'minecraft:soul_sand', "chance": 0.25 }
        ],
        "sequence": [{
            "type": "create:filling",
            "ingredients": [
                { "item": "ad_astra:sky_stone" },
                { "fluid": "kubejs:aeronos_spore", "amount": 250 }
            ],
            "results": [{ "item": "ad_astra:sky_stone" }],
        }, 
        {
            "type": "create:filling",
            "ingredients": [
                { "item": "ad_astra:sky_stone" },
                { "fluid": "kubejs:strophar_spore", "amount": 250 }
            ],
            "results": [{ "item": "ad_astra:sky_stone" }],
        }
        ],
        "transitionalItem": {"item": "ad_astra:sky_stone"}
    }).id("dut_create:slimeria_start/sky_stone")
    //获取蘑菇
    event.custom({
        "type": "create:cutting",
        "ingredients": [{ "item": "minecraft:red_mushroom" }],
        "processingTime": 5,
        "results": [{ "count": 6, "item": "kubejs:red_mushroom_cap_piece" }]
    }).id('dut_create:cap_from_red_mushroom')
    event.custom({
        "type": "create:cutting",
        "ingredients": [{ "item": "minecraft:brown_mushroom" }],
        "processingTime": 5,
        "results": [{ "count": 6, "item": "kubejs:brown_mushroom_cap_piece" }]
    }).id('dut_create:cap_from_brown_mushroom')
    event.custom({
        "type": "create:cutting",
        "ingredients": [{ "item": "ad_astra:aeronos_mushroom" }],
        "processingTime": 5,
        "results": [
            { "item": "kubejs:aeronos_cap_piece" },
            { "item": "kubejs:aeronos_stem_piece" }
        ]
    }).id('dut_create:cap_from_aeronos')
    event.custom({
        "type": "create:cutting",
        "ingredients": [{ "item": "ad_astra:strophar_mushroom" }],
        "processingTime": 5,
        "results": [
            { "item": "kubejs:strophar_cap_piece" },
            { "item": "kubejs:strophar_stem_piece" }
        ]
    }).id('dut_create:cap_from_strophar')
})