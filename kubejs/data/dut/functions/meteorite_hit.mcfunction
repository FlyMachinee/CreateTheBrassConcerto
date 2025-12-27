execute as @s at @s run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air
execute as @s at @s run particle explosion ~ ~ ~ 0 0 0 0 1 force
execute as @s at @s run playsound entity.generic.explode block @a ~ ~ ~ 0.6
execute as @s at @s run execute as @a[distance=..8] run function dut:player_hitted
execute as @s at @s run place feature minecraft:sculk_patch_deep_dark ~ ~-1 ~
execute as @s at @s run place feature minecraft:sculk_vein ~ ~-1 ~
execute as @s at @s run kill @e[type=item,distance=..24]

kill @s