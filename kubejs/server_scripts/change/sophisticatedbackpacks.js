ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom().id("dut_create:")
  //event.remove({ mod: '' })
  //电池升级
  event.remove({ output: "sophisticatedbackpacks:battery_upgrade" })
  //嵌套升级
  event.remove({ output: "sophisticatedbackpacks:inception_upgrade" })
  //堆叠升级
  event.remove({ id: "sophisticatedbackpacks:stack_upgrade_omega_tier" })
  event.remove({ id: "sophisticatedbackpacks:stack_upgrade_tier_4" })
  event.remove({ id: "sophisticatedbackpacks:stack_upgrade_tier_3" })
  event.remove({ id: "sophisticatedbackpacks:stack_upgrade_tier_2" })
  event.remove({ id: "sophisticatedbackpacks:stack_upgrade_tier_1_from_starter"})
  event.remove({ id: "sophisticatedbackpacks:stack_upgrade_tier_1" })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "AIA",
      "AAA"
    ],
    "key": {
      "A": { "tag": "forge:storage_blocks/netherite" },
      "I": { "item": "sophisticatedbackpacks:stack_upgrade_starter_tier" }
    },
    "result": { "item": "sophisticatedbackpacks:stack_upgrade_tier_1" }
  }).id('dut_create:stack_upgrade_tier_1')
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "AIA",
      "AAA"
    ],
    "key": {
      "A": { "tag": "forge:plates/netherite" },
      "I": { "item": "sophisticatedbackpacks:upgrade_base" }
    },
    "result": { "item": "sophisticatedbackpacks:stack_upgrade_starter_tier" }
  }).id('dut_create:stack_upgrade_starter_tier')
  event.remove({id:"sophisticatedbackpacks:stack_upgrade_starter_tier"})
  event.remove({id:"sophisticatedbackpacks:diamond_backpack"})
  event.remove({id:"sophisticatedbackpacks:gold_backpack"})
  event.remove({id:"sophisticatedbackpacks:copper_backpack"})
  event.remove({id:"sophisticatedbackpacks:iron_backpack"})
  event.remove({id:"sophisticatedbackpacks:iron_backpack_from_copper"})
  event.custom({
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "key": {
      "B": {
        "tag": "dut_create:backpack"
      },
      "I": {
        "tag": "forge:ingots/brass"
      }
    },
    "pattern": [
      "III",
      "IBI",
      "III"
    ],
    "result": {
      "item": "sophisticatedbackpacks:diamond_backpack"
    }
  }).id('dut_create:diamond_backpack')
})