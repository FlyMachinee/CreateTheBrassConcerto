playsound block.shulker_box.open voice @a ~ ~ ~ 0.6 1
particle composter ~ ~ ~ 1.0 0.5 1.0 0.01 24 force

data remove block ~1 ~-1 ~1 Inventory.Items
data remove block ~1 ~-1 ~ Inventory.Items
data remove block ~1 ~-1 ~-1 Inventory.Items
data remove block ~ ~-1 ~1 Inventory.Items
data remove block ~ ~-1 ~ Inventory.Items
data remove block ~ ~-1 ~-1 Inventory.Items
data remove block ~-1 ~-1 ~1 Inventory.Items
data remove block ~-1 ~-1 ~ Inventory.Items
data remove block ~-1 ~-1 ~-1 Inventory.Items

fill ~1 ~-1 ~1 ~-1 ~-1 ~-1 air
#execute unless block ~ ~-1 ~ create_connected:item_silo unless block ~1 ~-1 ~1 create_connected:item_silo unless block ~1 ~-1 ~ create_connected:item_silo unless block ~1 ~-1 ~-1 create_connected:item_silo unless block ~ ~-1 ~1 create_connected:item_silo unless block ~ ~-1 ~ create_connected:item_silo unless block ~ ~-1 ~-1 create_connected:item_silo unless block ~-1 ~-1 ~1 create_connected:item_silo unless block ~-1 ~-1 ~ create_connected:item_silo unless block ~-1 ~-1 ~-1 create_connected:item_silo run fill ~1 ~-1 ~1 ~-1 ~-1 ~-1 create_connected:item_silo
fill ~1 ~-1 ~1 ~-1 ~-1 ~-1 create_connected:item_silo

data modify block ~1 ~-1 ~1 Inventory.Items set from entity @s ArmorItems[0].tag.Inventory[0]
data remove entity @s ArmorItems[0].tag.Inventory[0]
data modify block ~1 ~-1 ~ Inventory.Items set from entity @s ArmorItems[0].tag.Inventory[0]
data remove entity @s ArmorItems[0].tag.Inventory[0]
data modify block ~1 ~-1 ~-1 Inventory.Items set from entity @s ArmorItems[0].tag.Inventory[0]
data remove entity @s ArmorItems[0].tag.Inventory[0]

data modify block ~ ~-1 ~1 Inventory.Items set from entity @s ArmorItems[0].tag.Inventory[0]
data remove entity @s ArmorItems[0].tag.Inventory[0]
data modify block ~ ~-1 ~ Inventory.Items set from entity @s ArmorItems[0].tag.Inventory[0]
data remove entity @s ArmorItems[0].tag.Inventory[0]
data modify block ~ ~-1 ~-1 Inventory.Items set from entity @s ArmorItems[0].tag.Inventory[0]
data remove entity @s ArmorItems[0].tag.Inventory[0]

data modify block ~-1 ~-1 ~1 Inventory.Items set from entity @s ArmorItems[0].tag.Inventory[0]
data remove entity @s ArmorItems[0].tag.Inventory[0]
data modify block ~-1 ~-1 ~ Inventory.Items set from entity @s ArmorItems[0].tag.Inventory[0]
data remove entity @s ArmorItems[0].tag.Inventory[0]
data modify block ~-1 ~-1 ~-1 Inventory.Items set from entity @s ArmorItems[0].tag.Inventory[0]
data remove entity @s ArmorItems[0].tag.Inventory[0]

kill @s