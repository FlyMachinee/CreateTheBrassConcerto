Ponder.registry((event) => {
    event
      .create(["create:steam_engine"])
      .tag("kubejs:create_basic_automatic")
      .scene(
        "kubejs:engine_1_level9",
        "九级蒸汽锅炉", 
        "kubejs:level9_engine",
        (scene, utils) => {
          scene.configureBasePlate(0, 0, 9);
          scene.showStructure(0);
          scene.scaleSceneView(0.6);
          scene.idle(20);
          scene.text(100, "九级锅炉是最简单的大宗应力来源\n一台就能够提供 147456su的应力！");
          for(let i =1;i<9;i++){
              scene.idle(3);
              scene.world.showSection([0,i,0,8,i,8], Direction.down);
          }
          scene.idle(96);
          scene.addKeyframe();
          scene.text(380, "想要建造一台九级锅炉，你需要：");
          scene.idle(80);
          scene.text(300, "九个燃烧中的烈焰人燃烧室",[3,2,3]).attachKeyFrame();
          scene.overlay.showOutline("red", {"glue":true}, [3,2,3,5,2,5], 50);
          scene.idle(80);
          scene.text(220, "一个3x3x4大小的流体储罐",[3,4,3]).attachKeyFrame();
          scene.overlay.showOutline("green", {"glue":true}, [3,3,3,5,6,5], 50);
          scene.idle(80);
          scene.text(140, "九个接好传动杆的蒸汽引擎(可以接在锅炉上的任何地方！)",[2,6,4]).attachKeyFrame();
          scene.overlay.showOutline("red", {"glue":true}, [2,3,3,2,5,5], 50);
          scene.idle(80);
          scene.text(60, "...并输入充足的水！(水龙头足矣)",[4,7,4]).attachKeyFrame();
          scene.overlay.showOutline("blue", {"glue":true}, [4,7,3,5,7,5], 50);
          scene.idle(80);
          
          scene.text(420, "接下来看看其它部分的功能：");
          scene.idle(80);
          scene.text(340, "链式传动箱把所有引擎的应力连接在一起",[0,6,4]).attachKeyFrame();
          scene.overlay.showOutline("green", {"glue":true}, [0,6,3,0,6,5], 50);
          scene.idle(80);
          scene.text(260, "转速控制器改变锅炉输出的转速",[1,1,5]).attachKeyFrame();
          scene.overlay.showOutline("blue", {"glue":true}, [0,1,4,1,2,4], 50);
          scene.idle(80);
          scene.rotateCameraY(-110);
          scene.idle(40);
          scene.text(60, "动力泵用于输入液体燃料(需要为烈焰人燃烧室加上吸管！)",[2,3,6]).attachKeyFrame();
          scene.overlay.showOutline("red", {"glue":true}, [2,1,4,2,1,8], 50);
          scene.idle(80);
          scene.text(60, "你也可以使用使用动力臂添加固体燃料",[2,3,6]).attachKeyFrame();
          scene.idle(100);
          scene.text(80, "...最后一提，将管道和齿轮套上机壳可以显著减少卡顿！",[4,1,5]).attachKeyFrame();
          scene.overlay.showOutline("red", {"glue":true}, [3,1,3,5,1,5], 50);
          scene.idle(80);
        }
      );
  });