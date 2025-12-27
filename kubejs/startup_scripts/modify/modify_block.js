const DrawersList = [
    "storagedrawers:spruce_full_drawers_1",
    "storagedrawers:spruce_full_drawers_2",
    "storagedrawers:spruce_full_drawers_4",
    "fluiddrawerslegacy:fluiddrawer",
    "fluiddrawerslegacy:fluiddrawer_2",
    "fluiddrawerslegacy:fluiddrawer_4",
    "storagedrawers:framed_compacting_drawers_3",
    "storagedrawers:framed_compacting_drawers_2",
    "storagedrawers:compacting_drawers_3",
    "storagedrawers:compacting_drawers_2",
    "storagedrawers:framed_full_drawers_1",
    "storagedrawers:framed_full_drawers_2",
    "storagedrawers:framed_full_drawers_4"
]
for (let i of DrawersList) {
    BlockEvents.modification(event => {
        event.modify(i, block => {
            block.explosionResistance=3600000
        })
    })
}