Ponder.registry((event) => {
  event
    .create(["create:placard", "minecraft:amethyst_cluster", "kubejs:cola_puree_bucket"])
    .tag("kubejs:matrix")
    .scene(
      "kubejs:matrix_merge_chain",
      "信息素加工-并链",
      "kubejs:matrix_phase_overlay",
      (scene, utils) => {
        scene.setSceneOffsetY(-1)
        scene.rotateCameraY(22.5);
        scene.scaleSceneView(0.75)
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(9);
        scene.idle(20)
        scene.world.hideSection([6, 4, 3, 6, 8, 3], Direction.south)
        scene.world.hideSection([2, 4, 3, 2, 8, 3], Direction.south)
        let A = scene.world.showIndependentSectionImmediately([6, 6, 3, 6, 8, 3])
        let B = scene.world.showIndependentSectionImmediately([2, 7, 3, 2, 8, 3])

        scene.text(60, "你可以使用方块注液的方式对两个置物板上的信息素进行相位叠加").attachKeyFrame();
        scene.overlay.showOutline("red", {}, [5, 1, 2], 30);
        scene.overlay.showOutline("red", {}, [3, 1, 2], 30);
        scene.overlay.showOutline("slow", {}, [4, 1, 2], 30);
        scene.text(30, "置物台必须是空的", [4.5, 1.5, 2.5])
        scene.idle(80)

        scene.text(60, "紫水晶簇的方向决定了叠加时的次序").attachKeyFrame();
        scene.overlay.showOutline("slow", {}, [4, 2, 2], 30);
        scene.idle(80)

        scene.text(60, "假设这是两个信息素一开始的结构...").attachKeyFrame();
        scene.overlay.showOutline("fast", {}, [5, 1, 2], 30);
        scene.overlay.showOutline("slow", {}, [3, 1, 2], 30);
        scene.overlay.showOutline("fast", {}, [6, 4, 3, 6, 8, 3], 20);
        scene.overlay.showOutline("slow", {}, [2, 4, 3, 2, 8, 3], 20);
        scene.idle(80)

        scene.overlay.showOutline("blue", {}, [4, 1, 0], 30);
        scene.world.modifyTileNBT([4, 1, 0], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:cola_puree" }
        })
        scene.text(60, "使用可乐原浆进行并链，将会获得如下结果：").attachKeyFrame();
        scene.world.moveSection(A, [-2, 0, 0], 10)
        scene.world.moveSection(B, [2, -3, 0], 10)
        scene.idle(80)

        scene.text(60, "在加工后，信息素将被输出至置物台").attachKeyFrame();
        scene.idle(20)
        scene.world.createItemOnBeltLike([4, 1, 2], Direction.up, "kubejs:matrix_2")
        scene.world.modifyTileNBT([4, 1, 2], (nbt) => {
          nbt.HeldItem.Item = { Count: 1, id: "kubejs:matrix_2", tag: { RGB: [[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[1, 0], [1, 0]]], matrix: [[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[1, 0], [1, 0]]] } }
        })
        scene.world.modifyTileNBT([5, 1, 2], (nbt) => {
          nbt.Item = { Count: 1, id: "minecraft:air" }
        })
        scene.world.modifyTileNBT([3, 1, 2], (nbt) => {
          nbt.Item = { Count: 1, id: "minecraft:air" }
        })
        scene.idle(60)

      }
    )
});