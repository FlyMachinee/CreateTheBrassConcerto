// priority: 4096

/**
 * 一个可切换按下与否状态的按钮，状态切换时会调用回调函数
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {net.minecraft.network.chat.Component} text
 */
function ToggleButton(x, y, width, height, text) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.text = text;
  this.playSound = true;
  this.pressed = false;

  /**
   * @param {Internal.CustomJSRecipe} recipe 当前配方对象
   * @param {boolean} currentState 当前按钮状态（按下或未按下）
   * @returns {boolean} 返回值为 true 则表示点击事件被处理
   */
  this.onClickCallback = (recipe, currentState) => true;

  /**
   * @param {Internal.CustomJSRecipe} recipe 当前配方对象
   * @param {boolean} currentState 当前按钮状态（按下或未按下）
   * @return {boolean} 返回值为 true 则表示按钮可用
   * @note 默认情况下按钮始终可用，若按钮不可用，则点击事件不会被触发
   */
  this.enableCallback = (recipe, currentState) => true;

  /**
   * @param {Internal.ITooltipBuilder} tooltip 当前 tooltip 创建对象
   * @param {Internal.CustomJSRecipe} recipe 当前配方对象
   * @param {boolean} currentState 当前按钮状态（按下或未按下）
   * @param {boolean} enable 当前按钮是否可用
   */
  this.tooltipCallback = (tooltip, recipe, currentState, enable) => {};
}

/**
 * 判断鼠标是否在按钮上
 * @param {number} mouseX
 * @param {number} mouseY
 * @return {boolean}
 */
ToggleButton.prototype.mouseIsOver = function (mouseX, mouseY) {
  return (
    mouseX >= this.x && mouseX < this.x + this.width && mouseY >= this.y && mouseY < this.y + this.height
  );
};

/**
 * 设置点击回调函数，返回值为 true 则表示点击事件被处理
 * @param {function(Internal.CustomJSRecipe, boolean): boolean} callback
 * @return {ToggleButton}
 */
ToggleButton.prototype.onClick = function (callback) {
  this.onClickCallback = callback;
  return this;
};

/**
 * 设置按钮是否可用的回调函数，返回值为 true 则表示按钮可用
 * @param {function(Internal.CustomJSRecipe, boolean): boolean} callback
 * @return {ToggleButton}
 */
ToggleButton.prototype.setEnableCallback = function (callback) {
  this.enableCallback = callback;
  return this;
};

/**
 * 设置 tooltip 回调函数
 * @param {function(Internal.ITooltipBuilder, Internal.CustomJSRecipe, boolean, boolean): void} callback
 * @return {ToggleButton}
 */
ToggleButton.prototype.setTooltipCallback = function (callback) {
  this.tooltipCallback = callback;
  return this;
};

/**
 * 设置成功点击时是否播放声音，默认为 true
 * @param {boolean} playSound
 * @return {ToggleButton}
 */
ToggleButton.prototype.setPlaySound = function (playSound) {
  this.playSound = playSound;
  return this;
};

/**
 * 获取当前按钮状态
 * @return {boolean} 返回值为 true 则表示按钮处于按下状态
 */
ToggleButton.prototype.getState = function () {
  return this.pressed;
};

/**
 * 设置当前按钮状态
 * @param {boolean} pressed true 则表示按钮将设为按下状态
 * @return {ToggleButton}
 */
ToggleButton.prototype.setState = function (pressed) {
  this.pressed = pressed;
  return this;
};

/**
 * 渲染按钮
 * @param {Internal.CustomJSRecipe} recipe
 * @param {Internal.GuiGraphics} guiGraphics
 * @param {number} mouseX
 * @param {number} mouseY
 */
ToggleButton.prototype.draw = function (recipe, guiGraphics, mouseX, mouseY) {
  // 渲染按钮
  $Internal
    .getTextures()
    .getButtonForState(
      this.pressed,
      this.enableCallback(recipe, this.pressed),
      this.mouseIsOver(mouseX, mouseY)
    ) // pressed, enabled, hovered
    .draw(guiGraphics, this.x, this.y, this.width, this.height);

  // 按钮文本
  drawCenteredString(
    guiGraphics,
    Client.font,
    this.text,
    this.x + this.width / 2,
    this.y + this.height / 2 - Client.font.lineHeight / 2,
    0xffffff,
    true
  );
};

/**
 * 处理输入事件，返回值为 true 则表示事件被处理
 * @param {Internal.CustomJSRecipe} recipe
 * @param {number} mouseX
 * @param {number} mouseY
 * @param {Internal.InputConstants$Key} input
 * @return {boolean}
 */
ToggleButton.prototype.handleInput = function (recipe, mouseX, mouseY, input) {
  // 鼠标是否在按钮上
  if (!this.mouseIsOver(mouseX, mouseY)) {
    return false;
  }

  // 仅处理鼠标左键点击
  if (input !== $InputConstants.Type.MOUSE.getOrCreate(0)) {
    return false;
  }

  // 按钮是否可用
  if (!this.enableCallback(recipe, this.pressed)) {
    return false;
  }

  // 执行点击回调
  if (this.onClickCallback(recipe, this.pressed)) {
    if (this.playSound) {
      Client.getSoundManager().play(
        $SimpleSoundInstance.forUI($SoundEvents.UI_BUTTON_CLICK.value(), 1.0, 0.25)
      );
    }
    this.pressed = !this.pressed;
    return true;
  }
  return false;
};

/**
 * 处理 tooltip 显示
 * @param {Internal.ITooltipBuilder} tooltip
 * @param {Internal.CustomJSRecipe} recipe
 * @param {number} mouseX
 * @param {number} mouseY
 */
ToggleButton.prototype.handleTooltip = function (tooltip, recipe, mouseX, mouseY) {
  if (this.mouseIsOver(mouseX, mouseY)) {
    this.tooltipCallback(tooltip, recipe, this.pressed, this.enableCallback(recipe, this.pressed));
  }
};
