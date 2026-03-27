// priority: 4096

/**
 * @param {Internal.AABB} currAABB
 */
function ChasingAABBOutlineWrapper(currAABB) {
  this.wrapper = new $ChasingAABBOutline(currAABB);
  this.color = 0x6886c5;
  this.lineWidth = 1 / 16;
  this.texture = $AllSpecialTextures.HIGHLIGHT_CHECKERED;
  this.highlightTexture = $AllSpecialTextures.HIGHLIGHT_CHECKERED;
  this.wrapper
    .getParams()
    .colored(this.color)
    .withFaceTextures(this.texture, this.highlightTexture)
    .lineWidth(this.lineWidth);
}

/**
 * @param {Internal.AABB} target
 */
ChasingAABBOutlineWrapper.prototype.setTarget = function (target) {
  this.wrapper.target(target);
};

ChasingAABBOutlineWrapper.prototype.tick = function () {
  this.wrapper.tick();
};

ChasingAABBOutlineWrapper.prototype.updateParams = function () {
  this.wrapper
    .getParams()
    .colored(this.color)
    .withFaceTextures(this.texture, this.highlightTexture)
    .lineWidth(this.lineWidth);
};

/**
 *
 * @param {Internal.PoseStack} ms
 * @param {Internal.SuperRenderTypeBuffer} buffer
 * @param {Vec3d} camera
 * @param {number} pt
 */
ChasingAABBOutlineWrapper.prototype.render = function (ms, buffer, camera, pt) {
  this.wrapper.render(ms, buffer, camera, pt);
};
