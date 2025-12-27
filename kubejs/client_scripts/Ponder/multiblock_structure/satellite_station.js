Ponder.registry((event) => {
  event
    .create(["kubejs:satellite_station", "kubejs:satellite", "kubejs:satellite_mining_module", "kubejs:satellite_scanning_module"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:get_data",
      "使用人造卫星",
      "kubejs:satellite_station",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(15);
        scene.scaleSceneView(0.8);
        scene.setSceneOffsetY(-1)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "轨道卫星收发站兼顾发射、接收和维护卫星的功能");
        scene.idle(80);
        scene.text(40, "以获取火箭导航数据为例：");
        scene.idle(60);
        scene.addKeyframe();
        scene.text(60, "在发射时，你首先需要为收发站控制器提供发射材料");
        scene.overlay.showOutline("green", {}, [4, 2, 1], 80);
        scene.showControls(15, [4, 2, 1], "up").withItem("kubejs:hydrogen_bucket")
        scene.idle(20);
        scene.showControls(15, [4, 2, 1], "down").withItem("kubejs:brass_parts_box")
        scene.idle(20);
        scene.showControls(15, [4, 2, 1], "up").withItem("kubejs:radiator")
        scene.idle(40);
        scene.text(60, "接着提供卫星探测模块和用于让卫星分辨目标的星球仪");
        scene.showControls(15, [4, 2, 1], "up").withItem("kubejs:satellite_scanning_module")
        scene.overlay.showOutline("green", {}, [4, 2, 1], 60);
        scene.idle(30);
        scene.showControls(15, [4, 2, 1], "up").withItem("ad_astra:earth_globe")
        scene.idle(50);
        scene.addKeyframe();
        scene.text(60, "最后提供计算数据和空导航数据芯片就能发射卫星了！");
        scene.showControls(15, [4, 2, 1], "up").withItem("kubejs:brass_hard_disk")
        scene.overlay.showOutline("green", {}, [4, 2, 1], 60);
        scene.idle(30);
        scene.showControls(15, [4, 2, 1], "up").withItem("kubejs:navigate_data_empty")
        scene.idle(50);
        const Satellite1 = scene.world.createEntity("armor_stand", [4.5, 2.5, 6.5])
        scene.world.modifyEntity(Satellite1, entity => {
          entity.mergeNbt('{Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:satellite",tags:{}}]}')
        })
        const Satellite2 = scene.world.createEntity("armor_stand", [4.5, 8.5, 6.5])
        scene.world.modifyEntity(Satellite2, entity => {
          entity.mergeNbt('{Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:satellite",tags:{}}]}')
        })
        scene.idle(20);
        for (let i = 1; i < 31; i++) {
          scene.world.modifyEntity(Satellite1, entity => {
            entity.addDeltaMovement([0, 0.002 * i, 0]);
            entity.move("self", entity.getDeltaMovement());
          });
          scene.idle(1);
        }
        scene.world.removeEntity(Satellite1)
        scene.idle(20);
        for (let i1 = 1; i1 < 31; i1++) {
          scene.world.modifyEntity(Satellite2, entity => {
            entity.setDeltaMovement([0, -0.2, 0]);
            entity.move("self", entity.getDeltaMovement());
          });
          scene.idle(1);
        }
        scene.world.removeEntity(Satellite2)
        scene.addKeyframe();
        scene.text(60, "卫星将会同时产出目标星球的着陆信息和入轨信息");
        scene.showControls(15, [4, 2, 1], "down").withItem("kubejs:navigate_data_moon_orbit")
        scene.overlay.showOutline("green", {}, [4, 2, 1], 60);
        scene.idle(30);
        scene.showControls(15, [4, 2, 1], "down").withItem("kubejs:navigate_data_moon")
        scene.idle(50);
        scene.addKeyframe();
        scene.text(60, "卫星收发站可以自动从接触的容器中提取物品（包括太空采矿模块），也可以自动将物品输出到旁边的容器中");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "最后需要注意的是——卫星只能在轨道中发射");
        scene.idle(80);
      }
    )
    .scene(
      "kubejs:build_satellite_station",
      "建造轨道卫星收发站",
      "kubejs:satellite_station",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(9);
        scene.scaleSceneView(0.8);
        scene.setSceneOffsetY(-1)
        scene.text(60, "你需要在收发站控制器附近建造结构来完成轨道卫星收发站");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0, 1, 0, 8, 9, 8], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        scene.idle(80);
        const Layer1 = [[3, 1, 1], [4, 1, 1], [5, 1, 1], [2, 1, 2], [3, 1, 2], [4, 1, 2], [5, 1, 2], [6, 1, 2], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [2, 1, 4], [3, 1, 4], [4, 1, 4], [5, 1, 4], [6, 1, 4], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [2, 1, 6], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6], [2, 1, 7], [3, 1, 7], [4, 1, 7], [5, 1, 7], [6, 1, 7], [2, 1, 8], [3, 1, 8], [4, 1, 8], [5, 1, 8], [6, 1, 8],]
        const Layer2 = [[4, 2, 1], [3, 2, 2], [4, 2, 2], [5, 2, 2], [2, 2, 3], [3, 2, 3], [4, 2, 3], [5, 2, 3], [6, 2, 3], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [2, 2, 5], [3, 2, 5], [4, 2, 5], [5, 2, 5], [6, 2, 5], [2, 2, 6], [3, 2, 6], [4, 2, 6], [5, 2, 6], [6, 2, 6], [2, 2, 7], [3, 2, 7], [4, 2, 7], [5, 2, 7], [6, 2, 7], [2, 2, 8], [3, 2, 8], [4, 2, 8], [5, 2, 8], [6, 2, 8],]
        const Layer3 = [[3, 3, 2], [4, 3, 2], [5, 3, 2], [2, 3, 4], [3, 3, 4], [4, 3, 4], [5, 3, 4], [6, 3, 4], [2, 3, 5], [6, 3, 5], [2, 3, 6], [6, 3, 6], [2, 3, 7], [6, 3, 7], [2, 3, 8], [3, 3, 8], [4, 3, 8], [5, 3, 8], [6, 3, 8],]
        scene.addKeyframe();
        scene.text(30, "第 1 层：", [3, 1, 4])
        for (let i of Layer1) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(74);
        scene.addKeyframe();
        scene.text(30, "第 2 层：", [3, 2, 4])
        for (let i of Layer2) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.text(60, "请注意：控制器应面向前方", [4, 2, 1]);
        scene.overlay.showOutline("red", {}, [4, 2, 1], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "第 3 层：", [3, 3, 4])
        for (let i of Layer3) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);

      }
    )
});