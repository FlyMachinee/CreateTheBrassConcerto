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
        guiGraphics.pose().translate(renderX, renderY, 200)
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