// priority: 1535

/**
 * @param {number} recipeTime 配方时间，应为整数
 * @param {AbstractRequirement[]} requirements
 */
function MachineRecipe(recipeTime, requirements) {
  this.recipeTime = recipeTime;

  /** @type {AbstractRequirement[]} */
  this.requirements = requirements;
}

/**
 * @returns {number} 配方时间，为整数
 */
MachineRecipe.prototype.getRecipeTime = function () {
  return this.recipeTime;
};

/**
 * @return {AbstractRequirement[]}
 */
MachineRecipe.prototype.getRequirements = function () {
  return this.requirements;
};
