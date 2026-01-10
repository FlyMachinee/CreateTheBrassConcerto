CreateEvents.spoutHandler((event) => {
    /**
    * @param {number} i 坐标1
    * @param {number} j 坐标2
    * @param {number} k 坐标3
    */
    //
    function countCell(matrix, i, j, k) {
        let imin = Math.max(1, i - 1)
        let jmin = Math.max(1, j - 1)
        let kmin = Math.max(1, k - 1)
        let imax = Math.min(3, i + 1)
        let jmax = Math.min(3, j + 1)
        let kmax = Math.min(3, k + 1)
        for (let i1 = imin; i1 <= imax; i1++) {
            for (let i2 = jmin; i2 <= jmax; i2++) {
                for (let i3 = kmin; i3 <= kmax; i3++) {
                    matrix[i1][i2][i3] += 1
                }
            }
        }
        matrix[i][j][k] -= 1
    }
    /**
    * @param {Block} block block
    * @param {number} dy 中心坐标
    * @param {string} blockAid 细胞种类A-菌盖
    * @param {string} blockBid 细胞种类B-菌柄
    * @param {number} AoverB A:B的理想值
    */
    //在(0,dy,0)周围3*3*3范围运行魔改版康威生命游戏
    function slimes3dConway(block, dy, blockAid, blockBid, AOverB) {
        let A = Array(5).fill().map(() => Array(5).fill().map(() => Array(5).fill(0)))
        let B = Array(5).fill().map(() => Array(5).fill().map(() => Array(5).fill(0)))
        let Cell = Array(5).fill().map(() => Array(5).fill().map(() => Array(5).fill(0)))
        //获取5*5*5的方块种类,生成四个矩阵，BlockList:表示此处方块种类，A：表示每个点位周围有多少A类活细胞的矩阵；B：表示每个点位周围有多少B类活细胞的矩阵；C：表示每个点位周围有多少活细胞的矩阵（A+B）
        let BlockList = Array(5).fill().map((_, x) =>
            Array(5).fill().map((_, y) =>
                Array(5).fill().map((_, z) => {
                    let blockid = block.offset(x - 2, dy + y - 2, z - 2).id
                    if (blockid == "minecraft:air") return 0
                    if (blockid == blockAid) {
                        countCell(A, x, y, z)
                        countCell(Cell, x, y, z)
                        return 1
                    }
                    if (blockid == blockBid) {
                        countCell(B, x, y, z)
                        countCell(Cell, x, y, z)
                        return 2
                    }
                    return -1
                }
                )
            )
        )
        //遍历CenterBlock做判断，根据该点方块种类以及ABC的取值决定该点位的方块变化
        for (let i1 = 1; i1 < 4; i1++) {
            for (let i2 = 1; i2 < 4; i2++) {
                for (let i3 = 1; i3 < 4; i3++) {
                    let blocktype = BlockList[i1][i2][i3]
                    let cell = Cell[i1][i2][i3]
                    let a = A[i1][i2][i3]
                    let b = B[i1][i2][i3]
                    let aOverb = b == 0 ? AOverB + 1 : Math.round(a / b)
                    //判断该点方块种类
                    switch (blocktype) {
                        //为空气
                        case 0:
                            if (5 < cell && cell < 13) {
                                //如果周围有6~12个活细胞则变为活细胞，A多有75%变为A，B多有75%变为B
                                if (a > b && Math.random() >= 0.75) {
                                    block.offset(i1 - 2, dy + i2 - 2, i3 - 2).set(blockAid)
                                    break
                                }
                                if (a < b && Math.random() <= 0.25) {
                                    block.offset(i1 - 2, dy + i2 - 2, i3 - 2).set(blockAid)
                                    break
                                }
                                block.offset(i1 - 2, dy + i2 - 2, i3 - 2).set(blockBid)
                            }
                            break
                        //为方块A
                        case 1:
                            //如果周围活细胞小于3或大于8则死亡，否则，若B不足则有一半可能变为B
                            if (cell < 3 || cell > 8) {
                                block.offset(i1 - 2, dy + i2 - 2, i3 - 2).set("minecraft:air")
                            }
                            else if (aOverb > AOverB && Math.random() >= 0.5) {
                                block.offset(i1 - 2, dy + i2 - 2, i3 - 2).set(blockBid)
                            }
                            break
                        //为方块B
                        case 2:
                            //如果周围活细胞小于3或大于8则死亡，否则，若A不足则有一半可能变为A
                            if (cell < 3 || cell > 8) {
                                block.offset(i1 - 2, dy + i2 - 2, i3 - 2).set("minecraft:air")
                            }
                            else if (aOverb < AOverB && Math.random() >= 0.5) {
                                block.offset(i1 - 2, dy + i2 - 2, i3 - 2).set(blockAid)
                            }
                            break
                        //为其它方块则跳过
                    }
                }
            }
        }
    }
    /**
    * @param {string} id 配方id
    * @param {string} blockID 方块id,可以是列表和标签
    * @param {object} fluidInput 输入流体的种类及数量，一个形如{id:"xxx",amount:xxx}的对象
    * @param {Array} output ["菌盖","菌柄"]
    * @param {number} AoverB 菌盖:菌柄的理想值
    */
    //方块注液-康威
    function blockFillingConway(id, blockID, fluidInput, output, AoverB) {
        event.add(
            id,
            blockID,
            (block, fluid, simulate) => {
                if (fluid.id == fluidInput.id && fluid.amount >= fluidInput.amount && block.y >= -59) {
                    if (!simulate) {
                        slimes3dConway(block, -3, output[0], output[1], AoverB)
                        block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                        block.level.server.runCommandSilent(`/particle minecraft:spore_blossom_air ${block.pos.x} ${block.pos.y - 3} ${block.pos.z} 0.75 0.75 0.75 0.3 8`)
                    }
                    return 50
                }
                return 0;
            }
        )
    }
    blockFillingConway("dut_create:red_mushroom", "minecraft:moss_block", { id: "kubejs:red_mushroom_spore", amount: 250 }, ["minecraft:red_mushroom_block", "minecraft:mushroom_stem"], 6)
    blockFillingConway("dut_create:brown_mushroom", "minecraft:packed_mud", { id: "kubejs:brown_mushroom_spore", amount: 250 }, ["minecraft:brown_mushroom_block", "minecraft:mushroom_stem"], 4)
    blockFillingConway("dut_create:aeronos", "ad_astra:conglomerate", { id: "kubejs:aeronos_spore", amount: 250 }, ["ad_astra:aeronos_cap", "ad_astra:aeronos_stem"], 5)
    blockFillingConway("dut_create:strophar", "ad_astra:sky_stone", { id: "kubejs:strophar_spore", amount: 250 }, ["ad_astra:strophar_cap", "ad_astra:strophar_stem"], 3)
})