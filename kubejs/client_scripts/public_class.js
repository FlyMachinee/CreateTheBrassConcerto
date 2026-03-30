// priority: 8192
const $AllGuiTextures = Java.loadClass('com.simibubi.create.foundation.gui.AllGuiTextures');
const $AnimatedKinetics = Java.loadClass('com.simibubi.create.compat.jei.category.animations.AnimatedKinetics');
const $AllPartialModels = Java.loadClass('com.simibubi.create.AllPartialModels');
const $CreateRecipeCategory = Java.loadClass('com.simibubi.create.compat.jei.category.CreateRecipeCategory');
const $Axis = Java.loadClass('com.mojang.math.Axis');
const $DoubleItemIcon = Java.loadClass('com.simibubi.create.compat.jei.DoubleItemIcon');
const $RecipeIngredientRole = Java.loadClass('mezz.jei.api.recipe.RecipeIngredientRole');
const $AllBlocks = Java.loadClass('com.simibubi.create.AllBlocks');
const $AnimationTickHolder = Java.loadClass('com.simibubi.create.foundation.utility.AnimationTickHolder');
const $MultiBufferSource = Java.loadClass('net.minecraft.client.renderer.MultiBufferSource');
const $Tesselator = Java.loadClass('com.mojang.blaze3d.vertex.Tesselator');
const $UIRenderHelper = Java.loadClass('com.simibubi.create.foundation.gui.UIRenderHelper');
const $Lighting = Java.loadClass('com.mojang.blaze3d.platform.Lighting');
const $FluidRenderer = Java.loadClass('com.simibubi.create.foundation.fluid.FluidRenderer');
const $LightTexture = Java.loadClass('net.minecraft.client.renderer.LightTexture');
const $CBCGuiTextures = Java.loadClass('rbasamoyai.createbigcannons.index.CBCGuiTextures');
const $CustomLightingSettings = Java.loadClass('com.simibubi.create.foundation.gui.CustomLightingSettings');
const $GuiGameElement = Java.loadClass('com.simibubi.create.foundation.gui.element.GuiGameElement');
const $Boolean = Java.loadClass('java.lang.Boolean');
const $Integer = Java.loadClass('java.lang.Integer');
const $CRBlockPartials = Java.loadClass('com.railwayteam.railways.registry.CRBlockPartials');
const $FluidTransportBehaviour = Java.loadClass('com.simibubi.create.content.fluids.FluidTransportBehaviour');
const $VintagePartialModels = Java.loadClass('com.negodya1.vintageimprovements.VintagePartialModels');
const $AllIcons = Java.loadClass('com.simibubi.create.foundation.gui.AllIcons');
const $InputConstants = Java.loadClass('com.mojang.blaze3d.platform.InputConstants');
const $Internal = Java.loadClass('mezz.jei.common.Internal');
const $SimpleSoundInstance = Java.loadClass('net.minecraft.client.resources.sounds.SimpleSoundInstance');
const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents');
const $ItemDisplayContext = Java.loadClass('net.minecraft.world.item.ItemDisplayContext');
const $TransformStack = Java.loadClass('com.jozufozu.flywheel.util.transform.TransformStack');
const $AttachFace = Java.loadClass('net.minecraft.world.level.block.state.properties.AttachFace');
const $AngleHelper = Java.loadClass('com.simibubi.create.foundation.utility.AngleHelper');
const $OverlayTexture = Java.loadClass('net.minecraft.client.renderer.texture.OverlayTexture');
const $RenderSystem = Java.loadClass('com.mojang.blaze3d.systems.RenderSystem');
const $PoseStack = Java.loadClass('com.mojang.blaze3d.vertex.PoseStack');
const $EnderDragon = Java.loadClass('net.minecraft.world.entity.boss.enderdragon.EnderDragon');
const $EntityType = Java.loadClass('net.minecraft.world.entity.EntityType');
const $RenderType = Java.loadClass('net.minecraft.client.renderer.RenderType');
const $CustomMachinery = Java.loadClass('fr.frinn.custommachinery.CustomMachinery');
const $MachineStatus = Java.loadClass('fr.frinn.custommachinery.api.machine.MachineStatus');
const $Arrays = Java.loadClass('java.util.Arrays');
const $Direction = Java.loadClass('net.minecraft.core.Direction');
const $RandomSource = Java.loadClass('net.minecraft.util.RandomSource');
const $CustomIngredientTypes = Java.loadClass('fr.frinn.custommachinery.impl.integration.jei.CustomIngredientTypes');
const $TextureSizeHelper = Java.loadClass('fr.frinn.custommachinery.impl.util.TextureSizeHelper');
const $EnergyGuiElement = Java.loadClass('fr.frinn.custommachinery.common.guielement.EnergyGuiElement');
const $EnergyJEIIngredientRenderer = Java.loadClass('fr.frinn.custommachinery.client.integration.jei.energy.EnergyJEIIngredientRenderer');
const $Energy = Java.loadClass('fr.frinn.custommachinery.impl.integration.jei.Energy');
const $AbstractGuiElementProperties = Java.loadClass('fr.frinn.custommachinery.impl.guielement.AbstractGuiElement$Properties');
const $FluidGuiElement = Java.loadClass('fr.frinn.custommachinery.common.guielement.FluidGuiElement');
const $List = Java.loadClass('java.util.List');
const $IntSet = Java.loadClass('it.unimi.dsi.fastutil.ints.IntSet');
const $ArrayList = Java.loadClass('java.util.ArrayList');
const $Zombie = Java.loadClass('net.minecraft.world.entity.monster.Zombie');
const getSuperRenderTypeBuffer = (() => {
  let __$SuperRenderTypeBuffer = null;
  /** @return {Internal.SuperRenderTypeBuffer} */
  return () => {
    if (__$SuperRenderTypeBuffer === null)
      __$SuperRenderTypeBuffer = Java.loadClass(
        'com.simibubi.create.foundation.render.SuperRenderTypeBuffer'
      );
    return __$SuperRenderTypeBuffer;
  };
})();
const $Screen = Java.loadClass('net.minecraft.client.gui.screens.Screen');
const $AABBOutline = Java.loadClass('com.simibubi.create.foundation.outliner.AABBOutline');
const $ChasingAABBOutline = Java.loadClass('com.simibubi.create.foundation.outliner.ChasingAABBOutline');
const $AllSpecialTextures = Java.loadClass('com.simibubi.create.AllSpecialTextures');
const $Mth = Java.loadClass('net.minecraft.util.Mth');
const $NbtIo = Java.loadClass('net.minecraft.nbt.NbtIo');
const $NbtAccounter = Java.loadClass('net.minecraft.nbt.NbtAccounter');
const $NbtUtils = Java.loadClass('net.minecraft.nbt.NbtUtils');
const $Registries = Java.loadClass('net.minecraft.core.registries.Registries');
const $AllKeys = Java.loadClass('com.simibubi.create.AllKeys');