// priority: 1535

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

/** @type {MachineUpgrade[]} */
MachineUpgrade.__allUpgrades = [];

MachineUpgrade.getAll = function () {
  if (MachineUpgrade.__allUpgrades.length !== 0) {
    return MachineUpgrade.__allUpgrades;
  }

  const root = $FMLPaths.GAMEDIR.get();
  const upgradesDirectory = $FilePaths.get(root.toString(), 'kubejs/data/dut/upgrades');
  try {
    let paths = $Files.list(upgradesDirectory).toArray();

    /** @type {MachineUpgrade[]} */
    let res = [];

    paths.forEach((path) => {
      try {
        if (!$Files.isRegularFile(path) || !path.toString().endsWith('.json')) {
          return;
        }
        let jsonObj = JsonIO.readJson(path).getAsJsonObject();
        let item = jsonObj.get('item').getAsString();

        /** @type {string[]} */
        let machines = [];
        jsonObj
          .get('machines')
          .getAsJsonArray()
          .forEach((e) => {
            machines.push(e.getAsString());
          });

        /** @type {UpgradeModifier[]} */
        let modifiers = [];
        jsonObj
          .get('modifiers')
          .getAsJsonArray()
          .forEach((e) => {
            let modifierObj = e.getAsJsonObject();
            let requirement = modifierObj.get('requirement').getAsString().split(':')[1];
            let mode = modifierObj.get('mode').getAsString();
            let operation = modifierObj.get('operation').getAsString();
            let modifier = modifierObj.get('modifier').getAsDouble();
            let upgradeModifier = UpgradeModifier.factory(requirement, mode, operation, modifier);

            if (modifierObj.has('target')) {
              upgradeModifier.setTarget(modifierObj.get('target').getAsString());
            }
            if (modifierObj.has('chance')) {
              upgradeModifier.chance = modifierObj.get('chance').getAsDouble();
            }
            if (modifierObj.has('max')) {
              upgradeModifier.max = modifierObj.get('max').getAsLong();
            }
            if (modifierObj.has('min')) {
              upgradeModifier.min = modifierObj.get('min').getAsLong();
            }
            modifiers.push(upgradeModifier);
          });

        let machineUpgrade = new MachineUpgrade(item, machines, modifiers);

        if (jsonObj.has('max')) {
          machineUpgrade.max = jsonObj.get('max').getAsInt();
        }

        res.push(machineUpgrade);
      } catch (e) {
        console.error('读取模块升级数据出错: ' + e + '，位置：' + path.toString());
      }
    });

    res.sort((a, b) => a.item.localeCompare(b.item));
    MachineUpgrade.__allUpgrades = res;
    return res;
  } catch (e) {
    console.error('遍历模块升级数据出错: ' + e + '，位置：' + upgradesDirectory.toString());
  }
};

/**
 * @param {MachineUpgrade[]} upgrades
 * @return {{requirementType: RequirementType, mode: RequirementIOMode, target: string}[]}
 */
MachineUpgrade.getDistinctModifierTypes = function (upgrades) {
  /** @type {{requirementType: RequirementType, mode: RequirementIOMode, target: string}[]} */
  let res = [];
  upgrades.forEach((upgrade) => {
    upgrade.getModifierTypes().forEach((type) => {
      if (!res.some((t) => UpgradeModifier.modifierTypeEquals(t, type))) {
        res.push(type);
      }
    });
  });
  return res;
};

/**
 * @returns {{requirementType: RequirementType, mode: RequirementIOMode, target: string}[]}
 */
MachineUpgrade.prototype.getModifierTypes = function () {
  /** @type {{requirementType: RequirementType, mode: RequirementIOMode, target: string}[]} */
  let res = [];
  this.modifiers.forEach((modifier) => {
    res.push(modifier.getModifierType());
  });
  return res;
};
