// priority: 4

/**
 * @param {Internal.RecipeCategoryBuilder<Internal.CustomJSRecipe>} pCategory
 */
function CovariantReactorWork(pCategory) {
  const category = pCategory;
  const jeiHelpers = category.getJeiHelpers();
  const guiHelper = jeiHelpers.guiHelper;

  // 状态机
  const STATE = {
    IDLE: 0, // 静态状态，渲染当前场景
    TRANSFORM: 1, // 正在从一个场景过渡到另一个场景
    DECAY: 2, // 衰变事件
  };
  let state = STATE.IDLE;

  // 燃料棒数量
  let fuelCount = 4;
  // 控制棒数量
  let controllerCount = 4;
  // 当前场景，长度为8的数组，每个元素代表一个位置的状态（空气、燃料棒、控制棒）
  let currScene = [
    __BLOCK_TYPE.FUEL,
    __BLOCK_TYPE.CONTROLLER,
    __BLOCK_TYPE.CONTROLLER,
    __BLOCK_TYPE.FUEL,
    __BLOCK_TYPE.FUEL,
    __BLOCK_TYPE.CONTROLLER,
    __BLOCK_TYPE.CONTROLLER,
    __BLOCK_TYPE.FUEL,
  ];
  // 正在过渡的下一个场景，长度同currentScene，过渡结束后会赋值给currentScene
  let nextScene = null;
  // 即将切换到的场景，长度同currentScene
  let pendingScene = null;
  // 内部计时器
  const timer = new Timer();
  timer.start();

  // 场景过渡动画的持续时间，单位为刻
  const transformDuration = 15;
  // 反应堆衰变的恢复时间，单位为刻
  const decayCooldown = 60;

  // 累积的能量，用于渲染进度条
  let energyAcc = 0;
  let heatAcc = 0;
  let lastTick = Timer.getGlobalTick();

  /**
   * 将pendingScene加载到nextScene，并重置计时器
   */
  const loadPendingScene = () => {
    nextScene = pendingScene;
    pendingScene = null;
    timer.restart();
  };

  // 按钮组参数
  const widgetX = 155;
  const widgetY = 124;
  const widgetWidth = 40;
  const widgetHeight = 22;
  const buttonWidth = 9;
  const buttonHeight = 9;

  const recipeTime = 60;

  // 输出槽参数
  const recipeOutputSlotX = 158;
  const recipeOutputSlotY = 80;
  const energySlotWidth = $TextureSizeHelper.getTextureWidth(
    $EnergyGuiElement.BASE_ENERGY_STORAGE_EMPTY_TEXTURE
  );
  const energySlotHeight = $TextureSizeHelper.getTextureHeight(
    $EnergyGuiElement.BASE_ENERGY_STORAGE_EMPTY_TEXTURE
  );
  const energySlotX = recipeOutputSlotX + 18;
  const energySlotY = recipeOutputSlotY + 8 - energySlotHeight / 2;

  // 场景中 燃料棒、控制棒、空气的位置索引列表
  let fuelBlocks = [0, 3, 4, 7];
  let controllerBlocks = [1, 2, 5, 6];
  let airBlocks = [];

  /**
   * 从from数组随机选择一个元素移到to数组，更新两个数组的内容
   * @param {any[]} from
   * @param {any[]} to
   */
  const transferOne = (from, to) => {
    const index = randBetween(0, from.length - 1);
    to.push(from[index]);
    from.splice(index, 1);
  };

  /**
   * 根据fuelBlocks和controllerBlocks的内容生成场景，并赋值给pendingScene
   */
  const appendScene = () => {
    let ret = Array(8).fill(__BLOCK_TYPE.AIR);
    fuelBlocks.forEach((index) => (ret[index] = __BLOCK_TYPE.FUEL));
    controllerBlocks.forEach((index) => (ret[index] = __BLOCK_TYPE.CONTROLLER));
    pendingScene = ret;
  };

  // 按钮组左上角
  const fuelMinusButton = new ClickButton(widgetX, widgetY, buttonWidth, buttonHeight, Text.literal('-'))
    .onClick(() => {
      fuelCount--;
      transferOne(fuelBlocks, airBlocks);
      appendScene();
      return true;
    })
    .setEnableCallback(() => fuelCount > 1);

  // 按钮组右上角
  const fuelPlusButton = new ClickButton(
    widgetX + widgetWidth - buttonWidth,
    widgetY,
    buttonWidth,
    buttonHeight,
    Text.literal('+')
  )
    .onClick(() => {
      fuelCount++;
      if (fuelCount + controllerCount > 8) {
        controllerCount--;
        transferOne(controllerBlocks, fuelBlocks);
      } else {
        transferOne(airBlocks, fuelBlocks);
      }
      appendScene();
      return true;
    })
    .setEnableCallback(() => fuelCount + controllerCount < 8 || controllerCount > 0);

  // 按钮组左下角
  const controllerMinusButton = new ClickButton(
    widgetX,
    widgetY + widgetHeight - buttonHeight,
    buttonWidth,
    buttonHeight,
    Text.literal('-')
  )
    .onClick(() => {
      controllerCount--;
      transferOne(controllerBlocks, airBlocks);
      appendScene();
      return true;
    })
    .setEnableCallback(() => controllerCount > 0);

  // 按钮组右下角
  const controllerPlusButton = new ClickButton(
    widgetX + widgetWidth - buttonWidth,
    widgetY + widgetHeight - buttonHeight,
    buttonWidth,
    buttonHeight,
    Text.literal('+')
  )
    .onClick(() => {
      controllerCount++;
      if (fuelCount + controllerCount > 8) {
        fuelCount--;
        transferOne(fuelBlocks, controllerBlocks);
      } else {
        transferOne(airBlocks, controllerBlocks);
      }
      appendScene();
      return true;
    })
    .setEnableCallback(() => fuelCount + controllerCount < 8 || fuelCount > 1);

  /**
   * @param {Internal.IRecipeLayoutBuilder} layoutBuilder
   * @param {Internal.CustomJSRecipe} recipe
   * @param {Internal.IFocusGroup} focuses
   */
  this.handleLookup = (layoutBuilder, recipe, focuses) => {
    const data = recipe.recipeData;
    // 能量输出
    layoutBuilder
      .addSlot($RecipeIngredientRole.OUTPUT, energySlotX, energySlotY)
      .setFluidRenderer(114514, false, energySlotWidth - 2, energySlotHeight - 2)
      .addIngredient($CustomIngredientTypes.ENERGY, new $Energy(42, 1, true))
      .addTooltipCallback((recipeSlotView, tooltip) => {
        // 配方信息计算
        const power = data.powerCallback(fuelCount, controllerCount);
        const totalEnergy = recipeTime * power;

        tooltip.add(
          0,
          Text.translate(
            'custommachinery.jei.ingredient.energy.pertick.output',
            addThousandSeparator(totalEnergy),
            'FE',
            addThousandSeparator(power),
            'FE'
          )
        );
      });

    // 流体输出
    // 协变热
    layoutBuilder
      .addSlot($RecipeIngredientRole.OUTPUT, recipeOutputSlotX, recipeOutputSlotY)
      .setFluidRenderer(1000, false, 16, 16)
      .addFluidStack('kubejs:covariant_heat', 1000)
      .addTooltipCallback((recipeSlotView, tooltip) => {
        const index = isNaN(parseInt(tooltip.get(1).getString(1))) ? 2 : 1;
        const perTick = data.heatCallback(fuelCount, controllerCount);
        const totalHeat = recipeTime * perTick;
        tooltip.set(
          index,
          Text.literal(`${addThousandSeparator(totalHeat)} mB @ ${addThousandSeparator(perTick)} mB/t`).color(
            0xa8a8a8
          )
        );
      });

    // 隐形物品输出
    // 黄铜块
    layoutBuilder
      .addInvisibleIngredients($RecipeIngredientRole.OUTPUT)
      .addItemStack(Item.of('create:brass_block'));
  };

  const animatedEnergyBar = new DrawableAnimated(
    buildEnergyBarDrawable(guiHelper),
    buildEnergyBackgroundDrawable(guiHelper),
    DrawableAnimated.StartDirection.BOTTOM,
    false
  );

  const animatedHeatBar = new DrawableAnimated(
    buildHeatBarDrawable(guiHelper),
    buildHeatBackgroundDrawable(guiHelper),
    DrawableAnimated.StartDirection.LEFT,
    false
  );

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

    fuelMinusButton.draw(recipe, graphics, mouseX, mouseY);
    fuelPlusButton.draw(recipe, graphics, mouseX, mouseY);
    controllerMinusButton.draw(recipe, graphics, mouseX, mouseY);
    controllerPlusButton.draw(recipe, graphics, mouseX, mouseY);

    // 流体槽背景渲染
    drawFluidSlotBackground(graphics, recipeOutputSlotX, recipeOutputSlotY);

    // 配方信息计算
    const power = data.powerCallback(fuelCount, controllerCount);
    const totalEnergy = recipeTime * power;
    const cyclesEnergyFull = parseFloat((reactorEnergyCapacity / totalEnergy).toFixed(2));
    const ticksEnergyFull = Math.ceil(reactorEnergyCapacity / power);

    // 额外信息计算
    const heatPerTick = data.heatCallback(fuelCount, controllerCount);
    const totalHeat = recipeTime * heatPerTick;
    const heatPercentage = parseFloat(((totalHeat / reactorHeatLimit) * 100).toFixed(2));
    const cyclesHeatFull = parseFloat((reactorHeatLimit / totalHeat).toFixed(2));
    const ticksHeatFull = Math.ceil(reactorHeatLimit / heatPerTick);
    const decayProbability =
      fuelCount === 1 ? 0 : parseFloat((0.025 * (1 - 0.125 * controllerCount)).toFixed(4));
    const ticksToDecay = fuelCount === 1 ? Infinity : Math.ceil(recipeTime / decayProbability);

    const nowTick = Timer.getGlobalTick();

    // 电量槽进度条渲染
    if (data.subtype === 1) {
      // 正常工作状态，显示能量进度
      energyAcc = (energyAcc + power * (nowTick - lastTick)) % reactorEnergyCapacity;
      let energyPercentage = energyAcc / reactorEnergyCapacity;
      animatedEnergyBar.draw(graphics, energySlotX - 1, energySlotY - 1, energyPercentage);
    } else {
      // 电量满溢状态，直接显示满的能量槽
      animatedEnergyBar.drawFull(graphics, energySlotX - 1, energySlotY - 1);
    }

    // 热量槽进度渲染
    const heatRenderX = category.getWidth() / 2 - animatedHeatBar.getWidth() / 2;
    const heatRenderY = 166;
    heatAcc = (heatAcc + heatPerTick * (nowTick - lastTick)) % reactorHeatLimit;
    animatedHeatBar.draw(graphics, heatRenderX, heatRenderY, heatAcc / reactorHeatLimit);

    lastTick = nowTick;

    // 燃料棒数量文本
    drawCenteredString(
      graphics,
      Client.font,
      Text.literal(`F=${fuelCount}`),
      widgetX + widgetWidth / 2,
      widgetY + buttonHeight / 2 - Client.font.lineHeight / 2,
      0xffffff,
      true
    );

    // 控制棒数量文本
    drawCenteredString(
      graphics,
      Client.font,
      Text.literal(`C=${controllerCount}`),
      widgetX + widgetWidth / 2,
      widgetY + widgetHeight - buttonHeight / 2 - Client.font.lineHeight / 2,
      0xffffff,
      true
    );

    // 配方信息文本
    let wordX = 10;
    let wordY = 5;
    const wordLineHeight = Client.font.lineHeight + 2;
    const putWord = (component) => {
      drawWordWrap(graphics, Client.font, component, wordX, wordY, 200, 0x000000, false);
      wordY += wordLineHeight;
    };
    putWord(Text.translate('kubejs.jeiaddition.machine_total_energy', addThousandSeparator(totalEnergy)));
    putWord(Text.translate('kubejs.jeiaddition.machine_power', addThousandSeparator(power)));
    putWord(Text.translate('kubejs.jeiaddition.machine_recipe_time', addThousandSeparator(recipeTime)));
    if (data.subtype === 1) {
      putWord(
        Text.translate(
          'kubejs.jeiaddition.machine_energy_capacity',
          addThousandSeparator(reactorEnergyCapacity)
        )
      );
      putWord(
        Text.translate(
          'kubejs.jeiaddition.covariant_reactor.energy_full',
          addThousandSeparator(ticksEnergyFull),
          addThousandSeparator(cyclesEnergyFull)
        )
      );
    }
    putWord(
      Text.translate('kubejs.jeiaddition.covariant_reactor.heat_rate', addThousandSeparator(heatPerTick))
    );
    putWord(
      Text.translate(
        'kubejs.jeiaddition.covariant_reactor.heat_total',
        addThousandSeparator(totalHeat),
        heatPercentage.toString()
      )
    );
    putWord(
      Text.translate(
        'kubejs.jeiaddition.covariant_reactor.heat_limit',
        addThousandSeparator(reactorHeatLimit)
      )
    );
    putWord(
      Text.translate(
        'kubejs.jeiaddition.covariant_reactor.meltdown_time',
        addThousandSeparator(ticksHeatFull),
        addThousandSeparator(cyclesHeatFull)
      )
    );
    putWord(
      Text.translate(
        'kubejs.jeiaddition.covariant_reactor.decay_probability',
        parseFloat((decayProbability * 100).toFixed(2)).toString(),
        isFinite(ticksToDecay) ? addThousandSeparator(ticksToDecay) : 'Inf'
      )
    );

    matrixStack.pushPose();
    matrixStack.translate(62, 147, 50);

    // 渲染轴旋转
    matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5));
    matrixStack.mulPose($Axis.YP.rotationDegrees(22.5));

    const scale = 22;
    const fuelId = 'kubejs:bronze_fuel_rod';
    const controllerId = 'kubejs:carbon_electrode';
    const brassId = 'create:brass_block';

    // 状态机逻辑
    switch (state) {
      // 当前处于静态状态
      case STATE.IDLE:
        {
          // 渲染当前场景
          drawStaticScene(graphics, currScene, fuelId, controllerId, 0, 0, 0, scale);

          // 如果有待切换的场景
          if (!!pendingScene) {
            // 切换到过渡状态，加载下一个场景，重置计时器
            loadPendingScene();
            state = STATE.TRANSFORM;
            break;
          }
          // 否则若超过了配方时间
          if (timer.getElapsedTicks() > recipeTime) {
            // 若概率测试为 1
            if (bernoulli(decayProbability)) {
              // 发生衰变事件
              state = STATE.DECAY;
            }
            timer.restart();
            break;
          }
        }
        break;
      // 当前处于动画过渡状态
      case STATE.TRANSFORM:
        {
          // 计算过渡进度
          let progress = timer.getElapsedTicks() / transformDuration;
          let p = clamp(progress, 0, 1);
          // 渲染过渡动画
          drawAnimatedScene(graphics, currScene, nextScene, p, fuelId, controllerId, 0, 0, 0, scale);

          // 若过渡已完成
          if (progress > 1) {
            // 当前场景真正切换到下一个场景
            currScene = nextScene;

            // 若还有待切换的场景
            if (!!pendingScene) {
              // 继续进行过渡，加载下一个场景，重置计时器
              loadPendingScene();
            } else {
              // 否则回到静态状态
              state = STATE.IDLE;
              timer.restart();
            }
          }
        }
        break;
      // 当前处于衰变状态
      case STATE.DECAY:
        {
          // 渲染衰变场景
          drawStaticScene(graphics, currScene, brassId, controllerId, 0, 0, 0, scale);

          // 若持续时间已超过衰变恢复冷却时间
          if (timer.getElapsedTicks() > decayCooldown) {
            // 回到静态状态
            state = STATE.IDLE;
            timer.restart();
          }
        }
        break;
    }

    matrixStack.popPose();
  };

  /**
   * @param {Internal.CustomJSRecipe} recipe
   * @param {number} mouseX
   * @param {number} mouseY
   * @param {Internal.InputConstants$Key} input
   * @returns
   */
  this.handleInput = (recipe, mouseX, mouseY, input) => {
    return (
      fuelMinusButton.handleInput(recipe, mouseX, mouseY, input) ||
      fuelPlusButton.handleInput(recipe, mouseX, mouseY, input) ||
      controllerMinusButton.handleInput(recipe, mouseX, mouseY, input) ||
      controllerPlusButton.handleInput(recipe, mouseX, mouseY, input)
    );
  };

  // tooltip 显示
  const fuelCountTooltip = new StaticRectengularTooltip(
    widgetX + buttonWidth,
    widgetY,
    widgetWidth - 2 * buttonWidth,
    buttonHeight
  ).addTranslate('kubejs.jeiaddition.covariant_reactor.fuel_count');

  const controllerCountTooltip = new StaticRectengularTooltip(
    widgetX + buttonWidth,
    widgetY + widgetHeight - buttonHeight,
    widgetWidth - 2 * buttonWidth,
    buttonHeight
  ).addTranslate('kubejs.jeiaddition.covariant_reactor.controller_count');

  const powerInfoTooltip = new MutableRectengularTooltip(
    10,
    5,
    70,
    3 * (Client.font.lineHeight + 2)
  ).setTooltipCallback((tooltip, recipe) => {
    const data = recipe.recipeData;
    tooltip.add(Text.literal(data.powerFormula));
    if (data.subtype === 1) {
      tooltip.add(Text.translate('kubejs.jeiaddition.floor_explain'));
      tooltip.add(Text.translate('kubejs.jeiaddition.exponential_explain'));
    }
  });

  const heatInfoTooltip = new MutableRectengularTooltip(
    10,
    60,
    130,
    3 * (Client.font.lineHeight + 2)
  ).setTooltipCallback((tooltip, recipe) => {
    const data = recipe.recipeData;
    tooltip.add(Text.literal(data.heatFormula));
    tooltip.add(Text.translate('kubejs.jeiaddition.floor_explain'));
    tooltip.add(Text.translate('kubejs.jeiaddition.exponential_explain'));
  });

  const decayInfoTooltip = new StaticRectengularTooltip(10, 100, 130, Client.font.lineHeight + 4)
    .addTranslate('kubejs.jeiaddition.covariant_reactor.decay_explain1')
    .addLiteral('P(A) = 0.025 * (1 - 0.125 * C)')
    .addTranslate('kubejs.jeiaddition.covariant_reactor.decay_explain2');

  const machineInfoTooltip = new StaticRectengularTooltip(30, 120, 90, 40)
    .addTranslate('kubejs.jeiaddition.covariant_reactor.machine1')
    .addTranslate('kubejs.jeiaddition.covariant_reactor.machine2')
    .addTranslate('kubejs.jeiaddition.covariant_reactor.machine3')
    .addTranslate('kubejs.jeiaddition.covariant_reactor.machine4');

  // 处理 tooltip 显示
  this.handleTooltip = (tooltip, recipe, recipeSlotsView, mouseX, mouseY) => {
    const data = recipe.recipeData;

    fuelCountTooltip.handleTooltip(tooltip, mouseX, mouseY);
    controllerCountTooltip.handleTooltip(tooltip, mouseX, mouseY);
    powerInfoTooltip.handleTooltip(tooltip, recipe, mouseX, mouseY);

    if (data.subtype === 1) {
      heatInfoTooltip.handleTooltip(tooltip, recipe, mouseX, mouseY);
      decayInfoTooltip.handleTooltip(tooltip, mouseX, mouseY);
    } else {
      heatInfoTooltip.handleTooltip(tooltip, recipe, mouseX, mouseY + 20);
      decayInfoTooltip.handleTooltip(tooltip, mouseX, mouseY + 20);
    }
    machineInfoTooltip.handleTooltip(tooltip, mouseX, mouseY);
  };
}

JsonIO