global.blockFillingBasicRecipes = []
global.blockFillingItemRecipes = []
global.blockFillingExtraItemRecipes = []

CreateEvents.spoutHandler((event) => {
    /**
    * @param {string} id 配方id
    * @param {string} blockID 方块id,可以是列表和标签
    * @param {object} fluidInput 输入流体的种类及数量，一个形如{id:"xxx",amount:xxx}的对象
    * @param {Array} outputList 配方的产出，一个形如["blockid"]的列表，等概率产出
    */
    //基础注液合成
    function blockFillingBasic(id, blockID, fluidInput, outputList) {
        event.add(
            id,//id
            blockID,//目标方块
            (block, fluid, simulate) => {
                //配方开始条件
                if (fluid.id == fluidInput.id && fluid.amount >= fluidInput.amount) {
                    if (!simulate) {
                        let i = 0
                        if (outputList.length == 1) { i = 0 }
                        if (outputList.length > 1) {
                            i = Math.round(Math.random() * outputList.length)
                            if (i == outputList.length) {
                                i = 0
                            }
                        }
                        block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)


                        //block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run particle minecraft:block ${} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
                        //粒子效果
                        block.set(outputList[i])
                    }
                    return fluidInput.amount//消耗量
                }
                return 0
            }
        )

        global.blockFillingBasicRecipes.push({
            input_fluid: fluidInput.id,
            input_amount: fluidInput.amount,
            input_blocks: blockID instanceof Array ? blockID : [blockID],
            output_blocks: outputList,
        })
    }
    /**
    * @param {string} id 配方id
    * @param {string} blockID 方块id,可以是列表和标签
    * @param {object} fluidInput 输入流体的种类及数量，一个形如{id:"xxx",amount:xxx}的对象
    * @param {Internal.ItemStack} output 配方的产出
    */
    //方块》物品
    function blockFillingItem(id, blockID, fluidInput, output) {
        event.add(
            id,//id
            blockID,//目标方块
            (block, fluid, simulate) => {
                //配方开始条件
                if (fluid.id == fluidInput.id && fluid.amount >= fluidInput.amount) {
                    let blowB = block.down
                    if (blowB.id == "create:depot") {
                        /**@type {Internal.DepotBlockEntity} */
                        let depot = blowB.entity

                        let depotItemHandler = depot.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                        if (depot.getHeldItem().isEmpty()) {
                            if (!simulate) {
                                //if (!$ItemHandlerHelper.insertItemStacked(depotItemHandler, output, true).isEmpty()) { return 0 }
                                block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)


                                depotItemHandler.insertItem(output.copy(), false)
                                //$ItemHandlerHelper.insertItemStacked(depotItemHandler, output, false)
                                block.set("minecraft:air")
                            }
                            return fluidInput.amount//消耗量
                        }
                    }
                }
                return 0
            }
        )

        // {id:'xxx',Count:4b}
        // regex
        let output_id = output.id
        let output_count = output.count
        global.blockFillingItemRecipes.push({
            input_fluid: fluidInput.id,
            input_amount: fluidInput.amount,
            output_item: output_id,
            output_amount: output_count,
            medium_block: blockID
        })
    }
    /**
    * @param {string} id 配方id
    * @param {string} blockID 方块id,可以是列表和标签
    * @param {object} fluidInput 输入流体的种类及数量，一个形如{id:"xxx",amount:xxx}的对象
   * @param {Internal.ItemStack} output 配方的产出
    */
    //方块额外产出物品
    function blockFillingExtraItem(id, blockID, fluidInput, output) {
        event.add(
            id,//id
            blockID,//目标方块
            (block, fluid, simulate) => {
                //配方开始条件
                if (fluid.id == fluidInput.id && fluid.amount >= fluidInput.amount) {
                    let blowB = block.down
                    if (blowB.id == "create:depot") {
                        /**@type {Internal.DepotBlockEntity} */
                        let depot = blowB.entity
                        let depotItemHandler = depot.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
                        if (depot.getHeldItem().isEmpty()) {
                            if (!simulate) {
                                //if (!$ItemHandlerHelper.insertItemStacked(depotItemHandler,output,true).isEmpty()){return 0}
                                block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                                depotItemHandler.insertItem(output.copy(), false)
                                //block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
                                //block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run data modify block ${block.down.pos.x} ${block.down.pos.y} ${block.down.pos.z} HeldItem.Item set value ` + output)
                            }
                            return fluidInput.amount//消耗量
                        }
                    }
                }
                return 0
            }
        )

        // {id:'xxx',Count:4b}
        // regex
        let output_id = output.id
        let output_count = output.count
        global.blockFillingExtraItemRecipes.push({
            input_fluid: fluidInput.id,
            input_amount: fluidInput.amount,
            output_item: output_id,
            output_amount: output_count,
            medium_block: blockID
        })
    }
    blockFillingBasic(
        "dut_create:brown_mushroom_grown",
        "minecraft:brown_mushroom",
        { id: "kubejs:nitrogen_fertilizer", amount: 1 },
        ['minecraft:brown_mushroom_block', 'minecraft:mushroom_stem']
    )
    blockFillingBasic(
        "dut_create:red_mushroom_grown",
        "minecraft:red_mushroom",
        { id: "kubejs:nitrogen_fertilizer", amount: 1 },
        ['minecraft:red_mushroom_block', 'minecraft:mushroom_stem']
    )
    blockFillingBasic(
        "dut_create:grass",
        ['minecraft:dirt', 'minecraft:coarse_dirt'],
        { id: "minecraft:water", amount: 250 },
        ['minecraft:grass_block']
    )
    blockFillingBasic(
        "dut_create:stone_transform",
        ['minecraft:gravel', 'minecraft:stone'],
        { id: "minecraft:lava", amount: 50 },
        ['minecraft:andesite', 'minecraft:diorite', 'minecraft:granite', 'create:crimsite']
    )
    blockFillingBasic(
        "dut_create:copper_transform",
        'minecraft:copper_block',
        { id: "kubejs:gold", amount: IngotBlock*IngotFluid },
        ['create:brass_block']
    )
    blockFillingBasic(
        "dut_create:gold_transform",
        'minecraft:gold_block',
        { id: "kubejs:copper", amount: IngotBlock*IngotFluid },
        ['create:brass_block']
    )
    blockFillingItem(
        "dut_create:rose_quartz",
        "minecraft:amethyst_cluster",
        { id: "createdieselgenerators:ethanol", amount: 250 },
        Item.of('create:rose_quartz')
        //"{id:'create:rose_quartz',Count:1b}"
    )
    blockFillingExtraItem(
        "dut_create:block_filling/andesite_alloy_from_iron",
        "minecraft:andesite",
        { id: "kubejs:iron", amount: 1*IngotFluid },
        Item.of('4x create:andesite_alloy')
        //"{Count:4b,id:'create:andesite_alloy'}"
    )
    blockFillingExtraItem(
        "dut_create:block_filling/andesite_alloy_from_industrial_iron",
        "minecraft:andesite",
        { id: "kubejs:industrial_iron", amount: 1*IngotFluid },
        Item.of('9x create:andesite_alloy')
        //"{Count:9b,id:'create:andesite_alloy'}"
    )
    //紫水晶增殖系列
    event.add(
        "dut_create:amethyst_spawn",
        "budding_amethyst",
        (block, fluid, simulate) => {
            let startable = false
            let i = "up"
            for (i of ["up", "north", "west", "south", "east", "down"]) {
                if (block[i].id == "minecraft:air") {
                    startable = true
                    break
                }
            }
            if (fluid.id == "minecraft:water" && fluid.amount >= 50 && startable) {
                if (!simulate) {
                    block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                    block.level.spawnParticles(`minecraft:block ${block.id}`, false, block.x, block.y, block.z, 0.25, 0.25, 0.25, 8, 0.3)
                    //block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
                    block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run setblock ${block[i].x} ${block[i].y} ${block[i].z} minecraft:small_amethyst_bud[facing=${i}]`)
                }
                return 50
            }
            return 0
        }
    )
    event.add(
        "dut_create:large_amethyst_bud",
        "minecraft:large_amethyst_bud",
        (block, fluid, simulate) => {
            if (fluid.id == "minecraft:water" && fluid.amount >= 50) {
                if (!simulate) {
                    let face = block.properties.facing.toString()
                    block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                    block.level.spawnParticles(`minecraft:block ${block.id}`, false, block.x, block.y, block.z, 0.25, 0.25, 0.25, 8, 0.3)

                    //block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
                    block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run setblock ${block.x} ${block.y} ${block.z} minecraft:amethyst_cluster[facing=${face}]`)
                }
                return 50
            }
            return 0
        }
    )
    event.add(
        "dut_create:medium_amethyst_bud",
        "minecraft:medium_amethyst_bud",
        (block, fluid, simulate) => {
            if (fluid.id == "minecraft:water" && fluid.amount >= 50) {
                if (!simulate) {
                    let face = block.properties.facing.toString()
                    block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                    block.level.spawnParticles(`minecraft:block ${block.id}`, false, block.x, block.y, block.z, 0.25, 0.25, 0.25, 8, 0.3)
                    //block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
                    block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run setblock ${block.x} ${block.y} ${block.z} minecraft:large_amethyst_bud[facing=${face}]`)
                }
                return 50
            }
            return 0
        }
    )
    event.add(
        "dut_create:small_amethyst_bud",
        "minecraft:small_amethyst_bud",
        (block, fluid, simulate) => {
            if (fluid.id == "minecraft:water" && fluid.amount >= 50) {
                if (!simulate) {
                    let face = block.properties.facing
                    block.level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "create:spout", "blocks", 1, 1)
                    block.level.spawnParticles(`minecraft:block ${block.id}`, false, block.x, block.y, block.z, 0.25, 0.25, 0.25, 8, 0.3)
                    //block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
                    block.level.server.runCommandSilent(`/execute in ${block.dimension.toString()} run setblock ${block.x} ${block.y} ${block.z} minecraft:medium_amethyst_bud[facing=${face}]`)
                }
                return 50
            }
            return 0
        }
    )
})