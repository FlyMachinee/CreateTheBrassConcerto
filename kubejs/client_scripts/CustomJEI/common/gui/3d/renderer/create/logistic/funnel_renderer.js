// priority: 9997

function FunnelRenderer() {
  SmartBlockInfoRenderer.call(this);
  this._isExtracting = null;
  this._frequency = 5;
}

inheritPrototype(FunnelRenderer, SmartBlockInfoRenderer);

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource} bufferSource
 * @override
 */
FunnelRenderer.prototype.renderSafe = function (blockInfo, partialTicks, poseStack, bufferSource) {
  SmartBlockInfoRenderer.prototype.renderSafe.call(this, blockInfo, partialTicks, poseStack, bufferSource);

  if (!FunnelRenderer.hasFlap(blockInfo)) return;

  const state = blockInfo.state;
  const vb = bufferSource.getBuffer($RenderType.solid());
  const partialModel =
    state.getBlock() instanceof $FunnelBlock
      ? $AllPartialModels.FUNNEL_FLAP
      : $AllPartialModels.BELT_FUNNEL_FLAP;
  /** @type {Internal.SuperByteBuffer} */
  const flapBuffer = $CachedBufferer.partial(partialModel, state);
  const pivot = new Vec3d(0, 10, 9.5).scale(1 / 16);
  const horizontalAngle = $AngleHelper.horizontalAngle($FunnelBlock.getFunnelFacing(state).getOpposite());

  const factor = this.getIsExtracting(blockInfo) ? -1 : 1;
  const cycle = $AnimationTickHolder.getRenderTime() % this._frequency;
  let f = factor;
  const foo = (c) => JavaMath.exp(-0.06 * (c - 1));
  if (cycle < 1) {
    f *= lerp(foo(this._frequency), 1, cycle);
  } else {
    f *= foo(cycle);
  }

  poseStack.pushPose();
  poseStack.translate(0.5, 0.5, 0.5);
  poseStack.mulPose($Axis.YP.rotationDegrees(horizontalAngle));
  poseStack.translate(-0.5, -0.5, -0.5);
  poseStack.translate(0.075 / 16, 0, -FunnelRenderer.getFlapOffset(blockInfo));

  for (let segment = 0; segment <= 3; segment++) {
    poseStack.pushPose();

    let intensity = segment === 3 ? 1.5 : segment + 1;
    let abs = JavaMath.abs(f);
    let flapAngle = JavaMath.sin((1 - abs) * JavaMath.PI * intensity) * 30 * -f;
    if (f > 0) flapAngle *= 0.5;

    poseStack.translate(pivot.x(), pivot.y(), pivot.z());
    poseStack.mulPose($Axis.XP.rotationDegrees(flapAngle));
    poseStack.translate(-pivot.x(), -pivot.y(), -pivot.z());

    flapBuffer.light($LightTexture.FULL_BRIGHT).renderInto(poseStack, vb);

    poseStack.popPose();
    poseStack.translate(-3.05 / 16, 0, 0);
  }
  poseStack.popPose();
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {boolean}
 */
FunnelRenderer.hasFlap = function (blockInfo) {
  const blockState = blockInfo.state;
  return $AbstractFunnelBlock.getFunnelFacing(blockState).getAxis().isHorizontal();
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @returns {number}
 */
FunnelRenderer.getFlapOffset = function (blockInfo) {
  const state = blockInfo.state;
  if (!(state.getBlock() instanceof $BeltFunnelBlock)) return -1 / 16;

  switch (state.getValue($BeltFunnelBlock.SHAPE)) {
    default:
    case $BeltFunnelBlock$Shape.RETRACTED:
      return 0;
    case $BeltFunnelBlock$Shape.EXTENDED:
      return 8 / 16;
    case $BeltFunnelBlock$Shape.PULLING:
    case $BeltFunnelBlock$Shape.PUSHING:
      return -2 / 16;
  }
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @returns {boolean}
 */
FunnelRenderer.getIsExtracting = function (blockInfo) {
  const state = blockInfo.state;
  return state.hasProperty($FunnelBlock.EXTRACTING) ? state.getValue($FunnelBlock.EXTRACTING) : null;
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @returns {boolean}
 */
FunnelRenderer.prototype.getIsExtracting = function (blockInfo) {
  if (this._isExtracting === null) {
    return FunnelRenderer.getIsExtracting(blockInfo) || false;
  } else {
    return this._isExtracting;
  }
};
