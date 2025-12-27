Ponder.registry((event) => {
    event
      .create(["design_decor:brass_boiler_large","design_decor:zinc_boiler_large","design_decor:industrial_iron_boiler_large","design_decor:gold_boiler_large","design_decor:copper_boiler_large","design_decor:cast_iron_boiler_large","design_decor:andesite_boiler_large"]) 
      .tag("kubejs:block_crafting")
      .scene(
        "kubejs:large_boiler_from_block",
        "在世界中制造大型锅炉", 
        (scene, utils) => {
          scene.configureBasePlate(0, 0, 5);
          scene.showStructure(0);
          scene.world.setBlocks([1,1,1,3,1,3], "create:brass_block", false);
          scene.world.setBlocks([2,1,2], "create:fluid_tank", false);
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
          scene.text(60, "部分大型锅炉需要在世界中制造");
          scene.idle(80);
          scene.text(60, "建造如下结构（周围8格是对应材质的物块），然后使用扳手右键流体储罐",[2,1,2]);
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
          scene.world.createItemEntity([2.4,1.5,3.21],Direction.down,"design_decor:brass_boiler_large")
          scene.text(60, "...如此便得到了对应的大型锅炉",[3,1,3]); 
          scene.idle(80);
        }
      );
  });