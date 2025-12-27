Ponder.registry((event) => {
  event
    .create(["create:andesite_alloy"])
    .tag("kubejs:block_filling_extra_item")
    .scene(
      "kubejs:filling/iron",
      "使用熔融铁注液生产安山合金",
      "kubejs:9x9base",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.world.showSection([0, 1, 0, 9, 6, 9], Direction.down)
        scene.world.setBlock([4, 1, 4], "create:depot", false)
        scene.world.setBlock([4, 1, 1], "create:depot", false)
        scene.world.setBlock([4, 4, 4], "create:spout", false)
        scene.world.setBlock([4, 5, 4], "create:mechanical_pump", false)
        scene.world.modifyBlock([4, 5, 4], state => state.with("facing", "down"), false)
        scene.world.setBlock([4, 6, 4], "create:creative_fluid_tank", false)
        scene.world.modifyTileNBT([4, 6, 4], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:iron" }
        })
        scene.world.createItemOnBeltLike([4, 1, 1], Direction.down, "4x create:andesite_alloy")
        let Inputs = ["minecraft:andesite"]

        for (let i = 0; i < Inputs.length; i++) {
          scene.world.setBlock([Math.floor(i/7)+6, 1, i%7+1], Inputs[i], false);
        }

        scene.idle(20);
        scene.text(120, "方块种类要求：安山岩", [6.5, 1.5, 1.5]);
        scene.overlay.showOutline("red", { "glue": true }, [6, 1, 1, 8, 1, 7], 120);
        scene.text(120, "物品产出：4x 安山合金", [4.5, 1.5, 1.5]);
        scene.overlay.showOutline("blue", { "glue": true }, [4, 1, 1], 120);
        scene.text(120, "需要空的置物台", [4.5, 1.5, 4.5]);
        scene.overlay.showOutline("green", { "glue": true }, [4, 1, 4], 120);
        scene.text(120, "流体消耗：90mB 熔融铁", [4.5, 5.5, 4.5]);
        scene.overlay.showOutline("green", { "glue": true }, [4, 1, 1], 120);
        scene.text(120, "不消耗方块", [4.5, 2.5, 4.5]);
        scene.overlay.showOutline("green", { "glue": true }, [4, 2, 4], 120);

        for (let i3 of Inputs) {
          scene.world.setBlock([4, 2, 4], i3, false);
          scene.idle(10)
        }
        scene.idle(120 - (10 * Inputs.length));
      }
    )
    .scene(
      "kubejs:filling/industrial_iron",
      "使用熔融工业铁注液生产安山合金",
      "kubejs:9x9base",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.world.showSection([0, 1, 0, 9, 6, 9], Direction.down)
        scene.world.setBlock([4, 1, 4], "create:depot", false)
        scene.world.setBlock([4, 1, 1], "create:depot", false)
        scene.world.setBlock([4, 4, 4], "create:spout", false)
        scene.world.setBlock([4, 5, 4], "create:mechanical_pump", false)
        scene.world.modifyBlock([4, 5, 4], state => state.with("facing", "down"), false)
        scene.world.setBlock([4, 6, 4], "create:creative_fluid_tank", false)
        scene.world.modifyTileNBT([4, 6, 4], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:industrial_iron" }
        })
        scene.world.createItemOnBeltLike([4, 1, 1], Direction.down, "9x create:andesite_alloy")
        let Inputs = ["minecraft:andesite"]

        for (let i = 0; i < Inputs.length; i++) {
          scene.world.setBlock([Math.floor(i/7)+6, 1, i%7+1], Inputs[i], false);
        }

        scene.idle(20);
        scene.text(120, "方块种类要求：安山岩", [6.5, 1.5, 1.5]);
        scene.overlay.showOutline("red", { "glue": true }, [6, 1, 1, 8, 1, 7], 120);
        scene.text(120, "物品产出：9x 安山合金", [4.5, 1.5, 1.5]);
        scene.overlay.showOutline("blue", { "glue": true }, [4, 1, 1], 120);
        scene.text(120, "需要空的置物台", [4.5, 1.5, 4.5]);
        scene.overlay.showOutline("green", { "glue": true }, [4, 1, 4], 120);
        scene.text(120, "流体消耗：90mB 熔融工业铁", [4.5, 5.5, 4.5]);
        scene.overlay.showOutline("green", { "glue": true }, [4, 1, 1], 120);
        scene.text(120, "不消耗方块", [4.5, 2.5, 4.5]);
        scene.overlay.showOutline("green", { "glue": true }, [4, 2, 4], 120);

        for (let i3 of Inputs) {
          scene.world.setBlock([4, 2, 4], i3, false);
          scene.idle(10)
        }
        scene.idle(120 - (10 * Inputs.length));
      }
    );
});