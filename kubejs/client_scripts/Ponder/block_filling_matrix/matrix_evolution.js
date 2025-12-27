Ponder.registry((event) => {
  event
    .create(["create:placard", "ad_astra:aeronos_cap", "ad_astra:strophar_cap", "kubejs:aeronos_spore_bucket", "kubejs:strophar_spore_bucket"])
    .tag("kubejs:matrix")
    .scene(
      "kubejs:matrix_evolution",
      "信息素加工-左/右嬗变",
      "kubejs:matrix_evolution",
      (scene, utils) => {
        scene.setSceneOffsetY(-1)
        scene.rotateCameraY(22.5);
        scene.scaleSceneView(0.75)
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(9);
        scene.idle(20)
        scene.world.hideSection([6, 4, 3, 6, 8, 3], Direction.south)
        scene.world.hideSection([4, 4, 3, 4, 7, 3], Direction.south)
        scene.world.hideSection([2, 4, 3, 2, 8, 3], Direction.south)
        let C = scene.world.showIndependentSectionImmediately([6, 4, 3, 6, 7, 3])
        let A = scene.world.showIndependentSectionImmediately([6, 8, 3, 6, 8, 3])
        let B = scene.world.showIndependentSectionImmediately([2, 4, 3, 2, 8, 3])

        scene.text(60, "你可以使用方块注液的方式对置物台上的信息素进行嬗变").attachKeyFrame();
        scene.overlay.showOutline("red", {}, [5, 1, 2], 30);
        scene.overlay.showOutline("green", {}, [3, 1, 2], 30);
        scene.overlay.showOutline("slow", {}, [4, 1, 2], 30);
        scene.text(30, "输出置物台必须是空的", [5.5, 1.5, 2.5])
        scene.idle(80)

        scene.text(60, "置物板的方向决定了输入输出的方向").attachKeyFrame();
        scene.overlay.showOutline("slow", {}, [4, 2, 2], 30);
        scene.idle(80)

        scene.text(60, "假设这是两个信息素一开始的结构...").attachKeyFrame();
        scene.overlay.showOutline("fast", {}, [4, 2, 2], 30);
        scene.overlay.showOutline("slow", {}, [3, 1, 2], 30);
        scene.overlay.showOutline("fast", {}, [6, 4, 3, 6, 8, 3], 20);
        scene.overlay.showOutline("slow", {}, [2, 4, 3, 2, 8, 3], 20);
        scene.idle(80)

        scene.overlay.showOutline("blue", {}, [4, 1, 0], 30);
        scene.world.modifyTileNBT([4, 1, 0], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:aeronos_spore" }
        })
        scene.text(60, "使用空果孢子进行左嬗变，将会获得如下结果：").attachKeyFrame();
        scene.world.moveSection(C, [0, 0, 1], 10)
        scene.world.moveSection(A, [-2, 0, 0], 10)
        scene.world.moveSection(B, [1, 0, 0], 10)
        setPlate([4, 4, 3, 4, 7, 3], "design_decor:a_sign")
        let D = scene.world.showIndependentSection([4, 4, 3, 4, 7, 3], Direction.north)
        function setPlate(pos, block) {
          scene.world.setBlocks(pos, false, block)
          scene.world.modifyBlocks(pos, state => state.with("facing", "south"), false)
        }
        scene.idle(80)
        scene.world.moveSection(D, [0, 0, 1], 10)
        scene.world.moveSection(C, [0, 0, -1], 10)
        scene.world.moveSection(A, [2, 0, 0], 10)
        scene.world.moveSection(B, [-1, 0, 0], 10)
        scene.idle(40)


        scene.overlay.showOutline("blue", {}, [4, 1, 0], 30);
        scene.world.modifyTileNBT([4, 1, 0], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:strophar_spore" }
        })
        scene.world.setBlock([4, 1, 2], "ad_astra:strophar_cap", true)
        scene.text(60, "而使用孑孓孢子进行右嬗变，将会获得如下结果：").attachKeyFrame();
        scene.world.moveSection(D, [-1, 0, -1], 10)
        scene.world.moveSection(C, [0, 0, 1], 10)
        scene.world.moveSection(A, [-3, 0, 0], 10)
        scene.world.moveSection(B, [2, 0, 0], 10)
        scene.idle(80)

        scene.text(60, "在加工后，信息素将被输出至置物台").attachKeyFrame();
        scene.idle(20)
        scene.world.createItemOnBeltLike([5, 1, 2], Direction.up, "kubejs:matrix_2")
        scene.world.modifyTileNBT([5, 1, 2], (nbt) => {
          nbt.HeldItem.Item = { Count: 63, id: "kubejs:matrix_2", tag: { RGB: [[[3, 7], [0, 0]], [[0, 0], [0, 0]], [[3, 7], [3, 7]]], matrix: [[[3, 7], [0, 0]], [[0, 0], [0, 0]], [[3, 7], [3, 7]]] } }
        })
        scene.world.modifyTileNBT([4, 2, 2], (nbt) => {
          nbt.Item = { Count: 1, id: "minecraft:air" }
        })
        scene.world.removeItemsFromBelt([3, 1, 2])
        scene.idle(60)

      }
    )
});