// priority: 64

const __BLOCK_TYPE = {
  AIR: 0,
  FUEL: 1,
  CONTROLLER: 2,
};

const reactorEnergyCapacity = 921600;
const reactorHeatLimit = 1474560;

/**
 * @param {Internal.GuiGraphics} guiGraphics
 * @param {number[]} scene
 * @param {string} fuelId
 * @param {string} controllerId
 * @param {number} x 反应堆x坐标
 * @param {number} y 反应堆y坐标
 * @param {number} z 反应堆z坐标
 * @param {number} scale
 */
const drawStaticScene = (guiGraphics, scene, fuelId, controllerId, x, y, z, scale) => {
  // 反应堆本体
  drawCustomMachineryMachine(
    guiGraphics,
    'dut:covariant_reactor',
    'kubejs:covariant_reactor',
    x,
    y,
    z,
    scale
  );

  const renderBlock = (blockId, x, y, z) => {
    $GuiGameElement['of(net.minecraft.world.level.block.state.BlockState)'](
      Block.getBlock(blockId).defaultBlockState()
    )
      .atLocal(x, y, z)
      .scale(scale)
      .render(guiGraphics);
  };

  const dx = [1, 0, 1, -1, 1, -1, 0, -1];
  const dz = [-1, -1, 0, -1, 1, 0, 1, 1];

  // 燃料以及控制棒
  scene.forEach((type, index) => {
    switch (type) {
      case __BLOCK_TYPE.FUEL:
        renderBlock(fuelId, x + dx[index], y, z + dz[index]);
        break;
      case __BLOCK_TYPE.CONTROLLER:
        renderBlock(controllerId, x + dx[index], y, z + dz[index]);
        break;
    }
  });
};

/**
 * @param {Internal.GuiGraphics} guiGraphics
 * @param {number[]} startScene
 * @param {number[]} endScene
 * @param {number} progress 0-1
 * @param {string} fuelId
 * @param {string} controllerId
 * @param {number} x 反应堆x坐标
 * @param {number} y 反应堆y坐标
 * @param {number} z 反应堆z坐标
 * @param {number} scale
 */
const drawAnimatedScene = (
  guiGraphics,
  startScene,
  endScene,
  progress,
  fuelId,
  controllerId,
  x,
  y,
  z,
  scale
) => {
  // 反应堆本体
  drawCustomMachineryMachine(
    guiGraphics,
    'dut:covariant_reactor',
    'kubejs:covariant_reactor',
    x,
    y,
    z,
    scale
  );

  const renderPhantomBlock = (blockId, x, y, z) => {
    const alpha = 1 - Math.abs(y);
    drawPhantomBlock(
      guiGraphics,
      Block.getBlock(blockId).defaultBlockState(),
      x,
      y,
      z,
      scale,
      0,
      0,
      0,
      alpha
    );
  };

  const renderBlock = (blockId, x, y, z) => {
    $GuiGameElement['of(net.minecraft.world.level.block.state.BlockState)'](
      Block.getBlock(blockId).defaultBlockState()
    )
      .atLocal(x, y, z)
      .scale(scale)
      .render(guiGraphics);
  };

  const yFuel = [-1, 0, -1];
  const yController = [1, 1, 0];

  // 先远后近，避免渲染问题
  const dx = [1, 0, 1, -1, 1, -1, 0, -1];
  const dz = [-1, -1, 0, -1, 1, 0, 1, 1];

  // 燃料棒与控制棒
  // 优先渲染不变的部分，避免出现渲染问题
  for (let i = 0; i < 8; ++i) {
    let startType = startScene[i];
    let endType = endScene[i];
    let xx = x + dx[i];
    let zz = z + dz[i];

    if (startType === endType) {
      // 不变，静态渲染
      switch (startType) {
        case __BLOCK_TYPE.FUEL:
          renderBlock(fuelId, xx, y, zz);
          break;
        case __BLOCK_TYPE.CONTROLLER:
          renderBlock(controllerId, xx, y, zz);
          break;
      }
    }
  }

  // 燃料棒与控制棒的动画效果：从y轴方向上升或下降
  for (let i = 0; i < 8; ++i) {
    let startType = startScene[i];
    let endType = endScene[i];
    let xx = x + dx[i];
    let zz = z + dz[i];

    if (startType !== endType) {
      // 发生变化，渲染动画
      // 先下后上，避免渲染问题
      if (yController[startType] !== yController[endType]) {
        // 控制棒发生变化
        let yy = lerp(yController[startType], yController[endType], progress);
        renderPhantomBlock(controllerId, xx, yy, zz);
      }
      if (yFuel[startType] !== yFuel[endType]) {
        // 燃料棒发生变化
        let yy = lerp(yFuel[startType], yFuel[endType], progress);
        renderPhantomBlock(fuelId, xx, yy, zz);
      }
    }
  }
};

/**
 * @param {Internal.IGuiHelper} guiHelper
 * @returns {Internal.IDrawableStatic}
 */
const buildHeatBarDrawable = (guiHelper) => {
  const texture = $AllGuiTextures.TRAIN_HUD_SPEED;
  return guiHelper
    .drawableBuilder(texture.location, texture.startX, texture.startY, texture.width, texture.height)
    .build();
};

/**
 * @param {Internal.IGuiHelper} guiHelper
 * @returns {Internal.IDrawableStatic}
 */
const buildHeatBackgroundDrawable = (guiHelper) => {
  const texture = $AllGuiTextures.TRAIN_HUD_SPEED_BG;
  return guiHelper
    .drawableBuilder(texture.location, texture.startX, texture.startY, texture.width, texture.height)
    .build();
};

/**
 * @param {Internal.IGuiHelper} guiHelper
 * @returns {Internal.IDrawableStatic}
 */
const buildEnergyBarDrawable = (guiHelper) => {
  const w = $TextureSizeHelper.getTextureWidth($EnergyGuiElement.BASE_ENERGY_STORAGE_FILLED_TEXTURE);
  const h = $TextureSizeHelper.getTextureHeight($EnergyGuiElement.BASE_ENERGY_STORAGE_FILLED_TEXTURE);
  return guiHelper
    .drawableBuilder($EnergyGuiElement.BASE_ENERGY_STORAGE_FILLED_TEXTURE, 0, 0, w, h)
    .setTextureSize(w, h)
    .build();
};

/**
 * @param {Internal.IGuiHelper} guiHelper
 * @returns {Internal.IDrawableStatic}
 */
const buildEnergyBackgroundDrawable = (guiHelper) => {
  const w = $TextureSizeHelper.getTextureWidth($EnergyGuiElement.BASE_ENERGY_STORAGE_EMPTY_TEXTURE);
  const h = $TextureSizeHelper.getTextureHeight($EnergyGuiElement.BASE_ENERGY_STORAGE_EMPTY_TEXTURE);
  return guiHelper
    .drawableBuilder($EnergyGuiElement.BASE_ENERGY_STORAGE_EMPTY_TEXTURE, 0, 0, w, h)
    .setTextureSize(w, h)
    .build();
};
