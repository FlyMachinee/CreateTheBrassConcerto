data modify entity @s NoGravity set value 0b

playsound minecraft:block.enchantment_table.use block @a[distance=..32] ~ ~ ~ 1.2 0.75 0.8

data modify entity @s ArmorItems[0].tag.Inventory append from block ~1 ~-2 ~1 Inventory.Items
data modify entity @s ArmorItems[0].tag.Inventory append from block ~1 ~-2 ~ Inventory.Items
data modify entity @s ArmorItems[0].tag.Inventory append from block ~1 ~-2 ~-1 Inventory.Items
data modify entity @s ArmorItems[0].tag.Inventory append from block ~ ~-2 ~1 Inventory.Items
data modify entity @s ArmorItems[0].tag.Inventory append from block ~ ~-2 ~ Inventory.Items
data modify entity @s ArmorItems[0].tag.Inventory append from block ~ ~-2 ~-1 Inventory.Items
data modify entity @s ArmorItems[0].tag.Inventory append from block ~-1 ~-2 ~1 Inventory.Items
data modify entity @s ArmorItems[0].tag.Inventory append from block ~-1 ~-2 ~ Inventory.Items
data modify entity @s ArmorItems[0].tag.Inventory append from block ~-1 ~-2 ~-1 Inventory.Items

data remove block ~1 ~-2 ~1 Inventory.Items
data remove block ~1 ~-2 ~ Inventory.Items
data remove block ~1 ~-2 ~-1 Inventory.Items
data remove block ~ ~-2 ~1 Inventory.Items
data remove block ~ ~-2 ~ Inventory.Items
data remove block ~ ~-2 ~-1 Inventory.Items
data remove block ~-1 ~-2 ~1 Inventory.Items
data remove block ~-1 ~-2 ~ Inventory.Items
data remove block ~-1 ~-2 ~-1 Inventory.Items
