scoreboard players set @s dut_motion_y 0
scoreboard players set @s dut_pos_y 0

data modify entity @s ArmorItems[0].tag.Items append from block ~ ~6 ~ componentManager.items[{slotID:"input1"}]
data modify entity @s ArmorItems[0].tag.Items append from block ~ ~6 ~ componentManager.items[{slotID:"input2"}]
data modify entity @s ArmorItems[0].tag.Items append from block ~ ~6 ~ componentManager.items[{slotID:"input3"}]
data modify entity @s ArmorItems[0].tag.Items append from block ~ ~6 ~ componentManager.items[{slotID:"input4"}]
data modify entity @s ArmorItems[0].tag.Items append from block ~ ~6 ~ componentManager.items[{slotID:"input5"}]
data modify entity @s ArmorItems[0].tag.Items append from block ~ ~6 ~ componentManager.items[{slotID:"input6"}]
data modify entity @s ArmorItems[0].tag.Items append from block ~ ~6 ~ componentManager.items[{slotID:"input7"}]
data modify entity @s ArmorItems[0].tag.Items append from block ~ ~6 ~ componentManager.items[{slotID:"input8"}]

data modify block ~ ~6 ~ componentManager.items[{slotID:"input1"}].Count set value 0b
data modify block ~ ~6 ~ componentManager.items[{slotID:"input2"}].Count set value 0b
data modify block ~ ~6 ~ componentManager.items[{slotID:"input3"}].Count set value 0b
data modify block ~ ~6 ~ componentManager.items[{slotID:"input4"}].Count set value 0b
data modify block ~ ~6 ~ componentManager.items[{slotID:"input5"}].Count set value 0b
data modify block ~ ~6 ~ componentManager.items[{slotID:"input6"}].Count set value 0b
data modify block ~ ~6 ~ componentManager.items[{slotID:"input7"}].Count set value 0b
data modify block ~ ~6 ~ componentManager.items[{slotID:"input8"}].Count set value 0b

tag @s remove dut_airdrop0
tag @s add dut_airdrop

scoreboard players set @s dut_delay 20