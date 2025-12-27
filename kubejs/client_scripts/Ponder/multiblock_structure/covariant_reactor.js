Ponder.registry((event) => {
  event
    .create(["kubejs:covariant_reactor", "kubejs:bronze_fuel_rod"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:covariant_reactor_fuel_and_control",
      "使用燃料棒与控制棒",
      "kubejs:covariant_reactor",
      (scene, utils) => {
        function setBlock(block, pos) {
          scene.world.setBlock(pos, block, false);
          scene.world.showSection(pos, Direction.down)
        }
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.world.showSection([4, 3, 4], Direction.down)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "与蒸汽发电机类似的，你可以自由地设计协变反应堆的结构，并直接控制它的工作效率！");
        scene.idle(80);
        scene.text(60, "在协变反应堆周围3*1*3的范围内放置燃料棒来令之开始工作").attachKeyFrame();
        scene.overlay.showOutline("green", {}, [3, 3, 3, 5, 3, 5], 30);
        setBlock("kubejs:bronze_fuel_rod", [3, 3, 3])
        scene.idle(20);
        setBlock("kubejs:bronze_fuel_rod", [4, 3, 3])
        scene.idle(20);
        setBlock("kubejs:bronze_fuel_rod", [4, 3, 5])
        scene.idle(20);
        setBlock("kubejs:bronze_fuel_rod", [5, 3, 4])
        scene.idle(20);

        scene.text(60, "第一根燃料棒可以提供512 FE/t的电力产出和64 mB/t的协变热产出").attachKeyFrame();
        scene.overlay.showOutline("green", {}, [3, 3, 3], 30);
        scene.idle(80);

        scene.text(60, "此后每根燃料棒都会使电力与协变热产出x2！").attachKeyFrame();
        scene.overlay.showOutline("green", {}, [3, 3, 3, 5, 3, 5], 30);
        scene.idle(80);

        scene.text(60, "在每次反应开始时，燃料棒有2.5%%的概率一同消耗并变为黄铜块(如果仅有一根燃料棒，它不会被消耗)").attachKeyFrame();
        scene.world.setBlock([3, 3, 3], "create:brass_block", true)
        scene.world.setBlock([4, 3, 3], "create:brass_block", true)
        scene.world.setBlock([4, 3, 5], "create:brass_block", true)
        scene.world.setBlock([5, 3, 4], "create:brass_block", true)
        scene.overlay.showOutline("red", {}, [3, 3, 3, 5, 3, 5], 30);
        scene.idle(80);

        scene.world.setBlock([3, 3, 3], "kubejs:bronze_fuel_rod", true)
        scene.world.setBlock([4, 3, 3], "kubejs:bronze_fuel_rod", true)
        scene.world.setBlock([4, 3, 5], "kubejs:bronze_fuel_rod", true)
        scene.world.setBlock([5, 3, 4], "kubejs:bronze_fuel_rod", true)

        scene.text(60, "如果你不希望反应速度太快，那么你可以在范围内放置控制棒！").attachKeyFrame();
        scene.overlay.showOutline("blue", {}, [3, 3, 3, 5, 3, 5], 30);
        setBlock("kubejs:carbon_electrode", [5, 3, 5])
        scene.idle(20);
        setBlock("kubejs:carbon_electrode", [3, 3, 4])
        scene.idle(20);
        setBlock("kubejs:carbon_electrode", [5, 3, 3])
        scene.idle(20);
        setBlock("kubejs:carbon_electrode", [3, 3, 5])
        scene.idle(20);

        scene.text(60, "每一根控制棒可以使燃料棒的消耗速度(转化为黄铜块的概率)、工作功率下降12.5%%！").attachKeyFrame();
        scene.overlay.showOutline("green", {}, [5, 3, 5], 30);
        scene.idle(80);


        scene.text(60, "此外，如果核心内部电力满载无法产出电力，那么产出的协变热将会翻倍！").attachKeyFrame();
        scene.overlay.showOutline("red", {}, [4, 3, 4], 30);
        scene.idle(80);
      }
    )
    .scene(
      "kubejs:covariant_reactor_heat",
      "反应堆散热",
      "kubejs:covariant_reactor",
      (scene, utils) => {
        function setBlock(block, pos) {
          scene.world.setBlock(pos, block, false);
          scene.world.showSection(pos, Direction.down)
        }
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.world.showSection([4, 3, 4], Direction.down)

        scene.world.setBlock([3, 3, 4], "kubejs:bronze_fuel_rod", false);
        scene.world.setBlock([4, 3, 3], "kubejs:bronze_fuel_rod", false);
        scene.world.setBlock([4, 3, 5], "kubejs:bronze_fuel_rod", false);
        scene.world.setBlock([5, 3, 4], "kubejs:bronze_fuel_rod", false);
        let rod1 = scene.world.showIndependentSection([3, 3, 4], Direction.down, 20)
        scene.idle(5);
        let rod2 = scene.world.showIndependentSection([4, 3, 3], Direction.down, 20)
        scene.idle(5);
        let rod3 = scene.world.showIndependentSection([4, 3, 5], Direction.down, 20)
        scene.idle(5);
        let rod4 = scene.world.showIndependentSection([5, 3, 4], Direction.down, 20)
        scene.idle(5);
        scene.addKeyframe();
        scene.text(60, "如果反应堆堆积的协变热超过1474.56B，反应堆就将应过热而爆炸！这就是为什么你需要进行散热！");
        scene.idle(80);

        scene.text(60, "你可以通过泵抽取反应堆中的协变热流体，但这样至多只能以128 mB/t的速度散热！").attachKeyFrame();
        scene.idle(80);

        scene.text(60, "为了以更好的方式散热，首先，将燃料棒从反应堆附近移开...").attachKeyFrame();
        scene.idle(20);
        scene.overlay.showOutline("red", {}, [3, 3, 3, 5, 3, 5], 30);
        scene.world.moveSection(rod1, [0, -1, 0, 20], 10)
        scene.idle(10);
        scene.world.moveSection(rod2, [0, -1, 0, 20], 10)
        scene.idle(10);
        scene.world.moveSection(rod3, [0, -1, 0, 20], 10)
        scene.idle(10);
        scene.world.moveSection(rod4, [0, -1, 0, 20], 10)
        scene.idle(10);
        scene.idle(20);

        scene.text(60, "...接着，放置至少四根控制棒，反应堆就将进入散热状态").attachKeyFrame();
        scene.overlay.showOutline("blue", {}, [3, 3, 3, 5, 3, 5], 30);
        scene.world.setBlock([3, 3, 3], "kubejs:carbon_electrode", false);
        scene.world.setBlock([3, 3, 5], "kubejs:carbon_electrode", false);
        scene.world.setBlock([5, 3, 3], "kubejs:carbon_electrode", false);
        scene.world.setBlock([5, 3, 5], "kubejs:carbon_electrode", false);
        scene.idle(20);
        let electrode1 = scene.world.showIndependentSection([3, 3, 3], Direction.down, 20)
        scene.idle(10);
        let electrode2 = scene.world.showIndependentSection([3, 3, 5], Direction.down, 20)
        scene.idle(10);
        let electrode3 = scene.world.showIndependentSection([5, 3, 3], Direction.down, 20)
        scene.idle(10);
        let electrode4 = scene.world.showIndependentSection([5, 3, 5], Direction.down, 20)
        scene.idle(10);
        scene.idle(20);

        scene.text(40, "你有两种散热方案可以选择").attachKeyFrame();
        scene.idle(60);

        scene.text(60, "第一种，向范围内泵出冷冻液").attachKeyFrame();
        scene.overlay.showOutline("green", {}, [2, 3, 2, 5, 3, 2], 80);
        scene.overlay.showOutline("green", {}, [6, 3, 2, 6, 3, 5], 80);
        scene.overlay.showOutline("green", {}, [6, 3, 6, 3, 3, 6], 80);
        scene.overlay.showOutline("green", {}, [2, 3, 6, 2, 3, 3], 80);
        const pos1 = [
          [2, 3, 2],
          [2, 3, 3],
          [2, 3, 4],
          [2, 3, 5],
          [2, 3, 6],
          [3, 3, 6],
          [4, 3, 6],
          [5, 3, 6],
          [6, 3, 6],
          [6, 3, 5],
          [6, 3, 4],
          [6, 3, 3],
          [6, 3, 2],
          [5, 3, 2],
          [4, 3, 2],
          [3, 3, 2]
        ]
        for (let i of pos1) {
          setBlock("kubejs:cryogen", i)
          scene.idle(5);
        }
        scene.idle(20);

        scene.text(60, "反应堆会每5tick进行一次散热，单次至多将4B冷冻液转化为过热蒸汽").attachKeyFrame();
        scene.overlay.showOutline("blue", {}, [2, 3, 2, 6, 3, 6], 30);
        scene.world.setBlocks([2, 3, 2, 5, 3, 2], true, "kubejs:superheated_steam")
        scene.idle(5);
        scene.world.setBlocks([6, 3, 2, 6, 3, 5], true, "kubejs:superheated_steam")
        scene.idle(5);
        scene.world.setBlocks([6, 3, 6, 3, 3, 6], true, "kubejs:superheated_steam")
        scene.idle(5);
        scene.world.setBlocks([2, 3, 6, 2, 3, 3], true, "kubejs:superheated_steam")
        scene.idle(5);
        scene.idle(60);

        scene.text(60, "每转化一桶冷冻液将消耗20B协变热！").attachKeyFrame();
        scene.overlay.showOutline("blue", {}, [2, 3, 2], 30);
        scene.idle(60);
        scene.world.hideSection([2, 3, 2, 5, 3, 2], Direction.up)
        scene.world.hideSection([6, 3, 2, 6, 3, 5], Direction.up)
        scene.world.hideSection([6, 3, 6, 3, 3, 6], Direction.up)
        scene.world.hideSection([2, 3, 6, 2, 3, 3], Direction.up)
        scene.idle(20);

        scene.text(60, "第二种方案，向核心内提供散热元件").attachKeyFrame();
        scene.overlay.showOutline("blue", {}, [4, 3, 4], 30);
        scene.showControls(15, [4, 3, 4], "up").withItem("kubejs:radiator")
        scene.idle(80);

        scene.text(60, "反应堆会每20tick进行一次散热，单次消耗一个散热元件...").attachKeyFrame();
        scene.overlay.showOutline("blue", {}, [4, 3, 4], 30);
        scene.idle(80);

        scene.text(60, "...并将至多1280B协变热转化为48B过热蒸汽储存在核心中！").attachKeyFrame();
        scene.overlay.showOutline("blue", {}, [4, 3, 4], 30);
        scene.idle(80);

        scene.text(60, "你可以通过移动结构来灵活切换反应堆的状态").attachKeyFrame();
        scene.idle(20);
        scene.world.moveSection(rod1, [0, 1, 0, 20], 10)
        scene.world.moveSection(rod2, [0, 1, 0, 20], 10)
        scene.world.moveSection(rod3, [0, 1, 0, 20], 10)
        scene.world.moveSection(rod4, [0, 1, 0, 20], 10)
        scene.world.moveSection(electrode1, [0, -1, 0, 20], 10)
        scene.world.moveSection(electrode2, [0, -1, 0, 20], 10)
        scene.world.moveSection(electrode3, [0, -1, 0, 20], 10)
        scene.world.moveSection(electrode4, [0, -1, 0, 20], 10)
        scene.idle(30);
        scene.world.moveSection(rod1, [0, -1, 0, 20], 10)
        scene.world.moveSection(rod2, [0, -1, 0, 20], 10)
        scene.world.moveSection(rod3, [0, -1, 0, 20], 10)
        scene.world.moveSection(rod4, [0, -1, 0, 20], 10)
        scene.world.moveSection(electrode1, [0, 1, 0, 20], 10)
        scene.world.moveSection(electrode2, [0, 1, 0, 20], 10)
        scene.world.moveSection(electrode3, [0, 1, 0, 20], 10)
        scene.world.moveSection(electrode4, [0, 1, 0, 20], 10)
        scene.idle(30);


        scene.text(120, "但需要注意的是，反应堆每次反应持续60tick，在此期间不会改变状态，所以你需要提前移动控制棒和燃料棒！").attachKeyFrame();
        scene.idle(120);
      }
    )
    .scene(
      "kubejs:covariant_reactor_io",
      "反应堆的自动IO",
      "kubejs:covariant_reactor",
      (scene, utils) => {
        function setBlock(block, pos) {
          scene.world.setBlock(pos, block, false);
          scene.world.showSection(pos, Direction.down)
          scene.idle(40);
          scene.world.hideSection(pos, Direction.up)
        }
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.world.showSection([4, 3, 4], Direction.down)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "反应堆具有一定的自动IO能力！");
        scene.idle(80);

        scene.text(60, "首先，反应堆会自动从上方吸取电力并向周围输出电力").attachKeyFrame();
        scene.overlay.showOutline("green", {}, [4, 4, 4], 30);
        setBlock('createaddition:modular_accumulator', [4, 4, 4])
        scene.overlay.showOutline("red", {}, [4, 2, 4], 30);
        setBlock('createaddition:modular_accumulator', [4, 2, 4])

        scene.text(60, "其次，反应堆会自动从上方的容器中提取散热元件").attachKeyFrame();
        scene.overlay.showOutline("green", {}, [4, 4, 4], 30);
        scene.world.setBlock([4, 4, 4], "create:depot", false);
        scene.world.showSection([4, 4, 4], Direction.down)
        scene.world.createItemOnBeltLike([4, 4, 4], Direction.up, "64x kubejs:radiator")
        scene.idle(40);
        scene.world.hideSection([4, 4, 4], Direction.up)
        scene.idle(40);

        scene.text(60, "最后，反应堆会自动将内部的过热蒸汽向上输送！").attachKeyFrame();
        scene.world.setBlock([4, 4, 4], "create:fluid_tank", false);
        scene.world.showSection([4, 4, 4], Direction.down)
        scene.overlay.showOutline("red", {}, [4, 4, 4], 30);
        scene.idle(20);
        scene.world.modifyTileNBT([4, 4, 4], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:superheated_steam" }
        })
        scene.idle(20);
        scene.world.hideSection([4, 4, 4], Direction.up)
        scene.idle(40);
      }
    );
});