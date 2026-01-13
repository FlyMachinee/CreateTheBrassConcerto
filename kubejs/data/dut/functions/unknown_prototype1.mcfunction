particle minecraft:end_rod ~ ~ ~ 0.0 0.0 0.0 0.15 8
particle minecraft:soul_fire_flame ~ ~0.25 ~ 0.0 0.0 0.0 0.15 32
data modify entity @s Steps set value 60
tag @s add dut_shulker
execute as @s run function dut:shulker_bullet/change_to_up