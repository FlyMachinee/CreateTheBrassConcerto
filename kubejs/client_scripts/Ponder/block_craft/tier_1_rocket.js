Ponder.registry((event) => {
    event
      .create(["ad_astra:tier_1_rocket","ad_astra:steel_engine","ad_astra:steel_tank"])
      .tag("kubejs:block_crafting")
      .scene(
        "kubejs:tier_1_rocket_from_block",
        "在世界中制造基础火箭", 
        "kubejs:tier_1_rocket",
        (scene, utils) => {
          scene.scaleSceneView(0.6);
          scene.configureBasePlate(0, 0, 9);
          scene.showStructure(0);
          for(let i =1;i<10;i++){
            scene.idle(8);
            scene.world.showSection([0,i,0,8,i,8], Direction.down);
          }
          scene.idle(20);
          scene.text(60, "基础的火箭需要在世界中制造");
          scene.idle(60);
          scene.world.hideSection([0,1,0,8,10,8], Direction.up);
          scene.idle(20);
          scene.text(360, "建造如下结构...");
          scene.idle(20);
          scene.addKeyframe();
          scene.text(40, "第一层：鼓风机",[4,1,4]);
          scene.world.showSection([3,1,3,5,1,5], Direction.down);
          scene.overlay.showOutline("red", {}, [3,1,3,5,1,5], 30);
          scene.idle(20);

          scene.idle(40);
          scene.addKeyframe();
          scene.text(40, "第二层：电动马达、工业铁块锅炉",[4,2,4]);
          scene.world.showSection([3,2,3,5,2,5], Direction.down);
          scene.overlay.showOutline("red", {}, [3,2,3,5,2,5], 30);
          scene.idle(20);

          scene.idle(40);
          scene.addKeyframe();
          scene.text(40, "第三层：交流发电机、工业铁块锅炉",[4,3,4]);
          scene.world.showSection([3,3,3,5,3,5], Direction.down);
          scene.overlay.showOutline("red", {}, [3,3,3,5,3,5], 30);
          scene.idle(20);

          scene.idle(40);
          scene.addKeyframe();
          scene.text(40, "第四层：金属梁、工业铁块锅炉",[4,4,4]);
          scene.world.showSection([3,4,3,5,4,5], Direction.down);
          scene.overlay.showOutline("red", {}, [3,4,3,5,4,5], 30);
          scene.idle(20);

          scene.idle(40);
          scene.addKeyframe();
          scene.text(40, "第五层：金属梁、工业铁块锅炉",[4,5,4]);
          scene.world.showSection([3,5,3,5,5,5], Direction.down);
          scene.overlay.showOutline("red", {}, [3,5,3,5,5,5], 30);
          scene.idle(20);

          scene.idle(40);
          scene.addKeyframe();
          scene.text(40, "第六层：斜向金属梁、工业铁块",[4,6,4]);
          scene.world.showSection([3,6,3,5,6,5], Direction.down);
          scene.overlay.showOutline("red", {}, [3,6,3,5,6,5], 30);
          scene.idle(20);
          
          scene.idle(40);
          scene.addKeyframe();
          scene.text(40, "第七层：密封压缩机",[4,7,4]);
          scene.world.showSection([3,7,3,5,7,5], Direction.down);
          scene.overlay.showOutline("red", {}, [3,7,3,5,7,5], 30);
          scene.idle(20);
          
          scene.idle(40);
          scene.addKeyframe();
          scene.text(40, "第八层：金属梁",[4,8,4]);
          scene.world.showSection([3,8,3,5,8,5], Direction.down);
          scene.overlay.showOutline("red", {}, [3,8,3,5,8,5], 30);
          scene.idle(20);

          scene.idle(35);
          scene.rotateCameraY(180);
          scene.idle(80);
          scene.rotateCameraY(180);
          scene.idle(80);

          scene.addKeyframe();
          scene.text(60, "...然后使用扳手右键密封压缩机");
          scene.idle(40);
          scene.overlay.showOutline("green", {}, [3,1,3,5,8,5], 60);
          scene.showControls(60, [4, 7.5, 4], "down")
            .rightClick()
            .withItem("create:wrench");
          scene.idle(80);
          scene.text(60, "机械手也可以为你代劳");
          scene.overlay.showOutline("green", {}, [3,1,3,5,8,5], 30);
          scene.idle(80);
          scene.addKeyframe();
          scene.world.setBlocks([1,1,1,8,8,8], "minecraft:air", true);
          scene.world.createItemEntity([4,7.5,4],Direction.down,"ad_astra:tier_1_rocket")
          scene.text(60, "...如此便得到了基础火箭"); 
          scene.idle(80);
        }
      );
  });