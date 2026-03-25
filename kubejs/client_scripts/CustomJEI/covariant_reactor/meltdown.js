// priority: 4

/**
 * @param {Internal.RecipeCategoryBuilder<Internal.CustomJSRecipe>} pCategory
 */
function CovariantReactorMeltdown(pCategory) {
  const category = pCategory;
  const jeiHelpers = category.getJeiHelpers();
  const guiHelper = jeiHelpers.guiHelper;

  // 状态机
  const STATE = {
    HEAT: 0,
    BLINK: 1,
    EXPLODE: 2,
  };
  let state = STATE.HEAT;

  // 当前场景，长度为8的数组，每个元素代表一个位置的状态（空气、燃料棒、控制棒）
  let currScene = [
    __BLOCK_TYPE.FUEL,
    __BLOCK_TYPE.FUEL,
    __BLOCK_TYPE.FUEL,
    __BLOCK_TYPE.FUEL,
    __BLOCK_TYPE.FUEL,
    __BLOCK_TYPE.FUEL,
    __BLOCK_TYPE.FUEL,
    __BLOCK_TYPE.FUEL,
  ];
  // 内部计时器
  let timer = new Timer();
  timer.start();

  let heatAcc = 0;
  let lastTick = Timer.getGlobalTick();

  const explodeCooldown = 60;

  const animatedRecipeArrow = new DrawableAnimated(
    guiHelper.getRecipeArrowFilled(),
    guiHelper.getRecipeArrow(),
    DrawableAnimated.StartDirection.LEFT,
    false
  );

  // 输入槽参数
  const recipeInputSlotX =
    category.getWidth() / 2 - (7 * 18 + 2 * 10 + animatedRecipeArrow.getWidth() - 2) / 2;
  const recipeInputSlotY = 4;

  // 配方箭头参数
  const recipeArrowX = recipeInputSlotX + 17 + 10;
  const recipeArrowY = recipeInputSlotY + 8 - animatedRecipeArrow.getHeight() / 2;
  const recipeTime = 60;

  // 输出槽参数
  const recipeOutputSlotX = recipeArrowX + animatedRecipeArrow.getWidth() + 10 + 1;
  const recipeOutputSlotY = recipeInputSlotY;

  const slotGap = 20;

  // 爆炸
  const toggleButton = new ToggleButton(
    recipeOutputSlotX + 18 * 6 - 25,
    recipeOutputSlotY + 22 + 8 - 7,
    25,
    14,
    Text.translate('kubejs.jeiaddition.covariant_reactor.meltdown.bang')
  );

  /**
   * @param {Internal.IRecipeLayoutBuilder} layoutBuilder
   * @param {Internal.CustomJSRecipe} recipe
   * @param {Internal.IFocusGroup} focuses
   */
  this.handleLookup = (layoutBuilder, recipe, focuses) => {
    // 输入第一行
    // 协变热
    layoutBuilder
      .addSlot($RecipeIngredientRole.INPUT, recipeInputSlotX, recipeInputSlotY)
      .setFluidRenderer(1474560, false, 16, 16)
      .addFluidStack('kubejs:covariant_heat', 1474560);
    // 输出第一行
    // 协变热
    layoutBuilder
      .addSlot($RecipeIngredientRole.OUTPUT, recipeOutputSlotX, recipeOutputSlotY)
      .setFluidRenderer(114514, false, 16, 16)
      .addTooltipCallback((recipeSlotView, tooltip) => {
        const index = isNaN(parseInt(tooltip.get(1).getString(1))) ? 2 : 1;
        tooltip.remove(index);
        tooltip.add(1, Text.translate('kubejs.jeiaddition.weight', '1').white());
      })
      .addFluidStack('kubejs:covariant_heat', 114514);
    // 熔岩
    layoutBuilder
      .addSlot($RecipeIngredientRole.OUTPUT, recipeOutputSlotX + 18, recipeOutputSlotY)
      .setFluidRenderer(114514, false, 16, 16)
      .addTooltipCallback((recipeSlotView, tooltip) => {
        const index = isNaN(parseInt(tooltip.get(1).getString(1))) ? 2 : 1;
        tooltip.remove(index);
        tooltip.add(1, Text.translate('kubejs.jeiaddition.weight', '3').white());
      })
      .addFluidStack('minecraft:lava', 114514);
    // 基岩
    layoutBuilder
      .addSlot($RecipeIngredientRole.OUTPUT, recipeOutputSlotX + 18 * 2, recipeOutputSlotY)
      .setBackground(guiHelper.getSlotDrawable(), -1, -1)
      .addTooltipCallback((recipeSlotView, tooltip) => {
        tooltip.add(1, Text.translate('kubejs.jeiaddition.weight', '19').white());
      })
      .addItemStack(Item.of('minecraft:bedrock'));
    // 幽匿块
    layoutBuilder
      .addSlot($RecipeIngredientRole.OUTPUT, recipeOutputSlotX + 18 * 3, recipeOutputSlotY)
      .setBackground(guiHelper.getSlotDrawable(), -1, -1)
      .addTooltipCallback((recipeSlotView, tooltip) => {
        tooltip.add(1, Text.translate('kubejs.jeiaddition.weight', '7').white());
      })
      .addItemStack(Item.of('minecraft:sculk'));
    // 幽匿催发体
    layoutBuilder
      .addSlot($RecipeIngredientRole.OUTPUT, recipeOutputSlotX + 18 * 4, recipeOutputSlotY)
      .setBackground(guiHelper.getSlotDrawable(), -1, -1)
      .addTooltipCallback((recipeSlotView, tooltip) => {
        tooltip.add(1, Text.translate('kubejs.jeiaddition.weight', '3').white());
      })
      .addItemStack(Item.of('minecraft:sculk_catalyst'));
    // 苔藓块
    layoutBuilder
      .addSlot($RecipeIngredientRole.OUTPUT, recipeOutputSlotX + 18 * 5, recipeOutputSlotY)
      .setBackground(guiHelper.getSlotDrawable(), -1, -1)
      .addTooltipCallback((recipeSlotView, tooltip) => {
        tooltip.add(1, Text.translate('kubejs.jeiaddition.weight', '1').white());
      })
      .addItemStack(Item.of('minecraft:moss_block'));

    // 输入第二行
    // 幽匿块
    layoutBuilder
      .addSlot($RecipeIngredientRole.INPUT, recipeInputSlotX, recipeInputSlotY + slotGap)
      .setBackground(guiHelper.getSlotDrawable(), -1, -1)
      .addItemStack(Item.of('minecraft:sculk'));
    // 输出第二行
    // 基岩
    layoutBuilder
      .addSlot($RecipeIngredientRole.OUTPUT, recipeOutputSlotX, recipeOutputSlotY + slotGap)
      .setBackground(guiHelper.getSlotDrawable(), -1, -1)
      .addItemStack(Item.of('minecraft:bedrock'));
  };

  const animatedHeatBar = new DrawableAnimated(
    buildHeatBarDrawable(guiHelper),
    buildHeatBackgroundDrawable(guiHelper),
    DrawableAnimated.StartDirection.LEFT,
    false
  );

  const renderBlock = (graphics, blockId, x, y, z, scale) => {
    $GuiGameElement['of(net.minecraft.world.level.block.state.BlockState)'](
      Block.getBlock(blockId).defaultBlockState()
    )
      .atLocal(x, y, z)
      .scale(scale)
      .render(graphics);
  };

  const drawRegularScene = (graphics, scale) => {
    for (let z = -4; z <= 4; ++z) {
      renderBlock(graphics, 'minecraft:stone', -4, 2, z, scale);
      renderBlock(graphics, 'minecraft:stone', -4, 3, z, scale);
    }
    for (let x = -3; x <= 4; ++x) {
      renderBlock(graphics, 'minecraft:stone', x, 2, 4, scale);
      renderBlock(graphics, 'minecraft:stone', x, 3, 4, scale);
    }
    for (let x = -4; x <= 4; ++x) {
      for (let z = -4; z <= 4; ++z) {
        let a = x + 4;
        let b = z + 4;
        renderBlock(
          graphics,
          (Math.floor(a / 3) + Math.floor(b / 3)) % 2 ^ !(a % 3 === 1 && b % 3 === 1)
            ? 'minecraft:white_concrete'
            : 'minecraft:snow_block',
          x,
          1,
          z,
          scale
        );
      }
    }
    drawStaticScene(graphics, currScene, 'kubejs:bronze_fuel_rod', null, 0, 0, 0, scale);
    renderBlock(graphics, 'minecraft:sculk', -4, 0, -4, scale);
    renderBlock(graphics, 'minecraft:sculk', -3, 0, -4, scale);
    renderBlock(graphics, 'minecraft:sculk', -4, 0, -3, scale);
    renderBlock(graphics, 'minecraft:sculk', 4, 0, 4, scale);
    renderBlock(graphics, 'minecraft:sculk', 3, 0, 4, scale);
    renderBlock(graphics, 'minecraft:sculk', 4, 0, 3, scale);
  };

  const meltdownSceneMap = {
    F: 'kubejs:bronze_fuel_rod',
    B: 'minecraft:bedrock',
    S: 'minecraft:snow_block',
    C: 'minecraft:white_concrete',
    L: 'minecraft:lava',
    H: 'kubejs:covariant_heat',
    Q: 'minecraft:stone',
    Z: 'minecraft:sculk',
  };
  const meltdownScene = [
    [
      '         ',
      '         ',
      '         ',
      '   BB    ',
      '   F B   ',
      '    F    ',
      '         ',
      '         ',
      '         ',
    ],
    [
      ' B BSB BB',
      'B  BB B  ',
      '   HLL BL',
      '  HHBBB  ',
      'BCBHLBZBB',
      ' BB B L  ',
      '   BBBLL ',
      ' BH   LBB',
      ' HH B BBB',
    ],
    [
      '  BBQQBLL',
      '   ZQ BLL',
      ' B  B HQL',
      'Q   QQH L',
      'BQ  BQQBQ',
      'QHB QB  B',
      'HHBQBBLLB',
      'HB  ZB LL',
      'QZBBQL LL',
    ],
    [
      'BQBQ  QQ ',
      'HHHQQQBBZ',
      'HZ  Q  BQ',
      'HB BBBBQL',
      'B  ZQLQQL',
      'B B QZLLL',
      'BQQBBQLLL',
      '    BZZQL',
      'QQ    BBL',
    ],
  ];
  const drawMeltdownScene = (graphics, scale) => {
    for (let y = 3; y >= 0; --y) {
      let layer = meltdownScene[y];
      for (let x = -4; x <= 4; ++x) {
        let row = layer[x + 4];
        for (let z = -4; z <= 4; ++z) {
          let char = row[z + 4];
          if (char !== ' ') {
            renderBlock(graphics, meltdownSceneMap[char], x, y, z, scale);
          }
        }
      }
    }
    renderBlock(graphics, 'minecraft:bedrock', -4, 0, -4, scale);
    renderBlock(graphics, 'minecraft:bedrock', -3, 0, -4, scale);
    renderBlock(graphics, 'minecraft:bedrock', -4, 0, -3, scale);
    renderBlock(graphics, 'minecraft:bedrock', 4, 0, 4, scale);
    renderBlock(graphics, 'minecraft:bedrock', 3, 0, 4, scale);
    renderBlock(graphics, 'minecraft:bedrock', 4, 0, 3, scale);
  };

  /**
   * @param {Internal.CustomJSRecipe} recipe
   * @param {Internal.IRecipeSlotsView} recipeSlotsView
   * @param {Internal.GuiGraphics} graphics
   * @param {number} mouseX
   * @param {number} mouseY
   */
  this.handleDraw = (recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
    const matrixStack = graphics.pose();

    // 流体槽背景渲染
    drawFluidSlotBackground(graphics, recipeInputSlotX, recipeInputSlotY);
    drawFluidSlotBackground(graphics, recipeOutputSlotX, recipeOutputSlotY);
    drawFluidSlotBackground(graphics, recipeOutputSlotX + 18, recipeOutputSlotY);

    // 热量槽进度渲染
    const heatRenderX = category.getWidth() / 2 - animatedHeatBar.getWidth() / 2;
    const heatRenderY = 145;

    toggleButton.draw(recipe, graphics, mouseX, mouseY);

    switch (state) {
      case STATE.HEAT: {
        let nowTick = Timer.getGlobalTick();
        heatAcc = heatAcc + 16384 * (nowTick - lastTick);
        animatedHeatBar.draw(graphics, heatRenderX, heatRenderY, Math.min(heatAcc / reactorHeatLimit, 1));
        animatedRecipeArrow.drawEmpty(graphics, recipeArrowX, recipeArrowY);
        animatedRecipeArrow.drawEmpty(graphics, recipeArrowX, recipeArrowY + slotGap);

        lastTick = nowTick;

        if (heatAcc >= reactorHeatLimit) {
          state = STATE.BLINK;
          timer.restart();
        }
        break;
      }
      case STATE.BLINK: {
        let p;
        let t = timer.getElapsedTicks();
        if (t < recipeTime / 3) {
          p = (4 * ((3 * t) / recipeTime)) % 2 < 1;
        } else if (t < (2 * recipeTime) / 3) {
          p = (8 * ((3 * t) / recipeTime - 1)) % 2 < 1;
        } else {
          p = (12 * ((3 * t) / recipeTime - 2)) % 2 < 1;
        }
        if (p) {
          animatedHeatBar.drawFull(graphics, heatRenderX, heatRenderY);
        } else {
          animatedHeatBar.drawEmpty(graphics, heatRenderX, heatRenderY);
        }
        animatedRecipeArrow.draw(graphics, recipeArrowX, recipeArrowY, Math.min(t / recipeTime, 1));
        animatedRecipeArrow.draw(graphics, recipeArrowX, recipeArrowY + slotGap, Math.min(t / recipeTime, 1));

        if (t >= recipeTime) {
          state = STATE.EXPLODE;
          timer.restart();
          if (!toggleButton.getState()) {
            break;
          }
          for (let i = 0; i < 8; ++i) {
            Client.getSoundManager().play($SimpleSoundInstance.forUI($SoundEvents.GENERIC_EXPLODE, 1.0, 0.1));
          }
        }
        break;
      }
      case STATE.EXPLODE: {
        animatedHeatBar.drawEmpty(graphics, heatRenderX, heatRenderY);
        animatedRecipeArrow.drawEmpty(graphics, recipeArrowX, recipeArrowY);
        animatedRecipeArrow.drawEmpty(graphics, recipeArrowX, recipeArrowY + slotGap);

        if (timer.getElapsedTicks() >= explodeCooldown) {
          state = STATE.HEAT;
          heatAcc = 0;
          timer.restart();
          lastTick = Timer.getGlobalTick();
        }
        break;
      }
    }

    matrixStack.pushPose();
    matrixStack.translate(95, 70, 100);

    // 渲染轴旋转
    matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5));
    matrixStack.mulPose($Axis.YP.rotationDegrees(22.5));

    const scale = 16;

    switch (state) {
      case STATE.HEAT:
      case STATE.BLINK: {
        drawRegularScene(graphics, scale);
        break;
      }
      case STATE.EXPLODE: {
        drawMeltdownScene(graphics, scale);
        break;
      }
    }

    matrixStack.popPose();
  };

  // tooltip 显示
  const machineInfoTooltip = new StaticRectengularTooltip(10, 45, 190, 105)
    .addTranslate('kubejs.jeiaddition.covariant_reactor.machine11')
    .addTranslate('kubejs.jeiaddition.covariant_reactor.machine12');

  this.handleInput = (recipe, mouseX, mouseY, input) => {
    return toggleButton.handleInput(recipe, mouseX, mouseY, input);
  };

  // 处理 tooltip 显示
  this.handleTooltip = (tooltip, recipe, recipeSlotsView, mouseX, mouseY) => {
    machineInfoTooltip.handleTooltip(tooltip, mouseX, mouseY);
  };
}
