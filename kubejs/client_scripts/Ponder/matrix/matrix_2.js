Ponder.registry((event) => {
  event
    .create(["kubejs:matrix_2"])
    .tag("kubejs:matrix")
    .scene(
      "kubejs:matrix_2",
      "信息素与矩阵",
      "kubejs:matrix",
      (scene, utils) => {
        scene.setSceneOffsetY(-1)
        scene.rotateCameraY(22.5);
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(9);
        scene.idle(20)
        scene.text(60, "信息素是一类与众不同的独特物质，它以自身独特的空间结构来传递信息").attachKeyFrame();
        scene.idle(80)
        scene.text(80, "信息素的空间结构可以分为许多个相位，每一个相位的结构可以使用一个2x2的矩阵来表示").attachKeyFrame();
        scene.idle(20)
        scene.text(30, "R相", [1.5, 4.5, 3.5])
        scene.overlay.showOutline("red", {}, [1, 4, 3], 30);
        scene.overlay.showLine("red", [4, 5, 3], [2, 5, 3], 10)
        scene.overlay.showLine("red", [4, 5, 4], [2, 5, 4], 10)
        scene.overlay.showLine("red", [4, 2, 3], [2, 4, 3], 10)
        scene.overlay.showLine("red", [4, 2, 4], [2, 4, 4], 10)
        scene.overlay.showOutline("red", {}, [6, 4, 3, 4, 2, 3], 10);
        display([[1, 0], [0, 1]])
        scene.idle(20)
        scene.text(30, "G相", [1.5, 3.5, 3.5])
        scene.overlay.showOutline("green", {}, [1, 3, 3], 30);
        scene.overlay.showLine("green", [4, 5, 3], [2, 4, 3], 10)
        scene.overlay.showLine("green", [4, 5, 4], [2, 4, 4], 10)
        scene.overlay.showLine("green", [4, 2, 3], [2, 3, 3], 10)
        scene.overlay.showLine("green", [4, 2, 4], [2, 3, 4], 10)
        scene.overlay.showOutline("green", {}, [6, 4, 3, 4, 2, 3], 10);
        display([[0, 1], [0, 1]])
        scene.idle(20)
        scene.text(30, "B相", [1.5, 2.5, 3.5])
        scene.overlay.showOutline("blue", {}, [1, 2, 3], 30);
        scene.overlay.showLine("blue", [4, 5, 3], [2, 3, 3], 10)
        scene.overlay.showLine("blue", [4, 5, 4], [2, 3, 4], 10)
        scene.overlay.showLine("blue", [4, 2, 3], [2, 2, 3], 10)
        scene.overlay.showLine("blue", [4, 2, 4], [2, 2, 4], 10)
        scene.overlay.showOutline("blue", {}, [6, 4, 3, 4, 2, 3], 10);
        display([[1, 0], [1, 0]])
        scene.idle(20)
        scene.text(30, "其它相", [1.5, 1.5, 3.5])
        scene.overlay.showOutline("white", {}, [1, 1, 3], 30);
        display([["00", "00"], ["00", "00"]])
        scene.idle(40)

        scene.idle(20)
        display([[1, 0], [0, 1]])
        scene.text(60, "矩阵是由一系列元素排列成的m行n列的矩形列表").attachKeyFrame();
        scene.overlay.showOutline("fast", {}, [6, 4, 3, 4, 2, 3], 30);
        scene.text(30, "2行2列", [5.5, 3.5, 3.5])
        scene.idle(80)
        scene.text(60, "可以使用第i行第j列的方式来定位其中的元素").attachKeyFrame();
        scene.idle(20)
        scene.overlay.showOutline("slow", {}, [6, 4, 3, 4, 4, 3], 30);
        scene.text(30, "第 1 行", [4.5, 4.5, 3.5])
        scene.idle(10)
        scene.overlay.showOutline("slow", {}, [6, 2, 3, 4, 2, 3], 30);
        scene.text(30, "第 2 行", [4.5, 2.5, 3.5])
        scene.idle(40)
        scene.overlay.showOutline("fast", {}, [6, 4, 3, 6, 2, 3], 30);
        scene.text(30, "第 1 列", [6.5, 4.5, 3.5])
        scene.idle(10)
        scene.overlay.showOutline("fast", {}, [4, 4, 3, 4, 2, 3], 30);
        scene.text(30, "第 2 列", [4.5, 2.5, 3.5])
        scene.idle(40)
        scene.overlay.showOutline("medium", {}, [4, 4, 3], 30);
        scene.text(30, "第1行第2列为0", [4.5, 4.5, 3.5])
        scene.idle(10)
        scene.overlay.showOutline("medium", {}, [6, 2, 3], 30);
        scene.text(30, "第2行第1列为0", [6.5, 2.5, 3.5])
        scene.idle(60)

        
        scene.text(60, "矩阵中的元素可以是任意类型的，不过对于信息素而言，我们只用数字来表示其结构").attachKeyFrame();
        scene.idle(80)

        scene.text(60, "对于信息素而言，前三个相位具有特别的作用").attachKeyFrame();
        scene.text(30, "R相决定其红色倾向", [1.5, 4.5, 3.5])
        scene.overlay.showOutline("red", {}, [1, 4, 3], 30);
        scene.idle(10)
        scene.text(30, "G相决定其绿色倾向", [1.5, 3.5, 3.5])
        scene.overlay.showOutline("green", {}, [1, 3, 3], 30);
        display([[0, 1], [0, 1]])
        scene.idle(10)
        scene.text(30, "B相决定其蓝色倾向", [1.5, 2.5, 3.5])
        scene.overlay.showOutline("blue", {}, [1, 2, 3], 30);
        display([[1, 0], [1, 0]])
        scene.idle(60)
        scene.text(60, "而其它的相并没有单独的名字").attachKeyFrame();
        display([["00", "00"], ["00", "00"]])
        scene.idle(80)

        function display(text) {
          scene.world.modifyTileNBT([6, 4, 3], (nbt) => {
            nbt.CustomText = '{"text":"' + text[0][0].toString().padStart(2, " ") + '"}'
            nbt.RawCustomText = '{"text":"' + text[0][0].toString().padStart(2, " ") + '"}'
          })
          scene.world.modifyTileNBT([4, 4, 3], (nbt) => {
            nbt.CustomText = '{"text":"' + text[0][1].toString().padStart(2, " ") + '"}'
            nbt.RawCustomText = '{"text":"' + text[0][1].toString().padStart(2, " ") + '"}'
          })
          scene.world.modifyTileNBT([6, 2, 3], (nbt) => {
            nbt.CustomText = '{"text":"' + text[1][0].toString().padStart(2, " ") + '"}'
            nbt.RawCustomText = '{"text":"' + text[1][0].toString().padStart(2, " ") + '"}'
          })
          scene.world.modifyTileNBT([4, 2, 3], (nbt) => {
            nbt.CustomText = '{"text":"' + text[1][1].toString().padStart(2, " ") + '"}'
            nbt.RawCustomText = '{"text":"' + text[1][1].toString().padStart(2, " ") + '"}'
          })
        }
      }
    )
    .scene(
      "kubejs:matrix_addition",
      "矩阵加法",
      "kubejs:matrix_multiplication",
      (scene, utils) => {
        scene.setSceneOffsetY(-2)
        scene.scaleSceneView(0.75);
        scene.rotateCameraY(22.5);
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(9);
        scene.idle(20)
        scene.text(60, "首先我们来看看矩阵的加法，以A+B=C举例：").attachKeyFrame();
        scene.idle(20)
        scene.text(40, "矩阵A", [6.5, 6.5, 4.5])
        scene.overlay.showOutline("green", {}, [5, 5, 4, 7, 7, 5], 50);
        scene.idle(20)
        scene.text(40, "矩阵B", [2.5, 5.5, 4.5])
        scene.overlay.showOutline("blue", {}, [1, 5, 4, 3, 7, 5], 30);
        scene.idle(60)

        scene.text(60, "在此之前，矩阵A的大小必须与矩阵B的大小相同，否则不能相加").attachKeyFrame();
        scene.idle(20)
        scene.text(40, "2行2列", [6.5, 6.5, 4.5])
        scene.idle(20)
        scene.text(40, "2行2列", [2.5, 5.5, 4.5])
        scene.idle(60)


        function display(text) {
          scene.world.modifyTileNBT([2, 2, 0, 6, 2, 0], (nbt) => {
            nbt.CustomText = '{"text":"' + text.padStart(10, " ") + '"}'
            nbt.RawCustomText = '{"text":"' + text.padStart(10, " ") + '"}'
          })
        }
        function displayC(j, i, text) {
          scene.world.modifyTileNBT([9 - 4 * i, 5 - 2 * j, 4, 11 - 4 * i, 5 - 2 * j, 4], (nbt) => {
            nbt.CustomText = '{"text":"' + text.padStart(6, " ") + '"}'
            nbt.RawCustomText = '{"text":"' + text.padStart(6, " ") + '"}'
          })
        }
        scene.text(80, "在做加法时，依次将A的元素与B的元素对应相加即可得到C的对应元素！").attachKeyFrame();
        scene.idle(20)
        scene.overlay.showOutline("blue", {}, [7, 7, 4, 7, 7, 5], 20);
        display("a")
        scene.idle(10)
        scene.overlay.showOutline("blue", {}, [3, 7, 4, 3, 7, 5], 20);
        display("a+A")
        scene.idle(30)
        scene.overlay.showLine("red", [4.5, 2.5, 0.5], [6, 3, 4], 30)
        displayC(1, 1, "a+A")
        display(" ")
        scene.overlay.showOutline("red", {}, [5, 3, 4, 7, 3, 4], 30);
        scene.idle(50)

        scene.addKeyframe()
        scene.overlay.showOutline("blue", {}, [7, 5, 4, 7, 5, 5], 20);
        display("c")
        scene.idle(10)
        scene.overlay.showOutline("blue", {}, [3, 5, 4, 3, 5, 5], 20);
        display("c+C")
        scene.idle(30)
        displayC(2, 1, "c+C")
        display(" ")
        scene.overlay.showLine("red", [4.5, 2.5, 0.5], [6, 1, 4], 30)
        scene.overlay.showOutline("red", {}, [5, 1, 4, 7, 1, 4], 30);
        scene.idle(50)

        scene.addKeyframe()
        scene.overlay.showOutline("blue", {}, [5, 7, 4, 5, 7, 5], 20);
        display("b")
        scene.idle(10)
        scene.overlay.showOutline("blue", {}, [1, 7, 4, 1, 7, 5], 20);
        display("b+B")
        scene.idle(30)
        displayC(1, 2, "b+B")
        display(" ")
        scene.overlay.showLine("red", [4.5, 2.5, 0.5], [2, 3, 4], 30)
        scene.overlay.showOutline("red", {}, [1, 3, 4, 3, 3, 4], 30);
        scene.idle(50)

        scene.addKeyframe()
        scene.overlay.showOutline("blue", {}, [5, 5, 4, 5, 5, 5], 20);
        display("d")
        scene.idle(10)
        scene.overlay.showOutline("blue", {}, [1, 5, 4, 1, 5, 5], 20);
        display("d+D")
        scene.idle(30)
        displayC(2, 2, "d+D")
        display(" ")
        scene.overlay.showLine("red", [4.5, 2.5, 0.5], [2, 1, 4], 30)
        scene.overlay.showOutline("red", {}, [1, 1, 4, 3, 1, 4], 30);
        scene.idle(50)
      }
    )
    .scene(
      "kubejs:matrix_multiplication",
      "矩阵乘法",
      "kubejs:matrix_multiplication",
      (scene, utils) => {
        scene.setSceneOffsetY(-2)
        scene.scaleSceneView(0.75);
        scene.rotateCameraY(22.5);
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(9);
        scene.idle(20)
        scene.text(60, "下面我们来看看矩阵的乘法，以A·B=C举例：").attachKeyFrame();
        scene.idle(20)
        scene.text(40, "矩阵A", [6.5, 6.5, 4.5])
        scene.overlay.showOutline("green", {}, [5, 5, 4, 7, 7, 5], 50);
        scene.idle(20)
        scene.text(40, "矩阵B", [2.5, 5.5, 4.5])
        scene.overlay.showOutline("blue", {}, [1, 5, 4, 3, 7, 5], 30);
        scene.idle(60)

        scene.text(60, "在此之前，矩阵A的列数必须与矩阵B的行数相同，否则不能相乘").attachKeyFrame();
        scene.idle(20)
        scene.text(40, "2列", [6.5, 6.5, 4.5])
        scene.overlay.showOutline("green", {}, [5, 5, 4, 5, 7, 5], 50);
        scene.overlay.showOutline("green", {}, [7, 5, 4, 7, 7, 5], 50);
        scene.idle(20)
        scene.text(40, "2行", [2.5, 5.5, 4.5])
        scene.overlay.showOutline("blue", {}, [1, 5, 4, 3, 5, 5], 30);
        scene.overlay.showOutline("blue", {}, [1, 7, 4, 3, 7, 5], 30);
        scene.idle(60)

        scene.text(80, "在做乘法时，依次将A的第i行上的元素与B的第j列上的元素相乘").attachKeyFrame();

        function display(text) {
          scene.world.modifyTileNBT([2, 2, 0, 6, 2, 0], (nbt) => {
            nbt.CustomText = '{"text":"' + text.padStart(10, " ") + '"}'
            nbt.RawCustomText = '{"text":"' + text.padStart(10, " ") + '"}'
          })
        }
        function displayC(j, i, text) {
          scene.world.modifyTileNBT([9 - 4 * i, 5 - 2 * j, 4, 11 - 4 * i, 5 - 2 * j, 4], (nbt) => {
            nbt.CustomText = '{"text":"' + text.padStart(6, " ") + '"}'
            nbt.RawCustomText = '{"text":"' + text.padStart(6, " ") + '"}'
          })
        }
        scene.idle(20)
        scene.text(30, "A的第1行", [6.5, 6.5, 4.5])
        scene.overlay.showOutline("green", {}, [5, 7, 4, 7, 7, 5], 50);
        scene.idle(20)
        scene.text(30, "B的第1列", [2.5, 5.5, 4.5])
        scene.overlay.showOutline("green", {}, [3, 5, 4, 3, 7, 5], 30);
        scene.idle(50)


        scene.overlay.showOutline("blue", {}, [7, 7, 4, 7, 7, 5], 20);
        display("a")
        scene.idle(10)
        scene.overlay.showOutline("blue", {}, [3, 7, 4, 3, 7, 5], 20);
        display("aA")
        scene.idle(30)

        scene.overlay.showOutline("blue", {}, [5, 7, 4, 5, 7, 5], 20);
        display("aA+b")
        scene.idle(10)
        scene.overlay.showOutline("blue", {}, [3, 5, 4, 3, 5, 5], 20);
        display("aA+bC")
        scene.idle(30)

        scene.text(60, "如此便得到了矩阵C第i行第j列的元素").attachKeyFrame();
        displayC(1, 1, "aA+bC")
        display(" ")
        scene.overlay.showLine("red", [4.5, 2.5, 0.5], [6, 3, 4], 30)
        scene.overlay.showOutline("red", {}, [5, 3, 4, 7, 3, 4], 30);
        scene.idle(80)


        scene.text(60, "以此类推...").attachKeyFrame();
        scene.text(30, "A的第2行", [6.5, 5.5, 4.5])
        scene.overlay.showOutline("green", {}, [5, 5, 4, 7, 5, 5], 50);
        scene.idle(20)
        scene.text(30, "B的第1列", [2.5, 5.5, 4.5])
        scene.overlay.showOutline("green", {}, [3, 5, 4, 3, 7, 5], 30);
        scene.idle(50)

        scene.overlay.showOutline("blue", {}, [7, 5, 4, 7, 5, 5], 20);
        display("c")
        scene.idle(10)
        scene.overlay.showOutline("blue", {}, [3, 7, 4, 3, 7, 5], 20);
        display("cA")
        scene.idle(30)

        scene.overlay.showOutline("blue", {}, [5, 5, 4, 5, 5, 5], 20);
        display("cA+d")
        scene.idle(10)
        scene.overlay.showOutline("blue", {}, [3, 5, 4, 3, 5, 5], 20);
        display("cA+dC")
        scene.idle(30)

        displayC(2, 1, "cA+dC")
        display(" ")
        scene.overlay.showLine("red", [4.5, 2.5, 0.5], [6, 1, 4], 30)
        scene.overlay.showOutline("red", {}, [5, 1, 4, 7, 1, 4], 30);
        scene.idle(80)


        scene.addKeyframe()
        scene.text(30, "A的第1行", [6.5, 6.5, 4.5])
        scene.overlay.showOutline("green", {}, [5, 7, 4, 7, 7, 5], 50);
        scene.idle(20)
        scene.text(30, "B的第2列", [1.5, 5.5, 4.5])
        scene.overlay.showOutline("green", {}, [1, 5, 4, 1, 7, 5], 30);
        scene.idle(50)

        scene.overlay.showOutline("blue", {}, [7, 7, 4, 7, 7, 5], 20);
        display("a")
        scene.idle(10)
        scene.overlay.showOutline("blue", {}, [1, 7, 4, 1, 7, 5], 20);
        display("aB")
        scene.idle(30)

        scene.overlay.showOutline("blue", {}, [5, 7, 4, 5, 7, 5], 20);
        display("aB+b")
        scene.idle(10)
        scene.overlay.showOutline("blue", {}, [1, 5, 4, 1, 5, 5], 20);
        display("aB+bD")
        scene.idle(30)

        displayC(1, 2, "aB+bD")
        display(" ")
        scene.overlay.showLine("red", [4.5, 2.5, 0.5], [2, 3, 4], 30)
        scene.overlay.showOutline("red", {}, [1, 3, 4, 3, 3, 4], 30);
        scene.idle(80)



        scene.addKeyframe()
        scene.text(30, "A的第2行", [6.5, 5.5, 4.5])
        scene.overlay.showOutline("green", {}, [5, 5, 4, 7, 5, 5], 50);
        scene.idle(20)
        scene.text(30, "B的第2列", [1.5, 5.5, 4.5])
        scene.overlay.showOutline("green", {}, [1, 5, 4, 1, 7, 5], 30);
        scene.idle(50)

        scene.overlay.showOutline("blue", {}, [7, 5, 4, 7, 5, 5], 20);
        display("c")
        scene.idle(10)
        scene.overlay.showOutline("blue", {}, [1, 7, 4, 1, 7, 5], 20);
        display("cB")
        scene.idle(30)

        scene.overlay.showOutline("blue", {}, [5, 5, 4, 5, 5, 5], 20);
        display("cB+d")
        scene.idle(10)
        scene.overlay.showOutline("blue", {}, [1, 5, 4, 1, 5, 5], 20);
        display("cB+dD")
        scene.idle(30)

        displayC(2, 2, "cB+dD")
        display(" ")
        scene.overlay.showLine("red", [4.5, 2.5, 0.5], [2, 1, 4], 30)
        scene.overlay.showOutline("red", {}, [1, 1, 4, 3, 1, 4], 30);
        scene.idle(80)

      }
    );
});