Ponder.registry((event) => {
  event
    .create(["kubejs:trading_station"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:build_trading_station",
      "建造自动贸易站",
      "kubejs:trading_station",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(8);
        scene.scaleSceneView(0.9);
        scene.setSceneOffsetY(-1)
        scene.idle(20);
        scene.text(60, "你需要在自动贸易站核心附近建造结构来完成自动贸易站");
        scene.addKeyframe();
        scene.idle(80);
        scene.text(60, "除此以外，你还可以将抽屉控制器换成抽屉、容器扩展端口、集装箱或保险库！", [4, 3, 5]).attachKeyFrame();
        scene.overlay.showOutline("red", {}, [4, 3, 5], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0, 1, 0, 8, 8, 8], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        scene.idle(80);
        const Layer1 = [[3, 1, 3], [4, 1, 3], [5, 1, 3], [2, 1, 4], [3, 1, 4], [4, 1, 4], [5, 1, 4], [6, 1, 4], [3, 1, 5], [4, 1, 5], [5, 1, 5],]
        const Layer2 = [[3, 2, 3], [5, 2, 3], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [4, 2, 5],]
        const Layer3 = [[3, 3, 3], [4, 3, 3], [5, 3, 3], [3, 3, 4], [4, 3, 4], [5, 3, 4], [4, 3, 5],]
        const Layer4 = [[3, 4, 4], [4, 4, 4], [5, 4, 4], [4, 4, 5],]
        const Layer5 = [[4, 5, 4],]
        const Layer6 = [[4, 6, 4],]
        const Layer7 = [[4, 7, 4],]
        scene.addKeyframe();
        scene.text(30, "第 1 层：", [3, 1, 2])
        for (let i of Layer1) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 2 层：", [3, 2, 2])
        for (let i of Layer2) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 3 层：", [3, 3, 2])
        for (let i of Layer3) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(20);
        scene.text(60, "请注意：控制器应面朝前方！", [4, 3, 4]).attachKeyFrame();
        scene.overlay.showOutline("red", {}, [4, 3, 4], 30);
        scene.idle(80);
        scene.text(60, "除此以外，你还可以将这里换成抽屉、容器扩展端口、集装箱或保险库！", [4, 3, 5]).attachKeyFrame();
        scene.overlay.showOutline("red", {}, [4, 3, 5], 30);
        scene.idle(80);
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
        scene.addKeyframe();
        scene.text(30, "第 7 层：", [3, 7, 2])
        for (let i of Layer7) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
      }
    );
});