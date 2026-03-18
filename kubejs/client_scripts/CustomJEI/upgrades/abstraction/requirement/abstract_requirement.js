// priority: 2047

/**
 * 抽象类，请勿实例化该类
 * @abstract
 * @param {RequirementIOMode} mode
 */
function AbstractRequirement(mode) {
  this.mode = mode;
}

/**
 * @returns {RequirementIOMode}
 */
AbstractRequirement.prototype.getMode = function () {
  return this.mode;
};

/**
 * 需要在子类中实现该方法
 * @virtual
 * @returns {RequirementType}
 */
AbstractRequirement.prototype.getType = function () {
  throw new Error('Method getType() must be implemented in subclass');
};

/**
 * 需要在子类中实现该方法
 * @param {CraftingContext} context
 * @param {boolean} useVariable
 * @return {string[]}
 */
AbstractRequirement.prototype.processTrace = function (context, useVariable) {
  throw new Error('Method processTrace() must be implemented in subclass');
};

/**
 * 需要在子类中实现该方法
 * @virtual
 * @returns {string} 单位
 */
AbstractRequirement.prototype.getUnit = function () {
  throw new Error('Method getUnit() must be implemented in subclass');
};
