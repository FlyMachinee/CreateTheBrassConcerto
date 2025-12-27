Ponder.registry((event) => {
  event
    .create(["kubejs:blasting_compressor", "ad_astra:steel_block", "ad_astra:steel_plate", "minecraft:diamond"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_blasting_compressor",
      "使用爆破压缩机",
      "kubejs:blasting_compressor",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(7);
        scene.setSceneOffsetY(-3)
        scene.scaleSceneView(0.65);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(80, "爆破压缩机可以将金属块压制成金属板，或是提供需要高温高压的环境");
        scene.idle(120);
        scene.addKeyframe();
        scene.text(60, "首先，爆破压缩机核心附近必须拥有正确的基础结构");
        scene.text(60, "核心位置", [4,6,4]);
        scene.overlay.showOutline("green", {}, [4,6,4], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "请注意：核心应当朝向集装箱!");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "接着，你应当提供256 rpm的转速，所有传动杆都可以套上机壳！");
        scene.overlay.showOutline("blue", {}, [2, 6, 4, 6, 6, 4], 60);
        scene.world.modifyTileNBT([2, 6, 4, 6, 6, 4], (nbt) => { nbt.Speed = 256.0 });
        for (let i = 2; i < 7; i++) {
          scene.idle(15);
          scene.effects.rotationDirectionIndicator([i, 6, 4])
        }
        scene.addKeyframe();
        scene.text(60, "接下来利用机械手等物件在指定位置放置好输入的材料");
        scene.overlay.showOutline("green", {}, [3, 8, 3, 5, 9, 5], 60);
        for (let i1 = 0; i1 < 9; i1++) {
          scene.world.setBlock([3 + (Math.floor(i1 / 3)) % 3, 9, 3 + (i1 % 3)], "ad_astra:steel_block", true);
          scene.world.showSection([3 + (Math.floor(i1 / 3)) % 3, 9, 3 + (i1 % 3)], Direction.down);
          scene.idle(5);
        }
        scene.idle(35);
        scene.addKeyframe();
        scene.text(60, "如果你担心炸膛，可以使用水对机器进行保护！");
        for (let i1 = 0; i1 < 9; i1++) {
          scene.world.setBlock([3 + (Math.floor(i1 / 3)) % 3, 10, 3 + (i1 % 3)], "minecraft:water", true);
          scene.world.showSection([3 + (Math.floor(i1 / 3)) % 3, 10, 3 + (i1 % 3)], Direction.down);
          scene.idle(5);
        }
        scene.idle(35);
        scene.addKeyframe();
        scene.text(60, "最后将所需的爆破药在红色区域内激活！");
        scene.overlay.showOutline("red", {}, [3, 9, 3, 5, 10, 5], 60);
        scene.idle(20);
        const TNT2 = scene.world.createEntity("tnt", [3, 11.5, 4])
        scene.idle(1);
        const TNT5 = scene.world.createEntity("tnt", [4, 11.5, 4])
        scene.idle(1);
        const TNT8 = scene.world.createEntity("tnt", [5, 11.5, 4])
        scene.idle(9);
        scene.world.removeEntity(TNT2)
        scene.world.removeEntity(TNT5)
        scene.world.removeEntity(TNT8)
        scene.world.setBlocks([3, 9, 3, 5, 9, 5],true,"minecraft:air")
        scene.idle(10);
        scene.rotateCameraY(45);
        scene.idle(20);
        scene.world.setBlock([4,6,2],"create:brass_funnel",false)
        scene.world.flapFunnel([4,6,2], false);
        scene.world.createItemEntity([4.5,6.5,2.5], Direction.north, "64x ad_astra:steel_plate");
        scene.world.flapFunnel([4,6,2], false);
        scene.idle(5);
        scene.world.createItemEntity([4.5,6.5,2.5], Direction.north, "36x ad_astra:steel_plate");
        scene.idle(20);
      }
    )
    .scene(
      "kubejs:blasting_compressor",
      "建造爆破压缩机",
      "kubejs:blasting_compressor",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(7);
        scene.setSceneOffsetY(-3)
        scene.scaleSceneView(0.65);
        scene.text(60, "你需要在爆破压缩机核心附近建造结构来完成爆破压缩机");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0, 1, 0, 8, 7, 8], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        scene.idle(40);
        scene.addKeyframe(); const Layer1 = [[4, 1, 2], [3, 1, 3], [4, 1, 3], [5, 1, 3], [2, 1, 4], [3, 1, 4], [4, 1, 4], [5, 1, 4], [6, 1, 4], [3, 1, 5], [4, 1, 5], [5, 1, 5], [4, 1, 6],]
        const Layer2 = [[4, 2, 2], [2, 2, 4], [4, 2, 4], [6, 2, 4], [4, 2, 6],]
        const Layer3 = [[4, 3, 2], [2, 3, 4], [4, 3, 4], [6, 3, 4], [4, 3, 6],]
        const Layer4 = [[3, 4, 2], [4, 4, 2], [5, 4, 2], [2, 4, 4], [4, 4, 4], [6, 4, 4], [3, 4, 6], [4, 4, 6], [5, 4, 6],]
        const Layer5 = [[3, 5, 2], [5, 5, 2], [2, 5, 3], [3, 5, 3], [4, 5, 3], [5, 5, 3], [6, 5, 3], [2, 5, 4], [3, 5, 4], [4, 5, 4], [5, 5, 4], [6, 5, 4], [2, 5, 5], [3, 5, 5], [4, 5, 5], [5, 5, 5], [6, 5, 5], [3, 5, 6], [5, 5, 6],]
        const Layer6 = [[3, 6, 2], [5, 6, 2], [2, 6, 3], [3, 6, 3], [4, 6, 3], [5, 6, 3], [6, 6, 3], [2, 6, 4], [3, 6, 4], [4, 6, 4], [5, 6, 4], [6, 6, 4], [2, 6, 5], [3, 6, 5], [4, 6, 5], [5, 6, 5], [6, 6, 5], [3, 6, 6], [5, 6, 6],]
        const Layer7 = [[3, 7, 2], [4, 7, 2], [5, 7, 2], [2, 7, 3], [3, 7, 3], [4, 7, 3], [5, 7, 3], [6, 7, 3], [2, 7, 4], [3, 7, 4], [4, 7, 4], [5, 7, 4], [6, 7, 4], [2, 7, 5], [3, 7, 5], [4, 7, 5], [5, 7, 5], [6, 7, 5], [3, 7, 6], [4, 7, 6], [5, 7, 6],]
        scene.addKeyframe();
        scene.text(30, "第 1 层：", [3, 1, 3])
        for (let i of Layer1) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
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
      })
      .scene(
        "kubejs:mystery_compressor",
        "*&#$*#($^(*@",
        "kubejs:blasting_compressor",
        (scene, utils) => {
          scene.configureBasePlate(0, 0, 9);
          scene.showStructure(7);
        scene.setSceneOffsetY(-3)
        scene.scaleSceneView(0.65);
          scene.idle(20);
          scene.world.modifyTileNBT([2, 6, 4, 6, 6, 4], (nbt) => { nbt.Speed = 256.0 });
          scene.idle(20);
          scene.addKeyframe();
          for (let i1 = 0; i1 < 9; i1++) {
            scene.world.setBlock([3 + (Math.floor(i1 / 3)) % 3, 9, 3 + (i1 % 3)], "ad_astra:steel_block", true);
            scene.world.showSection([3 + (Math.floor(i1 / 3)) % 3, 9, 3 + (i1 % 3)], Direction.down);
            scene.idle(5);
          }
          scene.idle(35);
          const creeper1 = scene.world.createEntity("creeper", [3, 10, 4])
          scene.idle(1);
          const creeper2 = scene.world.createEntity("creeper", [4, 10, 4])
          scene.idle(1);
          const creeper3 = scene.world.createEntity("creeper", [5, 10, 4])
          scene.idle(9);
          scene.world.removeEntity(creeper1)
          scene.world.removeEntity(creeper2)
          scene.world.removeEntity(creeper3)
          scene.world.setBlocks([3, 9, 3, 5, 9, 5],true,"minecraft:air")
          scene.idle(10);

          scene.addKeyframe();
          for (let i1 = 0; i1 < 9; i1++) {
            scene.world.setBlock([3 + (Math.floor(i1 / 3)) % 3, 9, 3 + (i1 % 3)], "ad_astra:steel_block", true);
            scene.idle(5);
          }
          scene.idle(35);
          const crystal = scene.world.createEntity("end_crystal", [4, 10, 4])
          scene.idle(9);
          scene.world.removeEntity(crystal)
          scene.world.setBlocks([3, 9, 3, 5, 9, 5],true,"minecraft:air")
          scene.idle(10);

          scene.addKeyframe();
          for (let i1 = 0; i1 < 9; i1++) {
            scene.world.setBlock([3 + (Math.floor(i1 / 3)) % 3, 9, 3 + (i1 % 3)], "ad_astra:steel_block", true);
            scene.idle(5);
          }
          scene.idle(35);
          const propellant = scene.world.createEntity("createbigcannons:primed_propellant", [4, 11.5, 4])
          scene.idle(9);
          scene.world.removeEntity(propellant)
          scene.world.setBlocks([3, 9, 3, 5, 9, 5],true,"minecraft:air")
          scene.idle(10);
          scene.idle(20);
        }
      )
});