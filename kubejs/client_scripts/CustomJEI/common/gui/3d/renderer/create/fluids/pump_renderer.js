// priority: 8189

function PumpRenderer() {
  KineticBlockInfoRenderer.call(this);
}

inheritPrototype(PumpRenderer, KineticBlockInfoRenderer);

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {Internal.BlockState} blockState
 * @return {Internal.SuperByteBuffer}
 * @override
 */
PumpRenderer.prototype.getRotatedModel = function (blockInfo, blockState) {
  return $CachedBufferer.partialFacing($AllPartialModels.MECHANICAL_PUMP_COG, blockState);
};
