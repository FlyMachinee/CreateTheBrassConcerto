Ponder.registry((event) => {
  event
    .create(["kubejs:electrolytic_cell"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_electrolytic_cell",
      "使用大型电解池",
      "kubejs:electrolytic_cell",
      (scene, utils) => {
        const Layer = [[1, 1, 2], [2, 1, 2], [3, 1, 2], [4, 1, 2], [5, 1, 2], [6, 1, 2], [7, 1, 2], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [2, 1, 4], [3, 1, 4], [4, 1, 4], [5, 1, 4], [6, 1, 4], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [1, 1, 6], [2, 1, 6], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6], [7, 1, 6], [2, 1, 7], [3, 1, 7], [4, 1, 7], [5, 1, 7], [6, 1, 7], [1, 2, 2], [2, 2, 2], [6, 2, 2], [7, 2, 2], [1, 2, 3], [2, 2, 3], [3, 2, 3], [4, 2, 3], [5, 2, 3], [6, 2, 3], [7, 2, 3], [1, 2, 4], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [7, 2, 4], [1, 2, 5], [2, 2, 5], [3, 2, 5], [4, 2, 5], [5, 2, 5], [6, 2, 5], [7, 2, 5], [1, 2, 6], [2, 2, 6], [3, 2, 6], [4, 2, 6], [5, 2, 6], [6, 2, 6], [7, 2, 6], [2, 2, 7], [6, 2, 7], [4, 3, 3], [1, 3, 4], [3, 3, 4], [4, 3, 4], [5, 3, 4], [7, 3, 4], [4, 3, 5], [2, 3, 6], [6, 3, 6], [4, 4, 3], [1, 4, 4], [2, 4, 4], [3, 4, 4], [4, 4, 4], [5, 4, 4], [6, 4, 4], [7, 4, 4], [1, 5, 4], [2, 5, 4], [3, 5, 4], [4, 5, 4], [5, 5, 4], [6, 5, 4], [7, 5, 4], [1, 6, 4], [4, 6, 4], [7, 6, 4], [4, 6, 5], [1, 7, 4], [3, 7, 4], [4, 7, 4], [5, 7, 4], [7, 7, 4], [1, 8, 4], [4, 8, 4], [7, 8, 4], [1, 9, 4], [4, 9, 4], [7, 9, 4],]
        scene.configureBasePlate(0, 0, 9)
        scene.showStructure(0)
        for (let i of Layer) {
          scene.world.showSection(i, Direction.down)
        }
        scene.scaleSceneView(0.7)
        scene.setSceneOffsetY(-2)
        scene.idle(20)
        scene.addKeyframe()
        scene.text(60, "你是否苦恼于电解器在大量生产时低下的效率？那么大型电解池是你的最佳选择！")
        scene.idle(80)
        scene.addKeyframe()
        scene.text(60, "首先，大型电解池核心周围必须建造正确的结构")
        scene.idle(20)
        scene.text(60, "请注意核心朝向!", [4, 7, 4])
        scene.overlay.showOutline("green", {}, [4, 7, 4], 30)
        scene.idle(80)
        scene.addKeyframe()
        scene.text(60, "接着，通过结构中的蓄电池为核心提供电力")
        scene.idle(10)
        scene.overlay.showOutline("green", {}, [1, 8, 4, 1, 9, 4], 60)
        scene.showControls(15, [1, 9, 4], "up").withItem("createaddition:connector")
        scene.idle(10)
        scene.overlay.showOutline("green", {}, [4, 7, 4], 60)
        scene.showControls(15, [4, 7, 4], "up").withItem("createaddition:connector")
        scene.idle(10)
        scene.overlay.showOutline("green", {}, [7, 8, 4, 7, 9, 4], 60)
        scene.showControls(15, [7, 9, 4], "up").withItem("createaddition:connector")
        scene.idle(30)
        scene.rotateCameraY(-165)
        scene.idle(20)
        scene.addKeyframe()
        scene.text(60, "核心将从结构中的对应储罐提取合适的原料！")
        scene.idle(20)
        scene.text(60, "左侧提取阳极反应物(比如N2+2O2==2NO2中的O2)", [1, 5, 4])
        scene.overlay.showOutline("green", {}, [1, 4, 4, 1, 6, 4], 30)
        scene.idle(20)
        scene.text(40, "右侧提取阴极反应物(比如N2+2O2==2NO2中的N2)", [7, 5, 4])
        scene.overlay.showOutline("green", {}, [7, 4, 4, 7, 6, 4], 30)
        scene.idle(40)
        scene.addKeyframe()
        scene.text(60, "在输入所需材料之后...")
        scene.idle(20)
        scene.showControls(15, [7, 5, 4], "up").withItem('kubejs:muriatic_acid_bucket')
        scene.world.modifyTileNBT([7, 4, 4], (nbt) => {
          nbt.TankContent = { Amount: 96000, FluidName: "kubejs:muriatic_acid" }
        })
        scene.overlay.showOutline("green", {}, [7, 4, 4, 7, 6, 4], 30)
        scene.text(360, "阴极", [7, 5, 4])
        scene.idle(20)
        scene.overlay.showOutline("green", {}, [1, 4, 4, 1, 6, 4], 30)
        scene.text(340, "阳极", [1, 5, 4])
        scene.rotateCameraY(-45)
        scene.idle(40)
        scene.addKeyframe()
        scene.text(60, "...阴极产物将从右侧排出(如果有的话)")
        scene.overlay.showOutline("green", {}, [7, 2, 3, 7, 2, 5], 30)
        scene.idle(20)
        scene.world.modifyTileNBT([7, 2, 3], (nbt) => {
          nbt.TankContent = { Amount: 96000, FluidName: "kubejs:hydrogen" }
        })
        scene.idle(40)
        scene.rotateCameraY(90)
        scene.idle(20)
        scene.addKeyframe()
        scene.text(60, "...副产物将从后侧排出(如果有的话)")
        scene.overlay.showOutline("green", {}, [3, 1, 7, 5, 1, 7], 30)
        scene.idle(20)
        scene.world.modifyTileNBT([3, 1, 7], (nbt) => {
          nbt.TankContent = { Amount: 96000, FluidName: "kubejs:chlorine" }
        })
        scene.idle(40)
        scene.rotateCameraY(90)
        scene.idle(20)
        scene.addKeyframe()
        scene.text(60, "...阳极产物将从左侧排出(如果有的话)")
        scene.overlay.showOutline("green", {}, [1, 2, 3, 1, 2, 5], 30)
        scene.idle(60)
        scene.rotateCameraY(45)
        scene.idle(20)
        scene.addKeyframe()
        scene.text(60, "如果对应电极有流体产出/输入，电极可能会在配方开始时损坏(电解水除外，具体概率见JEI)")
        scene.idle(20)
        scene.overlay.showOutline("red", {}, [1, 7, 4], 30)
        scene.overlay.showOutline("red", {}, [7, 7, 4], 30)
        scene.idle(20)
        scene.world.setBlock([7, 7, 4], "minecraft:air", true)
        scene.idle(40)
        scene.text(60, "此时你需要重新安装新的电极。机械手可以为你代劳")
        scene.overlay.showOutline("green", {}, [7, 7, 4], 30)
        scene.idle(20)
        scene.showControls(15, [7, 7, 4], "up").withItem("kubejs:carbon_electrode")
        scene.idle(20)
        scene.world.setBlock([7, 7, 4], "kubejs:carbon_electrode", true)
        scene.idle(40)
        scene.addKeyframe()
        scene.text(60, "在不破坏原有结构的情况下，你可以自由搭建其它结构")
        scene.idle(30)
      }
    )
    .scene(
      "kubejs:electrolytic_cell",
      "建造大型电解池",
      "kubejs:electrolytic_cell",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9)
        scene.showStructure(9)
        scene.scaleSceneView(0.6)
        scene.setSceneOffsetY(-2)
        scene.text(60, "你需要在大型电解池核心附近建造指定结构来完成大型电解池")
        scene.idle(80)
        scene.addKeyframe()
        scene.text(30, "...建造如下结构")
        scene.world.hideSection([0, 1, 0, 8, 9, 8], Direction.up)
        scene.idle(40)
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标")
        scene.idle(80)
        const Layer1 = [[1, 1, 2], [2, 1, 2], [3, 1, 2], [4, 1, 2], [5, 1, 2], [6, 1, 2], [7, 1, 2], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [2, 1, 4], [3, 1, 4], [4, 1, 4], [5, 1, 4], [6, 1, 4], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [1, 1, 6], [2, 1, 6], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6], [7, 1, 6], [2, 1, 7], [3, 1, 7], [4, 1, 7], [5, 1, 7], [6, 1, 7],]
        const Layer2 = [[1, 2, 2], [2, 2, 2], [6, 2, 2], [7, 2, 2], [1, 2, 3], [2, 2, 3], [3, 2, 3], [4, 2, 3], [5, 2, 3], [6, 2, 3], [7, 2, 3], [1, 2, 4], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [7, 2, 4], [1, 2, 5], [2, 2, 5], [3, 2, 5], [4, 2, 5], [5, 2, 5], [6, 2, 5], [7, 2, 5], [1, 2, 6], [2, 2, 6], [3, 2, 6], [4, 2, 6], [5, 2, 6], [6, 2, 6], [7, 2, 6], [2, 2, 7], [6, 2, 7],]
        const Layer3 = [[4, 3, 3], [1, 3, 4], [3, 3, 4], [4, 3, 4], [5, 3, 4], [7, 3, 4], [4, 3, 5], [2, 3, 6], [6, 3, 6],]
        const Layer4 = [[4, 4, 3], [1, 4, 4], [2, 4, 4], [3, 4, 4], [4, 4, 4], [5, 4, 4], [6, 4, 4], [7, 4, 4],]
        const Layer5 = [[1, 5, 4], [2, 5, 4], [3, 5, 4], [4, 5, 4], [5, 5, 4], [6, 5, 4], [7, 5, 4],]
        const Layer6 = [[1, 6, 4], [4, 6, 4], [7, 6, 4], [4, 6, 5],]
        const Layer7 = [[1, 7, 4], [3, 7, 4], [4, 7, 4], [5, 7, 4], [7, 7, 4],]
        const Layer8 = [[1, 8, 4], [4, 8, 4], [7, 8, 4],]
        const Layer9 = [[1, 9, 4], [4, 9, 4], [7, 9, 4],]
        scene.addKeyframe()
        scene.text(30, "第 1 层：", [4, 1, 3])
        for (let i of Layer1) {
          scene.idle(1)
          scene.world.showSection(i, Direction.down)
        }
        scene.idle(66)
        scene.addKeyframe()
        scene.text(30, "第 2 层：", [4, 2, 3])
        for (let i of Layer2) {
          scene.idle(1)
          scene.world.showSection(i, Direction.down)
        }
        scene.idle(66)
        scene.addKeyframe()
        scene.text(30, "第 3 层：", [4, 3, 3])
        for (let i of Layer3) {
          scene.idle(2)
          scene.world.showSection(i, Direction.down)
        }
        scene.idle(40)
        scene.addKeyframe()
        scene.text(30, "第 4 层：", [4, 4, 3])
        for (let i of Layer4) {
          scene.idle(2)
          scene.world.showSection(i, Direction.down)
        }
        scene.idle(40)
        scene.addKeyframe()
        scene.text(30, "第 5 层：", [4, 5, 3])
        for (let i of Layer5) {
          scene.idle(2)
          scene.world.showSection(i, Direction.down)
        }
        scene.idle(40)
        scene.addKeyframe()
        scene.text(30, "第 6 层：", [4, 6, 3])
        for (let i of Layer6) {
          scene.idle(2)
          scene.world.showSection(i, Direction.down)
        }
        scene.idle(40)
        scene.addKeyframe()
        scene.text(30, "第 7 层：", [4, 7, 3])
        for (let i of Layer7) {
          scene.idle(2)
          scene.world.showSection(i, Direction.down)
        }
        scene.idle(40)
        scene.addKeyframe()
        scene.text(30, "第 8 层：", [4, 8, 3])
        for (let i of Layer8) {
          scene.idle(2)
          scene.world.showSection(i, Direction.down)
        }
        scene.idle(40)
        scene.addKeyframe()
        scene.text(30, "第 9 层：", [4, 9, 3])
        for (let i of Layer9) {
          scene.idle(2)
          scene.world.showSection(i, Direction.down)
        }
        scene.idle(40)
      }
    )
})