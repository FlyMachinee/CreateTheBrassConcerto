execute unless block ~1 ~-1 ~1 create:depot run tag @s add dut_carrier_rocket_unset
execute unless block ~1 ~-1 ~ create:depot run tag @s add dut_carrier_rocket_unset
execute unless block ~1 ~-1 ~-1 create:depot run tag @s add dut_carrier_rocket_unset
execute unless block ~ ~-1 ~1 create:depot run tag @s add dut_carrier_rocket_unset
execute unless block ~ ~-1 ~ create:depot run tag @s add dut_carrier_rocket_unset
execute unless block ~ ~-1 ~-1 create:depot run tag @s add dut_carrier_rocket_unset
execute unless block ~-1 ~-1 ~1 create:depot run tag @s add dut_carrier_rocket_unset
execute unless block ~-1 ~-1 ~ create:depot run tag @s add dut_carrier_rocket_unset
execute unless block ~-1 ~-1 ~-1 create:depot run tag @s add dut_carrier_rocket_unset
execute as @s[tag=dut_carrier_rocket_unset] run summon item ~ ~ ~ {Item:{Count:1b,id:"kubejs:carrier_rocket"},Motion:[0d,-0.2d,0d]}
execute as @s[tag=dut_carrier_rocket_unset] run kill @s