scoreboard players operation @s dut_count6 = @s dut_count5
execute store result score @s dut_count4 run data get entity @s Rotation[0] 1000
scoreboard players operation @s dut_count4 += @s dut_count3
scoreboard players set @s[scores={dut_count4=180001..}] dut_count4 180000
execute store result entity @s Rotation[0] float 0.001 run scoreboard players get @s dut_count4
execute as @s at @s rotated as @s[scores={dut_count4=..179999}] run function dut:particle/scan_range_particle


execute as @s[scores={dut_count4=..179999,dut_count2=..11}] at @s run function dut:particle/scan_rotation