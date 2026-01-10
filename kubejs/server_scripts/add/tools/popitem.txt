const $ItemHandlerHelper = Java.loadClass('net.minecraftforge.items.ItemHandlerHelper');
const $ForgeCapabilities = Java.loadClass('net.minecraftforge.common.capabilities.ForgeCapabilities');
const $AbstractFunnelBlock = Java.loadClass('com.simibubi.create.content.logistics.funnel.AbstractFunnelBlock');
const $BlockEntityBehaviour = Java.loadClass('com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour');
const $DirectBeltInputBehaviour = Java.loadClass('com.simibubi.create.content.kinetics.belt.behaviour.DirectBeltInputBehaviour');

const FUNNEL = [
    'create:andesite_funnel',
    'create:brass_funnel',
];
const CHUTE = [
    'create:smart_chute',
    'minecraft:hopper',
    'create:chute',
];
const COLLECT_INTERFACE = [
    'create:andesite_funnel',
    'create:brass_funnel',
    'create:smart_chute',
    'minecraft:hopper',
    'create:chute',
    'create:item_drain',
    'create:belt',
];
/*
BlockEvents.rightClicked("create:cogwheel", event => {
  if (event.item.id != 'create:iron_sheet') return;
  function playEffect() {
    let { x, y, z } = event.block;
    event.level.playSound(null, x, y, z, "minecraft:entity.player.burp", "blocks", 0.2, 1.1);
    event.item.shrink(1);
  }
 
  let below = event.block.down;
  let stack = Item.of('create:iron_sheet', 1);
  if (!COLLECT_INTERFACE.includes(below.id)) {
    event.player.setStatusMessage(Component.white('1 - pop item'));
    event.block.popItemFromFace(stack, event.facing);
    playEffect();
    return;
  }
 
  let level = event.level;
  let belowBE = level.getBlockEntity(below.pos);
 
  // 漏斗类 参考文件: com.simibubi.create.content.logistics.funnel.AbstractFunnelBlock
  if (FUNNEL.includes(below.id)) {
    event.player.displayClientMessage(Component.white('3 - insert to funnel'), false);
    $AbstractFunnelBlock.tryInsert(level, below.pos, stack, false);
    playEffect();
    return;
  }
 
  let handler = belowBE.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null);
  event.player.displayClientMessage(Component.white(handler != null ? 'get handler' : 'no handler'), false);
  // 尝试往下方 BlockEntity 置入物品
  if (handler != null) {
    if (CHUTE.includes(below.id)) {
      event.player.displayClientMessage(Component.white('2 - insert to chute'), false);
      $ItemHandlerHelper.insertItemStacked(handler, stack, false);
      playEffect();
      return;
    }
 
    if (below.id == 'create:belt') {
      event.player.displayClientMessage(Component.white('4 - insert to belt'), false);
      handler.insertItem(0, stack, false);
      playEffect();
      return;
    }
  }
 
  // 模拟分液池行为，输入物品。检查较少，建议后置
  // 参考文件: com.simibubi.create.content.fluids.drain.ItemDrainBlock
  let idb = $BlockEntityBehaviour.get(level, below.pos, $DirectBeltInputBehaviour.TYPE);
  if (idb != null) {
    event.player.displayClientMessage(Component.white('5 - inserted via item_drain behaviour'), false);
    idb.handleInsertion(stack, event.facing.opposite, false);
    playEffect();
    return;
  }
 
  // 回归掉落物模式
  event.player.displayClientMessage(Component.white('6 - pop item'), false);
  event.block.popItemFromFace(stack, event.facing);
  playEffect();
})
*/