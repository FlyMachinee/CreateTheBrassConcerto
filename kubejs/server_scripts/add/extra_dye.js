ServerEvents.recipes(event => {
  //
  //event.custom().id("dut_create:")
  //event.custom().id("dut_create:")
  //event.custom().id("dut_create:")d
  //诡异菌
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "item": "minecraft:warped_fungus" }
    ],
    "results": [
      { "item": "minecraft:cyan_dye" },
      { "item": "minecraft:orange_dye", "chance": 0.25 }
    ],
    "processingTime": 10
  }).id("dut_create:crushing/warped_fungus")
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "item": "minecraft:crimson_fungus" }
    ],
    "results": [
      { "item": "minecraft:red_dye" },
      { "item": "minecraft:orange_dye", "chance": 0.25 }
    ],
    "processingTime": 10
  }).id("dut_create:crushing/crimson_fungus")
})