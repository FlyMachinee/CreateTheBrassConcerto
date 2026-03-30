// priority: 3072

function SchematicStructure() {
  /** @type {Vec3i} */
  this._size = null;

  /** @type {StructureBlockInfo[][][]} */
  this._blocksTensor = null; // y -> x -> z

  /** @type {StructureBlockInfo[]} */
  this._blocksList = null;

  this._isLoad = false;
}

SchematicStructure.blockGetter = Client.level.holderLookup($Registries.BLOCK);

SchematicStructure.prototype.isLoad = function () {
  return this._isLoad;
};

SchematicStructure.prototype.getSize = function () {
  return this._size;
};

SchematicStructure.prototype.reset = function () {
  this._size = null;
  this._blocksTensor = null;
  this._blocksList = null;
  this._isLoad = false;
};

/**
 * @param {string} pathToRoot
 */
SchematicStructure.prototype.loadFromFile = function (pathToRoot) {
  let root = $FMLPaths.GAMEDIR.get();
  let schematicFile = $FilePaths.get(root, pathToRoot).normalize();
  let stream = new $DataInputStream(
    new $BufferedInputStream(
      new $GZIPInputStream($Files.newInputStream(schematicFile, $StandardOpenOption.READ))
    )
  );
  /** @type {Internal.CompoundTag} */
  let nbt = $NbtIo.read(stream, new $NbtAccounter(0x20000000));

  let sizeList = nbt.getList('size', 3);
  this._size = new Vec3i(sizeList.getInt(0), sizeList.getInt(1), sizeList.getInt(2));
  // y x z
  this._blocksTensor = new Array(this._size.y)
    .fill(0)
    .map((_) => new Array(this._size.x).fill(0).map((_) => new Array(this._size.z)));
  this._blocksList = [];

  let blocksList = nbt.getList('blocks', 10);
  if (nbt.contains('palettes', 9)) {
    let palettesList = nbt.getList('palettes', 9);

    for (let i = 0; i < palettesList.size(); ++i) {
      this._loadPalette(palettesList.getList(i), blocksList);
    }
  } else {
    this._loadPalette(nbt.getList('palette', 10), blocksList);
  }

  this._isLoad = true;
};

/**
 * @param {Internal.ListTag} paletteList
 * @param {Internal.ListTag} blocksList
 */
SchematicStructure.prototype._loadPalette = function (paletteList, blocksList) {
  let tempPalette = [];

  for (let i = 0; i < paletteList.size(); ++i) {
    tempPalette.push($NbtUtils.readBlockState(SchematicStructure.blockGetter, paletteList.getCompound(i)));
  }

  for (let j = 0; j < blocksList.size(); ++j) {
    let blocksEntry = blocksList.getCompound(j);
    let posList = blocksEntry.getList('pos', 3);
    let blockpos = new BlockPos(posList.getInt(0), posList.getInt(1), posList.getInt(2));
    let blockstate = tempPalette[blocksEntry.getInt('state')];
    let nbt = blocksEntry.contains('nbt') ? blocksEntry.getCompound('nbt') : null;

    let info = new StructureBlockInfo(blockpos, blockstate, nbt);
    this._blocksList.push(info);
    this._blocksTensor[blockpos.y][blockpos.x][blockpos.z] = info;
  }
};

/**
 * 线性遍历，不保证方块坐标顺序
 * @param {function(StructureBlockInfo): void} callback
 */
SchematicStructure.prototype.listForEach = function (callback) {
  this._blocksList.forEach(callback);
};

/**
 * 层级遍历，按照方块坐标 y -> x -> z 的优先级递增遍历
 * @param {function(StructureBlockInfo): void} callback
 */
SchematicStructure.prototype.tensorForEach = function (callback) {
  this._blocksTensor.forEach((layer) => layer.forEach((row) => row.forEach(callback)));
};
