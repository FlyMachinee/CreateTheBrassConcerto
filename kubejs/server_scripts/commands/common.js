//$WorldPath = Utils.server.getWorldPath($LevelResource.ROOT).getParent()
ServerEvents.commandRegistry(event => {
    //redeploy
    event.dispatcher.register(event.commands.literal('redeploy')
        .executes(result => {
            /**@type {Internal.ServerPlayer} */
            let p = result.source.player
            if (p == null) { return 0 }
            //存储当前坐标点
            //p.addItemCooldown(,)
            orCreateData(p.persistentData, "teleport", {})
            let pdata = p.persistentData.teleport
            orCreateData(pdata, "lastpoint", {})
            orCreateData(pdata.lastpoint, "pos", {})
            pdata.lastpoint.pos.x = p.x
            pdata.lastpoint.pos.y = p.y
            pdata.lastpoint.pos.z = p.z
            pdata.lastpoint.dimension = p.level.dimension.toString()
            p.persistentData.needRespawn = true
            p.persistentData.FreeCaming = false
            p.runCommandSilent(`/curios clear @s`)
            p.setGameMode("spectator")
            p.inventory.clear()
            p.setStatusMessage(Text.translate("kubejs.message.remake"))
            p.teleportTo("minecraft:overworld", 0, 0, 0, p.yRot || 0, p.xRot || 0)
            return 1
        })
    )
    //disconnect
    event.dispatcher.register(event.commands.literal('disconnect')
        .executes(result => {
            /**@type {Internal.ServerPlayer} */
            let p = result.source.player
            if (p == null) { return 0 }
            orCreateData(p.persistentData, "teleport", {})
            let pdata = p.persistentData.teleport
            //存储当前坐标点
            orCreateData(pdata, "lastpoint", {})
            orCreateData(pdata.lastpoint, "pos", {})
            pdata.lastpoint.pos.x = p.x
            pdata.lastpoint.pos.y = p.y
            pdata.lastpoint.pos.z = p.z
            pdata.lastpoint.dimension = p.level.dimension.toString()

            p.persistentData.needRespawn = true
            p.persistentData.FreeCaming = false
            p.setGameMode("spectator")
            p.setStatusMessage(Text.translate("kubejs.message.redeploy_tips"))
            p.addItemCooldown("kubejs:unknown_prototype", 20)
            return 1
        })
    )
    //setpos
    event.dispatcher.register(event.commands.literal('setpos')
        .then(event.commands.argument('pos', event.arguments.COLUMN_POS.create(event))
            .executes(result => {
                /**@type {Internal.ServerPlayer} */
                let p = result.source.player
                if (p == null) { return 0 }
                orCreateData(p.persistentData, "rocketTargetPos", { x: 0, z: 0 })
                let targetPos = event.arguments.COLUMN_POS.getResult(result, "pos")
                let pdata = p.persistentData.rocketTargetPos
                pdata.x = Math.floor(targetPos.x())
                pdata.z = Math.floor(targetPos.z())
                p.tell(Text.translate("kubejs.message.rocket_target_pos", pdata.x, pdata.z))
                return 1
            })
        )

    )
    //spacestation
    event.dispatcher.register(event.commands.literal('spacestation')
        .requires(source => source.hasPermission(1))
        .then(event.commands.argument('dimension', event.arguments.DIMENSION.create(event))
            .then(event.commands.argument('pos', event.arguments.COLUMN_POS.create(event))
                .executes(result => {
                    /**@type {Internal.ServerPlayer} */
                    let p = result.source.player
                    if (p == null) { return 0 }
                    let dimensionString = event.arguments.DIMENSION.getResult(result, "dimension").dimension.toString()
                    if (!AllPlanet.some(i => i == dimensionString)) {
                        return 0
                    }
                    let TargetDimension = DimensionToOrbit[dimensionString]
                    let targetPos = event.arguments.COLUMN_POS.getResult(result, "pos")
                    //目标维度的level

                    let l = result.source.server.getLevel(TargetDimension)
                    //区块坐标
                    //let chunkPos0 = Math.floor(targetPos.x() / 16) - 1
                    //let chunkPos1 = Math.floor(targetPos.z() / 16) - 1
                    //区域对角
                    let originPos0 = (Math.floor(targetPos.x() / 16) - 1) * 16
                    let originPos1 = (Math.floor(targetPos.z() / 16) - 1) * 16
                    let endPos0 = originPos0 + 48
                    let endPos1 = originPos1 + 48
                    //加载区块  
                    //l.chunkSource.updateChunkForced(chunkPos, true)
                    result.source.server.runCommandSilent(`/execute in ${TargetDimension} run forceload add ${originPos0} ${originPos1} ${endPos0} ${endPos1}`)
                    //判断区域是否为空
                    let allowToSet = true
                    for (let i1 = originPos0; i1 < endPos0; i1++) {
                        for (let i2 = 100; i2 < 116; i2++) {
                            for (let i3 = originPos1; i3 < endPos1; i3++) {
                                if (l.getBlock(i1, i2, i3).id !== "minecraft:air") {
                                    allowToSet = false
                                    break
                                }
                            }
                        }
                    }
                    //放置结构
                    if (allowToSet) {
                        result.source.server.runCommandSilent(`/execute in ${TargetDimension} run place template ad_astra:space_station ${originPos0} 100 ${originPos1}`)
                        p.setStatusMessage(Text.translate("kubejs.message.set_space_station"))
                    } else {
                        p.give("kubejs:emergency_industrial_platform_space")
                        p.setStatusMessage(Text.translate("kubejs.message.set_space_station_fail"))
                    }
                    orCreateData(p.persistentData, "rocketTargetPos", { x: 0, z: 0 })
                    let pdata = p.persistentData.rocketTargetPos
                    pdata.x = originPos0 + 22
                    pdata.z = originPos1 + 22

                    result.source.server.runCommandSilent(`/execute in ${TargetDimension} run forceload remove ${originPos0} ${originPos1} ${endPos0} ${endPos1}`)
                    return 1
                })
            )
        )
    )
    const BoolToLockedKey = { "1": "kubejs.message.locked", "0": "kubejs.message.unlocked", "true": "kubejs.message.locked", "false": "kubejs.message.unlocked" }
    const LockedTypeToKey = { "not_monster": "kubejs.message.spawntype.not_monster", "only_monster": "kubejs.message.spawntype.only_monster", "both": "kubejs.message.spawntype.both", "allowed": "kubejs.message.spawntype.allowed" }
    //锁定自然生成设置
    event.dispatcher.register(event.commands.literal('lockspawn')
        .requires(source => source.hasPermission(2))
        .then(event.commands.literal('force_locked')
            .executes(result => {
                let p = result.source.player
                let sdata = result.source.server.persistentData
                orCreateData(sdata, "LockedSpawnDimension", {})
                orCreateData(sdata, "AllDimensionSpawnLocked", true)
                sdata.AllDimensionSpawnLocked = true

                //将所有已设置锁定状态的维度改为锁定
                Object.keys(sdata.LockedSpawnDimension).forEach(key => {
                    sdata.LockedSpawnDimension[key] = true
                })
                //处理未设置锁定状态但已被修改过的维度
                orCreateData(sdata, "EntityNotAllowed", {})
                Object.keys(sdata.EntityNotAllowed).forEach(key => {
                    orCreateData(sdata.LockedSpawnDimension, key, true)
                    sdata.LockedSpawnDimension[key] = true
                })

                p.tell(
                    Text.translate("kubejs.message.spawnalllocked")
                )
                console.log(sdata.LockedSpawnDimension)
                return 1
            })
        )
        .then(event.commands.literal('unforce_locked')
            .executes(result => {
                let p = result.source.player
                let sdata = result.source.server.persistentData
                orCreateData(sdata, "LockedSpawnDimension", {})
                orCreateData(sdata, "AllDimensionSpawnLocked", false)
                sdata.AllDimensionSpawnLocked = false
                p.tell(
                    Text.translate("kubejs.message.spawnallunlocked")
                )
                return 1
            })
        )
        .then(event.commands.argument('dimension', event.arguments.DIMENSION.create(event))
            .executes(result => {
                let dim = event.arguments.DIMENSION.getResult(result, "dimension").dimension.toString()
                let p = result.source.player
                let sdata = result.source.server.persistentData
                orCreateData(sdata, "LockedSpawnDimension", {})
                orCreateData(sdata, "AllDimensionSpawnLocked", false)

                if (sdata.AllDimensionSpawnLocked) {
                    p.tell(Text.translate("kubejs.message.spawnalllocked"))
                    return 0
                } else {
                    orCreateData(sdata.LockedSpawnDimension, dim, false)
                    sdata.LockedSpawnDimension[dim] = !sdata.LockedSpawnDimension[dim]
                }
                console.log(sdata.LockedSpawnDimension)
                p.tell(
                    Text.translate("kubejs.message.lockspawn", Text.translate(DimensionNameKey[dim] || dim), Text.translate(BoolToLockedKey[sdata.LockedSpawnDimension[dim].toString()]))
                )
                return 1
            })
        )
    )
    //自然生成设置
    event.dispatcher.register(event.commands.literal('spawnsetting')
        .then(event.commands.literal('list')
            .executes(result => {
                let p = result.source.player
                let sdata = result.source.server.persistentData
                orCreateData(sdata, "AllDimensionSpawnLocked", false)
                orCreateData(sdata, "LockedSpawnDimension", {})
                orCreateData(sdata, "EntityNotAllowed", {})
                let AllEntityNotAllowed = Array.from(sdata.EntityNotAllowed.getAllKeys().toArray())
                if (AllEntityNotAllowed.length == 0) {
                    p.tell(Text.translate("kubejs.message.spawnlist.none"))
                    p.tell("")
                    return 1
                }
                p.tell(Text.translate("kubejs.message.spawnlist"))
                for (let i of AllEntityNotAllowed) {
                    p.tell(
                        Text.translate("kubejs.message.spawnlist.text",
                            Text.translate(DimensionNameKey[i] || i),
                            Text.translate(LockedTypeToKey[sdata.EntityNotAllowed[i] || "allowed"]),
                            Text.translate(BoolToLockedKey[sdata.LockedSpawnDimension[i] || sdata.AllDimensionSpawnLocked])
                        ))
                    p.tell("")
                }
                return 1
            })
        )
        .then(event.commands.argument('dimension', event.arguments.DIMENSION.create(event))
            .then(event.commands.literal('not_monster')
                .executes(result => {
                    let dim = event.arguments.DIMENSION.getResult(result, "dimension").dimension.toString()
                    let p = result.source.player
                    let sdata = result.source.server.persistentData
                    orCreateData(sdata, "AllDimensionSpawnLocked", false)
                    orCreateData(sdata, "LockedSpawnDimension", {})
                    if (sdata.AllDimensionSpawnLocked) {
                        orCreateData(sdata.LockedSpawnDimension, dim, true)
                        p.tell(
                            Text.translate("kubejs.message.spawnlocked", Text.translate(DimensionNameKey[dim] || dim))
                        )
                        return 0
                    }
                    if (sdata.LockedSpawnDimension[dim]) {
                        p.tell(
                            Text.translate("kubejs.message.spawnlocked", Text.translate(DimensionNameKey[dim] || dim))
                        )
                        return 0
                    }

                    orCreateData(sdata, "EntityNotAllowed", {})
                    sdata.EntityNotAllowed[dim] = 'not_monster'

                    p.tell(
                        Text.translate("kubejs.message.setspawn", Text.translate(DimensionNameKey[dim] || dim), Text.translate(LockedTypeToKey[sdata.EntityNotAllowed[dim]]))
                    )
                    return 1
                })
            )
            .then(event.commands.literal('only_monster')
                .executes(result => {
                    let dim = event.arguments.DIMENSION.getResult(result, "dimension").dimension.toString()
                    let p = result.source.player
                    let sdata = result.source.server.persistentData
                    orCreateData(sdata, "AllDimensionSpawnLocked", false)
                    orCreateData(sdata, "LockedSpawnDimension", {})
                    if (sdata.AllDimensionSpawnLocked) {
                        orCreateData(sdata.LockedSpawnDimension, dim, true)
                        p.tell(
                            Text.translate("kubejs.message.spawnlocked", Text.translate(DimensionNameKey[dim] || dim))
                        )
                        return 0
                    }
                    if (sdata.LockedSpawnDimension[dim]) {
                        p.tell(
                            Text.translate("kubejs.message.spawnlocked", Text.translate(DimensionNameKey[dim] || dim))
                        )
                        return 0
                    }

                    orCreateData(sdata, "EntityNotAllowed", {})
                    sdata.EntityNotAllowed[dim] = 'only_monster'

                    p.tell(
                        Text.translate("kubejs.message.setspawn", Text.translate(DimensionNameKey[dim] || dim), Text.translate(LockedTypeToKey[sdata.EntityNotAllowed[dim]]))
                    )
                    return 1
                })
            )
            .then(event.commands.literal('both')
                .executes(result => {
                    let dim = event.arguments.DIMENSION.getResult(result, "dimension").dimension.toString()
                    let p = result.source.player
                    let sdata = result.source.server.persistentData
                    orCreateData(sdata, "AllDimensionSpawnLocked", false)
                    orCreateData(sdata, "LockedSpawnDimension", {})
                    if (sdata.AllDimensionSpawnLocked) {
                        orCreateData(sdata.LockedSpawnDimension, dim, true)
                        p.tell(
                            Text.translate("kubejs.message.spawnlocked", Text.translate(DimensionNameKey[dim] || dim))
                        )
                        return 0
                    }
                    if (sdata.LockedSpawnDimension[dim]) {
                        p.tell(
                            Text.translate("kubejs.message.spawnlocked", Text.translate(DimensionNameKey[dim] || dim))
                        )
                        return 0
                    }

                    orCreateData(sdata, "EntityNotAllowed", {})
                    sdata.EntityNotAllowed[dim] = 'both'

                    p.tell(
                        Text.translate("kubejs.message.setspawn", Text.translate(DimensionNameKey[dim] || dim), Text.translate(LockedTypeToKey[sdata.EntityNotAllowed[dim]]))
                    )
                    return 1
                })
            )
            .then(event.commands.literal('allowed')
                .executes(result => {
                    let dim = event.arguments.DIMENSION.getResult(result, "dimension").dimension.toString()
                    let p = result.source.player
                    let sdata = result.source.server.persistentData
                    orCreateData(sdata, "AllDimensionSpawnLocked", false)
                    orCreateData(sdata, "LockedSpawnDimension", {})
                    if (sdata.AllDimensionSpawnLocked) {
                        orCreateData(sdata.LockedSpawnDimension, dim, true)
                        p.tell(
                            Text.translate("kubejs.message.spawnlocked", Text.translate(DimensionNameKey[dim] || dim))
                        )
                        return 0
                    }
                    if (sdata.LockedSpawnDimension[dim]) {
                        p.tell(
                            Text.translate("kubejs.message.spawnlocked", Text.translate(DimensionNameKey[dim] || dim))
                        )
                        return 0
                    }

                    orCreateData(sdata, "EntityNotAllowed", {})
                    sdata.EntityNotAllowed.remove(dim)

                    p.tell(
                        Text.translate("kubejs.message.setspawn", Text.translate(DimensionNameKey[dim] || dim), Text.translate(LockedTypeToKey["allowed"]))
                    )
                    return 1
                })
            )
        )
    )

})