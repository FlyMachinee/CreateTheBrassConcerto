scoreboard players set @s dut_count 6400
scoreboard players operation @s dut_count -= @s dut_motion_y
scoreboard players add @s[scores={dut_count=0..}] dut_motion_y 64
execute store result entity @s Motion[1] double 0.001 run scoreboard players get @s dut_motion_y
execute as @s[scores={dut_motion_y=3201..}] at @s run fill ~2 ~2 ~2 ~-2 ~1 ~-2 air
execute as @s at @s run particle create:steam_jet 2 ~2.15 ~ ~2.15 0.05 0.05 0.05 0.1 1 force
execute as @s at @s run particle create:steam_jet 2 ~2.15 ~ ~-2.15 0.05 0.05 0.05 0.1 1 force
execute as @s at @s run particle create:steam_jet 2 ~-2.15 ~ ~2.15 0.05 0.05 0.05 0.1 1 force
execute as @s at @s run particle create:steam_jet 2 ~-2.15 ~ ~-2.15 0.05 0.05 0.05 0.1 1 force
scoreboard players add @s dut_time 1

execute store result score @s dut_pos_y run data get entity @s Pos[1]
execute as @s[scores={dut_pos_y=600..}] at @s run function dut:space_elevator/running/transport
