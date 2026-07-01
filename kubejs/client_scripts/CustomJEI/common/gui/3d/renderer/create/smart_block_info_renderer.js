// priority: 9998

function SmartBlockInfoRenderer() {
  SafeBlockInfoRenderer.call(this);
}

inheritPrototype(SmartBlockInfoRenderer, SafeBlockInfoRenderer);

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource} bufferSource
 * @override
 */
SmartBlockInfoRenderer.prototype.renderSafe = function (blockInfo, partialTicks, poseStack, bufferSource) {
  // FilteringRenderer.renderOnBlockEntity(blockEntity, partialTicks, ms, buffer, light, overlay);
  // LinkRenderer.renderOnBlockEntity(blockEntity, partialTicks, ms, buffer, light, overlay);
};
