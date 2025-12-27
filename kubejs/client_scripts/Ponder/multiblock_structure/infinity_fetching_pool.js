Ponder.registry((event) => {
  event
    .create(["kubejs:infinity_fetching_pool", "kubejs:saline_water_bucket", "kubejs:cryogen_bucket", "minecraft:lava_bucket"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_infinity_fetching_pool",
      "无限取液",
      "kubejs:infinity_fetching_pool",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.scaleSceneView(0.8);
        scene.setSceneOffsetY(-1)
        const Layer = [[2, 1, 2], [3, 1, 2], [4, 1, 2], [5, 1, 2], [6, 1, 2], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [2, 1, 4], [3, 1, 4], [4, 1, 4], [5, 1, 4], [6, 1, 4], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [2, 1, 6], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6], [2, 2, 2], [4, 2, 2], [6, 2, 2], [4, 2, 3], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [4, 2, 5], [2, 2, 6], [4, 2, 6], [6, 2, 6], [3, 3, 3], [4, 3, 3], [5, 3, 3], [3, 3, 4], [4, 3, 4], [5, 3, 4], [3, 3, 5], [4, 3, 5], [5, 3, 5], [3, 4, 2], [4, 4, 2], [5, 4, 2], [2, 4, 3], [6, 4, 3], [2, 4, 4], [6, 4, 4], [2, 4, 5], [6, 4, 5], [3, 4, 6], [4, 4, 6], [5, 4, 6]]
        for (let i of Layer) {
          scene.world.showSection(i, Direction.down);
        }
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "你也许已经厌倦了建造512格流体池，那么无限取液池会是你的好选择！");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "首先，核心附近必须修建正确的结构");
        scene.text(60, "核心位置", [4,2,4]);
        scene.overlay.showOutline("green", {}, [4,2,4], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "接着，你需要将对应的液体桶放入核心的过滤槽中");
        scene.overlay.showOutline("green", {}, [4, 2, 4], 60);
        scene.showControls(15, [4, 2, 4], "up").withItem("kubejs:saline_water_bucket")
        scene.idle(30);
        scene.showControls(15, [4, 2, 4], "up").withItem("kubejs:cryogen_bucket")
        scene.idle(30);
        scene.showControls(15, [4, 2, 4], "up").withItem("minecraft:lava_bucket")
        scene.idle(50);
        scene.addKeyframe();
        scene.text(60, "最后，你需要向蓄电池提供的电力（请注意，工作区域内的其它方块将被清除！）");
        scene.idle(40);
        scene.overlay.showOutline("green", {}, [3, 1, 3, 5, 1, 5], 60);
        scene.world.setBlock([3, 2, 3], "createaddition:creative_energy", true);
        scene.world.showSection([3, 2, 3], Direction.down);
        scene.idle(15);
        for (let i of [[5, 4, 3], [5, 4, 4], [5, 4, 5], [4, 4, 3], [4, 4, 4], [4, 4, 5], [3, 4, 3], [3, 4, 4], [3, 4, 5]]) {
          scene.world.showSection(i, Direction.down);
          scene.idle(1);
        }
        scene.addKeyframe();
        scene.text(60, "...如此，无限取液池便会在其上方产生对应流体");
        scene.overlay.showOutline("green", {}, [3, 4, 3, 5, 4, 5], 60);
        scene.idle(80);
        scene.text(60, "你可以在液池上方修建用于取出液体的管道，从而达成自动化");
        scene.world.showSection([3, 5, 3, 5, 7, 5], Direction.down);
        scene.idle(20);
        scene.world.hideSection([3, 4, 3, 5, 4, 5], Direction.up);
        scene.idle(20);
        scene.world.hideSection([3, 5, 3, 5, 7, 5], Direction.up);
        scene.idle(40);
      }
    )
    .scene(
      "kubejs:infinity_fetching_pool",
      "建造无限取液池",
      "kubejs:infinity_fetching_pool",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.scaleSceneView(0.8);
        scene.setSceneOffsetY(-1)
        const Layer = [[2, 1, 2], [3, 1, 2], [4, 1, 2], [5, 1, 2], [6, 1, 2], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [2, 1, 4], [3, 1, 4], [4, 1, 4], [5, 1, 4], [6, 1, 4], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [2, 1, 6], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6], [2, 2, 2], [4, 2, 2], [6, 2, 2], [4, 2, 3], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [4, 2, 5], [2, 2, 6], [4, 2, 6], [6, 2, 6], [3, 3, 3], [4, 3, 3], [5, 3, 3], [3, 3, 4], [4, 3, 4], [5, 3, 4], [3, 3, 5], [4, 3, 5], [5, 3, 5], [3, 4, 2], [4, 4, 2], [5, 4, 2], [2, 4, 3], [6, 4, 3], [2, 4, 4], [6, 4, 4], [2, 4, 5], [6, 4, 5], [3, 4, 6], [4, 4, 6], [5, 4, 6]]
        for (let i of Layer) {
          scene.world.showSection(i, Direction.down);
        }
        const Layer1 = [[2, 1, 2], [3, 1, 2], [4, 1, 2], [5, 1, 2], [6, 1, 2], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [2, 1, 4], [3, 1, 4], [4, 1, 4], [5, 1, 4], [6, 1, 4], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [2, 1, 6], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6]]
        const Layer2 = [[2, 2, 2], [4, 2, 2], [6, 2, 2], [4, 2, 3], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [4, 2, 5], [2, 2, 6], [4, 2, 6], [6, 2, 6]]
        const Layer3 = [[3, 3, 3], [4, 3, 3], [5, 3, 3], [3, 3, 4], [4, 3, 4], [5, 3, 4], [3, 3, 5], [4, 3, 5], [5, 3, 5]]
        const Layer4 = [[3, 4, 2], [4, 4, 2], [5, 4, 2], [2, 4, 3], [6, 4, 3], [2, 4, 4], [6, 4, 4], [2, 4, 5], [6, 4, 5], [3, 4, 6], [4, 4, 6], [5, 4, 6]]
        scene.text(60, "你需要在无限取液池核心附近建造结构来完成无限取液池");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        for (let i of Layer) {
          scene.world.hideSection(i, Direction.up);
        }
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "第 1 层：", [3, 1, 3])
        for (let i of Layer1) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(48);
        scene.addKeyframe();
        scene.text(30, "第 2 层：", [3, 2, 3])
        for (let i of Layer2) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.text(40, "核心在此（朝向任意！）", [4, 2, 4]);
        scene.overlay.showOutline("green", {}, [4, 2, 4], 40);
        scene.idle(60);
        scene.addKeyframe();
        scene.text(30, "第 3 层：", [3, 3, 3])
        for (let i of Layer3) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 4 层：", [3, 4, 3])
        for (let i of Layer4) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
      }
    );
});