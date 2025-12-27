ItemEvents.modification(event => {
    event.modify('create_sa:portable_drill', item => {
        item.setTier(i=>{
            i.setLevel(3)
            i.setSpeed(12)
        })
    })
    event.modify('create_sa:brass_sword', item => {
        item.setTier(i=>{
            i.setLevel(3)
            i.setSpeed(12)
        })
    })
    event.modify('create_sa:brass_pickaxe', item => {
        item.setTier(i=>{
            i.setLevel(3)
            i.setSpeed(12)
        })
    })
    event.modify('minecraft:wooden_pickaxe', item => {
        item.setTier(i=>{
            i.setLevel(2)
            i.setSpeed(6)
        })
    })
    event.modify('create_sa:brass_axe', item => {
        item.setTier(i=>{
            i.setLevel(3)
            i.setSpeed(12)
        })
    })
    event.modify('create_sa:brass_hoe', item => {
        item.setTier(i=>{
            i.setLevel(3)
            i.setSpeed(12)
        })
    })
    event.modify('create_sa:brass_shovel', item => {
        item.setTier(i=>{
            i.setLevel(3)
            i.setSpeed(12)
        })
    })
})