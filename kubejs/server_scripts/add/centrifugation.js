ServerEvents.recipes(event => {
    //event.remove({output: '',not:{mod:'kubejs'}})
    //event.remove({id: ''})
    //event.remove({input: ''})
    //event.custom()
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
        "processingTime": 200
    }).id("dut_create:centrifugation/orange_dye")
    //
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
        "processingTime": 100
    }).id("dut_create:centrifugation/purple_dye")
    //
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
        "processingTime": 200
    }).id("dut_create:centrifugation/pink_dye")
    //
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
        "processingTime": 200
    }).id("dut_create:centrifugation/magenta_dye")
    //
    event.remove({ id: "vintageimprovements:centrifugation/lime_dye" })
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "tag": "forge:dyes/lime" },
            { "tag": "forge:dyes/lime" },
        ],
        "results": [
            { "item": "minecraft:white_dye" },
            { "item": "minecraft:greeb_dye" }
        ],
        "processingTime": 200
    }).id("dut_create:centrifugation/lime_dye")
    //
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
        "processingTime": 200
    }).id("dut_create:centrifugation/light_gray_dye")
    //
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
        "processingTime": 200
    }).id("dut_create:centrifugation/light_blue_dye")
    //
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
        "processingTime": 200
    }).id("dut_create:centrifugation/gray_dye")
    //
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
        "processingTime": 200
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
        "processingTime": 200
    }).id("dut_create:centrifugation/mud")
    //熔融黄铜离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            { "fluid": "kubejs:brass", "amount": 810 }
        ],
        "results": [
            { "fluid": "kubejs:gold", "amount": 270 },
            { "fluid": "kubejs:copper", "amount": 270 }
        ],
        "processingTime": 300
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
        "processingTime": 600
    }).id("dut_create:centrifugation/air_fluid")
    //玫瑰石英离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            {
                "item": "create:rose_quartz",
                "count": 1
            }
        ],
        "results": [
            {
                "item": "minecraft:redstone",
                "count": 8
            },
            {
                "item": "minecraft:quartz",
                "count": 1
            }
        ],
        "processingTime": 400
    }).id("dut_create:centrifugation/rose_quartz")
    //棋盘格离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            {
                "item": "supplementaries:checker_block",
                "count": 2
            }
        ],
        "results": [
            {
                "item": "minecraft:cobblestone",
                "count": 1
            },
            {
                "item": "minecraft:blackstone",
                "count": 1
            }
        ],
        "processingTime": 1200
    }).id("dut_create:centrifugation/checker_block")
    //花岗岩离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            {
                "item": "minecraft:granite",
                "count": 1
            }
        ],
        "results": [
            {
                "item": "minecraft:quartz",
                "count": 1
            },
            {
                "item": "minecraft:diorite",
                "count": 1
            }
        ],
        "processingTime": 200
    }).id("dut_create:centrifugation/granite")
    //安山岩离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            {
                "item": "minecraft:andesite",
                "count": 1
            }
        ],
        "results": [
            {
                "item": "minecraft:cobblestone",
                "count": 1
            },
            {
                "item": "minecraft:diorite",
                "count": 1
            }
        ],
        "processingTime": 200
    }).id("dut_create:centrifugation/andesite")
    //闪长岩离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            {
                "item": "minecraft:diorite",
                "count": 1
            }
        ],
        "results": [
            {
                "item": "minecraft:cobblestone",
                "count": 1
            },
            {
                "item": "minecraft:quartz",
                "count": 1
            }
        ],
        "processingTime": 200
    }).id("dut_create:centrifugation/diorite")
    //砂土离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            {
                "item": "minecraft:coarse_dirt",
                "count": 1
            }
        ],
        "results": [
            {
                "item": "minecraft:gravel",
                "count": 1
            },
            {
                "item": "minecraft:dirt",
                "count": 1
            }
        ],
        "processingTime": 300
    }).id("dut_create:centrifugation/coarse_dirt")
    //铸造砂离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            {
                "item": "createbigcannons:casting_sand",
                "count": 2
            }
        ],
        "results": [
            {
                "item": "minecraft:sand",
                "count": 2
            },
            {
                "item": "minecraft:clay_ball",
                "count": 1
            },
            {
                "item": "minecraft:dirt",
                "count": 1
            }
        ],
        "processingTime": 300
    }).id("dut_create:centrifugation/casting_sand")
    //火药离心
    event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": [
            {
                "item": "minecraft:gunpowder",
                "count": 3
            }
        ],
        "results": [
            {
                "item": "minecraft:charcoal",
                "chance": 0.33
            },
            {
                "item": "minecraft:bone_meal",
                "chance": 0.33
            },
            {
                "item": "minecraft:blaze_powder",
                "chance": 0.33
            }
        ],
        "processingTime": 300
    }).id("dut_create:centrifugation/gunpowder")
})