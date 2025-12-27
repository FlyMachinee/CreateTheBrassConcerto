Ponder.registry((event) => {
  event
    .create(["createdieselgenerators:distillation_controller", "createdieselgenerators:crude_oil_bucket", "kubejs:refined_oil_bucket"])
    .tag("kubejs:create_basic_automatic")
    .scene(
      "kubejs:distillation_tower",
      "分馏塔的多种输出",
      "kubejs:distillation_tower",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.scaleSceneView(0.6);
        for (let i = 1; i < 9; i++) {
          scene.idle(3);
          scene.world.showSection([0, i, 0, 8, i, 8], Direction.down);
        }
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "你也许正为分馏塔输出的复杂接线而苦恼，那么这个思索将帮你解决这个问题！");
        scene.idle(80);
        scene.text(60, "以原油分馏为例，实际上你可以将所有输入输出线并排放置");
        scene.idle(80);
        scene.text(60, "要做到这一点，你只需要按次序修建每条管道...").attachKeyFrame();
        scene.overlay.showOutline("red", { "glue": true }, [2, 3, 4, 2, 3, 8], 50);
        scene.idle(80);
        scene.text(60, "...然后为它们全部套上机壳！",[2,3,6]);
        scene.overlay.showOutline("green", { "glue": true }, [2, 3, 4, 2, 3, 8], 60);
        
        scene.world.hideSection([2, 4, 4, 2, 8, 4], Direction.down);
        scene.world.hideSection([2, 4, 6, 2, 8, 8], Direction.down);
        let i = 0; let i1 = 0;
        function setEncasedPipe(a, b, c, d, e) {
          for (a = 4; a < 9; a++) {
            if (a != 5) {
              if (e == 1) { scene.showControls(15, [2, b + 1, a], "down").rightClick().withItem("create:copper_casing") };
              scene.idle(c);
              if (a == 4) {
                scene.world.setBlock([2, b, a], "create:encased_fluid_pipe", true);
                scene.world.modifyBlock([2, b, a], state => state.with("east", "true"), false)
                scene.world.modifyBlock([2, b, a], state => state.with("south", "true"), false)
              };
              if (a > 5) {
                scene.world.setBlock([2, b, a], "create:encased_fluid_pipe", true);
                scene.world.modifyBlock([2, b, a], state => state.with("north", "true"), false)
                scene.world.modifyBlock([2, b, a], state => state.with("south", "true"), false)
              };
              scene.idle(d);
            }
          }
        };
        function setPipe(a, b, c) {
          for (a = 4; a < 9; a++) {
            if (a != 5) {
              if (a == 4) {
                scene.world.setBlock([2, b, a], "create:fluid_pipe", true);
                scene.world.modifyBlock([2, b, a], state => state.with("west", "false"), false);
                scene.world.modifyBlock([2, b, a], state => state.with("north", "false"), false);
                scene.world.modifyBlock([2, b, a], state => state.with("up", "false"), false);
                scene.world.modifyBlock([2, b, a], state => state.with("down", "false"), false);
                scene.world.showSection([2,b,a], Direction.down);
              };
              if (a > 5) {
                scene.world.setBlock([2, b, a], "create:fluid_pipe", true);
                scene.world.modifyBlock([2, b, a], state => state.with("west", "false"), false);
                scene.world.modifyBlock([2, b, a], state => state.with("east", "false"), false);
                scene.world.modifyBlock([2, b, a], state => state.with("up", "false"), false);
                scene.world.modifyBlock([2, b, a], state => state.with("down", "false"), false);
                scene.world.showSection([2,b,a], Direction.down);
              };
              scene.idle(c);
            }
          }
        };
        setEncasedPipe(i, 3, 10, 20,1);
        scene.addKeyframe();
        scene.text(60, "然后就可以继续修建下一条管道！");
        for (i1 = 4; i1 < 8; i1++) {
          setPipe(i, i1, 5)
          scene.idle(10);
          setEncasedPipe(i, i1, 0, 5,0);
        }
        scene.rotateCameraY(-90);
        scene.idle(40);
        scene.text(60, "...现在，你就可以用最小的空间输出最多种类的液体了！",[2,6,8]).attachKeyFrame();
        scene.idle(80);
        scene.rotateCameraY(90);
        scene.idle(40);

        //setblock 651 59 -114 create:fluid_pipe[down=false,east=true,north=false,south=true,up=false,waterlogged=false,west=false]
        //setblock 651 58 -114 create:encased_fluid_pipe[down=false,east=true,north=false,south=true,up=false,west=false]
        //setblock 651 58 -110 create:encased_fluid_pipe[down=false,east=false,north=true,south=true,up=false,west=false]
      }
    );
});