const Encasable = ['create:shaft', 'create:belt']
const Uncasingable = ["create:brass_encased_shaft", "create:andesite_encased_shaft"]
const beltCasing = ["create:brass_casing", "create:andesite_casing"]
PlayerEvents.tick(event => {
    if (event.level.time % 10 != 0) { return }
    let viewBlock = event.player.rayTrace(event.player.getAttributeValue("forge:block_reach") + 1, true).block
    let Item = event.player.mainHandItem
    let isCasing = false
    let isEncasable = false
    let isUncasingable = false
    if (Item != null) {
        isCasing = Item.hasTag('dut_create:beltcasing')
    }
    if (viewBlock != null) {
        isEncasable = viewBlock.hasTag('dut_create:encasable')
        isUncasingable = viewBlock.hasTag('dut_create:uncasingable')
    }
    if (!Client.isAltDown()) {
        if (isCasing && isEncasable) {
            event.player.setStatusMessage(Text.translate("kubejs.message.chainedcasing"))
            return
        }
        if ("create:wrench" == Item.id && isUncasingable) {
            event.player.setStatusMessage(Text.translate("kubejs.message.chaineduncasing"))
            return
        }
    }
})
