// priority: 8189

function BracketedKineticBlockInfoRenderer() {
  KineticBlockInfoRenderer.call(this);
}

inheritPrototype(BracketedKineticBlockInfoRenderer, KineticBlockInfoRenderer);

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource} bufferSource
 * @override
 */
BracketedKineticBlockInfoRenderer.prototype.renderSafe = function (
  blockInfo,
  partialTicks,
  poseStack,
  bufferSource
) {
  if (!$AllBlocks.LARGE_COGWHEEL.has(blockInfo.state)) {
    KineticBlockInfoRenderer.prototype.renderSafe.call(
      this,
      blockInfo,
      partialTicks,
      poseStack,
      bufferSource
    );
    return;
  }

  const axis = KineticBlockInfoRenderer.getRotationAxisOf(blockInfo);
  const facing = $Direction.fromAxisAndDirection(axis, $Direction$AxisDirection.POSITIVE);
  this.renderRotatingBuffer(
    blockInfo,
    $CachedBufferer.partialFacingVertical(
      $AllPartialModels.SHAFTLESS_LARGE_COGWHEEL,
      blockInfo.state,
      facing
    ),
    poseStack,
    bufferSource.getBuffer($RenderType.solid())
  );

  const angle = BracketedKineticBlockInfoRenderer.getAngleForLargeCogShaft(blockInfo, axis);
  /** @type {Internal.SuperByteBuffer} */
  const shaft = $CachedBufferer.partialFacingVertical(
    $AllPartialModels.COGWHEEL_SHAFT,
    blockInfo.state,
    facing
  );
  KineticBlockInfoRenderer.kineticRotationTransform(shaft, axis, angle).renderInto(
    poseStack,
    bufferSource.getBuffer($RenderType.solid())
  );
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {Internal.Direction$Axis} axis
 * @return {number}
 */
BracketedKineticBlockInfoRenderer.getAngleForLargeCogShaft = function (blockInfo, axis) {
  const pos = blockInfo.pos;
  const offset = BracketedKineticBlockInfoRenderer.getShaftAngleOffset(axis, pos);
  const time = $AnimationTickHolder.getRenderTime();
  const speed = this.getSpeed(blockInfo);
  const angle = ((((time * speed * 3) / 10 + offset) % 360) / 180) * JavaMath.PI;
  return angle;
};

/**
 * @param {Internal.Direction$Axis} axis
 * @param {BlockPos} pos
 * @return {number}
 */
BracketedKineticBlockInfoRenderer.getShaftAngleOffset = function (axis, pos) {
  let offset = 0;
  const d =
    ((axis === $Direction$Axis.X ? 0 : pos.getX()) +
      (axis === $Direction$Axis.Y ? 0 : pos.getY()) +
      (axis === $Direction$Axis.Z ? 0 : pos.getZ())) %
    2;
  if (d === 0) {
    offset = 22.5;
  }
  return offset;
};
