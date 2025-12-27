Ponder.registry((event) => {
  event
    .create(["create:placard", "kubejs:saline_water_bucket", "kubejs:cryogen_bucket"])
    .tag("kubejs:matrix")
    .scene(
      "kubejs:matrix_chain_contraction",
      "信息素加工-正/反缩链",
      "kubejs:matrix_single",
      (scene, utils) => {
        scene.setSceneOffsetY(-2)
        scene.rotateCameraY(22.5);
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(9);
        scene.idle(20)

        scene.text(60, "你可以使用方块注液的方式对置物板上的信息素进行缩链加工").attachKeyFrame();
        scene.overlay.showOutline("red", {}, [1, 1, 4, 1, 4, 4], 30);
        scene.overlay.showOutline("fast", {}, [1, 1, 4], 30);
        scene.text(30, "置物台必须是空的", [1.5, 1.5, 4.5])
        scene.idle(80)

        scene.text(60, "假设这是信息素一开始的结构...").attachKeyFrame();
        scene.overlay.showOutline("fast", {}, [8, 1, 3, 8, 5, 3], 20);
        scene.idle(80)

        scene.overlay.showOutline("blue", {}, [1, 6, 4], 30);
        scene.world.modifyTileNBT([1, 6, 4], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:saline_water" }
        })
        scene.text(60, "使用饱和盐水进行正缩链，将会获得如下结果：").attachKeyFrame();
        setPlate([5, 5, 3], "design_decor:b_sign")
        scene.world.setBlock([4, 5, 3], "design_decor:brass_screw", false)
        scene.world.modifyBlock([4, 5, 3], state => state.with("facing", "north"), false)
        setPlate([3, 5, 3], "design_decor:a_sign")
        setPlate([4, 4, 3], "design_decor:c_sign")
        setPlate([4, 3, 3], "design_decor:d_sign")
        setPlate([4, 2, 3], "design_decor:e_sign")
        scene.overlay.showOutline("fast", {}, [3, 1, 3, 5, 5, 3], 20);
        scene.idle(60)
        scene.world.setBlocks([3, 1, 3, 5, 5, 3], false, "minecraft:air")


        scene.idle(20)
        scene.world.modifyTileNBT([1, 6, 4], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:cryogen" }
        })
        scene.text(60, "而使用冷冻剂进行反缩链，将会获得如下结果：").attachKeyFrame();
        setPlate([5, 5, 3], "design_decor:b_sign")
        scene.overlay.showOutline("fast", {}, [3, 1, 3, 5, 5, 3], 20);
        scene.world.setBlock([4, 5, 3], "create:placard", false)
        scene.world.modifyBlock([4, 5, 3], state => state.with("facing", "north"), false)
        scene.world.modifyBlock([4, 5, 3], state => state.with("face", "wall"), false)
        scene.world.modifyTileNBT([4, 5, 3], (nbt) => {
          nbt.Item = { Count: 1, id: "minecraft:blackstone_slab" }
        })
        setPlate([3, 5, 3], "design_decor:a_sign")
        setPlate([4, 4, 3], "design_decor:c_sign")
        setPlate([4, 3, 3], "design_decor:d_sign")
        setPlate([4, 2, 3], "design_decor:e_sign")
        scene.idle(80)
        function setPlate(pos, block) {
          scene.world.setBlock(pos, block, false)
          scene.world.modifyBlock(pos, state => state.with("facing", "south"), false)
        }

        scene.text(60, "在加工后，置物板上的信息素将被输出至下方的置物台").attachKeyFrame();
        scene.idle(20)
        scene.world.createItemOnBeltLike([1, 1, 4], Direction.up, "kubejs:matrix_2")
        scene.world.modifyTileNBT([1, 1, 4], (nbt) => {
          nbt.HeldItem.Item = { Count: 1, id: "kubejs:matrix_2", tag: { RGB: [[[-1, 1], [0, 0]], [[1, 0], [1, 0]]], matrix: [[[-1, 1], [0, 0]], [[1, 0], [1, 0]]] } }
        })
        scene.world.modifyTileNBT([1, 2, 4], (nbt) => {
          nbt.Item = { Count: 1, id: "minecraft:air" }
        })
        scene.idle(60)
      }
    )
});