Ponder.registry((event) => {
  event
    .create(["kubejs:construction_station"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_construction_station",
      "使用自动构筑站",
      "kubejs:construction_station",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(8);
        scene.scaleSceneView(0.75);
        scene.setSceneOffsetY(-2)
        scene.text(60, "自动构筑站是一种至多输入4种物品和4种流体的多方块机器");
        scene.idle(80);
        scene.text(60, "首先，你需要确保结构搭建正确...");
        scene.idle(60);
        scene.rotateCameraY(-180);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "...然后，你需要为机器提供256rpm的转速。控制器仅接受来自下方十字齿轮箱的应力");
        scene.overlay.showOutline("green", {}, [3, 3, 7], 30);
        scene.world.modifyTileNBT([3, 2, 7], (nbt) => { nbt.Speed = -256.0 });
        scene.world.modifyTileNBT([2, 3, 3, 2, 3, 5], (nbt) => { nbt.Speed = 128.0 });
        scene.world.modifyTileNBT([1, 4, 3, 1, 4, 5], (nbt) => { nbt.Speed = -256.0 });
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "...除此以外，控制器还需要电能来执行配方");
        scene.world.setBlock([4, 3, 7],"createaddition:creative_energy",  true)
        scene.overlay.showOutline("green", {}, [4, 3, 7], 30);
        scene.idle(80);
      })
    .scene(
      "kubejs:build_construction_station",
      "建造自动构筑站",
      "kubejs:construction_station",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(8);
        scene.scaleSceneView(0.75);
        scene.setSceneOffsetY(-2)
        scene.text(60, "你需要在自动构筑站核心附近建造结构来完成自动构筑站");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0, 1, 0, 8, 8, 8], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        scene.idle(80);
        const Layer1 = [[1, 1, 2], [2, 1, 2], [3, 1, 2], [4, 1, 2], [5, 1, 2], [1, 1, 3], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [1, 1, 4], [2, 1, 4], [3, 1, 4], [4, 1, 4], [5, 1, 4], [6, 1, 4], [7, 1, 4], [1, 1, 5], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [7, 1, 5], [1, 1, 6], [2, 1, 6], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6], [7, 1, 6], [1, 1, 7], [2, 1, 7], [3, 1, 7], [4, 1, 7], [5, 1, 7], [6, 1, 7],]
        const Layer2 = [[1, 2, 2], [2, 2, 2], [3, 2, 2], [4, 2, 2], [1, 2, 3], [2, 2, 3], [3, 2, 3], [4, 2, 3], [5, 2, 3], [1, 2, 4], [2, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [1, 2, 5], [2, 2, 5], [4, 2, 5], [5, 2, 5], [6, 2, 5], [7, 2, 5], [1, 2, 6], [2, 2, 6], [3, 2, 6], [4, 2, 6], [5, 2, 6], [6, 2, 6], [3, 2, 7],]
        const Layer3 = [[2, 3, 2], [3, 3, 2], [4, 3, 2], [2, 3, 3], [5, 3, 3], [2, 3, 4], [3, 3, 4], [5, 3, 4], [6, 3, 4], [2, 3, 5], [3, 3, 5], [5, 3, 5], [6, 3, 5], [7, 3, 5], [2, 3, 6], [3, 3, 6], [4, 3, 6], [5, 3, 6], [6, 3, 6], [3, 3, 7],]
        const Layer4 = [[1, 4, 2], [2, 4, 2], [3, 4, 2], [4, 4, 2], [1, 4, 3], [2, 4, 3], [3, 4, 3], [4, 4, 3], [5, 4, 3], [1, 4, 4], [2, 4, 4], [3, 4, 4], [4, 4, 4], [5, 4, 4], [6, 4, 4], [1, 4, 5], [2, 4, 5], [3, 4, 5], [4, 4, 5], [5, 4, 5], [6, 4, 5], [7, 4, 5], [1, 4, 6], [2, 4, 6], [3, 4, 6], [4, 4, 6], [5, 4, 6], [6, 4, 6],]
        const Layer5 = [[2, 5, 2], [3, 5, 2], [4, 5, 2], [2, 5, 3], [3, 5, 3], [4, 5, 3], [5, 5, 3], [2, 5, 4], [3, 5, 4], [4, 5, 4], [5, 5, 4], [2, 5, 5], [3, 5, 5], [4, 5, 5], [5, 5, 5], [6, 5, 5], [2, 5, 6], [3, 5, 6], [4, 5, 6], [5, 5, 6],]
        const Layer6 = [[6, 6, 5],]
        scene.addKeyframe();
        scene.text(30, "第 1 层：", [4, 1, 3])
        for (let i of Layer1) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(74);
        scene.addKeyframe();
        scene.text(30, "第 2 层：", [4, 2, 3])
        for (let i of Layer2) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(52);
        scene.addKeyframe();
        scene.text(30, "第 3 层：", [4, 3, 3])
        for (let i of Layer3) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(20);
        scene.rotateCameraY(-180);
        scene.idle(20);
        scene.text(60, "请注意控制器的方向", [3, 3, 7]);
        scene.overlay.showOutline("red", {}, [3, 3, 7], 30);
        scene.idle(60);
        scene.rotateCameraY(-180);
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 4 层：", [4, 4, 3])
        for (let i of Layer4) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(54);
        scene.addKeyframe();
        scene.text(30, "第 5 层：", [4, 5, 3])
        for (let i of Layer5) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 6 层：", [4, 6, 3])
        for (let i of Layer6) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };

      }
    )
});