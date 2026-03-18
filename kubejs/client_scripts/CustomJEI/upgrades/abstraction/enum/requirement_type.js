// priority: 4096

/**
 * 枚举类，请使用 RequirementType.xxx 来获取实例
 * @param {string} name
 */
function RequirementType(name) {
  this.name = name;
}

/**
 * @return {string}
 */
RequirementType.prototype.toString = function () {
  return this.name;
};

RequirementType.SPEED = new RequirementType('speed');
RequirementType.ENERGY = new RequirementType('energy');
RequirementType.ENERGY_PER_TICK = new RequirementType('energy_per_tick');

/**
 * @return {RequirementType[]}
 */
RequirementType.values = function () {
  return [RequirementType.SPEED, RequirementType.ENERGY, RequirementType.ENERGY_PER_TICK];
};

/**
 * @param {string} str
 * @return {RequirementType|null}
 */
RequirementType.fromString = function (str) {
  return RequirementType[str.toUpperCase()] || null;
};
