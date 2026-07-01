// priority: 8189

function ShaftRenderer() {
  KineticBlockInfoRenderer.call(this);
}

inheritPrototype(ShaftRenderer, KineticBlockInfoRenderer);

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {Internal.BlockState}
 * @override
 */
ShaftRenderer.prototype.getRenderedBlockState = function (blockInfo) {
  return KineticBlockInfoRenderer.shaft(KineticBlockInfoRenderer.getRotationAxisOf(blockInfo));
};
