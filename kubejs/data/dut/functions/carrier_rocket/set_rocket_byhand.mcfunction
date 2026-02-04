data modify entity @s DisabledSlots set value 4144896
data modify entity @s Invisible set value 1b
data modify entity @s NoGravity set value 0b
data modify entity @s ArmorItems[3] set value {Count:1b,id:"kubejs:carrier_rocket"}
data modify entity @s CustomName set value '{"text":" "}'
scoreboard players set @s dut_acceleration_y 24
scoreboard players set @s dut_motion_y 0
tag @s add dut_carrier_rocket_byhand
tag @s add dut_carrier_rocket_up
tag @s add dut_carrier_rocket_withplayer
tag @s add dut_has_target