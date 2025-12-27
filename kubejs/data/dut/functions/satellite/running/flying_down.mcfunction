scoreboard players operation @s[scores={dut_motion_y=121..}] dut_motion_y -= @s dut_acceleration_y
execute as @s[scores={dut_motion_y=121..}] at @s run playsound ad_astra:gravity_normalizer_idle voice @a[distance=..16] ~ ~ ~ 0.1 1.6 0.1
execute as @s[scores={dut_motion_y=121..}] run particle minecraft:soul_fire_flame ~ ~-0.8 ~ 0.1 0.1 0.1 0.01 1 force
execute as @s[scores={dut_motion_y=121..}] run particle minecraft:soul_fire_flame ~ ~-0.8 ~ 0.2 0.2 0.2 0.06 3
execute as @s[scores={dut_motion_y=121..}] run execute as @s run particle create:steam_jet 2 ~ ~ ~ 0.0 0.0 0.0 0.1 3