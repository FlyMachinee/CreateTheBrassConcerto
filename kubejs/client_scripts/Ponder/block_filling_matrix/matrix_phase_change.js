Ponder.registry((event) => {
  event
    .create(["create:placard", "minecraft:placard","kubejs:red_spore_bucket", "kubejs:green_spore_bucket", "kubejs:blue_spore_bucket"])
    .tag("kubejs:matrix")
    .scene(
      "kubejs:matrix_phase_change",
      "信息素加工-相变",
      "kubejs:matrix_single",
      (scene, utils) => {
        scene.setSceneOffsetY(-2)
        scene.rotateCameraY(22.5);
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(9);
        scene.idle(20)

        scene.text(60, "你可以使用方块注液的方式对置物板上的信息素进行相变加工").attachKeyFrame();
        scene.overlay.showOutline("red", {}, [1, 1, 4, 1, 4, 4], 30);
        scene.overlay.showOutline("fast", {}, [1, 1, 4], 30);
        scene.text(30, "置物台必须是空的", [1.5, 1.5, 4.5])
        scene.idle(80)

        scene.text(60, "假设这是信息素一开始的结构...").attachKeyFrame();
        scene.overlay.showOutline("fast", {}, [8, 1, 3, 8, 5, 3], 20);
        scene.idle(80)

        scene.overlay.showOutline("blue", {}, [1, 6, 4], 30);
        scene.world.modifyTileNBT([1, 6, 4], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:green_spore" }
        })
        scene.text(60, "使用绿色孢子进行RG相变，将会获得如下结果：").attachKeyFrame();
        setPlate([4, 5, 3], "design_decor:b_sign")
        setPlate([4, 4, 3], "design_decor:a_sign")
        setPlate([4, 3, 3], "design_decor:c_sign")
        setPlate([4, 2, 3], "design_decor:d_sign")
        setPlate([4, 1, 3], "design_decor:e_sign")
        scene.overlay.showOutline("fast", {}, [3, 1, 3, 5, 5, 3], 20);
        scene.idle(60)
        scene.world.setBlocks([3, 1, 3, 5, 5, 3], false, "minecraft:air")
        scene.idle(20)

        
        scene.text(60, "需要注意的是，如果输入信息素相位少于2，RG相变将使用0矩阵补充缺少的相位").attachKeyFrame();
        scene.idle(80)

        scene.overlay.showOutline("blue", {}, [1, 6, 4], 30);
        scene.world.modifyTileNBT([1, 6, 4], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:blue_spore" }
        })
        scene.text(60, "使用蓝色孢子进行RB相变，将会获得如下结果：").attachKeyFrame();
        setPlate([4, 5, 3], "design_decor:c_sign")
        setPlate([4, 4, 3], "design_decor:b_sign")
        setPlate([4, 3, 3], "design_decor:a_sign")
        setPlate([4, 2, 3], "design_decor:d_sign")
        setPlate([4, 1, 3], "design_decor:e_sign")
        scene.overlay.showOutline("fast", {}, [3, 1, 3, 5, 5, 3], 20);
        scene.idle(60)
        scene.world.setBlocks([3, 1, 3, 5, 5, 3], false, "minecraft:air")
        scene.idle(20)

        scene.text(60, "需要注意的是，如果输入信息素相位少于3，RB相变将使用0矩阵补充缺少的相位").attachKeyFrame();
        scene.idle(80)

        scene.world.modifyTileNBT([1, 6, 4], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:cryogen" }
        })
        scene.text(60, "而使用红色孢子进行轮换相变，将会获得如下结果：").attachKeyFrame();
        scene.overlay.showOutline("fast", {}, [3, 1, 3, 5, 5, 3], 20);
        setPlate([4, 5, 3], "design_decor:b_sign")
        setPlate([4, 4, 3], "design_decor:c_sign")
        setPlate([4, 3, 3], "design_decor:d_sign")
        setPlate([4, 2, 3], "design_decor:e_sign")
        setPlate([4, 1, 3], "design_decor:a_sign")
        scene.idle(80)
        function setPlate(pos, block) {
          scene.world.setBlock(pos, block, false)
          scene.world.modifyBlock(pos, state => state.with("facing", "south"), false)
        }

        scene.text(60, "在加工后，置物板上的信息素将被输出至下方的置物台").attachKeyFrame();
        scene.idle(20)
        scene.world.createItemOnBeltLike([1, 1, 4], Direction.up, "kubejs:matrix_2")
        scene.world.modifyTileNBT([1, 1, 4], (nbt) => {
          nbt.HeldItem.Item = { Count: 1, id: "kubejs:matrix_2", tag: { RGB: [[[1, 0], [1, 0]], [[1, 0], [0, 1]], [[0, 1], [0, 1]]], matrix: [[[1, 0], [1, 0]], [[1, 0], [0, 1]], [[0, 1], [0, 1]]] } }
        })
        scene.world.modifyTileNBT([1, 2, 4], (nbt) => {
          nbt.Item = { Count: 1, id: "minecraft:air" }
        })
        scene.idle(60)
      }
    )
});