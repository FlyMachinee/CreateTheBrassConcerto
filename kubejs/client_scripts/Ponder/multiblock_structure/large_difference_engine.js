Ponder.registry((event) => {
  event
    .create(["kubejs:large_difference_engine", "kubejs:brass_hard_disk"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:build_large_difference_engine",
      "建造大型差分机",
      "kubejs:large_difference_engine",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(9);
        scene.scaleSceneView(0.65);
        scene.setSceneOffsetY(-1)
        scene.text(60, "你需要在大型差分机控制器附近建造结构来完成大型差分机");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0, 1, 0, 14, 9, 14], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        scene.idle(80);
        const Layer1 = [[6, 1, 2], [7, 1, 2], [8, 1, 2], [5, 1, 3], [6, 1, 3], [7, 1, 3], [8, 1, 3], [9, 1, 3], [5, 1, 4], [6, 1, 4], [7, 1, 4], [8, 1, 4], [9, 1, 4], [5, 1, 5], [6, 1, 5], [7, 1, 5], [8, 1, 5], [9, 1, 5], [5, 1, 6], [6, 1, 6], [7, 1, 6], [8, 1, 6], [9, 1, 6], [5, 1, 7], [6, 1, 7], [7, 1, 7], [8, 1, 7], [9, 1, 7], [5, 1, 8], [6, 1, 8], [7, 1, 8], [8, 1, 8], [9, 1, 8], [5, 1, 9], [6, 1, 9], [7, 1, 9], [8, 1, 9], [9, 1, 9], [5, 1, 10], [6, 1, 10], [7, 1, 10], [8, 1, 10], [9, 1, 10], [5, 1, 11], [6, 1, 11], [7, 1, 11], [8, 1, 11], [9, 1, 11], [6, 1, 12], [7, 1, 12], [8, 1, 12],]
        const Layer2 = [[5, 2, 3], [6, 2, 3], [7, 2, 3], [8, 2, 3], [9, 2, 3], [5, 2, 4], [6, 2, 4], [7, 2, 4], [8, 2, 4], [9, 2, 4], [5, 2, 5], [6, 2, 5], [7, 2, 5], [8, 2, 5], [9, 2, 5], [5, 2, 6], [6, 2, 6], [7, 2, 6], [8, 2, 6], [9, 2, 6], [5, 2, 7], [6, 2, 7], [7, 2, 7], [8, 2, 7], [9, 2, 7], [5, 2, 8], [6, 2, 8], [7, 2, 8], [8, 2, 8], [9, 2, 8], [5, 2, 9], [6, 2, 9], [7, 2, 9], [8, 2, 9], [9, 2, 9], [5, 2, 10], [6, 2, 10], [7, 2, 10], [8, 2, 10], [9, 2, 10], [5, 2, 11], [6, 2, 11], [7, 2, 11], [8, 2, 11], [9, 2, 11], [7, 2, 12],]
        const Layer3 = [[6, 3, 3], [7, 3, 3], [8, 3, 3], [6, 3, 4], [7, 3, 4], [8, 3, 4], [6, 3, 5], [7, 3, 5], [8, 3, 5], [6, 3, 6], [7, 3, 6], [8, 3, 6], [6, 3, 7], [7, 3, 7], [8, 3, 7], [6, 3, 8], [7, 3, 8], [8, 3, 8], [7, 3, 9], [6, 3, 10], [7, 3, 10], [8, 3, 10], [6, 3, 11], [7, 3, 11], [8, 3, 11],]
        const Layer4 = [[7, 4, 3], [6, 4, 4], [7, 4, 4], [8, 4, 4], [6, 4, 5], [8, 4, 5], [6, 4, 6], [7, 4, 6], [8, 4, 6], [6, 4, 7], [8, 4, 7], [6, 4, 8], [7, 4, 8], [8, 4, 8], [7, 4, 9], [6, 4, 10], [7, 4, 10], [8, 4, 10], [6, 4, 11], [7, 4, 11], [8, 4, 11], [6, 4, 12], [7, 4, 12], [8, 4, 12],]
        const Layer5 = [[7, 5, 4], [6, 5, 5], [8, 5, 5], [7, 5, 6], [6, 5, 7], [8, 5, 7], [7, 5, 8], [6, 5, 10], [7, 5, 10], [8, 5, 10], [6, 5, 11], [7, 5, 11], [8, 5, 11], [6, 5, 12], [7, 5, 12], [8, 5, 12],]
        const Layer6 = [[7, 6, 3], [6, 6, 4], [7, 6, 4], [8, 6, 4], [6, 6, 5], [8, 6, 5], [6, 6, 6], [7, 6, 6], [8, 6, 6], [6, 6, 7], [8, 6, 7], [6, 6, 8], [7, 6, 8], [8, 6, 8], [7, 6, 9], [6, 6, 10], [7, 6, 10], [8, 6, 10], [6, 6, 11], [7, 6, 11], [8, 6, 11], [6, 6, 12], [7, 6, 12], [8, 6, 12],]
        const Layer7 = [[7, 7, 4], [6, 7, 5], [8, 7, 5], [7, 7, 6], [6, 7, 7], [8, 7, 7], [7, 7, 8],]
        const Layer8 = [[7, 8, 4], [7, 8, 6], [7, 8, 8],]
        scene.addKeyframe();
        scene.text(30, "第 1 层：", [3, 1, 6])
        for (let i of Layer1) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "第 2 层：", [3, 2, 6])
        for (let i of Layer2) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(20);
        scene.rotateCameraY(-180);
        scene.idle(20);
        scene.text(60, "请注意控制器的方向", [7, 2, 12]);
        scene.overlay.showOutline("red", {}, [7, 2, 12], 30);
        scene.idle(60);
        scene.rotateCameraY(-180);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(30, "第 3 层：", [3, 3, 6])
        for (let i of Layer3) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(48);
        scene.addKeyframe();
        scene.text(30, "第 4 层：", [3, 4, 6])
        for (let i of Layer4) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(46);
        scene.addKeyframe();
        scene.text(30, "第 5 层：", [3, 5, 6])
        for (let i of Layer5) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 6 层：", [3, 6, 6])
        for (let i of Layer6) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(46);
        scene.addKeyframe();
        scene.text(30, "第 7 层：", [3, 7, 6])
        for (let i of Layer7) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 8 层：", [3, 8, 6])
        for (let i of Layer8) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);

      }
    )
    .scene(
      "kubejs:use_large_difference_engine",
      "使用大型差分机",
      "kubejs:large_difference_engine",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(9);
        scene.scaleSceneView(0.65);
        scene.setSceneOffsetY(-1)
        scene.text(60, "大型差分机是一种高效的计算机，能够提供大量的算力");
        scene.idle(80);
        scene.text(60, "首先，你需要确保结构搭建正确...");
        scene.idle(60);
        scene.rotateCameraY(-180);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "...然后，你需要为机器提供64rpm的转速。控制器仅接受来自后方链式传动箱的应力");
        scene.overlay.showOutline("red", {}, [7, 2, 12], 30);
        scene.overlay.showOutline("green", {}, [6, 4, 12, 8, 6, 12], 30);
        scene.world.modifyTileNBT([6, 2, 9, 8, 6, 12], (nbt) => { nbt.Speed = 64.0 });
        scene.world.modifyTileNBT([6, 3, 5, 6, 7, 7], (nbt) => { nbt.Speed = 128.0 });
        scene.world.modifyTileNBT([7, 3, 4, 7, 7, 8], (nbt) => { nbt.Speed = -64.0 });
        scene.world.modifyTileNBT([8, 3, 5, 8, 7, 7], (nbt) => { nbt.Speed = 128.0 });
        scene.idle(80);

      }
    )
});