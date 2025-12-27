Ponder.registry((event) => {
  event
    .create(["kubejs:condenser", "kubejs:air_fluid_bucket", "kubejs:nether_air_fluid_bucket", "kubejs:end_air_fluid_bucket"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_condenser",
      "从大气中提取资源",
      "kubejs:condenser",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(8);
        scene.scaleSceneView(0.8);
        scene.setSceneOffsetY(-1)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "空气中有许多重要的工业原料，使用大气冷凝机来提取它们");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "首先，大气冷凝机必须修建在拥有大气的地区，如主世界和下界");
        scene.text(60, "核心位置", [4,2,2]);
        scene.overlay.showOutline("green", {}, [4,2,2], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "请注意：核心应当朝向前方!");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "接着，你需要通过智能流体管道输入冷冻液");
        scene.overlay.showOutline("blue", {}, [4, 2, 1], 60);
        scene.overlay.showOutline("blue", {}, [3, 2, 2], 60);
        scene.overlay.showOutline("blue", {}, [5, 2, 2], 60);
        scene.showControls(15, [4, 3, 1], "up").withItem("kubejs:cryogen_bucket")
        scene.showControls(15, [3, 3, 2], "up").withItem("kubejs:cryogen_bucket")
        scene.showControls(15, [6, 3, 2], "up").withItem("kubejs:cryogen_bucket")
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "最后，你需要让密封压缩机以逆时针256rpm的转速在加压模式下工作");
        scene.world.setBlock([5, 7, 2], "create:cogwheel", true);
        scene.world.showSection([5, 7, 2], Direction.down);
        scene.idle(15);
        scene.world.modifyBlock([5, 7, 2], state => state.with("axis", "y"), false)
        scene.world.modifyTileNBT([5, 7, 2], (nbt) => { nbt.Speed = -256.0 });
        scene.world.modifyTileNBT([4, 7, 2], (nbt) => { nbt.Speed = 256.0 });
        
        //scene.world.setBlock([1, 7, 2], "vintageimprovements:vacuum_chamber", true);
        //const VacuumChamber=Java.loadClass("com.negodya1.vintageimprovements.content.kinetics.vacuum_chamber.VacuumChamberBlockEntity")
        //scene.world.modifyBlockEntity([1, 7, 2],VacuumChamber,(be) => be.startProcessingBasin())
        scene.effects.rotationDirectionIndicator([5, 7, 2])
        scene.effects.rotationDirectionIndicator([4, 7, 2])
        scene.idle(65);
        scene.addKeyframe();
        scene.text(60, "...如此，大气冷凝机便会在其后方产生液态气体");
        scene.rotateCameraY(-90);
        scene.world.showSection([5, 2, 6, 3, 2, 4], Direction.down);
        scene.idle(30);
        for (let i2 = 6; i2 > 3; i2--) {
          for (let i1 = 5; i1 > 2; i1--) {
            scene.world.setBlock([i1, 2, i2], "kubejs:air_fluid", true);
            scene.idle(10);
          }
        }
        scene.text(60, "你可以在液池上方修建用于取出液体的管道，从而达成自动化");
        scene.idle(30);
        scene.rotateCameraY(90);
        scene.idle(30);
      }
    )
    .scene(
      "kubejs:condenser",
      "建造大气冷凝机",
      "kubejs:condenser",
      (scene, utils) => {
        const PosList1 = [
          [3, 1, 1], [4, 1, 1], [5, 1, 1],
          [3, 1, 2, 5, 1, 4],
          [2, 1, 3], [6, 1, 3],
          [2, 1, 4], [6, 1, 4],
          [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5],
          [2, 1, 6], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6],
          [2, 1, 7], [3, 1, 7], [4, 1, 7], [5, 1, 7], [6, 1, 7]];
        const PosList2 = [
          [3, 2, 1], [4, 2, 1], [5, 2, 1],
          [3, 2, 2], [4, 2, 2], [5, 2, 2],
          [2, 2, 3], [3, 2, 3], [4, 2, 3], [5, 2, 3], [6, 2, 3],
          [2, 2, 4], [6, 2, 4],
          [2, 2, 5], [6, 2, 5],
          [2, 2, 6], [6, 2, 6],
          [2, 2, 7], [3, 2, 7], [4, 2, 7], [5, 2, 7], [6, 2, 7]]
        const PosList3 = [
          [4, 3, 1],
          [3, 3, 2], [4, 3, 2], [5, 3, 2],
          [4, 3, 3]]
        const PosList4 = [
          [4, 4, 1], [5, 4, 1],
          [3, 4, 2], [4, 4, 2], [5, 4, 2],
          [4, 4, 3], [5, 4, 3]]
        const PosList5 = [
          [4, 5, 1],
          [3, 5, 2], [4, 5, 2], [5, 5, 2],
          [4, 5, 3]]
        const PosList6 = [
          [4, 6, 2], [4, 7, 2]
        ]
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(9);
        scene.scaleSceneView(0.7);
        scene.text(60, "你需要在冷凝机核心舱附近建造结构来完成大气冷凝机");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0,1,0,8,8,8], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(40, "第一层：",[4,1,2]);
        for (let i of PosList1){
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.overlay.showOutline("red", {}, [2,1,1,6,1,7], 30);
        scene.idle(40);
        scene.addKeyframe();
        scene.text(40, "第二层：");
        for (let i of PosList2){
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.overlay.showOutline("red", {}, [2,2,1,6,2,7], 30);
        scene.idle(40);
        scene.addKeyframe();
        scene.text(60, "请注意：核心舱的正侧应面向前方",[4,2,2]);
        scene.overlay.showOutline("red", {}, [4,2,2], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(40, "第三层：");
        for (let i of PosList3){
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.overlay.showOutline("red", {}, [3,3,1,5,3,3], 30);
        scene.idle(40);
        scene.addKeyframe();
        scene.text(40, "第四层：",[4,4,2]);
        for (let i of PosList4){
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.overlay.showOutline("red", {}, [3,4,1,5,4,3], 30);
        scene.idle(40);
        scene.addKeyframe();
        scene.text(40, "第五层：",[4,5,2]);
        for (let i of PosList5){
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.overlay.showOutline("red", {}, [3,5,1,5,5,3], 30);
        scene.idle(40);
        scene.addKeyframe();
        scene.text(40, "第六、七层：",[4,7,2]);
        for (let i of PosList6){
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.overlay.showOutline("red", {}, [3,6,1,5,7,3], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "...如此，大气冷凝机便建造完成了");
        scene.rotateCameraY(-180);
        scene.idle(40);
        scene.rotateCameraY(-180);
        scene.idle(60);
      }
    );
});