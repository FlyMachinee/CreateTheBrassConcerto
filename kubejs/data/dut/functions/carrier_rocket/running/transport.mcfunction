scoreboard players set @s dut_motion_y 2580
tag @s remove dut_carrier_rocket_up
tag @s add dut_carrier_rocket_down
execute as @s on passengers run tag @s add dut_rocket_passengers
execute as @s on passengers run scoreboard players set @s dut_time 40

execute as @s on passengers run tag @s add dut_rocket_passenger_transporting
execute as @s[tag=dut_has_target] run function dut:pos_transport/transport_xz
execute as @s at @s run tp @a[tag=dut_rocket_passenger_transporting] ~ ~ ~
ride @a[tag=dut_rocket_passenger_transporting,limit=1] mount @s
execute as @s on passengers run tag @s remove dut_rocket_passenger_transporting

execute as @s[tag=dut_to_earth_orbit] at @s on passengers in ad_astra:earth_orbit run tp @s ~ ~ ~
execute as @s[tag=dut_to_earth_orbit] at @s in ad_astra:earth_orbit run tp @s ~ ~ ~

execute as @s[tag=dut_to_earth] at @s on passengers in minecraft:overworld run tp @s ~ ~ ~
execute as @s[tag=dut_to_earth] at @s in minecraft:overworld run tp @s ~ ~ ~

execute as @s[tag=dut_to_moon_orbit] at @s on passengers in ad_astra:moon_orbit run tp @s ~ ~ ~
execute as @s[tag=dut_to_moon_orbit] at @s in ad_astra:moon_orbit run tp @s ~ ~ ~

execute as @s[tag=dut_to_moon] at @s on passengers in ad_astra:moon run tp @s ~ ~ ~
execute as @s[tag=dut_to_moon] at @s in ad_astra:moon run tp @s ~ ~ ~

execute as @s[tag=dut_to_mars_orbit] at @s on passengers in ad_astra:mars_orbit run tp @s ~ ~ ~
execute as @s[tag=dut_to_mars_orbit] at @s in ad_astra:mars_orbit run tp @s ~ ~ ~

execute as @s[tag=dut_to_mars] at @s on passengers in ad_astra:mars run tp @s ~ ~ ~
execute as @s[tag=dut_to_mars] at @s in ad_astra:mars run tp @s ~ ~ ~

execute as @s[tag=dut_to_glacio_orbit] at @s on passengers in ad_astra:glacio_orbit run tp @s ~ ~ ~
execute as @s[tag=dut_to_glacio_orbit] at @s in ad_astra:glacio_orbit run tp @s ~ ~ ~

execute as @s[tag=dut_to_glacio] at @s on passengers in ad_astra:glacio run tp @s ~ ~ ~
execute as @s[tag=dut_to_glacio] at @s in ad_astra:glacio run tp @s ~ ~ ~

execute as @s[tag=dut_to_mercury_orbit] at @s on passengers in ad_astra:mercury_orbit run tp @s ~ ~ ~
execute as @s[tag=dut_to_mercury_orbit] at @s in ad_astra:mercury_orbit run tp @s ~ ~ ~

execute as @s[tag=dut_to_mercury] at @s on passengers in ad_astra:mercury run tp @s ~ ~ ~
execute as @s[tag=dut_to_mercury] at @s in ad_astra:mercury run tp @s ~ ~ ~

execute as @s[tag=dut_to_venus_orbit] at @s on passengers in ad_astra:venus_orbit run tp @s ~ ~ ~
execute as @s[tag=dut_to_venus_orbit] at @s in ad_astra:venus_orbit run tp @s ~ ~ ~

execute as @s[tag=dut_to_venus] at @s on passengers in ad_astra:venus run tp @s ~ ~ ~
execute as @s[tag=dut_to_venus] at @s in ad_astra:venus run tp @s ~ ~ ~


execute as @s[tag=dut_to_slimeria_orbit] at @s on passengers in dut:slimeria_orbit run tp @s ~ ~ ~
execute as @s[tag=dut_to_slimeria_orbit] at @s in dut:slimeria_orbit run tp @s ~ ~ ~

execute as @s[tag=dut_to_slimeria] at @s on passengers in dut:slimeria run tp @s ~ ~ ~
execute as @s[tag=dut_to_slimeria] at @s in dut:slimeria run tp @s ~ ~ ~


