BlockEvents.leftClicked("#dut_create:breakable", event => {
  if (event.item.id == "kubejs:steel_impact_drill" && event.block.hasTag("dut_create:breakable")) {
    event.server.runCommandSilent(`/execute as ${event.player.getUsername()} in ${event.level.dimension} run loot give @s mine ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} minecraft:netherite_pickaxe{Enchantments:[{id:"silk_touch",lvl:1s}]}`)
    event.level.destroyBlock(event.block.pos, false, event.player)
  }
})

BlockEvents.leftClicked("minecraft:bedrock", event => {
  if (event.item.id == "kubejs:steel_impact_drill") {
    event.level.destroyBlock(event.block.pos, false, event.player)
  }
})
ItemEvents.rightClicked("kubejs:position_data", event => {
  if (event.player.shiftKeyDown) {
    event.item.nbt = null
    event.level.playSound(null, event.player.x, event.player.y, event.player.z, "minecraft:block.note_block.guitar", "players", 0.6, 1)
    event.player.swing()
    event.player.setStatusMessage(Text.translate("kubejs.tooltip.undata"))
    return
  }
  let nbt = event.item.orCreateTag
  nbt.position = [Math.floor(event.player.x) + 0.5, Math.floor(event.player.y) - 0.5, Math.floor(event.player.z) + 0.5]
  nbt.dimension = event.level.dimension.toString()
  switch (nbt.dimension) {
    case "minecraft:overworld":
      nbt.dimensionID = 1
      break
    case "minecraft:the_nether":
      nbt.dimensionID = 2
      break
    case "minecraft:the_end":
      nbt.dimensionID = 3
      break
    case "ad_astra:earth_orbit":
      nbt.dimensionID = 4
      break
    case "ad_astra:moon":
      nbt.dimensionID = 5
      break
    case "ad_astra:moon_orbit":
      nbt.dimensionID = 6
      break
    case "dut:slimeria":
      nbt.dimensionID = 7
      break
    case "dut:slimeria_orbit":
      nbt.dimensionID = 8
      break
  }
  nbt.Enchantments = [{}]
  event.player.setStatusMessage(Text.translate("kubejs.tooltip.position"))
  event.player.swing()
  event.level.playSound(null, event.player.x, event.player.y, event.player.z, "minecraft:block.note_block.bell", "players", 0.6, 0.2)
  event.player.addItemCooldown("kubejs:position_data", 5)
})


ItemEvents.rightClicked("kubejs:unknown_prototype", event => {
  event.player.swing()
  event.level.playSound(null, event.player.x, event.player.y, event.player.z, "block.fire.extinguish", "players", 0.4, 1)
  if (randomOne(0, 9) != 0) {
    event.level.runCommandSilent(`/execute as ${event.player.getUsername()} at @s run function dut:unknown_prototype`)
    event.player.addItemCooldown("kubejs:unknown_prototype", 60)
    event.item.shrink(1)
  }
  else {
    event.player.block.createExplosion().strength(3).explosionMode("mob").explode()
    event.player.addItemCooldown("kubejs:unknown_prototype", 60)
    event.item.shrink(1)
  }
})

ItemEvents.rightClicked("kubejs:tin_hard_disk", event => {
  if (event.item.damageValue > 0 && event.player.getOffHandItem().id == "create:clipboard") {
    event.item.damageValue -= 12
    event.player.addItemCooldown("kubejs:tin_hard_disk", 5)
  }
})
ItemEvents.rightClicked("kubejs:steel_power_sword", event => {
  event.player.addItemCooldown("kubejs:steel_power_sword", 200)
  event.server.runCommandSilent(`/execute as ${event.player.getUsername()} at @s run particle minecraft:electric_spark ~ ~1.0 ~ 0.25 0.8 0.25 0.1 32`)
  event.server.runCommandSilent(`/execute as ${event.player.getUsername()} at @s run function dut:particle/scan_set`)
  event.player.potionEffects.add("minecraft:absorption", 240, 14, false, false)
  event.player.potionEffects.add("minecraft:speed", 240, 2, false, false)
  event.level.playSound(null, event.player.x, event.player.y, event.player.z, "createaddition:electric_charge", "players", 0.6, 1)
})
ItemEvents.rightClicked("kubejs:rocket_sword", event => {
  const Motion = event.player.getViewVector(1)
  event.player.hurtMarked = true
  event.player.deltaMovement = Motion
  event.server.runCommandSilent(`/execute as ${event.player.getUsername()} at @s run particle createbigcannons:shrapnel_cloud ^ ^1 ^-0.1 0 0 0 1.2 5`)
  event.player.potionEffects.add("minecraft:absorption", 240, 4, false, false)
  event.player.potionEffects.add("minecraft:speed", 240, 2, false, false)
  event.player.potionEffects.add("minecraft:slow_falling", 60, 0, false, false)
  event.level.playSound(null, event.player.x, event.player.y, event.player.z, "create:steam", "players", 0.4, 1)
  if (event.player.y > 600) {
    event.server.runCommandSilent(`/execute as ${event.player.getUsername()} at @s run function dut:transport`)
  }
})
ItemEvents.entityInteracted("kubejs:mycetozoan", event => {
  if (event.target.type == "minecraft:slime" || event.target.type == "minecraft:magma_cube") {
    let size = event.target.size
    if (size < 9) {
      event.item.count -= 1
      event.target.mergeNbt({ "Size": size })
    }
  }
})
//以下代码修改自JSI Production Team
const $OreVeinGenerator = Java.loadClass("com.tom.createores.OreVeinGenerator")
const $OreVeinAtlasItem = Java.loadClass("com.tom.createores.item.OreVeinAtlasItem")
ItemEvents.rightClicked("kubejs:scanner", e => {
  const { player, level, server } = e
  if (player.cooldowns.isOnCooldown(e.item.item))
    return
  const MAX_SEARCH_DIST_IN_BLOCK = 16 // 最大搜索距离
  let excludedVein = []
  player.inventory.allItems.forEach(item => {
    if (item.id == "createoreexcavation:vein_atlas" && item.nbt != null) {
      let exclude = item.nbt[$OreVeinAtlasItem.EXCLUDE]
      exclude.forEach(tag => {
        excludedVein.push(tag.getAsString())
      })
    }
  })
  let blockPosition = player.blockPosition()
  let { first: pos, second: info } = $OreVeinGenerator.getPicker(level).locate(
    blockPosition,
    level,
    MAX_SEARCH_DIST_IN_BLOCK,
    (vein) => excludedVein.indexOf(vein.getId()) == -1
  )
  let distance = Math.floor(Math.sqrt(
    Math.pow(blockPosition.x - pos.x, 2)
    + Math.pow(blockPosition.z - pos.z, 2)
  ))
  const LocalTime = Math.floor((level.time % 24000) * 3.6)
  player.tell(Text.translate("kubejs.message.satellite").color(Color.YELLOW).append(Math.floor((LocalTime / 3600)) + ':' + Math.floor((LocalTime / 60)) % 60 + ':' + Math.floor(LocalTime % 60)))

  player.tell(Text.translate("kubejs.message.nearest_vein").color(Color.GREEN).append(info.getName().color(Color.YELLOW)))
  player.tell(Text.translate("kubejs.message.pos").color(Color.GREEN).append(pos.x + ' ' + pos.z))
  player.tell(Text.translate("kubejs.message.distance").color(Color.GREEN).append(distance))
  player.addItemCooldown(e.item.item, 60)
  server.runCommandSilent(`/execute as ${player.getUsername()} at @s run function dut:particle/scan_set`)
  level.playSound(null, player.x, player.y, player.z, "minecraft:block.note_block.bell", "players", 1, 0.2)
})
//以上代码修改自JSI Production Team

ServerEvents.recipes(event => {
  //塑钢锭
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "heatRequirement": "superheated",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "kubejs:aluminum", "amount": 250 },
      { "fluid": "createbigcannons:molten_steel", "amount": 1000 },
      { "fluid": "kubejs:slime_colloid", "amount": 250 },
      { "item": "createloveandwar:tungsten" },
      { "item": "kubejs:blaze_chlamydia" }
    ],
    "results": [{ "item": "createloveandwar:steel_ingot" }],
    "processingTime": 120
  }).id("dut_create:tools/plastic_steel")
  //动力剑
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": true,
    "key": {
      "B": { "item": "createloveandwar:steel_ingot" },
      "A": { "item": 'create:refined_radiance' },
      "S": { "item": "kubejs:light_composite_plate" },
      "C": { "item": "kubejs:resonant_bacteria" },
      "D": { "item": "kubejs:rocket_gyro" }
    },
    "pattern": [
      "ABA",
      "ABA",
      "ABA",
      "ACA",
      "SDS",
    ],
    "result": { "item": "kubejs:steel_power_sword" }
  }
  ).id("dut_create:steel_power_sword")
  //冲击钻
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": true,
    "key": {
      "A": { "item": "createloveandwar:steel_ingot" },
      "B": { "item": "createloveandwar:steel_sheet" },
      "C": { "item": "kubejs:speed_module_2" },
      "D": { "item": "kubejs:differential" },
      "E": { "item": "kubejs:radiator" }
    },
    "pattern": [
      "  BBE",
      "AAACD",
      " BBB "
    ],
    "result": { "item": "kubejs:steel_impact_drill" }
  }
  ).id("dut_create:steel_impact_drill")
  //火箭剑
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": true,
    "key": {
      "A": { "item": "kubejs:carrier_rocket" },
      "B": { "item": "kubejs:steel_power_sword" },
    },
    "pattern": [
      "A",
      "B"
    ],
    "result": { "item": "kubejs:rocket_sword" }
  }
  ).id("dut_create:rocket_sword")

})
ServerEvents.customCommand('first_vein', e => {
  const { player, level } = e
  const MAX_SEARCH_DIST_IN_BLOCK = 16
  let blockPosition = player.blockPosition()
  let { first: pos, second: info } = $OreVeinGenerator.getPicker(level).locate(
    blockPosition,
    level,
    MAX_SEARCH_DIST_IN_BLOCK,
    (vein) => vein.getId() == "createoreexcavation:ore_vein_type/crude_oil"
  )
  let distance = Math.floor(Math.sqrt(
    Math.pow(blockPosition.x - pos.x, 2)
    + Math.pow(blockPosition.z - pos.z, 2)
  ))
  const LocalTime = Math.floor((level.time % 24000) * 3.6)
  player.tell(Text.translate("kubejs.message.satellite").color(Color.YELLOW).append(Math.floor((LocalTime / 3600)) + ':' + Math.floor((LocalTime / 60)) % 60 + ':' + Math.floor(LocalTime % 60)))

  player.tell(Text.translate("kubejs.message.first_vein").color(Color.GREEN).append(info.getName().color(Color.YELLOW)))
  player.tell(Text.translate("kubejs.message.pos").color(Color.GREEN).append(pos.x + ' ' + pos.z))
  player.tell(Text.translate("kubejs.message.distance").color(Color.GREEN).append(distance))
  level.playSound(null, player.x, player.y, player.z, "minecraft:block.note_block.bell", "players", 1, 0.2)
})
//工程師戰鬥扳手
const battlewrench_type = [
  "{display:{Name:'{\"translate\":\"item.kubejs.battle_wrench\",\"color\":\"aqua\",\"italic\":\"false\"}'},Enchantments: [ { id: \"minecraft:knockback\", lvl: 5s },{ id: \"minecraft:fire_aspect\", lvl: 2s }, { id: \"minecraft:looting\", lvl: 7s }, { id: \"minecraft:fortune\", lvl: 5s } ],AttributeModifiers:[{Slot:\"mainhand\",AttributeName:\"generic.attack_damage\",Name:\"111\",Amount:32,Operation:0,UUID:[I;11451,4,1919,810]},{Slot:\"mainhand\",AttributeName:\"generic.armor\",Name:\"112\",Amount:12,Operation:0,UUID:[I;1145,1419,198,10]}]}",

  "{display:{Name:'{\"translate\":\"item.kubejs.battle_wrench_1\",\"color\":\"aqua\",\"italic\":\"false\"}'},Enchantments: [{ id: \"minecraft:knockback\", lvl: 2s },{ id: \"minecraft:fire_aspect\", lvl: 1s }, { id: \"minecraft:looting\", lvl: 7s }, { id: \"minecraft:fortune\", lvl: 5s } ],AttributeModifiers:[{Slot:\"mainhand\",AttributeName:\"generic.attack_damage\",Name:\"111\",Amount:32,Operation:0,UUID:[I;11451,4,1919,810]},{Slot:\"mainhand\",AttributeName:\"generic.armor\",Name:\"112\",Amount:12,Operation:0,UUID:[I;1145,1419,198,10]}]}",

  "{display:{Name:'{\"translate\":\"item.kubejs.battle_wrench_2\",\"color\":\"aqua\",\"italic\":\"false\"}'},Enchantments: [ { id: \"minecraft:looting\", lvl: 7s }, { id: \"minecraft:fortune\", lvl: 5s } ],AttributeModifiers:[{Slot:\"mainhand\",AttributeName:\"generic.attack_damage\",Name:\"111\",Amount:32,Operation:0,UUID:[I;11451,4,1919,810]},{Slot:\"mainhand\",AttributeName:\"generic.armor\",Name:\"112\",Amount:16,Operation:0,UUID:[I;1145,1419,198,10]},{Slot:\"mainhand\",AttributeName:\"generic.movement_speed\",Name:\"113\",Amount:0.15,Operation:1,UUID:[I;114,5141,919,810]}]}",

  "{display:{Name:'{\"translate\":\"item.kubejs.battle_wrench_3\",\"color\":\"aqua\",\"italic\":\"false\"}'},Enchantments: [ { id: \"minecraft:looting\", lvl: 11s }, { id: \"minecraft:fortune\", lvl: 9s } ],AttributeModifiers:[{Slot:\"mainhand\",AttributeName:\"generic.attack_damage\",Name:\"111\",Amount:32,Operation:0,UUID:[I;11451,4,1919,810]},{Slot:\"mainhand\",AttributeName:\"generic.armor\",Name:\"112\",Amount:8,Operation:0,UUID:[I;1145,1419,198,10]}]}",

  "{display:{Name:'{\"translate\":\"item.kubejs.battle_wrench_4\",\"color\":\"aqua\",\"italic\":\"false\"}'},Enchantments: [ { id: \"minecraft:looting\", lvl: 7s }, { id: \"minecraft:fortune\", lvl: 5s } ],AttributeModifiers:[{Slot:\"mainhand\",AttributeName:\"generic.attack_damage\",Name:\"111\",Amount:32,Operation:0,UUID:[I;11451,4,1919,810]},{Slot:\"mainhand\",AttributeName:\"generic.movement_speed\",Name:\"113\",Amount:0.75,Operation:1,UUID:[I;114,5141,919,810]}]}",

  "{display:{Name:'{\"translate\":\"item.kubejs.battle_wrench_5\",\"color\":\"aqua\",\"italic\":\"false\"}'},Enchantments: [ { id: \"minecraft:looting\", lvl: 7s }, { id: \"minecraft:fortune\", lvl: 5s } ],AttributeModifiers:[{Slot:\"mainhand\",AttributeName:\"generic.attack_damage\",Name:\"111\",Amount:36,Operation:0,UUID:[I;11451,4,1919,810]},{Slot:\"mainhand\",AttributeName:\"generic.armor\",Name:\"112\",Amount:14,Operation:0,UUID:[I;1145,1419,198,10]}]}",

  "{display:{Name:'{\"translate\":\"item.kubejs.battle_wrench_6\",\"color\":\"aqua\",\"italic\":\"false\"}'},Enchantments: [ { id: \"minecraft:looting\", lvl: 15s }, { id: \"minecraft:fortune\", lvl: 5s } ],AttributeModifiers:[{Slot:\"mainhand\",AttributeName:\"generic.attack_damage\",Name:\"111\",Amount:48,Operation:0,UUID:[I;11451,4,1919,810]}]}",

  "{display:{Name:'{\"translate\":\"item.kubejs.battle_wrench_7\",\"color\":\"aqua\",\"italic\":\"false\"}'},AttributeModifiers:[{Slot:\"mainhand\",AttributeName:\"generic.attack_damage\",Name:\"111\",Amount:48,Operation:0,UUID:[I;11451,4,1919,810]},{Slot:\"mainhand\",AttributeName:\"generic.armor\",Name:\"112\",Amount:16,Operation:0,UUID:[I;1145,1419,198,10]},{Slot:\"mainhand\",AttributeName:\"generic.movement_speed\",Name:\"113\",Amount:0.35,Operation:1,UUID:[I;114,5141,919,810]}]}"
]
ServerEvents.recipes(event => {
  function battleWrench(nbt) {
    event.custom({
      "type": "create:sequenced_assembly",
      "ingredient": { "item": "create:wrench" },
      "results": [
        { "item": 'create:wrench', "nbt": nbt }
      ],
      "loops": 1,
      "sequence": [
        {
          "type": "create:deploying",
          "ingredients": [{ "item": "create:wrench" },
          { "item": "kubejs:magenta_circuit_board" }
          ],
          "results": [{ "item": "create:wrench" }]
        },
        {
          "type": "create:deploying",
          "ingredients": [{ "item": "create:wrench" },
          { "item": "kubejs:io_mechanism" }
          ],
          "results": [{ "item": "create:wrench" }]
        },
        {
          "type": "create:deploying",
          "ingredients": [{ "item": "create:wrench" },
          { "item": "kubejs:fluid_mechanism" }
          ],
          "results": [{ "item": "create:wrench" }]
        },
        {
          "type": "create:filling",
          "ingredients": [{ "item": "create:wrench" },
          { "amount": 250, "fluid": "kubejs:brass" }],
          "results": [{ "item": "create:wrench" }]
        }
      ],
      "transitionalItem": { "item": "create:wrench" }
    }).id("dut_create:sequnced_assembly/battle_wrench")
  }
  battleWrench(battlewrench_type[randomOne(0, 7)])
})
