// priority: 4096

/**
 *
 * @param {Internal.GuiGraphics} graphics
 * @param {Internal.CustomLightingSettings} lighting
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} scale
 * @param {number} baseAngle
 * @param {number} lowerArmAngle
 * @param {number} upperArmAngle
 * @param {number} headAngle
 */
const drawMechanicalArm = (
  graphics,
  lighting,
  x,
  y,
  z,
  scale,
  baseAngle,
  lowerArmAngle,
  upperArmAngle,
  headAngle
) => {
  lowerArmAngle -= 135;
  upperArmAngle -= 90;

  // 基座（齿轮下方的部分）
  $GuiGameElement['of(net.minecraft.world.level.block.state.BlockState)'](
    Block.getBlock('create:mechanical_arm').defaultBlockState()
  )
    .lighting(lighting)
    .atLocal(x, y, z)
    .scale(scale)
    .render(graphics);

  // 齿轮
  $GuiGameElement['of(com.jozufozu.flywheel.core.PartialModel)']($AllPartialModels.ARM_COG)
    .lighting(lighting)
    .atLocal(x, y, z)
    .scale(scale)
    .rotateBlock(0, $AnimatedKinetics.getCurrentAngle() * 2, 0)
    .render(graphics);

  const renderPartialModel = (partialModel) => {
    $GuiGameElement['of(com.jozufozu.flywheel.core.PartialModel)'](partialModel)
      .lighting(lighting)
      .render(graphics);
  };

  const ms = graphics.pose();
  ms.pushPose();
  ms.scale(scale, scale, scale);
  ms.translate(x, y, z);

  // 基座
  ms.translate(0.5, -12 / 16, 0.5);
  ms.rotateY(baseAngle);
  renderPartialModel($AllPartialModels.ARM_BASE);

  // 下臂
  ms.translate(0, -2 / 16, 0);
  ms.rotateX(-lowerArmAngle - 135);
  renderPartialModel($AllPartialModels.ARM_LOWER_BODY);

  // 上臂
  ms.translate(0, 0, -14 / 16);
  ms.rotateX(-upperArmAngle + 90);
  renderPartialModel($AllPartialModels.ARM_UPPER_BODY);

  // 爪子基座
  ms.translate(0, 0, -15 / 16);
  ms.rotateX(-headAngle + 45);
  renderPartialModel($AllPartialModels.ARM_CLAW_BASE);

  // 爪子上半部分
  ms.translate(0, -1 / 16, -6 / 16);
  renderPartialModel($AllPartialModels.ARM_CLAW_GRIP_UPPER);

  // 爪子下半部分
  ms.translate(0, 2 / 16, 0);
  renderPartialModel($AllPartialModels.ARM_CLAW_GRIP_LOWER);

  ms.popPose();
};
