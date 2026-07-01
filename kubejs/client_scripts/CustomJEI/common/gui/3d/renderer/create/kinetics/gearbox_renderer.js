// priority: 8189

function GearboxRenderer() {
  KineticBlockInfoRenderer.call(this);
}

inheritPrototype(GearboxRenderer, KineticBlockInfoRenderer);

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource} bufferSource
 * @override
 */
GearboxRenderer.prototype.renderSafe = function (blockInfo, partialTicks, poseStack, bufferSource) {
  const boxAxis = blockInfo.state.getValue(BlockProperties.AXIS);
  const time = $AnimationTickHolder.getRenderTime();

  $Direction.values().forEach((dir) => {
    const axis = dir.getAxis();
    if (boxAxis === axis) {
      return;
    }

    /** @type {Internal.SuperByteBuffer} */
    const shaft = $CachedBufferer.partialFacing($AllPartialModels.SHAFT_HALF, blockInfo.state, dir);
    const offset = KineticBlockInfoRenderer.getRotationOffsetForPosition(blockInfo, axis);
    let angle = ((time * this.getSpeed(blockInfo) * 3) / 10) % 360;

    if (this.getSpeed(blockInfo) !== 0 && KineticBlockInfoRenderer.hasSource(blockInfo)) {
      let source = KineticBlockInfoRenderer.getSource(blockInfo);
      let sourceFacing = $Direction.getNearest(source.getX(), source.getY(), source.getZ());
      if (sourceFacing.getAxis().equals(dir.getAxis())) {
        angle *= sourceFacing.equals(dir) ? 1 : -1;
      } else if (sourceFacing.getAxisDirection().equals(dir.getAxisDirection())) {
        angle *= -1;
      }
    }

    angle += offset;
    angle = (angle / 180) * JavaMath.PI;

    KineticBlockInfoRenderer.kineticRotationTransform(shaft, axis, angle).renderInto(
      poseStack,
      bufferSource.getBuffer($RenderType.solid())
    );
  });
};
