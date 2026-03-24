// priority: 2040

function SpeedRequirement() {
  AbstractRequirement.call(this, RequirementIOMode.INPUT);
}

// 先设置原型链，再添加方法，避免方法被覆盖
inheritPrototype(SpeedRequirement, AbstractRequirement);

/**
 * @returns {RequirementType}
 */
SpeedRequirement.prototype.getType = function () {
  return RequirementType.SPEED;
};

/**
 * @param {CraftingContext} context
 * @returns {null}
 */
SpeedRequirement.prototype.process = function (context) {
  return null;
};

/**
 * @param {CraftingContext} context
 * @param {boolean} useVariable
 * @return {null}
 */
SpeedRequirement.prototype.processTrace = function (context, useVariable) {
  return null;
};

/**
 * @returns {string} 单位
 */
SpeedRequirement.prototype.getUnit = function () {
  return null;
};
