NativeEvents.onEvent("highest", true, $LivingDeath, e => {
    /**@type {Internal.LivingDeathEvent} */
    let event = e
    /**@type {Internal.Entity} */
    let entity = event.entity
    if (entity.type == "minecraft:ender_dragon") {
        entity.server.runCommandSilent(`/execute in ${entity.level.dimension.toString()} run summon item ${entity.x} ${entity.y} ${entity.z} {Glowing:1b,NoGravity:1b,Invulnerable:1b,Item:{id:"kubejs:phantom_fungus",Count:${randomOne(3, 9).toString()}b}}`)
    }
    if (!entity.isPlayer()) { return }
    /**@type {Internal.ServerPlayer} */
    let player = entity
    player.persistentData.needRespawn = true
    player.persistentData.FreeCaming = false
    player.addItemCooldown("kubejs:unknown_prototype", 20)

    if (player.y <= player.level.dimensionType().minY() - 64) {
        player.y = 0
    }
    let LastPoint = player.persistentData.teleport.lastpoint
    LastPoint.pos = {}
    LastPoint.pos.x = player.x
    LastPoint.pos.y = player.y
    LastPoint.pos.z = player.z
    LastPoint.dimension = player.level.dimension.toString()

    player.setGameMode("spectator")
    player.setHealth(player.maxHealth)
    player.respawn()
    player.potionEffects.clear()
    player.server.tell(event.getSource().getLocalizedDeathMessage(player))
    player.setStatusMessage(Text.translate("kubejs.message.redeploy_tips"))
    event.setCanceled(true)
})
ServerEvents.recipes(event => {
  //末影龙龙蛋
  event.custom({
    "type": "create:haunting",
    "ingredients": [
      { "item": "minecraft:dragon_egg" }
    ],
    "results": [
      { "item": "minecraft:dragon_head", "count": 16 }
    ]
  }).id('dut_create:ender_dragon/dragon_head')
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "kubejs:nitric_acid", "amount": 1000 },
      { "item": "kubejs:phantom_fungus" },
      { "item": "minecraft:netherite_scrap" }
    ],
    "results": [
      { "item": "minecraft:dragon_breath", "count": 4 },
      { "item": "kubejs:phantom_fungus" }
    ],
    "processingTime": 30
  }).id('dut_create:ender_dragon/dragon_breath')
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "minecraft:egg" },
    "results": [
      { "item": "minecraft:dragon_egg", "chance": 0.125 },
      { "item": "minecraft:egg", "chance": 0.875 }
    ],
    "loops": 8,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "minecraft:egg" },
        { "item": "minecraft:netherite_scrap" }],
        "results": [{ "item": "minecraft:egg" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "minecraft:egg" },
        { "item": "minecraft:dragon_breath"}],
        "results": [{ "item": "minecraft:egg" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "minecraft:egg" },
        { "item": "minecraft:dragon_breath"}],
        "results": [{ "item": "minecraft:egg" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "minecraft:egg" },
        { "item": "minecraft:dragon_breath"}],
        "results": [{ "item": "minecraft:egg" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:egg" },
        { "fluid": "kubejs:nitric_acid", "amount": 250 }],
        "results": [{ "item": "minecraft:egg" }]
      }
    ],
    "transitionalItem": { "item": "minecraft:egg" }
  }).id("dut_create:ender_dragon/dragon_egg")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "minecraft:dragon_egg" },
    "results": [
      { "item": "minecraft:dragon_egg", "count": 12 },
    ],
    "loops": 1,
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "minecraft:dragon_egg" },
        { "item": "minecraft:dragon_breath"}],
        "results": [{ "item": "minecraft:dragon_egg" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "minecraft:dragon_egg" },
        { "item": "minecraft:dragon_breath"}],
        "results": [{ "item": "minecraft:dragon_egg" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "minecraft:dragon_egg" },
        { "item": "minecraft:dragon_egg" }],
        "results": [{ "item": "minecraft:dragon_egg" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "minecraft:dragon_egg" },
        { "fluid": "kubejs:nitric_acid", "amount": 250 }],
        "results": [{ "item": "minecraft:dragon_egg" }]
      }
    ],
    "transitionalItem": { "item": "minecraft:dragon_egg" }
  }).id("dut_create:ender_dragon/dragon_egg2")
})