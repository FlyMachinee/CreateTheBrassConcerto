Ponder.registry((event) => {
  event
    .create(["create:placard", "minecraft:red_mushroom_block", "minecraft:brown_mushroom_block", "createdieselgenerators:ethanol_bucket"])
    .tag("kubejs:matrix")
    .scene(
      "kubejs:matrix_transposition",
      "信息素加工-逐相转置和逐相反转置",
      "kubejs:matrix_transposition",
      (scene, utils) => {
        scene.setSceneOffsetY(-1)
        scene.rotateCameraY(22.5);
        scene.scaleSceneView(0.75)
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(9);
        scene.idle(20)

        scene.text(60, "你可以使用方块注液的方式对置物台上的信息素进行逐相转置或逐相反转置").attachKeyFrame();
        scene.overlay.showOutline("red", {}, [5, 1, 4], 30);
        scene.overlay.showOutline("green", {}, [3, 1, 4], 30);
        scene.overlay.showOutline("slow", {}, [4, 1, 4], 30);
        scene.text(30, "输出置物台必须是空的", [5.5, 1.5, 4.5])
        scene.idle(80)

        scene.text(60, "置物板的方向决定了输入输出的方向").attachKeyFrame();
        scene.text(30, "置物板上必须为粘晶", [4.5, 2.5, 4.5])
        scene.overlay.showOutline("slow", {}, [4, 2, 4], 30);
        scene.idle(80)

        scene.overlay.showOutline("blue", {}, [4, 4, 4], 30);
        scene.world.modifyTileNBT([4, 4, 4], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "createdieselgenerators:ethanol" }
        })
        scene.text(60, "使用乙醇对红色蘑菇方块注液，将会获得初始信息素的逐相转置").attachKeyFrame();
        scene.idle(120)


        scene.world.setBlock([4, 1, 4], "minecraft:brown_mushroom_block", true)
        scene.text(60, "而使用乙醇对棕色蘑菇方块注液，将会获得初始信息素的逐相反转置").attachKeyFrame();
        scene.idle(80)

        scene.text(60, "在加工后，信息素将被输出至置物台").attachKeyFrame();
        scene.idle(20)
        scene.world.createItemOnBeltLike([5, 1, 4], Direction.up, "kubejs:matrix_2")
        scene.world.modifyTileNBT([5, 1, 4], (nbt) => {
          nbt.HeldItem.Item = { Count: 64, id: "kubejs:matrix_2", tag: { RGB: [[[1, 0], [0, 1]], [[1, 1], [0, 0]], [[0, 0], [1, 1]]], matrix: [[[1, 0], [0, 1]], [[1, 1], [0, 0]], [[0, 0], [1, 1]]] } }
        })
        scene.world.removeItemsFromBelt([3, 1, 4])
        scene.idle(60)

      }
    )
});