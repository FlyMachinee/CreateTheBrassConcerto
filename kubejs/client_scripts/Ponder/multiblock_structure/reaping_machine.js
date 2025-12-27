Ponder.registry((event) => {
  event
    .create(["kubejs:cap_reaping_machine", "kubejs:stem_reaping_machine"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:reaping_machine",
      "高效收割菌盖与菌柄",
      "kubejs:reaping_machine",
      (scene, utils) => {
        scene.scaleSceneView(0.8);
        scene.setSceneOffsetY(-1)
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.world.showIndependentSectionImmediately([6, 2, 4])
        scene.world.showIndependentSectionImmediately([2, 2, 4])
        //scene.world.showSection([0, 1, 0,9,6,9], Direction.down)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "你需要使用菌盖收割机与菌柄收割机来高效收割菌盖与菌柄");
        scene.idle(10);
        scene.text(20, "菌盖收割机", [6, 2, 4]);
        scene.idle(10);
        scene.text(20, "菌柄收割机", [2, 2, 4]);
        scene.idle(60);

        function displayBlock(blockType, pos) {
          scene.world.setBlock(pos, blockType, false)
          scene.world.showSection(pos, Direction.down)
          scene.idle(20);
          scene.world.hideSection(pos, Direction.down)
          scene.idle(10);
        }

        scene.addKeyframe();
        scene.text(60, "菌盖收割机会消耗合适的液体并自动收割上方的菌盖类方块");
        scene.overlay.showOutline("green", { "glue": true }, [6, 3, 4], 30);
        displayBlock("minecraft:red_mushroom_block", [6, 3, 4])
        displayBlock("minecraft:brown_mushroom_block", [6, 3, 4])
        displayBlock("ad_astra:aeronos_cap", [6, 3, 4])
        displayBlock("ad_astra:strophar_cap", [6, 3, 4])
        scene.idle(30);

        scene.addKeyframe();
        scene.text(60, "而菌盖收割机会消耗合适的液体并自动收割上方的菌柄类方块");
        scene.overlay.showOutline("green", { "glue": true }, [2, 3, 4], 30);
        displayBlock("minecraft:mushroom_stem", [2, 3, 4])
        displayBlock("ad_astra:aeronos_stem", [2, 3, 4])
        displayBlock("ad_astra:strophar_stem", [2, 3, 4])
        scene.idle(30);

        scene.addKeyframe();
        scene.text(60, "你只能从下方输入所需的流体");
        scene.world.showSection([6, 1, 4, 2, 1, 4], Direction.down)
        scene.idle(80);

        scene.addKeyframe();
        scene.text(60, "此外，如果收割机上方出现了错误类型的方块，那么它将会损坏！");
        scene.overlay.showOutline("red", { "glue": true }, [6, 3, 4], 30);
        displayBlock("minecraft:mushroom_stem", [6, 3, 4])
        scene.world.setBlock([6, 2, 4], "minecraft:air", true)
        scene.overlay.showOutline("red", { "glue": true }, [6, 3, 4], 30);
        scene.idle(30);
        scene.overlay.showOutline("red", { "glue": true }, [2, 3, 4], 30);
        displayBlock("minecraft:red_mushroom_block", [2, 3, 4])
        scene.world.setBlock([2, 2, 4], "minecraft:air", true)
        scene.overlay.showOutline("red", { "glue": true }, [2, 3, 4], 30);
        scene.idle(30);

      }
    );
});