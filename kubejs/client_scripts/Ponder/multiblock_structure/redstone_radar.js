Ponder.registry((event) => {
  event
    .create(["kubejs:redstone_radar"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:build_redstone_radar",
      "跨维度红石传输",
      "kubejs:redstone_radar",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(12);
        scene.setSceneOffsetY(1)
        scene.idle(20);
        scene.text(60, "为了更好的控制星际物流系统，你需要幽匿发信器来进行跨维度红石传输").attachKeyFrame();
        scene.overlay.showOutline("green", {}, [1, 1, 2], 30);
        scene.idle(10);
        scene.overlay.showOutline("green", {}, [1, 1, 6], 30);
        scene.idle(70);
        scene.text(80, "首先，你需要使用坐标数据芯片绑定对应维度的指定坐标，并用其为幽匿发信器设置过滤").attachKeyFrame();
        scene.idle(20);
        scene.overlay.showOutline("blue", {}, [7, 1, 2], 30);
        scene.showControls(15, [7, 1, 2], "up").withItem("kubejs:position_data")
        scene.idle(10);
        scene.overlay.showOutline("green", {}, [1, 1, 2], 30);
        scene.showControls(15, [1.5, 1.5, 2.5], "down").withItem("kubejs:position_data")
        scene.idle(5);
        scene.overlay.showOutline("blue", {}, [7, 1, 6], 30);
        scene.showControls(15, [7, 1, 6], "up").withItem("kubejs:position_data")
        scene.idle(10);
        scene.overlay.showOutline("green", {}, [1, 1, 6], 30);
        scene.showControls(15, [1.5, 1.5, 6.5], "down").withItem("kubejs:position_data")
        scene.idle(55);
        scene.text(60, "接着，只需要通入红石信号（必须是强充能！）...").attachKeyFrame();
        scene.idle(10);
        scene.world.setBlock([1,1,0],"redstone_torch",false)
        scene.idle(5);
        scene.world.modifyBlock([1, 1, 1], state => state.with("powered", "true"), false)
        scene.overlay.showOutline("red", {}, [1, 1, 2], 30);
        scene.idle(20);
        scene.world.setBlock([1,1,4],"redstone_torch",false)
        scene.idle(5);
        scene.world.modifyBlock([1, 1, 5], state => state.with("powered", "true"), false)
        scene.overlay.showOutline("red", {}, [1, 1, 6], 30);
        scene.idle(30);
        scene.text(60, "...绑定位置的红石灯（如果有的话）的状态就将被强制切换！").attachKeyFrame();
        scene.idle(20);
        scene.overlay.showOutline("red", {}, [7, 1, 2], 30);
        scene.world.modifyBlock([7, 1, 2], state => state.with("lit", "true"), false)
        scene.idle(20);
        scene.overlay.showOutline("red", {}, [7, 1, 6], 30);
        scene.world.modifyBlock([7, 1, 6], state => state.with("lit", "false"), false)
        scene.idle(40);
        scene.text(60, "你可以使用侦测器来检测这种状态切换，从而传递红石信号！").attachKeyFrame();
        scene.idle(80);
        scene.text(60, "需要注意的是，这种强制切换并不稳定，红石灯可能因干扰而回归正常状态！").attachKeyFrame();
        scene.idle(20);
        scene.world.setBlock([7,1,1],"stone",true)
        scene.idle(5);
        scene.world.modifyBlock([7, 1, 2], state => state.with("lit", "false"), false)
        scene.overlay.showOutline("red", {}, [7, 1, 2], 30);
        scene.idle(20);
        scene.world.setBlock([7,1,5],"stone",true)
        scene.idle(5);
        scene.world.modifyBlock([7, 1, 6], state => state.with("lit", "true"), false)
        scene.overlay.showOutline("red", {}, [7, 1, 6], 30);
        scene.idle(50);

      }
    )
});