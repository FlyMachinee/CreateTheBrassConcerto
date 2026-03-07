summon armor_stand ~ ~36 ~ {DisabledSlots:4144896,NoGravity:0b,Invulnerable:1b,Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:satellite",tag:{}}],Tags:["dut_satellite","dut_satellite_down_0","dut_satellite_down"],Motion:[0d,-4.8d,0d]}
scoreboard players set @e[tag=dut_satellite_down_0] dut_acceleration_y 16
scoreboard players set @e[tag=dut_satellite_down_0] dut_motion_y 900
tag @e[tag=dut_satellite_down_0] remove dut_satellite_down_0