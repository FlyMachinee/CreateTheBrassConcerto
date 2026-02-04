//$WorldPath = Utils.server.getWorldPath($LevelResource.ROOT).getParent()
ServerEvents.commandRegistry(event => {
    //spawn
    event.dispatcher.register(event.commands.literal('spawn')
        .executes(result => {
            /**@type {Internal.ServerPlayer} */
            let p = result.source.player
            if (p == null) { return 0 }
            let Location = p.getRespawnPosition()
            let TargetDimension = p.getRespawnDimension().location()
            let OriginDimension = p.level.dimension.toString()
            if (DimensionToPlanet[TargetDimension.toString()] != DimensionToPlanet[OriginDimension]) {
                if (!isCuriosEmpty(p.nbt.ForgeCaps["curios:inventory"].Curios) || !p.inventory.isEmpty()) {
                    p.setStatusMessage(Text.translate("kubejs.message.need_to_be_empty"))
                    return 0
                }
            }
            orCreateData(p.persistentData, "teleport", {})
            orCreateData(p.persistentData.teleport, "lastpoint", {})
            let pdata = p.persistentData.teleport.lastpoint
            pdata.pos = {}
            pdata.pos.x = p.x
            pdata.pos.y = p.y
            pdata.pos.z = p.z
            pdata.dimension = OriginDimension

            p.teleportTo(TargetDimension, Location.x, Location.y, Location.z, p.YRot, p.XRot)
            return 1
        })
    )
    //back
    event.dispatcher.register(event.commands.literal('back')
        .executes(result => {
            /**@type {Internal.ServerPlayer} */
            let p = result.source.player
            if (p == null) { return 0 }
            let OriginDimension = p.level.dimension.toString()
            orCreateData(p.persistentData, "teleport", {})
            orCreateData(p.persistentData.teleport, "lastpoint", {})
            orCreateData(p.persistentData.teleport, "lastpoint1", {})
            let TargetDimension = p.persistentData.teleport.lastpoint.dimension
            if (DimensionToPlanet[TargetDimension] != DimensionToPlanet[OriginDimension]) {
                if (!isCuriosEmpty(p.nbt.ForgeCaps["curios:inventory"].Curios) || !p.inventory.isEmpty()) {
                    p.setStatusMessage(Text.translate("kubejs.message.need_to_be_empty"))
                    return 0
                }
            }

            let pdata = p.persistentData.teleport
            if (!pdata.lastpoint.contains("pos")) {
                return 0
            }
            let Location = pdata.lastpoint.pos
            //存储当前坐标点
            pdata.lastpoint1.pos = {}
            pdata.lastpoint1.pos.x = p.x
            pdata.lastpoint1.pos.y = p.y
            pdata.lastpoint1.pos.z = p.z
            pdata.lastpoint1.dimension = OriginDimension

            p.teleportTo(TargetDimension, Location.x, Location.y, Location.z, p.YRot, p.XRot)
            //修改最后传送坐标点
            pdata.lastpoint = pdata.lastpoint1
            return 1
        })
    )
    //sethome
    event.dispatcher.register(event.commands.literal('sethome')
        .executes(result => {
            /**@type {Internal.ServerPlayer} */
            let p = result.source.player
            if (p == null) { return 0 }
            orCreateData(p.persistentData, "teleport", {})
            orCreateData(p.persistentData.teleport, "home", {})
            let pdata = p.persistentData.teleport.home
            pdata.pos = {}
            pdata.pos.x = p.x
            pdata.pos.y = p.y
            pdata.pos.z = p.z
            pdata.dimension = p.level.dimension.toString()
            p.tell(Text.translate("kubejs.message.sethome").append('§e' + p.x.toFixed(1) + ' ' + p.y.toFixed(1) + ' ' + p.z.toFixed(1) + ' ').append(Text.translate(DimensionNameKey[pdata.dimension]).color(Color.GOLD)))
            return 1
        })
    )
    //home
    event.dispatcher.register(event.commands.literal('home')
        .executes(result => {
            /**@type {Internal.ServerPlayer} */
            let p = result.source.player
            if (p == null) { return 0 }
            let OriginDimension = p.level.dimension.toString()
            orCreateData(p.persistentData, "teleport", {})
            let pdata = p.persistentData.teleport
            orCreateData(pdata, "home", {})
            let TargetDimension = pdata.home.dimension
            if (DimensionToPlanet[TargetDimension] != DimensionToPlanet[OriginDimension]) {
                if (!isCuriosEmpty(p.nbt.ForgeCaps["curios:inventory"].Curios) || !p.inventory.isEmpty()) {
                    p.setStatusMessage(Text.translate("kubejs.message.need_to_be_empty"))
                    return 0
                }
            }
            let Location = pdata.home.pos || p.position()
            //存储当前坐标点
            orCreateData(pdata, "lastpoint", {})
            pdata.lastpoint.pos = {}
            pdata.lastpoint.pos.x = p.x
            pdata.lastpoint.pos.y = p.y
            pdata.lastpoint.pos.z = p.z
            pdata.lastpoint.dimension = OriginDimension

            p.teleportTo(TargetDimension, Location.x, Location.y, Location.z, p.YRot, p.XRot)
            return 1
        })
    )
    //redeploy
    event.dispatcher.register(event.commands.literal('redeploy')
        .executes(result => {
            /**@type {Internal.ServerPlayer} */
            let p = result.source.player
            if (p == null) { return 0 }
            //存储当前坐标点
            p.persistentData.teleport.lastpoint.pos = {}
            p.persistentData.teleport.lastpoint.pos.x = p.x
            p.persistentData.teleport.lastpoint.pos.y = p.y
            p.persistentData.teleport.lastpoint.pos.z = p.z
            p.persistentData.teleport.lastpoint.dimension = p.level.dimension.toString()
            p.persistentData.needRespawn = true
            p.persistentData.FreeCaming = false
            p.runCommandSilent(`/curios clear @s`)
            p.setGameMode("spectator")
            p.inventory.clear()
            p.setStatusMessage(Text.translate("kubejs.message.remake"))
            p.teleportTo("minecraft:overworld", 0, 0, 0, p.YRot, p.XRot)
            return 1
        })
    )
    //disconnect
    event.dispatcher.register(event.commands.literal('disconnect')
        .executes(result => {
            /**@type {Internal.ServerPlayer} */
            let p = result.source.player
            if (p == null) { return 0 }
            if (p.persistentData.needRespawn) { return 0 }
            //存储当前坐标点
            try {
                p.persistentData.teleport.lastpoint.pos = {}
                p.persistentData.teleport.lastpoint.pos.x = p.x
                p.persistentData.teleport.lastpoint.pos.y = p.y
                p.persistentData.teleport.lastpoint.pos.z = p.z
                p.persistentData.teleport.lastpoint.dimension = p.level.dimension.toString()

                p.persistentData.needRespawn = true
                p.persistentData.FreeCaming = false
                p.setGameMode("spectator")
                p.setStatusMessage(Text.translate("kubejs.message.redeploy_tips"))
                p.addItemCooldown("kubejs:unknown_prototype", 20)
            } catch (e) {
                console.log(e)
            }
            return 1
        })
    )
    //setwarp
    event.dispatcher.register(event.commands.literal('setwarp')
        .requires(source => source.hasPermission(2))
        .then(event.commands.argument('warpname', event.arguments.STRING.create(event))
            .executes(result => {
                /**@type {Internal.MinecraftServer} */
                let s = result.source.server
                /**@type {Internal.ServerPlayer} */
                let p = result.source.player
                if (p == null) { return 0 }

                let warpname_origin = String(event.arguments.STRING.getResult(result, "warpname"))
                let warpname = warpname_origin
                if (/^[+-]?\d+(\.\d+)?$/.test(warpname_origin)) {
                    warpname = '"' + warpname_origin + '"'
                }
                orCreateData(s.persistentData, "warp", {})
                let sdata = s.persistentData.warp
                orCreateData(sdata, warpname, {})
                sdata[warpname].pos = {}
                sdata[warpname].pos.x = p.x
                sdata[warpname].pos.y = p.y
                sdata[warpname].pos.z = p.z
                sdata[warpname].dimension = p.level.dimension.toString()
                p.tell(Text.translate("kubejs.message.setwarp").append('§e' + warpname + ' || ' + p.x.toFixed(1) + ' ' + p.y.toFixed(1) + ' ' + p.z.toFixed(1) + ' ').append(Text.translate(DimensionNameKey[p.level.dimension.toString()]).color(Color.GOLD)))
                return 1
            })
        )
    )
    //warplist
    event.dispatcher.register(event.commands.literal('warplist')
        .requires(source => source.hasPermission(2))
        .then(event.commands.argument('page', event.arguments.INTEGER.create(event))
            .executes(result => {
                /**@type {Internal.MinecraftServer} */
                let s = result.source.server
                /**@type {Internal.ServerPlayer} */
                let p = result.source.player
                if (p == null) { return 0 }
                orCreateData(s.persistentData, "warp", {})
                let sdata = Array.from(s.persistentData.warp.getAllKeys().toArray())
                if (sdata.length == 0) {
                    p.tell(Text.translate("kubejs.message.no_warp"))
                    return 0
                }
                let sdataTotalPage = Math.ceil(sdata.length / 8)
                let warpnamepage = Math.min(
                    Math.max(
                        1,
                        event.arguments.INTEGER.getResult(result, "page")
                    ),
                    sdataTotalPage
                )
                p.tell(Text.translate("kubejs.message.warp_list", warpnamepage.toString(), sdataTotalPage.toString()))
                for (let i = (warpnamepage - 1) * 8; i < Math.min(warpnamepage * 8, sdata.length); i++) {
                    p.tell(Text.of('[' + sdata[i] + ']').clickRunCommand('/warp ' + sdata[i]).hover(Text.translate("kubejs.message.warp_hover")))
                }
                return 1
            })
        )

    )
    //warp
    event.dispatcher.register(event.commands.literal('warp')
        .then(event.commands.argument('warpname', event.arguments.GREEDY_STRING.create(event))
            .executes(result => {
                /**@type {Internal.MinecraftServer} */
                let s = result.source.server
                /**@type {Internal.ServerPlayer} */
                let p = result.source.player
                if (p == null) { return 0 }
                orCreateData(s.persistentData, "warp", {})
                let warpname_origin = String(event.arguments.GREEDY_STRING.getResult(result, "warpname"))
                let warpname = warpname_origin
                if (/^[+-]?\d+(\.\d+)?$/.test(warpname_origin)) {
                    warpname = '"' + warpname_origin + '"'
                }

                let sdata = s.persistentData.warp
                let sdataArray = Array.from(sdata.getAllKeys().toArray())
                if (sdataArray.some(i => i == warpname)) {

                    let pdata = p.persistentData.teleport.lastpoint
                    let TargetWarp = sdata[warpname]
                    //存储当前坐标点
                    pdata.pos = {}
                    pdata.pos.x = p.x
                    pdata.pos.y = p.y
                    pdata.pos.z = p.z
                    pdata.dimension = p.level.dimension.toString()

                    p.teleportTo(TargetWarp.dimension, TargetWarp.pos.x, TargetWarp.pos.y, TargetWarp.pos.z, p.YRot, p.XRot)
                    return 1
                }
                return 0
            })
        )

    )
    //delwarp
    event.dispatcher.register(event.commands.literal('delwarp')
        .then(event.commands.argument('warpname', event.arguments.GREEDY_STRING.create(event))
            .executes(result => {
                /**@type {Internal.MinecraftServer} */
                let s = result.source.server
                /**@type {Internal.ServerPlayer} */
                let p = result.source.player
                if (p == null) { return 0 }
                orCreateData(s.persistentData, "warp", {})
                let warpname_origin = String(event.arguments.GREEDY_STRING.getResult(result, "warpname"))
                let warpname = warpname_origin
                if (/^[+-]?\d+(\.\d+)?$/.test(warpname_origin)) {
                    warpname = '"' + warpname_origin + '"'
                }

                let sdata = s.persistentData.warp
                let sdataArray = Array.from(sdata.getAllKeys().toArray())
                if (sdataArray.some(i => i == warpname)) {
                    sdata.remove(warpname)
                    p.tell(Text.translate("kubejs.message.delwarp", warpname))
                    return 1
                }
                return 0
            })
        )

    )
    //tpa
    event.dispatcher.register(event.commands.literal('tpa')
        .then(event.commands.argument('player', event.arguments.PLAYER.create(event))
            .executes(result => {
                /**@type {Internal.ServerPlayer} */
                let p = result.source.player
                if (p == null) { return 0 }
                /**@type {Internal.ServerPlayer} */
                let tpap = event.arguments.PLAYER.getResult(result, "player")

                let OriginDimension = p.level.dimension.toString()
                let TargetDimension = tpap.level.dimension.toString()

                if (DimensionToPlanet[TargetDimension] != DimensionToPlanet[OriginDimension]) {
                    p.setStatusMessage(Text.translate("kubejs.message.sendfail"))
                    return 0
                }

                let tpapdata = tpap.persistentData
                orCreateData(tpapdata, "tpa_requirement", {})
                orCreateData(tpapdata.tpa_requirement, tpap.username, {})
                tpapdata.tpa_requirement[tpap.username].type = "tpa"

                p.tell(Text.translate("kubejs.message.sendtpa", tpap.username))
                tpap.tell(Text.translate("kubejs.message.tpa", p.username).append(Text.translate("kubejs.message.accept").clickRunCommand(`/tpaccept ${p.username}`)))
                return 1
            })
        )

    )
    //tpahere
    event.dispatcher.register(event.commands.literal('tpahere')
        .then(event.commands.argument('player', event.arguments.PLAYER.create(event))
            .executes(result => {
                /**@type {Internal.ServerPlayer} */
                let p = result.source.player
                if (p == null) { return 0 }
                /**@type {Internal.ServerPlayer} */
                let tpap = event.arguments.PLAYER.getResult(result, "player")

                let OriginDimension = p.level.dimension.toString()
                let TargetDimension = tpap.level.dimension.toString()

                if (DimensionToPlanet[TargetDimension] != DimensionToPlanet[OriginDimension]) {
                    p.setStatusMessage(Text.translate("kubejs.message.sendfail"))
                    return 0
                }

                let tpapdata = tpap.persistentData
                orCreateData(tpapdata, "tpa_requirement", {})
                orCreateData(tpapdata.tpa_requirement, tpap.username, {})
                tpapdata.tpa_requirement[tpap.username].type = "tpahere"

                p.tell(Text.translate("kubejs.message.sendtpa", tpap.username))
                tpap.tell(Text.translate("kubejs.message.tpahere", p.username).append(Text.translate("kubejs.message.accept").clickRunCommand(`/tpaccept ${p.username}`)))
                return 1
            })
        )

    )
    //tpaccept
    event.dispatcher.register(event.commands.literal('tpaccept')
        .then(event.commands.argument('player', event.arguments.PLAYER.create(event))
            .executes(result => {
                let s = result.source.server
                /**@type {Internal.ServerPlayer} */
                let p = result.source.player
                if (p == null) { return 0 }
                /**@type {Internal.ServerPlayer} */
                let tpap = event.arguments.PLAYER.getResult(result, "player")

                let OriginDimension = p.level.dimension.toString()
                let TargetDimension = tpap.level.dimension.toString()
                if (DimensionToPlanet[TargetDimension] != DimensionToPlanet[OriginDimension]) {
                    p.setStatusMessage(Text.translate("kubejs.message.acceptfail"))
                    return 0
                }
                let pdata = p.persistentData
                orCreateData(pdata, "tpa_requirement", {})
                if (pdata.tpa_requirement.contains(tpap.username)) {
                    orCreateData(pdata.tpa_requirement[tpap.username], "type", "tpa")
                    switch (pdata.tpa_requirement[tpap.username].type) {
                        case "tpa":
                            s.runCommandSilent(`/tp ${p.username} ${tpap.username}`)
                            pdata.tpa_requirement.remove(tpap.username)
                            break
                        default:
                            s.runCommandSilent(`/tp ${tpap.username} ${p.username}`)
                            pdata.tpa_requirement.remove(tpap.username)
                            break
                    }
                    return 1
                } else {
                    p.setStatusMessage(Text.translate("kubejs.message.no_request"))
                }
                return 0
            })
        )

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
                    if (!AllPlanet.some(i=>i==dimensionString)){
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
    //eval
    /*
    event.dispatcher.register(event.commands.literal('eval')
        .then(event.commands.argument('code', event.arguments.GREEDY_STRING.create(event))
            .executes(result => {
                let Source = result.source
                let e = Source.entity
                if (e.type === "minecraft:player") {
                    let p = result.source.player
                    if (p.username !== "Slimeli_") {
                        p.tell("只有作者可以使用此指令")
                        return 0
                    }
                }
                let Code = String(event.arguments.GREEDY_STRING.getResult(result, "code"))
                try {
                    eval('{'+Code+'}')
                    return 1
                } catch (a) {
                    console.error(a)
                }
                return 0
            })
        )
    )*/
})