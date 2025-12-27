scoreboard players add @s dut_time 1
scoreboard players set @s[scores={dut_time=61..}] dut_time 1

execute unless block ~ ~ ~ create:chute run scoreboard players reset @s dut_time
execute unless block ~ ~ ~ create:chute run tag @s add dut_elevator_string_unset
#
execute as @s at @s[scores={dut_time=21}] run summon armor_stand ~ ~5.5 ~ {Invisible:1b,Invulnerable:1b,Tags:["dut_elevator_paricle_1"]}