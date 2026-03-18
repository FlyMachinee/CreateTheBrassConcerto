// priority: 1533

/**
 * @param {UpgradeManager} upgradeManager
 * @param {MachineRecipe} recipe
 */
function CraftingContext(upgradeManager, recipe) {
  this.upgradeManager = upgradeManager;
  this.recipe = recipe;
  this.baseSpeed = 1;
}

/**
 * @return {CustomMachineTile}
 */
CraftingContext.prototype.getMachineTile = function () {
  return this.upgradeManager.tile;
};

/**
 * @returns {MachineRecipe}
 */
CraftingContext.prototype.getRecipe = function () {
  return this.recipe;
};

/**
 * @param {MachineRecipe} recipe
 */
CraftingContext.prototype.setRecipe = function (recipe) {
  this.recipe = recipe;
};

/**
 * @return {number}
 */
CraftingContext.prototype.getBaseSpeed = function () {
  return this.baseSpeed;
};

/**
 * @param {number} baseSpeed
 */
CraftingContext.prototype.setBaseSpeed = function (baseSpeed) {
  this.baseSpeed = baseSpeed;
};

/**
 * @return {number}
 */
CraftingContext.prototype.getModifiedSpeed = function () {
  if (this.recipe === null) {
    return this.getBaseSpeed();
  }
  const baseTime = this.recipe.getRecipeTime();
  const modifiedTime = this.getModifiedValueInternal(baseTime, RequirementType.SPEED, null, null);
  const speed = (baseTime * this.baseSpeed) / modifiedTime;
  return Math.max(0.01, speed);
};

/**
 * @return {number}
 */
CraftingContext.prototype.getModifiedRecipeTime = function () {
  if (this.recipe === null) {
    return null;
  }
  const baseTime = this.recipe.getRecipeTime();
  const modifiedTime = this.getModifiedValueInternal(baseTime, RequirementType.SPEED, null, null);
  return Math.ceil(modifiedTime);
};

/**
 * @param {number} base
 * @param {AbstractRequirement} requirement
 * @param {string} target
 * @return {number}
 */
CraftingContext.prototype.getIntegerModifiedValue = function (base, requirement, target) {
  return Math.round(this.getModifiedValue(base, requirement, target));
};

/**
 * @param {number} base
 * @param {AbstractRequirement} requirement
 * @param {string} target
 * @returns {number}
 */
CraftingContext.prototype.getPerTickIntegerModifiedValue = function (base, requirement, target) {
  return Math.round(this.getPerTickModifiedValue(base, requirement, target));
};

/**
 * @param {number} base
 * @param {AbstractRequirement} requirement
 * @param {string} target
 * @return {number}
 */
CraftingContext.prototype.getModifiedValue = function (base, requirement, target) {
  return this.getModifiedValueInternal(base, requirement.getType(), target, requirement.getMode());
};

/**
 * @param {number} base
 * @param {AbstractRequirement} requirement
 * @param {string} target
 * @return {number}
 */
CraftingContext.prototype.getPerTickModifiedValue = function (base, requirement, target) {
  return this.getModifiedValue(base, requirement, target) * this.getModifiedSpeed();
};

/**
 * @param {number} base
 * @param {RequirementType} type
 * @param {string} target
 * @param {RequirementIOMode} mode
 * @return {number}
 */
CraftingContext.prototype.getModifiedValueInternal = function (base, type, target, mode) {
  let modified = base;
  const modifiersInfo = this.upgradeManager.getAllModifiers();
  modifiersInfo.modifiers.forEach((modifier, index) => {
    const modifierCount = modifiersInfo.modifiersCount[index];
    if (modifier.shouldApply(type, mode, target)) {
      modified = modifier.apply(base, modified, modifierCount);
    }
  });
  return modified;
};

/**
 * @param {string[]} functionList
 * @param {string[]} formulaList
 * @return {string[]}
 */
CraftingContext.mergeTrace = function (functionList, formulaList) {
  let ret = [];
  let indent = 0;
  for (let i = functionList.length - 1; i >= 0; i--) {
    ret.push('  '.repeat(indent) + functionList[i]);
    indent++;
  }
  for (let i = 0; i < formulaList.length; i++) {
    ret.push('  '.repeat(indent) + formulaList[i]);
    indent--;
  }
  return ret;
};

/**
 * @param {boolean} useVariable
 * @return {string[]}
 */
CraftingContext.prototype.getModifiedSpeedTrace = function (useVariable) {
  if (this.recipe === null) {
    return;
  }
  const baseTime = this.recipe.getRecipeTime();
  let functionList = [];
  let formulaList = [];
  this.getModifiedValueInternalTrace(
    baseTime,
    RequirementType.SPEED,
    null,
    null,
    functionList,
    formulaList,
    useVariable
  );
  if (useVariable) {
    functionList.push('original * baseSpeed / (      # original = recipeTime');
  } else {
    functionList.push(`${this.recipe.getRecipeTime()} * ${this.baseSpeed} / (`);
  }
  functionList.push('max(0.01,');
  formulaList.push(')');
  formulaList.push(')');
  return CraftingContext.mergeTrace(functionList, formulaList);
};

/**
 * @param {boolean} useVariable
 * @return {string[]}
 */
CraftingContext.prototype.getModifiedRecipeTimeTrace = function (useVariable) {
  if (this.recipe === null) {
    return;
  }
  let functionList = [];
  let formulaList = [];
  const baseTime = this.recipe.getRecipeTime();
  this.getModifiedValueInternalTrace(
    baseTime,
    RequirementType.SPEED,
    null,
    null,
    functionList,
    formulaList,
    useVariable
  );
  functionList.push('ceil(');
  formulaList.push(')');
  return CraftingContext.mergeTrace(functionList, formulaList);
};

/**
 * @param {number} base
 * @param {AbstractRequirement} requirement
 * @param {string} target
 * @param {string[]} functionList []
 * @param {string[]} formulaList []
 * @param {boolean} useVariable
 */
CraftingContext.prototype.getIntegerModifiedValueTrace = function (
  base,
  requirement,
  target,
  functionList,
  formulaList,
  useVariable
) {
  this.getModifiedValueTrace(base, requirement, target, functionList, formulaList, useVariable);
  functionList.push('round(');
  formulaList.push(')');
};

/**
 * @param {number} base
 * @param {AbstractRequirement} requirement
 * @param {string} target
 * @param {string[]} functionList []
 * @param {string[]} formulaList []
 * @param {boolean} useVariable
 */
CraftingContext.prototype.getPerTickIntegerModifiedValueTrace = function (
  base,
  requirement,
  target,
  functionList,
  formulaList,
  useVariable
) {
  this.getPerTickModifiedValueTrace(base, requirement, target, functionList, formulaList, useVariable);
  functionList.push('round(');
  formulaList.push(')');
};

/**
 * @param {number} base
 * @param {AbstractRequirement} requirement
 * @param {string} target
 * @param {string[]} functionList []
 * @param {string[]} formulaList []
 * @param {boolean} useVariable
 */
CraftingContext.prototype.getModifiedValueTrace = function (
  base,
  requirement,
  target,
  functionList,
  formulaList,
  useVariable
) {
  this.getModifiedValueInternalTrace(
    base,
    requirement.getType(),
    target,
    requirement.getMode(),
    functionList,
    formulaList,
    useVariable
  );
};

/**
 * @param {number} base
 * @param {AbstractRequirement} requirement
 * @param {string} target
 * @param {string[]} functionList []
 * @param {string[]} formulaList []
 * @param {boolean} useVariable
 */
CraftingContext.prototype.getPerTickModifiedValueTrace = function (
  base,
  requirement,
  target,
  functionList,
  formulaList,
  useVariable
) {
  this.getModifiedValueTrace(base, requirement, target, functionList, formulaList, useVariable);
  if (useVariable) {
    formulaList[formulaList.length - 1] = ` * modifiedSpeed`;
  } else {
    formulaList[formulaList.length - 1] += ` * ${this.getModifiedSpeed()}`;
  }
};

/**
 * @param {number} base
 * @param {RequirementType} type
 * @param {string} target
 * @param {RequirementIOMode} mode
 * @param {string[]} functionList []
 * @param {string[]} formulaList []
 * @param {boolean} useVariable
 */
CraftingContext.prototype.getModifiedValueInternalTrace = function (
  base,
  type,
  target,
  mode,
  functionList,
  formulaList,
  useVariable
) {
  if (useVariable) {
    formulaList.push('original');
  } else {
    formulaList.push(base.toString());
  }
  const modifiersInfo = this.upgradeManager.getAllModifiers();
  modifiersInfo.modifiers.forEach((modifier, index) => {
    const modifierCount = modifiersInfo.modifiersCount[index];
    if (modifier.shouldApply(type, mode, target)) {
      if (useVariable) {
        let upgradeIndex = modifiersInfo.modifierUpgradeIndex[index];
        modifier.makeApplyFormulaTrace(upgradeIndex, functionList, formulaList);
      } else {
        modifier.makeApplyTrace(base, modifierCount, functionList, formulaList);
      }
    }
  });
};
