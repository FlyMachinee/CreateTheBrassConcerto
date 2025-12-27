const Platform1 = {
    "type": "custommachinery:command",
    "phase": "crafting_tickable",
    "command": "/playsound minecraft:block.stone.place block @a ~ ~ ~ 0.5",
    "log": false,
    "chance": 0.25,
    "permissionlevel": 5
}
const Platform2 = {
    "type": "custommachinery:command",
    "phase": "crafting_tickable",
    "command": "/particle minecraft:snowflake ~ ~1 ~ 0.3 1.5 0.3 0 5",
    "log": false,
    "permissionlevel": 5
}
const Platform3 = {
    "type": "custommachinery:command",
    "phase": "crafting_tickable",
    "command": "/particle minecraft:cloud ~ ~1 ~ 0.55 1 0.55 0 4",
    "log": false,
    "permissionlevel": 5
}
const PlatformCommon = {
    "type": "custommachinery:command",
    "phase": "crafting_tickable",
    "command": "/function dut:platform/check_particle",
    "log": false,
    "chance": 0.05,
    "permissionlevel": 5
}
const PlatformFill0 = {
    "type": "custommachinery:command",
    "phase": "ending",
    "command": "/function dut:platform/check/direction_0",
    "log": false,
    "permissionlevel": 5
}
const PlatformFill1 = {
    "type": "custommachinery:command",
    "phase": "ending",
    "command": "/function dut:platform/check/direction_1",
    "log": false,
    "permissionlevel": 5
}
const PlatformFill2 = {
    "type": "custommachinery:command",
    "phase": "ending",
    "command": "/function dut:platform/check/direction_2",
    "log": false,
    "permissionlevel": 5
}
const PlatformFill3 = {
    "type": "custommachinery:command",
    "phase": "ending",
    "command": "/function dut:platform/check/direction_3",
    "log": false,
    "permissionlevel": 5
}
const PlatformFill4 = {
    "type": "custommachinery:command",
    "phase": "ending",
    "command": "/function dut:platform/check/direction_4",
    "log": false,
    "permissionlevel": 5
}
const PlatformHeight = {
    "type": "custommachinery:position",
    "y": "(-59,)"
}
ServerEvents.recipes(event => {
    function SetPlatform(platformMachineId, platformFunction) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": platformMachineId,
            "time": 5,
            "error": false,
            "hidden": true,
            "priority": 0,
            "requirements": [
                PlatformHeight,
                PlatformCommon
            ]
        }).id("dut_create:" + platformMachineId.split(":")[1] + "/common")
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": platformMachineId,
            "time": 20,
            "error": false,
            "hidden": true,
            "priority": 6,
            "requirements": [
                {
                    "type": "custommachinery:command",
                    "phase": "ending",
                    "command": "function " + platformFunction,
                    "log": false,
                    "permissionlevel": 5
                },
                PlatformCommon,
                Platform1,
                Platform2,
                Platform3,
                {
                    "type": "custommachinery:fluid",
                    "mode": "input",
                    "tank": "tank4",
                    "fluid": "kubejs:cryogen",
                    "amount": 100
                }
            ]
        }).id("dut_create:" + platformMachineId.split(":")[1] + "/set")
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": platformMachineId,
            "time": 20,
            "error": false,
            "hidden": true,
            "priority": 5,
            "requirements": [
                PlatformFill4,
                PlatformCommon,
                Platform1,
                Platform2,
                Platform3,
                {
                    "type": "custommachinery:fluid",
                    "mode": "input",
                    "tank": "tank3",
                    "fluid": "kubejs:saline_water",
                    "amount": 100
                },
                {
                    "type": "custommachinery:fluid",
                    "mode": "output",
                    "tank": "tank4",
                    "fluid": "kubejs:cryogen",
                    "amount": 100
                }
            ]
        }).id("dut_create:" + platformMachineId.split(":")[1] + "/set1")
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": platformMachineId,
            "time": 20,
            "error": false,
            "hidden": true,
            "priority": 4,
            "requirements": [
                PlatformFill3,
                PlatformCommon,
                Platform1,
                Platform2,
                Platform3,
                {
                    "type": "custommachinery:fluid",
                    "mode": "input",
                    "tank": "tank2",
                    "fluid": "create:honey",
                    "amount": 100
                },
                {
                    "type": "custommachinery:fluid",
                    "mode": "output",
                    "tank": "tank3",
                    "fluid": "kubejs:saline_water",
                    "amount": 100
                }
            ]
        }).id("dut_create:" + platformMachineId.split(":")[1] + "/set2")
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": platformMachineId,
            "time": 20,
            "error": false,
            "hidden": true,
            "priority": 3,
            "requirements": [
                PlatformCommon,
                PlatformFill2,
                Platform1,
                Platform2,
                Platform3,
                {
                    "type": "custommachinery:fluid",
                    "mode": "input",
                    "tank": "tank1",
                    "fluid": "minecraft:water",
                    "amount": 100
                },
                {
                    "type": "custommachinery:fluid",
                    "mode": "output",
                    "tank": "tank2",
                    "fluid": "create:honey",
                    "amount": 100
                }
            ]
        }).id("dut_create:" + platformMachineId.split(":")[1] + "/set3")
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": platformMachineId,
            "time": 20,
            "error": false,
            "hidden": true,
            "priority": 2,
            "requirements": [
                PlatformCommon,
                PlatformFill1,
                Platform1,
                Platform2,
                Platform3,
                {
                    "type": "custommachinery:fluid",
                    "mode": "input",
                    "tank": "tank",
                    "fluid": "minecraft:lava",
                    "amount": 100
                },
                {
                    "type": "custommachinery:fluid",
                    "mode": "output",
                    "tank": "tank1",
                    "fluid": "minecraft:water",
                    "amount": 100
                }
            ]
        }).id("dut_create:" + platformMachineId.split(":")[1] + "/set4")
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": platformMachineId,
            "time": 20,
            "error": false,
            "hidden": true,
            "priority": 1,
            "requirements": [
                PlatformHeight,
                PlatformCommon,
                PlatformFill0,
                Platform1,
                Platform2,
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": "minecraft:stone",
                    "amount": 1
                },
                Platform3,
                {
                    "type": "custommachinery:fluid",
                    "mode": "output",
                    "tank": "tank",
                    "fluid": "minecraft:lava",
                    "amount": 100
                }
            ]
        }).id("dut_create:" + platformMachineId.split(":")[1] + "/set5")
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": platformMachineId,
            "time": 20,
            "error": false,
            "hidden": true,
            "priority": 1,
            "requirements": [
                PlatformHeight,
                PlatformCommon,
                PlatformFill0,
                {
                    "type": "custommachinery:drop",
                    "mode": "input",
                    "action": "consume",
                    "radius": 2,
                    "input": ["minecraft:stone"]
                },
                Platform1,
                Platform2,
                Platform3,
                {
                    "type": "custommachinery:fluid",
                    "mode": "output",
                    "tank": "tank",
                    "fluid": "minecraft:lava",
                    "amount": 100
                }
            ]
        }).id("dut_create:" + platformMachineId.split(":")[1] + "/set6")
    }
    SetPlatform("dut:emergency_industrial_platform", "dut:platform/setplatform")
    SetPlatform("dut:emergency_industrial_platform_block", "dut:platform/setplatform_block")
    SetPlatform("dut:emergency_industrial_platform_dark", "dut:platform/setplatform_dark")
    SetPlatform("dut:emergency_industrial_platform_dark_block", "dut:platform/setplatform_dark_block")
    SetPlatform("dut:emergency_industrial_platform_lime", "dut:platform/setplatform_lime")
    SetPlatform("dut:emergency_industrial_platform_lime_block", "dut:platform/setplatform_lime_block")
    SetPlatform("dut:emergency_industrial_platform_space", "dut:platform/setplatform_space")

})