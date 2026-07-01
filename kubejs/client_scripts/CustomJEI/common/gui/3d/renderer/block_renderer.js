// priority: 4999

function BlockRenderer() {}

/**
 * @param {Internal.BakedModel} model
 * @param {Internal.BlockState} blockState
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource$BufferSource} bufferSource
 */
BlockRenderer.renderModel = function (model, blockState, poseStack, bufferSource) {
  if (!blockState) {
    return;
  }

  if (blockState.getBlock().equals(Blocks.AIR)) {
    let renderType = getSheets().translucentCullBlockSheet();
    Client.getBlockRenderer()
      .getModelRenderer()
      .renderModel(
        poseStack.last(),
        bufferSource.getBuffer(renderType),
        blockState,
        model,
        1,
        1,
        1,
        $LightTexture.FULL_BRIGHT,
        $OverlayTexture.NO_OVERLAY,
        getModelUtil().VIRTUAL_DATA,
        null
      );
  } else {
    let color = Client.getBlockColors().getColor(blockState, null, null, 0);
    let rgb = new $CreateColor(color === -1 ? 0xffffff : color);

    model
      .getRenderTypes(blockState, $RandomSource.create(42), getModelUtil().VIRTUAL_DATA)
      .forEach((chunkType) => {
        let renderType = $RenderTypeHelper.getEntityRenderType(chunkType, true);

        Client.getBlockRenderer()
          .getModelRenderer()
          .renderModel(
            poseStack.last(),
            bufferSource.getBuffer(renderType),
            blockState,
            model,
            rgb.getRedAsFloat(),
            rgb.getGreenAsFloat(),
            rgb.getBlueAsFloat(),
            $LightTexture.FULL_BRIGHT,
            $OverlayTexture.NO_OVERLAY,
            getModelUtil().VIRTUAL_DATA,
            chunkType
          );
      });
  }

  bufferSource.endBatch();

  if (blockState.getFluidState().isEmpty()) {
    return;
  }

  $FluidRenderer.renderFluidBox(
    Fluid.of(blockState.getFluidState().getType(), 1000),
    0,
    0,
    0,
    1,
    1,
    1,
    bufferSource,
    poseStack,
    $LightTexture.FULL_BRIGHT,
    false
  );
  bufferSource.endBatch();
};

/**
 * @param {Internal.BlockState} blockState
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource$BufferSource} bufferSource
 */
BlockRenderer.renderBlockState = function (blockState, poseStack, bufferSource) {
  const model = Client.getBlockRenderer().getBlockModel(blockState);
  BlockRenderer.renderModel(model, blockState, poseStack, bufferSource);
};

/**
 * @param {Internal.PartialModel} partialModel
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource$BufferSource} bufferSource
 */
BlockRenderer.renderPartialModel = function (partialModel, poseStack, bufferSource) {
  const model = partialModel.get();
  BlockRenderer.renderModel(model, null, poseStack, bufferSource);
};

/**
 * @param {Internal.BlockState} blockState
 * @return {BlockInfoRenderer}
 */
BlockRenderer.prototype.getExtraRenderer = function (blockState) {
  if (!blockState) {
    return null;
  }
  const block = blockState.getBlock();
  if (blockExtraRendererMapping.containsKey(block)) {
    return blockExtraRendererMapping.get(block);
  } else {
    return null;
  }
};

/**
 * @param {StructureBlockInfo} blockInfo
 * @param {number} partialTicks
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.MultiBufferSource} bufferSource
 */
BlockRenderer.prototype.render = function (blockInfo, partialTicks, poseStack, bufferSource) {
  BlockRenderer.renderBlockState(blockInfo.state, poseStack, bufferSource);
  const extraRenderer = this.getExtraRenderer(blockInfo.state);
  if (extraRenderer) {
    extraRenderer.render(blockInfo, partialTicks, poseStack, bufferSource);
  }
};

/**
 * 应该在渲染前调用
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.ILightingSettings} lighting
 */
BlockRenderer.prototype.beforeRender = function (poseStack, lighting) {
  poseStack.pushPose();
  $RenderSystem.setShaderColor(1, 1, 1, 1);
  $RenderSystem.enableDepthTest();
  $RenderSystem.enableBlend();
  $RenderSystem.blendFunc($SourceFactor.SRC_ALPHA, $DestFactor.ONE_MINUS_SRC_ALPHA);
  if (lighting) {
    lighting.applyLighting();
  } else {
    $Lighting.setupFor3DItems();
  }
  $RenderSystem.setShaderTexture(0, $InventoryMenu.BLOCK_ATLAS);
};

/**
 * 应该在渲染后调用
 * @param {Internal.PoseStack} poseStack
 * @param {Internal.ILightingSettings} lighting
 */
BlockRenderer.prototype.afterRender = function (poseStack, lighting) {
  poseStack.popPose();
  if (lighting) {
    $Lighting.setupFor3DItems();
  }
};
