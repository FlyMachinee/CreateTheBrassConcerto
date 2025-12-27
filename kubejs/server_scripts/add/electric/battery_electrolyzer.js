ServerEvents.recipes(event => {
    //可充电电池
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "tag": "forge:plates/brass", "count": 1 },
        "results": [
            { "item": "kubejs:chargeable_battery" }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_chargeable_battery" },
                    { "item": "kubejs:graphite" }
                ],
                "results": [{ "item": "kubejs:incomplete_chargeable_battery" }]
            },
            {
                "type": "create:filling",
                "ingredients": [{ "item": "kubejs:incomplete_chargeable_battery" },
                { "amount": 250, "fluid": "create_enchantment_industry:experience" }],
                "results": [{ "item": "kubejs:incomplete_chargeable_battery" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_chargeable_battery" },
                    { "tag": "forge:plates/zinc" }
                ],
                "results": [{ "item": "kubejs:incomplete_chargeable_battery" }]
            },
            {
                "type": "create:filling",
                "ingredients": [{ "item": "kubejs:incomplete_chargeable_battery" },
                { "amount": 1000, "fluid": "kubejs:nitrogen_fertilizer" }],
                "results": [{ "item": "kubejs:incomplete_chargeable_battery" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_chargeable_battery" },
                    { "tag": "forge:dyes/light_blue" }
                ],
                "results": [{ "item": "kubejs:incomplete_chargeable_battery" }]
            }
        ],
        "transitionalItem": { "item": "kubejs:incomplete_chargeable_battery" }
    }).id("dut_create:chargeable_battery")
    //一次性电池
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "tag": "forge:plates/zinc", "count": 1 },
        "results": [
            { "item": "kubejs:disposable_battery" }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "create:filling",
                "ingredients": [{ "item": "createaddition:zinc_sheet" },
                { "amount": 250, "fluid": "create_enchantment_industry:experience" }],
                "results": [{ "item": "createaddition:zinc_sheet" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "createaddition:zinc_sheet" },
                    { "tag": "forge:plates/copper" }
                ],
                "results": [{ "item": "createaddition:zinc_sheet" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "createaddition:zinc_sheet" },
                    { "item": "kubejs:graphite" }
                ],
                "results": [{ "item": "createaddition:zinc_sheet" }]
            }
        ],
        "transitionalItem": { "item": "createaddition:zinc_sheet" }
    }).id("dut_create:disposable_battery_from_experience")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "kubejs:incomplete_disposable_battery", "count": 1 },
        "results": [
            { "item": "kubejs:disposable_battery" }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "create:filling",
                "ingredients": [{ "item": "kubejs:incomplete_disposable_battery" },
                { "amount": 175, "fluid": "kubejs:caustic_soda" }],
                "results": [{ "item": "kubejs:incomplete_disposable_battery" }]
            },
            {
                "type": "create:filling",
                "ingredients": [{ "item": "kubejs:incomplete_disposable_battery" },
                { "amount": 1000, "fluidTag": "forge:hydrogen"}],
                "results": [{ "item": "kubejs:incomplete_disposable_battery" }]
            },
            {
                "type": "create:filling",
                "ingredients": [{ "item": "kubejs:incomplete_disposable_battery" },
                { "amount": 500, "fluidTag": "forge:oxygen" }],
                "results": [{ "item": "kubejs:incomplete_disposable_battery" }]
            }
        ],
        "transitionalItem": { "item": "kubejs:incomplete_disposable_battery" }
    }).id("dut_create:disposable_battery_from_o2_h2_naoh")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "create:copper_sheet", "count": 1 },
        "results": [
            { "item": "kubejs:disposable_battery" }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "create:copper_sheet" },
                    { "tag": "forge:plates/silver" }
                ],
                "results": [{ "item": "create:copper_sheet" }]
            },
            {
                "type": "create:filling",
                "ingredients": [{ "item": "create:copper_sheet" },
                { "amount": 250, "fluid": "kubejs:caustic_soda" }],
                "results": [{ "item": "create:copper_sheet" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "create:copper_sheet" },
                    { "tag": "forge:plates/zinc" }
                ],
                "results": [{ "item": "create:copper_sheet" }]
            }
        ],
        "transitionalItem": { "item": "create:copper_sheet" }
    }).id("dut_create:disposable_battery_from_zinc_silver_naoh")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "kubejs:incomplete_disposable_battery", "count": 1 },
        "results": [
            { "item": "kubejs:disposable_battery" }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_disposable_battery" },
                    { "tag": "forge:plates/zinc" }
                ],
                "results": [{ "item": "kubejs:incomplete_disposable_battery" }]
            },
            {
                "type": "create:filling",
                "ingredients": [{ "item": "kubejs:incomplete_disposable_battery" },
                { "amount": 500, "fluid": "kubejs:saline_water" }],
                "results": [{ "item": "kubejs:incomplete_disposable_battery" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_disposable_battery" },
                    { "tag": "forge:plates/silver" }
                ],
                "results": [{ "item": "kubejs:incomplete_disposable_battery" }]
            }
        ],
        "transitionalItem": { "item": "kubejs:incomplete_disposable_battery" }
    }).id("dut_create:disposable_battery_from_zinc_silver_saline")
    //一次性电池外壳
    event.custom({
        "type": "vintageimprovements:curving",
        "mode": 1,
        "ingredients": [{ "tag": "forge:plates/copper" }],
        "results": [{ "item": "kubejs:incomplete_disposable_battery" }]
    }).id("dut_create:curving/disposable_battery")
    //电解器安装电池
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
          {"item":"kubejs:uncharged_electrolyzer"},
          {"item":"kubejs:uncharged_electrolyzer"},
          {"item":"kubejs:uncharged_electrolyzer"},
          {"item":"kubejs:uncharged_electrolyzer"},
          {"item":"kubejs:uncharged_electrolyzer"},
          {"item":"kubejs:uncharged_electrolyzer"},
          {"item":"kubejs:uncharged_electrolyzer"},
          {"item":"kubejs:uncharged_electrolyzer"},
          { "item":"kubejs:disposable_battery"}
        ],
        "result": {"item": "kubejs:electrolyzer","count": 8}
      }).id("dut_create:electrolyzer_battery")
    //电解器
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            " # ",
            "T&T"
        ],
        "key": {
            "#": {
                "tag": "forge:plates/brass"
            },
            "&": {
                "tag": "dut_create:plates/polymer"
            },
            "T": {
                "tag": "forge:rods/copper"
            }
        },
        "result": {
            "item": "kubejs:uncharged_electrolyzer"
        }
    }).id("dut_create:uncharged_electrolyzer")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            " # ",
            "T&T"
        ],
        "key": {
            "#": {"tag": "forge:plates/brass"},
            "&": {"tag": "dut_create:plates/polymer"},
            "T": { "item": "kubejs:graphite" }
        },
        "result": {
            "item": "kubejs:uncharged_electrolyzer"
        }
    }).id("dut_create:uncharged_electrolyzer_coal")
    //电解器充电
    event.custom({
        "type": "createaddition:charging",
        "input": {
            "item": "kubejs:uncharged_electrolyzer",
            "count": 1
        },
        "result": {
            "item": "kubejs:electrolyzer",
            "count": 1
        },
        "energy": 21600,
    }).id("dut_create:charging/electrolyzer")
})