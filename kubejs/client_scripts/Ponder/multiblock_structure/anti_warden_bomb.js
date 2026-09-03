Ponder.registry((event) => {
  event
    .create(["kubejs:anti_warden_bomb","minecraft:sculk_shrieker"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_anti_warden_bomb",
      "使用反监守者音爆弹",
      "kubejs:anti_warden_bomb",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.world.showSection([4,1,4],Direction.down)
        scene.setSceneOffsetY(-1)
        scene.idle(20);

        scene.addKeyframe();
        scene.text(70, "反监守者音爆弹用于快速清理远古城市中的危险因素！");
        scene.idle(15);
        scene.world.setBlock([6,1,3],"minecraft:sculk_shrieker",false)
        scene.world.showSection([6,1,3],Direction.down)
        scene.overlay.showOutline("green", {}, [6, 1, 3], 60);
        scene.text(55, "幽匿尖啸体和恼人的黑暗效果",[6, 1, 3]);
        scene.idle(15);
        const Warden = scene.world.createEntity("warden", [4.5, 1.5, 6.5])
        scene.overlay.showOutline("green", {}, [4.5, 1, 6.5,5.5,2.5,7.5], 60);
        scene.text(40, "监守者",[4.5, 2, 6.5]);
        scene.world.setBlock([5,1,1],"minecraft:sculk_shrieker",false)
        scene.world.showSection([5,1,1],Direction.down)
        scene.idle(15);
        scene.world.setBlock([3,1,3],"minecraft:sculk_shrieker",false)
        scene.world.showSection([3,1,3],Direction.down)
        scene.idle(35);

        scene.addKeyframe();
        scene.text(40, "你只需要在它上方放置含有4B水的容器...");
        scene.world.showSection([4,2,4],Direction.down)
        scene.world.setBlock([4,2,4],"createandesiteabound:fluid_vessel",false)
        scene.overlay.showOutline("green", {}, [4, 2, 4], 40);
        scene.showControls(15, [4, 3, 4], "down").withItem("minecraft:water_bucket")
        scene.idle(60);
        scene.addKeyframe();
        scene.text(60, "音爆弹就将清理以它为中心47*13*47范围内的所有尖啸体...");
        scene.idle(15);
        scene.world.setBlock([6,1,3],"minecraft:air",true)
        scene.idle(15);
        scene.world.setBlock([5,1,1],"minecraft:air",true)
        scene.idle(15);
        scene.world.setBlock([3,1,3],"minecraft:air",true)
        scene.idle(15);
        scene.idle(20);
        scene.addKeyframe();
        scene.text(40, "...半径64格内的监守者...");
        scene.idle(10);
        scene.overlay.showOutline("red", {}, [4.5, 1, 6.5,5.5,2.5,7.5], 30);
        scene.world.removeEntity(Warden)
        scene.idle(60);
        scene.addKeyframe();
        scene.text(40, "...以及半径64格内玩家身上的黑暗效果！");
        scene.idle(60);
      }
    )
});