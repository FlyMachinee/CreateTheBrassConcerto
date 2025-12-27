execute as @s[tag=!dut_space_elevator_slowfalling] run data modify entity @s Motion[1] set value -3.60d
execute as @s[tag=!dut_space_elevator_slowfalling] unless block ~ ~-50 ~ air run tag @s add dut_space_elevator_slowfalling
execute as @s[tag=dut_space_elevator_slowfalling,scores={dut_count=..0}] run scoreboard players set @s dut_count 30

execute as @s[tag=dut_space_elevator_slowfalling] at @s run playsound minecraft:entity.firework_rocket.launch voice @a[distance=..16] ~ ~ ~ 0.16 0.4
#反冲
execute as @s[scores={dut_count=2..},tag=dut_space_elevator_slowfalling] run scoreboard players remove @s dut_count 1
execute store result entity @s[scores={dut_count=1..},tag=dut_space_elevator_slowfalling] Motion[1] double -0.12 run scoreboard players get @s dut_count

#卸货
execute store result score @s dut_pos_y run data get entity @s Pos[1]
execute as @s[scores={dut_pos_y=..320}] at @s unless block ~ ~-1 ~ air run function dut:space_elevator/running/output