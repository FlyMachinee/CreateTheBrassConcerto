// priority: 2048
/**
 * @param {Internal.CompoundTag} curiosnbt event.player.nbt.ForgeCaps["curios:inventory"].Curios
 */
function GetCuriosItemList(curiosnbt) {
    let ItemList = []
    for (let i of curiosnbt) {
        for (let i1 of i.StacksHandler.Stacks.Items) {
            ItemList.push(i1.id)
        }
    }
    return ItemList
}
/**
 * @param {Internal.CompoundTag} curiosnbt event.player.nbt.ForgeCaps["curios:inventory"].Curios
 */
function isCuriosEmpty(curiosnbt) {
    for (let i of curiosnbt) {
        for (let i1 of i.StacksHandler.Stacks.Items) {
            if (i1!=null){
                return false
            }
        }
    }
    return true
}