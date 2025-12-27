execute store result score @s dut_target_x run data get storage dut:pos_data positionData.position[0] 10.0
execute store result score @s dut_target_y run data get storage dut:pos_data positionData.position[1] 10.0
execute store result score @s dut_target_z run data get storage dut:pos_data positionData.position[2] 10.0
execute store result score @s dut_target_dim run data get storage dut:pos_data positionData.dimensionID

tag @s add dut_has_target