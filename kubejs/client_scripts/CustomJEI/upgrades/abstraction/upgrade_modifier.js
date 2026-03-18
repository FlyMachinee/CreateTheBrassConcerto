// priority: 1536

/**
 * @param {RequirementType} requirementType
 * @param {RequirementIOMode} mode
 * @param {ModifierOperation} operation
 * @param {number} modifier
 */
function UpgradeModifier(requirementType, mode, operation, modifier) {
  this.requirementType = requirementType;
  this.mode = mode;
  this.operation = operation;
  this.modifier = modifier;

  this.target = '';
  this.chance = 1;
  this.max = Number.POSITIVE_INFINITY;
  this.min = Number.NEGATIVE_INFINITY;
  this.tooltip = null;
}

/**
 * @param {RequirementType} requirementType
 * @param {RequirementIOMode} mode
 * @param {string} target
 * @return {string}
 */
UpgradeModifier.toLocalizationKey = function (requirementType, mode, target) {
  let str = 'kubejs.jeiaddition.upgrade.modifier';
  switch (requirementType) {
    case RequirementType.SPEED:
      str += '.speed';
      break;
    default:
      str += `.${requirementType.toString()}.${mode.toString()}`;
      if (target !== null && target !== undefined && target !== '') {
        str += `.${target}`;
      }
  }
  return str;
};

/**
 *
 * @param {string} pRequirement
 * @param {string} pMode
 * @param {string} pOperation
 * @param {number} pModifier
 * @returns {UpgradeModifier}
 */
UpgradeModifier.factory = function (pRequirement, pMode, pOperation, pModifier) {
  let requirement = RequirementType[pRequirement.toUpperCase()];
  let mode = RequirementIOMode[pMode.toUpperCase()];
  let operation = ModifierOperation[pOperation.toUpperCase()];
  let modifier = parseFloat(pModifier);
  return new UpgradeModifier(requirement, mode, operation, modifier);
};

/**
 * @param {{requirementType: RequirementType, mode: RequirementIOMode, target: string}} t1
 * @param {{requirementType: RequirementType, mode: RequirementIOMode, target: string}} t2
 * @returns {boolean}
 */
UpgradeModifier.modifierTypeEquals = function (t1, t2) {
  if (t1.requirementType !== t2.requirementType) {
    return false;
  }

  switch (t1.requirementType) {
    case RequirementType.SPEED:
      return (
        t1.target === t2.target ||
        (t1.target.length === 0 && (t2.target === null || t2.target === undefined)) ||
        (t2.target.length === 0 && (t1.target === null || t1.target === undefined))
      );
    default:
      return (
        t1.mode === t2.mode &&
        ((t1.target.length === 0 && (t2.target === null || t2.target === undefined)) ||
          (t2.target.length === 0 && (t1.target === null || t1.target === undefined)) ||
          t1.target === t2.target)
      );
  }
};

/** @param {string} target */
UpgradeModifier.prototype.setTarget = function (target) {
  this.target = target;
};

/** @returns {string} */
UpgradeModifier.prototype.toLocalizationKey = function () {
  return UpgradeModifier.toLocalizationKey(this.requirementType, this.mode, this.target);
};

/** @returns {{requirementType: RequirementType, mode: RequirementIOMode, target: string}} */
UpgradeModifier.prototype.getModifierType = function () {
  return {
    requirementType: this.requirementType,
    mode: this.mode,
    target: this.target,
  };
};

/**
 * @param {RequirementType} type
 * @param {RequirementIOMode} mode
 * @param {string} target
 * @returns {boolean}
 */
UpgradeModifier.prototype.shouldApply = function (type, mode, target) {
  switch (this.requirementType) {
    case RequirementType.SPEED:
      return (
        type === this.requirementType &&
        (this.target.length === 0 || target === this.target) &&
        Math.random() < this.chance
      );
    default:
      return (
        type === this.requirementType &&
        mode === this.mode &&
        ((this.target.length === 0 && (target === null || target === undefined)) || target === this.target) &&
        Math.random() < this.chance
      );
  }
};

/**
 * @param {number} original
 * @param {number} current
 * @param {number} upgradeAmount
 * @return {number}
 */
UpgradeModifier.prototype.apply = function (original, current, upgradeAmount) {
  switch (this.operation) {
    case ModifierOperation.ADDITION:
      return clamp(current + this.modifier * upgradeAmount, this.min, this.max);
    case ModifierOperation.MULTIPLICATION:
      return clamp(current + original * (this.modifier - 1) * upgradeAmount, this.min, this.max);
    case ModifierOperation.EXPONENTIAL:
      return clamp(current * Math.pow(this.modifier, upgradeAmount), this.min, this.max);
  }
};

/**
 * @param {number} original
 * @param {number} upgradeAmount
 * @param {string[]} functionList 上下界函数的应用字符串列表，反向，初始情况应为 []
 * @param {string[]} formulaList 公式的应用字符串列表，正向，初始情况下应为 [original.toString()]
 */
UpgradeModifier.prototype.makeApplyTrace = function (original, upgradeAmount, functionList, formulaList) {
  let calcAppendStr;
  switch (this.operation) {
    case ModifierOperation.ADDITION:
      calcAppendStr = ` + ${this.modifier} * ${upgradeAmount}`;
      break;
    case ModifierOperation.MULTIPLICATION:
      calcAppendStr = ` + ${original} * (${this.modifier} - 1) * ${upgradeAmount}`;
      break;
    case ModifierOperation.EXPONENTIAL:
      calcAppendStr = ` * ${this.modifier} ^ ${upgradeAmount}`;
      break;
  }
  switch ((isFinite(this.min) << 1) | isFinite(this.max)) {
    case 0b00:
      functionList.push('(');
      formulaList[formulaList.length - 1] += calcAppendStr;
      break;
    case 0b01:
      functionList.push(`min(${this.max},`);
      formulaList[formulaList.length - 1] += `${calcAppendStr}`;
      break;
    case 0b10:
      functionList.push(`max(${this.min},`);
      formulaList[formulaList.length - 1] += `${calcAppendStr}`;
      break;
    case 0b11:
      functionList.push('clamp(');
      formulaList[formulaList.length - 1] += `${calcAppendStr}, ${this.min}, ${this.max}`;
      break;
  }
  formulaList.push(')');
};

/**
 * @param {number} index
 * @param {string[]} functionList 上下界函数的应用字符串列表，反向，初始情况应为 []
 * @param {string[]} formulaList 公式的应用字符串列表，正向，初始情况下应为 ['original']
 */
UpgradeModifier.prototype.makeApplyFormulaTrace = function (index, functionList, formulaList) {
  let calcAppendStr;
  switch (this.operation) {
    case ModifierOperation.ADDITION:
      calcAppendStr = ` + [${index}}].modifier * [${index}].upgradeAmount`;
      break;
    case ModifierOperation.MULTIPLICATION:
      calcAppendStr = ` + original * ([${index}].modifier - 1) * [${index}].upgradeAmount`;
      break;
    case ModifierOperation.EXPONENTIAL:
      calcAppendStr = ` * [${index}].modifier ^ [${index}].upgradeAmount`;
      break;
  }
  switch ((isFinite(this.min) << 1) | isFinite(this.max)) {
    case 0b00:
      functionList.push('(');
      formulaList[formulaList.length - 1] += calcAppendStr;
      break;
    case 0b01:
      functionList.push(`min([${index}].max,`);
      formulaList[formulaList.length - 1] += calcAppendStr;
      break;
    case 0b10:
      functionList.push(`max([${index}].min,`);
      formulaList[formulaList.length - 1] += calcAppendStr;
      break;
    case 0b11:
      functionList.push('clamp(');
      formulaList[formulaList.length - 1] += `${calcAppendStr}, [${index}].min, [${index}].max`;
      break;
  }
  formulaList.push(')');
};
