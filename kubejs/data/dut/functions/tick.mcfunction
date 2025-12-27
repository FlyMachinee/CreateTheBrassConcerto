#运载火箭
scoreboard players remove @e[tag=dut_rocket_passengers,scores={dut_time=1..}] dut_time 1
tag @e[tag=dut_rocket_passengers,scores={dut_time=..0}] remove dut_rocket_passengers
#execute as @e[tag=dut_carrier_rocket_launch] at @s run function dut:carrier_rocket/running/fire0
#scoreboard players remove @e[tag=dut_carrier_rocket,tag=dut_carrier_rocket_up,scores={dut_delay=1..}] dut_delay 1
#execute as @e[tag=dut_carrier_rocket,tag=dut_carrier_rocket_up,scores={dut_delay=1}] at @s run function dut:carrier_rocket/running/fire
#execute as @e[tag=dut_carrier_rocket,tag=dut_carrier_rocket_up,scores={dut_delay=..0}] at @s run function dut:carrier_rocket/running/flying_up
#execute as @e[tag=dut_carrier_rocket,tag=dut_carrier_rocket_down] at @s run function dut:carrier_rocket/running/flying_down_check
#execute as @e[tag=dut_carrier_rocket,tag=dut_carrier_rocket_recoil] at @s run function dut:carrier_rocket/running/flying_down
#空投舱
#scoreboard players remove @e[tag=dut_airdrop,scores={dut_delay=1..}] dut_delay 1
#execute as @e[tag=dut_airdrop,scores={dut_delay=1}] at @s run function dut:airdrop/fire
#execute as @e[tag=dut_airdrop,scores={dut_delay=..0}] at @s run function dut:airdrop/flying_down
#卫星
#execute as @e[tag=dut_satellite_ready] at @s run function dut:satellite/running/fire0
#scoreboard players remove @e[tag=dut_satellite,tag=dut_satellite_up,scores={dut_delay=1..}] dut_delay 1
#execute as @e[tag=dut_satellite,tag=dut_satellite_up,scores={dut_delay=1}] at @s run function dut:satellite/running/fire
#execute as @e[tag=dut_satellite,tag=dut_satellite_up,scores={dut_delay=..0}] at @s run function dut:satellite/running/flying_up
#execute as @e[tag=dut_satellite,tag=dut_satellite_down] at @s run function dut:satellite/running/flying_down_check
#execute as @e[tag=dut_satellite,tag=dut_satellite_recoil] at @s run function dut:satellite/running/flying_down
#太空电梯
execute as @e[tag=dut_elevator_string0] at @s run function dut:space_elevator/build/string_down
execute as @e[tag=dut_elevator_string_knot0] at @s run function dut:space_elevator/build/knot_down
execute as @e[tag=dut_space_elevator_building] at @s run function dut:space_elevator/build/chest_down
execute as @e[tag=dut_space_elevator_build] at @s run function dut:space_elevator/elevator_build
execute as @e[tag=dut_elevator_string,tag=!dut_elevator_string_unset] at @s run function dut:space_elevator/particle/string_particle
execute as @e[tag=dut_elevator_string_unset] at @s run function dut:space_elevator/build/string_unset
execute as @e[tag=dut_elevator_paricle_1] at @s run function dut:space_elevator/particle/electric_up
execute as @e[tag=dut_elevator_paricle] at @s run function dut:space_elevator/particle/electric_up
#潜影弹
execute as @e[tag=dut_shulker] run function dut:tick/shulker
#particle
execute as @e[tag=dut_particle_scan] at @s run function dut:particle/scan_count_range_angle
kill @e[tag=dut_particle_scan,scores={dut_count2=21..}]
#初始飞船
execute unless data storage dut_create spawnpoint_structure as @p at @s run function dut:set_ship