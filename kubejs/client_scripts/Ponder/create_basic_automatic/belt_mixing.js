Ponder.registry((event) => {
  event
    .create(["create:belt", "create:brass_tunnel", "create:content_observer", "kubejs:culture_bin","kubejs:assembling_machine","kubejs:construction_station"])
    .tag("kubejs:create_basic_automatic")
    .scene(
      "kubejs:belt_mixing",
      "控制输入顺序的混带",
      "kubejs:belt_mixing",
      (scene, utils) => {
        function Stop() {
          scene.world.modifyBlock([1, 1, 5], state => state.with("powered", "true"), false)
          scene.world.modifyBlock([1, 1, 6], state => state.with("lit", "false"), false)
          scene.idle(2);
          scene.world.modifyBlock([2, 2, 6], state => state.with("lit", "true"), false)
          scene.world.modifyBlock([3, 2, 6], state => state.with("power", 15), false)
          scene.world.modifyBlock([3, 1, 6], state => state.with("powered", "true"), false)
          scene.world.modifyTileNBT([3, 1, 3, 7, 1, 5], (nbt) => {
            nbt.Speed = 0.0
          })
        }
        function Go() {
          scene.world.modifyBlock([1, 1, 5], state => state.with("powered", "false"), false)
          scene.world.modifyBlock([1, 1, 6], state => state.with("lit", "true"), false)
          scene.idle(2);
          scene.world.modifyBlock([2, 2, 6], state => state.with("lit", "false"), false)
          scene.world.modifyBlock([3, 2, 6], state => state.with("power", 0), false)
          scene.world.modifyBlock([3, 1, 6], state => state.with("powered", "false"), false)
          scene.world.modifyTileNBT([3, 1, 3, 7, 1, 5], (nbt) => {
            nbt.Speed = 64.0
          })
        }
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(3);
        scene.addKeyframe();
        scene.idle(12);
        Go()
        scene.text(60, "一部分机器的自动化需要用到混带，而还有一部分需要控制顺序的混带！");
        scene.idle(20);
        Stop()
        scene.idle(12);
        Go()
        scene.idle(10);
        Stop()
        scene.idle(12);
        Go()
        scene.idle(10);
        Stop()
        scene.idle(12);
        Go()
        scene.idle(4);
        scene.text(60, "为了控制物品顺序，你可以使用如下的方式：");
        scene.idle(80);
        scene.text(60, "使用黄铜漏斗来按照控制输入数量", [6, 2, 4]).attachKeyFrame();
        scene.overlay.showOutline("green", { "glue": true }, [6, 2, 3, 6, 2, 5], 80);
        scene.idle(80);
        scene.text(60, "使用黄铜隧道的同步输入模式（对应设置过滤）来保证所有物品均有输入", [4, 2, 4]).attachKeyFrame();
        scene.overlay.showOutline("green", { "glue": true }, [4, 1, 3, 4, 2, 5], 80);
        scene.idle(5);
        scene.overlay.showFilterSlotInput([4, 2.8, 3.5], Direction.west, 20)
        scene.idle(5);
        scene.overlay.showFilterSlotInput([4, 2.8, 4.5], Direction.west, 20)
        scene.idle(5);
        scene.overlay.showFilterSlotInput([4, 2.8, 5.5], Direction.west, 20)
        scene.idle(45);
        scene.rotateCameraY(-90);
        scene.idle(20);
        scene.text(60, "使用智能侦测器检测传送带上的物品...", [1.5, 1.5, 5.5]).attachKeyFrame();
        scene.overlay.showOutline("green", { "glue": true }, [1, 1, 5], 80);
        scene.idle(80);
        scene.text(60, "...并使用离合器来控制输入！", [3.5, 1.5, 6.5]).attachKeyFrame();
        scene.overlay.showOutline("green", { "glue": true }, [3, 1, 6], 80);
        scene.idle(80);
        scene.text(60, "你不应该拘泥于图中演示的方式，而是应当积极探索其它的方案！").attachKeyFrame();
        scene.world.hideSection([0,1,0,8,3,8],Direction.down)
        scene.idle(20);
        let link=scene.world.showIndependentSectionImmediately([0,4,0,8,8,8])
        scene.world.moveSection(link,[0,-3,0],20)
        scene.idle(20);
        scene.addKeyframe()
        scene.idle(40);
        scene.rotateCameraY(180)
        scene.idle(60);
      }
    );
});