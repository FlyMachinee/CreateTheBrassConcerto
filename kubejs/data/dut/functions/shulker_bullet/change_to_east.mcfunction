data modify entity @s TXD set value 0.13d
data modify entity @s TYD set value 0.0d
data modify entity @s TZD set value 0.0d
data modify entity @s Motion[0] set value 0.15d
data modify entity @s Motion[1] set value 0.0d
data modify entity @s Motion[2] set value 0.0d
data modify entity @s Steps set value 60
scoreboard players remove @s[scores={dut_time=20..}] dut_time 20
scoreboard players add @s dut_count 1

tag @s remove dut_shulker_up
tag @s remove dut_shulker_north
tag @s remove dut_shulker_west
tag @s remove dut_shulker_south
#tag @s remove dut_shulker_east
tag @s remove dut_shulker_down
tag @s add dut_shulker_east