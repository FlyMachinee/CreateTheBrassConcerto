Ponder.registry((event) => {
  event
    .create(["kubejs:bearing", "kubejs:incompleted_bearing"])
    .tag("kubejs:create_basic_automatic")
    .scene(
      "kubejs:sequenced_assembly",
      "序列组装",
      "kubejs:sequenced_assembly",
      (scene, utils) => {
        scene.rotateCameraY(140)
        scene.configureBasePlate(0, 0, 9)
        scene.scaleSceneView(0.7)
        scene.showStructure(0)
        scene.idle(6)
        scene.world.showSection([0, 1, 0, 8, 1, 8], Direction.down)
        scene.idle(6)
        scene.world.showSection([0, 2, 0, 8, 2, 8], Direction.down)
        scene.idle(6)
        scene.world.showSection([0, 3, 0, 4, 3, 8], Direction.down)
        scene.idle(6)
        scene.world.showSection([0, 4, 0, 4, 4, 8], Direction.down)
        scene.idle(6)
        scene.world.showSection([0, 5, 0, 4, 5, 8], Direction.down)
        scene.idle(6)
        let Section = scene.world.showIndependentSection([5, 5, 7, 5, 3, 1], Direction.east)
        scene.world.moveSection(Section, [-1, 0, 0], 15)
        let beltItem = null
        function deploying(scene) {
          scene.world.moveDeployer([4, 6, 5], 1, 6)
          scene.idle(6)
          scene.world.moveDeployer([4, 6, 5], -1, 6)
          scene.world.removeItemsFromBelt([4, 4, 5])
          beltItem = scene.world.createItemOnBelt([4, 4, 5], Direction.down, Item.of('kubejs:incomplete_bearing', '{SequencedAssembly:{Progress:0.11111111f,Step:1,id:"dut_create:sequnced_assembly/bearing"}}'))
          scene.world.stallBeltItem(beltItem, false)
        }
        function filling(scene) {
          scene.world.stallBeltItem(beltItem, true)
          scene.world.modifyTileNBT([4, 6, 4], (nbt) => {
            nbt.ProcessingTicks = 20
          })
          scene.idle(20)
          scene.world.removeItemsFromBelt([4, 4, 4])
          beltItem = scene.world.createItemOnBelt([4, 4, 4], Direction.down, Item.of('kubejs:incomplete_bearing', '{SequencedAssembly:{Progress:0.22222222f,Step:2,id:"dut_create:sequnced_assembly/bearing"}}'))
          scene.world.stallBeltItem(beltItem, false)
        }
        function pressing(scene) {
          scene.idle(10)
          scene.world.removeItemsFromBelt([4, 4, 3])
          beltItem = scene.world.createItemOnBelt([4, 4, 3], Direction.down, 'kubejs:incomplete_bearing')
          scene.world.stallBeltItem(beltItem, false)
        }
        function pressed(scene) {
          scene.idle(10)
          scene.world.removeItemsFromBelt([4, 4, 3])
          beltItem = scene.world.createItemOnBelt([4, 4, 3], Direction.down, 'kubejs:bearing')
          scene.world.stallBeltItem(beltItem, false)
        }
        function rotate(scene, Section) {
          scene.world.modifyTileNBT([4, 6, 3], (nbt) => {
            nbt.Running = 0
          })
          scene.world.removeItemsFromBelt([4, 4, 2])
          scene.world.flapFunnel([4, 5, 2], false)
          scene.world.modifyBlock([3, 5, 1], state => state.with("powered", "true"), false)
          scene.world.modifyBlock([3, 5, 2], state => state.with("powered", "true"), false)
          scene.world.modifyBlock([2, 2, 3], state => state.with("powered", "true"), false)
          scene.world.modifyBlock([2, 2, 4], state => state.with("state", "1"), false)
          scene.world.rotateBearing([4, 2, 4], 180, 20)
          scene.world.rotateSection(Section, 0, 180, 0, 20)

          scene.world.modifyTileNBT([4, 1, 4], (nbt) => {
            nbt.Speed = -32
          })
          scene.world.modifyTileNBT([3, 2, 4], (nbt) => {
            nbt.Speed = -32
          })
          scene.world.modifyTileNBT([3, 1, 4], (nbt) => {
            nbt.Speed = 32
          })
          scene.idle(10)
          scene.world.modifyBlock([3, 5, 1], state => state.with("powered", "false"), false)
          scene.world.modifyBlock([3, 5, 2], state => state.with("powered", "false"), false)
          scene.world.modifyBlock([2, 2, 3], state => state.with("powered", "false"), false)
          scene.idle(10)
          scene.world.modifyTileNBT([4, 1, 4], (nbt) => {
            nbt.Speed = 0
          })
          scene.world.modifyTileNBT([3, 2, 4], (nbt) => {
            nbt.Speed = 0
          })
          scene.world.modifyTileNBT([3, 1, 4], (nbt) => {
            nbt.Speed = 0
          })
          scene.world.modifyBlock([2, 2, 4], state => state.with("state", "0"), false)
          scene.world.createItemOnBelt([4, 4, 6], Direction.south, "kubejs:incomplete_bearing")
          scene.world.flapFunnel([4, 5, 6], false)
        }
        scene.world.modifyTileNBT([4, 6, 5], (nbt) => {
          nbt.HeldItem = { Count: 64, id: "create:zinc_nugget" }
        })
        scene.idle(6)
        scene.world.showSection([0, 6, 0, 8, 6, 8], Direction.down)
        scene.idle(6)
        scene.world.showSection([0, 7, 0, 8, 7, 8], Direction.down)
        scene.idle(6)
        scene.world.showSection([0, 8, 0, 8, 8, 8], Direction.down)
        scene.idle(20)

        scene.addKeyframe()
        scene.showControls(20, [4.5, 5.5, 8.5], "down").withItem("kubejs:incomplete_bearing");
        scene.overlay.showOutline("green", { "glue": true }, [4, 5, 8], 40)
        scene.world.flapFunnel([4, 5, 8], false)
        scene.world.removeItemsFromBelt([4, 4, 8])
        scene.world.createItemOnBelt([4, 4, 6], Direction.south, "kubejs:incomplete_bearing")
        scene.world.flapFunnel([4, 5, 6], false)
        scene.idle(22)
        deploying(scene)
        scene.idle(15)
        filling(scene)
        scene.idle(12)
        pressing(scene)
        scene.idle(15)
        rotate(scene, Section)
        scene.idle(22)
        scene.addKeyframe()
        scene.rotateCameraY(180)
        deploying(scene)
        scene.idle(15)
        filling(scene)
        scene.idle(12)
        pressing(scene)
        scene.idle(15)
        rotate(scene, Section)
        scene.idle(22)
        deploying(scene)
        scene.addKeyframe()
        scene.rotateCameraY(140)
        scene.idle(15)
        filling(scene)
        scene.idle(12)
        pressed(scene)
        scene.idle(15)
        scene.world.removeItemsFromBelt([4, 4, 2])
        scene.world.flapFunnel([4, 5, 2], false)
        scene.world.flapFunnel([4, 5, 0], false)
        scene.showControls(20, [4.5, 3.5, 0.5], "up").withItem("kubejs:bearing")
        scene.overlay.showOutline("green", { "glue": true }, [4, 3, 0], 40)
        scene.idle(40)
        scene.rotateCameraY(40)
        scene.idle(20)
        scene.addKeyframe()
        scene.text(40, "序列组装是一种重要的加工方式")
        scene.idle(60)
        scene.text(80, "它通过将一个起始物品进行一系列处理(装配、辊压、切割等)的方式得到最终产物", [4, 4, 4])
        scene.idle(120)
        scene.addKeyframe()
        scene.text(40, "这是一个生产滚珠轴承的序列组装产线", [4, 4, 4])
        scene.idle(60)
        scene.text(60, "它包含了一个序列组装产线所需的大部分内容", [4, 4, 4])
        scene.idle(80)
        scene.addKeyframe()
        scene.rotateCameraY(140)
        scene.text(160, "一个带有防卡带系统的输入口", [3, 5, 7])
        scene.idle(80)
        scene.rotateCameraY(100)
        scene.idle(20)
        scene.text(60, "一个能过滤产物的输出口", [4, 6, 0])
        scene.idle(80)
        scene.rotateCameraY(-20)
        scene.text(140, "用于进行循环装配的转盘(你也可以使用回旋传送带或者弹射置物台等方式实现循环)", [4, 3, 4])
        scene.idle(80)
        scene.text(60, "还有用于控制转盘的检测装置", [3, 6, 1])
        scene.idle(80)
        scene.rotateCameraY(80)
        scene.idle(40)
        scene.text(100, "以及图中没有展示，但可能用到的废料过滤装置", [5, 6, 1])
        scene.idle(120)
        scene.rotateCameraY(60)
        scene.addKeyframe()
        scene.text(80, "使用转盘进行装配并不会让你的产线变得更有效率")
        scene.idle(120)
        scene.rotateCameraY(120)
        scene.text(80, "...但会让你的产线变帅 ewe")
        scene.idle(120)
        scene.rotateCameraY(120)
        scene.idle(120)
        scene.rotateCameraY(120)
      }
    )
})