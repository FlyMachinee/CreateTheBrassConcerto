Ponder.registry((event) => {
    event
      .create("create:deployer")
      .tag("kubejs:block_crafting")
      .scene(
        "kubejs:deployer_from_block",
        "在世界中制造机械手", 
        "kubejs:deployer",
        (scene, utils) => {
          scene.configureBasePlate(0, 0, 5);
          scene.showStructure(0);
          const blocklist=[
            [2,1,1],
            [2,1,2],
            [2,1,3]
          ]
          for(let i of blocklist){
            scene.idle(5);
            scene.world.showSection(i, Direction.down);
          }
          scene.idle(20);
          scene.text(60, "有时你也许会遇到没有机械手可用的尴尬境地");
          scene.idle(80);
          scene.text(60, "建造如下结构，然后使用黄铜镐右键铁块",[2,1.5,1]);
          scene.overlay.showOutline("red", {}, [2,1,1,2,1,3], 30);
          scene.idle(80);
          scene.addKeyframe();
          scene.text(60, "...当然，你也可以竖直建造",[2,1.5,1]);
          scene.idle(80);
          scene.addKeyframe();
          scene.showControls(60, [2, 1.5, 1], "down")
            .rightClick()
            .withItem("minecraft:iron_pickaxe");
          scene.idle(80);
          scene.addKeyframe();
          scene.world.setBlocks([2,1,1,2,1,3], "minecraft:air", true);
          scene.world.createItemEntity([3,1.5,3],Direction.down,"create:deployer");
          scene.text(60, "...如此便得到了机械手",[3,1.5,3]); 
          scene.idle(80);
        }
      );
  });