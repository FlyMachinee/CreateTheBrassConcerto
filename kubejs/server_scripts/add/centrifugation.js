ServerEvents.recipes(event => {
    event.remove({ id: "vintageimprovements:centrifugation/ender_eye" })
    //岩浆膏
    event.remove({ id: "vintageimprovements:centrifugation/magma_cream" })
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "item": "minecraft:magma_cream" }
        ],
        "results": [
            { "item": "minecraft:slime_ball" },
            { "item": "minecraft:blaze_powder" }
        ],
        "processingTime": 20
    }).id("dut_create:centrifugation/magma_cream")
    //染料
    event.remove({ id: "vintageimprovements:centrifugation/orange_dye" })
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "tag": "forge:dyes/orange" },
            { "tag": "forge:dyes/orange" },
        ],
        "results": [
            { "item": "minecraft:red_dye" },
            { "item": "minecraft:yellow_dye" }
        ],
        "processingTime": 5
    }).id("dut_create:centrifugation/orange_dye")
    event.remove({ id: "vintageimprovements:centrifugation/purple_dye" })
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "tag": "forge:dyes/purple" },
            { "tag": "forge:dyes/purple" },
        ],
        "results": [
            { "item": "minecraft:red_dye" },
            { "item": "minecraft:blue_dye" }
        ],
        "processingTime": 5
    }).id("dut_create:centrifugation/purple_dye")
    event.remove({ id: "vintageimprovements:centrifugation/pink_dye" })
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "tag": "forge:dyes/pink" },
            { "tag": "forge:dyes/pink" },
        ],
        "results": [
            { "item": "minecraft:white_dye" },
            { "item": "minecraft:red_dye" }
        ],
        "processingTime": 5
    }).id("dut_create:centrifugation/pink_dye")
    event.remove({ id: "vintageimprovements:centrifugation/magenta_dye" })
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "tag": "forge:dyes/magenta" },
            { "tag": "forge:dyes/magenta" },
        ],
        "results": [
            { "item": "minecraft:pink_dye" },
            { "item": "minecraft:purple_dye" }
        ],
        "processingTime": 5
    }).id("dut_create:centrifugation/magenta_dye")
    event.remove({ id: "vintageimprovements:centrifugation/lime_dye" })
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "tag": "forge:dyes/lime" },
            { "tag": "forge:dyes/lime" },
        ],
        "results": [
            { "item": "minecraft:white_dye" },
            { "item": "minecraft:green_dye" }
        ],
        "processingTime": 5
    }).id("dut_create:centrifugation/lime_dye")
    event.remove({ id: "vintageimprovements:centrifugation/light_gray_dye" })
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "tag": "forge:dyes/light_gray" },
            { "tag": "forge:dyes/light_gray" },
        ],
        "results": [
            { "item": "minecraft:white_dye" },
            { "item": "minecraft:gray_dye" }
        ],
        "processingTime": 5
    }).id("dut_create:centrifugation/light_gray_dye")
    event.remove({ id: "vintageimprovements:centrifugation/light_blue_dye" })
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "tag": "forge:dyes/light_blue" },
            { "tag": "forge:dyes/light_blue" },
        ],
        "results": [
            { "item": "minecraft:white_dye" },
            { "item": "minecraft:blue_dye" }
        ],
        "processingTime": 5
    }).id("dut_create:centrifugation/light_blue_dye")
    event.remove({ id: "vintageimprovements:centrifugation/gray_dye" })
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "tag": "forge:dyes/gray" },
            { "tag": "forge:dyes/gray" },
        ],
        "results": [
            { "item": "minecraft:white_dye" },
            { "item": "minecraft:black_dye" }
        ],
        "processingTime": 5
    }).id("dut_create:centrifugation/gray_dye")
    event.remove({ id: "vintageimprovements:centrifugation/cyan_dye" })
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "tag": "forge:dyes/cyan" },
            { "tag": "forge:dyes/cyan" },
        ],
        "results": [
            { "item": "minecraft:blue_dye" },
            { "item": "minecraft:green_dye" }
        ],
        "processingTime": 5
    }).id("dut_create:centrifugation/cyan_dye")
    //泥巴
    event.remove({ id: "vintageimprovements:centrifugation/mud" })
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "item": "minecraft:mud", "count": 2 }
        ],
        "results": [
            { "item": "minecraft:dirt", "count": 2 },
            { "fluid": "minecraft:water", "amount": 250 }
        ],
        "processingTime": 10
    }).id("dut_create:centrifugation/mud")
    //熔融黄铜离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "fluid": "kubejs:brass", "amount": 9*IngotFluid }
        ],
        "results": [
            { "fluid": "kubejs:gold", "amount": 3*IngotFluid },
            { "fluid": "kubejs:copper", "amount": 3*IngotFluid }
        ],
        "processingTime": 60
    }).id("dut_create:centrifugation/brass")
    //液态空气离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "fluid": "kubejs:air_fluid", "amount": 1000 }
        ],
        "results": [
            { "fluid": "kubejs:nitrogen", "amount": 800 },
            { "fluid": "kubejs:oxygen", "amount": 200 }
        ],
        "processingTime": 80
    }).id("dut_create:centrifugation/air_fluid")
    //玫瑰石英离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "item": "create:rose_quartz" }
        ],
        "results": [
            { "item": "minecraft:redstone", "count": 8 },
            { "item": "minecraft:quartz" }
        ],
        "processingTime": 15
    }).id("dut_create:centrifugation/rose_quartz")
    //花岗岩离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "item": "minecraft:granite" }
        ],
        "results": [
            { "item": "minecraft:quartz" },
            { "item": "minecraft:diorite" }
        ],
        "processingTime": 20
    }).id("dut_create:centrifugation/granite")
    //安山岩离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "item": "minecraft:andesite" }
        ],
        "results": [
            { "item": "minecraft:cobblestone" },
            { "item": "minecraft:diorite" }
        ],
        "processingTime": 20
    }).id("dut_create:centrifugation/andesite")
    //闪长岩离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "item": "minecraft:diorite" }
        ],
        "results": [
            { "item": "minecraft:cobblestone" },
            { "item": "minecraft:quartz" }
        ],
        "processingTime": 20
    }).id("dut_create:centrifugation/diorite")
    //火药离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "item": "minecraft:gunpowder" },
            { "item": "minecraft:gunpowder" },
            { "item": "minecraft:gunpowder" }
        ],
        "results": [
            { "item": "minecraft:charcoal" },
            { "item": "minecraft:bone_meal" },
            { "item": "minecraft:blaze_powder" }
        ],
        "processingTime": 30
    }).id("dut_create:centrifugation/gunpowder")
})