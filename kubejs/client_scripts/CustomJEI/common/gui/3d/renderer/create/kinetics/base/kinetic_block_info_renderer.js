// priority: 8190

function KineticBlockInfoRenderer() {
  SafeBlockInfoRenderer.call(this);
  this._speedCallback = null;
}

inheritPrototype(KineticBlockInfoRenderer, SafeBlockInfoRenderer);

KineticBlockInfoRenderer.KINETIC_BLOCK = $KineticBlockEntityRenderer.KINETIC_BLOCK;

KineticBlockInfoRenderer.REVERSED_CHUNK_BUFFER_LAYERS = [
  $RenderType.tripwire(),
  $RenderType.translucent(),
  $RenderType.cutout(),
  $RenderType.cutoutMipped(),
  $RenderType.solid(),
];

KineticBlockInfoRenderer.GLOBAL_SPEED = 30;

/**
 * @param {function(StructureBlockInfo): number} callback
 * @return {KineticBlockInfoRenderer}
 */
KineticBlockInfoRenderer.prototype.setSpeedCallback = function (callback) {
  this._speedCallback = callback;
  return this;
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource} bufferSource
 * @override
 */
KineticBlockInfoRenderer.prototype.renderSafe = function (blockInfo, partialTicks, poseStack, bufferSource) {
  const state = this.getRenderedBlockState(blockInfo);
  const type = this.getRenderType(blockInfo, state);
  if (type !== null) {
    this.renderRotatingBuffer(
      blockInfo,
      this.getRotatedModel(blockInfo, state),
      poseStack,
      bufferSource.getBuffer(type)
    );
  }
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {Internal.BlockState}
 */
KineticBlockInfoRenderer.prototype.getRenderedBlockState = function (blockInfo) {
  return blockInfo.state;
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {Internal.BlockState} blockState
 * @return {Internal.RenderType}
 */
KineticBlockInfoRenderer.prototype.getRenderType = function (blockInfo, blockState) {
  const model = Client.getBlockRenderer().getBlockModel(blockState);
  const typeSet = model.getRenderTypes(blockState, $RandomSource.create(42), $ModelData.EMPTY);
  for (let type of KineticBlockInfoRenderer.REVERSED_CHUNK_BUFFER_LAYERS) {
    if (typeSet.contains(type)) {
      return type;
    }
  }
  return null;
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {Internal.BlockState} blockState
 * @return {Internal.SuperByteBuffer}
 */
KineticBlockInfoRenderer.prototype.getRotatedModel = function (blockInfo, blockState) {
  return $CachedBufferer.block(KineticBlockInfoRenderer.KINETIC_BLOCK, blockState);
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {Internal.BlockState} renderedState
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.VertexConsumer} buffer
 */
KineticBlockInfoRenderer.prototype.renderRotatingKineticBlock = function (
  blockInfo,
  renderedState,
  poseStack,
  buffer
) {
  /** @type {Internal.SuperByteBuffer} */
  let superByteBuffer = $CachedBufferer.block(KineticBlockInfoRenderer.KINETIC_BLOCK, renderedState);
  this.renderRotatingBuffer(blockInfo, superByteBuffer, poseStack, buffer);
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {Internal.SuperByteBuffer} superBuffer
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.VertexConsumer} buffer
 */
KineticBlockInfoRenderer.prototype.renderRotatingBuffer = function (
  blockInfo,
  superBuffer,
  poseStack,
  buffer
) {
  this.standardKineticRotationTransform(superBuffer, blockInfo).renderInto(poseStack, buffer);
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {number}
 */
KineticBlockInfoRenderer.getSpeed = function (blockInfo) {
  const nbt = blockInfo.nbt;
  if (nbt && nbt.contains('Speed', $Tag.TAG_FLOAT)) {
    return nbt.getFloat('Speed');
  } else {
    return KineticBlockInfoRenderer.GLOBAL_SPEED;
  }
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {number}
 */
KineticBlockInfoRenderer.prototype.getSpeed = function (blockInfo) {
  if (this._speedCallback) {
    return this._speedCallback(blockInfo);
  } else {
    return KineticBlockInfoRenderer.getSpeed(blockInfo);
  }
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {Internal.Direction$Axis} axis
 * @return {number}
 */
KineticBlockInfoRenderer.prototype.getAngle = function (blockInfo, axis) {
  const time = $AnimationTickHolder.getRenderTime();
  const offset = KineticBlockInfoRenderer.getRotationOffsetForPosition(blockInfo, axis);
  const angle = ((((time * this.getSpeed(blockInfo) * 3) / 10 + offset) % 360) / 180) * JavaMath.PI;
  return angle;
};

/**
 * @param {Internal.SuperByteBuffer} buffer
 * @param {StructureBlockInfo} blockInfo
 * @return {Internal.SuperByteBuffer}
 */
KineticBlockInfoRenderer.prototype.standardKineticRotationTransform = function (buffer, blockInfo) {
  const state = blockInfo.state;
  const axis = state.getBlock().getRotationAxis(state);
  return KineticBlockInfoRenderer.kineticRotationTransform(buffer, axis, this.getAngle(blockInfo, axis));
};

/**
 * @param {Internal.SuperByteBuffer} buffer
 * @param {Internal.Direction$Axis} axis
 * @param {number} angle
 * @return {Internal.SuperByteBuffer}
 */
KineticBlockInfoRenderer.kineticRotationTransform = function (buffer, axis, angle) {
  buffer.light($LightTexture.FULL_BRIGHT);
  buffer.rotateCentered($Direction.get($Direction$AxisDirection.POSITIVE, axis), angle);
  buffer.color($CreateColor.WHITE);
  return buffer;
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {Internal.Direction$Axis} axis
 * @return {number}
 */
KineticBlockInfoRenderer.getRotationOffsetForPosition = function (blockInfo, axis) {
  let offset = $ICogWheel['isLargeCog(net.minecraft.world.level.block.state.BlockState)'](blockInfo.state)
    ? 11.25
    : 0;
  const pos = blockInfo.pos;
  let d =
    ((axis === $Direction$Axis.X ? 0 : pos.getX()) +
      (axis === $Direction$Axis.Y ? 0 : pos.getY()) +
      (axis === $Direction$Axis.Z ? 0 : pos.getZ())) %
    2;
  if (d === 0) {
    offset = 22.5;
  }
  return offset + 0;
};

/**
 * @param {Internal.Direction$Axis} axis
 * @return {Internal.BlockState}
 */
KineticBlockInfoRenderer.shaft = function (axis) {
  return $AllBlocks.SHAFT.getDefaultState().setValue(BlockProperties.AXIS, axis);
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {Internal.Direction$Axis}
 */
KineticBlockInfoRenderer.getRotationAxisOf = function (blockInfo) {
  return blockInfo.state.getBlock().getRotationAxis(blockInfo.state);
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {boolean}
 */
KineticBlockInfoRenderer.hasSource = function (blockInfo) {
  const nbt = blockInfo.nbt;
  return nbt && nbt.contains('Source', $Tag.TAG_COMPOUND);
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {BlockPos}
 */
KineticBlockInfoRenderer.getSource = function (blockInfo) {
  const nbt = blockInfo.nbt;
  if (nbt && nbt.contains('Source', $Tag.TAG_COMPOUND)) {
    const tag = nbt.getCompound('Source');
    return new BlockPos(tag.getInt('X'), tag.getInt('Y'), tag.getInt('Z'));
  } else {
    return null;
  }
};
