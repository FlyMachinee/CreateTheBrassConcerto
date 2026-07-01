// priority: 8189

/**
 * @param {Internal.PartialModel} halfRope
 * @param {Internal.PartialModel} halfMagnet
 */
function AbstractPulleyRenderer(halfRope, halfMagnet) {
  KineticBlockInfoRenderer.call(this);
  this._halfRope = halfRope;
  this._halfMagnet = halfMagnet;
}

inheritPrototype(AbstractPulleyRenderer, KineticBlockInfoRenderer);

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource} bufferSource
 * @override
 */
AbstractPulleyRenderer.prototype.renderSafe = function (blockInfo, partialTicks, poseStack, bufferSource) {
  KineticBlockInfoRenderer.prototype.renderSafe.call(this, blockInfo, partialTicks, poseStack, bufferSource);
  const offset = this.getOffset(blockInfo, partialTicks);
  const running = this.isRunning(blockInfo);

  const rotationAxis = blockInfo.state.getBlock().getRotationAxis(blockInfo.state);
  KineticBlockInfoRenderer.kineticRotationTransform(
    this.getRotatedCoil(blockInfo),
    rotationAxis,
    $AngleHelper.rad(offset * 180)
  ).renderInto(poseStack, bufferSource.getBuffer($RenderType.solid()));

  const blockState = blockInfo.state;

  const halfMagnet = $CachedBufferer.partial(this._halfMagnet, blockState);
  const halfRope = $CachedBufferer.partial(this._halfRope, blockState);
  const magnet = this.renderMagnet(blockInfo);
  const rope = this.renderRope(blockInfo);

  const vb = bufferSource.getBuffer($RenderType.solid());
  if (running || offset === 0) {
    AbstractPulleyRenderer.renderAt(offset > 0.25 ? magnet : halfMagnet, offset, poseStack, vb);
  }

  const f = offset % 1;
  if (offset > 0.75 && (f < 0.25 || f > 0.75)) {
    AbstractPulleyRenderer.renderAt(halfRope, f > 0.75 ? f - 1 : f, poseStack, vb);
  }

  if (!running) {
    return;
  }

  for (let i = 0; i < offset - 1.25; i++) {
    AbstractPulleyRenderer.renderAt(rope, offset - i - 1, poseStack, vb);
  }
};

/**
 * @param {Internal.SuperByteBuffer} partial
 * @param {number} offset
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.VertexConsumer} buffer
 */
AbstractPulleyRenderer.renderAt = function (partial, offset, poseStack, buffer) {
  partial.translate(0, -offset, 0).light($LightTexture.FULL_BRIGHT).renderInto(poseStack, buffer);
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {Internal.Direction$Axis}
 * @abstract
 */
AbstractPulleyRenderer.prototype.getShaftAxis = function (blockInfo) {
  throw new Error(
    'AbstractPulleyRenderer.prototype.getShaftAxis is abstract and must be implemented by subclass'
  );
};

/**
 * @return {Internal.PartialModel}
 * @abstract
 */
AbstractPulleyRenderer.prototype.getCoil = function () {
  throw new Error('AbstractPulleyRenderer.prototype.getCoil is abstract and must be implemented by subclass');
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {Internal.SuperByteBuffer}
 * @abstract
 */
AbstractPulleyRenderer.prototype.renderRope = function (blockInfo) {
  throw new Error(
    'AbstractPulleyRenderer.prototype.renderRope is abstract and must be implemented by subclass'
  );
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {Internal.SuperByteBuffer}
 * @abstract
 */
AbstractPulleyRenderer.prototype.renderMagnet = function (blockInfo) {
  throw new Error(
    'AbstractPulleyRenderer.prototype.renderMagnet is abstract and must be implemented by subclass'
  );
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @return {number}
 * @abstract
 */
AbstractPulleyRenderer.prototype.getOffset = function (blockInfo, partialTicks) {
  throw new Error(
    'AbstractPulleyRenderer.prototype.getOffset is abstract and must be implemented by subclass'
  );
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {number}
 */
AbstractPulleyRenderer.getOffset = function (blockInfo) {
  // from nbt Offset -> Value
  if (blockInfo.nbt || !blockInfo.nbt.contains('Offset', $Tag.TAG_COMPOUND)) return 0;
  const offsetNbt = blockInfo.nbt.getCompound('Offset');
  if (!offsetNbt.contains('Value', $Tag.TAG_FLOAT)) return 0;
  return offsetNbt.getFloat('Value');
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {boolean}
 * @abstract
 */
AbstractPulleyRenderer.prototype.isRunning = function (blockInfo) {
  throw new Error(
    'AbstractPulleyRenderer.prototype.isRunning is abstract and must be implemented by subclass'
  );
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {Internal.BlockState}
 * @override
 */
AbstractPulleyRenderer.prototype.getRenderedBlockState = function (blockInfo) {
  return KineticBlockInfoRenderer.shaft(this.getShaftAxis(blockInfo));
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {Internal.SuperByteBuffer}
 */
AbstractPulleyRenderer.prototype.getRotatedCoil = function (blockInfo) {
  const blockState = blockInfo.state;
  return $CachedBufferer.partialFacing(
    this.getCoil(),
    blockState,
    $Direction.get($Direction$AxisDirection.POSITIVE, this.getShaftAxis(blockInfo))
  );
};
