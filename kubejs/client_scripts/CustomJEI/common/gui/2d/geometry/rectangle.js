// priority: 4096

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 */
function Rectangle(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.rotateAngle = 0;
  this.isVisible = true;

  this.fillColor = Color.BLACK.argbJS;
  this.borderColor = null;
}

/**
 * @param {number} mouseX
 * @param {number} mouseY
 * @returns {boolean}
 */
Rectangle.prototype.isOver = function (mouseX, mouseY) {
  if (this.rotateAngle === 0) {
    return mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y + this.h;
  }

  const dx = mouseX - this.x;
  const dy = mouseY - this.y;

  const rad = (this.rotateAngle * Math.PI) / -180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);

  const nx = dx * cos - dy * sin;
  const ny = dx * sin + dy * cos;

  return nx >= 0 && nx <= this.w && ny >= 0 && ny <= this.h;
};

/**
 * @param {number} dx
 * @param {number} dy
 * @returns {Rectangle}
 */
Rectangle.prototype.translate = function (dx, dy) {
  this.x += dx;
  this.y += dy;
  return this;
};

/**
 * @param {number} degree
 * @returns {Rectangle}
 */
Rectangle.prototype.rotate = function (degree) {
  this.rotate += degree;
  return this;
};

/**
 * @param {Internal.GuiGraphics} guiGraphics
 * @param {number} fillColor
 * @param {number} borderColor
 */
Rectangle.prototype.draw = function (guiGraphics, fillColor, borderColor) {
  if (!this.isVisible) {
    return;
  }

  fillColor = fillColor || this.fillColor;
  borderColor = borderColor || this.borderColor;

  const ms = guiGraphics.pose();

  ms.pushPose();
  ms.translate(this.x, this.y, 0);

  if (this.rotateAngle !== 0) {
    ms.mulPose($Axis.ZP.rotationDegrees(this.rotateAngle));
  }

  guiGraphics.fill(0, 0, this.w, this.h, fillColor);

  if (borderColor !== null && borderColor !== undefined && borderColor !== fillColor) {
    guiGraphics.renderOutline(0, 0, this.w, this.h, borderColor);
  }

  ms.popPose();
};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 */
function DraggableRectangle(x, y, w, h) {
  Rectangle.call(this, x, y, w, h);

  this.isDragging = false;
  this.dragFillColor = this.fillColor;
  this.dragBorderColor = this.borderColor;
  this.allowList = [$InputConstants.MOUSE_BUTTON_LEFT];
}

inheritPrototype(DraggableRectangle, Rectangle);

/**
 * @param {number} mouseX
 * @param {number} mouseY
 * @param {number} key
 * @returns {boolean}
 */
DraggableRectangle.prototype.onMouseClick = function (mouseX, mouseY, key) {
  if (this.allowList.indexOf(key) !== -1 && this.isOver(mouseX, mouseY) && !this.isDragging) {
    this.isDragging = true;
    return true;
  }
  return false;
};

/**
 * @param {number} mouseX
 * @param {number} mouseY
 * @param {number} key
 * @returns {boolean}
 */
DraggableRectangle.prototype.onMouseRelease = function (mouseX, mouseY, key) {
  if (this.allowList.indexOf(key) !== -1 && this.isDragging) {
    this.isDragging = false;
    return true;
  }
  return false;
};

/**
 * @param {number} mouseX
 * @param {number} mouseY
 * @param {number} key
 * @param {number} dragX
 * @param {number} dragY
 * @returns {boolean}
 */
DraggableRectangle.prototype.onMouseDrag = function (mouseX, mouseY, key, dragX, dragY) {
  if (this.allowList.indexOf(key) !== -1 && this.isDragging) {
    this.translate(dragX, dragY);
    return true;
  }
  return false;
};

/**
 * @param {Internal.GuiGraphics} guiGraphics
 * @param {number} fillColor
 * @param {number} borderColor
 * @param {number} dragFillColor
 * @param {number} dragBorderColor
 */
DraggableRectangle.prototype.draw = function (
  guiGraphics,
  fillColor,
  borderColor,
  dragFillColor,
  dragBorderColor
) {
  if (this.isDragging) {
    Rectangle.prototype.draw.call(
      this,
      guiGraphics,
      dragFillColor || this.dragFillColor,
      dragBorderColor || this.dragBorderColor
    );
  } else {
    Rectangle.prototype.draw.call(
      this,
      guiGraphics,
      fillColor || this.fillColor,
      borderColor || this.borderColor
    );
  }
};
