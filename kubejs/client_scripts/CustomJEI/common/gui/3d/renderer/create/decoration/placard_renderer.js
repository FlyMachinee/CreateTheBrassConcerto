// priority: 9998

function PlacardRenderer() {
  SafeBlockInfoRenderer.call(this);
  this._item = null;
}

inheritPrototype(PlacardRenderer, SafeBlockInfoRenderer);

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource} bufferSource
 * @override
 */
PlacardRenderer.prototype.renderSafe = function (blockInfo, partialTicks, poseStack, bufferSource) {
  const item = this.getItem(blockInfo);
  if (!item || item.isEmpty()) {
    return;
  }

  const state = blockInfo.state;
  const facing = state.getValue(BlockProperties.FACING);
  const face = state.getValue(BlockProperties.ATTACH_FACE);

  const itemRenderer = Client.getItemRenderer();
  const bakedModel = itemRenderer.getModel(item, null, null, 0);
  const blockItem = bakedModel.isGui3d();

  /**
   * @param {Internal.Direction} axis
   * @param {number} rad
   */
  const rotate = (axis, rad) => {
    if (rad !== 0) {
      poseStack.mulPose(new Quaternionf().rotateAxis(rad, axis.step()));
    }
  };

  poseStack.pushPose();
  poseStack.translate(0.5, 0.5, 0.5);
  const angle1 =
    (face === $AttachFace.CEILING ? JavaMath.PI : 0) +
    $AngleHelper.rad(180 + $AngleHelper.horizontalAngle(facing));
  rotate($Direction.UP, angle1);
  const angle2 =
    face === $AttachFace.CEILING ? -JavaMath.PI / 2 : face === $AttachFace.FLOOR ? JavaMath.PI / 2 : 0;
  rotate($Direction.EAST, angle2);
  poseStack.translate(0, 0, 4.5 / 16);
  const scale = blockItem ? 0.5 : 0.375;
  poseStack.scale(scale, scale, scale);
  itemRenderer.render(
    item,
    $ItemDisplayContext.FIXED,
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
 * @returns {Internal.ItemStack}
 */
PlacardRenderer.getItem = function (blockInfo) {
  const nbt = blockInfo.nbt;
  if (nbt && nbt.contains('Item')) {
    return $ItemStack.of(nbt.getCompound('Item'));
  }
  return null;
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @returns {Internal.ItemStack}
 */
PlacardRenderer.prototype.getItem = function (blockInfo) {
  if (this._item === null) {
    return PlacardRenderer.getItem(blockInfo) || Item.empty;
  } else {
    return this._item;
  }
};
