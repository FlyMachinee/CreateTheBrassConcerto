execute if block ~ ~ ~ kubejs:satellite_station[facing=north] positioned ~ ~0.5 ~5 run function dut:satellite/set_satellite_0_up
execute if block ~ ~ ~ kubejs:satellite_station[facing=east] positioned ~-5 ~0.5 ~ run function dut:satellite/set_satellite_0_up
execute if block ~ ~ ~ kubejs:satellite_station[facing=south] positioned ~ ~0.5 ~-5 run function dut:satellite/set_satellite_0_up
execute if block ~ ~ ~ kubejs:satellite_station[facing=west] positioned ~5 ~0.5 ~ run function dut:satellite/set_satellite_0_up
playsound create:whistle_high player @a ~ ~ ~ 0.3 1.8