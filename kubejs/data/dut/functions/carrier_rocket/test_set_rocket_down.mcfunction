summon armor_stand ~ 600 ~ {DisabledSlots:4144896,NoGravity:0b,Invulnerable:1b,Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:carrier_rocket",tag:{}}],Tags:["dut_carrier_rocket","dut_carrier_rocket_test","dut_carrier_rocket_down"],Motion:[0d,-4.8d,0d]}
scoreboard players set @e[tag=dut_carrier_rocket_test] dut_acceleration_y 12
scoreboard players set @e[tag=dut_carrier_rocket_test] dut_motion_y 2580
tag @e[tag=dut_carrier_rocket_test] remove dut_carrier_rocket_test