scoreboard players add @s dut_time 1
#
execute as @s[scores={dut_time=1}] run data merge entity @s {start_interpolation:0,interpolation_duration:120,transformation:{translation:[-0.5f,40f,-0.5f]}}
execute as @s[scores={dut_time=121}] run data merge entity @s {start_interpolation:0,interpolation_duration:100,transformation:{translation:[-0.5f,8f,-0.5f]}}
execute as @s[scores={dut_time=221}] run data merge entity @s {start_interpolation:0,interpolation_duration:80,transformation:{translation:[-0.5f,-0.5f,-0.5f]}}

execute as @s[scores={dut_time=301}] run setblock ~ ~ ~ kubejs:carbon_electrode destroy
execute as @s[scores={dut_time=311},tag=!dut_elevator_string_knot1] run setblock ~ ~1 ~ create:gantry_shaft[facing=up] destroy
execute as @s[scores={dut_time=321},tag=!dut_elevator_string_knot1] run setblock ~ ~2 ~ create:gantry_shaft[facing=up] destroy
kill @s[scores={dut_time=321..}]