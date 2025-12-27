Ponder.registry((event) => {
  event
    .create(["kubejs:airdrop_station"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:build_airdrop_station",
      "建造轨道空投炮",
      "kubejs:airdrop_station",
      (scene, utils) => {
        scene.setSceneOffsetY(-4)
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(12);
        scene.scaleSceneView(0.6);
        scene.text(60, "你需要在收发站控制器附近建造结构来完成轨道空投炮");
        scene.text(60, "核心位置", [4, 8, 4]);
        scene.overlay.showOutline("green", {}, [4, 8, 4], 30);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(30, "...建造如下结构");
        scene.world.hideSection([0, 1, 0, 8, 12, 8], Direction.up);
        scene.idle(40);
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标");
        scene.idle(80);
        const Layer1 = [[4, 4, 3], [3, 4, 4], [4, 4, 4], [5, 4, 4], [4, 4, 5],]
        const Layer2 = [[4, 5, 2], [2, 5, 4], [4, 5, 4], [6, 5, 4], [4, 5, 6],]
        const Layer3 = [[4, 6, 2], [3, 6, 3], [4, 6, 3], [5, 6, 3], [2, 6, 4], [3, 6, 4], [4, 6, 4], [5, 6, 4], [6, 6, 4], [3, 6, 5], [4, 6, 5], [5, 6, 5], [4, 6, 6],]
        const Layer4 = [[3, 7, 3], [5, 7, 3], [4, 7, 4], [3, 7, 5], [5, 7, 5],]
        const Layer5 = [[3, 8, 3], [5, 8, 3], [4, 8, 4], [3, 8, 5], [5, 8, 5],]
        const Layer6 = [[4, 9, 2], [3, 9, 3], [4, 9, 3], [5, 9, 3], [2, 9, 4], [3, 9, 4], [4, 9, 4], [5, 9, 4], [6, 9, 4], [3, 9, 5], [4, 9, 5], [5, 9, 5], [4, 9, 6],]
        const Layer7 = [[4, 10, 2], [3, 10, 3], [4, 10, 3], [5, 10, 3], [2, 10, 4], [3, 10, 4], [4, 10, 4], [5, 10, 4], [6, 10, 4], [3, 10, 5], [4, 10, 5], [5, 10, 5], [4, 10, 6],]
        const Layer8 = [[4, 11, 2], [2, 11, 4], [4, 11, 4], [6, 11, 4], [4, 11, 6],]
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
        scene.text(60, "控制器可以面朝任意方位！", [4, 8, 4]);
        scene.overlay.showOutline("red", {}, [4, 8, 4], 30);
        scene.idle(80);
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
        scene.addKeyframe();
        scene.text(30, "第 8 层：", [3, 8, 3])
        for (let i of Layer8) {
          scene.idle(2);
          scene.world.showSection(i, Direction.down);
        };
        scene.idle(40);
      }
    )
    .scene(
      "kubejs:use_airdrop_station",
      "使用轨道空投炮发射空投舱",
      "kubejs:airdrop_station",
      (scene, utils) => {
        scene.setSceneOffsetY(-4)
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(15);
        scene.scaleSceneView(0.6);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "轨道空投炮用于快速从轨道向地面转移物品");
        scene.idle(30);
        scene.world.hideSection([0, 9, 0, 8, 12, 8], Direction.up);
        scene.world.hideSection([4, 8, 5], Direction.down)
        scene.world.hideSection([4, 8, 3], Direction.down)
        scene.idle(50);
        scene.addKeyframe();
        scene.text(60, "将要发射的物品送入核心之中");
        scene.overlay.showOutline("green", {}, [4, 8, 4], 80);
        scene.showControls(15, [4, 8, 4], "up").withItem("create:electron_tube")
        scene.idle(20);
        scene.showControls(15, [4, 8, 4], "up").withItem("kubejs:aluminite")
        scene.idle(20);
        scene.showControls(15, [4, 8, 4], "up").withItem("kubejs:slimeria_air_fluid_bucket")
        scene.idle(40);
        scene.addKeyframe();
        scene.text(60, "你可以使用存量转信器来读取空投炮的库存...");
        scene.world.setBlock([4, 8, 5], "create:stockpile_switch", true)
        scene.world.showSection([4, 8, 5], Direction.down)
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "接着只要提供红石信号，空投舱就将被发射！");
        scene.world.setBlock([4, 8, 3], "minecraft:lever", true)
        scene.world.showSection([4, 8, 3], Direction.down)
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "需要注意的是，机器仅接受强充能！");
        scene.overlay.showOutline("red", {}, [4, 8, 4], 60);
        scene.world.modifyBlock([4, 8, 3], state => state.with("powered", "true"), false)
        scene.effects.indicateRedstone([4.5, 8.5, 3.5])
        scene.idle(20);
        const Airdrop1 = scene.world.createEntity("armor_stand", [4.5, 2, 4.5])
        scene.world.modifyEntity(Airdrop1, entity => {
          entity.mergeNbt('{Pose:{Head:[180f,0f,0f]},Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:airdrop",tags:{}}]}')
        })
        scene.idle(20);
        for (let i = 1; i < 21; i++) {
          scene.world.modifyEntity(Airdrop1, entity => {
            entity.addDeltaMovement([0, -0.2, 0]);
            entity.move("self", entity.getDeltaMovement());
          });
          scene.idle(1);
        }
        scene.world.removeEntity(Airdrop1)
        scene.idle(40);
        scene.world.showSection([0, 9, 0, 8, 12, 8], Direction.down)
        scene.idle(40);
      }
    )
    .scene(
      "kubejs:recive_airdrop",
      "接收空投舱",
      "kubejs:launcher_pad_controller",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 15);
        scene.showStructure(0);
        scene.scaleSceneView(0.6);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "在飞行后，空投舱会出现在目标星球的相同坐标处的最高点并下降");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "你可以单纯的使用3*3的置物台来接收空投舱");
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
        scene.text(60, "在卸货时，空投舱的装载物会落到周围的八个置物台上");
        const Airdrop = scene.world.createEntity("armor_stand", [3.5, 14.5, 8.5])
        scene.world.modifyEntity(Airdrop, entity => {
          entity.mergeNbt('{Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:airdrop",tags:{}}]}')
        })
        const Airdrop1 = scene.world.createEntity("armor_stand", [10.5, 14.5, 3.5])
        scene.world.modifyEntity(Airdrop1, entity => {
          entity.mergeNbt('{Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:airdrop",tags:{}}]}')
        })

        const Airdrop2 = scene.world.createEntity("armor_stand", [8.5, 14.5, 12.5])
        scene.world.modifyEntity(Airdrop2, entity => {
          entity.mergeNbt('{Invisible:1b,ArmorItems:[{},{},{},{Count:1b,id:"kubejs:airdrop",tags:{}}]}')
        })

        for (i1 = 0; i1 < 126; i1++) {
          if (i1 >= 0) {
            scene.world.modifyEntity(Airdrop, entity => {
              entity.setDeltaMovement([0, -0.2, 0]);
              entity.move("self", entity.getDeltaMovement());
            });
          }
          if (i1 >= 40) {
            scene.world.modifyEntity(Airdrop1, entity => {
              entity.setDeltaMovement([0, -0.2, 0]);
              entity.move("self", entity.getDeltaMovement());
            });
          }
          if (i1 >= 60) {
            scene.world.modifyEntity(Airdrop2, entity => {
              entity.setDeltaMovement([0, -0.2, 0]);
              entity.move("self", entity.getDeltaMovement());
            });
          }
          if (i1 == 62) {
            scene.world.removeEntity(Airdrop)
            scene.effects.indicateRedstone([3.5, 2.25, 8.5])
          }
          if (i1 == 65) {
            scene.world.createItemOnBeltLike([2, 1, 7], Direction.down, "1x kubejs:mechanical_core");
            scene.world.createItemOnBeltLike([2, 1, 8], Direction.down, "16x kubejs:rubber");
            scene.world.createItemOnBeltLike([2, 1, 9], Direction.down, "4x minecraft:cobblestone");
            scene.world.createItemOnBeltLike([3, 1, 7], Direction.down, "3x kubejs:iron_hand");
            scene.world.createItemOnBeltLike([3, 1, 9], Direction.down, "32x kubejs:crushed_coal");
            scene.world.createItemOnBeltLike([4, 1, 7], Direction.down, "12x kubejs:bearing");
            scene.world.createItemOnBeltLike([4, 1, 8], Direction.down, "31x kubejs:sulphur");
            scene.world.createItemOnBeltLike([4, 1, 9], Direction.down, "64x kubejs:salt");
          }
          if (i1 == 102) {
            scene.world.removeEntity(Airdrop1)
            scene.effects.indicateRedstone([10.5, 2.25, 3.5])
          }
          if (i1 == 105) {
            scene.world.createItemOnBeltLike([9, 1, 2], Direction.down, "3x kubejs:circuit_board");
          }
          if (i1 == 122) {
            scene.world.removeEntity(Airdrop2)
            scene.effects.indicateRedstone([8.5, 2.25, 12.5])
          }
          if (i1 == 125) {
            scene.world.createItemOnBeltLike([8, 1, 11], Direction.down, "3x kubejs:lamb_kebarb");
            scene.world.createItemOnBeltLike([7, 1, 11], Direction.down, "31x ad_astra:cheese");
            scene.world.createItemOnBeltLike([9, 1, 12], Direction.down, "12x kubejs:large_fries");
            scene.world.createItemOnBeltLike([9, 1, 13], Direction.down, "61x kubejs:slime_cola_can");
          }
          scene.idle(1);
        }

      }
    )
});