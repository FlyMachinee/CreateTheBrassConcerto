
//乘法
function matrix2x2Multiply(A, B) {
    return [
        [(A[0][0] * B[0][0] + A[0][1] * B[1][0]) % 128, (A[0][0] * B[0][1] + A[0][1] * B[1][1]) % 128],
        [(A[1][0] * B[0][0] + A[1][0] * B[1][0]) % 128, (A[0][0] * B[0][1] + A[0][1] * B[1][1]) % 128]
    ]
}
function matrix2x2Add(A, B) {
    return ([
        [A[0][0] + B[0][0], A[0][1] + B[0][1]],
        [A[1][0] + B[1][0], A[1][1] + B[1][1]]
    ])
}
function matrixAdd(A, B) {
    let len = Math.max(A.length, B.length)
    let C = []
    for (let i = 0; i < len; i++) {
        C[i] = matrix2x2Add(A[i] || [[0, 0], [0, 0]], B[i] || [[0, 0], [0, 0]])
    }
    return C
}
const matrixFacing = { west: [[-1, -1, 0], [1, -1, 0]], east: [[1, -1, 0], [-1, -1, 0]], south: [[0, -1, 1], [0, -1, -1]], north: [[0, -1, -1], [0, -1, 1]] }

const $Integer = Java.loadClass("java.lang.Integer")
//a
//give @s kubejs:matrix_2{RGB:[[[-1,1],[2,0]]],matrix:[[[-1,1],[2,0]]]}
//b
//give @s kubejs:matrix_2{RGB:[[[1,0],[2,0]]],matrix:[[[1,0],[2,0]]]}
//c
//give @s kubejs:matrix_2{RGB:[[[2,0],[0,1]]],matrix:[[[2,0],[0,1]]]}
//d
//give @s kubejs:matrix_2{RGB:[[[0,1],[2,0]]],matrix:[[[0,1],[2,0]]]}
//e
//give @s kubejs:matrix_2{RGB:[[[1,1],[3,1]]],matrix:[[[1,1],[3,1]]]}
//A
//give @s kubejs:matrix_2{RGB:[[[1,1],[0,1]]],matrix:[[[1,1],[0,1]]]}
//B
//give @s kubejs:matrix_2{RGB:[[[0,2],[0,1]]],matrix:[[[0,2],[0,1]]]}
//give @s kubejs:matrix_2{RGB:[[[2,3],[3,2]],[[0,-1],[-1,0]]],matrix:[[[2,3],[3,2]],[[0,-1],[-1,0]]]}

//give @s kubejs:matrix_2{matrix:[[[47,0],[0,1]],[[103,0],[0,1]],[[97,0],[0,1]],[[109,0],[0,1]],[[101,0],[0,1]],[[109,0],[0,1]],[[111,0],[0,1]],[[100,0],[0,1]],[[101,0],[0,1]],[[32,0],[0,1]],[[99,0],[0,1]],[[114,0],[0,1]],[[101,0],[0,1]],[[97,0],[0,1]],[[116,0],[0,1]],[[105,0],[0,1]],[[118,0],[0,1]],[[101,0],[0,1]]]}
    /*
let CanisterDisplay = {
    'create_things_and_misc:diluted_bonemeal': Item.of('minecraft:bone_meal'),
    'vintageimprovements:sulfur_dioxide': Item.of('kubejs:sulphur'),
    'vintageimprovements:sulfur_trioxide': Item.of('createloveandwar:sulphur'),
    'kubejs:superheated_steam': Item.of('kubejs:blaze_chlamydia'),
    'kubejs:slime_coin': Item.of('kubejs:coin_emerald'),
    'kubejs:electro_hydro': Item.of('kubejs:unsteady_electro_hydro'),
    'kubejs:covariant_heat': Item.of('kubejs:bronze_triangle'),
    'kubejs:fused_alumina': Item.of('kubejs:aluminum_slag'),
    'kubejs:aluminum': Item.of('kubejs:aluminum_ingot'),
    'kubejs:desh': Item.of('ad_astra:desh_ingot'),
    'kubejs:tin': Item.of('kubejs:tin_ingot'),
    'kubejs:new_zinc': Item.of('kubejs:new_zinc_ingot'),
    'kubejs:gold': Item.of('minecraft:gold_ingot'),
    'kubejs:iron': Item.of('minecraft:iron_ingot'),
    'kubejs:copper': Item.of('minecraft:copper_ingot'),
    'kubejs:brass': Item.of('create:brass_ingot'),
    'kubejs:industrial_iron': Item.of('kubejs:industrial_iron_ingot'),
    'kubejs:incomplete_steel': Item.of('kubejs:incomplete_steel_bucket'),
    'createbigcannons:molten_steel': Item.of('ad_astra:steel_ingot'),
    'createbigcannons:molten_cast_iron': Item.of('createbigcannons:cast_iron_ingot'),
    'createbigcannons:molten_bronze': Item.of('createbigcannons:molten_bronze_bucket'),
    'kubejs:slime_colloid': Item.of('kubejs:mycetozoan'),
    'kubejs:cryogen': Item.of('minecraft:blue_ice'),
    'kubejs:air_fluid': Item.of('ad_astra:earth_globe'),
    'kubejs:nether_air_fluid': Item.of('minecraft:netherrack'),
    'kubejs:end_air_fluid': Item.of('minecraft:end_stone'),
    'kubejs:slimeria_air_fluid': Item.of('kubejs:slimeria_air_fluid_bucket'),
    'kubejs:nitric_acid': Item.of('kubejs:nitric_acid_bucket'),
    'kubejs:nitrogen_fertilizer': Item.of('kubejs:nitrogen_fertilizer_bucket'),
    'kubejs:polymer': Item.of('kubejs:polymer_ingot'),
    'kubejs:duraplas': Item.of('kubejs:duraplas_ingot'),
    'kubejs:saline_water': Item.of('kubejs:salt'),
    'kubejs:caustic_soda': Item.of('kubejs:caustic_soda_bucket'),
    'kubejs:muriatic_acid': Item.of('ad_astra:moon_sand'),
    'vintageimprovements:sulfuric_acid': Item.of('iceandfire:dragonscales_red'),
    'kubejs:lube_oil': Item.of('kubejs:lube_oil_bucket'),
    'kubejs:drilling_fluid': Item.of('kubejs:drilling_fluid_bucket'),
    'kubejs:refined_oil': Item.of('kubejs:refined_oil_bucket'),
    'kubejs:chromatic_waste': Item.of('kubejs:chromatic_protozoa'),
    'kubejs:aeronos_spore': Item.of('kubejs:aeronos_cap_piece'),
    'kubejs:strophar_spore': Item.of('kubejs:strophar_cap_piece'),
    'kubejs:red_mushroom_spore': Item.of('kubejs:red_mushroom_cap_piece'),
    'kubejs:brown_mushroom_spore': Item.of('kubejs:brown_mushroom_cap_piece'),
    'kubejs:red_spore': Item.of('minecraft:red_dye'),
    'kubejs:green_spore': Item.of('minecraft:green_dye'),
    'kubejs:blue_spore': Item.of('minecraft:blue_dye'),
    'kubejs:singular_spore': Item.of('kubejs:singular_spore_bucket'),
    'kubejs:nitrogen': Item.of('kubejs:nitrogen_bucket'),
    'kubejs:nitrogen_dioxide': Item.of('kubejs:nitrogen_dioxide_bucket'),
    'kubejs:ammonia': Item.of('kubejs:ammonia_bucket'),
    'kubejs:chlorine': Item.of('kubejs:chlorine_bucket'),
    'kubejs:carbon_dioxide': Item.of('kubejs:crushed_coal'),
    'kubejs:natural_gas': Item.of('kubejs:graphite'),
    'kubejs:ethylene': Item.of('kubejs:ethylene_bucket'),
    'kubejs:pressurized_steam': Item.of('iceandfire:dragonscales_blue'),
    'kubejs:cola_puree': Item.of('kubejs:cola_puree_bucket'),
    'kubejs:slime_cola': Item.of('kubejs:slime_cola_can'),
    'kubejs:oxygen': Item.of('kubejs:oxygen_bucket'),
    'kubejs:hydrogen': Item.of('kubejs:hydrogen_bucket'),
    'minecraft:water': Item.of('minecraft:water_bucket'),
    'minecraft:lava': Item.of('minecraft:lava_bucket'),
    'minecraft:milk': Item.of('minecraft:milk_bucket'),
    'create:honey': Item.of('create:honey_bucket'),
    'createdieselgenerators:crude_oil': Item.of('createdieselgenerators:crude_oil_bucket'),
    'createdieselgenerators:diesel': Item.of('createdieselgenerators:diesel_bucket'),
    'createdieselgenerators:gasoline': Item.of('createdieselgenerators:gasoline_bucket'),
    'createaddition:seed_oil': Item.of('minecraft:wheat_seeds'),
    'createdieselgenerators:ethanol': Item.of('kubejs:yeast'),
    'createdieselgenerators:biodiesel': Item.of('createdieselgenerators:biodiesel_bucket'),
    'create_things_and_misc:slime': Item.of('minecraft:slime_ball')
}
BlockEvents.rightClicked("createdieselgenerators:canister", event => {
    let p = event.player
    let b = event.block
    let i = p.offHandItem
    if (event.hand=='MAIN_HAND') { return }
    let fluidId=b.entityData.Tanks[0].TankContent.FluidName
    if (p.offHandItem == null) { return }
    if(p.offHandItem.tag==null){
    CanisterDisplay[fluidId]=`Item.of('${p.offHandItem.id}')`
    }else{
    CanisterDisplay[fluidId]=`Item.of('${p.offHandItem.id}','${p.offHandItem.tag}')`
    }
    p.tell(CanisterDisplay[fluidId].id)
})
    */