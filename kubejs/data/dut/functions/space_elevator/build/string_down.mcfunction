scoreboard players add @s dut_time 1
#
execute as @s[scores={dut_time=1}] run data merge entity @s {start_interpolation:0,interpolation_duration:120,transformation:{translation:[-0.25f,40f,-0.25f]}}
execute as @s[scores={dut_time=121}] run data merge entity @s {start_interpolation:0,interpolation_duration:100,transformation:{translation:[-0.25f,8f,-0.25f]}}
execute as @s[scores={dut_time=121}] run playsound createaddition:tesla_coil block @a ~ ~1.5 ~ 0.5 0.6 0.3
execute as @s[scores={dut_time=221}] run data merge entity @s {start_interpolation:0,interpolation_duration:80,transformation:{translation:[-0.25f,1f,-0.25f]}}

execute as @s[scores={dut_time=241}] run playsound minecraft:block.grindstone.use block @a ~ ~1.5 ~ 1.2 0.8 0.8
execute as @s[scores={dut_time=241..311}] run particle minecraft:smoke ~ ~4 ~ 0.75 1.5 0.75 0.06 4
execute as @s[scores={dut_time=261}] run playsound minecraft:block.grindstone.use block @a ~ ~1.5 ~ 1.2 0.75 0.8
execute as @s[scores={dut_time=281}] run playsound minecraft:block.grindstone.use block @a ~ ~1.5 ~ 1.2 0.7 0.8
execute as @s[scores={dut_time=301}] run playsound minecraft:block.lava.extinguish block @a ~ ~1.5 ~ 1 0.8 0.8
execute as @s[scores={dut_time=301}] run playsound minecraft:block.lava.extinguish block @a ~ ~1.5 ~ 1 0.8 0.8
execute as @s[scores={dut_time=301}] run particle poof ~ ~3.5 ~ 0.5 0.5 0.5 0.08 24

execute as @s[scores={dut_time=301}] run setblock ~ ~ ~ create:chute

execute as @s[scores={dut_time=301}] run summon armor_stand ~ ~5.5 ~ {Invisible:1b,Invulnerable:1b,Tags:["dut_elevator_paricle"]}
execute as @s[scores={dut_time=331}] run summon armor_stand ~ ~5.5 ~ {Invisible:1b,Invulnerable:1b,Tags:["dut_elevator_paricle"]}
execute as @s[scores={dut_time=361}] run summon armor_stand ~ ~5.5 ~ {Invisible:1b,Invulnerable:1b,Tags:["dut_elevator_paricle"]}
execute as @s[scores={dut_time=391}] run summon armor_stand ~ ~5.5 ~ {Invisible:1b,Invulnerable:1b,Tags:["dut_elevator_paricle"]}
execute as @s[scores={dut_time=421}] run summon armor_stand ~ ~5.5 ~ {Invisible:1b,Invulnerable:1b,Tags:["dut_elevator_paricle"]}
execute as @s[scores={dut_time=422..}] run tag @s remove dut_elevator_string0
execute as @s[scores={dut_time=422..}] run tag @s add dut_elevator_string