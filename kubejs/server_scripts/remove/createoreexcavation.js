ServerEvents.recipes(event => {
  //event.remove({input: ''})
  event.remove({ id:'minecraft:ender_chest'})
  event.remove({ output: 'custommachinery:configuration_card' })
  event.remove({ input: 'create:precision_mechanism', mod: 'createoreexcavation' })
  event.remove({ id: 'createoreexcavation:diamond_drill' })
  event.remove({ id: 'createoreexcavation:netherite_drill' })
  event.remove({ id: 'createoreexcavation:drill' })
  event.remove({ id: 'createoreexcavation:cutting/diamond_cutting' })
  event.remove({ id: 'waystones:warp_stone' })
  event.remove({ id: 'waystones:warp_dust' })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": { "tag": "forge:ingots/tungsten" },
      "B": { "tag": "forge:ingots/netherite" },
      "C": { "tag": "forge:plates/tungsten" }
    },
    "pattern": [
      "AB ",
      "BAB",
      " BC"
    ],
    "result": { "item": "createoreexcavation:netherite_drill" },
    "show_notification": true
  }).id("dut_create:netherite_drill")
  event.remove({ id: 'waystones:warp_plate' })
  event.remove({ id: 'waystones:return_scroll' })
  event.remove({ id: 'waystones:bound_scroll' })
  event.remove({ id: 'waystones:warp_scroll' })
})
/*
const Waystones = ["waystones:waystone",
  "waystones:sandy_waystone",
  "waystones:mossy_waystone",
  "waystones:warp_plate",
  "waystones:portstone",
  "waystones:sharestone",
  "waystones:white_sharestone",
  "waystones:orange_sharestone",
  "waystones:magenta_sharestone",
  "waystones:light_blue_sharestone",
  "waystones:yellow_sharestone",
  "waystones:lime_sharestone",
  "waystones:pink_sharestone",
  "waystones:gray_sharestone",
  "waystones:light_gray_sharestone",
  "waystones:cyan_sharestone",
  "waystones:purple_sharestone",
  "waystones:blue_sharestone",
  "waystones:brown_sharestone",
  "waystones:green_sharestone",
  "waystones:red_sharestone",
  "waystones:black_sharestone"]
BlockEvents.placed(Waystones, event => {
  let BlockDimension = event.level.dimension.toString()
  let AlowedDimension = ['minecraft:overworld', 'minecraft:the_nether', 'minecraft:the_end']
  if (AlowedDimension.indexOf(BlockDimension) == -1) {
    event.player.setStatusMessage(Text.translate("kubejs.message.dimension_banned"))
    event.cancel()
  }
})
BlockEvents.rightClicked(Waystones, event => {
  let BlockDimension = event.level.dimension.toString()
  let AlowedDimension = ['minecraft:overworld', 'minecraft:the_nether', 'minecraft:the_end']
  if (AlowedDimension.indexOf(BlockDimension) == -1) {
    event.player.setStatusMessage(Text.translate("kubejs.message.dimension_banned"))
    event.cancel()
  }
})
  */
BlockEvents.rightClicked("create_connected:fluid_vessel", event => {
  if (event.item.id == "createloveandwar:thermostat") {
    event.cancel()
  }
})
