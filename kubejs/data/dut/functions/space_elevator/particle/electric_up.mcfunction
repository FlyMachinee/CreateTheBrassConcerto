scoreboard players add @s dut_time 1
#
data modify entity @s Motion[1] set value 0.8d
execute as @s run particle electric_spark ~ ~ ~ 0.15 0.75 0.15 0.04 4 force
kill @s[scores={dut_time=200..}]