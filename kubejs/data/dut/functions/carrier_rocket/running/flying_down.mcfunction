scoreboard players operation @s[scores={dut_motion_y=241..}] dut_motion_y -= @s dut_acceleration_y
execute store result entity @s Motion[1] double -0.001 run scoreboard players get @s dut_motion_y
execute as @s[scores={dut_motion_y=241..}] run playsound minecraft:block.fire.extinguish voice @a ~ ~-12.8 ~ 0.5 1.6
execute as @s[scores={dut_motion_y=241..}] run playsound minecraft:block.fire.extinguish voice @a ~ ~-0.8 ~ 0.3 0.4
execute as @s[scores={dut_motion_y=241..}] run particle minecraft:soul_fire_flame ~ ~-0.8 ~ 0.1 0.1 0.1 0.01 1 force
execute as @s[scores={dut_motion_y=241..}] run particle minecraft:soul_fire_flame ~ ~-0.8 ~ 0.2 0.2 0.2 0.06 3 force
execute as @s run particle createbigcannons:shrapnel_smoke 30 ~ ~ ~ 0.75 0.75 0.75 0.125 1 force
execute as @s run particle minecraft:flame ~ ~ ~ 0.5 0.5 0.5 0.125 1 force
execute as @s[scores={dut_motion_y=241..}] run particle minecraft:cloud ~ ~-0.8 ~ 0.1 0.1 0.1 0.04 6 force
execute as @s run particle create:steam_jet 2 ^-0.67 ^-0.3 ^ 0.0 0.0 0.0 0.1 1 force
execute as @s run particle create:steam_jet 2 ^0.67 ^-0.3 ^ 0.0 0.0 0.0 0.1 1 force