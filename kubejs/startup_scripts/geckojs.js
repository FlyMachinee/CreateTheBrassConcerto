
StartupEvents.registry("item", event => {
    event.create("geckojs:stepping_caculator", "animatable")
        .defaultGeoModel()
        .addController(controller => controller
            .name("stepping_controller")
            //第一个参数是命名id(把.name理解成命名空间，下边的理解成id即可)
            //.begin()表示从开头播放动画
            //.thenPlay()表示播放,thenLoop()是循环播放
            .triggerableAnim("using", RawAnimation.begin().thenPlay('working'))
            .triggerableAnim("release_using", RawAnimation.begin().thenPlay('idle'))
        )
        .usingAnimation((self, Level, Player, hand) => {
            self.triggerAnim(Player, GeoItem.getOrAssignId(Player.getItemInHand(hand), Level), 'stepping_controller', 'using')
        })
        .releaseUsingAnimation((self, Level, Player, hand) => {
            self.triggerAnim(Player, GeoItem.getOrAssignId(Player.getItemInHand(hand), Level), 'stepping_controller', 'release_using')
        })
        .useDuration(itemstack => 80)
        .use((level, player, hand) => true)
        .finishUsing((itemstack, level, entity) => {
            if (entity.player && entity.getOffHandItem().id == "kubejs:tin_hard_disk") {
                let player = entity
                player.offHandItem.damageValue -= Math.min(512, player.offHandItem.damageValue)
            }
            return itemstack
        })
        .releaseUsing((itemstack, level, entity, tick) => {
            if (entity.player && entity.getOffHandItem().id == "kubejs:tin_hard_disk") {
                let player = entity
                player.offHandItem.damageValue -= Math.min(Math.floor(512 - 6.4 * tick), player.offHandItem.damageValue)
                player.setStatusMessage(Text.translate("kubejs.tooltip.stepping_caculator_stop"))
            }
            return itemstack
        })
        .displayName = Text.translatable("item.kubejs.stepping_caculator")
})
//.addAnimation(state => {state.setAndContinue(RawAnimation.begin().thenLoop("stepping_caculator_animation.model.working"))
