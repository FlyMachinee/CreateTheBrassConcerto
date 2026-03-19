Ponder.registry((event) => {
  event
    .create(["kubejs:infinity_fetching_pool", "kubejs:saline_water_bucket", "kubejs:cryogen_bucket", "minecraft:lava_bucket"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_infinity_fetching_pool",
      "无限取液",
      "kubejs:infinity_fetching_pool",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9)
        scene.showStructure(0)
        scene.scaleSceneView(0.8)
        scene.setSceneOffsetY(-1)
        const Layer = [[2, 1, 2], [3, 1, 2], [4, 1, 2], [5, 1, 2], [6, 1, 2], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [2, 1, 4], [3, 1, 4], [4, 1, 4], [5, 1, 4], [6, 1, 4], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [2, 1, 6], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6], [2, 2, 2], [4, 2, 2], [6, 2, 2], [4, 2, 3], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [4, 2, 5], [2, 2, 6], [4, 2, 6], [6, 2, 6], [4, 3, 2], [3, 3, 3], [4, 3, 3], [5, 3, 3], [2, 3, 4], [3, 3, 4], [4, 3, 4], [5, 3, 4], [6, 3, 4], [3, 3, 5], [4, 3, 5], [5, 3, 5], [4, 3, 6]]
        for (let i of Layer) {
          scene.world.showSection(i, Direction.down)
        }
        scene.idle(20)
        scene.addKeyframe()
        scene.text(60, "你也许已经厌倦了建造512格流体池，那么无限取液池会是你的好选择！")
        scene.idle(80)
        scene.addKeyframe()
        scene.text(60, "首先，核心附近必须修建正确的结构")
        scene.text(60, "核心位置", [4, 2, 4])
        scene.overlay.showOutline("green", {}, [4, 2, 4], 30)
        scene.idle(80)
        scene.addKeyframe()
        scene.text(60, "需要注意的是，这些位置可以使用流体储罐、流体抽屉或抽屉控制器替换！")
        scene.overlay.showOutline("green", {}, [2, 3, 4], 30)
        scene.overlay.showOutline("green", {}, [6, 3, 4], 30)
        scene.overlay.showOutline("green", {}, [4, 3, 2], 30)
        scene.overlay.showOutline("green", {}, [4, 3, 6], 30)
        scene.idle(80)
        scene.addKeyframe()
        scene.text(60, "接着，你需要向蓄电池提供的电力")
        scene.idle(40)
        scene.overlay.showOutline("green", {}, [3, 1, 3, 5, 1, 5], 60)
        scene.world.setBlock([3, 2, 3], "createaddition:creative_energy", true)
        scene.world.showSection([3, 2, 3], Direction.down)
        scene.idle(40)
        scene.addKeyframe()
        scene.text(60, "然后，你需要将对应的液体倒在核心上方2格处(大型黄铜锅炉中心上方)")
        scene.overlay.showOutline("green", {}, [4, 4, 4], 60)
        scene.showControls(15, [4, 4, 4], "up").withItem("kubejs:saline_water_bucket")
        scene.idle(30)
        scene.showControls(15, [4, 4, 4], "up").withItem("kubejs:cryogen_bucket")
        scene.idle(30)
        scene.showControls(15, [4, 4, 4], "up").withItem("minecraft:lava_bucket")
        scene.idle(30)
        scene.world.showSection([0, 4, 0, 8, 4, 8], Direction.down)
        scene.idle(20)
        scene.addKeyframe()
        scene.text(60, "关于可用的流体种类，请查看JEI")
        scene.overlay.showOutline("green", {}, [4, 4, 4], 60)
        scene.idle(80)
        scene.text(60, "此时核心会以极高的速度产出流体(一般为16 B/tick)...")
        scene.overlay.showOutline("green", {}, [4, 2, 4], 30)
        scene.idle(80)
        scene.text(60, "...并分别以20B / 5tick的速率向结构中的4个容器输出产生的流体！")
        scene.overlay.showOutline("green", {}, [2, 3, 4], 30)
        scene.overlay.showOutline("green", {}, [6, 3, 4], 30)
        scene.overlay.showOutline("green", {}, [4, 3, 2], 30)
        scene.overlay.showOutline("green", {}, [4, 3, 6], 30)
        scene.idle(80)
      }
    )
    .scene(
      "kubejs:infinity_fetching_pool",
      "建造无限取液池",
      "kubejs:infinity_fetching_pool",
      (scene, utils) => {
        scene.configureBasePlate(0, 0, 9)
        scene.showStructure(0)
        scene.scaleSceneView(0.8)
        scene.setSceneOffsetY(-1)
        const Layer = [[2, 1, 2], [3, 1, 2], [4, 1, 2], [5, 1, 2], [6, 1, 2], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [2, 1, 4], [3, 1, 4], [4, 1, 4], [5, 1, 4], [6, 1, 4], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [2, 1, 6], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6], [2, 2, 2], [4, 2, 2], [6, 2, 2], [4, 2, 3], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [4, 2, 5], [2, 2, 6], [4, 2, 6], [6, 2, 6], [4, 3, 2], [3, 3, 3], [4, 3, 3], [5, 3, 3], [2, 3, 4], [3, 3, 4], [4, 3, 4], [5, 3, 4], [6, 3, 4], [3, 3, 5], [4, 3, 5], [5, 3, 5], [4, 3, 6]]
        for (let i of Layer) {
          scene.world.showSection(i, Direction.down)
        }
        const Layer1 = [[2, 1, 2], [3, 1, 2], [4, 1, 2], [5, 1, 2], [6, 1, 2], [2, 1, 3], [3, 1, 3], [4, 1, 3], [5, 1, 3], [6, 1, 3], [2, 1, 4], [3, 1, 4], [4, 1, 4], [5, 1, 4], [6, 1, 4], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [2, 1, 6], [3, 1, 6], [4, 1, 6], [5, 1, 6], [6, 1, 6]]
        const Layer2 = [[2, 2, 2], [4, 2, 2], [6, 2, 2], [4, 2, 3], [2, 2, 4], [3, 2, 4], [4, 2, 4], [5, 2, 4], [6, 2, 4], [4, 2, 5], [2, 2, 6], [4, 2, 6], [6, 2, 6]]
        const Layer3 = [[4, 3, 2], [3, 3, 3], [4, 3, 3], [5, 3, 3], [2, 3, 4], [3, 3, 4], [4, 3, 4], [5, 3, 4], [6, 3, 4], [3, 3, 5], [4, 3, 5], [5, 3, 5], [4, 3, 6]]
        scene.text(60, "你需要在无限取液池核心附近建造结构来完成无限取液池")
        scene.idle(80)
        scene.addKeyframe()
        scene.text(30, "...建造如下结构")
        for (let i of Layer) {
          scene.world.hideSection(i, Direction.up)
        }
        scene.idle(40)
        scene.text(60, "如果你对方块种类有疑问，可以点击放大镜图标")
        scene.idle(80)
        scene.addKeyframe()
        scene.text(30, "第 1 层：", [3, 1, 3])
        for (let i of Layer1) {
          scene.idle(1)
          scene.world.showSection(i, Direction.down)
        }
        scene.idle(48)
        scene.addKeyframe()
        scene.text(30, "第 2 层：", [3, 2, 3])
        for (let i of Layer2) {
          scene.idle(2)
          scene.world.showSection(i, Direction.down)
        }
        scene.idle(40)
        scene.text(40, "核心在此（朝向任意！）", [4, 2, 4])
        scene.overlay.showOutline("green", {}, [4, 2, 4], 40)
        scene.idle(60)
        scene.addKeyframe()
        scene.text(40, "第 3 层：", [3, 3, 3])
        for (let i of Layer3) {
          scene.idle(2)
          scene.world.showSection(i, Direction.down)
        }
        scene.idle(60)
      }
    )
})