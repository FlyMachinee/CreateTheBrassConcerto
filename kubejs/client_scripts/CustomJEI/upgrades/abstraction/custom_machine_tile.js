// priority: 1534

function CustomMachineTile() {
  /** @type {MachineUpgrade[]} */
  this.upgrades = [];
  /** @type {number[]} */
  this.upgradesCount = [];

  this.upgradeManager = new UpgradeManager(this);
}

/**
 * @returns {UpgradeManager}
 */
CustomMachineTile.prototype.getUpgradeManager = function () {
  return this.upgradeManager;
}

/**
 * @param {MachineUpgrade} upgrade
 * @param {number} count
 */
CustomMachineTile.prototype.addUpgrade = function (upgrade, count) {
  this.upgrades.push(upgrade);
  this.upgradesCount.push(count);
  this.upgradeManager.markDirty();
};

/**
 * @param {number} index
 * @param {MachineUpgrade} upgrade
 * @param {number} count
 */
CustomMachineTile.prototype.setUpgrade = function (index, upgrade, count) {
  if (this.upgrades[index] === upgrade && this.upgradesCount[index] === count) {
    return;
  }
  this.upgrades[index] = upgrade;
  this.upgradesCount[index] = count;
  this.upgradeManager.markDirty();
};

/**
 * @param {MachineUpgrade[]} upgrades
 * @param {number[]} upgradesCount
 */
CustomMachineTile.prototype.setAllUpgrades = function (upgrades, upgradesCount) {
  this.upgrades = upgrades;
  this.upgradesCount = upgradesCount;
  this.upgradeManager.markDirty();
};

/** @param {number} index */
CustomMachineTile.prototype.removeUpgrade = function (index) {
  this.upgrades.splice(index, 1);
  this.upgradesCount.splice(index, 1);
  this.upgradeManager.markDirty();
};

/** @return {{upgrades: MachineUpgrade[], upgradesCount: number[]}} */
CustomMachineTile.prototype.getUpgrades = function () {
  return {
    upgrades: this.upgrades,
    upgradesCount: this.upgradesCount,
  };
};
