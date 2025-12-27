execute store result score @s dut_pos_y run data get entity @s Pos[1]
execute if score @s dut_pos_y matches 312.. as @s at @s run fill ~-1 312 ~-3 ~1 313 ~2 air
execute if score @s dut_pos_y matches 312.. as @s at @s run tp @s ~ 312 ~
execute as @s at @s run fill ~-1 ~2 ~-3 ~1 ~3 ~2 air
execute as @s at @s run place template dut:space_ship ~-4 ~ ~-6
execute as @s at @s run setworldspawn ~ ~2 ~
execute as @s at @s run tp ~ ~2 ~
data modify storage dut_create spawnpoint_structure set value "has_been_set"