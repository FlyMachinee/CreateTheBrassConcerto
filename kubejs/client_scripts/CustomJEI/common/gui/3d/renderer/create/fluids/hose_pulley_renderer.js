// priority: 8188

function HosePulleyRenderer() {
  AbstractPulleyRenderer.call(this, $AllPartialModels.HOSE_HALF, $AllPartialModels.HOSE_HALF_MAGNET);
  this._offsetCallback = null;
}

inheritPrototype(HosePulleyRenderer, AbstractPulleyRenderer);

/**
 * @param {function(StructureBlockInfo, number): number} callback (info, speed, pt) -> offset
 * @return {HosePulleyRenderer}
 */
HosePulleyRenderer.prototype.setOffsetCallback = function (callback) {
  this._offsetCallback = callback;
  return this;
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {Internal.Direction$Axis}
 * @override
 */
HosePulleyRenderer.prototype.getShaftAxis = function (blockInfo) {
  return blockInfo.state.getValue(BlockProperties.HORIZONTAL_FACING).getClockWise().getAxis();
};

/**
 * @return {Internal.PartialModel}
 * @override
 */
HosePulleyRenderer.prototype.getCoil = function () {
  return $AllPartialModels.HOSE_COIL;
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {Internal.SuperByteBuffer}
 * @override
 */
HosePulleyRenderer.prototype.renderRope = function (blockInfo) {
  return $CachedBufferer.partial($AllPartialModels.HOSE, blockInfo.state);
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {Internal.SuperByteBuffer}
 * @override
 */
HosePulleyRenderer.prototype.renderMagnet = function (blockInfo) {
  return $CachedBufferer.partial($AllPartialModels.HOSE_MAGNET, blockInfo.state);
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @return {number}
 * @override
 */
HosePulleyRenderer.prototype.getOffset = function (blockInfo, partialTicks) {
  if (this._offsetCallback) {
    return Math.max(0, this._offsetCallback(blockInfo, this.getSpeed(blockInfo), partialTicks));
  } else {
    return AbstractPulleyRenderer.getOffset(blockInfo);
  }
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {boolean}
 * @override
 */
HosePulleyRenderer.prototype.isRunning = function (blockInfo) {
  return true;
};
