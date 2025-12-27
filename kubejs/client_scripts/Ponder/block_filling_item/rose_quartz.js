Ponder.registry((event) => {
  event
    .create(["create:rose_quartz"])
    .tag("kubejs:block_filling_item")
    .scene(
      "kubejs:rose_quartz",
      "使用乙醇注液转化紫水晶簇",
      "kubejs:9x9base",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.world.showSection([0, 1, 0, 9, 6, 9], Direction.down)
        scene.world.setBlock([4, 1, 4], "create:depot", false)
        scene.world.setBlock([4, 1, 1], "create:depot", false)
        scene.world.setBlock([4, 4, 4], "create:spout", false)
        scene.world.setBlock([4, 5, 4], "create:mechanical_pump", false)
        scene.world.modifyBlock([4, 5, 4], state => state.with("facing", "down"), false)
        scene.world.setBlock([4, 6, 4], "create:creative_fluid_tank", false)
        scene.world.modifyTileNBT([4, 6, 4], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "createdieselgenerators:ethanol" }
        })
        scene.world.createItemOnBeltLike([4, 1, 1], Direction.down, "create:rose_quartz")
        let Inputs = ["minecraft:amethyst_cluster"]

        for (let i = 0; i < Inputs.length; i++) {
          scene.world.setBlock([Math.floor(i / 7) + 6, 1, i % 7 + 1], Inputs[i], false);
        }

        scene.idle(20);
        scene.text(120, "方块种类要求：紫水晶簇", [6.5, 1, 1.5]);
        scene.overlay.showOutline("red", { "glue": true }, [6, 1, 1, 8, 1, 7], 120);
        scene.text(120, "需要空的置物台\n物品产出：1x 玫瑰石英", [4.5, 1.5, 4.5]);
        scene.overlay.showOutline("green", { "glue": true }, [4, 1, 4], 120);
        scene.text(120, "流体消耗：500mB 乙醇", [4.5, 5.5, 4.5]);
        scene.overlay.showOutline("green", { "glue": true }, [4, 1, 1], 120);
        scene.text(120, "消耗方块", [4.5, 2.5, 4.5]);
        scene.overlay.showOutline("red", { "glue": true }, [4, 2, 4], 120);

        scene.world.setBlock([4, 2, 4], "minecraft:amethyst_cluster", false);
        scene.world.modifyBlocks([4, 2, 4], state => state.with("facing", "north"), false)
        scene.idle(10)

        scene.idle(20);
        scene.world.setBlock([4, 2, 4], "air", true);
        scene.world.createItemOnBeltLike([4, 1, 4], Direction.down, "create:rose_quartz")
        scene.idle(100 - (10 * Inputs.length));
      }
    )
});