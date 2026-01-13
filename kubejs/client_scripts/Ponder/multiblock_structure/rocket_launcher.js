Ponder.registry((event) => {
  event
    .create(["kubejs:launch_pad_controller", "kubejs:carrier_rocket"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_launcher",
      "建造火箭发射台",
      "kubejs:launcher_pad_controller",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(9);
        scene.scaleSceneView(0.6);
        scene.setSceneOffsetY(-2)
        scene.text(60, "你需要在发射台控制器附近建造结构来完成火箭发射台");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0, 1, 0, 14, 9, 14], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        const Layer1 = [[5, 1, 3], [6, 1, 3], [7, 1, 3], [8, 1, 3], [9, 1, 3], [5, 1, 4], [6, 1, 4], [7, 1, 4], [8, 1, 4], [9, 1, 4], [4, 1, 5], [5, 1, 5], [6, 1, 5], [7, 1, 5], [8, 1, 5], [9, 1, 5], [10, 1, 5], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6], [7, 1, 6], [8, 1, 6], [9, 1, 6], [10, 1, 6], [11, 1, 6], [3, 1, 7], [4, 1, 7], [5, 1, 7], [6, 1, 7], [7, 1, 7], [8, 1, 7], [9, 1, 7], [10, 1, 7], [11, 1, 7], [3, 1, 8], [4, 1, 8], [5, 1, 8], [6, 1, 8], [7, 1, 8], [8, 1, 8], [9, 1, 8], [10, 1, 8], [11, 1, 8], [4, 1, 9], [5, 1, 9], [6, 1, 9], [7, 1, 9], [8, 1, 9], [9, 1, 9], [10, 1, 9], [5, 1, 10], [6, 1, 10], [7, 1, 10], [8, 1, 10], [9, 1, 10], [6, 1, 11], [7, 1, 11], [8, 1, 11],]
        const Layer2 = [[5, 2, 3], [6, 2, 3], [8, 2, 3], [9, 2, 3], [5, 2, 4], [6, 2, 4], [8, 2, 4], [9, 2, 4], [4, 2, 5], [5, 2, 5], [6, 2, 5], [7, 2, 5], [8, 2, 5], [9, 2, 5], [10, 2, 5], [5, 2, 6], [9, 2, 6], [5, 2, 7], [9, 2, 7], [5, 2, 8], [9, 2, 8], [4, 2, 9], [5, 2, 9], [9, 2, 9], [10, 2, 9], [5, 2, 10], [9, 2, 10],]
        const Layer3 = [[5, 3, 5], [7, 3, 5], [9, 3, 5], [5, 3, 6], [9, 3, 6], [5, 3, 8], [9, 3, 8], [5, 3, 9], [9, 3, 9],]
        const Layer4 = [[5, 4, 5], [9, 4, 5], [5, 4, 6], [9, 4, 6], [5, 4, 8], [9, 4, 8], [5, 4, 9], [6, 4, 9], [8, 4, 9], [9, 4, 9],]
        const Layer5 = [[5, 5, 5], [6, 5, 5], [7, 5, 5], [8, 5, 5], [9, 5, 5], [5, 5, 6], [6, 5, 6], [7, 5, 6], [8, 5, 6], [9, 5, 6], [4, 5, 7], [5, 5, 7], [6, 5, 7], [7, 5, 7], [8, 5, 7], [9, 5, 7], [10, 5, 7], [5, 5, 8], [6, 5, 8], [7, 5, 8], [8, 5, 8], [9, 5, 8], [6, 5, 9], [7, 5, 9], [8, 5, 9],]
        const Layer6 = [[6, 6, 5], [7, 6, 5], [8, 6, 5], [5, 6, 6], [9, 6, 6], [5, 6, 8], [9, 6, 8], [6, 6, 9], [7, 6, 9], [8, 6, 9],]
        const Layer7 = [[5, 7, 6], [9, 7, 6], [5, 7, 7], [9, 7, 7], [5, 7, 8], [9, 7, 8],]
        const Layer8 = [[5, 8, 6], [9, 8, 6], [5, 8, 7], [9, 8, 7], [5, 8, 8], [9, 8, 8],]
        const Layer9 = [[5, 9, 6], [9, 9, 6], [5, 9, 7], [9, 9, 7], [5, 9, 8], [9, 9, 8],]
        scene.addKeyframe();
        scene.text(30, "第 1 层：", [5, 1, 5])
        for (let i of Layer1) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(116);
        scene.addKeyframe();
        scene.text(30, "第 2 层：", [5, 2, 5])
        for (let i of Layer2) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(52);
        scene.addKeyframe();
        scene.text(30, "第 3 层：", [5, 3, 5])
        for (let i of Layer3) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.text(60, "请注意：控制器应面向前方", [7, 3, 5]);
        scene.overlay.showOutline("red", {}, [7, 3, 5], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "第 4 层：", [5, 4, 5])
        for (let i of Layer4) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 5 层：", [5, 5, 5])
        for (let i of Layer5) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(48);
        scene.addKeyframe();
        scene.text(30, "第 6 层：", [5, 6, 5])
        for (let i of Layer6) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 7 层：", [5, 7, 5])
        for (let i of Layer7) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 8 层：", [5, 8, 5])
        for (let i of Layer8) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 9 层：", [5, 9, 5])
        for (let i of Layer9) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);

      }
    )
    .scene(
      "kubejs:launch_rocket",
      "发射火箭",
      "kubejs:launcher_pad_controller",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(9);
        scene.scaleSceneView(0.6);
        scene.setSceneOffsetY(-2)
        scene.world.createItemOnBeltLike([6, 5, 6], Direction.down, "1x create:andesite_casing");
        scene.world.createItemOnBeltLike([6, 5, 8], Direction.down, "1x create:crushed_copper_ore");
        scene.world.createItemOnBeltLike([7, 5, 6], Direction.down, "1x create:wrench");
        scene.world.createItemOnBeltLike([7, 5, 8], Direction.down, "1x kubejs:rocket_mechanism");
        scene.world.createItemOnBeltLike([8, 5, 7], Direction.down, "1x kubejs:differential");
        scene.world.createItemOnBeltLike([8, 5, 8], Direction.down, "1x minecraft:shulker_box");
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "火箭发射台兼顾发射、接收和维护火箭的功能");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "在发射时，你首先需要为发射台控制器提供冷冻剂、维修盒与燃料罐来维护火箭");
        scene.showControls(15, [7, 3, 5], "up").withItem("kubejs:cryogen_bucket")
        scene.overlay.showOutline("green", {}, [7, 3, 5], 80);
        scene.idle(20);
        scene.showControls(15, [7, 3, 5], "down").withItem("kubejs:parts_box")
        scene.idle(20);
        scene.showControls(15, [7, 3, 5], "up").withItem("kubejs:fuel_tank")
        scene.idle(40);
        scene.addKeyframe();
        scene.text(60, "如果火箭是从轨道发射的，那么维护消耗的材料会更少！");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "接着提供导航数据芯片，就能发射火箭了！");
        scene.showControls(15, [7, 3, 5], "up").withItem("kubejs:navigate_data_earth")
        scene.overlay.showOutline("green", {}, [7, 3, 5], 15);
        const Rocket = scene.world.createEntity("armor_stand", [7.5, 6, 7.5])
        scene.world.modifyEntity(Rocket, entity => {
          entity.mergeNbt('{Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:carrier_rocket",tags:{}}]}')
        })
        scene.idle(30);
        scene.showControls(15, [7, 3, 5], "up").withItem("kubejs:navigate_data_earth_orbit")
        scene.overlay.showOutline("green", {}, [7, 3, 5], 15);
        scene.showControls(15, [7, 3, 5], "up").withItem("kubejs:navigate_data_moon")
        scene.overlay.showOutline("green", {}, [7, 3, 5], 15);
        scene.idle(50);
        scene.addKeyframe();
        scene.text(60, "起飞时，火箭会装载周围八个置物台上的所有物品");
        scene.world.removeItemsFromBelt([6, 5, 6])
        scene.world.removeItemsFromBelt([6, 5, 8])
        scene.world.removeItemsFromBelt([7, 5, 6])
        scene.world.removeItemsFromBelt([7, 5, 8])
        scene.world.removeItemsFromBelt([8, 5, 7])
        scene.world.removeItemsFromBelt([8, 5, 8])
        scene.overlay.showOutline("green", {}, [6, 5, 6,8,5,8], 15);
        for (let i1 = 0; i1 < 80; i1++) {
          scene.world.modifyEntity(Rocket, entity => {
            entity.addDeltaMovement([0, 0.012, 0]);
            entity.move("self", entity.getDeltaMovement());
          });
          scene.idle(1);
        }
        scene.addKeyframe();
        scene.text(60, "导航数据决定了火箭的飞行目的地");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "由于导航数据具有时效性，在发射后，导航数据将被消耗，并返还一颗空白芯片");
        scene.showControls(15, [7, 3, 5], "down").withItem("kubejs:navigate_data_empty")
        scene.overlay.showOutline("green", {}, [7, 3, 5], 15);
        scene.idle(80);
        scene.addKeyframe();
      }
    )
    .scene(
      "kubejs:recive_rocket",
      "接收火箭",
      "kubejs:launcher_pad_controller",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(0);
        scene.scaleSceneView(0.6);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "在飞行后，火箭会出现在目标星球的相同坐标处的最高点并下降");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "你可以单纯的使用3*3的置物台来接收火箭");
        let i2 = 0; let i1 = 0;
        function setDepot(pos1, pos2) {
          for (i2 = 0; i2 < 3; i2++) {
            for (i1 = 0; i1 < 3; i1++) {
              scene.world.setBlock([i1 + pos1, 1, i2 + pos2], "create:depot", false)
              scene.world.showSection([i1 + pos1, 1, i2 + pos2], Direction.down);
              scene.idle(2);
            }
          };
        }
        setDepot(2, 7);
        setDepot(9, 2);
        setDepot(7, 11);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "在卸货时，火箭的装载物会落到周围的八个置物台上");
          const Rocket = scene.world.createEntity("armor_stand", [3.5, 14.5, 8.5])
          scene.world.modifyEntity(Rocket, entity => {
            entity.mergeNbt('{Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:carrier_rocket",tags:{}}]}')
          })
          const Rocket1 = scene.world.createEntity("armor_stand", [10.5, 14.5, 3.5])
          scene.world.modifyEntity(Rocket1, entity => {
            entity.mergeNbt('{Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:carrier_rocket",tags:{}}]}')
          })

          const Rocket2 = scene.world.createEntity("armor_stand", [8.5, 14.5, 12.5])
          scene.world.modifyEntity(Rocket2, entity => {
            entity.mergeNbt('{Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:carrier_rocket",tags:{}}]}')
          })

        for (i1 = 0; i1 < 126; i1++) {
          if (i1 >= 0) {
            scene.world.modifyEntity(Rocket, entity => {
              entity.setDeltaMovement([0, -0.2, 0]);
              entity.move("self", entity.getDeltaMovement());
            });
          }
          if (i1 >= 40) {
            scene.world.modifyEntity(Rocket1, entity => {
              entity.setDeltaMovement([0, -0.2, 0]);
              entity.move("self", entity.getDeltaMovement());
            });
          }
          if (i1 >= 60) {
            scene.world.modifyEntity(Rocket2, entity => {
              entity.setDeltaMovement([0, -0.2, 0]);
              entity.move("self", entity.getDeltaMovement());
            });
          }
          if (i1==62) {
            scene.world.removeEntity(Rocket)
            scene.effects.indicateRedstone([3.5, 2.25, 8.5])
          }
          if (i1==65) {
            scene.world.createItemOnBeltLike([2, 1, 7], Direction.down, "1x kubejs:mechanical_core");
            scene.world.createItemOnBeltLike([2, 1, 8], Direction.down, "16x kubejs:rubber");
            scene.world.createItemOnBeltLike([2, 1, 9], Direction.down, "4x minecraft:cobblestone");
            scene.world.createItemOnBeltLike([3, 1, 7], Direction.down, "3x kubejs:iron_hand");
            scene.world.createItemOnBeltLike([3, 1, 9], Direction.down, "32x kubejs:crushed_coal");
            scene.world.createItemOnBeltLike([4, 1, 7], Direction.down, "12x kubejs:bearing");
            scene.world.createItemOnBeltLike([4, 1, 8], Direction.down, "31x kubejs:sulphur");
            scene.world.createItemOnBeltLike([4, 1, 9], Direction.down, "64x kubejs:salt");
          }
          if (i1==102) {
            scene.world.removeEntity(Rocket1)
            scene.effects.indicateRedstone([10.5, 2.25, 3.5])
          }
          if (i1==105) {
            scene.world.createItemOnBeltLike([9, 1, 2], Direction.down, "3x kubejs:circuit_board");
          }
          if (i1==122) {
            scene.world.removeEntity(Rocket2)
            scene.effects.indicateRedstone([8.5, 2.25, 12.5])
          }
          if (i1==125) {
            scene.world.createItemOnBeltLike([8, 1, 11], Direction.down, "3x kubejs:lamb_kebarb");
            scene.world.createItemOnBeltLike([7, 1, 11], Direction.down, "31x ad_astra:cheese");
            scene.world.createItemOnBeltLike([9, 1, 12], Direction.down, "12x kubejs:large_fries");
            scene.world.createItemOnBeltLike([9, 1, 13], Direction.down, "61x kubejs:slime_cola_can");
          }
          scene.idle(1);
        }

      }
    )
    .scene(
      "kubejs:pad_automatic",
      "发射台自动化",
      "kubejs:launcher_pad_controller_auto",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.world.showSection([4,1,4],Direction.down)
        scene.idle(5);
        scene.world.setBlock([5,1,4],"minecraft:chest",false)
        scene.world.showSection([5,1,4],Direction.down)
        scene.idle(5);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "发射台控制器可以自动从接触的容器中提取物品");
        scene.overlay.showOutline("green", {}, [5,1,4], 30);
        scene.showControls(15, [5,2,4], "up").withItem("kubejs:parts_box")
        scene.idle(10);
        scene.showControls(15, [4,2,4], "down").withItem("kubejs:parts_box")
        scene.idle(70);
        scene.addKeyframe();
        scene.text(60, "发射台控制器还支持自动将物品输出到旁边的容器中");
        scene.overlay.showOutline("green", {}, [4,1,4], 30);
        scene.showControls(15, [4,2,4], "up").withItem("kubejs:navigate_data_empty")
        scene.idle(10);
        scene.showControls(15, [5,2,4], "down").withItem("kubejs:navigate_data_empty")
        scene.idle(70);
        scene.addKeyframe();
        scene.text(60, "更棒的是，它也可以跟抽屉控制器交互！");
        scene.world.setBlock([5,1,4],"storagedrawers:controller",true)
        scene.idle(5);
        scene.world.showSection([6,1,4],Direction.down)
        scene.idle(5);
        scene.showControls(15, [5,2,4], "up").withItem("kubejs:parts_box")
        scene.idle(10);
        scene.showControls(15, [4,2,4], "down").withItem("kubejs:parts_box")
        scene.idle(30);
        scene.showControls(15, [4,2,4], "up").withItem("kubejs:navigate_data_empty")
        scene.idle(10);
        scene.showControls(15, [5,2,4], "down").withItem("kubejs:navigate_data_empty")
        scene.idle(70);

      }
    )
});