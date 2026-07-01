// priority: 9999

/**
 * @abstract
 */
function SafeBlockInfoRenderer() {
  BlockInfoRenderer.call(this);
}

inheritPrototype(SafeBlockInfoRenderer, BlockInfoRenderer);

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource} bufferSource
 * @override
 */
SafeBlockInfoRenderer.prototype.render = function (blockInfo, partialTicks, poseStack, bufferSource) {
  if (this.isInvalid(blockInfo)) {
    return;
  }
  this.renderSafe(blockInfo, partialTicks, poseStack, bufferSource);
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource} bufferSource
 * @virtual
 */
SafeBlockInfoRenderer.prototype.renderSafe = function (blockInfo, partialTicks, poseStack, bufferSource) {
  throw new Error('SafeBlockInfoRenderer.prototype.renderSafe should be implemented by subclass');
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {boolean}
 */
SafeBlockInfoRenderer.prototype.isInvalid = function (blockInfo) {
  return !blockInfo || !blockInfo.state || blockInfo.state.isAir();
};
