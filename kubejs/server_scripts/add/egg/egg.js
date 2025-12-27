ServerEvents.recipes(event => {
    //头
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            { "item": "kubejs:coin_emerald" },
            { "item": "kubejs:large_fries" }
        ],
        "results": [{ "item": "minecraft:player_head", "nbt": '{SkullOwner:{Name:"Slimeli_",Properties:{textures:[{Value:"ewogICJ0aW1lc3RhbXAiIDogMTc0Nzk4NzQzMzcyNCwKICAicHJvZmlsZUlkIiA6ICI1MTgyMDY2N2I3MzQ0M2M0YTlkNDM0YjcxMzIyYmJiOCIsCiAgInByb2ZpbGVOYW1lIiA6ICJTbGltZWxpXyIsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS9kYTNiYjQ5NjUyZDkzMDgzZDY3NzI4ODc2YWRiZTVmOWU1OTI3ZTAxNzUzNmU4YTFkYzA2MGQ5NDI3ZjBlODc0IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0sCiAgICAiQ0FQRSIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvY2Q5ZDgyYWIxN2ZkOTIwMjJkYmQ0YTg2Y2RlNGMzODJhNzU0MGUxMTdmYWU3YjlhMjg1MzY1ODUwNWE4MDYyNSIKICAgIH0KICB9Cn0="}]}}}' }]
    }).id("dut_create:eggs/slimeli_")
    //我们必须想象西西弗斯是幸福的
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "minecraft:coal_block" },
        "loops": 114514,
        "results": [
            { "item": "minecraft:diamond", "count": 1 },
        ],
        "sequence": [
            {
                "type": "create:pressing",
                "ingredients": [{ "item": "minecraft:coal_block" }],
                "results": [{ "item": "minecraft:coal_block" }]
            }
        ],
        "transitionalItem": { "item": "minecraft:coal_block" }
    }).id("dut_create:eggs/hearts_of_sisyphus")
    //车床
    event.custom(
        {
            "type": "create:deploying",
            "ingredients": [
                { "item": "create:controls" },
                { "tag": "minecraft:beds" }
            ],
            "results": [
                { "item": "vintageimprovements:lathe" }
            ]
        }
    ).id("dut_create:eggs/deploying/lathe")
    //水车
    event.custom(
        {
            "type": "create:filling",
            "ingredients": [
                { "item": "minecraft:minecart" },
                { "fluid": "minecraft:water", "amount": 250 }
            ],
            "results": [
                { "item": "create:large_water_wheel" }
            ]
        }
    ).id("dut_create:eggs/filling/water_wheel")
    //盾构机
    event.custom(
        {
            "type": "create:deploying",
            "ingredients": [
                { "item": "minecraft:shield" },
                { "item": "minecraft:iron_pickaxe" }
            ],
            "results": [
                { "item": "create:mechanical_drill" }
            ]
        }
    ).id("dut_create:eggs/deploying/excavashield")
    //蛙掘机
    event.custom(
        {
            "type": "create:deploying",
            "ingredients": [
                { "item": "minecraft:tadpole_bucket" },
                { "item": "minecraft:iron_pickaxe" }
            ],
            "results": [
                { "item": "create:mechanical_drill" }
            ]
        }
    ).id("dut_create:eggs/deploying/excavafrog")
    //烟花
    event.custom(
        {
            "type": "create:deploying",
            "ingredients": [
                { "tag": "minecraft:flowers" },
                { "item": "createloveandwar:cigarette" }
            ],
            "results": [
                { "item": "minecraft:firework_rocket" }
            ]
        }
    ).id("dut_create:eggs/deploying/firework")
    //基于鱼的雷
    event.custom(
        {
            "type": "create:deploying",
            "ingredients": [
                { "tag": "dut_create:fish" },
                { "item": "minecraft:gunpowder" }
            ],
            "results": [
                { "item": "minecraft:tnt" }
            ]
        }
    ).id("dut_create:eggs/deploying/torpedo")
    //爆竹
    event.custom(
        {
            "type": "create:item_application",
            "ingredients": [
                { "item": "minecraft:bamboo_block" },
                { "item": "minecraft:gunpowder" }
            ],
            "results": [
                { "item": "minecraft:tnt" }
            ]
        }
    ).id("dut_create:eggs/deploying/firecracker")
    //摇一摇可乐
    event.custom({
        "type": "vintageimprovements:vibrating",
        "ingredients": [{ "item": "kubejs:slime_cola_can" }],
        "results": [{ "item": "supplementaries:bomb_blue" }],
        "processingTime": 100
    }).id("dut_create:eggs/cola_bomb")
    //饥荒-海滩
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "ingredients": [
            { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 1000 },
            { "item": "iceandfire:rotten_egg" },
            { "item": "iceandfire:rotten_egg" },
            { "item": "iceandfire:rotten_egg" },
            { "item": "iceandfire:rotten_egg" }
        ],
        "results": [
            { "item": "minecraft:bone_meal", "count": 4 },
            { "item": "kubejs:sulphur", "count": 3 }
        ],
        "processingTime": 200
    }).id('dut_create:eggs/sulphur_from_rotten_egg')
    //“油”炸薯条
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "minecraft:baked_potato" },
        "results": [
            { "item": "kubejs:french_fries", "count": 2 }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "create:cutting",
                "ingredients": [
                    { "item": "minecraft:baked_potato" }
                ],
                "results": [{ "item": "minecraft:baked_potato" }]
            },
            {
                "type": "create:cutting",
                "ingredients": [
                    { "item": "minecraft:baked_potato" }
                ],
                "results": [{ "item": "minecraft:baked_potato" }]
            },
            {
                "type": "create:filling",
                "ingredients": [{ "item": "minecraft:baked_potato" },
                { "fluidTag": "dut_create:fries_oil", "amount": 50 }],
                "results": [{ "item": "minecraft:baked_potato" }]
            }
        ],
        "transitionalItem": { "item": "minecraft:baked_potato" }
    }).id("dut_create:eggs/food_sequnced/french_fries")
    //仿生机关人要喝齿轮可乐
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "create_things_and_misc:slime", "amount": 100 },
            { "item": "kubejs:io_mechanism" },
            { "fluid": "kubejs:lube_oil", "amount": 50 }
        ],
        "results": [{ "fluid": "kubejs:cola_puree", "amount": 150 }],
        "processingTime": 400
    }).id('dut_create:steam_punk_slime_cola')
    //COFFee
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "ingredients": [
            { "fluid": "kubejs:oxygen", "amount": 250 },
            { "item": "create:crushed_raw_iron" },
            { "item": "create:crushed_raw_iron" },
            { "item": "create:crushed_raw_iron" },
            { "item": "create:crushed_raw_iron" },
            { "item": "kubejs:crushed_coal" },
            { "item": "kubejs:crushed_coal" }
        ],
        "results": [
            { "item": 'create:builders_tea', "count": 2 }
        ],
        "processingTime": 200
    }).id('dut_create:eggs/2c_2fe_o2_equals_2coffee')
    //COCOa
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "minecraft:bone_meal" },
            { "item": "minecraft:bone_meal" }
        ],
        "results": [
            { "fluid": "kubejs:oxygen", "amount": 250 },
            { "item": "minecraft:cocoa_beans", "count": 2 }
        ],
    }).id('dut_create:eggs/2caco3_equals_2cocoa_o2')
    //COlA
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "ingredients": [
            { "fluid": "kubejs:aluminum", "amount": 500 },
            { "fluid": "kubejs:oxygen", "amount": 250 },
            { "item": "kubejs:crushed_coal" },
            { "item": "kubejs:crushed_coal" }
        ],
        "results": [
            { "fluid": "kubejs:slime_cola", "amount": 500 }
        ],
        "processingTime": 200
    }).id('dut_create:eggs/2al_2c_o2_equals_2cola')
    //2Al+2Cu==2Au+Cl2
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidOutput": 0,
        "ingredients": [
            { "fluid": "kubejs:aluminum", "amount": 500 },
            { "fluid": "kubejs:copper", "amount": 500 }
        ],
        "results": [
            { "fluid": "kubejs:chlorine", "amount": 250 },
            { "fluid": "kubejs:gold", "amount": 500 }
        ],
        "processingTime": 200
    }).id('dut_create:eggs/2al_2cu_equals_2au_cl2')
    //砂纸
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            [{ "item": "minecraft:coarse_dirt" },
            { "item": "minecraft:grindstone" },
            { "item": "minecraft:sandstone" }],
            { "item": "minecraft:paper" }
        ],
        "result": { "item": "create:sand_paper" }
    }).id("dut_create:eggs/sand_paper")
    //钢也是合金
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            { "tag": "forge:ingots/steel" },
            { "item": "iceandfire:fire_dragon_blood" }
        ],
        "results": [
            { "item": "minecraft:netherite_ingot" },
        ]
    }).id("dut_create:eggs/steel_also_alloy")
    //合金≈特种钢≈钢
    event.custom({
        "type": "vintageimprovements:polishing",
        "speedLimits": 3,
        "ingredients": [{ "tag": "forge:ingots/netherite" }],
        "results": [
            { "item": "ad_astra:steel_ingot" }
        ],
        "processingTime": 200
    }).id("dut_create:eggs/nether_steel_also_steel")
    //铁杵磨成针
    function Polishing(item1,item2,item3,material) {
        event.custom({
            "type": "vintageimprovements:polishing",
            "speedLimits": 3,
            "ingredients": [{ "item": item1 }],
            "results": [
                { "item": item2 }
            ],
            "processingTime": 9999
        }).id("dut_create:eggs/grind_ingots_to_rods_"+material)
        event.custom({
            "type": "vintageimprovements:polishing",
            "speedLimits": 3,
            "ingredients": [{ "item": item2 }],
            "results": [
                { "item": item3 }
            ],
            "processingTime": 131400
        }).id("dut_create:eggs/grind_rods_to_needle_"+material)
    }
    Polishing("minecraft:iron_ingot","ad_astra:iron_rod","createaddition:iron_wire","iron")
    //全麦面粉
    event.custom({
        "type": "vintageimprovements:polishing",
        "speedLimits": 3,
        "ingredients": [{ "item": "minecraft:wheat" }],
        "results": [
            { "item": "create:wheat_flour","count":2 }
        ],
        "processingTime": 20
    }).id("dut_create:eggs/whole_wheat_flour")
})

BlockEvents.rightClicked("minecraft:player_head", event => {
    if (event.block.entityData?.SkullOwner?.Name != "Slimeli_" || event.hand != "MAIN_HAND") { return }
    event.server.runCommandSilent(`/execute as ${event.player.getUsername()} at @s in ${event.level.dimension} run tellraw @a [{"text":"[Slimeli_] "},{"translate":"kubejs.slimeli.${randomOne(0, 21).toString()}"}]`)
})