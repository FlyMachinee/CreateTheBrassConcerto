// priority: 1534

/**
 * @param {CustomMachineTile} tile
 */
function UpgradeManager(tile) {
  /** @type {CustomMachineTile} */
  this.tile = tile;

  /** @type {UpgradeModifier[]} */
  this.activeModifiers = [];
  /** @type {number[]} */
  this.activeModifiersCount = [];
  /**
   * @type {number}
   * 该 modifier 所属 upgrade 在 tile 上的 index
   */
  this.activeModifierUpgradeIndex = [];
  /** @type {boolean} */
  this.isDirty = true;
}

UpgradeManager.prototype.markDirty = function () {
  this.isDirty = true;
};

UpgradeManager.prototype.refreshUpgrades = function () {
  this.isDirty = false;
  this.activeModifiers = [];
  this.activeModifiersCount = [];
  this.activeModifierUpgradeIndex = [];
  const upgradesInfo = this.tile.getUpgrades();
  upgradesInfo.upgrades.forEach((upgrade, index) => {
    const count = upgradesInfo.upgradesCount[index];
    upgrade.modifiers.forEach((modifier) => {
      this.activeModifiers.push(modifier);
      this.activeModifiersCount.push(Math.min(count, upgrade.max));
      this.activeModifierUpgradeIndex.push(index);
    });
  });
};

UpgradeManager.prototype.getAllModifiers = function () {
  if (this.isDirty) {
    this.refreshUpgrades();
  }
  return {
    modifiers: this.activeModifiers,
    modifiersCount: this.activeModifiersCount,
    modifierUpgradeIndex: this.activeModifierUpgradeIndex,
  };
};
