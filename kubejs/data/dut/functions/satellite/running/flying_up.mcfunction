scoreboard players set @s dut_count 1600
scoreboard players operation @s dut_count -= @s dut_motion_y
scoreboard players add @s[scores={dut_count=0..}] dut_motion_y 12
execute as @s[scores={dut_count=..1420}] at @s run tp @s ~ ~ ~ ~-9 ~
execute store result entity @s Motion[1] double 0.001 run scoreboard players get @s dut_motion_y
execute as @s at @s run playsound ad_astra:gravity_normalizer_idle voice @a[distance=..16] ~ ~ ~ 0.1 1.6 0.1
particle minecraft:soul_fire_flame ~ ~-0.8 ~ 0.1 0.1 0.1 0.01 1 force
particle minecraft:soul_fire_flame ~ ~-0.8 ~ 0.2 0.2 0.2 0.06 3
particle create:steam_jet 2 ~ ~ ~ 0.0 0.0 0.0 0.1 3
execute as @s at @s unless block ~ ~2 ~ air run function dut:satellite/running/explode
scoreboard players add @s dut_time 1
kill @s[scores={dut_time=101..}]
