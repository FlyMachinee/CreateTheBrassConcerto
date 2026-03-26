// priority: 4096

/**
 *
 * @param {Internal.GuiGraphics} graphics
 * @param {Internal.CustomLightingSettings} lighting
 * @param {Internal.FluidStackJS} fluid
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} scale
 * @param {number} tick
 */
const drawAnimatedSpout = (graphics, lighting, fluid, x, y, z, scale, tick) => {
  // 该动画函数形如
  /*
           --             --
          /  \           /  \
         /    \         /    \
        /      \       /      \
  -----|        |-----|        |
  */
  // 1/3 时间伸出，1/3 时间收回，1/3 时间静止
  const squeeze_func = (tick) => {
    const cycle = tick % 30;
    const squeeze = cycle < 20 ? JavaMath.sin((cycle / 20) * JavaMath.PI) : 0;
    return squeeze;
  };

  drawControlledAnimatedSpout(graphics, lighting, fluid, x, y, z, scale, tick, squeeze_func);
};

/**
 *
 * @param {Internal.GuiGraphics} graphics
 * @param {Internal.CustomLightingSettings} lighting
 * @param {Internal.FluidStackJS} fluid
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} scale
 * @param {number} tick
 * @param {function} squeeze_func 回调函数，输入渲染的tick值，返回喷嘴挤压值0~1
 */
const drawControlledAnimatedSpout = (graphics, lighting, fluid, x, y, z, scale, tick, squeeze_func) => {
  const matrixStack = graphics.pose();
  matrixStack.pushPose();

  $GuiGameElement['of(net.minecraft.world.level.block.state.BlockState)']($AllBlocks.SPOUT.getDefaultState())
    .lighting(lighting)
    .atLocal(x, y, z)
    .scale(scale)
    .render(graphics);

  const squeeze = 20 * squeeze_func(tick);

  matrixStack.pushPose();

  $GuiGameElement['of(com.jozufozu.flywheel.core.PartialModel)']($AllPartialModels.SPOUT_TOP)
    .lighting(lighting)
    .atLocal(x, y, z)
    .scale(scale)
    .render(graphics);
  matrixStack.translate(0, (-3 * squeeze) / 32, 0);
  $GuiGameElement['of(com.jozufozu.flywheel.core.PartialModel)']($AllPartialModels.SPOUT_MIDDLE)
    .lighting(lighting)
    .atLocal(x, y, z)
    .scale(scale)
    .render(graphics);
  matrixStack.translate(0, (-3 * squeeze) / 32, 0);
  $GuiGameElement['of(com.jozufozu.flywheel.core.PartialModel)']($AllPartialModels.SPOUT_BOTTOM)
    .lighting(lighting)
    .atLocal(x, y, z)
    .scale(scale)
    .render(graphics);
  matrixStack.translate(0, (-3 * squeeze) / 32, 0);

  matrixStack.popPose();

  lighting.applyLighting();

  const buffer = $MultiBufferSource.immediate($Tesselator.getInstance().getBuilder());
  matrixStack.pushPose();
  matrixStack.scale(scale, scale, scale);
  matrixStack.translate(x, y, z);

  $UIRenderHelper.flipForGuiRender(matrixStack);
  let from = 3 / 20;
  let to = 17 / 20;

  $FluidRenderer.renderFluidBox(
    fluid,
    from,
    from,
    from,
    to,
    to,
    to,
    buffer,
    matrixStack,
    $LightTexture.FULL_BRIGHT,
    false
  );

  matrixStack.popPose();

  const width = (1 / 128) * squeeze;
  matrixStack.translate(x * scale, y * scale, z * scale);
  matrixStack.translate(scale / 2, scale * 1.5, scale / 2);
  $UIRenderHelper.flipForGuiRender(matrixStack);
  matrixStack.scale((16 / 20) * scale, (16 / 20) * scale, (16 / 20) * scale);
  matrixStack.translate(-0.5, 0, -0.5);
  from = -width / 2 + 0.5;
  to = width / 2 + 0.5;

  $FluidRenderer.renderFluidBox(
    fluid,
    from,
    0,
    from,
    to,
    2,
    to,
    buffer,
    matrixStack,
    $LightTexture.FULL_BRIGHT,
    false
  );

  buffer.endBatch();
  $Lighting.setupFor3DItems();

  matrixStack.popPose();
};
