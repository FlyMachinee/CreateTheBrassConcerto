particle minecraft:flame ~ ~12.5 ~ 4 4 4 0.1 512
particle createbigcannons:cannon_smoke 0.5 0.5 90 1 ~ ~12.5 ~ 4 4 4 0.1 256
particle createbigcannons:cannon_smoke 0.8 0.8 150 1 ~ ~12.5 ~ 4 4 4 0.1 256
particle createbigcannons:cannon_smoke 0.6 0.6 120 1 ~ ~12.5 ~ 4 4 4 0.1 256
particle createbigcannons:cannon_smoke 0.5 0.5 120 1 ~ ~4.5 ~ 1 4 1 0.1 512
playsound createbigcannons:fire_big_cannon block @a[distance=..48] ~ ~ ~ 2 0.75 1
playsound createbigcannons:shell_explosion block @a[distance=..48] ~ ~ ~ 2 1 1
particle soul_fire_flame ~ ~3 ~ 2.5 2.5 2.5 0.12 128 force
particle lava ~ ~ ~ 5.5 1 5.5 0.12 128 force
particle cloud ~ ~5 ~ 2 2 2 0.24 128 force
particle cloud ~ ~3 ~ 1.2 1.2 1.2 1.2 512 force
particle large_smoke ~ ~3 ~ 1.2 1.2 1.2 0.6 256 force
particle campfire_cosy_smoke ~ ~5 ~ 1.0 4.0 1.0 0.03 512 force
particle campfire_cosy_smoke ~ ~9 ~ 3.0 3.0 3.0 0.12 2048 force
place feature dut:machine/reactor_spawn
place feature dut:machine/reactor_spawn_1
summon creeper ~ ~ ~ {ignited:1b,Fuse:0,ExplosionRadius:24,NoAI:1b,Invulnerable:1b}
summon creeper ~ ~8 ~ {ignited:1b,Fuse:0,ExplosionRadius:32,NoAI:1b,Invulnerable:1b}
summon creeper ~10.4 ~ ~6 {ignited:1b,Fuse:0,ExplosionRadius:16,NoAI:1b,Invulnerable:1b}
summon creeper ~-10.4 ~ ~6 {ignited:1b,Fuse:0,ExplosionRadius:16,NoAI:1b,Invulnerable:1b}
summon creeper ~10.4 ~ ~-6 {ignited:1b,Fuse:0,ExplosionRadius:16,NoAI:1b,Invulnerable:1b}
summon creeper ~-10.4 ~ ~-6 {ignited:1b,Fuse:0,ExplosionRadius:16,NoAI:1b,Invulnerable:1b}
summon creeper ~ ~ ~12 {ignited:1b,Fuse:0,ExplosionRadius:16,NoAI:1b,Invulnerable:1b}
summon creeper ~ ~ ~-12 {ignited:1b,Fuse:0,ExplosionRadius:16,NoAI:1b,Invulnerable:1b}


fill ~5.2 ~-5 ~3 ~5.2 ~5 ~3 lava replace air
fill ~-5.2 ~-5 ~3 ~-5.2 ~5 ~3 lava replace air
fill ~5.2 ~-5 ~-3 ~5.2 ~5 ~-3 kubejs:covariant_heat replace air
fill ~-5.2 ~-5 ~-3 ~-5.2 ~5 ~-3 kubejs:covariant_heat replace air
fill ~ ~-5 ~6 ~ ~5 ~6 kubejs:covariant_heat replace air
fill ~ ~-5 ~-6 ~ ~5 ~-6 lava replace air