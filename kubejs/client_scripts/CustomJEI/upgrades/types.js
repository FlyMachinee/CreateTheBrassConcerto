// priority: 1536

/**
 * @param {number} requirement
 * @param {number} mode
 * @param {number} operation
 * @param {number} modifier
 */
function UpgradeModifier(requirement, mode, operation, modifier) {
  this.requirement = requirement;
  this.mode = mode;
  this.operation = operation;
  this.modifier = modifier;

  this.target = UpgradeModifier.TARGET.EMPTY;
  this.chance = 1;
  this.max = Number.POSITIVE_INFINITY;
  this.min = Number.NEGATIVE_INFINITY;
  this.tooltip = null;

  /**
   * @param {string} target
   */
  this.setTarget = (target) => {
    this.target = UpgradeModifier.TARGET[target.toUpperCase()];
  };
}

UpgradeModifier.REQUIREMENT = Object.freeze({
  BLOCK: 0,
  COMMAND: 1,
  DROP: 2,
  DURABILITY: 3,
  EFFECT: 4,
  ENERGY: 5,
  ENERGY_PER_TICK: 6,
  ENTITY: 7,
  FLUID: 8,
  FLUID_PER_TICK: 9,
  ITEM: 10,
  LIGHT: 11,
  LOOT_TABLE: 12,
  REDSTONE: 13,
  SPEED: 14,
  FUNCTION: 15,
  all: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  allToString: [
    'block',
    'command',
    'drop',
    'durability',
    'effect',
    'energy',
    'energy_per_tick',
    'entity',
    'fluid',
    'fluid_per_tick',
    'item',
    'light',
    'loot_table',
    'redstone',
    'speed',
    'function',
  ],
  toString: function (requirement) {
    return UpgradeModifier.REQUIREMENT.allToString[requirement] || 'unknown';
  },
});

UpgradeModifier.MODE = Object.freeze({
  INPUT: 0,
  OUTPUT: 1,
  all: [0, 1],
  allToString: ['input', 'output'],
  toString: function (mode) {
    return UpgradeModifier.MODE.allToString[mode] || 'unknown';
  },
});

UpgradeModifier.OPERATION = Object.freeze({
  ADDITION: 0,
  MULTIPLICATION: 1,
  EXPONENTIAL: 2,
  all: [0, 1, 2],
  allToString: ['addition', 'multiplication', 'exponential'],
  toString: function (operation) {
    return UpgradeModifier.OPERATION.allToString[operation] || 'unknown';
  },
});

UpgradeModifier.TARGET = Object.freeze({
  EMPTY: 0,
  CHANCE: 1,
  RADIUS: 2,
  TIME: 3,
  LEVEL: 4,
  LUCK: 5,
  POWER: 6,
  all: [0, 1, 2, 3, 4, 5, 6],
  allToString: ['empty', 'chance', 'radius', 'time', 'level', 'luck', 'power'],
  toString: function (target) {
    return UpgradeModifier.TARGET.allToString[target] || 'unknown';
  },
});

/**
 *
 * @param {string} pRequirement
 * @param {string} pMode
 * @param {string} pOperation
 * @param {number} pModifier
 * @returns {UpgradeModifier}
 */
UpgradeModifier.factory = (pRequirement, pMode, pOperation, pModifier) => {
  let requirement = UpgradeModifier.REQUIREMENT[pRequirement.toUpperCase()];
  let mode = UpgradeModifier.MODE[pMode.toUpperCase()];
  let operation = UpgradeModifier.OPERATION[pOperation.toUpperCase()];
  let modifier = parseFloat(pModifier);
  return new UpgradeModifier(requirement, mode, operation, modifier);
};

/**
 * @param {string} item
 * @param {string[]} machines
 * @param {UpgradeModifier[]} modifiers
 */
function MachineUpgrade(item, machines, modifiers) {
  this.item = item;
  this.machines = machines;
  this.modifiers = modifiers;

  this.max = 64;
  this.tooltip = {
    text: 'custommachinery.upgrade.tooltip',
    color: 'aqua',
  };
}

