// priority: 4096

/**
 *
 * @param {Internal.GuiGraphics} graphics
 * @param {Internal.FluidStackJS} fluid
 * @param {number} height 0-16 流体的像素高度
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} scale
 * @param {number} light 默认为 LightTexture.FULL_BRIGHT
 * @param {boolean} renderBottom 默认为 false
 */
const drawFluidBox = (graphics, fluid, height, x, y, z, scale, light, renderBottom) => {
  light = light || $LightTexture.FULL_BRIGHT;
  renderBottom = renderBottom || false;

  const matrixStack = graphics.pose();
  matrixStack.pushPose();

  const buffer = $MultiBufferSource.immediate($Tesselator.getInstance().getBuilder());
  matrixStack.scale(scale, scale, scale);
  matrixStack.translate(x, y, z);
  $UIRenderHelper.flipForGuiRender(matrixStack);

  $FluidRenderer.renderFluidBox(fluid, 0, 0, 0, 1, height / 16, 1, buffer, matrixStack, light, renderBottom);

  buffer.endBatch();
  $Lighting.setupFor3DItems();
  matrixStack.popPose();
};
