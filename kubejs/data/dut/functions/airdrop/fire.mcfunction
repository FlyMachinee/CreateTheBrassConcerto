data modify entity @s NoGravity set value 0b
particle createbigcannons:shrapnel_cloud ~ ~1.2 ~ 0.0 0.0 0.0 0.1 1 force
particle campfire_cosy_smoke ~ ~1.2 ~ 1 1 1 0.03 8 force
particle campfire_cosy_smoke ~ ~1.2 ~ 0.8 0.8 0.8 0.12 16 force
particle cloud ~ ~1.2 ~ 1 1 1 0.03 8 force
particle cloud ~ ~1.2 ~ 0.8 0.8 0.8 0.12 16 force
playsound createbigcannons:flak_round_explosion voice @a[distance=..36] ~ ~1.2 ~
