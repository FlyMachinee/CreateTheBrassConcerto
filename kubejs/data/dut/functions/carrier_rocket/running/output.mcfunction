playsound block.shulker_box.open voice @a ~ ~ ~ 0.6 1
particle composter ~ ~ ~ 1.0 0.5 1.0 0.01 24 force

execute store success score @s dut_count run data get entity @s ArmorItems[0].tag.Items[0]
execute as @s[scores={dut_count=1}] run summon item ~1 ~ ~1 {Item:{Count:1b,id:"create:andesite_casing"},Motion:[0d,-0.2d,0d],Tags:["dut_rocket_translation"]}
data modify entity @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] Item set from entity @s ArmorItems[0].tag.Items[0]
tag @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] remove dut_rocket_translation
data remove entity @s ArmorItems[0].tag.Items[0]


execute store success score @s dut_count run data get entity @s ArmorItems[0].tag.Items[0]
execute as @s[scores={dut_count=1}] run summon item ~1 ~ ~ {Item:{Count:1b,id:"create:andesite_casing"},Motion:[0d,-0.2d,0d],Tags:["dut_rocket_translation"]}
data modify entity @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] Item set from entity @s ArmorItems[0].tag.Items[0]
tag @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] remove dut_rocket_translation
data remove entity @s ArmorItems[0].tag.Items[0]


execute store success score @s dut_count run data get entity @s ArmorItems[0].tag.Items[0]
execute as @s[scores={dut_count=1}] run summon item ~1 ~ ~-1 {Item:{Count:1b,id:"create:andesite_casing"},Motion:[0d,-0.2d,0d],Tags:["dut_rocket_translation"]}
data modify entity @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] Item set from entity @s ArmorItems[0].tag.Items[0]
tag @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] remove dut_rocket_translation
data remove entity @s ArmorItems[0].tag.Items[0]


execute store success score @s dut_count run data get entity @s ArmorItems[0].tag.Items[0]
execute as @s[scores={dut_count=1}] run summon item ~ ~ ~1 {Item:{Count:1b,id:"create:andesite_casing"},Motion:[0d,-0.2d,0d],Tags:["dut_rocket_translation"]}
data modify entity @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] Item set from entity @s ArmorItems[0].tag.Items[0]
tag @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] remove dut_rocket_translation
data remove entity @s ArmorItems[0].tag.Items[0]


execute store success score @s dut_count run data get entity @s ArmorItems[0].tag.Items[0]
execute as @s[scores={dut_count=1}] run summon item ~ ~ ~-1 {Item:{Count:1b,id:"create:andesite_casing"},Motion:[0d,-0.2d,0d],Tags:["dut_rocket_translation"]}
data modify entity @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] Item set from entity @s ArmorItems[0].tag.Items[0]
tag @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] remove dut_rocket_translation
data remove entity @s ArmorItems[0].tag.Items[0]


execute store success score @s dut_count run data get entity @s ArmorItems[0].tag.Items[0]
execute as @s[scores={dut_count=1}] run summon item ~-1 ~ ~1 {Item:{Count:1b,id:"create:andesite_casing"},Motion:[0d,-0.2d,0d],Tags:["dut_rocket_translation"]}
data modify entity @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] Item set from entity @s ArmorItems[0].tag.Items[0]
tag @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] remove dut_rocket_translation
data remove entity @s ArmorItems[0].tag.Items[0]


execute store success score @s dut_count run data get entity @s ArmorItems[0].tag.Items[0]
execute as @s[scores={dut_count=1}] run summon item ~-1 ~ ~ {Item:{Count:1b,id:"create:andesite_casing"},Motion:[0d,-0.2d,0d],Tags:["dut_rocket_translation"]}
data modify entity @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] Item set from entity @s ArmorItems[0].tag.Items[0]
tag @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] remove dut_rocket_translation
data remove entity @s ArmorItems[0].tag.Items[0]


execute store success score @s dut_count run data get entity @s ArmorItems[0].tag.Items[0]
execute as @s[scores={dut_count=1}] run summon item ~-1 ~ ~-1 {Item:{Count:1b,id:"create:andesite_casing"},Motion:[0d,-0.2d,0d],Tags:["dut_rocket_translation"]}
data modify entity @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] Item set from entity @s ArmorItems[0].tag.Items[0]
tag @e[tag=dut_rocket_translation,limit=1,distance=..12,sort=nearest] remove dut_rocket_translation
data remove entity @s ArmorItems[0].tag.Items[0]

#execute as @s[tag=!dut_carrier_rocket_from_orbit] run summon item ~ ~ ~ {Item:{Count:1b,id:"kubejs:carrier_rocket",tag:{Damage:12}},Motion:[0d,-0.2d,0d]}
#execute as @s[tag=dut_carrier_rocket_from_orbit] run summon item ~ ~ ~ {Item:{Count:1b,id:"kubejs:carrier_rocket",tag:{Damage:1}},Motion:[0d,-0.2d,0d]}

kill @s