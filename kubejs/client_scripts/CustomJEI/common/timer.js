// priority: 4096

// 状态常量（使用闭包隐藏）
const __STATE = {
  RUNNING: 0,
  PAUSED: 1,
  STOPPED: 2,
};

/**
 * 计时器构造函数
 * @constructor
 */
function Timer() {
  this._state = __STATE.STOPPED; // 当前状态
  this._accumulated = 0; // 已累计的流逝时间（刻）
  this._startTime = 0; // 当前运行段的开始时间（刻）
}

Timer.getGlobalTick = function () {
  return $AnimationTickHolder.getRenderTime();
}

/**
 * 启动计时器
 * - 若为停止状态，清零并开始计时
 * - 若为暂停状态，恢复计时（累计值保留）
 * - 若已在运行，无影响
 */
Timer.prototype.start = function () {
  const now = Timer.getGlobalTick();
  switch (this._state) {
    case __STATE.STOPPED:
      this._accumulated = 0;
    case __STATE.PAUSED:
      this._startTime = now;
      this._state = __STATE.RUNNING;
      break;
  }
};

/**
 * 停止计时器，冻结当前流逝时间
 */
Timer.prototype.stop = function () {
  const now = Timer.getGlobalTick();
  switch (this._state) {
    case __STATE.RUNNING:
      this._accumulated += now - this._startTime;
    case __STATE.PAUSED:
      this._state = __STATE.STOPPED;
      break;
  }
};

/**
 * 重置计时器为零，并进入停止状态
 */
Timer.prototype.reset = function () {
  this._accumulated = 0;
  this._state = __STATE.STOPPED;
};

/**
 * 暂停计时器，冻结当前流逝时间
 */
Timer.prototype.pause = function () {
  const now = Timer.getGlobalTick();
  if (this._state === __STATE.RUNNING) {
    this._accumulated += now - this._startTime;
    this._state = __STATE.PAUSED;
  }
};

/**
 * 恢复暂停的计时器（等价于从暂停状态调用 start）
 */
Timer.prototype.resume = function () {
  if (this._state === __STATE.PAUSED) {
    this.start();
  }
};

/**
 * 重新开始计时器，清零并开始计时（等价于先调用 reset 再调用 start）
 */
Timer.prototype.restart = function () {
  const now = Timer.getGlobalTick();
  this._accumulated = 0;
  this._startTime = now;
  this._state = __STATE.RUNNING;
}

/**
 * 获取当前流逝时间（刻）
 * @returns {number}
 */
Timer.prototype.getElapsedTicks = function () {
  const now = Timer.getGlobalTick();
  if (this._state === __STATE.RUNNING) {
    return this._accumulated + (now - this._startTime);
  } else {
    return this._accumulated;
  }
};

/**
 * 判断计时器是否正在运行（未暂停且未停止）
 * @returns {boolean}
 */
Timer.prototype.isRunning = function () {
  return this._state === __STATE.RUNNING;
};

/**
 * 判断计时器是否处于暂停状态
 * @returns {boolean}
 */
Timer.prototype.isPaused = function () {
  return this._state === __STATE.PAUSED;
};
