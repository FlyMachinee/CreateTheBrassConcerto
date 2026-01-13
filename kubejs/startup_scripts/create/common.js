Platform.mods.kubejs.name = 'The Brass Concerto'
StartupEvents.registry('item', event => {
    event.create('coin_copper')
    event.create('coin_iron')
    event.create('coin_gold')
    event.create('coin_emerald')
    event.create('coin_diamond')
    event.create('coin_netherite')
    event.create('unknown_prototype').maxStackSize(16).rarity('EPIC').glow(true)
    event.create('salt')
    //event.create('kelp_dust').burnTime(60)
    event.create('sulphur').burnTime(600)
    event.create('crushed_coal').burnTime(1600)
    event.create('rubber')
    event.create('graphite').burnTime(1600)
    event.create('graphene_coil').burnTime(1600)
    event.create('carborundum').burnTime(1600)
    event.create('carborundum_lens').burnTime(6400)
    event.create('fiber_fabric')
    event.create('brine_gel').maxStackSize(16)
    event.create('lava_gel').maxStackSize(16)
    event.create('mossy_mud').maxStackSize(16)
    event.create('slime_crystal').maxStackSize(16)
    event.create('slime_tube')
    event.create('bronze_triangle').maxStackSize(16)
    event.create('creative_motor_blueprint').maxStackSize(16).rarity('EPIC')
    function getcolor(i) {
        if (i == null || i == 0) return "60"
        if (i > 0) { return (255 - Math.floor((i % 128) / 2)).toString(16) }
        else { return (191 + Math.floor(((i+1)  % 128) / 2)).toString(16) }
    }
    event.create('matrix_2')
        .textureJson({
            layer0: 'kubejs:item/test/matrix',
            layer1: 'kubejs:item/test/matrix1_1',
            layer2: 'kubejs:item/test/matrix1_2',
            layer3: 'kubejs:item/test/matrix2_1',
            layer4: 'kubejs:item/test/matrix2_2'
        })
        .color((item, tintIndex) => {
            if (item.nbt?.matrix == null) return -1
            let matrix1 = item.nbt?.matrix[0]
            let matrix2 = item.nbt?.matrix[1]
            let matrix3 = item.nbt?.matrix[2]
            if (matrix1 == null || matrix1.length < 2) { matrix1 = [[0, 0], [0, 0]] }
            if (matrix2 == null || matrix2.length < 2) { matrix2 = [[0, 0], [0, 0]] }
            if (matrix3 == null || matrix3.length < 2) { matrix3 = [[0, 0], [0, 0]] }
            switch (tintIndex) {
                case 0:
                    return -1
                case 1:
                    let color1 = `#${getcolor(matrix1[0][0])}${getcolor(matrix2[0][0])}${getcolor(matrix3[0][0])}`
                    if (color1 == '#606060') { return '#AAAAAA' }
                    return color1
                case 2:
                    let color2 = `#${getcolor(matrix1[0][1])}${getcolor(matrix2[0][1])}${getcolor(matrix3[0][1])}`
                    if (color2 == '#606060') { return '#AAAAAA' }
                    return color2
                case 3:
                    let color3 = `#${getcolor(matrix1[1][0])}${getcolor(matrix2[1][0])}${getcolor(matrix3[1][0])}`
                    if (color3 == '#606060') { return '#AAAAAA' }
                    return color3
                case 4:
                    let color4 = `#${getcolor(matrix1[1][1])}${getcolor(matrix2[1][1])}${getcolor(matrix3[1][1])}`
                    if (color4 == '#606060') { return '#AAAAAA' }
                    return color4
            }
        })
        .tooltip(Text.translate("kubejs.tooltip.matrix"))
    //event.create('')
})
ItemEvents.modification(event => {
    event.modify('create:industrial_iron_block', item => {
        item.rarity = 'UNCOMMON'
    })
})
StartupEvents.registry('block', event => {
    event.create('carbon_electrode')
        .woodSoundType()
        .hardness(12)
        .resistance(800)
        .opaque(false)
        .fullBlock(false)
        .box(4, 0, 4, 12, 16, 12, true)
        .notSolid()
        .suffocating(false)
        .transparent(true)
        .viewBlocking(false)
        .tagBlock('create:wrench_pickup')
        .noValidSpawns(true)
        .defaultCutout()
    event.create('bronze_fuel_rod')
        .stoneSoundType()
        .hardness(12)
        .resistance(8000)
        .opaque(false)
        .fullBlock(false)
        .box(3, 0, 3, 13, 16, 13, true)
        .notSolid()
        .suffocating(false)
        .transparent(true)
        .viewBlocking(false)
        .tagBlock('create:wrench_pickup')
        .noValidSpawns(true)
        .defaultCutout()
})
