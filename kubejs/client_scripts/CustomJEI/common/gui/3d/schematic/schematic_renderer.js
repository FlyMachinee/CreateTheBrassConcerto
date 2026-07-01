// priority: 2048

/**
 * @param {SchematicStructure} schematicStructure
 */
function SchematicRenderer(schematicStructure) {
  this._schematicStructure = schematicStructure;
  this._renderer = new BlockRenderer();
}

/**
 * @param {Internal.GuiGraphics} guiGraphics
 * @param {Internal.ILightingSettings} lighting
 */
SchematicRenderer.prototype.render = function (guiGraphics, lighting) {
  const ms = guiGraphics.pose();
  this._renderer.beforeRender(ms, lighting);

  const bufferSource = guiGraphics.bufferSource();
  this._schematicStructure.tensorForEach((info) => {
    const pos = info.pos;
    const pt = $AnimationTickHolder.getPartialTicks();
    ms.pushPose();
    ms.translate(pos.x, -pos.y, pos.z);
    $UIRenderHelper.flipForGuiRender(ms);
    this._renderer.render(info, pt, ms, bufferSource);
    ms.popPose();
  });

  this._renderer.afterRender(ms, lighting);
};
