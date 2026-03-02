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
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            { "item": "minecraft:compass" },
            { "item": "create:andesite_alloy" }
        ],
        "results": [{ "item": "minecraft:player_head", "nbt": '{SkullOwner:{Name:"AndesiteAbound",Properties:{textures:[{Value:"ewogICJ0aW1lc3RhbXAiIDogMTc3MjQyMDExNDQ3NywKICAicHJvZmlsZUlkIiA6ICJhYmRiYmIxZjYzMTg0ZTA3OGRlMmQ3NGM0OWUzYmUwZCIsCiAgInByb2ZpbGVOYW1lIiA6ICJBbmRlc2l0ZUFib3VuZCIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS9iZDhhY2Q5ZjI0ODI3NTI2MmJjNmFjM2I0ZDkxMTIwZGFkNWQwNzY2Y2QzNjRhYWM0OWI1ODg2NGFmOTI2NzFkIiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0sCiAgICAiQ0FQRSIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTZjMzU2MjhmZTFjNGQ1OWRkNTI1NjFhM2QwM2JmYTRlMWE3NmQzOTdjOGI5YzQ3NmMyZjc3Y2I2YWViYjFkZiIKICAgIH0KICB9Cn0="}]}}}' }]
    }).id("dut_create:eggs/andesiteabound")
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "A": { "item": "minecraft:slime_block" },
            "P": { "item": "minecraft:observer" },
            "S": { "item": "minecraft:sticky_piston" }
        },
        "pattern": [
            "AASP",
            "PSAA",
        ],
        "result": { "item": "minecraft:player_head", "nbt": '{SkullOwner:{Name:"Fly_Machine",Properties:{textures:[{Value:"ewogICJ0aW1lc3RhbXAiIDogMTc3MjQyMDExMDkxMywKICAicHJvZmlsZUlkIiA6ICI3MzgwOTUwYjkzNzQ0MWMzOTVjNjI0MmMzNGQxMTllMiIsCiAgInByb2ZpbGVOYW1lIiA6ICJGbHlfTWFjaGluZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS81NTFmYjU5MzY1OGU2Mjc4NWMyMDA5NDA0YzhlYmI1YTdhZWU4ZTYwY2ZkZTZkY2E4NzQxZWM2OWEzNWFiOTJhIgogICAgfSwKICAgICJDQVBFIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS8yMzQwYzBlMDNkZDI0YTExYjE1YThiMzNjMmE3ZTllMzJhYmIyMDUxYjI0ODFkMGJhN2RlZmQ2MzVjYTdhOTMzIgogICAgfQogIH0KfQ=="}]}}}' }
    }
    ).id("dut_create:eggs/fly_machine")
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            { "item": "minecraft:potato" },
            { "item": "minecraft:tnt" }
        ],
        "results": [{ "item": "minecraft:player_head", "nbt": '{SkullOwner:{Name:"xkmxz2503",Properties:{textures:[{Value:"ewogICJ0aW1lc3RhbXAiIDogMTc3MjQyMDExODMwMywKICAicHJvZmlsZUlkIiA6ICJmY2QxOGZmZTNkMGE0ODcwYjAwMWFjZWRhYjZhNDQ4NCIsCiAgInByb2ZpbGVOYW1lIiA6ICJ4a214ejI1MDMiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTE5YmVmYTM5NzkyZDcwNjdhOTY1ZTQxODNmMGRiMDJmZDVjNmZhYzAxNmU3ZDY3N2UwMzFlM2ZlOTY4NmIwMyIsCiAgICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICAgIm1vZGVsIiA6ICJzbGltIgogICAgICB9CiAgICB9LAogICAgIkNBUEUiIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2EzZjZlNGYxNDgwMWYzZWE1NWUzZDk1YjliNGVmM2I1ZTg4MDJkOTQ3ZjY2OWRlOTNkNmVjNGI5MzU0YTQzNmIiCiAgICB9CiAgfQp9"}]}}}' }]
    }).id("dut_create:eggs/xkmxz2503")
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
        "processingTime": 120
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
        "processingTime": 50
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
        "processingTime": 50
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
        "processingTime": 50
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
        "processingTime": 50
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
        "processingTime": 50
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
    //泰君
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            { "item": "minecraft:slime_ball" },
            { "item": "minecraft:stick" }
        ],
        "result": { "item": "minecraft:torch", "count": 3 }
    }).id("dut_create:eggs/terraria")
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
            { "item": "ad_astra:steel_ingot", "chance": 0.25 }
        ],
        "processingTime": 120
    }).id("dut_create:eggs/nether_steel_also_steel")
    //铁杵磨成针
    function Polishing(item1, item2, item3, material) {
        event.custom({
            "type": "vintageimprovements:polishing",
            "speedLimits": 3,
            "ingredients": [{ "item": item1 }],
            "results": [
                { "item": item2 }
            ],
            "processingTime": 9999
        }).id("dut_create:eggs/grind_ingots_to_rods_" + material)
        event.custom({
            "type": "vintageimprovements:polishing",
            "speedLimits": 3,
            "ingredients": [{ "item": item2 }],
            "results": [
                { "item": item3 }
            ],
            "processingTime": 131400
        }).id("dut_create:eggs/grind_rods_to_needle_" + material)
    }
    Polishing("minecraft:iron_ingot", "ad_astra:iron_rod", "createaddition:iron_wire", "iron")
    //全麦面粉
    event.custom({
        "type": "vintageimprovements:polishing",
        "speedLimits": 3,
        "ingredients": [{ "item": "minecraft:wheat" }],
        "results": [
            { "item": "create:wheat_flour", "count": 2 }
        ],
        "processingTime": 20
    }).id("dut_create:eggs/whole_wheat_flour")
})

BlockEvents.rightClicked("minecraft:player_head", event => {
    let SkullName = event.block.entityData?.SkullOwner?.Name
    if (SkullName == null || event.hand != "MAIN_HAND") { return }
    switch (SkullName) {
        case "Slimeli_":
            event.server.runCommandSilent(`/tellraw @a [{"text":"[Slimeli_] "},{"translate":"kubejs.slimeli.${randomOne(0, 21).toString()}"}]`)
            break
        case "AndesiteAbound":
            event.server.runCommandSilent(`/tellraw @a [{"text":"[AndesiteAbound] "},{"translate":"kubejs.andesiteabound.${randomOne(0, 2).toString()}"}]`)
            break
        case "Fly_Machine":
            event.server.runCommandSilent(`/tellraw @a [{"text":"[Fly_Machine] "},{"translate":"kubejs.fly_machine.${randomOne(0, 8).toString()}"}]`)
            break
        case "xkmxz2503":
            event.server.runCommandSilent(`/tellraw @a [{"text":"[xkmxz2503] "},{"translate":"kubejs.xkmxz2503.0"}]`)
            break
    }
})