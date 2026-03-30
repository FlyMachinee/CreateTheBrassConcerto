// priority: 4096

function MouseEventDriver() {
  this.minX = -Infinity;
  this.maxX = Infinity;
  this.minY = -Infinity;
  this.maxX = Infinity;

  /** @type {(function(number, number, number, number, number): boolean)[]} */
  this.dragCallbacks = [];

  /** @type {(function(number, number): boolean)[]} */
  this.moveCallbacks = [];

  /** @type {(function(number, number, number): boolean)[]} */
  this.clickCallbacks = [];

  /** @type {(function(number, number, number): boolean)[]} */
  this.releaseCallbacks = [];
  
  this.lastMouseIsDown = [false, false, false];
  this.lastMouseX = null;
  this.lastMouseY = null;
}

/** @type {number[]} */
MouseEventDriver.MOUSE_KEY = [
  $InputConstants.MOUSE_BUTTON_LEFT,
  $InputConstants.MOUSE_BUTTON_RIGHT,
  $InputConstants.MOUSE_BUTTON_MIDDLE,
];

/**
 * @param {number} minX
 * @param {number} maxX
 * @returns {MouseEventDriver}
 */
MouseEventDriver.prototype.setXRange = function (minX, maxX) {
  if (minX > maxX) {
    let temp = minX;
    minX = maxX;
    maxX = temp;
  }
  this.minX = minX;
  this.maxX = maxX;
  return this;
};

/**
 * @param {number} minY
 * @param {number} maxY
 * @returns {MouseEventDriver}
 */
MouseEventDriver.prototype.setYRange = function (minY, maxY) {
  if (minY > maxY) {
    let temp = minY;
    minY = maxY;
    maxY = temp;
  }
  this.minY = minY;
  this.maxY = maxY;
  return this;
};

/**
 * @param {function(number, number, number, number, number): boolean} callback 参数依次为：当前鼠标x y值，按下的鼠标按键，拖动的偏移x y值
 * @returns {MouseEventDriver}
 */
MouseEventDriver.prototype.addMouseDragCallback = function (callback) {
  this.dragCallbacks.push(callback);
  return this;
};

/**
 * @param {function(number, number): boolean} callback 参数依次为：当前鼠标x y值
 * @returns {MouseEventDriver}
 */
MouseEventDriver.prototype.addMouseMoveCallback = function (callback) {
  this.moveCallbacks.push(callback);
  return this;
};

/**
 * @param {function(number, number, number): boolean} callback 参数依次为：当前鼠标x y值，按下的鼠标按键
 * @returns {MouseEventDriver}
 */
MouseEventDriver.prototype.addMouseClickCallback = function (callback) {
  this.clickCallbacks.push(callback);
  return this;
};

/**
 * @param {function(number, number, number): boolean} callback 参数依次为：当前鼠标x y值，松开的鼠标按键
 * @returns {MouseEventDriver}
 */
MouseEventDriver.prototype.addMouseReleaseCallback = function (callback) {
  this.releaseCallbacks.push(callback);
  return this;
};

/**
 * 应该在 draw 回调中调用
 * @param {number} mouseX
 * @param {number} mouseY
 */
MouseEventDriver.prototype.drive = function (mouseX, mouseY) {
  if (mouseX < this.minX || mouseX >= this.maxX || mouseY < this.minX || mouseY >= this.maxX) {
    // 出界时，若先前有按下的按键，产生按键抬起事件
    this.lastMouseIsDown.forEach((isDown, index, arr) => {
      if (isDown) {
        for (let i = 0; i < this.releaseCallbacks.length; ++i)
          if (this.releaseCallbacks[i](mouseX, mouseY, MouseEventDriver.MOUSE_KEY[index])) break;

        arr[index] = false;
      }
    });
    return;
  }

  if (this.lastMouseX === null) this.lastMouseX = mouseX;
  if (this.lastMouseY === null) this.lastMouseY = mouseY;

  const moved = this.lastMouseX !== mouseX || this.lastMouseY !== mouseY;

  // 鼠标移动事件
  if (moved) {
    for (let i = 0; i < this.moveCallbacks.length; ++i)
      // 依次调用回调函数，直到某个回调消耗事件
      if (this.moveCallbacks[i](mouseX, mouseY)) break;
  }

  const dragX = mouseX - this.lastMouseX;
  const dragY = mouseY - this.lastMouseY;

  MouseEventDriver.MOUSE_KEY.forEach((key, index) => {
    let isDown = $AllKeys.isMouseButtonDown(key);

    if (isDown !== this.lastMouseIsDown[index]) {
      if (isDown) {
        // 鼠标按键按下
        for (let i = 0; i < this.clickCallbacks.length; ++i)
          if (this.clickCallbacks[i](mouseX, mouseY, key)) break;
      } else {
        // 鼠标按键抬起
        for (let i = 0; i < this.releaseCallbacks.length; ++i)
          if (this.releaseCallbacks[i](mouseX, mouseY, key)) break;
      }

      this.lastMouseIsDown[index] = isDown;
    } else {
      if (isDown && moved) {
        // 鼠标拖拽事件
        for (let i = 0; i < this.dragCallbacks.length; ++i)
          if (this.dragCallbacks[i](mouseX, mouseY, key, dragX, dragY)) break;
      }
    }
  });

  this.lastMouseX = mouseX;
  this.lastMouseY = mouseY;
};
