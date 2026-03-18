// priority: 2046

/**
 * 抽象类，请勿实例化该类
 * @abstract
 * @param {RequirementIOMode} mode
 */
function AbstractChanceableRequirement(mode) {
  AbstractRequirement.call(this, mode);
  this.chance = 1.0;
}

// 先设置原型链，再添加方法，避免方法被覆盖
inheritPrototype(AbstractChanceableRequirement, AbstractRequirement);

/**
 * @returns {number}
 */
AbstractChanceableRequirement.prototype.getChance = function () {
  return this.chance;
};

/**
 * @param {number} chance
 */
AbstractChanceableRequirement.prototype.setChance = function (chance) {
  this.chance = clamp(chance, 0, 1);
};

/**
 * @param {CraftingContext} context
 */
AbstractChanceableRequirement.prototype.shouldSkip = function (context) {
  const chance = context.getModifiedValue(this.chance, this, 'chance');
  return chance < Math.random();
};
