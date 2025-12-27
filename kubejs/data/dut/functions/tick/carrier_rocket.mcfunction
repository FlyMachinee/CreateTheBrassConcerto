#运载火箭
scoreboard players remove @s[tag=dut_carrier_rocket_up,scores={dut_delay=1..}] dut_delay 1
execute as @s[tag=dut_carrier_rocket_up,scores={dut_delay=1}] at @s run function dut:carrier_rocket/running/fire
execute as @s[tag=dut_carrier_rocket_up,scores={dut_delay=..0}] at @s run function dut:carrier_rocket/running/flying_up
execute as @s[tag=dut_carrier_rocket_down] at @s run function dut:carrier_rocket/running/flying_down_check
execute as @s[tag=dut_carrier_rocket_recoil] at @s run function dut:carrier_rocket/running/flying_down
scoreboard players add @s dut_clear_time 1
execute as @s[scores={dut_clear_time=6001..}] at @s run function dut:carrier_rocket/running/output