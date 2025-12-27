Ponder.registry((event) => {
  event
    .create(["kubejs:electro_hydro_resonant_tower", "kubejs:unsteady_electro_hydro", "iceandfire:dragonsteel_lightning_sword", "iceandfire:dragonsteel_lightning_shovel", "iceandfire:dragonsteel_lightning_pickaxe", "iceandfire:dragonsteel_lightning_axe", "iceandfire:dragonsteel_lightning_hoe", "minecraft:trident"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_electro_hydro_resonant_tower",
      "使用电流体谐振塔",
      "kubejs:electro_hydro_resonant_tower",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(26);
        scene.scaleSceneView(0.25);
        scene.setSceneOffsetY(-9)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(80, "电流体谐振塔可以用于收集环境中的电流体并进行处理！");
        scene.idle(120);
        scene.addKeyframe();
        scene.text(60, "电流体谐振塔核心附近必须拥有正确的基础结构");
        scene.text(60, "核心位置", [7, 3, 7]);
        scene.overlay.showOutline("green", {}, [7, 3, 7], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "电流体谐振塔的工作需要闪电");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "你可以选择向核心提供大量电力，让谐振塔自行产生高能闪电束...");
        scene.overlay.showOutline("blue", {}, [7, 3, 7], 60);
        scene.showControls(15, [7, 3, 7], "up").withItem("createaddition:connector")
        scene.idle(40);
        scene.world.createEntity("lightning_bolt", [7.5, 26.5, 7.5])
        scene.idle(40);
        scene.addKeyframe();
        scene.text(60, "或是在附近利用其它方式制造充足的普通闪电来大大降低核心的电力消耗！");
        scene.idle(20);
        scene.world.createEntity("lightning_bolt", [3.5, 1.5, 11.5])
        scene.idle(5);
        scene.world.createEntity("lightning_bolt", [7.5, 1.5, 9.5])
        scene.idle(5);
        scene.world.createEntity("lightning_bolt", [11.5, 1.5, 5.5])
        scene.idle(50);
      }
    )
    .scene(
      "kubejs:electro_hydro_resonant_tower",
      "建造电流体谐振塔",
      "kubejs:electro_hydro_resonant_tower",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(26);
        scene.scaleSceneView(0.3);
        scene.setSceneOffsetY(-8)
        scene.text(60, "你需要在电流体谐振塔核心附近建造结构来完成电流体谐振塔");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0, 1, 0, 14, 26, 14], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        scene.idle(40);
        scene.addKeyframe();
        const Layer1 = [[7, 1, 2], [7, 1, 3], [6, 1, 4], [7, 1, 4], [8, 1, 4], [5, 1, 5], [6, 1, 5], [7, 1, 5], [8, 1, 5], [9, 1, 5], [4, 1, 6], [5, 1, 6], [6, 1, 6], [7, 1, 6], [8, 1, 6], [9, 1, 6], [10, 1, 6], [2, 1, 7], [3, 1, 7], [4, 1, 7], [5, 1, 7], [6, 1, 7], [7, 1, 7], [8, 1, 7], [9, 1, 7], [10, 1, 7], [11, 1, 7], [12, 1, 7], [4, 1, 8], [5, 1, 8], [6, 1, 8], [7, 1, 8], [8, 1, 8], [9, 1, 8], [10, 1, 8], [5, 1, 9], [6, 1, 9], [7, 1, 9], [8, 1, 9], [9, 1, 9], [6, 1, 10], [7, 1, 10], [8, 1, 10], [7, 1, 11], [7, 1, 12],]
        const Layer2 = [[7, 2, 3], [7, 2, 4], [7, 2, 5], [3, 2, 7], [4, 2, 7], [5, 2, 7], [7, 2, 7], [9, 2, 7], [10, 2, 7], [11, 2, 7], [7, 2, 9], [7, 2, 10], [7, 2, 11],]
        const Layer3 = [[7, 3, 3], [7, 3, 5], [3, 3, 7], [5, 3, 7], [7, 3, 7], [9, 3, 7], [11, 3, 7], [7, 3, 9], [7, 3, 11],]
        const Layer4 = [[7, 4, 3], [7, 4, 5], [3, 4, 7], [5, 4, 7], [7, 4, 7], [9, 4, 7], [11, 4, 7], [7, 4, 9], [7, 4, 11],]
        const Layer5 = [[7, 5, 3], [7, 5, 4], [7, 5, 5], [6, 5, 6], [7, 5, 6], [8, 5, 6], [3, 5, 7], [4, 5, 7], [5, 5, 7], [6, 5, 7], [7, 5, 7], [8, 5, 7], [9, 5, 7], [10, 5, 7], [11, 5, 7], [6, 5, 8], [7, 5, 8], [8, 5, 8], [7, 5, 9], [7, 5, 10], [7, 5, 11],]
        const Layer6 = [[7, 6, 3], [7, 6, 4], [6, 6, 5], [7, 6, 5], [8, 6, 5], [5, 6, 6], [6, 6, 6], [7, 6, 6], [8, 6, 6], [9, 6, 6], [3, 6, 7], [4, 6, 7], [5, 6, 7], [6, 6, 7], [7, 6, 7], [8, 6, 7], [9, 6, 7], [10, 6, 7], [11, 6, 7], [5, 6, 8], [6, 6, 8], [7, 6, 8], [8, 6, 8], [9, 6, 8], [6, 6, 9], [7, 6, 9], [8, 6, 9], [7, 6, 10], [7, 6, 11],]
        const Layer7 = [[7, 7, 4], [7, 7, 5], [6, 7, 6], [7, 7, 6], [8, 7, 6], [4, 7, 7], [5, 7, 7], [6, 7, 7], [7, 7, 7], [8, 7, 7], [9, 7, 7], [10, 7, 7], [6, 7, 8], [7, 7, 8], [8, 7, 8], [7, 7, 9], [7, 7, 10],]
        const Layer8 = [[7, 8, 4], [7, 8, 5], [7, 8, 6], [4, 8, 7], [5, 8, 7], [6, 8, 7], [7, 8, 7], [8, 8, 7], [9, 8, 7], [10, 8, 7], [7, 8, 8], [7, 8, 9], [7, 8, 10],]
        const Layer9 = [[7, 9, 5], [5, 9, 7], [7, 9, 7], [9, 9, 7], [7, 9, 9],[7, 10, 5], [5, 10, 7], [7, 10, 7], [9, 10, 7], [7, 10, 9],[7, 11, 5], [5, 11, 7], [7, 11, 7], [9, 11, 7], [7, 11, 9],]
        const Layer12 = [[7, 12, 5], [7, 12, 6], [5, 12, 7], [6, 12, 7], [7, 12, 7], [8, 12, 7], [9, 12, 7], [7, 12, 8], [7, 12, 9],]
        const Layer13 = [[7, 13, 5], [6, 13, 6], [7, 13, 6], [8, 13, 6], [5, 13, 7], [6, 13, 7], [7, 13, 7], [8, 13, 7], [9, 13, 7], [6, 13, 8], [7, 13, 8], [8, 13, 8], [7, 13, 9],]
        const Layer14 = [[7, 14, 6], [7, 14, 7], [7, 14, 8],]
        const Layer15 = [[7, 15, 6], [6, 15, 7], [7, 15, 7], [8, 15, 7], [7, 15, 8],]
        const Layer16 = [[7, 16, 6], [6, 16, 7], [7, 16, 7], [8, 16, 7], [7, 16, 8],]
        const Layer17 = [[7, 17, 6], [6, 17, 7], [7, 17, 7], [8, 17, 7], [7, 17, 8],]
        const Layer18 = [[6, 18, 7], [7, 18, 7], [8, 18, 7],]
        const Layer19 = [[6, 19, 7], [7, 19, 7], [8, 19, 7],]
        const Layer20 = [[6, 20, 7], [7, 20, 7], [8, 20, 7],]
        const Layer21 = [[7, 21, 6], [6, 21, 7], [7, 21, 7], [8, 21, 7], [7, 21, 8],[7, 22, 7],[7, 23, 7],[7, 24, 7],[7, 25, 7],[7, 26, 7],]
        scene.addKeyframe();
        scene.text(30, "第 1 层：", [6, 1, 6])
        for (let i of Layer1) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(60);
        scene.addKeyframe();
        scene.text(30, "第 2 层：", [6, 2, 6])
        for (let i of Layer2) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 3 层：", [6, 3, 6])
        for (let i of Layer3) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 4 层：", [6, 4, 6])
        for (let i of Layer4) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 5 层：", [6, 5, 6])
        for (let i of Layer5) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 6 层：", [6, 6, 6])
        for (let i of Layer6) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(56);
        scene.addKeyframe();
        scene.text(30, "第 7 层：", [6, 7, 6])
        for (let i of Layer7) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 8 层：", [6, 8, 6])
        for (let i of Layer8) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 9 - 11 层：", [6, 10, 6])
        for (let i of Layer9) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 12 层：", [6, 12, 6])
        for (let i of Layer12) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 13 层：", [6, 13, 6])
        for (let i of Layer13) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 14 层：", [6, 14, 6])
        for (let i of Layer14) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 15 层：", [6, 15, 6])
        for (let i of Layer15) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 16 层：", [6, 16, 6])
        for (let i of Layer16) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 17 层：", [6, 17, 6])
        for (let i of Layer17) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 18 层：", [6, 18, 6])
        for (let i of Layer18) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 19 层：", [6, 19, 6])
        for (let i of Layer19) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 20 层：", [6, 20, 6])
        for (let i of Layer20) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 21 - 26 层：", [6, 21, 6])
        for (let i of Layer21) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
      })
});