Ponder.registry((event) => {
  event
    .create(["kubejs:steam_generator"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_steam_generator",
      "使用大型蒸汽机",
      "kubejs:9x9base",
      (scene, utils) => {
        function setBlock(block, pos) {
          scene.world.setBlock(pos, block, false);
          scene.world.showSection(pos, Direction.down)
        }
        function modifyBlock(state1, value, pos) {
          scene.world.modifyBlock(pos, state => state.with(state1, value), false)
        }
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.scaleSceneView(0.8);
        scene.setSceneOffsetY(-4)
        scene.world.showSection([4, 5, 4], Direction.down)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "与其它的多方块机器不同，蒸汽发电机周围的结构可以设计的更加自由，并且直接影响其效率");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "首先，蒸汽发电机周围的方框处不能是空气");
        scene.overlay.showOutline("green", {}, [3, 3, 4, 5, 3, 4], 30);
        scene.overlay.showOutline("green", {}, [3, 7, 4, 5, 7, 4], 30);
        scene.overlay.showOutline("blue", {}, [6, 4, 4, 6, 6, 4], 30);
        scene.overlay.showOutline("blue", {}, [2, 4, 4, 2, 6, 4], 30);
        setBlock("minecraft:iron_block", [3, 3, 4]);
        scene.idle(5);
        setBlock("minecraft:gold_block", [4, 3, 4]);
        scene.idle(5);
        setBlock("minecraft:copper_block", [5, 3, 4]);
        scene.idle(5);
        setBlock("minecraft:diamond_block", [6, 4, 4]);
        scene.idle(5);
        setBlock("minecraft:coal_block", [6, 5, 4]);
        scene.idle(5);
        setBlock("minecraft:redstone_block", [6, 6, 4]);
        scene.idle(5);
        setBlock("minecraft:lapis_block", [5, 7, 4]);
        scene.idle(5);
        setBlock("minecraft:netherite_block", [4, 7, 4]);
        scene.idle(5);
        setBlock("minecraft:emerald_block", [3, 7, 4]);
        scene.idle(5);
        setBlock("create:andesite_alloy_block", [2, 6, 4]);
        scene.idle(5);
        setBlock("create:zinc_block", [2, 5, 4]);
        scene.idle(5);
        setBlock("create:brass_block", [2, 4, 4]);
        scene.idle(25);
        scene.addKeyframe();
        scene.text(60, "接着，你需要在发电机周围3*3内输入加压蒸汽，并为发电机提供润滑油");
        scene.overlay.showOutline("fast", {}, [3, 4, 4, 5, 6, 4], 60);
        scene.idle(20);
        scene.showControls(15, [4, 5, 4], "up").withItem("create:mechanical_pump")
        scene.showControls(15, [4, 6, 4], "left").withItem("kubejs:lube_oil_bucket")
        scene.idle(20);
        setBlock("kubejs:pressurized_steam", [4, 4, 4])
        scene.idle(40);
        scene.addKeyframe();
        scene.text(60, "在配方开始时会消耗20mB润滑油，同时每一格加压蒸汽都会被转化为水，并提供2048FE/t的电力，持续60tick");
        scene.idle(20);
        setBlock("minecraft:water", [4, 4, 4])
        scene.idle(60);
        scene.addKeyframe();
        scene.text(60, "但同时需要注意的是，配方开始时在范围每存在一格水，都会使提供的电力大幅衰减！");
        setBlock("kubejs:pressurized_steam", [3, 4, 4])
        scene.idle(30);
        setBlock("minecraft:air", [4, 4, 4])
        setBlock("minecraft:water", [3, 4, 4])
        scene.text(30, "发电效率减半", [4, 5, 4]);
        scene.idle(50);
        scene.addKeyframe();
        scene.text(60, "输入的润滑油和产出的电力可以被蒸汽发电机自动传递到前方一格处");
        scene.overlay.showOutline("green", {}, [4, 5, 3], 40);
        scene.idle(80);
        scene.text(40, "也就是说，一系列蒸汽发电机可以被串联起来！");
        scene.idle(60);
        scene.text(60, "总体来说，蒸汽式发电机的最低效率为256FE/t，而最高效率为16384FE/t");
        scene.idle(60);
        scene.world.hideSection([3, 3, 4, 5, 4, 4], Direction.up)
        scene.world.hideSection([3, 7, 4, 5, 7, 4], Direction.up)
        scene.world.hideSection([6, 4, 4, 6, 6, 4], Direction.up)
        scene.world.hideSection([2, 4, 4, 2, 6, 4], Direction.up)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "下面是一种可行的结构：");

        setBlock("create:mechanical_pump", [3, 3, 4]);
        modifyBlock("facing", "up", [3, 3, 4]);
        scene.idle(5);
        setBlock("create:smart_fluid_pipe", [4, 3, 4]);
        modifyBlock("facing", "north", [4, 3, 4]);
        modifyBlock("face", "wall", [4, 3, 4]);
        scene.world.modifyTileNBT([4, 3, 4], (nbt) => { nbt.Filter = { Count: 1, id: "minecraft:water_bucket" } });
        scene.idle(5);
        setBlock("create:smart_fluid_pipe", [5, 3, 4]);
        modifyBlock("facing", "north", [5, 3, 4]);
        modifyBlock("face", "wall", [5, 3, 4]);
        scene.world.modifyTileNBT([5, 3, 4], (nbt) => { nbt.Filter = { Count: 1, id: "minecraft:water_bucket" } });
        scene.idle(5);
        setBlock("create:mechanical_pump", [6, 4, 4]);
        modifyBlock("facing", "west", [6, 4, 4]);
        scene.idle(5);
        setBlock("create:smart_fluid_pipe", [6, 5, 4]);
        modifyBlock("facing", "west", [6, 5, 4]);
        modifyBlock("face", "floor", [6, 5, 4]);
        scene.world.modifyTileNBT([6, 5, 4], (nbt) => { nbt.Filter = { Count: 1, id: "minecraft:water_bucket" } });
        scene.idle(5);
        setBlock("create:mechanical_pump", [6, 6, 4]);
        modifyBlock("facing", "west", [6, 6, 4]);
        scene.idle(5);
        setBlock("create:mechanical_pump", [5, 7, 4]);
        modifyBlock("facing", "down", [5, 7, 4]);
        scene.idle(5);
        setBlock("create:smart_fluid_pipe", [4, 7, 4]);
        modifyBlock("facing", "north", [4, 7, 4]);
        modifyBlock("face", "wall", [4, 7, 4]);
        scene.world.modifyTileNBT([4, 7, 4], (nbt) => { nbt.Filter = { Count: 1, id: "minecraft:water_bucket" } });
        scene.idle(5);
        setBlock("create:smart_fluid_pipe", [3, 7, 4]);
        modifyBlock("facing", "north", [3, 7, 4]);
        modifyBlock("face", "wall", [3, 7, 4]);
        scene.world.modifyTileNBT([3, 7, 4], (nbt) => { nbt.Filter = { Count: 1, id: "minecraft:water_bucket" } });
        scene.idle(5);
        setBlock("create:mechanical_pump", [2, 6, 4]);
        modifyBlock("facing", "east", [2, 6, 4]);
        scene.idle(5);
        setBlock("create:smart_fluid_pipe", [2, 5, 4]);
        modifyBlock("facing", "east", [2, 5, 4]);
        modifyBlock("face", "floor", [2, 5, 4]);
        scene.world.modifyTileNBT([2, 5, 4], (nbt) => { nbt.Filter = { Count: 1, id: "minecraft:water_bucket" } });
        scene.idle(5);
        setBlock("create:mechanical_pump", [2, 4, 4]);
        modifyBlock("facing", "east", [2, 4, 4]);
        scene.idle(5);
        setBlock("create:encased_fluid_pipe", [3, 4, 4]);
        modifyBlock("east", "true", [3, 4, 4]);
        modifyBlock("west", "true", [3, 4, 4]);
        modifyBlock("up", "true", [3, 4, 4]);
        modifyBlock("down", "true", [3, 4, 4]);
        scene.idle(5);
        setBlock("create:encased_fluid_pipe", [5, 6, 4]);
        modifyBlock("west", "true", [5, 6, 4]);
        modifyBlock("east", "true", [5, 6, 4]);
        modifyBlock("up", "true", [5, 6, 4]);
        modifyBlock("down", "true", [5, 6, 4]);
        scene.idle(5);
        scene.idle(30);
      }
    );
});