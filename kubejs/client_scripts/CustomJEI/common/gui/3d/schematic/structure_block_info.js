// priority: 4096

/**
 *
 * @param {BlockPos} pos
 * @param {Internal.BlockState} state
 * @param {Internal.CompoundTag|null} nbt
 */
function StructureBlockInfo(pos, state, nbt) {
  this.pos = pos;
  this.state = state;
  this.nbt = nbt;
}

StructureBlockInfo.prototype.toString = function () {
  return `<StructureBlockInfo | ${this.pos.toString()} | ${this.state.toString()} | ${this.nbt.toString()}>`;
};
