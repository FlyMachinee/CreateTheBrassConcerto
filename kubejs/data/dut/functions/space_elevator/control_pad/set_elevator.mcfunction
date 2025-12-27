execute if block ~ ~ ~ kubejs:space_elevator_controller[facing=north] positioned ~ ~4 ~3 run function dut:space_elevator/set_elevator_0_up
execute if block ~ ~ ~ kubejs:space_elevator_controller[facing=east] positioned ~-3 ~4 ~ run function dut:space_elevator/set_elevator_0_up
execute if block ~ ~ ~ kubejs:space_elevator_controller[facing=south] positioned ~ ~4 ~-3 run function dut:space_elevator/set_elevator_0_up
execute if block ~ ~ ~ kubejs:space_elevator_controller[facing=west] positioned ~3 ~4 ~ run function dut:space_elevator/set_elevator_0_up
playsound create:whistle_high player @a[distance=..48] ~ ~ ~ 0.6 1.4