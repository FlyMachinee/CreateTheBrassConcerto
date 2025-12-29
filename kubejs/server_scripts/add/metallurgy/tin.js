ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //锭、粒、块转换
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [{"tag": "forge:ingots/tin"}],
    "result": {"item": "kubejs:tin_nugget","count": 9}
  }).id("dut_create:tin/ingot_to_nugget")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [{"tag": "forge:storage_blocks/tin"}],
    "result": {"item": "kubejs:tin_ingot","count": 9}
  }).id("dut_create:tin/block_to_ingot")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {"tag": "forge:ingots/tin"},
      {"tag": "forge:ingots/tin"},
      {"tag": "forge:ingots/tin"},
      {"tag": "forge:ingots/tin"},
      {"tag": "forge:ingots/tin"},
      {"tag": "forge:ingots/tin"},
      {"tag": "forge:ingots/tin"},
      {"tag": "forge:ingots/tin"},
      {"tag": "forge:ingots/tin"}
    ],
    "result": {"item": "kubejs:tin_block"}
  }).id("dut_create:tin/ingot_to_block")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {"tag": "forge:nuggets/tin"},
      {"tag": "forge:nuggets/tin"},
      {"tag": "forge:nuggets/tin"},
      {"tag": "forge:nuggets/tin"},
      {"tag": "forge:nuggets/tin"},
      {"tag": "forge:nuggets/tin"},
      {"tag": "forge:nuggets/tin"},
      {"tag": "forge:nuggets/tin"},
      {"tag": "forge:nuggets/tin"}
    ],
    "result": {"item": "kubejs:tin_ingot"}
  }).id("dut_create:tin/nugget_to_ingot")
  //压板
  event.custom({
    "type": "create:pressing",
    "ingredients": [ {"tag": "forge:ingots/tin"}],
    "results": [ {"item": "kubejs:tin_sheet"}]
  }).id("dut_create:tin/get_sheet")
  //粉碎锡熔炼、洗涤
  event.custom({
    "type": "minecraft:blasting",
    "ingredient": {"item": "create:crushed_raw_tin"},
    "result": "kubejs:tin_ingot",
    "experience": 0.1,
    "cookingtime": 100
  }).id("dut_create:tin/blast")
  event.custom({
    "type": "create:splashing",
    "ingredients": [
      {"item": "create:crushed_raw_tin"}
    ],
    "results": [
      {"item": "kubejs:tin_nugget","count": 9},
      {"item": "minecraft:glowstone_dust","chance": 0.025}
    ]
  }).id("dut_create:tin/splash")
  //基础配方
  event.remove({ id: 'create:milling/granite' })
  //锡石
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "tag": "create:stone_types/granite" }
    ],
    "results": [
      { "item": "minecraft:red_sand" },
      { "item": "kubejs:raw_tin", "chance": 0.05 }
    ]
  }).id("dut_create:tin/raw_tin")
})
