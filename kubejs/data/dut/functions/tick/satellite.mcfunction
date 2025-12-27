#卫星
scoreboard players remove @s[tag=dut_satellite_up,scores={dut_delay=1..}] dut_delay 1
execute as @s[tag=dut_satellite_up,scores={dut_delay=1}] at @s run function dut:satellite/running/fire
execute as @s[tag=dut_satellite_up,scores={dut_delay=..0}] at @s run function dut:satellite/running/flying_up
execute as @s[tag=dut_satellite_down] at @s run function dut:satellite/running/flying_down_check
execute as @s[tag=dut_satellite_recoil] at @s run function dut:satellite/running/flying_down