ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //give @s ad_astra:tier_1_rocket{BotariumData:{StoredFluids:[{Fluid:"kubejs:rocket_fuel",Amount:3000}]}}


  event.remove({ id: "ad_astra:gravity_normalizer" })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "B": { "item": "create:chromatic_compound" },
      "C": { "tag": "forge:plates/desh" },
      "D": { "item": "create:refined_radiance_casing" },
      "E": { "item": "kubejs:light_composite_plate" }
    },
    "pattern": [
      " B ",
      "EDE",
      "CCC"
    ],
    "result": { "item": "ad_astra:gravity_normalizer" },
    "show_notification": true
  }).id("dut_create:gravity_normalizer")
  //TI-69
  event.remove({ output: 'ad_astra:ti_69' })
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "kubejs:aluminum_hard_disk", "nbt": { Damage: 1024 } },
      { "item": "create:framed_glass_pane" }
    ],
    "results": [{ "item": "ad_astra:ti_69" }]
  }).id("dut_create:deploying/ti_69")

  //火箭
  event.remove({ output: 'ad_astra:tier_1_rocket' })
  //宇航服
  event.remove({ output: 'ad_astra:space_helmet' })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "E": { "item": "create:redstone_link" },
      "F": { "item": "create:framed_glass" },
      "G": { "item": "kubejs:fiber_fabric" },
      "H": { "tag": "forge:plates/steel" }
    },
    "pattern": [
      "FFG",
      "FGE",
      "FGH"
    ],
    "result": { "item": "ad_astra:space_helmet" }
  }
  ).id("dut_create:ad_astra/space_helmet")
  event.remove({ output: 'ad_astra:space_suit' })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "B": { "item": "kubejs:fiber_fabric" },
      "A": { "tag": "forge:plates/steel" },
      "C": { "item": "ad_astra:oxygen_gear" },
      "D": { "item": "ad_astra:gas_tank" }
    },
    "pattern": [
      "BCD",
      "BAD",
      "BAA"
    ],
    "result": { "item": "ad_astra:space_suit" }
  }
  ).id("dut_create:ad_astra/space_suit")
  event.remove({ output: 'ad_astra:space_pants' })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "B": { "item": "kubejs:fiber_fabric" },
      "A": { "tag": "forge:plates/steel" }
    },
    "pattern": [
      "AAA",
      "BBB",
      "B B"
    ],
    "result": { "item": "ad_astra:space_pants" }
  }
  ).id("dut_create:ad_astra/space_pants")
  event.remove({ output: 'ad_astra:space_boots' })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "B": { "item": "kubejs:fiber_fabric" },
      "A": { "tag": "forge:plates/steel" }
    },
    "pattern": [
      "A A",
      "B B"
    ],
    "result": { "item": "ad_astra:space_boots" }
  }
  ).id("dut_create:ad_astra/space_boots")
  event.remove({ output: 'ad_astra:netherite_space_helmet' })
  event.custom({
    "type": "minecraft:smithing_transform",
    "addition": { "tag": "forge:plates/netherite" },
    "base": { "item": "ad_astra:space_helmet" },
    "result": { "item": "ad_astra:netherite_space_helmet" },
    "template": { "item": "minecraft:netherite_upgrade_smithing_template" }
  }).id("dut_create:ad_astra/netherite_space_helmet")
  event.remove({ output: 'ad_astra:netherite_space_suit' })
  event.custom({
    "type": "minecraft:smithing_transform",
    "addition": { "item": "create:netherite_backtank" },
    "base": { "item": "ad_astra:space_suit" },
    "result": { "item": "ad_astra:netherite_space_suit" },
    "template": { "item": "minecraft:netherite_upgrade_smithing_template" }
  }).id("dut_create:ad_astra/netherite_space_suit")
  event.remove({ output: 'ad_astra:netherite_space_pants' })
  event.custom({
    "type": "minecraft:smithing_transform",
    "addition": { "tag": "forge:plates/netherite" },
    "base": { "item": "ad_astra:space_pants" },
    "result": { "item": "ad_astra:netherite_space_pants" },
    "template": { "item": "minecraft:netherite_upgrade_smithing_template" }
  }).id("dut_create:ad_astra/netherite_space_pants")
  event.remove({ output: 'ad_astra:netherite_space_boots' })
  event.custom({
    "type": "minecraft:smithing_transform",
    "addition": { "tag": "forge:plates/netherite" },
    "base": { "item": "ad_astra:space_boots" },
    "result": { "item": "ad_astra:netherite_space_boots" },
    "template": { "item": "minecraft:netherite_upgrade_smithing_template" }
  }).id("dut_create:ad_astra/netherite_space_boots")
  //引擎
  event.remove({ output: 'ad_astra:steel_engine' })
  //燃料罐
  event.remove({ output: 'ad_astra:steel_tank' })
})
