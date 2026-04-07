scoreboard players set @s dut_count 6400
scoreboard players operation @s dut_count -= @s dut_motion_y
scoreboard players operation @s[scores={dut_count=..6280}] dut_motion_y += @s dut_acceleration_y
scoreboard players add @s[scores={dut_count=6281..6370}] dut_motion_y 5
scoreboard players add @s[scores={dut_count=6371..}] dut_motion_y 2
scoreboard players set @s[scores={dut_motion_y=6401..}] dut_motion_y 6400
execute store result entity @s Motion[1] double 0.001 run scoreboard players get @s dut_motion_y
playsound minecraft:block.fire.extinguish voice @a ~ ~-8.8 ~ 0.5 1.6
particle minecraft:soul_fire_flame ~ ~-0.8 ~ 0.1 0.1 0.1 0.01 1 force
particle minecraft:soul_fire_flame ~ ~-0.8 ~ 0.2 0.2 0.2 0.06 3 force
particle createbigcannons:shrapnel_cloud ~ ~-2.6 ~ 0.1 0.1 0.1 0.04 1 force
particle create:steam_jet 2 ^-0.67 ^-0.3 ^ 0.0 0.0 0.0 0.1 1 force
particle create:steam_jet 2 ^0.67 ^-0.3 ^ 0.0 0.0 0.0 0.1 1 force
execute store result score @s dut_pos_y run data get entity @s Pos[1]
execute as @s[scores={dut_pos_y=600..}] at @s run function dut:carrier_rocket/running/transport