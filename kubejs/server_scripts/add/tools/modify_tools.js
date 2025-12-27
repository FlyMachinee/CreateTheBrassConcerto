const breakable = ['kubejs:space_elevator', 'kubejs:brass_hard_disk', 'kubejs:aluminum_hard_disk', 'kubejs:tin_hard_disk', 'kubejs:disposable_battery', 'kubejs:chargeable_battery', 'create:super_glue', 'vintageimprovements:v_shaped_curving_head', 'vintageimprovements:concave_curving_head', 'vintageimprovements:convex_curving_head', 'vintageimprovements:w_shaped_curving_head'
]
let $LivingEquipmentChangeEvent = Java.loadClass("net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent")
NativeEvents.onEvent($LivingEquipmentChangeEvent,/**@param {Internal.LivingEquipmentChangeEvent} event */event => {
    let stack = event.getTo()
    if (breakable.includes(stack.id)) { return }
    if (stack.isDamageableItem()) {
        stack.setDamageValue(0)
        stack.nbt.putBoolean("Unbreakable", true)
    }
    if (stack.isEnchanted()) {
        let enchantmentsList = stack.nbt.get('Enchantments')
        let newEnchantmentsList = []
        for (let i = 0; i < enchantmentsList.size(); i++) {
            let enchant = enchantmentsList.get(i)
            let enchantId = enchant.id.toString()
            if (enchantId !== 'minecraft:binding_curse') {
                newEnchantmentsList.push(enchant)
            }
        }
        stack.nbt.put('Enchantments', newEnchantmentsList)
    }

})