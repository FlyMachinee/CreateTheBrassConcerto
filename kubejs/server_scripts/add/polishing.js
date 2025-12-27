ServerEvents.recipes(event => {
    //骨粉
    event.custom({
        "type": "vintageimprovements:polishing",
        "speedLimits": 3,
        "ingredients": [{ "item": "minecraft:bone" }],
        "results": [
            { "item": "minecraft:bone_meal", "count": 4 }
        ],
        "processingTime": 10
    }).id("dut_create:polishing/bone")
    event.custom({
        "type": "vintageimprovements:polishing",
        "speedLimits": 3,
        "ingredients": [{ "tag": "create:stone_types/limestone" }],
        "results": [
            { "item": "minecraft:bone_meal", "count":4 }
        ],
        "processingTime": 20
    }).id("dut_create:polishing/limestone")
})