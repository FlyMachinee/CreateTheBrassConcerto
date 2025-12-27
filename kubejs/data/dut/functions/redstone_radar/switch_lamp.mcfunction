execute if block ~ ~ ~ redstone_lamp[lit=false] run tag @s add dut_switch_on
execute as @s[tag=dut_switch_on] run setblock ~ ~ ~ redstone_lamp[lit=true]
execute as @s[tag=!dut_switch_on] if block ~ ~ ~ redstone_lamp run setblock ~ ~ ~ redstone_lamp[lit=false]
execute as @s at @s run particle sculk_charge_pop ~ ~ ~ 0.5 0.5 0.5 0.03 8
execute as @s at @s run playsound minecraft:block.lever.click block @a[distance=..16] ~ ~ ~ 0.6 1