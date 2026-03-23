// priority: 4096

/**
 * @param {Internal.GuiGraphics} guiGraphics
 * @param {Internal.BlockState} blockState
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} scale
 * @param {number} alpha 0-1 不透明度
 */
const drawPhantomBlock = (guiGraphics, blockState, x, y, z, scale, alpha) => {
  const matrixStack = guiGraphics.pose();
  matrixStack.pushPose();
  matrixStack.scale(scale, scale, scale);
  matrixStack.translate(x, y, z);
  matrixStack.mulPoseMatrix(new Matrix4f().scaling(1, -1, 1));
  const bakedModel = Client.getBlockRenderer().getBlockModel(blockState);
  const bufferSource = Client.renderBuffers().bufferSource();
  const vertexConsumer = bufferSource.getBuffer($RenderType.translucent());
  $Arrays
    .stream($Direction.values())
    .flatMap((dir) => bakedModel.getQuads(blockState, dir, $RandomSource.create(42)).stream())
    .forEach((quad) =>
      vertexConsumer.putBulkData(
        matrixStack.last(),
        quad,
        1,
        1,
        1,
        alpha,
        $LightTexture.FULL_BRIGHT,
        $OverlayTexture.NO_OVERLAY,
        false
      )
    );
  bakedModel
    .getQuads(blockState, null, $RandomSource.create(42))
    .forEach((quad) =>
      vertexConsumer.putBulkData(
        matrixStack.last(),
        quad,
        1,
        1,
        1,
        alpha,
        $LightTexture.FULL_BRIGHT,
        $OverlayTexture.NO_OVERLAY,
        false
      )
    );
  matrixStack.popPose();
};
