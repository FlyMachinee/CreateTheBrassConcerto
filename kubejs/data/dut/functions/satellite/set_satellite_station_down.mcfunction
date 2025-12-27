execute if block ~ ~ ~ kubejs:satellite_station[facing=north] positioned ~ ~1 ~5 run function dut:satellite/set_satellite_down
execute if block ~ ~ ~ kubejs:satellite_station[facing=east] positioned ~-5 ~1 ~ run function dut:satellite/set_satellite_down
execute if block ~ ~ ~ kubejs:satellite_station[facing=south] positioned ~ ~1 ~-5 run function dut:satellite/set_satellite_down
execute if block ~ ~ ~ kubejs:satellite_station[facing=west] positioned ~5 ~1 ~ run function dut:satellite/set_satellite_down