execute if block ~ ~ ~ kubejs:redstone_radar run function dut:pos_transport/get_data
execute positioned ~ ~ ~ summon marker run function dut:redstone_radar/working
particle minecraft:shriek 4 ~ ~0.75 ~
playsound minecraft:block.enchantment_table.use block @a[distance=..16] ~ ~-12.5 ~ 1.2 0.5 0.8