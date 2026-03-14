// priority: 2048

/**
 * @param {net.minecraft.client.gui.Font} font
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {string} initialText
 */
function EditBox(font, x, y, width, height, initialText) {
  this.font = font;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.text = initialText;

  this.filter = (text) => true;
  this.focused = false;
  this.valueChangedCallback = (text) => {};
  this.confirmCallback = (text) => {};

  this.cursorIndex = 0;
  const cursorPromptInner = Text.literal('|');
  const cursorPromptOuter = Text.literal('_');

  const regularColor = 0xffffff;
  const errorColor = 0xff0000;

  this.getColor = () => {
    return this.filter(this.text) ? regularColor : errorColor;
  };

  /**
   * @param {number} mouseX
   * @param {number} mouseY
   * @returns {boolean}
   */
  this.mouseIsOver = (mouseX, mouseY) => {
    return (
      mouseX >= this.x && mouseX < this.x + this.width && mouseY >= this.y && mouseY < this.y + this.height
    );
  };

  /**
   * @param {Internal.GuiGraphics} guiGraphics
   */
  this.draw = (guiGraphics) => {
    const matrixStack = guiGraphics.pose();
    matrixStack.pushPose();
    // matrixStack.translate(0, 0, -10);
    guiGraphics.fill(
      this.x + 1,
      this.y + 1,
      this.x + this.width - 1,
      this.y + this.height - 1,
      Color.BLACK.argbJS
    );
    const lineColor = this.focused ? Color.WHITE.argbJS : Color.GRAY.argbJS;
    guiGraphics.hLine(this.x, this.x + this.width - 1, this.y, lineColor);
    guiGraphics.hLine(this.x, this.x + this.width - 1, this.y + this.height - 1, lineColor);
    guiGraphics.vLine(this.x, this.y, this.y + this.height - 1, lineColor);
    guiGraphics.vLine(this.x + this.width - 1, this.y, this.y + this.height - 1, lineColor);
    matrixStack.popPose();

    const textX = this.x + 4;
    const textY = this.y + (this.height - this.font.lineHeight) / 2;
    const color = this.getColor();

    const drawText = (component) => {
      let iter = this.font.split(component, this.width - 8).iterator();
      if (iter.hasNext()) {
        let formattedcharsequence = iter.next();
        guiGraphics[
          'drawString(net.minecraft.client.gui.Font,net.minecraft.util.FormattedCharSequence,float,float,int,boolean)'
        ](this.font, formattedcharsequence, textX, textY, color, true);
      }
    };

    if (this.focused && Timer.getGlobalTick() % 20 < 10) {
      if (this.cursorIndex === this.text.length) {
        drawText(Text.literal(this.text).append(cursorPromptOuter));
      } else {
        let textBeforeCursor = this.text.substring(0, this.cursorIndex);
        let textAfterCursor = this.text.substring(this.cursorIndex);
        drawText(Text.literal(textBeforeCursor).append(cursorPromptInner).append(textAfterCursor));
      }
    } else {
      drawText(Text.literal(this.text));
    }
  };

  /**
   * @param {number} mouseX
   * @param {number} mouseY
   * @param {Internal.InputConstants$Key} input
   * @returns {boolean}
   */
  this.handleInput = (mouseX, mouseY, input) => {
    if (this.focused) {
      let value = input.getValue();
      switch (value) {
        case $InputConstants.KEY_ESCAPE:
          this.setFocused(false);
          return true;
        case $InputConstants.MOUSE_BUTTON_LEFT:
          if (!this.mouseIsOver(mouseX, mouseY)) {
            // 在范围外鼠标左击时失去焦点
            this.setFocused(false);
            return true;
          }
          break;
        case $InputConstants.KEY_RETURN:
        case $InputConstants.KEY_NUMPADENTER:
          if (this.filter(this.text)) {
            // 回车键确认输入
            this.setFocused(false);
            this.confirmCallback(this.text);
            return true;
          }
        case $InputConstants.KEY_BACKSPACE:
          if (this.cursorIndex > 0) {
            // 退格键删除左方字符
            this.text = this.text.substring(0, this.cursorIndex - 1) + this.text.substring(this.cursorIndex);
            this.cursorIndex--;
            if (this.filter(this.text)) {
              this.valueChangedCallback(this.text);
            }
          }
          // 始终返回 true，防止意外跳出当前页面
          return true;
        case $InputConstants.KEY_DELETE:
          if (this.cursorIndex < this.text.length) {
            // Delete键删除右方字符
            this.text = this.text.substring(0, this.cursorIndex) + this.text.substring(this.cursorIndex + 1);
            if (this.filter(this.text)) {
              this.valueChangedCallback(this.text);
            }
            return true;
          }
          break;
        case $InputConstants.KEY_LEFT:
          if (this.cursorIndex > 0) {
            // 左箭头键向左移动光标
            this.cursorIndex--;
            return true;
          }
          break;
        case $InputConstants.KEY_RIGHT:
          if (this.cursorIndex < this.text.length) {
            // 右箭头键向右移动光标
            this.cursorIndex++;
            return true;
          }
          break;
        case $InputConstants.KEY_UP:
          if (this.cursorIndex > 0) {
            // 上箭头键移动光标到行首
            this.cursorIndex = 0;
            return true;
          }
          break;
        case $InputConstants.KEY_DOWN:
          if (this.cursorIndex < this.text.length) {
            // 下箭头键移动光标到行尾
            this.cursorIndex = this.text.length;
            return true;
          }
          break;
        default:
          // 其他输入情况
          let insertValue = (value) => {
            let char = String.fromCharCode(value);
            this.text =
              this.text.substring(0, this.cursorIndex) + char + this.text.substring(this.cursorIndex);
            this.cursorIndex++;
            if (this.filter(this.text)) {
              this.valueChangedCallback(this.text);
            }
          };

          if (value >= 32 && value <= 126) {
            insertValue(value);
            return true;
          }

          if (value >= $InputConstants.KEY_NUMPAD0 && value <= $InputConstants.KEY_NUMPAD9) {
            insertValue(value - $InputConstants.KEY_NUMPAD0 + 48);
            return true;
          }

          if (value === $InputConstants.KEY_NUMPADCOMMA) {
            insertValue(46);
            return true;
          }
      }
    } else {
      // 当鼠标左击编辑框时获得焦点
      if (input.getValue() === $InputConstants.MOUSE_BUTTON_LEFT && this.mouseIsOver(mouseX, mouseY)) {
        this.setFocused(true);
        return true;
      }
    }
    return false;
  };

  /**
   * @param {boolean} focused
   */
  this.setFocused = (focused) => {
    this.focused = focused;
    if (focused) {
      this.cursorIndex = this.text.length;
    }
  };

  /**
   * @param {number} x
   */
  this.setX = (x) => {
    this.x = x;
  };

  /**
   * @param {number} y
   */
  this.setY = (y) => {
    this.y = y;
  };

  /**
   * @param {number} width
   */
  this.setWidth = (width) => {
    this.width = width;
  };

  /**
   * @param {number} height
   */
  this.setHeight = (height) => {
    this.height = height;
  };

  /**
   * @param {string} text
   */
  this.setText = (text) => {
    this.text = text;
    if (this.filter(this.text)) {
      this.valueChangedCallback(this.text);
    }
  };

  /**
   * @param {number} index
   */
  this.setCursorIndex = (index) => {
    this.cursorIndex = Math.max(0, Math.min(this.text.length, index));
  };

  /**
   * @param {function(string): boolean} filter
   */
  this.setFilter = (filter) => {
    this.filter = filter;
  };

  /**
   * @param {function(string): void} callback
   */
  this.setValueChangedCallback = (callback) => {
    this.valueChangedCallback = callback;
  };

  /**
   * @param {function(string): void} callback
   */
  this.setConfirmCallback = (callback) => {
    this.confirmCallback = callback;
  };

  this.getX = () => this.x;
  this.getY = () => this.y;
  this.getWidth = () => this.width;
  this.getHeight = () => this.height;
  this.getText = () => this.text;
  this.getFocused = () => this.focused;
  this.getCursorIndex = () => this.cursorIndex;
}
