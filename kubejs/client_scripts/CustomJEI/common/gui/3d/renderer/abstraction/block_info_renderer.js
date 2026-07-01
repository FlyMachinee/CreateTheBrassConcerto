// priority: 10000

/**
 * @abstract
 */
function BlockInfoRenderer() {}

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource} bufferSource
 * @virtual
 */
BlockInfoRenderer.prototype.render = function (blockInfo, partialTicks, poseStack, bufferSource) {
  throw new Error('BlockInfoRenderer.prototype.render should be implemented by subclass');
};
