// priority: 4096

/**
 * 枚举类，请使用 ModifierOperation.xxx 来获取实例
 * @param {string} name
 */
function ModifierOperation(name) {
  this.name = name;
}

/**
 * @return {string}
 */
ModifierOperation.prototype.toString = function () {
  return this.name;
};

ModifierOperation.ADDITION = new ModifierOperation('addition');
ModifierOperation.MULTIPLICATION = new ModifierOperation('multiplication');
ModifierOperation.EXPONENTIAL = new ModifierOperation('exponential');

/**
 * @return {ModifierOperation[]}
 */
ModifierOperation.values = function () {
  return [ModifierOperation.ADDITION, ModifierOperation.MULTIPLICATION, ModifierOperation.EXPONENTIAL];
};

/**
 * @param {string} str
 * @return {ModifierOperation|null}
 */
ModifierOperation.fromString = function (str) {
  return ModifierOperation[str.toUpperCase()] || null;
};
