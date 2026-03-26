// priority: 4096

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 */
function StaticRectengularTooltip(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.components = [];
}

/**
 * @param {string} text
 * @return {StaticRectengularTooltip}
 */
StaticRectengularTooltip.prototype.addLiteral = function (text) {
  this.components.push(Text.literal(text));
  return this;
};

/**
 * @param {string} key
 * @return {StaticRectengularTooltip}
 */
StaticRectengularTooltip.prototype.addTranslate = function (key) {
  this.components.push(Text.translatable(key));
  return this;
};

/**
 * @param {Internal.FormattedText} formatted
 * @return {StaticRectengularTooltip}
 */
StaticRectengularTooltip.prototype.addFormattedText = function (formatted) {
  this.components.push(formatted);
  return this;
};

StaticRectengularTooltip.prototype.mouseIsOver = function (mouseX, mouseY) {
  return (
    mouseX >= this.x && mouseX < this.x + this.width && mouseY >= this.y && mouseY < this.y + this.height
  );
};

/**
 * @param {Internal.ITooltipBuilder} tooltip
 * @param {number} mouseX
 * @param {number} mouseY
 */
StaticRectengularTooltip.prototype.handleTooltip = function (tooltip, mouseX, mouseY) {
  if (this.mouseIsOver(mouseX, mouseY)) {
    this.components.forEach((component) =>
      tooltip['add(net.minecraft.network.chat.FormattedText)'](component)
    );
  }
};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 */
function MutableRectengularTooltip(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.tooltipCallback = (tooltip, recipe) => {};
}

/**
 * @param {function(Internal.ITooltipBuilder, Internal.CustomJSRecipe): void} callback
 * @return {MutableRectengularTooltip}
 */
MutableRectengularTooltip.prototype.setTooltipCallback = function (callback) {
  this.tooltipCallback = callback;
  return this;
};

MutableRectengularTooltip.prototype.mouseIsOver = function (mouseX, mouseY) {
  return (
    mouseX >= this.x && mouseX < this.x + this.width && mouseY >= this.y && mouseY < this.y + this.height
  );
};

/**
 * @param {Internal.ITooltipBuilder} tooltip
 * @param {Internal.CustomJSRecipe} recipe
 * @param {number} mouseX
 * @param {number} mouseY
 */
MutableRectengularTooltip.prototype.handleTooltip = function (tooltip, recipe, mouseX, mouseY) {
  if (this.mouseIsOver(mouseX, mouseY)) {
    this.tooltipCallback(tooltip, recipe);
  }
};
