Ponder.registry((event) => {
  event
    .create(["kubejs:space_elevator_controller", "kubejs:space_elevator"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:build_base",
      "建造地面基座",
      "kubejs:space_elevator_controller",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(9);
        scene.scaleSceneView(0.6);
        scene.setSceneOffsetY(-2)
        scene.text(60, "在组装太空电梯前，你首先需要在地面搭建合适的结构！");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "需要注意的是，如果太空电梯之间离的太近，也许会干扰彼此的运行！");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0, 1, 0, 14, 9, 14], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        const Layer1 = [[5, 1, 3], [6, 1, 3], [7, 1, 3], [8, 1, 3], [9, 1, 3], [5, 1, 4], [6, 1, 4], [7, 1, 4], [8, 1, 4], [9, 1, 4], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [7, 1, 5], [8, 1, 5], [9, 1, 5], [10, 1, 5], [11, 1, 5], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6], [7, 1, 6], [8, 1, 6], [9, 1, 6], [10, 1, 6], [11, 1, 6], [3, 1, 7], [4, 1, 7], [5, 1, 7], [6, 1, 7], [7, 1, 7], [8, 1, 7], [9, 1, 7], [10, 1, 7], [11, 1, 7], [3, 1, 8], [4, 1, 8], [5, 1, 8], [6, 1, 8], [7, 1, 8], [8, 1, 8], [9, 1, 8], [10, 1, 8], [11, 1, 8], [3, 1, 9], [4, 1, 9], [5, 1, 9], [6, 1, 9], [7, 1, 9], [8, 1, 9], [9, 1, 9], [10, 1, 9], [11, 1, 9], [5, 1, 10], [6, 1, 10], [7, 1, 10], [8, 1, 10], [9, 1, 10], [5, 1, 11], [6, 1, 11], [7, 1, 11], [8, 1, 11], [9, 1, 11],]
        const Layer2 = [[7, 2, 3], [7, 2, 4], [5, 2, 5], [6, 2, 5], [7, 2, 5], [8, 2, 5], [9, 2, 5], [5, 2, 6], [6, 2, 6], [7, 2, 6], [8, 2, 6], [9, 2, 6], [3, 2, 7], [4, 2, 7], [5, 2, 7], [6, 2, 7], [7, 2, 7], [8, 2, 7], [9, 2, 7], [10, 2, 7], [11, 2, 7], [5, 2, 8], [6, 2, 8], [7, 2, 8], [8, 2, 8], [9, 2, 8], [5, 2, 9], [6, 2, 9], [7, 2, 9], [8, 2, 9], [9, 2, 9], [7, 2, 10], [7, 2, 11],]
        const Layer3 = [[7, 3, 4], [5, 3, 5], [9, 3, 5], [6, 3, 6], [7, 3, 6], [8, 3, 6], [6, 3, 7], [7, 3, 7], [8, 3, 7], [6, 3, 8], [7, 3, 8], [8, 3, 8], [5, 3, 9], [9, 3, 9], [7, 3, 10],]
        const Layer4 = [[5, 4, 5], [9, 4, 5], [7, 4, 7], [5, 4, 9], [9, 4, 9],]
        const Layer5 = [[5, 5, 5], [6, 5, 5], [8, 5, 5], [9, 5, 5], [5, 5, 6], [6, 5, 6], [7, 5, 6], [8, 5, 6], [9, 5, 6], [6, 5, 7], [7, 5, 7], [8, 5, 7], [5, 5, 8], [6, 5, 8], [7, 5, 8], [8, 5, 8], [9, 5, 8], [5, 5, 9], [6, 5, 9], [8, 5, 9], [9, 5, 9],]
        const Layer6 = [[5, 6, 5], [6, 6, 5], [7, 6, 5], [8, 6, 5], [9, 6, 5], [5, 6, 6], [6, 6, 6], [7, 6, 6], [8, 6, 6], [9, 6, 6], [5, 6, 7], [6, 6, 7], [7, 6, 7], [8, 6, 7], [9, 6, 7], [5, 6, 8], [6, 6, 8], [7, 6, 8], [8, 6, 8], [9, 6, 8], [5, 6, 9], [6, 6, 9], [7, 6, 9], [8, 6, 9], [9, 6, 9],]
        const Layer7 = [[5, 7, 5], [6, 7, 5], [8, 7, 5], [9, 7, 5], [5, 7, 6], [9, 7, 6], [5, 7, 8], [9, 7, 8], [5, 7, 9], [6, 7, 9], [8, 7, 9], [9, 7, 9],]
        scene.addKeyframe();
        scene.text(30, "第 1 层：", [5, 1, 5])
        for (let i of Layer1) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(60);
        scene.addKeyframe();
        scene.text(30, "第 2 层：", [5, 2, 5])
        for (let i of Layer2) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(64);
        scene.addKeyframe();
        scene.text(30, "第 3 层：", [5, 3, 5])
        for (let i of Layer3) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 4 层：", [5, 4, 5])
        for (let i of Layer4) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.text(60, "请注意：核心应朝向前方！", [7, 3, 4]);
        scene.overlay.showOutline("red", {}, [7, 3, 4], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "第 5 层：", [5, 5, 5])
        for (let i of Layer5) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
        scene.addKeyframe();
        scene.text(30, "第 6 层：", [5, 6, 5])
        for (let i of Layer6) {
          scene.idle(1);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(48);
        scene.addKeyframe();
        scene.text(30, "第 7 层：", [5, 7, 5])
        for (let i of Layer7) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
      })
    .scene(
      "kubejs:build_elevator",
      "组装太空电梯",
      "kubejs:space_elevator_controller",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(16);
        scene.scaleSceneView(0.6);
        scene.setSceneOffsetY(-1)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "你首先需要组装太空电梯，然后才能使用它！");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "需要注意的是，如果太空电梯之间离的太近，也许会干扰彼此的运行！");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "在确认结构无误后，首先使用黄铜机械硬盘为核心提供1024GiB的计算数据");
        scene.showControls(15, [7, 3, 4], "up").withItem("kubejs:brass_hard_disk")
        scene.overlay.showOutline("green", {}, [7, 3, 4], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "然后，为核心提供充足的电量（可以在JEI中查看所需电量！）");
        scene.showControls(15, [7, 3, 4], "up").withItem("createaddition:connector")
        scene.overlay.showOutline("blue", {}, [7, 3, 4], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "接着，为核心提供组装电梯所需的组件（可以在JEI中查看所需组件！）");
        scene.showControls(15, [7, 3, 4], "up").withItem("16x kubejs:electro_hydro_capacitor")
        scene.overlay.showOutline("blue", {}, [7, 3, 4], 90);
        scene.idle(30);
        scene.showControls(15, [7, 3, 4], "up").withItem("64x kubejs:steel_parts_box")
        scene.idle(30);
        scene.showControls(15, [7, 3, 4], "up").withItem("64x kubejs:carbon_electrode")
        scene.idle(30);
        scene.addKeyframe();
        scene.text(60, "最后，提供一枚满耐久的货运火箭，组装就会正式开始！");
        scene.showControls(15, [7, 3, 4], "up").withItem("kubejs:carrier_rocket")
        scene.overlay.showOutline("green", {}, [7, 3, 4], 30);
        scene.idle(30);

      })
    .scene(
      "kubejs:set_elevator",
      "使用太空电梯",
      "kubejs:space_elevator_use",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(12);
        scene.scaleSceneView(0.6);
        scene.setSceneOffsetY(-2)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "这是一个组装好的太空电梯（由于一些技术性问题，你可能看不见它的电缆）");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "在使用之前，你首先应当确保行星轨道的对应坐标已经摆放好了接收用的保险库或者平台");
        scene.idle(60);
        scene.world.hideSection([0, 6, 0, 14, 15, 14], Direction.up);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "你可以通过各种手段将需要运输的物品放入基座的保险库中");
        scene.overlay.showOutline("green", {}, [6, 5, 6, 8, 5, 8], 60);
        scene.showControls(15, [7, 6, 7], "down").withItem("createloveandwar:tungsten_sheet")
        scene.idle(20);
        scene.showControls(15, [7, 6, 7], "down").withItem("kubejs:navigate_data_empty")
        scene.idle(20);
        scene.showControls(15, [7, 6, 7], "down").withItem("kubejs:parts_box")
        scene.idle(20);
        scene.world.showSection([0, 6, 0, 14, 15, 14], Direction.down);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "在为核心提供太空电梯、计算数据以及充足的电力后（通过黄铜硬盘提供！）...");
        scene.showControls(15, [7, 3, 4], "up").withItem("kubejs:brass_hard_disk")
        scene.overlay.showOutline("green", {}, [7, 3, 4], 80);
        scene.idle(30);
        scene.showControls(15, [7, 3, 4], "up").withItem("kubejs:space_elevator")
        scene.idle(30);
        scene.showControls(15, [7, 3, 4], "up").withItem("createaddition:connector")
        scene.world.hideSection([7, 3, 3], Direction.up)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "只需要为核心提供红石信号即可进行发射！");
        scene.overlay.showOutline("red", {}, [7, 3, 4], 30);
        scene.world.setBlock([7, 3, 3], "minecraft:lever", true)
        scene.world.showSection([7, 3, 3], Direction.down)
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "需要注意的是，机器仅接受强充能！");
        scene.overlay.showOutline("red", {}, [7, 3, 3], 60);
        scene.world.modifyBlock([7, 3, 3], state => state.with("powered", "true"), false)
        scene.effects.indicateRedstone([7.5, 3.5, 3.5])
        scene.idle(40);
        const Elevator = scene.world.createEntity("armor_stand", [7.5, 6.5, 7.5])
        scene.world.modifyEntity(Elevator, entity => {
          entity.mergeNbt('{Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:space_elevator",tags:{}}]}')
        })
        scene.idle(40);
        scene.addKeyframe();
        scene.text(60, "起飞时，太空电梯会装载保险库内的所有物品");
        for (let i1 = 0; i1 < 80; i1++) {
          scene.world.modifyEntity(Elevator, entity => {
            entity.addDeltaMovement([0, 0.012, 0]);
            entity.move("self", entity.getDeltaMovement());
          });
          scene.idle(1);
        }
        scene.addKeyframe();
        scene.text(60, "发射只会消耗太空电梯的1点耐久，你可以轻松地修复它！");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "控制台可以自动从旁边的容器中获取电和物品——这应当会为你提供一些方便！");
        scene.idle(80);
      }
    )
    .scene(
      "kubejs:recive_elevator",
      "接收太空电梯",
      "kubejs:space_elevator_controller",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(0);
        scene.scaleSceneView(0.6);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "在飞行后，太空电梯会向行星轨道的相同坐标处投放一个空投舱并返回");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "与火箭和空投炮不同，你应当使用3*3的保险库来接收它");
        let i2 = 0; let i1 = 0;
        function setDepot(pos1, pos2, block, time) {
          for (i2 = 0; i2 < 3; i2++) {
            for (i1 = 0; i1 < 3; i1++) {
              scene.world.setBlock([i1 + pos1, 1, i2 + pos2], block, false)
              scene.world.showSection([i1 + pos1, 1, i2 + pos2], Direction.down);
            }
          };
          for (i2 = 0; i2 < 3; i2++) {
            for (i1 = 0; i1 < 3; i1++) {
              scene.world.modifyBlock([i1 + pos1, 1, i2 + pos2], state => state.with("large", "true"), false)
              scene.world.modifyTileNBT([i1 + pos1, 1, i2 + pos2], (nbt) => { nbt.Controller = { X: pos1, Y: 1, Z: pos2 } })
            }
          };
          scene.idle(time);

        }
        setDepot(2, 7, "create_connected:item_silo", 10);
        setDepot(9, 2, "create_connected:item_silo", 10);
        setDepot(7, 11, "minecraft:stone", 10);
        scene.idle(50);
        scene.addKeyframe();
        scene.text(60, "在卸货时，空投舱的装载物进入下方的保险库");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "如果不存在保险库，那么空投舱会直接替换下方的方块！");
        const Rocket = scene.world.createEntity("armor_stand", [3.5, 14.5, 8.5])
        scene.world.modifyEntity(Rocket, entity => {
          entity.mergeNbt('{Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:airdrop"}]}')
        })
        const Rocket1 = scene.world.createEntity("armor_stand", [10.5, 14.5, 3.5])
        scene.world.modifyEntity(Rocket1, entity => {
          entity.mergeNbt('{Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:airdrop"}]}')
        })

        const Rocket2 = scene.world.createEntity("armor_stand", [8.5, 14.5, 12.5])
        scene.world.modifyEntity(Rocket2, entity => {
          entity.mergeNbt('{Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:airdrop"}]}')
        })

        for (i1 = 0; i1 < 123; i1++) {
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
          if (i1 == 62) {
            scene.world.removeEntity(Rocket)
            scene.effects.indicateRedstone([3.5, 2.25, 8.5])
          }
          if (i1 == 102) {
            scene.world.removeEntity(Rocket1)
            scene.effects.indicateRedstone([10.5, 2.25, 3.5])
          }
          if (i1 == 122) {
            scene.world.removeEntity(Rocket2)
            scene.effects.indicateRedstone([8.5, 2.25, 12.5])
          }
          scene.idle(1);
        }
        for (i2 = 11; i2 < 14; i2++) {
          for (i1 = 7; i1 < 10; i1++) {
            scene.world.setBlock([i1, 1, i2], "air", false)
          }
        }
        scene.idle(1);
        for (i2 = 11; i2 < 14; i2++) {
          for (i1 = 7; i1 < 10; i1++) {
            scene.world.setBlock([i1, 1, i2], "create_connected:item_silo", false)
          }
        }
        for (i2 = 11; i2 < 14; i2++) {
          for (i1 = 7; i1 < 10; i1++) {
            scene.world.modifyBlock([i1, 1, i2], state => state.with("large", "true"), false)
            scene.world.modifyTileNBT([i1, 1, i2], (nbt) => { nbt.Controller = { X: 7, Y: 1, Z: 11 } })
          }
        };
        scene.idle(20);
      }
    )
});