particle minecraft:explosion ~ ~ ~
particle poof ~ ~ ~ 0.25 0.25 0.25 0.03 6
playsound entity.generic.explode block @a[distance=..16] ~ ~ ~ 0.4
setblock ~ ~ ~ air
kill @e[type=item,distance=..3]