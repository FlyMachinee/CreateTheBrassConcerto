scoreboard players add @s dut_time 1


execute as @s[scores={dut_time=..400}] at @s run particle create:steam_jet 2 ~2.15 ~ ~2.15 0.05 0.05 0.05 0.1 1 force
execute as @s[scores={dut_time=..400}] at @s run particle create:steam_jet 2 ~2.15 ~ ~-2.15 0.05 0.05 0.05 0.1 1 force
execute as @s[scores={dut_time=..400}] at @s run particle create:steam_jet 2 ~-2.15 ~ ~2.15 0.05 0.05 0.05 0.1 1 force
execute as @s[scores={dut_time=..400}] at @s run particle create:steam_jet 2 ~-2.15 ~ ~-2.15 0.05 0.05 0.05 0.1 1 force
#
execute as @s[scores={dut_time=1..320}] at @s run fill ~2 ~2 ~2 ~-2 ~-8 ~-2 air destroy
execute as @s[scores={dut_time=361..400}] at @s run data modify entity @s Motion[1] set value -0.8d
execute as @s[scores={dut_time=401..}] at @s run data modify entity @s Motion[1] set value -0.4d
execute as @s[scores={dut_time=501..}] at @s run data modify entity @s Motion[1] set value -0.2d
execute as @s[scores={dut_time=521}] as @a at @s run playsound minecraft:block.enchantment_table.use block @a ~ ~-12.5 ~ 1.2 0.75 0.8

execute as @s at @s unless block ~ ~-1 ~ air run function dut:space_elevator/running/output_down

kill @s[scores={dut_time=700..}]