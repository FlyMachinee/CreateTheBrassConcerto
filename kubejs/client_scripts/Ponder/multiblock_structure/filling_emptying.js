Ponder.registry((event) => {
  event
    .create(["kubejs:filling_machine", "kubejs:emptying_machine"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:filling_emptying",
      "进行高速装卸罐",
      "kubejs:filling_emptying",
      (scene, utils) => {
        scene.scaleSceneView(0.8);
        scene.setSceneOffsetY(-1)
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.world.showIndependentSectionImmediately([6, 2, 4])
        scene.world.showIndependentSectionImmediately([2, 2, 4])
        //scene.world.showSection([0, 1, 0,9,6,9], Direction.down)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "你可以使用高速装罐机和高速卸罐机来快速转运流体！");
        scene.idle(10);
        scene.text(20, "高速装罐机", [6, 2, 4]);
        scene.idle(10);
        scene.text(20, "高速卸罐机", [2, 2, 4]);
        scene.idle(60);

        scene.addKeyframe();
        scene.text(60, "高速装罐机会从上方的容器中自动提取液体，并填装至机器库存内的容器（比如空桶和密封液罐）");
        scene.world.showSection([6, 3, 4], Direction.down)
        scene.idle(30);
        scene.overlay.showOutline("green", { "glue": true }, [6, 3, 4], 30);
        scene.showControls(20, [6, 3.5, 4], "down").withItem('kubejs:muriatic_acid_bucket')
        scene.idle(30);
        scene.world.modifyTileNBT([6, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 0, FluidName: "minecraft:empty"} 
        }, true)
        scene.idle(30);
        
        scene.addKeyframe();
        scene.text(60, "而高速卸罐机则会卸出机器库存内容器里的液体（比如桶装流体和密封液罐），并将液体自动排出至下方的容器");
        scene.world.showSection([2, 1, 4], Direction.up)
        scene.idle(30);
        scene.overlay.showOutline("green", { "glue": true }, [2, 1, 4], 30);
        scene.showControls(20, [2, 2.5, 4], "down").withItem('kubejs:muriatic_acid_bucket')
        scene.idle(30);
        scene.world.modifyTileNBT([2, 1, 4], (nbt) => {
          nbt.TankContent = { Amount: 8000, FluidName: "kubejs:muriatic_acid"} 
        }, true)
        scene.idle(30);

        scene.addKeyframe();
        scene.text(60, "你可以使用高速装卸罐机与移动式接口交互，从而快速对列车进行装卸操作！");
        scene.overlay.showOutline("green", { "glue": true }, [6, 3, 4], 30);
        scene.overlay.showOutline("green", { "glue": true }, [2, 1, 4], 30);
        scene.world.setBlock([6, 3, 4],"create:portable_fluid_interface",true)
        scene.world.setBlock([2, 1, 4],"create:portable_fluid_interface",true)
        scene.idle(80);

        scene.addKeyframe();
        scene.text(60, "两种机器都能直接从后方的容器中自动提取物品！");
        scene.world.showSection([2, 2, 5, 6, 2, 5], Direction.down)
        scene.idle(30);
        scene.showControls(20, [6.5, 2.5, 5.5], "down").withItem('minecraft:bucket')
        scene.showControls(20, [2.5, 2.5, 5.5], "down").withItem('createandesiteabound:fluid_vessel')
        scene.idle(50);

        scene.addKeyframe();
        scene.text(60, "而其它的面则可以用来输出物品");
        scene.world.showSection([3, 2, 4], Direction.west)
        scene.world.showSection([1, 2, 4], Direction.east)
        scene.world.showSection([2, 2, 3], Direction.north)
        scene.world.showSection([2, 3, 4], Direction.down)
        scene.world.showSection([7, 2, 4], Direction.west)
        scene.world.showSection([5, 2, 4], Direction.east)
        scene.world.showSection([6, 2, 3], Direction.south)
        scene.world.showSection([6, 1, 4], Direction.up)
        scene.idle(40);
        scene.world.hideSection([3, 2, 4], Direction.west)
        scene.world.hideSection([1, 2, 4], Direction.east)
        scene.world.hideSection([2, 3, 4], Direction.down)
        scene.world.hideSection([7, 2, 4], Direction.west)
        scene.world.hideSection([5, 2, 4], Direction.east)
        scene.world.hideSection([6, 1, 4], Direction.up)
        scene.idle(30);

        
        scene.world.flapFunnel([2,2,3], false);
        scene.world.createItemEntity([2.5,2,3.5], Direction.north, "minecraft:bucket");
        scene.world.flapFunnel([6,2,3], false);
        scene.world.createItemEntity([6.5,2,3.5], Direction.north, "createandesiteabound:fluid_vessel");
        scene.idle(30);
      }
    );
});