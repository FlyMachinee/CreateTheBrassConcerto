const ItemDiscard = Java.loadClass("net.minecraftforge.event.entity.item.ItemExpireEvent")
NativeEvents.onEvent(ItemDiscard, event => {
    if (event.entity.block.biomeId != "ad_astra:orbit") {
        return
    }
    if (event.entity.nbt?.PickupDelay == 32767) {
        return
    }
    let random1 = Math.random() * 0.25 - 0.125
    let random3 = Math.random() * 0.25 - 0.125
    event.entity.server.runCommandSilent(`execute as ${event.entity.uuid.toString()} at @s positioned ~ 356 ~ run summon armor_stand ~ ~ ~ {Tags:["dut_meteorite"],Motion:[${random1}d,-4.8d,${random3}d],Invisible:1b,DisabledSlots:4144896,Invulnerable:0b,ArmorItems:[{},{},{},{Count:1b,id:"minecraft:structure_block",tag:{}}]}`)
})
NativeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEvent$LivingTickEvent', event => {
    if (event.entity.type != "minecraft:armor_stand") {
        return
    }
    if (event.entity.tags.contains("dut_airdrop")) {
        event.entity.server.runCommandSilent(`execute as ${event.entity.uuid.toString()} at @s run function dut:tick/airdrop`)
    }
    if (event.entity.tags.contains("dut_carrier_rocket")) {
        event.entity.server.runCommandSilent(`execute as ${event.entity.uuid.toString()} at @s run function dut:tick/carrier_rocket`)
    }
    if (event.entity.tags.contains("dut_carrier_rocket_launch")) {
        event.entity.server.runCommandSilent(`execute as ${event.entity.uuid.toString()} at @s run function dut:carrier_rocket/running/fire0`)
    }
    if (event.entity.tags.contains("dut_satellite")) {
        event.entity.server.runCommandSilent(`execute as ${event.entity.uuid.toString()} at @s run function dut:tick/satellite`)
    }
    if (event.entity.tags.contains("dut_space_elevator")) {
        event.entity.server.runCommandSilent(`execute as ${event.entity.uuid.toString()} at @s run function dut:tick/space_elevator`)
    }
    if (event.entity.tags.contains("dut_meteorite")) {
        event.entity.server.runCommandSilent(`execute as ${event.entity.uuid.toString()} at @s run function dut:tick/meteorite`)
    }
})