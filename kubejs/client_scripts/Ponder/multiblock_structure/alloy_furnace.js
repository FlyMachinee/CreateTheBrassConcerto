Ponder.registry((event) => {
  event
    .create(["kubejs:alloy_furnace", "kubejs:industrial_iron", "kubejs:brass_bucket", "kubejs:industrial_iron_bucket"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_alloy_furnace",
      "合金冶炼",
      "kubejs:alloy_furnace",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        const Layer = [[3, 1, 2], [5, 1, 2], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [3, 1, 4], [4, 1, 4], [5, 1, 4], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [3, 1, 6], [5, 1, 6], [3, 2, 2], [4, 2, 2], [5, 2, 2], [2, 2, 3], [3, 2, 3], [4, 2, 3], [5, 2, 3], [6, 2, 3], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [2, 2, 5], [3, 2, 5], [4, 2, 5], [5, 2, 5], [6, 2, 5], [3, 2, 6], [4, 2, 6], [5, 2, 6], [3, 3, 2], [4, 3, 2], [5, 3, 2], [2, 3, 3], [3, 3, 3], [4, 3, 3], [5, 3, 3], [6, 3, 3], [2, 3, 4], [3, 3, 4], [4, 3, 4], [5, 3, 4], [6, 3, 4], [2, 3, 5], [3, 3, 5], [4, 3, 5], [5, 3, 5], [6, 3, 5], [3, 3, 6], [4, 3, 6], [5, 3, 6], [4, 4, 2], [3, 4, 3], [4, 4, 3], [5, 4, 3], [2, 4, 4], [3, 4, 4], [4, 4, 4], [5, 4, 4], [6, 4, 4], [3, 4, 5], [4, 4, 5], [5, 4, 5], [4, 5, 2], [3, 5, 3], [4, 5, 3], [5, 5, 3], [2, 5, 4], [3, 5, 4], [4, 5, 4], [5, 5, 4], [6, 5, 4], [3, 5, 5], [4, 5, 5], [5, 5, 5], [4, 5, 6], [4, 6, 2], [3, 6, 3], [4, 6, 3], [5, 6, 3], [2, 6, 4], [3, 6, 4], [4, 6, 4], [5, 6, 4], [6, 6, 4], [3, 6, 5], [4, 6, 5], [5, 6, 5], [4, 6, 6], [4, 7, 2], [3, 7, 3], [4, 7, 3], [5, 7, 3], [2, 7, 4], [3, 7, 4], [4, 7, 4], [5, 7, 4], [6, 7, 4], [3, 7, 5], [4, 7, 5], [5, 7, 5], [4, 7, 6], [4, 8, 4], [4, 9, 3], [3, 9, 4], [4, 9, 4], [5, 9, 4], [4, 9, 5], [4, 10, 3], [3, 10, 4], [4, 10, 4], [5, 10, 4], [4, 10, 5], [4, 11, 3], [3, 11, 4], [4, 11, 4], [5, 11, 4], [4, 11, 5]]
        for (let i of Layer) {
          scene.world.showSection(i, Direction.down)
        }
        scene.setSceneOffsetY(-3)
        scene.scaleSceneView(0.6);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "各种合金都是重要的工业原料，你可以使用合金炉更高效地生产它们");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "首先，合金炉必须有完整的结构，其所有安山泛光灯也必须点亮");
        scene.text(60, "核心位置", [4, 9, 4]);
        scene.overlay.showOutline("green", {}, [4, 9, 4], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "请注意：核心的正侧应面向前方!所有的多方块机器核心基本都具有方向性！");
        scene.overlay.showOutline("red", {}, [4, 9, 4], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "接着，你需要点燃所有的带吸管燃烧室(必须是普通加热)");
        scene.overlay.showOutline("fast", {}, [3, 1, 3, 5, 1, 5], 60);
        scene.showControls(15, [3, 0, 3], "up").withItem("kubejs:natural_gas_bucket")
        scene.world.modifyBlock([3, 1, 3, 5, 1, 5], state => state.with("blaze", "kindled"), false)
        scene.world.modifyTileNBT([3, 1, 3, 5, 1, 5], (nbt) => { nbt.fuelLevel = 1 });
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "接着，你只需要输入所需的物品并等待配方完成");
        scene.idle(20);
        scene.rotateCameraY(-90);
        const Layer1 = [[2, 8, 4], [2, 7, 5], [2, 6, 6], [2, 5, 6], [2, 4, 6], [2, 3, 6], [2, 2, 6], [3, 8, 4], [5, 8, 4], [5, 8, 5], [5, 7, 6], [5, 6, 7], [5, 5, 8], [6, 5, 8]]
        for (let i of Layer1) {
          scene.world.showSection(i, Direction.down)
        }
        scene.idle(10);
        const item1 = scene.world.createItemOnBelt([5, 5, 8], Direction.south, "64x create:crushed_raw_iron")
        scene.idle(10);
        const item2 = scene.world.createItemOnBelt([5, 5, 8], Direction.south, "64x create:crushed_raw_iron")
        scene.idle(10);
        const item3 = scene.world.createItemOnBelt([5, 5, 8], Direction.south, "64x create:crushed_raw_iron")
        scene.idle(10);
        const item4 = scene.world.createItemOnBelt([5, 5, 8], Direction.south, "64x create:andesite_alloy")
        scene.world.removeItemsFromBelt([5, 8, 4])
        scene.idle(10);
        scene.world.removeItemsFromBelt([5, 8, 4])
        scene.idle(10);
        scene.addKeyframe();
        scene.text(120, "物品产出将留在合金炉核心中等待排出，而流体产出将被排放至后方的3x1x6的范围内");
        scene.overlay.showOutline("green", {}, [4, 9, 4], 30);
        scene.overlay.showOutline("fast", {}, [3, 2, 7, 5, 2, 12], 60);
        scene.world.removeItemsFromBelt([5, 8, 4])
        scene.idle(10);
        scene.world.removeItemsFromBelt([5, 8, 4])
        scene.idle(10);
        for (let i2 = 7; i2 < 9; i2++) {
          for (let i1 = 5; i1 > 2; i1--) {
            scene.world.setBlock([i1, 2, i2], "kubejs:industrial_iron", true);
            scene.world.showSection([i1, 2, i2], Direction.down)
            let item5 = scene.world.createItemOnBelt([3, 8, 4], Direction.east, "1x create:andesite_alloy")
            scene.idle(10);
            scene.idle(10);
          }
        }
        scene.addKeyframe();
        scene.text(60, "你可以在液池旁边自由修建各种结构从而达成自动化。所有的安山漏斗都可以换成黄铜漏斗!");
        scene.idle(30);
        scene.world.hideSection([3, 2, 7, 5, 2, 12], Direction.up);
        scene.rotateCameraY(90);
        scene.idle(30);
      }
    )
    .scene(
      "kubejs:alloy_furnace",
      "建造合金炉",
      "kubejs:alloy_furnace",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.setSceneOffsetY(-3)
        scene.scaleSceneView(0.6);
        const Layer = [[3, 1, 2], [5, 1, 2], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [3, 1, 4], [4, 1, 4], [5, 1, 4], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [3, 1, 6], [5, 1, 6], [3, 2, 2], [4, 2, 2], [5, 2, 2], [2, 2, 3], [3, 2, 3], [4, 2, 3], [5, 2, 3], [6, 2, 3], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [2, 2, 5], [3, 2, 5], [4, 2, 5], [5, 2, 5], [6, 2, 5], [3, 2, 6], [4, 2, 6], [5, 2, 6], [3, 3, 2], [4, 3, 2], [5, 3, 2], [2, 3, 3], [3, 3, 3], [4, 3, 3], [5, 3, 3], [6, 3, 3], [2, 3, 4], [3, 3, 4], [4, 3, 4], [5, 3, 4], [6, 3, 4], [2, 3, 5], [3, 3, 5], [4, 3, 5], [5, 3, 5], [6, 3, 5], [3, 3, 6], [4, 3, 6], [5, 3, 6], [4, 4, 2], [3, 4, 3], [4, 4, 3], [5, 4, 3], [2, 4, 4], [3, 4, 4], [4, 4, 4], [5, 4, 4], [6, 4, 4], [3, 4, 5], [4, 4, 5], [5, 4, 5], [4, 5, 2], [3, 5, 3], [4, 5, 3], [5, 5, 3], [2, 5, 4], [3, 5, 4], [4, 5, 4], [5, 5, 4], [6, 5, 4], [3, 5, 5], [4, 5, 5], [5, 5, 5], [4, 5, 6], [4, 6, 2], [3, 6, 3], [4, 6, 3], [5, 6, 3], [2, 6, 4], [3, 6, 4], [4, 6, 4], [5, 6, 4], [6, 6, 4], [3, 6, 5], [4, 6, 5], [5, 6, 5], [4, 6, 6], [4, 7, 2], [3, 7, 3], [4, 7, 3], [5, 7, 3], [2, 7, 4], [3, 7, 4], [4, 7, 4], [5, 7, 4], [6, 7, 4], [3, 7, 5], [4, 7, 5], [5, 7, 5], [4, 7, 6], [4, 8, 4], [4, 9, 3], [3, 9, 4], [4, 9, 4], [5, 9, 4], [4, 9, 5], [4, 10, 3], [3, 10, 4], [4, 10, 4], [5, 10, 4], [4, 10, 5], [4, 11, 3], [3, 11, 4], [4, 11, 4], [5, 11, 4], [4, 11, 5]]
        for (let i of Layer){
        scene.world.showSection(i,Direction.down)
        }
        scene.idle(20);
        scene.text(60, "你需要在合金炉核心附近建造结构来完成合金炉");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        for (let i of Layer){
        scene.world.hideSection(i, Direction.up);
        }
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        scene.idle(80);
        const Layer1 = [[3, 1, 2], [5, 1, 2], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [3, 1, 4], [4, 1, 4], [5, 1, 4], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [3, 1, 6], [5, 1, 6],]
        const Layer2 = [[3, 2, 2], [4, 2, 2], [5, 2, 2], [2, 2, 3], [3, 2, 3], [4, 2, 3], [5, 2, 3], [6, 2, 3], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [2, 2, 5], [3, 2, 5], [4, 2, 5], [5, 2, 5], [6, 2, 5], [3, 2, 6], [4, 2, 6], [5, 2, 6],]
        const Layer3 = [[3, 3, 2], [4, 3, 2], [5, 3, 2], [2, 3, 3], [3, 3, 3], [4, 3, 3], [5, 3, 3], [6, 3, 3], [2, 3, 4], [3, 3, 4], [4, 3, 4], [5, 3, 4], [6, 3, 4], [2, 3, 5], [3, 3, 5], [4, 3, 5], [5, 3, 5], [6, 3, 5], [3, 3, 6], [4, 3, 6], [5, 3, 6],]
        const Layer4 = [[4, 4, 2], [3, 4, 3], [4, 4, 3], [5, 4, 3], [2, 4, 4], [3, 4, 4], [4, 4, 4], [5, 4, 4], [6, 4, 4], [3, 4, 5], [4, 4, 5], [5, 4, 5],]
        const Layer5 = [[4, 5, 2], [3, 5, 3], [4, 5, 3], [5, 5, 3], [2, 5, 4], [3, 5, 4], [4, 5, 4], [5, 5, 4], [6, 5, 4], [3, 5, 5], [4, 5, 5], [5, 5, 5], [4, 5, 6],]
        const Layer6 = [[4, 6, 2], [3, 6, 3], [4, 6, 3], [5, 6, 3], [2, 6, 4], [3, 6, 4], [4, 6, 4], [5, 6, 4], [6, 6, 4], [3, 6, 5], [4, 6, 5], [5, 6, 5], [4, 6, 6],]
        const Layer7 = [[4, 7, 2], [3, 7, 3], [4, 7, 3], [5, 7, 3], [2, 7, 4], [3, 7, 4], [4, 7, 4], [5, 7, 4], [6, 7, 4], [3, 7, 5], [4, 7, 5], [5, 7, 5], [4, 7, 6],]
        const Layer8 = [[4, 8, 4],]
        const Layer9 = [[4, 9, 3], [3, 9, 4], [4, 9, 4], [5, 9, 4], [4, 9, 5],]
        const Layer10 = [[4, 10, 3], [3, 10, 4], [4, 10, 4], [5, 10, 4], [4, 10, 5],]
        const Layer11 = [[4, 11, 3], [3, 11, 4], [4, 11, 4], [5, 11, 4], [4, 11, 5],]
        scene.addKeyframe();
        scene.text(30, "第 1 层：", [3, 1, 3])
        for (let i of Layer1) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.text(60, "请注意，燃烧室必须加装吸管", [3, 1, 3])
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "第 2 层：", [3, 2, 3])
        for (let i of Layer2) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
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
        scene.addKeyframe();
        scene.text(30, "第 5 层：", [3, 5, 3])
        for (let i of Layer5) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 6 层：", [3, 6, 3])
        for (let i of Layer6) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 7 层：", [3, 7, 3])
        for (let i of Layer7) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 8 层：", [3, 8, 3])
        for (let i of Layer8) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 9 层：", [3, 9, 3])
        for (let i of Layer9) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(60, "请注意：核心的正侧应面向前方；周围的漏斗可以换成黄铜制的", [4, 9, 4]);
        scene.overlay.showOutline("red", {}, [4, 9, 4], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "第 10 层：", [3, 10, 3])
        for (let i of Layer10) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 11 层：", [3, 11, 3])
        for (let i of Layer11) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.rotateCameraY(-180);
        scene.idle(80);
        scene.rotateCameraY(-180);
      }
    );
});