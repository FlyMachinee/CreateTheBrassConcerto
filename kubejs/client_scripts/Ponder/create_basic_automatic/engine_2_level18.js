Ponder.registry((event) => {
  event
    .create(["create:steam_engine", "create:blaze_cake", "createaddition:bioethanol_bucket", "createdieselgenerators:biodiesel_bucket", "kubejs:ammonia_bucket"])
    .tag("kubejs:create_basic_automatic")
    .scene(
      "kubejs:engine_2_level18",
      "十八级蒸汽锅炉",
      "kubejs:level18_engine",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.scaleSceneView(0.5);
        scene.text(100, "十八级锅炉是最高级的蒸汽锅炉\n一台十八级锅炉相当于两台九级锅炉");
        let i3=0;let i2=0;let i1=0;
        for (i3 = 1; i3 < 3; i3++) {
          for (i2 = 3; i2 < 9; i2++) {
            for (i1 = 0; i1 < 6; i1++) {
              scene.world.showSection([i1, i3, i2], Direction.down);
              scene.idle(1);
            }
          }
        };
        scene.world.showSection([3, 3, 3, 5, 10, 5], Direction.down);
        scene.idle(1);
        for (i3 = 3; i3 < 5; i3++) {
          for (i2 = 6; i2 < 9; i2++) {
            for (i1 = 2; i1 < 7; i1++) {
                scene.world.showSection([i1, i3, i2], Direction.down);
                scene.idle(1);
            }
          }
        };
        for (i3 = 3; i3 < 9; i3++) {
          for (i2 = 3; i2 < 6; i2++) {
            scene.world.showSection([2, i3, i2], Direction.down);
            scene.idle(1); 
            scene.world.showSection([0, i3, i2], Direction.down);
            scene.idle(1);
          }
        };
        scene.idle(20);
        scene.text(400, "想要建造一台十八级锅炉，你需要：").attachKeyFrame();
        scene.idle(80);
        scene.text(320, "九个超级燃烧中的烈焰人燃烧室",[3,2,3]).attachKeyFrame();
        scene.overlay.showOutline("red", {"glue":true}, [3,2,3,5,2,5], 50);
        scene.idle(80);
        scene.text(240, "一个3x3x8大小的流体储罐",[3,4,3]).attachKeyFrame();
        scene.overlay.showOutline("green", {"glue":true}, [3,3,3,5,10,5], 50);
        scene.idle(80);
        scene.text(160, "十八个接好传动杆的蒸汽引擎(可以接在锅炉上的任何地方！)",[2,8,4]).attachKeyFrame();
        scene.overlay.showOutline("red", {"glue":true}, [2,3,3,2,8,5], 50);
        scene.idle(40);
        scene.rotateCameraY(-120);
        scene.idle(40);
        scene.text(80, "...并输入非常多的水！(只需要两个满转速动力泵，此处只是美观考虑)",[4,2,7]).attachKeyFrame();
        scene.overlay.showOutline("blue", {"glue":true}, [2,2,6,6,4,8], 50);
        scene.idle(120);
        scene.text(80, "至于燃料的输入，则和上一节完全一致",[2,3,6]).attachKeyFrame();
        scene.overlay.showOutline("red", {"glue":true}, [2,1,4,2,1,8], 50);
        scene.idle(120);
        scene.rotateCameraY(120);
        scene.idle(40);
        scene.addKeyframe();
      }
    );
});