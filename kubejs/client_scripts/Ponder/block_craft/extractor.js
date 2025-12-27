Ponder.registry((event) => {
    event
      .create("createoreexcavation:extractor") 
      .tag("kubejs:block_crafting")
      .scene(
        "kubejs:extractor_from_block",
        "在世界中制造流体钻井", 
        "kubejs:extractor",
        (scene, utils) => {
          const blocklist1=[
            [1,1,1],[2,1,1],[3,1,1],
            [1,1,2],[2,1,2],[3,1,2],
            [1,1,3],[2,1,3],[3,1,3]
          ]
          const blocklist2=[
            [1,2,1],[2,2,1],[3,2,1],
            [1,2,2],[2,2,2],[3,2,2],
            [1,2,3],[2,2,3],[3,2,3]
          ]
          scene.configureBasePlate(0, 0, 5);
          scene.showStructure(0);
          scene.idle(20);
          scene.text(60, "流体钻井需要在世界中制造");
          scene.idle(80);
          scene.text(60, "建造如下结构...");
          scene.addKeyframe();
          scene.text(160, "第一层：列车机壳、软管滑轮、可编程齿轮箱、流体管道、动力泵、转速控制器",[2,1,2]);
          for(let i1 of blocklist1){
            scene.world.showSection(i1, Direction.down);
            scene.idle(5);
          }
          scene.overlay.showOutline("red", {}, [1,1,1,3,1,3], 30);
          scene.idle(35);
          scene.rotateCameraY(180);
          scene.idle(80);
          scene.rotateCameraY(180);
          scene.idle(80);

          scene.addKeyframe();
          scene.text(160, "第二层：流体管道、动力臂、分液池、智能流体管道、大型柴油引擎",[2,2,2]);
          for(let i2 of blocklist2){
            scene.world.showSection(i2, Direction.down);
            scene.idle(5);
          }
          scene.overlay.showOutline("red", {}, [1,2,1,3,2,3], 30);
          scene.idle(35);
          scene.rotateCameraY(180);
          scene.idle(80);
          scene.rotateCameraY(180);
          scene.idle(80);

          scene.addKeyframe();
          scene.text(60, "...然后使用扳手右键动力臂");
          scene.idle(40);
          scene.overlay.showOutline("red", {}, [1,1,1,3,2,3], 60);
          scene.showControls(60, [3, 2.5, 3], "down")
            .rightClick()
            .withItem("create:wrench");
          scene.idle(80);
          scene.text(60, "机械手也可以为你代劳");
          scene.overlay.showOutline("red", {}, [1,1,1,3,2,3], 30);
          scene.idle(80);
          scene.addKeyframe();
          scene.world.setBlocks([1,1,1,3,2,3], "minecraft:air", true);
          scene.world.createItemEntity([3,2.5,3],Direction.down,"createoreexcavation:extractor")
          scene.text(60, "...如此便得到了流体钻井"); 
          scene.idle(80);
        }
      );
  });