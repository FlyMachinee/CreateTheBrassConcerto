// priority: 4096

/**
 * @param {number} x
 * @param {number} y
 * @param {number} scale
 * @param {number} yaw
 * @param {number} pitch
 */
function EntityRenderInfo(x, y, scale, yaw, pitch) {
  this.x = x;
  this.y = y;
  this.scale = scale;
  this.yaw = yaw;
  this.pitch = pitch;
}

/**
 * @param {Internal.LivingEntity} livingEntity
 * @param {EntityRenderInfo} renderInfo
 */
const applyEntityRenderHooks = (livingEntity, renderInfo) => {
  const modelViewStack = $RenderSystem.getModelViewStack();
  if (livingEntity instanceof $EnderDragon) {
    modelViewStack.mulPose($Axis.XP.rotationDegrees(20));
    modelViewStack.mulPose($Axis.YP.rotationDegrees(180));
    renderInfo.pitch = -renderInfo.pitch - 80;
  }
  modelViewStack.mulPose(
    $Axis.YN.rotationDegrees(
      (renderInfo.yaw < 90 ? (renderInfo.yaw < -90 ? 90 : -renderInfo.yaw) : -90) / 2
    )
  );
  return renderInfo;
};

/**
 * @param {Internal.GuiGraphics} guiGraphics
 * @param {number} x
 * @param {number} y
 * @param {number} scale
 * @param {number} yaw 朝向角
 * @param {number} pitch 俯仰角
 * @param {Internal.LivingEntity} livingEntity 要渲染的实体
 *
 * @note 参考 https://github.com/way2muchnoise/JustEnoughResources/blob/1.20.1/Common/src/main/java/jeresources/util/RenderHelper.java#L33-L68
 */
const drawEntity = (guiGraphics, x, y, scale, yaw, pitch, livingEntity) => {
  const modelViewStack = $RenderSystem.getModelViewStack();
  modelViewStack.pushPose();
  modelViewStack.mulPoseMatrix(guiGraphics.pose().last().pose());
  modelViewStack.translate(x, y, 50);
  modelViewStack.scale(-scale, scale, scale);
  const mobPoseStack = new $PoseStack();
  mobPoseStack.mulPose($Axis.ZP.rotationDegrees(180));

  const renderInfo = applyEntityRenderHooks(livingEntity, new EntityRenderInfo(x, y, scale, yaw, pitch));
  x = renderInfo.x;
  y = renderInfo.y;
  scale = renderInfo.scale;
  yaw = renderInfo.yaw;
  pitch = renderInfo.pitch;

  mobPoseStack.mulPose($Axis.XN.rotationDegrees(JavaMath.atan(pitch / 40) * 20));
  livingEntity.yo = JavaMath.atan(yaw / 40) * 20;
  let yRot = JavaMath.atan(yaw / 40) * 40;
  let xRot = -JavaMath.atan(pitch / 40) * 20;
  livingEntity.setYRot(yRot);
  livingEntity.setYRot(yRot);
  livingEntity.setXRot(xRot);
  livingEntity.yHeadRot = yRot;
  livingEntity.yHeadRotO = yRot;
  mobPoseStack.translate(0, livingEntity.getY(), 0);
  $RenderSystem.applyModelViewMatrix();
  const entityRenderDispatcher = $Minecraft.getInstance().getEntityRenderDispatcher();
  entityRenderDispatcher.setRenderShadow(false);
  const bufferSource = $Minecraft.getInstance().renderBuffers().bufferSource();
  $RenderSystem.runAsFancy(() => {
    entityRenderDispatcher.render(livingEntity, 0, 0, 0, 0, 1, mobPoseStack, bufferSource, 15728880);
  });
  bufferSource.endBatch();
  entityRenderDispatcher.setRenderShadow(true);
  modelViewStack.popPose();
  $RenderSystem.applyModelViewMatrix();
};
