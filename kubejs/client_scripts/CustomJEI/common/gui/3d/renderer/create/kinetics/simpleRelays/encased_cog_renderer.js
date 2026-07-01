// priority: 8189

/**
 * @param {boolean} large
 */
function EncasedCogRenderer(large) {
  KineticBlockInfoRenderer.call(this);
  this.large = large;
}

inheritPrototype(EncasedCogRenderer, KineticBlockInfoRenderer);

EncasedCogRenderer.small = function () {
  return new EncasedCogRenderer(false);
};

EncasedCogRenderer.large = function () {
  return new EncasedCogRenderer(true);
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource} bufferSource
 * @override
 */
EncasedCogRenderer.prototype.renderSafe = function (blockInfo, partialTicks, poseStack, bufferSource) {
  KineticBlockInfoRenderer.prototype.renderSafe.call(this, blockInfo, partialTicks, poseStack, bufferSource);

  const state = blockInfo.state;
  const block = state.getBlock();
  if (!(block instanceof $IRotate)) {
    return;
  }

  /** @type {Internal.IRotate} */
  const def = block;

  const axis = KineticBlockInfoRenderer.getRotationAxisOf(blockInfo);
  const pos = blockInfo.pos;
  const angle = this.large
    ? BracketedKineticBlockInfoRenderer.getAngleForLargeCogShaft(blockInfo, axis)
    : this.getAngle(blockInfo, axis);

  $CreateIterate.directionsInAxis(KineticBlockInfoRenderer.getRotationAxisOf(blockInfo)).forEach((d) => {
    if (!def.hasShaftTowards(null, pos, blockInfo.state, d)) {
      return;
    }
    const shaft = $CachedBufferer.partialFacing($AllPartialModels.SHAFT_HALF, blockInfo.state, d);
    KineticBlockInfoRenderer.kineticRotationTransform(shaft, axis, angle).renderInto(
      poseStack,
      bufferSource.getBuffer($RenderType.solid())
    );
  });
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {Internal.BlockState} blockState
 * @return {Internal.SuperByteBuffer}
 * @override
 */
EncasedCogRenderer.prototype.getRotatedModel = function (blockInfo, blockState) {
  return $CachedBufferer.partialFacingVertical(
    this.large ? $AllPartialModels.SHAFTLESS_LARGE_COGWHEEL : $AllPartialModels.SHAFTLESS_COGWHEEL,
    blockState,
    $Direction.fromAxisAndDirection(
      blockState.getValue(BlockProperties.AXIS),
      $Direction$AxisDirection.POSITIVE
    )
  );
};
