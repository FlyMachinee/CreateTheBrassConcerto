execute if block ~ ~ ~ kubejs:launch_pad_controller run function dut:pos_transport/get_data
execute if block ~ ~ ~ kubejs:launch_pad_controller[facing=north] positioned ~ ~3 ~2 run function dut:carrier_rocket/set_rocket_0_up
execute if block ~ ~ ~ kubejs:launch_pad_controller[facing=east] positioned ~-2 ~3 ~ run function dut:carrier_rocket/set_rocket_0_up
execute if block ~ ~ ~ kubejs:launch_pad_controller[facing=south] positioned ~ ~3 ~-2 run function dut:carrier_rocket/set_rocket_0_up
execute if block ~ ~ ~ kubejs:launch_pad_controller[facing=west] positioned ~2 ~3 ~ run function dut:carrier_rocket/set_rocket_0_up
playsound create:whistle_high player @a[distance=..48] ~ ~ ~ 0.6 1.4