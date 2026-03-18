// priority: 2040

/**
 * @param {RequirementIOMode} mode
 * @param {number} amount 整数，表示每tick需要的能量数量
 */
function EnergyPerTickRequirement(mode, amount) {
  AbstractChanceableRequirement.call(this, mode);
  this.amount = amount;
}

// 先设置原型链，再添加方法，避免方法被覆盖
inheritPrototype(EnergyPerTickRequirement, AbstractChanceableRequirement);

/**
 * @returns {RequirementType}
 */
EnergyPerTickRequirement.prototype.getType = function () {
  return RequirementType.ENERGY_PER_TICK;
};

/**
 * @param {CraftingContext} context
 * @returns {number} 整数，每tick需要的能量数量，经过各种modifier修改后的值
 */
EnergyPerTickRequirement.prototype.process = function (context) {
  return context.getPerTickIntegerModifiedValue(this.amount, this, null);
};

/**
 * @param {CraftingContext} context
 * @param {boolean} useVariable
 * @return {string[]}
 */
EnergyPerTickRequirement.prototype.processTrace = function (context, useVariable) {
  let functionList = [];
  let formulaList = [];
  context.getPerTickIntegerModifiedValueTrace(
    this.amount,
    this,
    null,
    functionList,
    formulaList,
    useVariable
  );
  return CraftingContext.mergeTrace(functionList, formulaList);
};

/**
 * @returns {string} 单位
 */
EnergyPerTickRequirement.prototype.getUnit = function () {
  return 'FE/t';
};
