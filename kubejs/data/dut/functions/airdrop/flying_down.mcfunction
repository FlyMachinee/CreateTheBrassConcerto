execute as @s[tag=!dut_airdrop_down] run data modify entity @s Motion[1] set value -3.60d
execute as @s[tag=!dut_airdrop_slowfalling] unless block ~ ~-70 ~ air run tag @s add dut_airdrop_slowfalling
execute as @s[tag=dut_airdrop_slowfalling,tag=!dut_airdrop_down] run scoreboard players set @s dut_count 30
execute as @s[tag=dut_airdrop_slowfalling,tag=!dut_airdrop_down] run data modify entity @s Motion[1] set value -1.60d
execute as @s[tag=dut_airdrop_slowfalling,tag=!dut_airdrop_down] run effect give @s minecraft:slow_falling infinite 0 true
execute as @s[tag=dut_airdrop_slowfalling,tag=!dut_airdrop_down] run tag @s add dut_airdrop_down
execute as @s[tag=dut_airdrop_slowfalling] at @s run playsound minecraft:entity.firework_rocket.launch voice @a ~ ~ ~ 0.16 0.4
#方向翻转
execute as @s[scores={dut_count=0..}] run scoreboard players remove @s dut_count 1
execute store result entity @s[scores={dut_count=0..}] Pose.Head[0] float 6 run scoreboard players get @s dut_count

#卸货
execute store result score @s dut_pos_y run data get entity @s Pos[1]
execute as @s[scores={dut_pos_y=..320}] at @s unless block ~ ~-1 ~ air run function dut:airdrop/output