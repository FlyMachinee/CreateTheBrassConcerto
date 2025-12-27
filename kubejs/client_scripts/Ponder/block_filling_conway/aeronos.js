Ponder.registry((event) => {
  event.create(["ad_astra:aeronos_stem", "ad_astra:aeronos_cap", "ad_astra:conglomerate"])
    .tag("kubejs:block_filling_conway")
    .scene(
      "kubejs:aeronos_conway",
      "使用注液催化空果菇生长",
      "kubejs:9x9base",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.scaleSceneView(0.75)
        scene.setSceneOffsetY(-2)
        scene.world.showSection([0, 1, 0, 9, 9, 9], Direction.down)
        scene.world.setBlock([4, 5, 4], "minecraft:air", false)
        scene.world.setBlock([4, 6, 4], "ad_astra:conglomerate", false)
        scene.world.setBlock([4, 8, 4], "create:spout", false)
        scene.world.setBlock([3, 8, 4], "create:mechanical_pump", false)
        scene.world.modifyBlock([3, 8, 4], state => state.with("facing", "east"), false)
        scene.world.setBlock([2, 8, 4], "create:creative_fluid_tank", false)
        scene.world.modifyTileNBT([2, 8, 4], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:aeronos_spore" }
        })
        scene.world.setBlock([3, 2, 3], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([4, 2, 3], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([5, 2, 3], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([5, 2, 4], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([5, 2, 5], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([5, 3, 5], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([4, 3, 4], "ad_astra:aeronos_cap", false)
        scene.idle(20);
        scene.text(120, "媒介方块种类：砾岩", [4.5, 6.5, 4.5]);
        scene.overlay.showOutline("red", { "glue": true }, [4, 6, 4], 120);
        scene.text(120, "流体消耗：50mB 空果孢子", [2.5, 8.5, 4.5]);
        scene.overlay.showOutline("blue", { "glue": true }, [2, 8, 4], 120);
        scene.text(120, "理想比例：5", [4.5, 3.5, 4.5]).attachKeyFrame()
        scene.overlay.showOutline("green", { "glue": true }, [3, 2, 3, 5, 4, 5], 30);
        scene.overlay.showOutline("fast", { "glue": true }, [2, 1, 2, 6, 5, 6], 30);
        scene.idle(20);
        scene.world.setBlock([3, 2, 3], "minecraft:air", false)
        scene.world.setBlock([4, 2, 3], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([5, 2, 3], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([4, 3, 3], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([5, 3, 3], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([4, 2, 4], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([5, 2, 4], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([4, 3, 4], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([5, 3, 4], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([4, 2, 5], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([5, 2, 5], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([4, 3, 5], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([5, 3, 5], "ad_astra:aeronos_cap", false)
        scene.idle(40)
        scene.world.setBlock([5, 2, 5], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([5, 2, 4], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([5, 2, 3], "ad_astra:aeronos_stem", false)

        scene.world.setBlock([4, 2, 5], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([4, 2, 4], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([4, 2, 3], "ad_astra:aeronos_cap", false)
        
        scene.world.setBlock([3, 2, 4], "ad_astra:aeronos_cap", false)


        scene.world.setBlock([5, 3, 5], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([5, 3, 4], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([5, 3, 3], "ad_astra:aeronos_cap", false)

        scene.world.setBlock([4, 3, 5], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([4, 3, 4], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([4, 3, 3], "ad_astra:aeronos_cap", false)
        
        scene.world.setBlock([3, 3, 4], "ad_astra:aeronos_cap", false)

        
        scene.world.setBlock([5, 4, 4], "ad_astra:aeronos_stem", false)

        scene.world.setBlock([4, 4, 4], "ad_astra:aeronos_cap", false)
        scene.idle(40)
        scene.world.setBlock([5, 2, 5], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([5, 2, 4], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([5, 2, 3], "ad_astra:aeronos_cap", false)

        scene.world.setBlock([4, 2, 5], "minecraft:air", false)
        scene.world.setBlock([4, 2, 4], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([4, 2, 3], "minecraft:air", false)
        
        scene.world.setBlock([3, 2, 5], "minecraft:air", false)
        scene.world.setBlock([3, 2, 4], "minecraft:air", false)
        scene.world.setBlock([3, 2, 3], "minecraft:air", false)

        scene.world.setBlock([5, 3, 5], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([5, 3, 4], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([5, 3, 3], "ad_astra:aeronos_cap", false)

        scene.world.setBlock([4, 3, 5], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([4, 3, 4], "minecraft:air", false)
        scene.world.setBlock([4, 3, 3], "ad_astra:aeronos_stem", false)
        
        scene.world.setBlock([3, 3, 5], "minecraft:air", false)
        scene.world.setBlock([3, 3, 4], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([3, 3, 3], "minecraft:air", false)

        scene.world.setBlock([5, 4, 4], "ad_astra:aeronos_cap", false)

        scene.world.setBlock([4, 4, 5], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([4, 4, 4], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([4, 4, 3], "ad_astra:aeronos_cap", false)
        
        scene.world.setBlock([3, 4, 5], "ad_astra:aeronos_cap", false)
        scene.world.setBlock([3, 4, 4], "ad_astra:aeronos_stem", false)
        scene.world.setBlock([3, 4, 3], "ad_astra:aeronos_cap", false)
      }
    )
});