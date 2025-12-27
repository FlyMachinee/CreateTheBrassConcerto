Ponder.registry((event) => {
  event
    .create(["kubejs:assembling_machine"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:build_assembling_controller",
      "建造自动组装机",
      "kubejs:assembling_controller",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(8);
        scene.setSceneOffsetY(-1)
        scene.scaleSceneView(0.8);
        scene.text(60, "你需要在自动组装机核心附近建造结构来完成自动组装机");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0,1,0,8,8,8], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        scene.idle(80);
        scene.addKeyframe();
        scene.world.showSection([0,1,0,8,1,8], Direction.down);
        scene.text(60, "第一层");
        scene.idle(80);
        scene.rotateCameraY(-180);
        scene.idle(80);
        scene.addKeyframe();
        scene.world.showSection([0,2,0,8,2,8], Direction.down);
        scene.text(60, "第二层");
        scene.idle(80);
        scene.text(60, "请注意控制器的方向",[4,2,1]);
        scene.overlay.showOutline("red", {}, [4,2,1], 30);
        scene.rotateCameraY(-180);
        scene.idle(80);
        scene.addKeyframe();
        scene.world.showSection([0,3,0,8,3,8], Direction.down);
        scene.text(60, "第三层");
        scene.idle(80);
        scene.rotateCameraY(-180);
        scene.idle(80);
        scene.addKeyframe();
        scene.world.showSection([0,4,0,8,4,8], Direction.down);
        scene.text(60, "第四层");
        scene.idle(80);
        scene.rotateCameraY(-180);
        scene.idle(80);
      }
    );
});