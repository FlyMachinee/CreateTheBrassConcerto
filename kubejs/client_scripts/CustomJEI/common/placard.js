// priority: 4096

/**
 *
 * @param {Internal.Direction} facing {north, south, east, west}
 * @param {Internal.AttachFace} face {floor, wall, ceiling}
 */
const getBlockRotationFromFacingAndFace = (facing, face) => {
  // 对于 defaultBlockState，默认等价 facing 为 north，face 为 floor

  // rotateBlock 优先级 y -> x -> z
  let yRot;
  let xRotFactor, zRotFactor;
  switch (facing) {
    case Direction.NORTH:
      yRot = 0;
      xRotFactor = -1;
      zRotFactor = 0;
      break;
    case Direction.WEST:
      yRot = 90;
      xRotFactor = 0;
      zRotFactor = 1;
      break;
    case Direction.SOUTH:
      yRot = 180;
      xRotFactor = 1;
      zRotFactor = 0;
      break;
    case Direction.EAST:
      yRot = -90;
      xRotFactor = 0;
      zRotFactor = -1;
      break;
  }
  let xzRot;
  switch (face) {
    case $AttachFace.FLOOR:
      xzRot = 0;
      break;
    case $AttachFace.WALL:
      xzRot = 90;
      break;
    case $AttachFace.CEILING:
      xzRot = 180;
      break;
  }
  return [xzRot * xRotFactor, (face.equals($AttachFace.CEILING) ? 180 : 0) + yRot, xzRot * zRotFactor];
};

/**
 *
 * @param {Internal.GuiGraphics} graphics
 * @param {Internal.CustomLightingSettings} lighting
 * @param {Internal.ItemStack} item
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} scale
 * @param {Internal.Direction} facing
 * @param {Internal.AttachFace} face
 */
const drawPlacard = (graphics, lighting, item, x, y, z, scale, facing, face) => {
  const blockBuilder = $GuiGameElement['of(net.minecraft.world.level.block.state.BlockState)'](
    $AllBlocks.PLACARD.get().defaultBlockState()
  ).lighting(lighting);

  const xyzBlockRot = getBlockRotationFromFacingAndFace(facing, face);
  blockBuilder
    .rotateBlock(xyzBlockRot[0], xyzBlockRot[1], xyzBlockRot[2])
    .atLocal(x, y, z)
    .scale(scale)
    .render(graphics);

  if (!item) {
    return;
  }

  const mc = $Minecraft.getInstance();
  const itemRenderer = mc.getItemRenderer();
  const bakedModel = itemRenderer.getModel(item, null, null, 0);
  const blockItem = bakedModel.isGui3d();

  const ms = graphics.pose();
  ms.pushPose();
  ms.scale(scale, scale, scale);

  const sizeFactor = blockItem ? 0.5 : 0.375;

  ms.translate(x, y - 1, z);
  ms.translate(0.5, 0.5, 0.5);
  const xyzItemRot = getItemRotationFromFacingAndFace(facing, face);
  // 顺序很重要！
  ms.mulPose($Axis.ZP.rotationDegrees(xyzItemRot[2]));
  ms.mulPose($Axis.XP.rotationDegrees(xyzItemRot[0]));
  ms.mulPose($Axis.YP.rotationDegrees(xyzItemRot[1]));
  ms.translate(0, -sizeFactor / 2, 3 / 16 - 0.5);

  const newScale = (1 / 16) * sizeFactor;
  ms.scale(newScale, newScale, newScale);
  const offset = -8;
  ms.translate(0, offset, 0);

  ms.translate(-8, 8, -100);
  $GuiGameElement['of(net.minecraft.world.item.ItemStack)'](item)
    .lighting(lighting)
    .render(graphics);

  ms.popPose();
};
