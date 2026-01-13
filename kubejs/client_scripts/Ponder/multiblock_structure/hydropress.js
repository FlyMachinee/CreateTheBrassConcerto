Ponder.registry((event) => {
  event
    .create(["kubejs:hydropress", "ad_astra:steel_block", "createbigcannons:molten_steel_bucket"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_hydropress",
      "使用液压机",
      "kubejs:hydropress",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(5);
        scene.setSceneOffsetY(-3)
        scene.world.showIndependentSectionImmediately([3, 6, 0, 5, 11, 3])
        const link = scene.world.showIndependentSectionImmediately([3, 6, 4, 5, 11, 7]);
        scene.scaleSceneView(0.7);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "液压机是一种需要自主控制的多方块机械！");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "它可以单次处理9个金属块，或是1B/3B/6B/9B的熔融金属，此外还有一些特殊配方！");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "首先，液压机核心附近必须拥有正确的基础结构：");
        scene.overlay.showOutline("blue", {}, [4, 3, 2], 60);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "液压机应当朝向黄铜漏斗", [4, 3, 2]);
        scene.overlay.showOutline("blue", {}, [4, 3, 2], 60);
        scene.idle(40);
        scene.rotateCameraY(-45);
        scene.idle(40);
        scene.addKeyframe();
        scene.text(60, "你可以自主给它提供你认为合适的转速", [4, 4, 3]);
        scene.overlay.showOutline("blue", {}, [4, 4, 3, 4, 7, 3], 60);
        scene.world.modifyTileNBT([5, 3, 2], (nbt) => { nbt.Speed = -128.0 });
        scene.world.modifyTileNBT([3, 3, 2], (nbt) => { nbt.Speed = 128.0 });
        scene.world.modifyTileNBT([5, 2, 3], (nbt) => { nbt.Speed = 128.0 });
        scene.world.modifyTileNBT([3, 2, 3], (nbt) => { nbt.Speed = -128.0 });
        scene.world.modifyTileNBT([4, 2, 3, 4, 7, 3], (nbt) => { nbt.Speed = -128.0 });
        for (let i = 4; i < 9; i++) {
          scene.idle(15);
          scene.effects.rotationDirectionIndicator([4, i, 3])
        }
        scene.addKeyframe();
        scene.text(60, "接着，你需要通过动力泵输入水");
        scene.idle(20);
        scene.showControls(15, [3, 3, 2], "up").withItem("minecraft:water_bucket")
        scene.idle(20);
        scene.rotateCameraY(-45);
        scene.idle(40);
        scene.addKeyframe();
        scene.text(60, "液压机仅在液压头处于顶端且其它一切正确时可以将水转换为结构液");
        scene.overlay.showOutline("blue", {}, [4, 3, 2], 30);
        scene.overlay.showOutline("green", {}, [3, 6, 4, 5, 13, 7], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "利用机械手、动力泵等物件在指定位置放置好输入的原料");
        scene.overlay.showOutline("green", {}, [3, 2, 5, 5, 2, 7], 60);
        for (let i1 = 3; i1 < 6; i1++) {
          for (let i2 = 5; i2 < 8; i2++) {
            scene.world.setBlock([i1, 2, i2], "minecraft:iron_block", true);
            scene.idle(5);
          }
        }
        scene.rotateCameraY(60);
        scene.idle(35);
        scene.text(60, "当液压机拥有结构液时，如果控制液压头移动至底部，原料就会被（结构液将被消耗）");
        scene.addKeyframe();
        scene.idle(20);
        scene.overlay.showOutline("red", {}, [4, 3, 3], 30);
        scene.showControls(15, [4, 3, 3], "up").withItem("minecraft:redstone_torch")
        scene.world.modifyBlock([4, 3, 3], state => state.with("powered", "true"), false)
        scene.world.modifyTileNBT([4, 3, 3, 4, 8, 3], (nbt) => { nbt.Speed = 128.0 });
        scene.world.moveSection(link, [0, -3, 0], 20)
        scene.idle(20);
        for (let i1 = 3; i1 < 6; i1++) {
          for (let i2 = 5; i2 < 8; i2++) {
            scene.world.setBlock([i1, 2, i2], "minecraft:air", true);
          }
        }
        scene.world.flapFunnel([4, 3, 1], false);
        scene.world.createItemEntity([4, 3, 1], Direction.north, "64x create:iron_sheet");
        scene.idle(10);
        scene.world.flapFunnel([4.5, 3.5, 1], false);
        scene.world.createItemEntity([4.5, 3.5, 1], Direction.north, "17x create:iron_sheet");
        scene.idle(30);
        scene.text(60, "接着只需要控制液压机复位即可让液压机重新产生结构液");
        scene.idle(20);
        scene.overlay.showOutline("red", {}, [4, 3, 3], 30);
        scene.showControls(15, [4, 3, 3], "up").withItem("minecraft:redstone_torch")
        scene.world.modifyBlock([4, 3, 3], state => state.with("powered", "false"), false)
        scene.world.modifyTileNBT([4, 3, 3, 4, 8, 3], (nbt) => { nbt.Speed = -128.0 });
        scene.world.moveSection(link, [0, 3, 0], 20)
        scene.idle(60);
      }
    )
    .scene(
      "kubejs:hydropress",
      "建造液压机",
      "kubejs:hydropress",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(14);
        scene.scaleSceneView(0.5);
        scene.setSceneOffsetY(-4)
        scene.text(60, "你需要在液压机核心附近建造结构来完成液压机");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0, 1, 0, 8, 14, 8], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        scene.idle(40);
        scene.addKeyframe();
        const Layer1 = [[3, 1, 1], [4, 1, 1], [5, 1, 1], [3, 1, 2], [4, 1, 2], [5, 1, 2], [3, 1, 3], [4, 1, 3], [5, 1, 3], [2, 1, 4], [6, 1, 4], [2, 1, 8], [6, 1, 8]]
        const Layer2 = [[4, 2, 2], [3, 2, 3], [4, 2, 3], [5, 2, 3], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [2, 2, 5], [6, 2, 5], [2, 2, 6], [6, 2, 6], [2, 2, 7], [6, 2, 7], [2, 2, 8], [3, 2, 8], [4, 2, 8], [5, 2, 8], [6, 2, 8]]
        const Layer3 = [[4, 3, 1], [3, 3, 2], [4, 3, 2], [5, 3, 2], [4, 3, 3]]
        const Layer4 = [[4, 4, 2], [4, 4, 3]]
        const Layer5 = [[4, 5, 1], [3, 5, 2], [4, 5, 2], [5, 5, 2], [4, 5, 3]]
        const Layer6 = [[4, 6, 1], [3, 6, 2], [4, 6, 2], [5, 6, 2], [4, 6, 3]]
        const Layer7 = [[4, 7, 1], [3, 7, 2], [4, 7, 2], [5, 7, 2], [4, 7, 3]]
        const Layer8 = [[4, 8, 1], [3, 8, 2], [4, 8, 2], [5, 8, 2], [4, 8, 3]]
        const Layer9 = [[4, 9, 2], [4, 10, 2]]
        const Piston = [[3, 6, 5], [4, 6, 5], [5, 6, 5], [3, 6, 6], [4, 6, 6], [5, 6, 6], [3, 6, 7], [4, 6, 7], [5, 6, 7], [4, 7, 5], [3, 7, 6], [4, 7, 6], [5, 7, 6], [4, 7, 7], [4, 7, 4], [4, 8, 5], [3, 8, 6], [4, 8, 6], [5, 8, 6], [4, 8, 7], [4, 9, 6], [4, 10, 6], [4, 11, 6]]
        scene.addKeyframe();
        scene.text(30, "第 1 层：", [3, 1, 4])
        for (let i of Layer1) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 2 层：", [3, 2, 4])
        for (let i of Layer2) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 3 层：", [3, 3, 4])
        for (let i of Layer3) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.rotateCameraY(-90);
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 4 层：", [3, 4, 4])
        for (let i of Layer4) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 5 层：", [3, 5, 4])
        for (let i of Layer5) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 6 层：", [3, 6, 4])
        for (let i of Layer6) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 7 层：", [3, 7, 4])
        for (let i of Layer7) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 8 层：", [3, 8, 4])
        for (let i of Layer8) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 9 , 10 层：", [3, 9.5, 4])
        for (let i of Layer9) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "接着建造运动部分并用胶水组装：");
        scene.idle(30);
        scene.addKeyframe();
        for (let i of Piston) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(30);
        scene.addKeyframe();
        scene.text(30, "你可以在液压头基础结构以外自由附加其它结构")
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "除此以外，你可以还使用工业镀铁块来代替列车机壳！")
        scene.overlay.showOutline("red", {}, [3, 6, 5, 5, 6, 7], 60);
        scene.showControls(30, [3, 6, 5], "up").withItem('design_decor:industrial_plating_block')
        scene.idle(80);
        scene.addKeyframe();
        scene.overlay.showOutline("red", { "glue": true }, [3, 6, 5], 15);
        scene.showControls(30, [3, 6, 5], "right").rightClick().withItem("create:super_glue")
        scene.idle(10);
        scene.overlay.showOutline("blue", { "glue": true }, [5, 13, 7], 15);
        scene.showControls(30, [5, 13, 7], "left").rightClick().withItem("create:super_glue")
        scene.idle(10);
        scene.overlay.showOutline("green", { "glue": true }, [3, 6, 5, 5, 13, 7], 60);
        scene.addKeyframe();
        scene.idle(80);
        scene.rotateCameraY(-90);
        scene.idle(40);
        scene.rotateCameraY(-90);
        scene.idle(40);
        scene.rotateCameraY(-90);
        scene.idle(40);
      })
});