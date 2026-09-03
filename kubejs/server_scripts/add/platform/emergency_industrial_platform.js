const Platform1 = {
    "type": "custommachinery:sound",
    "phase": "crafting_tickable",
    "sound": "minecraft:block.stone.place",
    "pos": [0, 0, 0],
    "volume": 0.5,
    "chance": 0.25
}
const Platform2 = {
        "type": "custommachinery:particle",
        "phase": "crafting_tickable",
        "particle": "minecraft:snowflake",
        "pos": [0, 1, 0],
        "delta": [0.3, 1.5, 0.3],
        "speed": 0,
        "count": 5
    }
const Platform3 = {
        "type": "custommachinery:particle",
        "phase": "crafting_tickable",
        "particle": "minecraft:snowflake",
        "pos": [0, 1, 0],
        "delta": [0.55, 1, 0.55],
        "speed": 0,
        "count": 4
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
            ]
        }).id("dut_create:" + platformMachineId.split(":")[1] + "/empty")
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": platformMachineId,
            "time": 20,
            "error": false,
            "hidden": true,
            "priority": 6,
            "requirements": [
                PlatformHeight,
                {
                    "type": "custommachinery:command",
                    "phase": "ending",
                    "command": "function " + platformFunction,
                    "log": false,
                    "permissionlevel": 5
                },
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
                PlatformHeight,
                PlatformFill4,
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
                PlatformHeight,
                PlatformFill3,
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
                PlatformHeight,
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
                PlatformHeight,
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
                PlatformFill0,
                Platform1,
                Platform2,
                Platform3,
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": "minecraft:stone",
                    "amount": 1
                },
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