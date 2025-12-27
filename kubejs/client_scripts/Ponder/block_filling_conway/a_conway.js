Ponder.registry((event) => {
  event.create([
    "minecraft:mushroom_stem", "minecraft:red_mushroom_block", "minecraft:moss_block",
    "minecraft:brown_mushroom_block", "minecraft:packed_mud",
    "ad_astra:aeronos_cap", "ad_astra:aeronos_stem", "ad_astra:conglomerate",
    "ad_astra:strophar_cap", "ad_astra:strophar_stem", "ad_astra:sky_stone"
  ])
    .tag("kubejs:block_filling_conway")
    .scene(
      "kubejs:as_grow",
      "注液催化菌类生长",
      "kubejs:9x9base",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.scaleSceneView(0.75)
        scene.setSceneOffsetY(-2)
        scene.world.showSection([0, 1, 0, 9, 9, 9], Direction.down)
        scene.world.setBlock([4, 5, 4], "minecraft:air", false)
        scene.world.setBlock([4, 6, 4], "minecraft:moss_block", false)
        scene.world.setBlock([4, 8, 4], "create:spout", false)
        scene.world.setBlock([3, 8, 4], "create:mechanical_pump", false)
        scene.world.modifyBlock([3, 8, 4], state => state.with("facing", "east"), false)
        scene.world.setBlock([2, 8, 4], "create:creative_fluid_tank", false)
        scene.world.modifyTileNBT([2, 8, 4], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:red_mushroom_spore" }
        })

        scene.idle(20);
        scene.text(60, "注液催化可以使得部分菌类生长");
        scene.idle(80);
        scene.text(60, "当你对指定的媒介方块注液后，以它下方3格处为中心的3*3*3区域内的菌类将会生长", [4.5, 6.5, 4.5]).attachKeyFrame();
        scene.overlay.showOutline("red", { "glue": true }, [4, 6, 4], 30);
        scene.overlay.showOutline("blue", { "glue": true }, [4, 3, 4], 30);
        scene.idle(80);
        scene.text(60, "每个方块都会根据自身周围3*3*3的状态决定自己接下来的状态");
        scene.idle(80);
        scene.text(60, "如果它是空气，并且周围有6~12个菌类则变为菌类").attachKeyFrame()
        scene.world.setBlock([3, 2, 3], "minecraft:mushroom_stem", false)
        scene.world.setBlock([4, 2, 3], "minecraft:mushroom_stem", false)
        scene.world.setBlock([5, 2, 3], "minecraft:mushroom_stem", false)
        scene.world.setBlock([5, 2, 4], "minecraft:mushroom_stem", false)
        scene.world.setBlock([5, 2, 5], "minecraft:mushroom_stem", false)
        scene.world.setBlock([5, 3, 5], "minecraft:red_mushroom_block", false)
        scene.idle(20);
        scene.overlay.showOutline("blue", { "glue": true }, [4, 3, 4], 30);
        scene.text(20, "周围有6个菌类", [4.5, 3.5, 4.5]);
        scene.overlay.showOutline("green", { "glue": true }, [3, 2, 3, 5, 4, 5], 30);
        scene.idle(30);
        scene.world.setBlock([4, 3, 4], "minecraft:mushroom_stem", false)
        scene.text(30, "变为菌类：菌柄多有75%%的概率变为菌柄，菌盖多有75%%的概率变为菌盖", [4.5, 3.5, 4.5]);
        scene.overlay.showOutline("blue", { "glue": true }, [4, 3, 4], 30);
        scene.idle(50);
        scene.world.setBlocks([3, 2, 3, 5, 4, 5], false, "minecraft:air")
        scene.world.setBlock([4, 3, 4], "minecraft:mushroom_stem", false)
        scene.text(60, "如果它是菌类...").attachKeyFrame()
        scene.overlay.showOutline("blue", { "glue": true }, [4, 3, 4], 30);
        scene.idle(80);
        scene.text(60, "当周围菌类少于3或菌类多于8，则它会死去", [4.5, 3.5, 4.5]).attachKeyFrame()
        scene.overlay.showOutline("green", { "glue": true }, [3, 2, 3, 5, 4, 5], 30);
        scene.idle(20);
        scene.world.setBlock([4, 3, 4], "minecraft:air", false)
        scene.overlay.showOutline("blue", { "glue": true }, [4, 3, 4], 30);
        scene.idle(60);
        scene.world.setBlock([4, 3, 4], "minecraft:mushroom_stem", false)
        scene.world.setBlock([3, 2, 3], "minecraft:mushroom_stem", false)
        scene.world.setBlock([4, 2, 3], "minecraft:mushroom_stem", false)
        scene.world.setBlock([5, 2, 3], "minecraft:mushroom_stem", false)
        scene.world.setBlock([5, 2, 4], "minecraft:mushroom_stem", false)
        scene.world.setBlock([5, 2, 5], "minecraft:mushroom_stem", false)
        scene.world.setBlock([5, 3, 5], "minecraft:red_mushroom_block", false)
        scene.text(120, "否则，它将有50%%的概率转变自己的形态，以让菌盖与菌柄的比例趋于理想比值。对于红色蘑菇而言，这一值为6").attachKeyFrame()
        scene.idle(20);
        scene.text(40, "周围有6个菌柄，但仅有1个菌盖", [4.5, 3.5, 4.5]);
        scene.overlay.showOutline("green", { "glue": true }, [3, 2, 3, 5, 4, 5], 30);
        scene.idle(50);
        scene.world.setBlock([4, 3, 4], "minecraft:red_mushroom_block", false)
        scene.text(30, "50%几率变为菌盖", [4.5, 3.5, 4.5]);
        scene.overlay.showOutline("blue", { "glue": true }, [4, 3, 4], 30);
        scene.idle(60);
        scene.text(60, "3*3*3范围内的每一个方块都会进行生长——也就是5*5*5范围内的方块决定了生长的结果", [4.5, 3.5, 4.5]).attachKeyFrame()
        scene.overlay.showOutline("green", { "glue": true }, [3, 2, 3, 5, 4, 5], 30);
        scene.overlay.showOutline("red", { "glue": true }, [2, 1, 2, 6, 5, 6], 30);
        scene.idle(20);
        scene.world.setBlock([3, 2, 3], "minecraft:air", false)
        scene.world.setBlock([4, 2, 3], "minecraft:red_mushroom_block", false)
        scene.world.setBlock([5, 2, 3], "minecraft:red_mushroom_block", false)
        scene.world.setBlock([4, 3, 3], "minecraft:mushroom_stem", false)
        scene.world.setBlock([5, 3, 3], "minecraft:mushroom_stem", false)
        scene.world.setBlock([4, 2, 4], "minecraft:red_mushroom_block", false)
        scene.world.setBlock([5, 2, 4], "minecraft:mushroom_stem", false)
        scene.world.setBlock([4, 3, 4], "minecraft:red_mushroom_block", false)
        scene.world.setBlock([5, 3, 4], "minecraft:red_mushroom_block", false)
        scene.world.setBlock([4, 2, 5], "minecraft:mushroom_stem", false)
        scene.world.setBlock([5, 2, 5], "minecraft:mushroom_stem", false)
        scene.world.setBlock([4, 3, 5], "minecraft:mushroom_stem", false)
        scene.world.setBlock([5, 3, 5], "minecraft:red_mushroom_block", false)
        scene.idle(60);
      }
    )
});