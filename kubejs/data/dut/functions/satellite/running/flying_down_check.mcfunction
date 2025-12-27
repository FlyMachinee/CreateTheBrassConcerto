execute store result entity @s[tag=!dut_satellite_recoil] Motion[1] double -0.001 run scoreboard players get @s dut_motion_y
execute as @s at @s run tp @s ~ ~ ~ ~-9 ~
execute store result entity @s Motion[1] double -0.001 run scoreboard players get @s dut_motion_y
execute as @s[tag=!dut_satellite_recoil] unless block ~ ~-36 ~ air run tag @s add dut_satellite_recoil
execute as @s[tag=dut_satellite_recoil] unless block ~ ~-1 ~ air run function dut:satellite/running/output