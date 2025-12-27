#空投舱
scoreboard players remove @s[scores={dut_delay=1..}] dut_delay 1
execute as @s[scores={dut_delay=1}] at @s run function dut:airdrop/fire
execute as @s[scores={dut_delay=..0}] at @s run function dut:airdrop/flying_down
scoreboard players add @s dut_clear_time 1
execute as @s[scores={dut_clear_time=6001..}] at @s run function dut:airdrop/output
