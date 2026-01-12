Ponder.registry((event) => {
  event
    .create(["kubejs:huge_crusher", "minecraft:stone", "minecraft:gravel", "minecraft:sand"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_huge_crusher",
      "使用巨型粉碎机",
      "kubejs:huge_crusher",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(6);
        scene.scaleSceneView(0.7);
        scene.setSceneOffsetY(-1)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "你是否苦恼于普通粉碎轮在大量生产时低下的效率？那么巨型粉碎机是你的最佳选择！");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "首先，巨型粉碎机周围必须建造正确的结构");
        scene.world.hideSection([0, 4, 0, 14, 9, 14], Direction.up)
        scene.text(60, "核心位置", [7, 3, 6]);
        scene.overlay.showOutline("green", {}, [7, 3, 6], 30);
        scene.idle(80);
        scene.text(60, "需要注意的是，你可以把集装箱换成抽屉控制器或抽屉...").attachKeyFrame();
        scene.idle(20);
        scene.world.setBlock([8, 3, 6], "storagedrawers:controller", false)
        scene.overlay.showOutline("green", {}, [8, 3, 6], 30);
        scene.idle(20);
        scene.world.setBlock([6, 3, 6], "storagedrawers:spruce_full_drawers_1", false)
        scene.overlay.showOutline("green", {}, [6, 3, 6], 30);
        scene.idle(40);
        scene.text(60, "...也可以单纯扩大集装箱的大小！（不能更改种类！）").attachKeyFrame();
        scene.idle(20);
        let red = scene.world.showIndependentSection([8, 9, 4, 10, 11, 8], Direction.down,20)
        scene.world.moveSection(red, [0, -8, 0], 20)
        scene.idle(20);
        let green = scene.world.showIndependentSection([4, 9, 4, 6, 11, 8], Direction.down,20)
        scene.world.moveSection(green, [0, -8, 0], 20)
        scene.idle(40);
        scene.text(60, "请注意核心应面朝应力输入端!").attachKeyFrame();
        scene.idle(80);
        scene.world.showSection([0, 4, 0, 14, 8, 14], Direction.down)
        scene.addKeyframe();
        scene.text(60, "接着，你需要为应力输入端提供256rpm的转速");
        scene.rotateCameraY(-180);
        scene.idle(20);
        scene.overlay.showOutline("green", {}, [7, 3, 9], 60);
        scene.idle(20);
        scene.world.setBlock([7, 3, 10], "design_decor:industrial_gear_large", true);
        scene.world.modifyBlock([7, 3, 10], state => state.with("axis", "z"), false)
        scene.world.modifyTileNBT([7, 3, 10], (nbt) => { nbt.Speed = -256.0 });
        scene.world.modifyTileNBT([6, 5, 4], (nbt) => { nbt.Speed = -128.0 });
        scene.world.modifyTileNBT([6, 5, 5], (nbt) => { nbt.Speed = -128.0 });
        scene.world.modifyTileNBT([6, 5, 6], (nbt) => { nbt.Speed = -128.0 });
        scene.world.modifyTileNBT([6, 5, 7], (nbt) => { nbt.Speed = -128.0 });
        scene.world.modifyTileNBT([6, 5, 8], (nbt) => { nbt.Speed = -128.0 });
        scene.world.modifyTileNBT([8, 5, 4], (nbt) => { nbt.Speed = 128.0 });
        scene.world.modifyTileNBT([8, 5, 5], (nbt) => { nbt.Speed = 128.0 });
        scene.world.modifyTileNBT([8, 5, 6], (nbt) => { nbt.Speed = 128.0 });
        scene.world.modifyTileNBT([8, 5, 7], (nbt) => { nbt.Speed = 128.0 });
        scene.world.modifyTileNBT([8, 5, 8], (nbt) => { nbt.Speed = 128.0 });
        scene.idle(20);
        scene.effects.rotationDirectionIndicator([7, 3, 10])
        scene.idle(40);
        scene.rotateCameraY(-180);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "如果你想要执行任何配方，你需要以至少50mB/tick的速度向核心供水");
        scene.world.setBlock([7, 3, 1], "create:mechanical_pump", true);
        scene.world.modifyTileNBT([7, 3, 1], (nbt) => { nbt.Speed = -256.0 });
        scene.world.modifyBlock([7, 3, 1], state => state.with("facing", "south"), false)
        scene.showControls(15, [7, 3, 1], "up").withItem("minecraft:water_bucket")
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "如果一切正确，你应当看到核心中出现结构液！");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "现在，向绿色集装箱输入配方所需的物品...");
        scene.rotateCameraY(-180);
        scene.idle(20);
        scene.world.setBlock([11, 3, 8], "create:brass_funnel", true);
        scene.world.modifyBlock([11, 3, 8], state => state.with("facing", "east"), false)
        scene.idle(20);
        let itemLink1 = scene.world.createItemEntity([11.5, 8, 8.5], [0, 0, 0], "64x minecraft:cobblestone")
        scene.idle(5);
        let itemLink2 = scene.world.createItemEntity([11.5, 8, 8.5], [0, 0, 0], "64x minecraft:cobblestone")
        scene.idle(5);
        let itemLink3 = scene.world.createItemEntity([11.5, 8, 8.5], [0, 0, 0], "64x minecraft:cobblestone")
        scene.idle(5);
        let itemLink4 = scene.world.createItemEntity([11.5, 8, 8.5], [0, 0, 0], "64x minecraft:cobblestone")
        scene.world.flapFunnel([11, 3, 8], false)
        scene.world.removeEntity(itemLink1)
        scene.idle(5);
        scene.world.flapFunnel([11, 3, 8], false)
        scene.world.removeEntity(itemLink2)
        scene.idle(5);
        scene.world.flapFunnel([11, 3, 8], false)
        scene.world.removeEntity(itemLink3)
        scene.idle(5);
        scene.world.flapFunnel([11, 3, 8], false)
        scene.world.removeEntity(itemLink4)
        scene.addKeyframe();
        scene.idle(5);
        scene.rotateCameraY(-180);
        scene.text(60, "...而红色集装箱将把物品输出");
        scene.idle(20);
        scene.world.setBlock([3, 3, 4], "create:brass_funnel", true);
        scene.world.modifyBlock([3, 3, 4], state => state.with("extracting", "true"), false)
        scene.world.modifyBlock([3, 3, 4], state => state.with("facing", "west"), false)
        scene.idle(20);
        scene.world.flapFunnel([3, 3, 4], false)
        scene.world.createItemEntity([3.5, 3, 4.5], [0, 0.1, 0], "64x minecraft:gravel")
        scene.idle(9);
        scene.world.flapFunnel([3, 3, 4], false)
        scene.world.createItemEntity([3.5, 3, 4.5], [0, 0.1, 0], "64x minecraft:gravel")
        scene.idle(9);
        scene.world.flapFunnel([3, 3, 4], false)
        scene.world.createItemEntity([3.5, 3, 4.5], [0, 0.1, 0], "64x minecraft:gravel")
        scene.idle(9);
        scene.world.flapFunnel([3, 3, 4], false)
        scene.world.createItemEntity([3.5, 3, 4.5], [0, 0.1, 0], "64x minecraft:gravel")
        //scene.world.flapFunnel([],false)
        //scene.world.createItemEntity(sideItemSpawn, util.vector.of(-.05, 0, 0), itemStack)
        //scene.world.modifyEntity(itemLink, Entity::discard)
        scene.idle(20);
        scene.rotateCameraY(90);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "此外，巨型粉碎机的每一个配方都可以以其两倍效率运行——只要你能以足够的速度运送原料！");
        scene.idle(80);
      }
    )
    .scene(
      "kubejs:huge_crusher",
      "建造巨型粉碎机",
      "kubejs:huge_crusher",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(6);
        scene.scaleSceneView(0.6);
        scene.text(60, "你需要在巨型粉碎机核心附近建造指定结构来完成巨型粉碎机");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0, 1, 0, 14, 6, 14], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        scene.idle(80);
        const Layer1 = [[6, 1, 1], [7, 1, 1], [8, 1, 1], [5, 1, 2], [6, 1, 2], [7, 1, 2], [8, 1, 2], [9, 1, 2], [4, 1, 3], [5, 1, 3], [6, 1, 3], [7, 1, 3], [8, 1, 3], [9, 1, 3], [10, 1, 3], [4, 1, 4], [5, 1, 4], [6, 1, 4], [7, 1, 4], [8, 1, 4], [9, 1, 4], [10, 1, 4], [4, 1, 5], [5, 1, 5], [6, 1, 5], [7, 1, 5], [8, 1, 5], [9, 1, 5], [10, 1, 5], [4, 1, 6], [5, 1, 6], [6, 1, 6], [7, 1, 6], [8, 1, 6], [9, 1, 6], [10, 1, 6], [4, 1, 7], [5, 1, 7], [6, 1, 7], [7, 1, 7], [8, 1, 7], [9, 1, 7], [10, 1, 7], [4, 1, 8], [5, 1, 8], [6, 1, 8], [7, 1, 8], [8, 1, 8], [9, 1, 8], [10, 1, 8], [4, 1, 9], [5, 1, 9], [6, 1, 9], [7, 1, 9], [8, 1, 9], [9, 1, 9], [10, 1, 9], [5, 1, 10], [6, 1, 10], [7, 1, 10], [8, 1, 10], [9, 1, 10], [6, 1, 11], [7, 1, 11], [8, 1, 11]]
        const Layer2 = [[6, 2, 1], [7, 2, 1], [8, 2, 1], [5, 2, 2], [6, 2, 2], [7, 2, 2], [8, 2, 2], [9, 2, 2], [4, 2, 3], [5, 2, 3], [6, 2, 3], [7, 2, 3], [8, 2, 3], [9, 2, 3], [10, 2, 3], [4, 2, 4], [5, 2, 4], [6, 2, 4], [7, 2, 4], [8, 2, 4], [9, 2, 4], [10, 2, 4], [4, 2, 5], [5, 2, 5], [6, 2, 5], [7, 2, 5], [8, 2, 5], [9, 2, 5], [10, 2, 5], [4, 2, 6], [5, 2, 6], [6, 2, 6], [7, 2, 6], [8, 2, 6], [9, 2, 6], [10, 2, 6], [4, 2, 7], [5, 2, 7], [6, 2, 7], [7, 2, 7], [8, 2, 7], [9, 2, 7], [10, 2, 7], [4, 2, 8], [5, 2, 8], [6, 2, 8], [7, 2, 8], [8, 2, 8], [9, 2, 8], [10, 2, 8], [4, 2, 9], [5, 2, 9], [6, 2, 9], [7, 2, 9], [8, 2, 9], [9, 2, 9], [10, 2, 9], [5, 2, 10], [6, 2, 10], [7, 2, 10], [8, 2, 10], [9, 2, 10], [6, 2, 11], [7, 2, 11], [8, 2, 11]]
        const Layer3 = [[5, 3, 2], [7, 3, 2], [9, 3, 2], [4, 3, 3], [5, 3, 3], [6, 3, 3], [7, 3, 3], [8, 3, 3], [9, 3, 3], [10, 3, 3], [4, 3, 4], [5, 3, 4], [6, 3, 4], [7, 3, 4], [8, 3, 4], [9, 3, 4], [10, 3, 4], [4, 3, 5], [5, 3, 5], [6, 3, 5], [7, 3, 5], [8, 3, 5], [9, 3, 5], [10, 3, 5], [4, 3, 6], [5, 3, 6], [6, 3, 6], [7, 3, 6], [8, 3, 6], [9, 3, 6], [10, 3, 6], [4, 3, 7], [5, 3, 7], [6, 3, 7], [7, 3, 7], [8, 3, 7], [9, 3, 7], [10, 3, 7], [4, 3, 8], [5, 3, 8], [6, 3, 8], [7, 3, 8], [8, 3, 8], [9, 3, 8], [10, 3, 8], [4, 3, 9], [5, 3, 9], [6, 3, 9], [7, 3, 9], [8, 3, 9], [9, 3, 9], [10, 3, 9], [5, 3, 10], [9, 3, 10]]
        const Layer4 = [[5, 4, 2], [7, 4, 2], [9, 4, 2], [4, 4, 3], [5, 4, 3], [6, 4, 3], [7, 4, 3], [8, 4, 3], [9, 4, 3], [10, 4, 3], [4, 4, 4], [5, 4, 4], [9, 4, 4], [10, 4, 4], [4, 4, 5], [5, 4, 5], [7, 4, 5], [9, 4, 5], [10, 4, 5], [4, 4, 6], [5, 4, 6], [7, 4, 6], [9, 4, 6], [10, 4, 6], [4, 4, 7], [5, 4, 7], [7, 4, 7], [9, 4, 7], [10, 4, 7], [4, 4, 8], [5, 4, 8], [7, 4, 8], [9, 4, 8], [10, 4, 8], [4, 4, 9], [5, 4, 9], [6, 4, 9], [7, 4, 9], [8, 4, 9], [9, 4, 9], [10, 4, 9], [5, 4, 10], [7, 4, 10], [9, 4, 10]]
        const Layer5 = [[5, 5, 2], [6, 5, 2], [7, 5, 2], [8, 5, 2], [9, 5, 2], [5, 5, 3], [6, 5, 3], [7, 5, 3], [8, 5, 3], [9, 5, 3], [5, 5, 4], [6, 5, 4], [8, 5, 4], [9, 5, 4], [5, 5, 5], [6, 5, 5], [8, 5, 5], [9, 5, 5], [5, 5, 6], [6, 5, 6], [8, 5, 6], [9, 5, 6], [5, 5, 7], [6, 5, 7], [8, 5, 7], [9, 5, 7], [5, 5, 8], [6, 5, 8], [8, 5, 8], [9, 5, 8], [5, 5, 9], [6, 5, 9], [7, 5, 9], [8, 5, 9], [9, 5, 9], [5, 5, 10], [6, 5, 10], [7, 5, 10], [8, 5, 10], [9, 5, 10]]
        const Layer6 = [[5, 6, 3], [6, 6, 3], [7, 6, 3], [8, 6, 3], [9, 6, 3], [5, 6, 9], [6, 6, 9], [7, 6, 9], [8, 6, 9], [9, 6, 9]]
        scene.addKeyframe();
        scene.text(30, "第 1 层：", [4, 1, 6])
        for (let i of Layer1) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(64);
        scene.addKeyframe();
        scene.text(30, "第 2 层：", [4, 2, 6])
        for (let i of Layer2) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(64);
        scene.addKeyframe();
        scene.text(30, "第 3 层：", [4, 3, 6])
        for (let i of Layer3) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(20);
        scene.text(60, "请注意，核心的正侧必须指向应力输入端", [7, 3, 6]);
        scene.overlay.showOutline("red", {}, [7, 3, 6], 60);
        scene.idle(40);
        scene.rotateCameraY(-180);
        scene.idle(46);
        scene.addKeyframe();
        scene.text(30, "第 4 层：", [4, 4, 6])
        for (let i of Layer4) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(86);
        scene.addKeyframe();
        scene.text(30, "第 5 层：", [4, 5, 6])
        for (let i of Layer5) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(78);
        scene.addKeyframe();
        scene.text(30, "第 6 层：", [4, 6, 6])
        for (let i of Layer6) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.rotateCameraY(-180);
        scene.idle(40);
      }
    );
});