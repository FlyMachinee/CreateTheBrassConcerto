execute as @s[tag=!dut_shulker_up] if block ~ ~-1 ~ minecraft:purpur_block run function dut:shulker_bullet/change_to_up
execute as @s[tag=!dut_shulker_north] if block ~ ~ ~1 minecraft:purpur_block run function dut:shulker_bullet/change_to_north
execute as @s[tag=!dut_shulker_west] if block ~1 ~ ~ minecraft:purpur_block run function dut:shulker_bullet/change_to_west
execute as @s[tag=!dut_shulker_south] if block ~ ~ ~-1 minecraft:purpur_block run function dut:shulker_bullet/change_to_south
execute as @s[tag=!dut_shulker_east] if block ~-1 ~ ~ minecraft:purpur_block run function dut:shulker_bullet/change_to_east
execute as @s[tag=!dut_shulker_down] if block ~ ~1 ~ minecraft:purpur_block run function dut:shulker_bullet/change_to_down