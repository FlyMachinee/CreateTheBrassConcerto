ServerEvents.recipes(event => {
    //骨粉
    event.custom({
        "type": "vintageimprovements:polishing",
        "speedLimits": 3,
        "ingredients": [{ "item": "minecraft:bone" }],
        "results": [
            { "item": "minecraft:bone_meal", "count": 8 }
        ],
        "processingTime": 10
    }).id("dut_create:polishing/bone")
})