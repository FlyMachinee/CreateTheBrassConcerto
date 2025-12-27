particle minecraft:explosion_emitter ~ ~3.5 ~ 0.0 0.0 0.0 0.0 1 force
playsound createbigcannons:shell_explosion block @a ~ ~3.5 ~
particle campfire_cosy_smoke ~ ~3.5 ~ 1 0.25 1 0.06 16
particle campfire_cosy_smoke ~ ~3.5 ~ 0.8 0.3 0.8 0.3 64
particle cloud ~ ~3.5 ~ 1 0.25 1 0.06 16
particle cloud ~ ~3.5 ~ 0.8 0.3 0.8 0.3 64
kill @e[type=minecraft:tnt,distance=..6]
kill @e[type=minecraft:end_crystal,distance=..6]
kill @e[type=createbigcannons:primed_propellant,distance=..6]