execute if data storage dut:pos_data positionData run function dut:pos_transport/get_data_score
execute if block ~ ~2 ~2 design_decor:ornate_grate run tp @s ~ ~ ~ ~90 ~
scoreboard players set @s dut_acceleration_y 24
scoreboard players set @s dut_motion_y 0
tag @s remove dut_carrier_rocket0
tag @s add dut_carrier_rocket_ready
#execute if biome ~ ~ ~ ad_astra:orbit run tag @s add dut_carrier_rocket_from_orbit