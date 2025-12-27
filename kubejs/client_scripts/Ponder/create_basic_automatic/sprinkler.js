Ponder.registry((event) => {
  event
    .create(["create_things_and_misc:sprinkler", "minecraft:bone_meal"])
    .tag("kubejs:create_basic_automatic")
    .scene(
      "kubejs:sprinkler",
      "使用喷灌器进行农业建设",
      "kubejs:sprinkler",
      (scene, utils) => {
        scene.scaleSceneView(0.75);
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(2);
        scene.idle(20);
        scene.addKeyframe();
        scene.world.setBlocks([2, 2, 2, 2, 2, 6], false, "minecraft:potatoes")
        scene.world.setBlocks([3, 2, 2, 3, 2, 6], false, "minecraft:wheat")
        scene.world.setBlocks([4, 2, 2, 4, 2, 3], false, "minecraft:potatoes")
        scene.world.setBlocks([4, 2, 5, 4, 2, 6], false, "minecraft:potatoes")
        scene.world.setBlocks([5, 2, 2, 5, 2, 6], false, "minecraft:wheat")
        scene.world.setBlocks([6, 2, 2, 6, 2, 6], false, "minecraft:potatoes")
        scene.text(40, "与一般理解不同，喷灌器并非用于湿润耕地");
        scene.idle(60);
        scene.text(40, "它的作用是使用骨粉稀释液催熟附近的作物！");
        scene.idle(60);
        scene.text(60, "首先，建立管道并接入骨粉稀释液");
        scene.world.showSection([0, 3, 0, 9, 4, 9], Direction.down)
        scene.world.modifyTileNBT([7, 4, 4], (nbt) => {
          nbt.Speed = 64
        })
        scene.world.modifyTileNBT([8, 3, 4, 7, 3, 4], (nbt) => {
          nbt.Speed = 64
        })
        scene.world.multiplyKineticSpeed([8, 3, 4, 7, 4, 4], 64)
        scene.world.propagatePipeChange([7, 4, 4])
        scene.idle(40);

        scene.addKeyframe();
        scene.text(60, "喷灌器在工作时，每次会首先吸收1000mB的骨粉稀释液", [4, 2, 4]);
        scene.overlay.showOutline("green", { "glue": true }, [4, 2, 4], 60);
        scene.world.setBlock([4, 2, 4], "create_things_and_misc:sprinkleron", false)
        scene.world.createEntity("create_things_and_misc:sprinkler_head",[4.5,2,4.5])
        scene.idle(80);

        scene.addKeyframe();
        scene.text(60, "每隔四秒，喷灌器会消耗500mB骨粉稀释液，并使周围5*1*5范围内的所有作物生长阶段+1", [5, 4, 7]);
        scene.overlay.showOutline("green", { "glue": true }, [2, 2, 2, 6, 2, 6], 30);
        scene.world.modifyBlocks( [2, 2, 2, 6, 2, 6], state => state.with("age", "2"), false)
        scene.idle(80);

        scene.addKeyframe();
        scene.text(60, "唯一需要注意的是，喷灌器不具有智能识别功能，不会自动暂停喷灌！");
        scene.overlay.showOutline("green", { "glue": true }, [2, 2, 2, 6, 2, 6], 30);
        scene.world.modifyBlocks( [2, 2, 2, 6, 2, 6], state => state.with("age", "3"), false)
        scene.idle(80);

        for (let i = 4; i < 8; i++) {
          addCrop(scene, i)
        }
        function addCrop(scene, i) {
          scene.overlay.showOutline("green", { "glue": true }, [2, 2, 2, 6, 2, 6], 30);
          scene.world.modifyBlocks( [2, 2, 2, 6, 2, 6], state => state.with("age", i.toString()), false)
          scene.idle(80)
        }
      }
    );
});