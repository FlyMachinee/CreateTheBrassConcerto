#太空电梯
scoreboard players remove @s[tag=dut_space_elevator_up,scores={dut_delay=1..}] dut_delay 1
execute as @s[tag=dut_space_elevator_up,scores={dut_delay=1}] at @s run function dut:space_elevator/running/fire
execute as @s[tag=dut_space_elevator_up,scores={dut_delay=..0}] at @s run function dut:space_elevator/running/flying_up
execute as @s[tag=dut_space_elevator_down] at @s run function dut:space_elevator/running/flying_down
execute as @s[tag=dut_space_elevator_back] at @s run function dut:space_elevator/running/flying_back
scoreboard players add @s dut_clear_time 1
kill @s[scores={dut_clear_time=6001..}]