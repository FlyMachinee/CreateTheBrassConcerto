//阻止普通玩家死亡转化为旁观模式后的跨星球传送
NativeEvents.onEvent("highest", true, $TravelToDimension, e => {
    if (!e.entity.isPlayer()) { return }
    /**@type {Internal.EntityTravelToDimensionEvent} */
    let event = e
    /**@type {Internal.Player} */
    let player = event.entity
    if (player.hasPermissions(1)) { return }
    if (!player.persistentData.needRespawn) { return }
    const TargetDimension = event.getDimension().location().toString()
    const OriginDimension = player.level.dimension.toString()
    //出发地和目标地是否为同一个星球
    if (DimensionToPlanet[TargetDimension] == DimensionToPlanet[OriginDimension]) { return }
    player.tell(Text.translate("kubejs.message.over_planet_warn"))
    event.setCanceled(true)
})
