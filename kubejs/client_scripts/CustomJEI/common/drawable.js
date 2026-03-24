// priority: 4096

/**
 * @param {Internal.IDrawableStatic} front 
 * @param {Internal.IDrawableStatic} background 
 * @param {number} startDirection 
 * @param {boolean} inverted
 */
function DrawableAnimated(front, background, startDirection, inverted) {
  this.front = front;
  this.background = background;
  this.startDirection = startDirection;
  this.inverted = inverted || false;

  this.getWidth = () => this.front.getWidth();
  this.getHeight = () => this.front.getHeight();

  /**
   * @param {Internal.GuiGraphics} guiGraphics 
   * @param {number} x 
   * @param {number} y 
   * @param {number} progress 
   */
  this.draw = (guiGraphics, x, y, progress) => {
    if (this.background) {
      this.background.draw(guiGraphics, x, y);
    }
    const w = this.front.getWidth();
    const h = this.front.getHeight();
    let dir = this.startDirection;
    if (!inverted) {
      progress = 1 - progress;
      dir = dir ^ 1;
    }
    switch (dir) {
      case DrawableAnimated.StartDirection.TOP:
        this.front.draw(guiGraphics, x, y, h * progress, 0, 0, 0);
        break;
      case DrawableAnimated.StartDirection.BOTTOM:
        this.front.draw(guiGraphics, x, y, 0, h * progress, 0, 0);
        break;
      case DrawableAnimated.StartDirection.LEFT:
        this.front.draw(guiGraphics, x, y, 0, 0, w * progress, 0);
        break;
      case DrawableAnimated.StartDirection.RIGHT:
        this.front.draw(guiGraphics, x, y, 0, 0, 0, w * progress);
        break;
    }
  }

  this.drawEmpty = (guiGraphics, x, y) => {
    if (this.background) {
      this.background.draw(guiGraphics, x, y);
    }
  }

  this.drawFull = (guiGraphics, x, y) => {
    if (this.background) {
      this.background.draw(guiGraphics, x, y);
    }
    this.front.draw(guiGraphics, x, y);
  }
}

DrawableAnimated.StartDirection = {
  TOP: 0,
  BOTTOM: 1,
  LEFT: 2,
  RIGHT: 3,
};