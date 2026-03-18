// priority: 4096

/**
 * 枚举类，请使用 RequirementIOMode.xxx 来获取实例
 * @param {string} name
 */
function RequirementIOMode(name) {
  this.name = name;
}

/**
 * @return {string}
 */
RequirementIOMode.prototype.toString = function () {
  return this.name;
};

RequirementIOMode.INPUT = new RequirementIOMode('input');
RequirementIOMode.OUTPUT = new RequirementIOMode('output');

/**
 * @returns {RequirementIOMode[]}
 */
RequirementIOMode.values = function () {
  return [RequirementIOMode.INPUT, RequirementIOMode.OUTPUT];
};

/**
 * @param {string} str
 * @return {RequirementIOMode|null}
 */
RequirementIOMode.fromString = function (str) {
  return RequirementIOMode[str.toUpperCase()] || null;
};
