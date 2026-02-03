CreateEvents.spoutHandler((event) => {
    //补码加法
    function add8(a, b) {
        let c = (a + b) & 0xFF
        return c > 127 ? c - 256 : c
    }
    //补码乘法
    function multiply8(a, b) {
        let c = (a * b) & 0xFF
        return c > 127 ? c - 256 : c
    }
    //加
    function matrix2x2Add(A, B) {
        return [
            [add8(A[0][0], B[0][0]), add8(A[0][1], B[0][1])],
            [add8(A[1][0], B[1][0]), add8(A[1][1], B[1][1])]
        ]
    }
    //数乘
    function matrix2x2NumMultiply(a, A) {
        return [
            [multiply8(a, A[0][0]), multiply8(a, A[0][1])],
            [multiply8(a, A[1][0]), multiply8(a, A[1][1])]
        ]
    }
    //乘法
    function matrix2x2Multiply(A, B) {
        return [
            [add8(multiply8(A[0][0], B[0][0]), multiply8(A[0][1], B[1][0])), add8(multiply8(A[0][0], B[0][1]), multiply8(A[0][1], B[1][1]))],
            [add8(multiply8(A[1][0], B[0][0]), multiply8(A[1][1], B[1][0])), add8(multiply8(A[1][0], B[0][1]), multiply8(A[1][1], B[1][1]))]
        ]
    }
    //减
    function matrix2x2Subtract(A, B) {
        return [
            [add8(A[0][0], -B[0][0]), add8(A[0][1], -B[0][1])],
            [add8(A[1][0], -B[1][0]), add8(A[1][1], -B[1][1])]
        ]
    }
    //列加
    function matrixAdd(A, B) {
        let len = Math.max(A.length, B.length, 1)
        let C = []
        for (let i = 0; i < len; i++) {
            C[i] = matrix2x2Add(A[i] || [[0, 0], [0, 0]], B[i] || [[0, 0], [0, 0]])
        }
        return C
    }
    //列减
    function matrixSubtract(A, B) {
        let len = Math.max(A.length, B.length, 1)
        let C = []
        for (let i = 0; i < len; i++) {
            C[i] = matrix2x2Subtract(A[i] || [[0, 0], [0, 0]], B[i] || [[0, 0], [0, 0]])
        }
        return C
    }
    //转置
    function matrix2x2Transposition(A) {
        return [
            [A[0][0], A[1][0]],
            [A[0][1], A[1][1]]
        ]
    }
    function matrix2x2Invertedposition(A) {
        return [
            [A[1][1], A[0][1]],
            [A[1][0], A[0][0]]
        ]
    }
    //矩阵加工-正缩链-饱和盐水
    event.add(
        "dut_create:matrix_plus_chain_contraction",
        "create:placard",
        (block, fluid, simulate) => {
            if (fluid.id == "kubejs:saline_water" && fluid.amount >= 250) {
                /**@type {Internal.PlacardBlockEntity} */
                let placard = block.entity
                if (placard.getHeldItem().id == "kubejs:matrix_2") {
                    if (block.down.id == "create:depot") {
                        /**@type {Internal.DepotBlockEntity} */
                        let depot = block.down.entity
                        if (depot.getHeldItem().isEmpty()) {
                            if (!simulate) {
                                let item = JSON.parse(placard.getHeldItem().tag.matrix.toString())
                                placard.setHeldItem('minecraft:air')
                                let A = item[0] || [[0, 0], [0, 0]]
                                let B = item[1] || [[0, 0], [0, 0]]
                                let C = [matrix2x2Add(A, B)].concat(item.slice(2))
                                for (let i = 0; i < C.length; i++) {
                                    C[i][0][0] = $Integer.valueOf(String(C[i][0][0]))
                                    C[i][0][1] = $Integer.valueOf(String(C[i][0][1]))
                                    C[i][1][0] = $Integer.valueOf(String(C[i][1][0]))
                                    C[i][1][1] = $Integer.valueOf(String(C[i][1][1]))
                                }
                                let depotItemHandler = depot.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                                depotItemHandler.insertItem(Item.of('kubejs:matrix_2', `{matrix:${JSON.stringify(C)},RGB:${JSON.stringify(C.slice(0, 3))}}`), false)

                                block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                            }
                            return 250
                        }
                    }
                }
            }
            return 0
        }
    )
    //矩阵加工-反缩链-冷冻剂
    event.add(
        "dut_create:matrix_minus_chain_contraction",
        "create:placard",
        (block, fluid, simulate) => {
            if (fluid.id == "kubejs:cryogen" && fluid.amount >= 250) {
                /**@type {Internal.PlacardBlockEntity} */
                let placard = block.entity
                if (placard.getHeldItem().id == "kubejs:matrix_2") {
                    if (block.down.id == "create:depot") {
                        /**@type {Internal.DepotBlockEntity} */
                        let depot = block.down.entity
                        if (depot.getHeldItem().isEmpty()) {
                            if (!simulate) {
                                let item = JSON.parse(placard.getHeldItem().tag.matrix.toString())
                                placard.setHeldItem('minecraft:air')
                                //block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run data modify block ${block.pos.x} ${block.pos.y} ${block.pos.z} Item set value {id:'minecraft:air',Count:1b}`)
                                let A = item[0] || [[0, 0], [0, 0]]
                                let B = item[1] || [[0, 0], [0, 0]]
                                let C = [matrix2x2Subtract(B, A)].concat(item.slice(2))
                                for (let i = 0; i < C.length; i++) {
                                    C[i][0][0] = $Integer.valueOf(String(C[i][0][0]))
                                    C[i][0][1] = $Integer.valueOf(String(C[i][0][1]))
                                    C[i][1][0] = $Integer.valueOf(String(C[i][1][0]))
                                    C[i][1][1] = $Integer.valueOf(String(C[i][1][1]))
                                }
                                let depotItemHandler = depot.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                                depotItemHandler.insertItem(Item.of('kubejs:matrix_2', `{matrix:${JSON.stringify(C)},RGB:${JSON.stringify(C.slice(0, 3))}}`), false)
                                //block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run data modify block ${block.down.pos.x} ${block.down.pos.y} ${block.down.pos.z} HeldItem.Item set value {id:'kubejs:matrix_2',Count:1b,tag:{matrix:${JSON.stringify(C)},RGB:${JSON.stringify(C.slice(0, 3))}}}`)

                                block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                            }
                            return 250
                        }
                    }
                }
            }
            return 0
        }
    )
    //矩阵加工-RG相变-绿色孢子
    event.add(
        "dut_create:matrix_rg_phase_change",
        "create:placard",
        (block, fluid, simulate) => {
            if (fluid.id == "kubejs:green_spore" && fluid.amount >= 250) {
                /**@type {Internal.PlacardBlockEntity} */
                let placard = block.entity
                if (placard.getHeldItem().id == "kubejs:matrix_2") {
                    if (block.down.id == "create:depot") {
                        /**@type {Internal.DepotBlockEntity} */
                        let depot = block.down.entity
                        if (depot.getHeldItem().isEmpty()) {
                            if (!simulate) {
                                let item = JSON.parse(placard.getHeldItem().tag.matrix.toString())
                                placard.setHeldItem('minecraft:air')
                                let A = item[0] || [[0, 0], [0, 0]]
                                let B = item[1] || [[0, 0], [0, 0]]
                                let C = [B, A].concat(item.slice(2))
                                for (let i = 0; i < C.length; i++) {
                                    C[i][0][0] = $Integer.valueOf(String(C[i][0][0]))
                                    C[i][0][1] = $Integer.valueOf(String(C[i][0][1]))
                                    C[i][1][0] = $Integer.valueOf(String(C[i][1][0]))
                                    C[i][1][1] = $Integer.valueOf(String(C[i][1][1]))
                                }
                                let depotItemHandler = depot.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                                depotItemHandler.insertItem(Item.of('kubejs:matrix_2', `{matrix:${JSON.stringify(C)},RGB:${JSON.stringify(C.slice(0, 3))}}`), false)

                                block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                            }
                            return 250
                        }
                    }
                }
            }
            return 0
        }
    )
    //矩阵加工-RB相变-蓝色孢子
    event.add(
        "dut_create:matrix_rb_phase_change",
        "create:placard",
        (block, fluid, simulate) => {
            if (fluid.id == "kubejs:blue_spore" && fluid.amount >= 250) {
                /**@type {Internal.PlacardBlockEntity} */
                let placard = block.entity
                if (placard.getHeldItem().id == "kubejs:matrix_2") {
                    if (block.down.id == "create:depot") {
                        /**@type {Internal.DepotBlockEntity} */
                        let depot = block.down.entity
                        if (depot.getHeldItem().isEmpty()) {
                            if (!simulate) {
                                let item = JSON.parse(placard.getHeldItem().tag.matrix.toString())
                                placard.setHeldItem('minecraft:air')

                                let A = item[0] || [[0, 0], [0, 0]]
                                let B = item[1] || [[0, 0], [0, 0]]
                                let C = item[2] || [[0, 0], [0, 0]]
                                let D = [C, B, A].concat(item.slice(3))
                                for (let i = 0; i < D.length; i++) {
                                    D[i][0][0] = $Integer.valueOf(String(D[i][0][0]))
                                    D[i][0][1] = $Integer.valueOf(String(D[i][0][1]))
                                    D[i][1][0] = $Integer.valueOf(String(D[i][1][0]))
                                    D[i][1][1] = $Integer.valueOf(String(D[i][1][1]))
                                }
                                let depotItemHandler = depot.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                                depotItemHandler.insertItem(Item.of('kubejs:matrix_2', `{matrix:${JSON.stringify(D)},RGB:${JSON.stringify(D.slice(0, 3))}}`), false)

                                block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                            }
                            return 250
                        }
                    }
                }
            }
            return 0
        }
    )
    //矩阵加工-轮换-红色孢子
    event.add(
        "dut_create:matrix_phase_change",
        "create:placard",
        (block, fluid, simulate) => {
            if (fluid.id == "kubejs:red_spore" && fluid.amount >= 250) {
                /**@type {Internal.PlacardBlockEntity} */
                let placard = block.entity
                if (placard.getHeldItem().id == "kubejs:matrix_2") {
                    if (block.down.id == "create:depot") {
                        /**@type {Internal.DepotBlockEntity} */
                        let depot = block.down.entity
                        if (depot.getHeldItem().isEmpty()) {
                            if (!simulate) {
                                let item = JSON.parse(placard.getHeldItem().tag.matrix.toString())
                                placard.setHeldItem('minecraft:air')

                                let A = item[item.length - 1] || [[0, 0], [0, 0]]
                                let D = [A].concat(item.slice(0, -1))
                                for (let i = 0; i < D.length; i++) {
                                    D[i][0][0] = $Integer.valueOf(String(D[i][0][0]))
                                    D[i][0][1] = $Integer.valueOf(String(D[i][0][1]))
                                    D[i][1][0] = $Integer.valueOf(String(D[i][1][0]))
                                    D[i][1][1] = $Integer.valueOf(String(D[i][1][1]))
                                }
                                let depotItemHandler = depot.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                                depotItemHandler.insertItem(Item.of('kubejs:matrix_2', `{matrix:${JSON.stringify(D)},RGB:${JSON.stringify(D.slice(0, 3))}}`), false)

                                block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                            }
                            return 250
                        }
                    }
                }
            }
            return 0
        }
    )
    //矩阵加工-逐相转置-乙醇
    event.add(
        "dut_create:matrix_transposition",
        "minecraft:red_mushroom_block",
        (block, fluid, simulate) => {
            if (fluid.id == "createdieselgenerators:ethanol" && fluid.amount >= 250) {
                let placard = block.up
                if (placard.id != "create:placard") { return 0 }
                let placardFacing = placard.properties.facing
                if (placardFacing == "down") { return 0 }
                if (placardFacing == "up") { return 0 }
                /**@type {Internal.PlacardBlockEntity} */
                let placardEntity = placard.entity
                if (placardEntity.getHeldItem().id != "kubejs:slime_crystal") { return 0 }
                let depotIn = 0
                let depotOut = 0
                switch (placardFacing) {
                    case "east":
                        depotOut = block.west
                        depotIn = block.east
                        break
                    case "west":
                        depotOut = block.east
                        depotIn = block.west
                        break
                    case "south":
                        depotOut = block.north
                        depotIn = block.south
                        break
                    case "north":
                        depotOut = block.south
                        depotIn = block.north
                        break
                }
                if (depotIn.id != 'create:depot') { return 0 }
                if (depotOut.id != 'create:depot') { return 0 }

                /**@type {Internal.DepotBlockEntity} */
                let depotInEntity = depotIn.entity
                /**@type {Internal.DepotBlockEntity} */
                let depotOutEntity = depotOut.entity

                let B = depotInEntity.getHeldItem()
                if (B?.id != "kubejs:matrix_2") { return 0 }
                if (!depotOutEntity.getHeldItem().isEmpty()) { return 0 }
                if (!simulate) {
                    let D = JSON.parse(B.tag.matrix.toString()) || [[[0, 0], [0, 0]]]
                    for (let i = 0; i < D.length; i++) {
                        D[i] = matrix2x2Transposition(D[i])
                    }
                    for (let i = 0; i < D.length; i++) {
                        D[i][0][0] = $Integer.valueOf(String(D[i][0][0]))
                        D[i][0][1] = $Integer.valueOf(String(D[i][0][1]))
                        D[i][1][0] = $Integer.valueOf(String(D[i][1][0]))
                        D[i][1][1] = $Integer.valueOf(String(D[i][1][1]))
                    }

                    let depotInItemHandler = depotInEntity.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                    let depotOutItemHandler = depotOutEntity.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                    depotOutItemHandler.insertItem(Item.of('kubejs:matrix_2', B.count, `{matrix:${JSON.stringify(D)},RGB:${JSON.stringify(D.slice(0, 3))}}`), false)
                    depotInItemHandler.extractItem(0, B.count, false)

                    block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                    //block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run data modify block ${depotOut.pos.x} ${depotOut.pos.y} ${depotOut.pos.z} HeldItem.Item set value {id:'kubejs:matrix_2',Count:${B.Count}b,tag:{matrix:${JSON.stringify(D)},RGB:${JSON.stringify(D.slice(0, 3))}}}`)
                }
                return 250
            }
            return 0
        }
    )
    //矩阵加工-逐相反转置-乙醇
    event.add(
        "dut_create:matrix_invertedposition",
        "minecraft:brown_mushroom_block",
        (block, fluid, simulate) => {
            if (fluid.id == "createdieselgenerators:ethanol" && fluid.amount >= 250) {
                let placard = block.up
                if (placard.id != "create:placard") { return 0 }
                let placardFacing = placard.properties.facing
                if (placardFacing == "down") { return 0 }
                if (placardFacing == "up") { return 0 }
                /**@type {Internal.PlacardBlockEntity} */
                let placardEntity = placard.entity
                if (placardEntity.getHeldItem().id != "kubejs:slime_crystal") { return 0 }
                let depotIn = 0
                let depotOut = 0
                switch (placardFacing) {
                    case "east":
                        depotOut = block.west
                        depotIn = block.east
                        break
                    case "west":
                        depotOut = block.east
                        depotIn = block.west
                        break
                    case "south":
                        depotOut = block.north
                        depotIn = block.south
                        break
                    case "north":
                        depotOut = block.south
                        depotIn = block.north
                        break
                }
                if (depotIn.id != 'create:depot') { return 0 }
                if (depotOut.id != 'create:depot') { return 0 }

                /**@type {Internal.DepotBlockEntity} */
                let depotInEntity = depotIn.entity
                /**@type {Internal.DepotBlockEntity} */
                let depotOutEntity = depotOut.entity

                let B = depotInEntity.getHeldItem()
                if (B?.id != "kubejs:matrix_2") { return 0 }
                if (!depotOutEntity.getHeldItem().isEmpty()) { return 0 }
                if (!simulate) {
                    let D = JSON.parse(B.tag.matrix.toString()) || [[[0, 0], [0, 0]]]
                    for (let i = 0; i < D.length; i++) {
                        D[i] = matrix2x2Invertedposition(D[i])
                    }
                    for (let i = 0; i < D.length; i++) {
                        D[i][0][0] = $Integer.valueOf(String(D[i][0][0]))
                        D[i][0][1] = $Integer.valueOf(String(D[i][0][1]))
                        D[i][1][0] = $Integer.valueOf(String(D[i][1][0]))
                        D[i][1][1] = $Integer.valueOf(String(D[i][1][1]))
                    }

                    let depotInItemHandler = depotInEntity.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                    let depotOutItemHandler = depotOutEntity.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                    depotOutItemHandler.insertItem(Item.of('kubejs:matrix_2', B.count, `{matrix:${JSON.stringify(D)},RGB:${JSON.stringify(D.slice(0, 3))}}`), false)
                    depotInItemHandler.extractItem(0, B.count, false)

                    block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                }
                return 250
            }
            return 0
        }
    )

    //矩阵加工-正相叠加-红色蘑菇孢子
    event.add(
        "dut_create:matrix_addition",
        "minecraft:amethyst_cluster",
        (block, fluid, simulate) => {
            if (fluid.id == "kubejs:red_mushroom_spore" && fluid.amount >= 250) {
                if (block.properties.facing == "down") { return 0 }
                if (block.properties.facing == "up") { return 0 }
                if (block.down.id != "create:depot") { return 0 }
                let depot = block.down
                /**@type {Internal.DepotBlockEntity} */
                let depotEntity = depot.entity
                if (!depotEntity.getHeldItem().isEmpty()) { return 0 }
                let blockA = 0
                let blockB = 0
                switch (block.properties.facing) {
                    case "east":
                        blockA = depot.west
                        blockB = depot.east
                        break
                    case "west":
                        blockA = depot.east
                        blockB = depot.west
                        break
                    case "south":
                        blockA = depot.north
                        blockB = depot.south
                        break
                    case "north":
                        blockA = depot.south
                        blockB = depot.north
                        break
                }
                if (blockA.id != 'create:placard') { return 0 }
                if (blockB.id != 'create:placard') { return 0 }

                /**@type {Internal.PlacardBlockEntity} */
                let blockAEntity = blockA.entity
                /**@type {Internal.PlacardBlockEntity} */
                let blockBEntity = blockB.entity
                let A = blockAEntity.getHeldItem()
                if (A.id != "kubejs:matrix_2") { return 0 }
                let B = blockBEntity.getHeldItem()
                if (B.id != "kubejs:matrix_2") { return 0 }
                if (!simulate) {
                    let D = matrixAdd(JSON.parse(A.tag.matrix.toString()), JSON.parse(B.tag.matrix.toString()))
                    blockAEntity.setHeldItem('minecraft:air')
                    blockBEntity.setHeldItem('minecraft:air')
                    //block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run data modify block ${blockA.pos.x} ${blockA.pos.y} ${blockA.pos.z} Item set value {id:'minecraft:air',Count:1b}`)
                    //block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run data modify block ${blockB.pos.x} ${blockB.pos.y} ${blockB.pos.z} Item set value {id:'minecraft:air',Count:1b}`)
                    for (let i = 0; i < D.length; i++) {
                        D[i][0][0] = $Integer.valueOf(String(D[i][0][0]))
                        D[i][0][1] = $Integer.valueOf(String(D[i][0][1]))
                        D[i][1][0] = $Integer.valueOf(String(D[i][1][0]))
                        D[i][1][1] = $Integer.valueOf(String(D[i][1][1]))
                    }
                    let depotItemHandler = depotEntity.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                    depotItemHandler.insertItem(Item.of('kubejs:matrix_2', 1, `{matrix:${JSON.stringify(D)},RGB:${JSON.stringify(D.slice(0, 3))}}`), false)
                    //block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run data modify block ${depot.pos.x} ${depot.pos.y} ${depot.pos.z} HeldItem.Item set value {id:'kubejs:matrix_2',Count:1b,tag:{matrix:${JSON.stringify(D)},RGB:${JSON.stringify(D.slice(0, 3))}}}`)
                    block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                }
                return 250
            }
            return 0
        }
    )
    //矩阵加工-反相叠加-棕色蘑菇孢子
    event.add(
        "dut_create:matrix_subtract",
        "minecraft:amethyst_cluster",
        (block, fluid, simulate) => {
            if (fluid.id == "kubejs:brown_mushroom_spore" && fluid.amount >= 250) {
                if (block.properties.facing == "down") { return 0 }
                if (block.properties.facing == "up") { return 0 }
                if (block.down.id != "create:depot") { return 0 }
                let depot = block.down
                /**@type {Internal.DepotBlockEntity} */
                let depotEntity = depot.entity
                if (!depotEntity.getHeldItem().isEmpty()) { return 0 }
                let blockA = 0
                let blockB = 0
                switch (block.properties.facing) {
                    case "east":
                        blockA = depot.west
                        blockB = depot.east
                        break
                    case "west":
                        blockA = depot.east
                        blockB = depot.west
                        break
                    case "south":
                        blockA = depot.north
                        blockB = depot.south
                        break
                    case "north":
                        blockA = depot.south
                        blockB = depot.north
                        break
                }
                if (blockA.id != 'create:placard') { return 0 }
                if (blockB.id != 'create:placard') { return 0 }

                /**@type {Internal.PlacardBlockEntity} */
                let blockAEntity = blockA.entity
                /**@type {Internal.PlacardBlockEntity} */
                let blockBEntity = blockB.entity
                let A = blockAEntity.getHeldItem()
                if (A.id != "kubejs:matrix_2") { return 0 }
                let B = blockBEntity.getHeldItem()
                if (B.id != "kubejs:matrix_2") { return 0 }
                if (!simulate) {
                    let D = matrixSubtract(JSON.parse(A.tag.matrix.toString()), JSON.parse(B.tag.matrix.toString()))
                    blockAEntity.setHeldItem('minecraft:air')
                    blockBEntity.setHeldItem('minecraft:air')

                    for (let i = 0; i < D.length; i++) {
                        D[i][0][0] = $Integer.valueOf(String(D[i][0][0]))
                        D[i][0][1] = $Integer.valueOf(String(D[i][0][1]))
                        D[i][1][0] = $Integer.valueOf(String(D[i][1][0]))
                        D[i][1][1] = $Integer.valueOf(String(D[i][1][1]))
                    }
                    let depotItemHandler = depotEntity.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                    depotItemHandler.insertItem(Item.of('kubejs:matrix_2', 1, `{matrix:${JSON.stringify(D)},RGB:${JSON.stringify(D.slice(0, 3))}}`), false)

                    block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                }
                return 250
            }
            return 0
        }
    )
    //矩阵加工-并链-可乐原浆
    event.add(
        "dut_create:matrix_merge_chain",
        "minecraft:amethyst_cluster",
        (block, fluid, simulate) => {
            if (fluid.id == "kubejs:cola_puree" && fluid.amount >= 125) {
                if (block.properties.facing == "down") { return 0 }
                if (block.properties.facing == "up") { return 0 }
                if (block.down.id != "create:depot") { return 0 }
                let depot = block.down
                /**@type {Internal.DepotBlockEntity} */
                let depotEntity = depot.entity
                if (!depotEntity.getHeldItem().isEmpty()) { return 0 }
                let blockA = 0
                let blockB = 0
                switch (block.properties.facing) {
                    case "east":
                        blockA = depot.west
                        blockB = depot.east
                        break
                    case "west":
                        blockA = depot.east
                        blockB = depot.west
                        break
                    case "south":
                        blockA = depot.north
                        blockB = depot.south
                        break
                    case "north":
                        blockA = depot.south
                        blockB = depot.north
                        break
                }
                if (blockA.id != 'create:placard') { return 0 }
                if (blockB.id != 'create:placard') { return 0 }

                /**@type {Internal.PlacardBlockEntity} */
                let blockAEntity = blockA.entity
                /**@type {Internal.PlacardBlockEntity} */
                let blockBEntity = blockB.entity
                let A = blockAEntity.getHeldItem()
                if (A.id != "kubejs:matrix_2") { return 0 }
                let B = blockBEntity.getHeldItem()
                if (B.id != "kubejs:matrix_2") { return 0 }
                if (!simulate) {
                    let D = JSON.parse(B.tag.matrix.toString()).concat(JSON.parse(A.tag.matrix.toString()))
                    blockAEntity.setHeldItem('minecraft:air')
                    blockBEntity.setHeldItem('minecraft:air')

                    for (let i = 0; i < D.length; i++) {
                        D[i][0][0] = $Integer.valueOf(String(D[i][0][0]))
                        D[i][0][1] = $Integer.valueOf(String(D[i][0][1]))
                        D[i][1][0] = $Integer.valueOf(String(D[i][1][0]))
                        D[i][1][1] = $Integer.valueOf(String(D[i][1][1]))
                    }
                    let depotItemHandler = depotEntity.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                    depotItemHandler.insertItem(Item.of('kubejs:matrix_2', 1, `{matrix:${JSON.stringify(D)},RGB:${JSON.stringify(D.slice(0, 3))}}`), false)

                    block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                }
                return 125
            }
            return 0
        }
    )
    //矩阵加工-断链
    //矩阵加工-左嬗变-空果孢子
    event.add(
        "dut_create:matrix_left_evalution",
        "ad_astra:aeronos_cap",
        (block, fluid, simulate) => {
            if (fluid.id == "kubejs:aeronos_spore" && fluid.amount >= 250) {
                let placard = block.up
                if (placard.id != "create:placard") { return 0 }
                let placardFacing = placard.properties.facing
                if (placardFacing == "down") { return 0 }
                if (placardFacing == "up") { return 0 }
                /**@type {Internal.PlacardBlockEntity} */
                let placardEntity = placard.entity
                let A = placardEntity.getHeldItem()
                if (A.id != "kubejs:matrix_2") { return 0 }
                let depotIn = 0
                let depotOut = 0
                switch (placardFacing) {
                    case "east":
                        depotOut = block.west
                        depotIn = block.east
                        break
                    case "west":
                        depotOut = block.east
                        depotIn = block.west
                        break
                    case "south":
                        depotOut = block.north
                        depotIn = block.south
                        break
                    case "north":
                        depotOut = block.south
                        depotIn = block.north
                        break
                }
                if (depotIn.id != 'create:depot') { return 0 }
                if (depotOut.id != 'create:depot') { return 0 }

                /**@type {Internal.DepotBlockEntity} */
                let depotOutEntity = depotOut.entity
                if (!depotOutEntity.getHeldItem().isEmpty()) { return 0 }
                /**@type {Internal.DepotBlockEntity} */
                let depotInEntity = depotIn.entity
                let B = depotInEntity.getHeldItem()
                let Bcount = B.count
                if (B?.id != "kubejs:matrix_2") { return 0 }
                if (B.tag?.no_copy == 1) { return 0 }

                let depotInItemHandler = depotInEntity.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                let depotOutItemHandler = depotOutEntity.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                if (!simulate) {
                    let MatrixA = JSON.parse(A.tag.matrix.toString())[0] || [[0, 0], [0, 0]]
                    let MatrixB = JSON.parse(B.tag.matrix.toString()) || [[[0, 0], [0, 0]]]
                    let D = []
                    for (let i = 0; i < MatrixB.length; i++) {
                        D[i] = matrix2x2Multiply(MatrixA, MatrixB[i])
                    }
                    depotInItemHandler.extractItem(0, Bcount, false)
                    placardEntity.setHeldItem('minecraft:air')
                    for (let i = 0; i < D.length; i++) {
                        D[i][0][0] = $Integer.valueOf(String(D[i][0][0]))
                        D[i][0][1] = $Integer.valueOf(String(D[i][0][1]))
                        D[i][1][0] = $Integer.valueOf(String(D[i][1][0]))
                        D[i][1][1] = $Integer.valueOf(String(D[i][1][1]))
                    }
                    depotOutItemHandler.insertItem(Item.of('kubejs:matrix_2', Bcount, `{matrix:${JSON.stringify(D)},RGB:${JSON.stringify(D.slice(0, 3))}}`), false)
                    block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                }
                return 250
            }
            return 0
        }
    )
    //矩阵加工-右嬗变-孑孓孢子
    event.add(
        "dut_create:matrix_right_evalution",
        "ad_astra:strophar_cap",
        (block, fluid, simulate) => {
            if (fluid.id == "kubejs:strophar_spore" && fluid.amount >= 250) {
                let placard = block.up
                if (placard.id != "create:placard") { return 0 }
                let placardFacing = placard.properties.facing
                if (placardFacing == "down") { return 0 }
                if (placardFacing == "up") { return 0 }
                /**@type {Internal.PlacardBlockEntity} */
                let placardEntity = placard.entity
                let A = placardEntity.getHeldItem()
                if (A.id != "kubejs:matrix_2") { return 0 }
                let depotIn = 0
                let depotOut = 0
                switch (placardFacing) {
                    case "east":
                        depotOut = block.west
                        depotIn = block.east
                        break
                    case "west":
                        depotOut = block.east
                        depotIn = block.west
                        break
                    case "south":
                        depotOut = block.north
                        depotIn = block.south
                        break
                    case "north":
                        depotOut = block.south
                        depotIn = block.north
                        break
                }
                if (depotIn.id != 'create:depot') { return 0 }
                if (depotOut.id != 'create:depot') { return 0 }

                /**@type {Internal.DepotBlockEntity} */
                let depotOutEntity = depotOut.entity
                if (!depotOutEntity.getHeldItem().isEmpty()) { return 0 }
                /**@type {Internal.DepotBlockEntity} */
                let depotInEntity = depotIn.entity
                let B = depotInEntity.getHeldItem()
                let Bcount = B.count
                if (B?.id != "kubejs:matrix_2") { return 0 }
                if (B.tag?.no_copy == 1) { return 0 }

                let depotInItemHandler = depotInEntity.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                let depotOutItemHandler = depotOutEntity.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                if (!simulate) {
                    let MatrixA = JSON.parse(A.tag.matrix.toString())[0] || [[0, 0], [0, 0]]
                    let MatrixB = JSON.parse(B.tag.matrix.toString()) || [[[0, 0], [0, 0]]]
                    let D = []
                    for (let i = 0; i < MatrixB.length; i++) {
                        D[i] = matrix2x2Multiply(MatrixB[i], MatrixA)
                    }
                    depotInItemHandler.extractItem(0, Bcount, false)
                    placardEntity.setHeldItem('minecraft:air')
                    for (let i = 0; i < D.length; i++) {
                        D[i][0][0] = $Integer.valueOf(String(D[i][0][0]))
                        D[i][0][1] = $Integer.valueOf(String(D[i][0][1]))
                        D[i][1][0] = $Integer.valueOf(String(D[i][1][0]))
                        D[i][1][1] = $Integer.valueOf(String(D[i][1][1]))
                    }
                    depotOutItemHandler.insertItem(Item.of('kubejs:matrix_2', Bcount, `{matrix:${JSON.stringify(D)},RGB:${JSON.stringify(D.slice(0, 3))}}`), false)
                    block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                }
                return 250
            }
            return 0
        }
    )
    //矩阵加工-染色
})