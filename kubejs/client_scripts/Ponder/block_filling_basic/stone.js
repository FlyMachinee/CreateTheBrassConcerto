Ponder.registry((event) => {
  event
    .create(["minecraft:andesite","minecraft:diorite","minecraft:granite","create:crimsite"])
    .tag("kubejs:block_filling_basic")
    .scene(
      "kubejs:stone",
      "使用岩浆注液转化岩石",
      "kubejs:9x9base",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.world.showSection([0, 1, 0, 9, 6, 9], Direction.down)
        scene.world.setBlock([4, 3, 4], "create:spout", false)
        scene.world.setBlock([4, 4, 4], "create:mechanical_pump", false)
        scene.world.modifyBlock([4, 4, 4], state => state.with("facing", "down"), false)
        scene.world.setBlock([4, 5, 4], "create:creative_fluid_tank", false)
        scene.world.modifyTileNBT([4, 5, 4], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "minecraft:lava" }
        })
        let Inputs = ["minecraft:stone","minecraft:gravel"]
        let Outputs = ["minecraft:andesite","minecraft:diorite","minecraft:granite","create:crimsite"]

        for (let i = 0; i < Inputs.length; i++) {
          scene.world.setBlock([Math.floor(i / 7) + 6, 1, i % 7 + 1], Inputs[i], false);
        }
        for (let i = 0; i < Outputs.length; i++) {
          scene.world.setBlock([Math.floor(i / 7), 1, i % 7 + 1], Outputs[i], false);
        }
        for (let i3 of Inputs) {
          scene.world.setBlock([4, 1, 4], i3, false);
          scene.idle(10)
        }

        scene.idle(20);
        scene.text(120, "方块种类要求：石头、砂砾", [6.5, 1, 1.5]);
        scene.overlay.showOutline("red", { "glue": true }, [6, 1, 1, 8, 1, 7], 120);
        scene.text(120, "方块产出：安山岩、花岗岩、闪长岩、绯红岩", [3.5, 1.5, 8.5]);
        scene.overlay.showOutline("green", { "glue": true }, [0, 1, 1, 2, 1, 7], 120);
        scene.text(120, "流体消耗：250mB 岩浆", [4.5, 4.5, 4.5]);
        scene.text(120, "转化方块", [4.5, 1.5, 4.5]);
        scene.overlay.showOutline("blue", { "glue": true }, [4, 1, 4], 120);

        scene.idle(20);
        scene.world.setBlock([4, 1, 4], Outputs[0], true);
        scene.idle(100);
      }
    )
});