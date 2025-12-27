Ponder.registry((event) => {
    event
      .create("create:crushing_wheel") 
      .tag("kubejs:block_crafting")
      .scene(
        "kubejs:crushing_wheel_from_block",
        "在世界中制造粉碎轮", 
        (scene, utils) => {
          scene.configureBasePlate(0, 0, 5);
          scene.showStructure(0);
          scene.world.setBlocks([1,1,1,3,1,3], "create:andesite_alloy_block", false);
          scene.world.setBlocks([1,1,2,3,1,2], "create:linear_chassis", false);
          scene.world.setBlocks([2,1,1,2,1,3], "create:linear_chassis", false);
          scene.world.setBlocks([2,1,2], "minecraft:stone", false);
          const blocklist=[
            [1,1,1],[2,1,1],[3,1,1],
            [1,1,2],[2,1,2],[3,1,2],
            [1,1,3],[2,1,3],[3,1,3]
          ]
          for(let i of blocklist){
            scene.idle(5);
            scene.world.showSection(i, Direction.down);
          }
          scene.idle(20);
          scene.text(60, "粉碎轮可以在世界中制造");
          scene.idle(80);
          scene.text(60, "建造如下结构，然后使用扳手右键中心",[2,1,2]);
          scene.overlay.showOutline("red", {}, [1,1,1,3,1,3], 30);
          scene.idle(40);
          scene.addKeyframe();
          scene.showControls(60, [3, 1.5, 3], "down")
            .rightClick()
            .withItem("create:wrench");
          scene.idle(80);
          scene.text(60, "机械手也可以为你代劳",[2,1,2]);
          scene.overlay.showOutline("red", {}, [1,1,1,3,1,3], 30);
          scene.idle(80);
          scene.addKeyframe();
          scene.world.setBlocks([1,1,1,3,1,3], "minecraft:air", true);
          scene.world.createItemEntity([2.4,1.5,3.21],Direction.down,"create:crushing_wheel")
          scene.world.createItemEntity([3.12,1.5,3.2],Direction.down,"create:crushing_wheel")
          scene.world.createItemEntity([2.56,1.5,2.7],Direction.down,"create:crushing_wheel")
          scene.world.createItemEntity([3.11,1.5,2.04],Direction.down,"create:crushing_wheel")
          scene.text(60, "...如此便得到了 4 个粉碎轮",[3,1,3]); 
          scene.idle(80);
        }
      );
  });