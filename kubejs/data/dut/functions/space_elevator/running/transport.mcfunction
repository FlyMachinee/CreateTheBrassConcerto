tag @s remove dut_space_elevator_up
item replace entity @s armor.head with kubejs:airdrop
tag @s add dut_space_elevator_down
execute as @s at @s run function dut:space_elevator/set_elevator_0_back

execute if dimension minecraft:overworld in ad_astra:earth_orbit run tp @s ~ ~ ~
execute if dimension minecraft:the_end in ad_astra:earth_orbit run tp @s ~ ~ ~
execute if dimension minecraft:the_nether in ad_astra:earth_orbit run tp @s ~ ~ ~
execute if dimension ad_astra:moon in ad_astra:moon_orbit run tp @s ~ ~ ~
execute if dimension dut:slimeria in dut:slimeria_orbit run tp @s ~ ~ ~