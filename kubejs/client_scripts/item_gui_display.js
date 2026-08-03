//let $ScreenEvent = Java.loadClass("net.minecraftforge.client.event.ScreenEvent$Render$Post")
let $IItemDecorator = Java.loadClass("net.minecraftforge.client.IItemDecorator")
let $RegisterItemDecorationsEvent = Java.loadClass("net.minecraftforge.client.event.RegisterItemDecorationsEvent")
//创造马达蓝图
NativeEvents.onEvent($RegisterItemDecorationsEvent, event => {
    let method = {}
    method["render"] = function (guiGraphics, font, stack, xOffset, yOffset) {
        let renderX = xOffset + 6
        let renderY = yOffset + 6

        guiGraphics.pose().pushPose()
        guiGraphics.pose().translate(renderX, renderY, 100)
        guiGraphics.pose().scale(0.65, 0.65, 0.65)
        guiGraphics.renderItem(Item.of("create:creative_motor"), 0, 0)
        guiGraphics.pose().popPose()
        return true
    }
    event.register("kubejs:creative_motor_blueprint",
        new JavaAdapter(
            $IItemDecorator,
            method
        ))
})
//培养皿
NativeEvents.onEvent($RegisterItemDecorationsEvent, event => {
    let method = {}
    method["render"] = function (guiGraphics, font, stack, xOffset, yOffset) {
        let renderX = xOffset + 6
        let renderY = yOffset + 6
        let nbtType = stack.getNbt()?.type || "none"
        guiGraphics.pose().pushPose()
        guiGraphics.pose().translate(renderX, renderY, 100)
        guiGraphics.pose().scale(0.65, 0.65, 0.65)
        switch (nbtType) {
            case "biomass":
                guiGraphics.renderItem(Item.of("minecraft:sculk_catalyst"), 0, 0)
                break
            case "milk":
                guiGraphics.renderItem(Item.of("kubejs:cheese_moonalgae"), 0, 0)
                break
            case "dye":
                guiGraphics.renderItem(Item.of("kubejs:chromatic_protozoa"), 0, 0)
                break
            case "exp":
                guiGraphics.renderItem(Item.of("kubejs:resonant_bacteria"), 0, 0)
                break
            case "wood_chip":
                guiGraphics.renderItem(Item.of("kubejs:yeast"), 0, 0)
                break
            case "mud":
                guiGraphics.renderItem(Item.of("kubejs:peat_protozoa"), 0, 0)
                break
            case "fuel":
                guiGraphics.renderItem(Item.of("kubejs:blaze_mycoplasma"), 0, 0)
                break
            case "super_fuel":
                guiGraphics.renderItem(Item.of("kubejs:blaze_chlamydia"), 0, 0)
                break
            default:
                guiGraphics.renderItem(Item.of("kubejs:useless_bacteria"), 0, 0)
        }
        guiGraphics.pose().popPose()
        return true
    }
    event.register("kubejs:pasteurized_culture_plate",
        new JavaAdapter(
            $IItemDecorator,
            method
        ))
})
//工程集合
NativeEvents.onEvent($RegisterItemDecorationsEvent, event => {
    let method = {}
    method["render"] = function (guiGraphics, font, stack, xOffset, yOffset) {
        let renderX = xOffset + 6
        let renderY = yOffset + 6
        let nbtItem = stack.getNbt()?.Item || "minecraft:air"
        guiGraphics.pose().pushPose()
        guiGraphics.pose().translate(renderX, renderY, 100)
        guiGraphics.pose().scale(0.65, 0.65, 0.65)
        guiGraphics.renderItem(Item.of(nbtItem), 0, 0)
        guiGraphics.pose().popPose()
        return true
    }
    event.register("createandesiteabound:simple_schematic",
        new JavaAdapter(
            $IItemDecorator,
            method
        ))
})
let CanisterDisplay = {
    'create_things_and_misc:diluted_bonemeal': 'minecraft:bone_meal',
    'vintageimprovements:sulfur_dioxide': 'kubejs:sulphur',
    'vintageimprovements:sulfur_trioxide': 'createloveandwar:sulphur',
    'kubejs:superheated_steam': 'kubejs:blaze_chlamydia',
    'kubejs:slime_coin': 'kubejs:coin_emerald',
    'kubejs:electro_hydro': 'kubejs:unsteady_electro_hydro',
    'kubejs:covariant_heat': 'kubejs:bronze_triangle',
    'kubejs:fused_alumina': 'kubejs:aluminum_slag',
    'kubejs:aluminum': 'kubejs:aluminum_ingot',
    'kubejs:desh': 'ad_astra:desh_ingot',
    'kubejs:tin': 'kubejs:tin_ingot',
    'kubejs:new_zinc': 'kubejs:new_zinc_ingot',
    'kubejs:gold': 'minecraft:gold_ingot',
    'kubejs:iron': 'minecraft:iron_ingot',
    'kubejs:copper': 'minecraft:copper_ingot',
    'kubejs:brass': 'create:brass_ingot',
    'kubejs:industrial_iron': 'kubejs:industrial_iron_ingot',
    'kubejs:incomplete_steel': 'kubejs:incomplete_steel_bucket',
    'createbigcannons:molten_steel': 'ad_astra:steel_ingot',
    'createbigcannons:molten_cast_iron': 'createbigcannons:cast_iron_ingot',
    'createbigcannons:molten_bronze': 'createbigcannons:molten_bronze_bucket',
    'kubejs:slime_colloid': 'kubejs:mycetozoan',
    'kubejs:cryogen': 'minecraft:blue_ice',
    'kubejs:air_fluid': 'ad_astra:earth_globe',
    'kubejs:nether_air_fluid': 'minecraft:netherrack',
    'kubejs:end_air_fluid': 'minecraft:end_stone',
    'kubejs:slimeria_air_fluid': 'kubejs:slimeria_air_fluid_bucket',
    'kubejs:nitric_acid': 'kubejs:nitric_acid_bucket',
    'kubejs:nitrogen_fertilizer': 'kubejs:nitrogen_fertilizer_bucket',
    'kubejs:polymer': 'kubejs:polymer_ingot',
    'kubejs:duraplas': 'kubejs:duraplas_ingot',
    'kubejs:saline_water': 'kubejs:salt',
    'kubejs:caustic_soda': 'kubejs:caustic_soda_bucket',
    'kubejs:muriatic_acid': 'ad_astra:moon_sand',
    'vintageimprovements:sulfuric_acid': 'iceandfire:dragonscales_red',
    'kubejs:lube_oil': 'kubejs:lube_oil_bucket',
    'kubejs:drilling_fluid': 'kubejs:drilling_fluid_bucket',
    'kubejs:refined_oil': 'kubejs:refined_oil_bucket',
    'kubejs:chromatic_waste': 'kubejs:chromatic_protozoa',
    'kubejs:aeronos_spore': 'kubejs:aeronos_cap_piece',
    'kubejs:strophar_spore': 'kubejs:strophar_cap_piece',
    'kubejs:red_mushroom_spore': 'kubejs:red_mushroom_cap_piece',
    'kubejs:brown_mushroom_spore': 'kubejs:brown_mushroom_cap_piece',
    'kubejs:red_spore': 'minecraft:red_dye',
    'kubejs:green_spore': 'minecraft:green_dye',
    'kubejs:blue_spore': 'minecraft:blue_dye',
    'kubejs:singular_spore': 'kubejs:singular_spore_bucket',
    'kubejs:nitrogen': 'kubejs:nitrogen_bucket',
    'kubejs:nitrogen_dioxide': 'kubejs:nitrogen_dioxide_bucket',
    'kubejs:ammonia': 'kubejs:ammonia_bucket',
    'kubejs:chlorine': 'kubejs:chlorine_bucket',
    'kubejs:carbon_dioxide': 'kubejs:crushed_coal',
    'kubejs:natural_gas': 'kubejs:graphite',
    'kubejs:ethylene': 'kubejs:ethylene_bucket',
    'kubejs:pressurized_steam': 'iceandfire:dragonscales_blue',
    'kubejs:cola_puree': 'kubejs:cola_puree_bucket',
    'kubejs:slime_cola': 'kubejs:slime_cola_can',
    'kubejs:oxygen': 'kubejs:oxygen_bucket',
    'kubejs:hydrogen': 'kubejs:hydrogen_bucket',
    'minecraft:water': 'minecraft:water_bucket',
    'minecraft:lava': 'minecraft:lava_bucket',
    'minecraft:milk': 'minecraft:milk_bucket',
    'create:honey': 'create:honey_bucket',
    'createdieselgenerators:crude_oil': 'createdieselgenerators:crude_oil_bucket',
    'createdieselgenerators:diesel': 'createdieselgenerators:diesel_bucket',
    'createdieselgenerators:gasoline': 'createdieselgenerators:gasoline_bucket',
    'createaddition:seed_oil': 'minecraft:wheat_seeds',
    'createdieselgenerators:ethanol': 'kubejs:yeast',
    'createdieselgenerators:biodiesel': 'createdieselgenerators:biodiesel_bucket',
    'create_things_and_misc:slime': 'minecraft:slime_ball'
}
function getStack(stack) {
    let stackTanks = stack.getNbt()?.BlockEntityTag?.Tanks
    if (stackTanks == null) {
        return 'minecraft:air'
    } else {
        let Key = stackTanks[0]?.TankContent?.FluidName
        return CanisterDisplay[Key] || 'minecraft:air'
    }
}
//密封液罐
NativeEvents.onEvent($RegisterItemDecorationsEvent, event => {
    let method = {}
    method["render"] = function (guiGraphics, font, stack, xOffset, yOffset) {
        let renderX = xOffset + 6
        let renderY = yOffset + 4
        let nbtItem = getStack(stack)
        guiGraphics.pose().pushPose()
        guiGraphics.pose().translate(renderX, renderY, 100)
        guiGraphics.pose().scale(0.65, 0.65, 0.65)
        guiGraphics.renderItem(Item.of(nbtItem), 0, 0)
        guiGraphics.pose().popPose()
        return true
    }
    event.register("createdieselgenerators:canister",
        new JavaAdapter(
            $IItemDecorator,
            method
        ))
})