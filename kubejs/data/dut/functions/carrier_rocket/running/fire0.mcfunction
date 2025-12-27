tag @s remove dut_carrier_rocket_ready
tag @s remove dut_carrier_rocket_launch
tag @s add dut_carrier_rocket
execute as @s[tag=dut_carrier_rocket_withplayer] at @s run ride @a[distance=..12,sort=nearest,limit=1] mount @s
scoreboard players set @s dut_delay 60
data modify entity @s ArmorItems[0].tag.Items append from block ~1 ~-1 ~1 HeldItem.Item
data modify entity @s ArmorItems[0].tag.Items append from block ~1 ~-1 ~ HeldItem.Item
data modify entity @s ArmorItems[0].tag.Items append from block ~1 ~-1 ~-1 HeldItem.Item
data modify entity @s ArmorItems[0].tag.Items append from block ~ ~-1 ~1 HeldItem.Item
data modify entity @s ArmorItems[0].tag.Items append from block ~ ~-1 ~-1 HeldItem.Item
data modify entity @s ArmorItems[0].tag.Items append from block ~-1 ~-1 ~1 HeldItem.Item
data modify entity @s ArmorItems[0].tag.Items append from block ~-1 ~-1 ~ HeldItem.Item
data modify entity @s ArmorItems[0].tag.Items append from block ~-1 ~-1 ~-1 HeldItem.Item

data remove block ~1 ~-1 ~1 HeldItem.Item
data remove block ~1 ~-1 ~ HeldItem.Item
data remove block ~1 ~-1 ~-1 HeldItem.Item
data remove block ~ ~-1 ~1 HeldItem.Item
data remove block ~ ~-1 ~-1 HeldItem.Item
data remove block ~-1 ~-1 ~1 HeldItem.Item
data remove block ~-1 ~-1 ~ HeldItem.Item
data remove block ~-1 ~-1 ~-1 HeldItem.Item
