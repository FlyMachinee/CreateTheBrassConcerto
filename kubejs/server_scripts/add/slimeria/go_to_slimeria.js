ServerEvents.recipes(event => {
    //陨石扫描
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "ad_astra:sky_stone" },
        "loops": 1,
        "results": [
            { "item": "kubejs:slime_crystal", "chance": 0.25, "count": 4 },
            { "item": "minecraft:coal_block", "chance": 0.25 },
            { "item": "kubejs:matrix_2", "nbt": '{RGB:[[[1,0],[2,0]]],matrix:[[[1,0],[2,0]]]}', "chance": 0.125, "count": 4 },
            { "item": "kubejs:matrix_2", "nbt": '{RGB:[[[2,0],[0,1]]],matrix:[[[2,0],[0,1]]]}', "chance": 0.125, "count": 4 },
            { "item": "kubejs:matrix_2", "nbt": '{RGB:[[[0,1],[2,0]]],matrix:[[[0,1],[2,0]]]}', "chance": 0.125, "count": 4 },
            { "item": "ad_astra:conglomerate", "chance": 0.125 }
        ],
        "sequence": [
            {
                "type": "vintageimprovements:laser_cutting",
                "ingredients": [{ "item": "ad_astra:sky_stone" }],
                "results": [{ "item": "ad_astra:sky_stone" }],
                "energy": 7200,
                "maxChargeRate": 360
            },
            {
                "type": "vintageimprovements:polishing",
                "ingredients": [{ "item": "ad_astra:sky_stone" }],
                "results": [{ "item": "ad_astra:sky_stone", }],
                "speedLimits": 3,
                "processingTime": 80
            }],
        "transitionalItem": {
            "item": "ad_astra:sky_stone"
        }
    }).id("dut_create:sequnced_assembly/sky_stone")
    event.custom({
        "type": "vintageimprovements:laser_cutting",
        "ingredients": [{ "item": "kubejs:slime_crystal" }],
        "results": [{ "item": "kubejs:matrix_2", "nbt": '{RGB:[[[0,0],[0,0]]],matrix:[[[0,0],[0,0]]]}' }],
        "energy": 14400,
        "maxChargeRate": 720
    }).id("dut_create:matrix_2/matrix_2_zero")
})