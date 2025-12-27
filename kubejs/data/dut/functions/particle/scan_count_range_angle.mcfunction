scoreboard players add @s dut_count2 1

scoreboard players operation @s dut_count3 *= @s dut_count5
scoreboard players add @s dut_count5 20
scoreboard players operation @s dut_count3 /= @s dut_count5

data modify entity @s Rotation[0] set value -180.0000f
execute as @s at @s run function dut:particle/scan_rotation

scoreboard players operation @s dut_count3 *= @s dut_count5
scoreboard players add @s dut_count5 20
scoreboard players operation @s dut_count3 /= @s dut_count5

data modify entity @s Rotation[0] set value -180.0000f
execute as @s at @s run function dut:particle/scan_rotation

kill @s[scores={dut_count2=11..}]