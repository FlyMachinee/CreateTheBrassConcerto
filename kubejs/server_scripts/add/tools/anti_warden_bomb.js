ServerEvents.recipes(event => {
  function AntiWardenBombFluid(fluid, amount) {
    return ({
      "type": "custommachinery:fluid",
      "mode": "input",
      "fluid": fluid,
      "amount": amount
    })
  }

  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
        "A": { "item": "create:mechanical_press" },
        "B": { "item": "create:peculiar_bell" },
        "C": { "item": "supplementaries:speaker_block" }
    },
    "pattern": [
        "A",
        "B",
        "C"
    ],
    "result": { "item": "kubejs:anti_warden_bomb" },
    "show_notification": true
}).id("dut_create:anti_warden_bomb")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:anti_warden_bomb",
    "time": 120,
    "hidden": true,
    "requirements": [
      {
        "type": "custommachinery:command",
        "phase": "starting",
        "command": "/particle minecraft:flash ~ ~ ~ 0.0 0.0 0.0 1 0 force",
        "log": false,
        "permissionlevel": 5
      },
      {
        "type": "custommachinery:command",
        "phase": "starting",
        "command": "/particle createbigcannons:shrapnel_cloud ~ ~ ~ 2.5 2.5 2.5 0.1 8 force",
        "log": false,
        "permissionlevel": 5
      },
      {
        "type": "custommachinery:command",
        "phase": "starting",
        "command": "/particle createbigcannons:shrapnel_cloud ~ ~- ~ 0.5 0.5 0.5 0.1 3 force",
        "log": false,
        "permissionlevel": 5
      },
      {
        "type": "custommachinery:command",
        "phase": "starting",
        "command": "/playsound createbigcannons:fire_big_cannon block @a[distance=..64] ~ ~ ~ 2 1.2",
        "log": false,
        "permissionlevel": 5
      },
      {
        "type": "custommachinery:command",
        "phase": "starting",
        "command": "/execute as @e[type=warden,distance=..64] at @s run function dut:kill_warden",
        "log": false,
        "permissionlevel": 5
      },
      {
        "type": "custommachinery:command",
        "phase": "starting",
        "command": "/fill ~23 ~6 ~23 ~-23 ~-6 ~-23 air replace minecraft:sculk_shrieker",
        "log": false,
        "permissionlevel": 5
      },
      {
        "type": "custommachinery:command",
        "phase": "starting",
        "command": "/effect clear @a[distance=..64] minecraft:darkness",
        "log": false,
        "permissionlevel": 5
      },
      AntiWardenBombFluid("minecraft:water", 4000)
    ]
  }).id("dut_create:anti_warden_bomb/booooom")
})