Ponder.registry((event) => {
  event
    .create(["kubejs:electrolytic_cell"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_electrolytic_cell",
      "使用大型电解池",
      "kubejs:electrolytic_cell",
      (scene, utils) => {
        const Layer = [[1, 1, 2], [2, 1, 2], [3, 1, 2], [4, 1, 2], [5, 1, 2], [6, 1, 2], [7, 1, 2], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [2, 1, 4], [3, 1, 4], [4, 1, 4], [5, 1, 4], [6, 1, 4], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [1, 1, 6], [2, 1, 6], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6], [7, 1, 6], [2, 1, 7], [6, 1, 7],[1, 2, 2], [2, 2, 2], [6, 2, 2], [7, 2, 2], [2, 2, 3], [3, 2, 3], [4, 2, 3], [5, 2, 3], [6, 2, 3], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [2, 2, 5], [3, 2, 5], [4, 2, 5], [5, 2, 5], [6, 2, 5], [1, 2, 6], [2, 2, 6], [3, 2, 6], [4, 2, 6], [5, 2, 6], [6, 2, 6], [7, 2, 6], [2, 2, 7], [6, 2, 7],[4, 3, 3], [1, 3, 4], [3, 3, 4], [4, 3, 4], [5, 3, 4], [7, 3, 4], [4, 3, 5], [2, 3, 6], [6, 3, 6],[4, 4, 3], [1, 4, 4], [2, 4, 4], [3, 4, 4], [4, 4, 4], [5, 4, 4], [6, 4, 4], [7, 4, 4], [4, 4, 5],[1, 5, 4], [2, 5, 4], [3, 5, 4], [4, 5, 4], [5, 5, 4], [6, 5, 4], [7, 5, 4],[4, 6, 3], [1, 6, 4], [3, 6, 4], [4, 6, 4], [5, 6, 4], [7, 6, 4], [3, 6, 5], [5, 6, 5],[1, 7, 4], [3, 7, 4], [4, 7, 4], [5, 7, 4], [7, 7, 4], [3, 7, 5], [5, 7, 5],[1, 8, 4], [4, 8, 4], [7, 8, 4],[1, 9, 4], [4, 9, 4], [7, 9, 4],]
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        for (let i of Layer) {
          scene.world.showSection(i, Direction.down)
        }
        scene.scaleSceneView(0.7);
        scene.setSceneOffsetY(-2)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "你是否苦恼于电解器在大量生产时低下的效率？那么大型电解池是你的最佳选择！");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "首先，大型电解池核心周围必须建造正确的结构");
        scene.text(60, "核心位置", [4, 7, 4]);
        scene.overlay.showOutline("green", {}, [4, 7, 4], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "请注意核心朝向!");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "接着，你需要为核心提供充足的电力");
        scene.overlay.showOutline("green", {}, [4, 7, 4], 60);
        scene.showControls(15, [4, 7, 4], "up").withItem("createaddition:connector")
        scene.idle(60);
        scene.rotateCameraY(-180);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "利用结构中的动力泵来输入流体...");
        scene.world.setBlock([4, 6, 5], "design_decor:industrial_gear", true);
        scene.world.modifyBlock([4, 6, 5], state => state.with("axis", "y"), false)
        scene.world.modifyTileNBT([4, 6, 5], (nbt) => { nbt.Speed = -256.0 });
        scene.world.showSection([4, 6, 5], Direction.down)
        scene.idle(20);
        scene.effects.rotationDirectionIndicator([4, 6, 5])
        scene.world.modifyTileNBT([3, 6, 5], (nbt) => { nbt.Speed = 256.0 });
        scene.world.modifyTileNBT([5, 6, 5], (nbt) => { nbt.Speed = 256.0 });
        scene.idle(60);
        scene.addKeyframe();
        scene.text(60, "...或者自己添加更多的管道！");
        scene.idle(20);
        for (let i of [[3, 6, 6], [3, 6, 7], [5, 6, 6], [5, 6, 7]]) {
          scene.world.setBlock(i, "create:mechanical_pump", true);
          scene.world.modifyBlock(i, state => state.with("facing", "up"), false)
          scene.world.modifyTileNBT(i, (nbt) => { nbt.Speed = -256.0 * ((-1) ** i[2]) });
        }
        for (let i of [[3, 7, 6], [3, 7, 7], [5, 7, 6], [5, 7, 7]]) {
          scene.world.setBlock(i, "create:fluid_pipe", true);
          scene.world.modifyBlock(i, state => state.with("east", "false"), false)
          scene.world.modifyBlock(i, state => state.with("up", "false"), false)
          scene.world.modifyBlock(i, state => state.with("west", "false"), false)
          scene.world.modifyBlock(i, state => state.with("south", "false"), false)
          scene.world.modifyBlock([i[0], i[1], i[2] - 1], state => state.with("south", "true"), false)
        }
        scene.world.showSection([3, 6, 6, 5, 7, 7], Direction.down)
        scene.idle(30);
        scene.world.modifyBlock([3, 7, 5], state => state.with("south", "false"), false)
        scene.world.modifyBlock([5, 7, 5], state => state.with("south", "false"), false)
        scene.world.hideSection([3, 6, 6, 5, 7, 7], Direction.down)
        scene.idle(30);
        scene.addKeyframe();
        scene.text(60, "在输入流体之后...");
        scene.idle(10);
        scene.showControls(15, [3, 6, 5], "up").withItem("kubejs:saline_water_bucket")
        scene.overlay.showOutline("green", {}, [3, 6, 5], 30);
        scene.idle(10);
        scene.showControls(15, [5, 6, 5], "up").withItem("kubejs:saline_water_bucket")
        scene.overlay.showOutline("green", {}, [5, 6, 5], 30);
        scene.idle(20);
        scene.rotateCameraY(-45);
        scene.idle(40);
        scene.addKeyframe();
        scene.text(60, "...阴极产物将从右侧排出");
        scene.overlay.showOutline("green", {}, [7, 1, 3, 7, 2, 5], 30);
        scene.idle(30);
        for (let i = 3; i < 6; i++) {
          scene.world.setBlock([7, 1, i], "kubejs:hydrogen", true);
          scene.world.showSection([7, 1, i], Direction.down)
          scene.idle(10);
        }
        scene.idle(20);
        scene.rotateCameraY(90);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "...副产物将从后侧排出");
        scene.overlay.showOutline("green", {}, [3, 1, 7, 5, 2, 7], 30);
        scene.idle(30);
        for (let i = 3; i < 6; i++) {
          scene.world.setBlock([i, 1, 7], "kubejs:caustic_soda", true);
          scene.world.showSection([i, 1, 7], Direction.down)
          scene.idle(10);
        }
        for (let i = 3; i < 6; i++) {
          scene.world.setBlock([i, 2, 7], "kubejs:caustic_soda", true);
          scene.world.showSection([i, 2, 7], Direction.down)
          scene.idle(10);
        }
        scene.idle(20);
        scene.rotateCameraY(90);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "...阳极产物将从左侧排出");
        scene.overlay.showOutline("green", {}, [1, 1, 3, 1, 2, 5], 30);
        scene.idle(30);
        for (let i = 3; i < 6; i++) {
          scene.world.setBlock([1, 1, i], "kubejs:chlorine", true);
          scene.world.showSection([1, 1, i], Direction.down)
          scene.idle(10);
        }
        scene.idle(40);
        scene.rotateCameraY(45);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "需要注意的是，电极可能会在配方结束时损坏(电解水并不会)");
        scene.idle(20);
        scene.overlay.showOutline("red", {}, [1, 7, 4], 30);
        scene.overlay.showOutline("red", {}, [7, 7, 4], 30);
        scene.idle(20);
        scene.world.setBlock([1, 7, 4], "minecraft:air", true);
        scene.idle(40);
        scene.text(60, "此时你需要重新安装新的电极。机械手可以为你代劳");
        scene.overlay.showOutline("green", {}, [1, 7, 4], 30);
        scene.idle(20);
        scene.showControls(15, [1, 7, 4], "up").withItem("kubejs:carbon_electrode")
        scene.idle(20);
        scene.world.setBlock([1, 7, 4], "kubejs:carbon_electrode", true);
        scene.idle(40);
        scene.addKeyframe();
        scene.text(60, "在不破坏原有结构的情况下，你可以自由搭建其它结构");
        scene.idle(30);
      }
    )
    .scene(
      "kubejs:electrolytic_cell",
      "建造大型电解池",
      "kubejs:electrolytic_cell",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(9);
        scene.scaleSceneView(0.6);
        scene.setSceneOffsetY(-2)
        scene.text(60, "你需要在大型电解池核心附近建造指定结构来完成大型电解池");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0, 1, 0, 8, 9, 8], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        scene.idle(80);
        const Layer1 = [[1, 1, 2], [2, 1, 2], [3, 1, 2], [4, 1, 2], [5, 1, 2], [6, 1, 2], [7, 1, 2], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [2, 1, 4], [3, 1, 4], [4, 1, 4], [5, 1, 4], [6, 1, 4], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [1, 1, 6], [2, 1, 6], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6], [7, 1, 6], [2, 1, 7], [6, 1, 7],]
        const Layer2 = [[1, 2, 2], [2, 2, 2], [6, 2, 2], [7, 2, 2], [2, 2, 3], [3, 2, 3], [4, 2, 3], [5, 2, 3], [6, 2, 3], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [2, 2, 5], [3, 2, 5], [4, 2, 5], [5, 2, 5], [6, 2, 5], [1, 2, 6], [2, 2, 6], [3, 2, 6], [4, 2, 6], [5, 2, 6], [6, 2, 6], [7, 2, 6], [2, 2, 7], [6, 2, 7],]
        const Layer3 = [[4, 3, 3], [1, 3, 4], [3, 3, 4], [4, 3, 4], [5, 3, 4], [7, 3, 4], [4, 3, 5], [2, 3, 6], [6, 3, 6],]
        const Layer4 = [[4, 4, 3], [1, 4, 4], [2, 4, 4], [3, 4, 4], [4, 4, 4], [5, 4, 4], [6, 4, 4], [7, 4, 4], [4, 4, 5],]
        const Layer5 = [[1, 5, 4], [2, 5, 4], [3, 5, 4], [4, 5, 4], [5, 5, 4], [6, 5, 4], [7, 5, 4],]
        const Layer6 = [[4, 6, 3], [1, 6, 4], [3, 6, 4], [4, 6, 4], [5, 6, 4], [7, 6, 4], [3, 6, 5], [5, 6, 5],]
        const Layer7 = [[1, 7, 4], [3, 7, 4], [4, 7, 4], [5, 7, 4], [7, 7, 4], [3, 7, 5], [5, 7, 5],]
        const Layer8 = [[1, 8, 4], [4, 8, 4], [7, 8, 4],]
        const Layer9 = [[1, 9, 4], [4, 9, 4], [7, 9, 4],]
        scene.addKeyframe();
        scene.text(30, "第 1 层：", [4, 1, 3])
        for (let i of Layer1) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(60);
        scene.addKeyframe();
        scene.text(30, "第 2 层：", [4, 2, 3])
        for (let i of Layer2) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(54);
        scene.addKeyframe();
        scene.text(30, "第 3 层：", [4, 3, 3])
        for (let i of Layer3) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 4 层：", [4, 4, 3])
        for (let i of Layer4) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
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
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 7 层：", [4, 7, 3])
        for (let i of Layer7) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 8 层：", [4, 8, 3])
        for (let i of Layer8) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 9 层：", [4, 9, 3])
        for (let i of Layer9) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
      }
    );
});