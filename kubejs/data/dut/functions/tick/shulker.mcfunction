scoreboard players add @s dut_time 1
kill @s[scores={dut_time=321..}]
kill @s[scores={dut_count=17..}]
execute as @s[scores={dut_time=1}] at @s run data modify entity @s Target set from entity @s UUID
execute as @s[tag=dut_shulker_up] at @s run function dut:shulker_bullet/change_direction/up
execute as @s[tag=dut_shulker_down] at @s run function dut:shulker_bullet/change_direction/down
execute as @s[tag=dut_shulker_east] at @s run function dut:shulker_bullet/change_direction/east
execute as @s[tag=dut_shulker_west] at @s run function dut:shulker_bullet/change_direction/west
execute as @s[tag=dut_shulker_south] at @s run function dut:shulker_bullet/change_direction/south
execute as @s[tag=dut_shulker_north] at @s run function dut:shulker_bullet/change_direction/north