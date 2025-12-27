scoreboard players add @s dut_time 1
#
execute as @s[scores={dut_time=2}] run data merge entity @s {start_interpolation:0,interpolation_duration:180,transformation:{translation:[-0.25f,512f,-0.25f]}}
execute as @s[scores={dut_time=1}] at @s run playsound entity.generic.explode block @a ~ ~ ~ 0.6 0.6
execute as @s[scores={dut_time=1}] at @s run fill ~ ~ ~ ~ ~8 ~ air destroy
execute as @s[scores={dut_time=1}] at @s run particle explosion ~ ~ ~ 0.0 0.0 0.0 0 1 force

execute as @s[scores={dut_time=182..}] run kill @s
