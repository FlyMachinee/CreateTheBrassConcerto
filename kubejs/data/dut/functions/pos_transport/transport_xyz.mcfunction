execute store result entity @s Pos[0] double 0.1 run scoreboard players get @s dut_target_x
execute store result entity @s Pos[1] double 0.1 run scoreboard players get @s dut_target_y
execute store result entity @s Pos[2] double 0.1 run scoreboard players get @s dut_target_z

tag @s remove dut_has_target