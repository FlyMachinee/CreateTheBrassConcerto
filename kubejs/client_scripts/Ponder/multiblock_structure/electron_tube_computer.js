Ponder.registry((event) => {
  event
    .create(["kubejs:electron_tube_computer", "kubejs:aluminum_hard_disk"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:build_electron_tube_computer",
      "建造电子管计算机",
      "kubejs:electron_tube_computer",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 6);
        scene.showStructure(8);
        scene.scaleSceneView(0.85);
        scene.setSceneOffsetY(-1)
        scene.text(60, "你需要在电子管计算机控制器附近建造结构来完成电子管计算机");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0, 1, 0, 5, 9, 5], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        const Layer1 = [[0, 1, 1], [1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 1, 1], [5, 1, 1], [0, 1, 2], [1, 1, 2], [2, 1, 2], [3, 1, 2], [4, 1, 2], [5, 1, 2], [0, 1, 3], [1, 1, 3], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [0, 1, 4], [1, 1, 4], [2, 1, 4], [3, 1, 4], [4, 1, 4], [5, 1, 4],]
        const Layer2 = [[0, 2, 1], [1, 2, 1], [4, 2, 1], [5, 2, 1], [0, 2, 2], [1, 2, 2], [2, 2, 2], [3, 2, 2], [4, 2, 2], [5, 2, 2], [0, 2, 3], [1, 2, 3], [2, 2, 3], [3, 2, 3], [4, 2, 3], [5, 2, 3], [0, 2, 4], [1, 2, 4], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4],]
        const Layer3 = [[0, 3, 2], [1, 3, 2], [2, 3, 2], [3, 3, 2], [4, 3, 2], [5, 3, 2], [0, 3, 3], [1, 3, 3], [2, 3, 3], [3, 3, 3], [4, 3, 3], [5, 3, 3],]
        const Layer4 = [[0, 4, 2], [1, 4, 2], [2, 4, 2], [3, 4, 2], [4, 4, 2], [5, 4, 2], [0, 4, 3], [1, 4, 3], [2, 4, 3], [3, 4, 3], [4, 4, 3], [5, 4, 3],]
        const Layer5 = [[0, 5, 2], [1, 5, 2], [2, 5, 2], [3, 5, 2], [4, 5, 2], [5, 5, 2], [0, 5, 3], [1, 5, 3], [2, 5, 3], [3, 5, 3], [4, 5, 3], [5, 5, 3],]
        const Layer6 = [[1, 6, 2], [2, 6, 2], [3, 6, 2], [4, 6, 2], [1, 6, 3], [2, 6, 3], [3, 6, 3], [4, 6, 3],]
        scene.addKeyframe();
        scene.text(30, "第 1 层：", [3, 1, 2])
        for (let i of Layer1) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(46);
        scene.addKeyframe();
        scene.text(30, "第 2 层：", [3, 2, 2])
        for (let i of Layer2) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(20);
        scene.rotateCameraY(-180);
        scene.idle(20);
        scene.text(60, "请注意控制器的方向", [2, 2, 4]);
        scene.overlay.showOutline("red", {}, [2, 2, 4], 30);
        scene.idle(60);
        scene.rotateCameraY(-180);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(30, "第 3 层：", [3, 3, 2])
        for (let i of Layer3) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 4 层：", [3, 4, 2])
        for (let i of Layer4) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 5 层：", [3, 5, 2])
        for (let i of Layer5) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 6 层：", [3, 6, 2])
        for (let i of Layer6) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
      }
    )
});