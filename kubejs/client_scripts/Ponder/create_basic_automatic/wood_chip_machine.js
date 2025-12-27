Ponder.registry((event) => {
  event
    .create(["createdieselgenerators:wood_chip", "createdieselgenerators:chip_wood_block"])
    .tag("kubejs:create_basic_automatic")
    .scene(
      "kubejs:wood_chip_machine",
      "循环型产线",
      "kubejs:wood_chip_machine",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        let i1 = 0; let i2 = 0; let i3 = 0;
        for (i2 = 1; i2 < 4; i2++) {
          for (i3 = 3; i3 < 6; i3++) {
            for (i1 = 2; i1 < 6; i1++) {
              scene.world.showSection([i1, i2, i3], Direction.down);
              scene.idle(1);
            }
          }
        };
        scene.addKeyframe();
        scene.text(60, "有许多物品的自动化需要修建循环型的产线");
        scene.idle(40);
        scene.rotateCameraY(90);
        scene.idle(40);
        scene.text(60, "在循环型产线中，物品反复在产线中循环，并在此过程中增殖");
        scene.idle(40);
        scene.rotateCameraY(90);
        scene.idle(40);
        scene.text(60, "这是一个简单的木屑增殖产线，它展示了循环型产线的运作").attachKeyFrame();
        for (let i = 0; i < 421; i++) {
          switch (i) {
            case 20:
              scene.showControls(20, [5, 2, 5], "down").withItem("createdieselgenerators:chip_wood_block");
              continue
            case 40:
              scene.rotateCameraY(90);
              continue
            case 80:
              scene.text(60, "这类产线的核心便在于精确控制物品进入循环和输出的比例").attachKeyFrame();
              continue
            case 120:
              scene.rotateCameraY(90);
              continue
            case 160:
              scene.text(60, "你可以基于物品在单次循环中的增殖量来确切地设定一个数值...").attachKeyFrame();
              continue
            case 200:
              scene.rotateCameraY(90);
              continue
            case 240:
              scene.text(60, "...也可以选择使用黄铜隧道的最近优先模式来让物品优先进入循环而非输出").attachKeyFrame();
              continue
            case 280:
              scene.rotateCameraY(90);
              continue
            case 300:
              scene.world.showSection([6, 2, 5], Direction.west);
              continue
            case 320:
              scene.text(60, "对于木屑增殖来说，由于内部增殖效率大于黄铜漏斗输出效率，所以你只需要直接输出即可！").attachKeyFrame();
              continue
          }
          //释放木屑块并粉碎
          if(i%20==0&&i>=20){
            scene.world.flapFunnel([2,2,4],true)
            scene.world.createItemOnBelt([2,1,4],Direction.north,"64x createdieselgenerators:chip_wood_block")
          }
          if(i%20==0&&i>=320){
            scene.world.flapFunnel([6,2,5],true)
            scene.world.createItemEntity([6.5,2.5,5.5],[0,0.1,0],"64x createdieselgenerators:chip_wood_block")
          }
          if(i%40==5&&i>=20){
            scene.world.flapFunnel([3,2,4],true)
            scene.world.removeItemsFromBelt([3,1,4])
          }
          //木屑产出与回收
          if(i%10==0&&i>=30){
            scene.world.removeItemsFromBelt([5,1,4])
            scene.world.flapFunnel([5,2,4],true)
          }
          if(i%10==1&&i>=20){
            scene.world.createItemOnBeltLike([5,1,4],Direction.west,"64x createdieselgenerators:wood_chip")
          }
          scene.idle(1)
        }
      }
    );
});