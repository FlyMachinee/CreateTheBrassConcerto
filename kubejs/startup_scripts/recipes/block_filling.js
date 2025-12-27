const directions = ["up", "north", "west", "south", "east", "down"]
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
                        block.level.server.runCommandSilent(`/playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
                        block.level.server.runCommandSilent(`/particle minecraft:block ${outputList[i]} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)//粒子效果
                        block.set(outputList[i])
                    }
                    return fluidInput.amount//消耗量
                }
                return 0;
            }
        )
    }
    /**
    * @param {string} id 配方id
    * @param {string} blockID 方块id,可以是列表和标签
    * @param {object} fluidInput 输入流体的种类及数量，一个形如{id:"xxx",amount:xxx}的对象
    * @param {string} output 配方的产出，一个物品数据"{id:'xxx',Count:4b}"
    */
    //方块》物品
    function blockFillingItem(id, blockID, fluidInput, output) {
        event.add(
            id,//id
            blockID,//目标方块
            (block, fluid, simulate) => {
                //配方开始条件
                if (fluid.id == fluidInput.id && fluid.amount >= fluidInput.amount) {
                    if (block.down.id == "create:depot") {
                        if (block.down.entityData?.HeldItem == undefined) {
                            if (!simulate) {
                                block.level.server.runCommandSilent(`/playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
                                block.level.server.runCommandSilent(`/particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
                                block.level.server.runCommandSilent(`/execute in ${block.level.dimension} run data modify block ${block.down.pos.x} ${block.down.pos.y} ${block.down.pos.z} HeldItem.Item set value ` + output)
                                block.set("minecraft:air")
                            }
                            return fluidInput.amount//消耗量
                        }
                    }
                }
                return 0;
            }
        )
    }
    /**
    * @param {string} id 配方id
    * @param {string} blockID 方块id,可以是列表和标签
    * @param {object} fluidInput 输入流体的种类及数量，一个形如{id:"xxx",amount:xxx}的对象
    * @param {string} output 配方的产出，一个物品数据"{id:'xxx',Count:4b}"
    */
    //方块额外产出物品
    function blockFillingExtraItem(id, blockID, fluidInput, output) {
        event.add(
            id,//id
            blockID,//目标方块
            (block, fluid, simulate) => {
                //配方开始条件
                if (fluid.id == fluidInput.id && fluid.amount >= fluidInput.amount) {
                    if (block.down.id == "create:depot") {
                        if (block.down.entityData?.HeldItem == undefined) {
                            if (!simulate) {
                                block.level.server.runCommandSilent(`/playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
                                block.level.server.runCommandSilent(`/particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
                                block.level.server.runCommandSilent(`/execute in ${block.level.dimension} run data modify block ${block.down.pos.x} ${block.down.pos.y} ${block.down.pos.z} HeldItem.Item set value ` + output)
                            }
                            return fluidInput.amount//消耗量
                        }
                    }
                }
                return 0;
            }
        )
    }
    blockFillingBasic(
        "dut_create:brown_mushroom",
        "minecraft:brown_mushroom",
        { id: "kubejs:nitrogen_fertilizer", amount: 1 },
        ['minecraft:brown_mushroom_block', 'minecraft:mushroom_stem']
    )
    blockFillingBasic(
        "dut_create:red_mushroom",
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
        { id: "kubejs:zinc", amount: 810 },
        ['create:brass_block']
    )
    blockFillingBasic(
        "dut_create:zinc_transform",
        'create:zinc_block',
        { id: "kubejs:copper", amount: 810 },
        ['create:brass_block']
    )
    blockFillingItem(
        "dut_create:rose_quartz",
        "minecraft:amethyst_cluster",
        { id: "createdieselgenerators:ethanol", amount: 500 },
        "{id:'create:rose_quartz',Count:1b}"
    )
    blockFillingExtraItem(
        "dut_create:block_filling/andesite_from_iron",
        "minecraft:andesite",
        { id: "kubejs:iron", amount: 90 },
        "{Count:4b,id:'create:andesite_alloy'}"
    )
    blockFillingExtraItem(
        "dut_create:block_filling/andesite_from_industrial_iron",
        "minecraft:andesite",
        { id: "kubejs:industrial_iron", amount: 90 },
        "{Count:9b,id:'create:andesite_alloy'}"
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
                    block.level.server.runCommandSilent(`/playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
                    block.level.server.runCommandSilent(`/particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
                    block.level.server.runCommandSilent(`/setblock ${block[i].x} ${block[i].y} ${block[i].z} minecraft:small_amethyst_bud[facing=${i}]`)
                }
                return 50
            }
            return 0;
        }
    )
    event.add(
        "dut_create:large_amethyst_bud",
        "minecraft:large_amethyst_bud",
        (block, fluid, simulate) => {
            if (fluid.id == "minecraft:water" && fluid.amount >= 50) {
                if (!simulate) {
                    let face = block.properties.facing.toString()
                    block.level.server.runCommandSilent(`/playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
                    block.level.server.runCommandSilent(`/particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
                    block.level.server.runCommandSilent(`/setblock ${block.x} ${block.y} ${block.z} minecraft:amethyst_cluster[facing=${face}]`)
                }
                return 50
            }
            return 0;
        }
    )
    event.add(
        "dut_create:medium_amethyst_bud",
        "minecraft:medium_amethyst_bud",
        (block, fluid, simulate) => {
            if (fluid.id == "minecraft:water" && fluid.amount >= 50) {
                if (!simulate) {
                    let face = block.properties.facing.toString()
                    block.level.server.runCommandSilent(`/playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
                    block.level.server.runCommandSilent(`/particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
                    block.level.server.runCommandSilent(`/setblock ${block.x} ${block.y} ${block.z} minecraft:large_amethyst_bud[facing=${face}]`)
                }
                return 50
            }
            return 0;
        }
    )
    event.add(
        "dut_create:small_amethyst_bud",
        "minecraft:small_amethyst_bud",
        (block, fluid, simulate) => {
            if (fluid.id == "minecraft:water" && fluid.amount >= 50) {
                if (!simulate) {
                    let face = block.properties.facing
                    block.level.server.runCommandSilent(`/playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
                    block.level.server.runCommandSilent(`/particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
                    block.level.server.runCommandSilent(`/setblock ${block.x} ${block.y} ${block.z} minecraft:medium_amethyst_bud[facing=${face}]`)
                }
                return 50
            }
            return 0;
        }
    )
})