#生成钢缆
execute as @s at @s run kill @e[type=block_display,distance=..12]
execute as @s at @s run particle poof ~ ~4.5 ~ 3.5 2.5 3.5 0.08 64
execute as @s at @s run fill ~2 ~6 ~2 ~-2 ~10 ~-2 air

execute as @s at @s run summon block_display ~2 ~3 ~2 {block_state:{Name:"kubejs:carbon_electrode"},transformation:{left_rotation:[0f,0f,0f,1f],right_rotation:[0f,0f,0f,1f],translation:[-0.25f,512f,-0.25f],scale:[0.5f,1024f,0.5f]},Tags:["dut_elevator_string0"]}
execute as @s at @s run summon block_display ~2 ~6 ~2 {block_state:{Name:"kubejs:carbon_electrode"},transformation:{left_rotation:[0f,0f,0f,1f],right_rotation:[0f,0f,0f,1f],translation:[-0.5f,512f,-0.5f],scale:[1f,1f,1f]},Tags:["dut_elevator_string_knot0"]}
execute as @s at @s run summon block_display ~2 ~10 ~2 {block_state:{Name:"kubejs:carbon_electrode"},transformation:{left_rotation:[0f,0f,0f,1f],right_rotation:[0f,0f,0f,1f],translation:[-0.5f,512f,-0.5f],scale:[1f,1f,1f]},Tags:["dut_elevator_string_knot0","dut_elevator_string_knot1"]}

execute as @s at @s run summon block_display ~2 ~3 ~-2 {block_state:{Name:"kubejs:carbon_electrode"},transformation:{left_rotation:[0f,0f,0f,1f],right_rotation:[0f,0f,0f,1f],translation:[-0.25f,512f,-0.25f],scale:[0.5f,1024f,0.5f]},Tags:["dut_elevator_string0"]}
execute as @s at @s run summon block_display ~2 ~6 ~-2 {block_state:{Name:"kubejs:carbon_electrode"},transformation:{left_rotation:[0f,0f,0f,1f],right_rotation:[0f,0f,0f,1f],translation:[-0.5f,512f,-0.5f],scale:[1f,1f,1f]},Tags:["dut_elevator_string_knot0"]}
execute as @s at @s run summon block_display ~2 ~10 ~-2 {block_state:{Name:"kubejs:carbon_electrode"},transformation:{left_rotation:[0f,0f,0f,1f],right_rotation:[0f,0f,0f,1f],translation:[-0.5f,512f,-0.5f],scale:[1f,1f,1f]},Tags:["dut_elevator_string_knot0","dut_elevator_string_knot1"]}

execute as @s at @s run summon block_display ~-2 ~3 ~2 {block_state:{Name:"kubejs:carbon_electrode"},transformation:{left_rotation:[0f,0f,0f,1f],right_rotation:[0f,0f,0f,1f],translation:[-0.25f,512f,-0.25f],scale:[0.5f,1024f,0.5f]},Tags:["dut_elevator_string0"]}
execute as @s at @s run summon block_display ~-2 ~6 ~2 {block_state:{Name:"kubejs:carbon_electrode"},transformation:{left_rotation:[0f,0f,0f,1f],right_rotation:[0f,0f,0f,1f],translation:[-0.5f,512f,-0.5f],scale:[1f,1f,1f]},Tags:["dut_elevator_string_knot0"]}
execute as @s at @s run summon block_display ~-2 ~10 ~2 {block_state:{Name:"kubejs:carbon_electrode"},transformation:{left_rotation:[0f,0f,0f,1f],right_rotation:[0f,0f,0f,1f],translation:[-0.5f,512f,-0.5f],scale:[1f,1f,1f]},Tags:["dut_elevator_string_knot0","dut_elevator_string_knot1"]}

execute as @s at @s run summon block_display ~-2 ~3 ~-2 {block_state:{Name:"kubejs:carbon_electrode"},transformation:{left_rotation:[0f,0f,0f,1f],right_rotation:[0f,0f,0f,1f],translation:[-0.25f,512f,-0.25f],scale:[0.5f,1024f,0.5f]},Tags:["dut_elevator_string0"]}
execute as @s at @s run summon block_display ~-2 ~6 ~-2 {block_state:{Name:"kubejs:carbon_electrode"},transformation:{left_rotation:[0f,0f,0f,1f],right_rotation:[0f,0f,0f,1f],translation:[-0.5f,512f,-0.5f],scale:[1f,1f,1f]},Tags:["dut_elevator_string_knot0"]}
execute as @s at @s run summon block_display ~-2 ~10 ~-2 {block_state:{Name:"kubejs:carbon_electrode"},transformation:{left_rotation:[0f,0f,0f,1f],right_rotation:[0f,0f,0f,1f],translation:[-0.5f,512f,-0.5f],scale:[1f,1f,1f]},Tags:["dut_elevator_string_knot0","dut_elevator_string_knot1"]}

execute as @s at @s run summon armor_stand ~ ~1313 ~ {Invisible:1b,Invulnerable:1b,DisabledSlots:4144896,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:space_elevator",tag:{}}],Tags:["dut_space_elevator_building"]}

kill @s