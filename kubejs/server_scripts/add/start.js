ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "minecraft:andesite" },
            "B": { "tag": "forge:ingots/iron" }
        },
        "pattern": [
            "ABA",
            "AAA"
        ],
        "result": { "item": "create:basin" },
        "show_notification": true
    }).id("dut_create:first_basin")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "minecraft:andesite" },
            "B": { "tag": "forge:ingots/iron" }
        },
        "pattern": [
            " A ",
            "ABA"
        ],
        "result": { "item": "createbigcannons:basin_foundry_lid" },
        "show_notification": true
    }).id("dut_create:first_basin_foundry_lid")
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "createdieselgenerators:chip_wood_block"  },
      { "tag": "forge:ingots/iron" },
    ],
    "results": [{ "item": "create:depot" }]
  }).id("dut_create:deploying/first_depot")
})