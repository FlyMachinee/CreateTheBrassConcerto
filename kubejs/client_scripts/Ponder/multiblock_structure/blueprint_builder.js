Ponder.registry((event) => {
  event
    .create(["kubejs:blueprint_builder"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_blueprint_builder",
      "使用蓝图构筑站",
      "kubejs:blueprint_builder",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(12);
        scene.scaleSceneView(0.5);
        scene.setSceneOffsetY(-2)
        scene.text(60, "蓝图构筑站是一种需要特殊交互的多方块机器，你可以用它便捷地获取多方块机器的蓝图材料！");
        scene.idle(80);
        scene.world.hideSection([4, 2, 4, 10, 9, 10],Direction.up)
        scene.text(60, "首先，你需要确保结构搭建正确...");
        scene.text(60, "核心位置", [7,3,0]);
        scene.overlay.showOutline("green", {}, [7,3,0], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "请注意：核心应当朝向前方!");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "...然后，你需要为机器提供64rpm的转速。控制器仅接受来自下方十字齿轮箱的应力");
        scene.overlay.showOutline("green", {}, [7, 3, 0], 30);
        scene.world.modifyTileNBT([7, 2, 0], (nbt) => { nbt.Speed = -64.0 });
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "...除此以外，你需要在机器的框架中填充392(7*8*7)个沙子用于塑形");
        scene.world.setBlocks([4, 2, 4, 10, 9, 10], "minecraft:sand", true)
        scene.world.showSection([4, 2, 4, 10, 9, 10],Direction.down)
        scene.overlay.showOutline("green", {}, [4, 2, 4, 10, 9, 10], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "在输入物品、设置过滤、提供硬盘、提供木桶之后，机器就会开始配方");
        scene.overlay.showOutline("green", {}, [7, 3, 0], 30);
        scene.showControls(5, [7, 3, 0], "up").withItem("create:industrial_iron_block")
        scene.idle(10);
        scene.showControls(5, [7, 3, 0], "up").withItem("create:blaze_burner")
        scene.idle(10);
        scene.showControls(5, [7, 3, 0], "up").withItem("kubejs:mechanical_core")
        scene.idle(10);
        scene.showControls(15, [7, 3, 0], "up").withItem("kubejs:alloy_furnace")
        scene.idle(10);
        scene.showControls(15, [7, 3, 0], "down").withItem("kubejs:tin_hard_disk")
        scene.idle(10);
        scene.showControls(15, [7, 3, 0], "up").withItem("minecraft:barrel")
        scene.idle(10);
        scene.world.setBlocks([4, 2, 4, 10, 9, 10], "minecraft:air", true)
        scene.idle(40);
        scene.addKeyframe();
        scene.text(60, "并在配方完成后输出装着对应机器所需材料的木桶");
        scene.showControls(30, [7, 3, 0], "down").withItem("minecraft:barrel")
        scene.idle(80);
      })
    .scene(
      "kubejs:build_blueprint_builder",
      "建造蓝图构筑站",
      "kubejs:blueprint_builder",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(12);
        scene.scaleSceneView(0.5);
        scene.setSceneOffsetY(-2)
        scene.text(60, "你需要在蓝图构筑站核心附近建造结构来完成蓝图构筑站");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0, 1, 0, 15, 12, 15], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        scene.idle(80);
        const Layer1 = [[5, 1, 0], [6, 1, 0], [7, 1, 0], [8, 1, 0], [9, 1, 0], [5, 1, 1], [6, 1, 1], [7, 1, 1], [8, 1, 1], [9, 1, 1], [5, 1, 2], [6, 1, 2], [7, 1, 2], [8, 1, 2], [9, 1, 2], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [7, 1, 3], [8, 1, 3], [9, 1, 3], [10, 1, 3], [11, 1, 3], [3, 1, 4], [4, 1, 4], [5, 1, 4], [6, 1, 4], [7, 1, 4], [8, 1, 4], [9, 1, 4], [10, 1, 4], [11, 1, 4], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [7, 1, 5], [8, 1, 5], [9, 1, 5], [10, 1, 5], [11, 1, 5], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6], [7, 1, 6], [8, 1, 6], [9, 1, 6], [10, 1, 6], [11, 1, 6], [3, 1, 7], [4, 1, 7], [5, 1, 7], [6, 1, 7], [7, 1, 7], [8, 1, 7], [9, 1, 7], [10, 1, 7], [11, 1, 7], [3, 1, 8], [4, 1, 8], [5, 1, 8], [6, 1, 8], [7, 1, 8], [8, 1, 8], [9, 1, 8], [10, 1, 8], [11, 1, 8], [3, 1, 9], [4, 1, 9], [5, 1, 9], [6, 1, 9], [7, 1, 9], [8, 1, 9], [9, 1, 9], [10, 1, 9], [11, 1, 9], [3, 1, 10], [4, 1, 10], [5, 1, 10], [6, 1, 10], [7, 1, 10], [8, 1, 10], [9, 1, 10], [10, 1, 10], [11, 1, 10], [3, 1, 11], [4, 1, 11], [5, 1, 11], [6, 1, 11], [7, 1, 11], [8, 1, 11], [9, 1, 11], [10, 1, 11], [11, 1, 11],]
        const Layer2 = [[5, 2, 0], [7, 2, 0], [9, 2, 0], [5, 2, 1], [9, 2, 1], [5, 2, 2], [9, 2, 2], [3, 2, 3], [4, 2, 3], [5, 2, 3], [6, 2, 3], [7, 2, 3], [8, 2, 3], [9, 2, 3], [10, 2, 3], [11, 2, 3], [3, 2, 4], [11, 2, 4], [3, 2, 5], [11, 2, 5], [3, 2, 6], [11, 2, 6], [3, 2, 7], [11, 2, 7], [3, 2, 8], [11, 2, 8], [3, 2, 9], [11, 2, 9], [3, 2, 10], [11, 2, 10], [3, 2, 11], [4, 2, 11], [5, 2, 11], [6, 2, 11], [7, 2, 11], [8, 2, 11], [9, 2, 11], [10, 2, 11], [11, 2, 11],]
        const Layer3 = [[7, 3, 0], [3, 3, 3], [11, 3, 3], [3, 3, 11], [11, 3, 11], [3, 4, 3], [11, 4, 3], [3, 4, 11], [11, 4, 11], [3, 5, 3], [4, 5, 3], [5, 5, 3], [6, 5, 3], [7, 5, 3], [8, 5, 3], [9, 5, 3], [10, 5, 3], [11, 5, 3], [3, 5, 11], [4, 5, 11], [5, 5, 11], [6, 5, 11], [7, 5, 11], [8, 5, 11], [9, 5, 11], [10, 5, 11], [11, 5, 11], [3, 6, 3], [11, 6, 3], [3, 6, 11], [11, 6, 11], [3, 7, 3], [11, 7, 3], [3, 7, 11], [11, 7, 11], [3, 8, 3], [11, 8, 3], [3, 8, 11], [11, 8, 11], [3, 9, 3], [4, 9, 3], [5, 9, 3], [6, 9, 3], [7, 9, 3], [8, 9, 3], [9, 9, 3], [10, 9, 3], [11, 9, 3], [3, 9, 11], [4, 9, 11], [5, 9, 11], [6, 9, 11], [7, 9, 11], [8, 9, 11], [9, 9, 11], [10, 9, 11], [11, 9, 11], [3, 10, 3], [4, 10, 3], [5, 10, 3], [6, 10, 3], [7, 10, 3], [8, 10, 3], [9, 10, 3], [10, 10, 3], [11, 10, 3], [3, 10, 11], [4, 10, 11], [5, 10, 11], [6, 10, 11], [7, 10, 11], [8, 10, 11], [9, 10, 11], [10, 10, 11], [11, 10, 11]]
        scene.addKeyframe();
        scene.text(30, "第 1 层：", [5, 1, 6])
        for (let i of Layer1) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "第 2 层：", [5, 2, 6])
        for (let i of Layer2) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(76);
        scene.addKeyframe();
        scene.text(30, "上层建筑：", [5, 6, 6])
        for (let i of Layer3) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(80);

      }
    )
});