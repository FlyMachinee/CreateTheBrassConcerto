// priority: 4096

/**
 * @param {Internal.GuiGraphics} guiGraphics
 * @param {string} machineId
 * @param {string} blockId
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} scale
 */
const drawCustomMachineryMachine = (guiGraphics, machineId, blockId, x, y, z, scale) => {
  const matrixStack = guiGraphics.pose();
  matrixStack.pushPose();
  matrixStack.scale(scale, scale, scale);
  matrixStack.translate(x, y, z);
  matrixStack.mulPoseMatrix(new $Matrix4f().scaling(1, -1, 1));
  const machine = $CustomMachinery.MACHINES.get(new ResourceLocation(machineId));
  const appearance = machine.getAppearance($MachineStatus.IDLE);
  const blockModelLocation = appearance.getBlockModel();
  const bakedModel = Client.getModelManager().getModel(blockModelLocation.getLoc());
  const bufferSource = Client.renderBuffers().bufferSource();
  const vertexConsumer = bufferSource.getBuffer($RenderType.solid());
  const blockState = Block.getBlock(blockId).defaultBlockState();
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
        1,
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
        1,
        $LightTexture.FULL_BRIGHT,
        $OverlayTexture.NO_OVERLAY,
        false
      )
    );
  matrixStack.popPose();
};
