// priority: 4

/**
 * @param {Internal.RecipeCategoryBuilder<Internal.CustomJSRecipe>} pCategory
 */
function CovariantReactorCooldown(pCategory) {
  const category = pCategory;
  const jeiHelpers = category.getJeiHelpers();
  const guiHelper = jeiHelpers.guiHelper;

  // 当前场景，长度为8的数组，每个元素代表一个位置的状态（空气、燃料棒、控制棒）
  let currScene = [
    __BLOCK_TYPE.CONTROLLER,
    __BLOCK_TYPE.AIR,
    __BLOCK_TYPE.AIR,
    __BLOCK_TYPE.CONTROLLER,
    __BLOCK_TYPE.CONTROLLER,
    __BLOCK_TYPE.AIR,
    __BLOCK_TYPE.AIR,
    __BLOCK_TYPE.CONTROLLER,
  ];

  // 累积的热量，用于渲染进度条
  let heatAcc = 0;
  let lastTick = Timer.getGlobalTick();

  const recipeTime1 = 5;
  const recipeTime2 = 40;
  const recipeArrow1 = guiHelper.createAnimatedRecipeArrow(recipeTime1);
  const recipeArrow2 = guiHelper.createAnimatedRecipeArrow(recipeTime2);

  // 输入槽参数
  const recipeInputSlotX = category.getWidth() / 2 - (3 * 18 + 2 * 10 + recipeArrow1.getWidth() - 2) / 2;
  const recipeInputSlotY = 49;

  // 配方箭头参数
  const recipeArrowX = recipeInputSlotX + 17 + 18 + 10;
  const recipeArrowY = recipeInputSlotY + 8 - recipeArrow1.getHeight() / 2;

  // 输出槽参数
  const recipeOutputSlotX = recipeArrowX + recipeArrow1.getWidth() + 10 + 1;
  const recipeOutputSlotY = recipeInputSlotY;

  const textX = 10;
  const textY = 7;

  /**
   * @param {Internal.IRecipeLayoutBuilder} layoutBuilder
   * @param {Internal.CustomJSRecipe} recipe
   * @param {Internal.IFocusGroup} focuses
   */
  this.handleLookup = (layoutBuilder, recipe, focuses) => {
    const data = recipe.recipeData;

    // 输入
    if (data.subtype === 1) {
      // 冷却剂
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, recipeInputSlotX, recipeInputSlotY)
        .setFluidRenderer(1000, false, 16, 16)
        .addFluidStack('kubejs:cryogen', 1000)
        .addTooltipCallback((recipeSlotView, tooltip) => {
          const index = isNaN(parseInt(tooltip.get(1).getString(1))) ? 2 : 1;
          const cryogenCount = Math.floor((Timer.getGlobalTick() % 80) / 20) + 1;
          tooltip.set(index, Text.literal(`${cryogenCount},000 mB`).color(0xa8a8a8));
        });
    } else {
      // 散热元件
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, recipeInputSlotX, recipeInputSlotY)
        .setBackground(guiHelper.getSlotDrawable(), -1, -1)
        .addItemStack(Item.of('kubejs:radiator', 6));
    }

    // 协变热
    layoutBuilder
      .addSlot($RecipeIngredientRole.INPUT, recipeInputSlotX + 18, recipeInputSlotY)
      .setFluidRenderer(1000, false, 16, 16)
      .addFluidStack('kubejs:covariant_heat', 1000)
      .addTooltipCallback((recipeSlotView, tooltip) => {
        const index = isNaN(parseInt(tooltip.get(1).getString(1))) ? 2 : 1;
        const cryogenCount = Math.floor((Timer.getGlobalTick() % 80) / 20) + 1;
        const totalHeat = data.heatCallback(cryogenCount);
        tooltip.set(index, Text.literal(`${addThousandSeparator(totalHeat)} mB`).color(0xa8a8a8));
      });

    // 流体输出
    // 过热蒸汽
    layoutBuilder
      .addSlot($RecipeIngredientRole.OUTPUT, recipeOutputSlotX, recipeOutputSlotY)
      .setFluidRenderer(1000, false, 16, 16)
      .addFluidStack('kubejs:superheated_steam', 1000)
      .addTooltipCallback((recipeSlotView, tooltip) => {
        const index = isNaN(parseInt(tooltip.get(1).getString(1))) ? 2 : 1;
        if (data.subtype === 1) {
          const cryogenCount = Math.floor((Timer.getGlobalTick() % 80) / 20) + 1;
          tooltip.set(index, Text.literal(`${cryogenCount},000 mB`).color(0xa8a8a8));
        } else {
          tooltip.set(index, Text.literal('6,000 mB').color(0xa8a8a8));
        }
      });
  };

  const animatedHeatBar = new DrawableAnimated(
    buildHeatBarDrawable(guiHelper),
    buildHeatBackgroundDrawable(guiHelper),
    DrawableAnimated.StartDirection.LEFT,
    false
  );

  const dx = [2, 2, 2, 2, 2, 1, 0, -1, -2, -2, -2, -2, -2, -1, 0, 1];
  const dz = [-2, -1, 0, 1, 2, 2, 2, 2, 2, 1, 0, -1, -2, -2, -2, -2];

  /**
   * @param {Internal.CustomJSRecipe} recipe
   * @param {Internal.IRecipeSlotsView} recipeSlotsView
   * @param {Internal.GuiGraphics} graphics
   * @param {number} mouseX
   * @param {number} mouseY
   */
  this.handleDraw = (recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
    const data = recipe.recipeData;
    const matrixStack = graphics.pose();

    if (data.subtype === 1) {
      recipeArrow1.draw(graphics, recipeArrowX, recipeArrowY);
    } else {
      recipeArrow2.draw(graphics, recipeArrowX, recipeArrowY);
    }
    const recipeTime = data.subtype === 1 ? recipeTime1 : recipeTime2;

    // 流体槽背景渲染
    if (data.subtype === 1) {
      drawFluidSlotBackground(graphics, recipeInputSlotX, recipeInputSlotY);
    }
    drawFluidSlotBackground(graphics, recipeInputSlotX + 18, recipeInputSlotY);
    drawFluidSlotBackground(graphics, recipeOutputSlotX, recipeOutputSlotY);

    const nowTick = Timer.getGlobalTick();
    const cryogenCount = Math.floor((nowTick % 80) / 20) + 1;

    // 额外信息计算
    const totalHeat = data.heatCallback(cryogenCount);

    // 热量槽进度渲染
    const heatRenderX = category.getWidth() / 2 - animatedHeatBar.getWidth() / 2;
    const heatRenderY = 142;
    if (nowTick - lastTick > recipeTime) {
      if (heatAcc <= 0) {
        heatAcc = reactorHeatLimit;
      } else {
        heatAcc = clamp(heatAcc - totalHeat, 0, reactorHeatLimit);
      }
      lastTick = nowTick;
    }
    animatedHeatBar.draw(graphics, heatRenderX, heatRenderY, heatAcc / reactorHeatLimit);

    // 配方信息文本
    let wordX = textX;
    let wordY = textY;
    const wordLineHeight = Client.font.lineHeight + 2;
    const putWord = (component) => {
      drawWordWrap(graphics, Client.font, component, wordX, wordY, 200, 0x000000, false);
      wordY += wordLineHeight;
    };

    putWord(
      Text.translate(
        'kubejs.jeiaddition.covariant_reactor.heat_total',
        addThousandSeparator(data.heatCallback(1))
      )
    );
    putWord(Text.translate('kubejs.jeiaddition.machine_recipe_time', recipeTime.toString()));
    putWord(
      Text.translate(
        'kubejs.jeiaddition.covariant_reactor.convert_ratio',
        addThousandSeparator(data.heatCallback(1)),
        data.subtype === 1 ? '1,000' : '6,000'
      )
    );

    matrixStack.pushPose();
    matrixStack.translate(90, 115, 100);

    // 渲染轴旋转
    matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5));
    matrixStack.mulPose($Axis.YP.rotationDegrees(22.5));

    const scale = 22;
    const controllerId = 'kubejs:carbon_electrode';
    drawStaticScene(graphics, currScene, null, controllerId, 0, 0, 0, scale);

    if (data.subtype === 1) {
      let index = 0;
      let renderBlock = (blockId) => {
        $GuiGameElement['of(net.minecraft.world.level.block.state.BlockState)'](
          Block.getBlock(blockId).defaultBlockState()
        )
          .atLocal(dx[index], 0, dz[index])
          .scale(scale)
          .render(graphics);
        ++index;
      };

      let t = nowTick % 20;
      for (let i = 0; i < 4; ++i) {
        let cmp = t - (2.5 + 5 * i);
        if (cmp < -5) {
          break;
        }

        let id = cmp < 0 ? 'kubejs:cryogen' : 'kubejs:superheated_steam';
        for (let j = 0; j < cryogenCount; ++j) {
          renderBlock(id);
        }
      }
    }

    matrixStack.popPose();
  };

  // tooltip 显示
  const heatInfoTooltip = new MutableRectengularTooltip(
    textX,
    textY,
    120,
    2 * (Client.font.lineHeight + 2)
  ).setTooltipCallback((tooltip, recipe) => {
    const data = recipe.recipeData;
    tooltip.add(Text.literal(data.heatFormula));
    if (data.subtype === 1) {
      tooltip.add(Text.translate('kubejs.jeiaddition.covariant_reactor.n_explain'));
    }
  });

  const machineInfoTooltip = new MutableRectengularTooltip(30, 70, 150, 60).setTooltipCallback(
    (tooltip, recipe) => {
      const data = recipe.recipeData;
      tooltip.add(Text.translate('kubejs.jeiaddition.covariant_reactor.machine1'));
      tooltip.add(Text.translate('kubejs.jeiaddition.covariant_reactor.machine5'));
      if (data.subtype === 1) {
        tooltip.add(Text.translate('kubejs.jeiaddition.covariant_reactor.machine6'));
        tooltip.add(Text.translate('kubejs.jeiaddition.covariant_reactor.machine7'));
      } else {
        tooltip.add(Text.translate('kubejs.jeiaddition.covariant_reactor.machine8'));
        tooltip.add(Text.translate('kubejs.jeiaddition.covariant_reactor.machine9'));
        tooltip.add(Text.translate('kubejs.jeiaddition.covariant_reactor.machine10'));
      }
    }
  );

  // 处理 tooltip 显示
  this.handleTooltip = (tooltip, recipe, recipeSlotsView, mouseX, mouseY) => {
    heatInfoTooltip.handleTooltip(tooltip, recipe, mouseX, mouseY);
    machineInfoTooltip.handleTooltip(tooltip, recipe, mouseX, mouseY);
  };
}
