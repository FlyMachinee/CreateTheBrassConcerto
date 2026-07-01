// priority: 8189

function DeployerRenderer() {
  KineticBlockInfoRenderer.call(this);
  this._mode = null;
  this._item = null;
}

inheritPrototype(DeployerRenderer, KineticBlockInfoRenderer);

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource} bufferSource
 * @override
 */
DeployerRenderer.prototype.renderSafe = function (blockInfo, partialTicks, poseStack, bufferSource) {
  this.renderItem(blockInfo, partialTicks, poseStack, bufferSource);
  this.renderComponents(blockInfo, partialTicks, poseStack, bufferSource);
};

DeployerRenderer.MAXIMUM_RPM_RECIPE_TIME = 5;

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource} bufferSource
 */
DeployerRenderer.prototype.renderItem = function (blockInfo, partialTicks, poseStack, bufferSource) {
  if (!this.getItem() || this.getItem().isEmpty()) {
    return;
  }

  const deployerState = blockInfo.state;
  const offset = this.getHandOffset(blockInfo, partialTicks).add(0.5, 0.5, 0.5);
  poseStack.pushPose();
  poseStack.translate(offset.x(), offset.y(), offset.z());

  const facing = deployerState.getValue(BlockProperties.FACING);
  const punching = this.getMode(blockInfo) === 'PUNCH';

  const yRot = $AngleHelper.horizontalAngle(facing) + 180;
  const xRot = facing === Direction.UP ? 90 : facing === Direction.DOWN ? 270 : 0;
  const displayMode =
    facing === Direction.UP && KineticBlockInfoRenderer.getSpeed(blockInfo) === 0 && !punching;

  poseStack.mulPose($Axis.YP.rotationDegrees(yRot));
  if (!displayMode) {
    poseStack.mulPose($Axis.XP.rotationDegrees(xRot));
    poseStack.translate(0, 0, -11 / 16);
  }

  if (punching) {
    poseStack.translate(0, 1 / 8, -1 / 16);
  }

  const itemRenderer = Client.getItemRenderer();
  let transform = $ItemDisplayContext.NONE;
  const bakedModel = itemRenderer.getModel(this.getItem(), null, null, 0);
  const isBlockItem = this.getItem().getItem() instanceof $BlockItem && bakedModel.isGui3d();

  if (displayMode) {
    const scale = isBlockItem ? 1.25 : 1;
    poseStack.translate(0, isBlockItem ? 9 / 16 : 11 / 16, 0);
    poseStack.scale(scale, scale, scale);
    transform = $ItemDisplayContext.GROUND;
    poseStack.mulPose($Axis.YP.rotationDegrees($AnimationTickHolder.getRenderTime()));
  } else {
    const scale = punching ? 0.75 : isBlockItem ? 0.75 - 1 / 64 : 0.5;
    poseStack.scale(scale, scale, scale);
    transform = punching ? $ItemDisplayContext.THIRD_PERSON_RIGHT_HAND : $ItemDisplayContext.FIXED;
  }

  itemRenderer.render(
    this.getItem(),
    transform,
    false,
    poseStack,
    bufferSource,
    $LightTexture.FULL_BRIGHT,
    $OverlayTexture.NO_OVERLAY,
    bakedModel
  );
  poseStack.popPose();
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource} bufferSource
 */
DeployerRenderer.prototype.renderComponents = function (blockInfo, partialTicks, poseStack, bufferSource) {
  const vb = bufferSource.getBuffer($RenderType.solid());
  this.renderRotatingKineticBlock(
    blockInfo,
    KineticBlockInfoRenderer.shaft(KineticBlockInfoRenderer.getRotationAxisOf(blockInfo)),
    poseStack,
    vb
  );

  const state = blockInfo.state;
  const offset = this.getHandOffset(blockInfo, partialTicks);

  /** @type {Internal.SuperByteBuffer} */
  const pole = $CachedBufferer.partial($AllPartialModels.DEPLOYER_POLE, state);
  /** @type {Internal.SuperByteBuffer} */
  const hand = $CachedBufferer.partial(this.getHandPose(blockInfo), state);

  this.transform(pole.translate(offset.x(), offset.y(), offset.z()), blockInfo, true)
    .light($LightTexture.FULL_BRIGHT)
    .renderInto(poseStack, vb);

  this.transform(hand.translate(offset.x(), offset.y(), offset.z()), blockInfo, false)
    .light($LightTexture.FULL_BRIGHT)
    .renderInto(poseStack, vb);
};

/**
 * @param {Internal.SuperByteBuffer} buffer
 * @param {StructureBlockInfo} blockInfo
 * @param {boolean} axisDirectionMatters
 * @return {Internal.SuperByteBuffer}
 */
DeployerRenderer.prototype.transform = function (buffer, blockInfo, axisDirectionMatters) {
  const state = blockInfo.state;
  const facing = state.getValue(BlockProperties.FACING);
  const yRot = $AngleHelper.horizontalAngle(facing);
  const xRot = facing === Direction.UP ? 270 : facing === Direction.DOWN ? 90 : 0;
  const zRot =
    axisDirectionMatters &&
    state.getValue($DirectionalAxisKineticBlock.AXIS_ALONG_FIRST_COORDINATE) ^
      (facing.getAxis() === $Direction$Axis.Z)
      ? 90
      : 0;

  buffer.rotateCentered(Direction.UP, (yRot / 180) * JavaMath.PI);
  buffer.rotateCentered(Direction.EAST, (xRot / 180) * JavaMath.PI);
  buffer.rotateCentered(Direction.SOUTH, (zRot / 180) * JavaMath.PI);
  return buffer;
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @return {Vec3d}
 */
DeployerRenderer.prototype.getHandOffset = function (blockInfo, partialTicks) {
  const speed = KineticBlockInfoRenderer.getSpeed(blockInfo);
  let process = 0;
  if (speed !== 0) {
    let recipeTime = (DeployerRenderer.MAXIMUM_RPM_RECIPE_TIME * 256) / JavaMath.abs(speed);
    let cycle = ($AnimationTickHolder.getRenderTime() % recipeTime) / recipeTime;
    if (cycle < 1 / 3) {
      process = cycle * 3;
    } else if (cycle < 2 / 3) {
      process = 2 - cycle * 3;
    }
  }
  const handPose = this.getHandPose(blockInfo);
  const handLength = handPose.equals($AllPartialModels.DEPLOYER_HAND_POINTING)
    ? 0
    : handPose.equals($AllPartialModels.DEPLOYER_HAND_HOLDING)
    ? 4 / 16
    : 3 / 16;
  const distance = JavaMath.min(clamp(process, 0, 1) * (0.5 + handLength), 21 / 16);
  return Vec3d.atLowerCornerOf(blockInfo.state.getValue(BlockProperties.FACING).getNormal()).scale(distance);
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {string}
 */
DeployerRenderer.getMode = function (blockInfo) {
  const nbt = blockInfo.nbt;
  if (nbt && nbt.contains('Mode', $Tag.TAG_STRING)) {
    return nbt.getString('Mode');
  }
  return null;
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {string}
 */
DeployerRenderer.prototype.getMode = function (blockInfo) {
  if (this._mode === null) {
    return DeployerRenderer.getMode(blockInfo) || 'USE';
  } else {
    return this._mode || 'USE';
  }
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {Internal.ItemStack}
 */
DeployerRenderer.prototype.getItem = function (blockInfo) {
  // TODO
  return this._item;
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @return {Internal.PartialModel}
 */
DeployerRenderer.prototype.getHandPose = function (blockInfo) {
  if (this.getMode(blockInfo) === 'PUNCH') {
    return $AllPartialModels.DEPLOYER_HAND_PUNCHING;
  } else {
    let item = this.getItem(blockInfo);
    if (!item || item.isEmpty()) {
      return $AllPartialModels.DEPLOYER_HAND_POINTING;
    } else {
      return $AllPartialModels.DEPLOYER_HAND_HOLDING;
    }
  }
};
