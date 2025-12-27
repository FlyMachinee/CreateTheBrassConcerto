scoreboard players remove @s[scores={dut_count6=1..}] dut_count6 10
execute as @s[scores={dut_count6=0}] run particle minecraft:dust_color_transition 0.161 0.902 0.42 1.0 0.961 1 0.961 ~ ~0.1 ~ 0.0000 0.0000 0.0000 0.02 1 force
#particle minecraft:dust_color_transition 1.0 3.0 1.0 1.0 1.0 1.0 1.0 ~ ~ ~ 0.0000 0.0000 0.0000 0.02 1 force
#particle minecraft:dust 1.0 1.0 1.2 1.0 ~ ~ ~ 0.0000 0.0000 0.0000 0.02 1 force

execute as @s[scores={dut_count6=1..,dut_count2=..11}] positioned ^ ^ ^0.20000 run function dut:particle/scan_range_particle
