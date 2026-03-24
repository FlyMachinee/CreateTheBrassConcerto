// priority: 2048

/** @type {Map<string, number>} */
const machineUpgradeSlotCount = new Map();

{
  let root = $FMLPaths.GAMEDIR.get();
  let upgradesDirectory = $FilePaths.get(root.toString(), 'kubejs/data/dut/machines');
  try {
    let paths = $Files.list(upgradesDirectory).toArray();

    paths.forEach((path) => {
      try {
        if (!$Files.isRegularFile(path) || !path.toString().endsWith('.json')) {
          return;
        }
        let jsonObj = JsonIO.readJson(path).getAsJsonObject();
        let name = jsonObj.get('name').getAsString();
        let components = jsonObj.get('components').getAsJsonArray();
        let count = 0;
        components.forEach((component) => {
          let componentObj = component.getAsJsonObject();
          if (
            componentObj.has('type') &&
            componentObj.get('type').getAsString() === 'custommachinery:item' &&
            componentObj.has('variant') &&
            componentObj.get('variant').getAsString() === 'custommachinery:upgrade'
          ) {
            count++;
          }
        });
        let machineName = name.slice(1 + name.lastIndexOf('.'));
        machineUpgradeSlotCount.set(machineName, count);
      } catch (e) {
        console.error('读取机器数据出错: ' + e + '，位置：' + path.toString());
      }
    });
  } catch (e) {
    console.error('遍历机器数据出错: ' + e + '，位置：' + upgradesDirectory.toString());
  }
}
