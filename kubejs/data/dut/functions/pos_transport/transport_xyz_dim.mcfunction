execute store result entity @s Pos[0] double 0.1 run scoreboard players get @s dut_target_x
execute store result entity @s Pos[1] double 0.1 run scoreboard players get @s dut_target_y
execute store result entity @s Pos[2] double 0.1 run scoreboard players get @s dut_target_z

execute as @s[scores={dut_target_dim=1}] at @s in minecraft:overworld summon minecraft:marker run function dut:redstone_radar/switch_lamp
execute as @s[scores={dut_target_dim=2}] at @s in minecraft:the_nether summon minecraft:marker run function dut:redstone_radar/switch_lamp
execute as @s[scores={dut_target_dim=3}] at @s in minecraft:the_end summon minecraft:marker run function dut:redstone_radar/switch_lamp
execute as @s[scores={dut_target_dim=4}] at @s in ad_astra:earth_orbit summon minecraft:marker run function dut:redstone_radar/switch_lamp
execute as @s[scores={dut_target_dim=5}] at @s in ad_astra:moon summon minecraft:marker run function dut:redstone_radar/switch_lamp
execute as @s[scores={dut_target_dim=6}] at @s in ad_astra:moon_orbit summon minecraft:marker run function dut:redstone_radar/switch_lamp
execute as @s[scores={dut_target_dim=7}] at @s in dut:slimeria summon minecraft:marker run function dut:redstone_radar/switch_lamp
execute as @s[scores={dut_target_dim=8}] at @s in dut:slimeria_orbit summon minecraft:marker run function dut:redstone_radar/switch_lamp
