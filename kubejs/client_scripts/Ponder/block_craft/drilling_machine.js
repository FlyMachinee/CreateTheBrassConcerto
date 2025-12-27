Ponder.registry((event) => {
    event
      .create("createoreexcavation:drilling_machine") 
      .tag("kubejs:block_crafting")
      .scene(
        "kubejs:drilling_machine_from_block",
        "在世界中制造矿物钻井", 
        "kubejs:drilling_machine",
        (scene, utils) => {
          const blocklist1=[
            [1,1,1],[2,1,1],[3,1,1],
            [1,1,2],[2,1,2],[3,1,2],
            [1,1,3],[2,1,3],[3,1,3]
          ]
          const blocklist2=[
            [1,2,1],[2,2,1],[3,2,1],
            [2,2,2],
            [1,2,3],[2,2,3],[3,2,3]
          ]
          scene.configureBasePlate(0, 0, 5);
          scene.showStructure(0);
          scene.idle(20);
          scene.text(60, "矿物钻井需要在世界中制造");
          scene.idle(80);
          scene.text(60, "建造如下结构...");
          scene.addKeyframe();
          scene.text(160, "第一层：列车机壳、动力钻、可编程齿轮箱、动力泵、转速控制器、升降机",[2,1,2]);
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
          scene.text(160, "第二层：黄铜漏斗、动力臂、保险库、大型柴油引擎",[2,2,2]);
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
          scene.world.createItemEntity([3,2.5,3],Direction.down,"createoreexcavation:drilling_machine")
          scene.text(60, "...如此便得到了矿物钻井"); 
          scene.idle(80);
        }
      );
  });