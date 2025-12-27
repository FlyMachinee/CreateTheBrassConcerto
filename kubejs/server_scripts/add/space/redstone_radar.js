ServerEvents.recipes(event => {
    const RadarFliter = {
        "type": "custommachinery:item_filter",
        "ingredient": { "item": "kubejs:position_data" },
        "slot": "position_data"
    }
    function RadarFluid(mode) {
        return ({
            "type": "custommachinery:fluid",
            "mode": mode,
            "fluid": "kubejs:kibibyte",
            "amount": 50
        })
    }
    function RadarFluid1(mode) {
        return ({
            "type": "custommachinery:fluid",
            "mode": mode,
            "fluid": "kubejs:mebibyte",
            "amount": 50
        })
    }
    const RadarRedstoneSignal =
    {
        "type": "custommachinery:redstone",
        "power": "(1,)"
    }
    //
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:redstone_radar",
        "time": 10,
        "priority": 0,
        "hidden": true,
        "error": true,
        "requirements": [
        ]
    }).id("dut_create:redstone_radar/empty")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:redstone_radar",
        "time": 5,
        "priority": 2,
        "hidden": true,
        "error": true,
        "requirements": [
            RadarFluid("output")
        ]
    }).id("dut_create:redstone_radar/recharge")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:redstone_radar",
        "time": 1,
        "priority": 4,
        "hidden": true,
        "error": true,
        "requirements": [
            RadarRedstoneSignal,
            RadarFluid("input"),
            RadarFluid1("output"),
            RadarFliter,
            {
                "type": "custommachinery:command",
                "phase": "starting",
                "command": "function dut:redstone_radar/set",
                "log": false,
                "permissionlevel": 5
            }
        ]
    }).id("dut_create:redstone_radar/signal0")
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:redstone_radar",
        "time": 14,
        "priority": 5,
        "hidden": true,
        "error": true,
        "requirements": [
            RadarFliter,
            RadarFluid1("input"),
            {
                "type": "custommachinery:command",
                "phase": "ending",
                "command": "particle minecraft:shriek 4 ~ ~0.75 ~",
                "log": false,
                "permissionlevel": 5
            }
        ]
    }).id("dut_create:redstone_radar/signal")

})