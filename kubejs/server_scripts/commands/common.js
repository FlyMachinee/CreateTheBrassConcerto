//$WorldPath = Utils.server.getWorldPath($LevelResource.ROOT).getParent()
//spawn
ServerEvents.commandRegistry(event => {
    event.dispatcher.register(event.commands.literal('spawn')
        .executes(result => {
            /**@type {Internal.ServerPlayer} */
            let p = result.source.player
            if (p == null) { return 0 }
            let Location = p.getRespawnPosition()
            let TargetDimension = p.getRespawnDimension().location()
            let OriginDimension = p.level.dimension.toString()
            if (!p.hasPermissions(1)) {
                if (DimensionToPlanet[TargetDimension.toString()] != DimensionToPlanet[OriginDimension]) {
                    if (!isCuriosEmpty(p.nbt.ForgeCaps["curios:inventory"].Curios) || !p.inventory.isEmpty()) {
                        p.setStatusMessage(Text.translate("kubejs.message.need_to_be_empty"))
                        return 0
                    }
                }
            }
            try {
                p.persistentData.teleport.lastpoint.pos = {}
                p.persistentData.teleport.lastpoint.pos.x = p.x
                p.persistentData.teleport.lastpoint.pos.y = p.y
                p.persistentData.teleport.lastpoint.pos.z = p.z
                p.persistentData.teleport.lastpoint.dimension = OriginDimension
            } catch (a) {
                console.log(a)
            }
            p.teleportTo(TargetDimension, Location.x, Location.y, Location.z, p.YRot, p.XRot)
            return 1
        })
    )
})
//back
ServerEvents.commandRegistry(event => {
    event.dispatcher.register(event.commands.literal('back')
        .executes(result => {
            /**@type {Internal.ServerPlayer} */
            let p = result.source.player
            if (p == null) { return 0 }
            let OriginDimension = p.level.dimension.toString()
            let TargetDimension = p.persistentData.teleport.lastpoint.dimension
            if (!p.hasPermissions(1)) {
                if (DimensionToPlanet[TargetDimension] != DimensionToPlanet[OriginDimension]) {
                    if (!isCuriosEmpty(p.nbt.ForgeCaps["curios:inventory"].Curios) || !p.inventory.isEmpty()) {
                        p.setStatusMessage(Text.translate("kubejs.message.need_to_be_empty"))
                        return 0
                    }
                }
            }
            let Location = p.persistentData.teleport.lastpoint.pos || p.position()
            //存储当前坐标点
            p.persistentData.teleport.lastpoint1.pos = {}
            p.persistentData.teleport.lastpoint1.pos.x = p.x
            p.persistentData.teleport.lastpoint1.pos.y = p.y
            p.persistentData.teleport.lastpoint1.pos.z = p.z
            p.persistentData.teleport.lastpoint1.dimension = OriginDimension

            p.teleportTo(TargetDimension, Location.x, Location.y, Location.z, p.YRot, p.XRot)
            //修改最后传送坐标点
            p.persistentData.teleport.lastpoint = p.persistentData.teleport.lastpoint1
            p.persistentData.teleport.lastpoint1 = { pos: {}, dimension: "" }
            return 1
        })
    )
})
//sethome
ServerEvents.commandRegistry(event => {
    event.dispatcher.register(event.commands.literal('sethome')
        .executes(result => {
            /**@type {Internal.ServerPlayer} */
            let p = result.source.player
            if (p == null) { return 0 }
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
})
//home
ServerEvents.commandRegistry(event => {
    event.dispatcher.register(event.commands.literal('home')
        .executes(result => {
            /**@type {Internal.ServerPlayer} */
            let p = result.source.player
            if (p == null) { return 0 }
            let OriginDimension = p.level.dimension.toString()
            let TargetDimension = p.persistentData.teleport.home.dimension
            if (!p.hasPermissions(1)) {
                if (DimensionToPlanet[TargetDimension] != DimensionToPlanet[OriginDimension]) {
                    if (!isCuriosEmpty(p.nbt.ForgeCaps["curios:inventory"].Curios) || !p.inventory.isEmpty()) {
                        p.setStatusMessage(Text.translate("kubejs.message.need_to_be_empty"))
                        return 0
                    }
                }
            }
            let Location = p.persistentData.teleport.home.pos || p.position()
            //存储当前坐标点
            p.persistentData.teleport.lastpoint.pos = {}
            p.persistentData.teleport.lastpoint.pos.x = p.x
            p.persistentData.teleport.lastpoint.pos.y = p.y
            p.persistentData.teleport.lastpoint.pos.z = p.z
            p.persistentData.teleport.lastpoint.dimension = OriginDimension

            p.teleportTo(TargetDimension, Location.x, Location.y, Location.z, p.YRot, p.XRot)
            return 1
        })
    )
})
//redeploy
ServerEvents.commandRegistry(event => {
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

            p.runCommandSilent(`/curios clear @s`)
            p.setGameMode("spectator")
            p.inventory.clear()
            p.setStatusMessage(Text.translate("kubejs.message.remake"))
            p.teleportTo("minecraft:overworld", 0, 0, 0, p.YRot, p.XRot)
            return 1
        })
    )
})