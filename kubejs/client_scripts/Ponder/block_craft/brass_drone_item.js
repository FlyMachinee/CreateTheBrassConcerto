Ponder.registry((event) => {
    event
      .create("create_sa:brass_drone_item")
      .tag("kubejs:block_crafting")
      .scene(
        "kubejs:brass_drone_item_from_block",
        "在世界中制造黄铜无人机", 
        "kubejs:brass_drone_item",
        (scene, utils) => {
          scene.configureBasePlate(0, 0, 5);
          scene.showStructure(0);
          const blocklist=[
            [1,2,1],[3,2,1],[1,3,1],[3,3,1],
            [1,2,2],[2,2,2],[3,2,2],
            [1,2,3],[2,2,3],[3,2,3],[1,3,3],[2,3,3],[3,3,3]
          ]
          for(let i of blocklist){
            scene.idle(5);
            scene.world.showSection(i, Direction.down);
          }
          scene.idle(20);
          scene.text(60, "黄铜无人机可以在世界中制造");
          scene.idle(80);
          scene.text(60, "建造如下结构，然后使用扳手右键智能侦测器",[2,2,2]);
          scene.overlay.showOutline("red", {}, [1,2,1,3,3,3], 30);
          scene.idle(40);
          scene.addKeyframe();
          scene.showControls(60, [3, 2.5, 3], "down")
            .rightClick()
            .withItem("create:wrench");
          scene.idle(80);
          scene.text(60, "机械手也可以为你代劳",[2,2,2]);
          scene.overlay.showOutline("red", {}, [1,2,1,3,3,3], 30);
          scene.idle(80);
          scene.addKeyframe();
          scene.world.setBlocks([1,2,1,3,3,3], "minecraft:air", true);
          scene.world.createItemEntity([3,2.5,3],Direction.down,"create_sa:brass_drone_item")
          scene.text(60, "...如此便得到了黄铜无人机",[3,2,3]); 
          scene.idle(80);
        }
      );
  });