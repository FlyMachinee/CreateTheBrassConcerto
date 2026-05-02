let $CustomMachineStructureCheck = Java.loadClass('fr.frinn.custommachinery.common.util.BlockStructure')
/*
let BoilerStructure = [
    "design_decor:brass_boiler_structure",
    "design_decor:copper_boiler_structure",
    "design_decor:industrial_iron_boiler_structure",
    "design_decor:cast_iron_boiler_structure",
    "design_decor:aluminium_boiler_structure",
    "design_decor:andesite_boiler_structure",
    "design_decor:zinc_boiler_structure",
    "design_decor:capitalism_boiler_structure",
]
*/
NetworkEvents.dataReceived("multiblockDisplay", event => {
    let d = event.data
    let p = event.player
    let l = p.level
    let xPos = d.pos.x
    let yPos = d.pos.y
    let zPos = d.pos.z
    let map = $CustomMachineStructureCheck.checkGeneralStructureById(l.getBlock(xPos, yPos, zPos).entity, d.id)

    let mapsize = map.size()

    if (mapsize === 0) {
        p.tell(Text.translate("kubejs.message.multiblock_formed"))
    } else {
        let keys = map.keySet()
        let value = ""
        let ivalue = ""
        let count = 0
        for (let i of keys) {
            value = String(map.get(i))
            count++
            if (count <= 7) {
                if (value.includes('[') || value.includes('{')) {
                    let istate = value.match(/\[.*\]/g)
                    let inbt = value.match(/\{.*\}/g)
                    ivalue = value.replace(/\[.*\]/g, '').replace(/\{.*\}/g, '')
                    let text = Text.translate("kubejs.message.multiblock_missing", (xPos + i.x).toString(), (yPos + i.y).toString(), (zPos + i.z).toString()).append(Text.translate(Block.getBlock(ivalue).getDescriptionId()))
                    if (value.includes('[')) {
                        text = text.append(' §6BlockState: ').append(istate)
                    }
                    if (value.includes('{')) {
                        ivalue = value.replace(/\[.*\]/g, '')
                        text = text.append(' §6Nbt: ').append(inbt)
                    }
                    //istate = value.slice(value.indexOf('['))
                    p.tell(text)
                } else {
                    p.tell(Text.translate("kubejs.message.multiblock_missing",
                        (xPos + i.x).toString(),
                        (yPos + i.y).toString(),
                        (zPos + i.z).toString())
                        .append(
                            Text.translate(Block.getBlock(value).getDescriptionId())
                        )
                    )
                }
            }
        }
        if (count > 7) {
            p.tell(Text.translate("kubejs.message.multiblock_missing_omitted", (mapsize - 7).toString()))
        }
        p.tell(Text.translate("kubejs.message.multiblock_multichoice"))
    }
})