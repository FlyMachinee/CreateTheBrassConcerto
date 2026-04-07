execute store result score @s dut_pos_y run data get entity @s Pos[1]
execute as @s[scores={dut_pos_y=580..}] at @s run ride @e[tag=dut_rocket_passengers,distance=..24,limit=1,sort=nearest] mount @s

execute store result entity @s[tag=!dut_carrier_rocket_recoil] Motion[1] double -0.001 run scoreboard players get @s dut_motion_y
execute as @s[tag=!dut_carrier_rocket_recoil] unless block ~ ~-155 ~ air run tag @s add dut_carrier_rocket_recoil
#卸货
execute as @s[scores={dut_pos_y=..320},tag=dut_carrier_rocket_recoil] at @s unless block ~ ~-1 ~ air run function dut:carrier_rocket/running/output