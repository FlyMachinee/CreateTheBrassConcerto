// priority: 4096

/**
 *
 * @param {Internal.GuiGraphics} graphics
 * @param {Internal.CustomLightingSettings} blockLighting
 * @param {Internal.CustomLightingSettings} itemLighting
 * @param {Internal.ItemStack} item
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} scale
 */
const drawDepot = (graphics, blockLighting, itemLighting, item, x, y, z, scale) => {
  $GuiGameElement['of(net.minecraft.world.level.block.state.BlockState)'](
    $AllBlocks.DEPOT.get().defaultBlockState()
  )
    .lighting(blockLighting)
    .atLocal(x, y, z)
    .scale(scale)
    .render(graphics);

  if (!item) {
    return;
  }

  const renderCount = Math.floor(Math.log2(item.count) / 2);

  const ms = graphics.pose();
  ms.pushPose();
  ms.scale(scale, scale, scale);

  const sizeFactor = 0.5;

  ms.translate(x, y - 1, z);
  ms.translate(0.5, 0.5, 0.5);
  const xyzItemRot = getItemRotationFromFacingAndFace(Direction.SOUTH, $AttachFace.FLOOR);
  // 顺序很重要！
  ms.mulPose($Axis.ZP.rotationDegrees(xyzItemRot[2]));
  ms.mulPose($Axis.XP.rotationDegrees(xyzItemRot[0]));
  ms.mulPose($Axis.YP.rotationDegrees(xyzItemRot[1]));

  for (let i = 0; i <= renderCount; ++i) {
    ms.pushPose();
    ms.translate(0, -sizeFactor / 2, (13 + i) / 16 - 0.5);

    const newScale = (1 / 16) * sizeFactor;
    ms.scale(newScale, newScale, newScale);
    const offset = -8;
    ms.translate(0, offset, 0);

    ms.translate(-8, 8, -100);
    $GuiGameElement['of(net.minecraft.world.item.ItemStack)'](item).lighting(itemLighting).render(graphics);
    ms.popPose();
  }

  ms.popPose();
};
