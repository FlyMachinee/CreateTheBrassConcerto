execute as @s[tag=!dut_space_elevator_slowfalling] run data modify entity @s Motion[1] set value -3.60d
execute as @s[tag=!dut_space_elevator_slowfalling] unless block ~ ~-80 ~ air run scoreboard players set @s dut_count 30
execute as @s[tag=!dut_space_elevator_slowfalling] unless block ~ ~-80 ~ air run tag @s add dut_space_elevator_slowfalling

#反冲
execute as @s[scores={dut_count=6..},tag=dut_space_elevator_slowfalling] run scoreboard players remove @s dut_count 1
execute store result entity @s[scores={dut_count=5..},tag=dut_space_elevator_slowfalling] Motion[1] double -0.12 run scoreboard players get @s dut_count

execute as @s[tag=dut_space_elevator_slowfalling] at @s run particle create:steam_jet 2 ~2.15 ~ ~2.15 0.05 0.05 0.05 0.1 1 force
execute as @s[tag=dut_space_elevator_slowfalling] at @s run particle create:steam_jet 2 ~2.15 ~ ~-2.15 0.05 0.05 0.05 0.1 1 force
execute as @s[tag=dut_space_elevator_slowfalling] at @s run particle create:steam_jet 2 ~-2.15 ~ ~2.15 0.05 0.05 0.05 0.1 1 force
execute as @s[tag=dut_space_elevator_slowfalling] at @s run particle create:steam_jet 2 ~-2.15 ~ ~-2.15 0.05 0.05 0.05 0.1 1 force


execute as @s at @s unless block ~ ~-1 ~ air run function dut:space_elevator/running/output_down