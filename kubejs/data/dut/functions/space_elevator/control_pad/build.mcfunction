execute if block ~ ~ ~ kubejs:space_elevator_controller[facing=north] positioned ~ ~-1 ~3 run function dut:space_elevator/elevator_build_0
execute if block ~ ~ ~ kubejs:space_elevator_controller[facing=east] positioned ~-3 ~-1 ~ run function dut:space_elevator/elevator_build_0
execute if block ~ ~ ~ kubejs:space_elevator_controller[facing=south] positioned ~ ~-1 ~-3 run function dut:space_elevator/elevator_build_0
execute if block ~ ~ ~ kubejs:space_elevator_controller[facing=west] positioned ~3 ~-1 ~ run function dut:space_elevator/elevator_build_0
playsound create:whistle_high player @a[distance=..48] ~ ~ ~ 0.6 1.4