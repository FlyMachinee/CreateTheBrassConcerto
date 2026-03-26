// priority: 4096

/**
 * 一个可点击的按钮，点击时会调用回调函数
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {net.minecraft.network.chat.Component} text
 */
function ClickButton(x, y, width, height, text) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.text = text;
  this.playSound = true;

  /**
   * @param {Internal.CustomJSRecipe} recipe 当前配方对象
   * @param {number} key 鼠标按键 0=左 1=右 2=中
   * @returns {boolean} 返回值为 true 则表示点击事件被处理
   */
  this.onClickCallback = (recipe, key) => true;

  /**
   * @param {Internal.CustomJSRecipe} recipe 当前配方对象
   * @return {boolean} 返回值为 true 则表示按钮可用
   * @note 默认情况下按钮始终可用，若按钮不可用，则点击事件不会被触发
   */
  this.enableCallback = (recipe) => true;

  /**
   * @param {Internal.ITooltipBuilder} tooltip 当前 tooltip 创建对象
   * @param {Internal.CustomJSRecipe} recipe 当前配方对象
   * @param {boolean} enable 当前按钮是否可用
   */
  this.tooltipCallback = (tooltip, recipe, enable) => {};
}

/**
 * 判断鼠标是否在按钮上
 * @param {number} mouseX
 * @param {number} mouseY
 * @return {boolean}
 */
ClickButton.prototype.mouseIsOver = function (mouseX, mouseY) {
  return (
    mouseX >= this.x && mouseX < this.x + this.width && mouseY >= this.y && mouseY < this.y + this.height
  );
};

/**
 * 设置点击回调函数，返回值为 true 则表示点击事件被处理
 *
 * 0=左 1=右 2=中
 * @param {function(Internal.CustomJSRecipe, number): boolean} callback
 * @return {ClickButton}
 */
ClickButton.prototype.onClick = function (callback) {
  this.onClickCallback = callback;
  return this;
};

/**
 * 设置按钮是否可用的回调函数，返回值为 true 则表示按钮可用
 * @param {function(Internal.CustomJSRecipe): boolean} callback
 * @return {ClickButton}
 */
ClickButton.prototype.setEnableCallback = function (callback) {
  this.enableCallback = callback;
  return this;
};

/**
 * 设置 tooltip 回调函数
 * @param {function(Internal.ITooltipBuilder, Internal.CustomJSRecipe, boolean): void} callback
 * @return {ClickButton}
 */
ClickButton.prototype.setTooltipCallback = function (callback) {
  this.tooltipCallback = callback;
  return this;
};

/**
 * 设置成功点击时是否播放声音，默认为 true
 * @param {boolean} playSound
 * @return {ClickButton}
 */
ClickButton.prototype.setPlaySound = function (playSound) {
  this.playSound = playSound;
  return this;
};

/**
 * 渲染按钮
 * @param {Internal.CustomJSRecipe} recipe
 * @param {Internal.GuiGraphics} guiGraphics
 * @param {number} mouseX
 * @param {number} mouseY
 */
ClickButton.prototype.draw = function (recipe, guiGraphics, mouseX, mouseY) {
  // 渲染按钮
  $Internal
    .getTextures()
    .getButtonForState(false, this.enableCallback(recipe), this.mouseIsOver(mouseX, mouseY)) // pressed, enabled, hovered
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
ClickButton.prototype.handleInput = function (recipe, mouseX, mouseY, input) {
  // 鼠标是否在按钮上
  if (!this.mouseIsOver(mouseX, mouseY)) {
    return false;
  }

  // 处理鼠标左右中键点击
  let key;
  switch (input.getValue()) {
    case $InputConstants.MOUSE_BUTTON_LEFT:
      key = 0;
      break;
    case $InputConstants.MOUSE_BUTTON_RIGHT:
      key = 1;
      break;
    case $InputConstants.MOUSE_BUTTON_MIDDLE:
      key = 2;
      break;
    default:
      return false;
  }

  // 按钮是否可用
  if (!this.enableCallback(recipe)) {
    return false;
  }

  // 执行点击回调
  if (this.onClickCallback(recipe, key)) {
    if (this.playSound) {
      Client.getSoundManager().play(
        $SimpleSoundInstance.forUI($SoundEvents.UI_BUTTON_CLICK.value(), 1.0, 0.25)
      );
    }
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
ClickButton.prototype.handleTooltip = function (tooltip, recipe, mouseX, mouseY) {
  if (this.mouseIsOver(mouseX, mouseY)) {
    this.tooltipCallback(tooltip, recipe, this.enableCallback(recipe));
  }
};
