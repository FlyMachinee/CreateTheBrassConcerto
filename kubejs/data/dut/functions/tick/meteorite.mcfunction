execute if biome ~ ~ ~ ad_astra:orbit run data modify entity @s Motion[1] set value -4.8d
#粒子效果
execute as @s at @s anchored eyes run particle lava ~ ~ ~ 0.1 0.1 0.1 0 2
execute as @s at @s anchored eyes run particle flame ~ ~ ~ 0.1 0.1 0.1 0.12 6
execute as @s at @s anchored eyes run particle soul ~ ~ ~ 0.1 0.1 0.1 0.1 3
execute as @s at @s anchored eyes run particle soul_fire_flame ~ ~ ~ 0.1 0.1 0.1 0.2 9
execute as @s at @s anchored eyes run particle smoke ~ ~ ~ 0.2 0.2 0.2 0.1 6
execute as @s at @s anchored eyes run particle large_smoke ~ ~ ~ 0.1 0.1 0.1 0.1 1
#无视水与岩浆
execute as @s at @s run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air replace water
execute as @s at @s run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air replace lava
#触地
execute as @s[nbt={OnGround:1b}] run tag @s add sdp1_onground
execute as @s[tag=sdp1_onground] at @s run function dut:meteorite_hit