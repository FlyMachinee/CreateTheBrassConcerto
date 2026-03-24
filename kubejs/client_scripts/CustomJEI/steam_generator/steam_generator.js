JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'steam_generator');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('kubejs:steam_generator'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'steam_generator');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  recipeBuilder.add({
    typeId: 0,
    power: (steam, water) => Math.floor((540 * steam) / (water + 1)),
    formula: 'P = floor(540 * S / (W + 1)) FE/t',
  });
  recipeBuilder.add({
    typeId: 1,
    power: (steam, water) => 12000 * steam,
    formula: 'P = 12000 * S FE/t',
  });
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:steam_generator', (category) => {
    // 添加上方标题
    category.title(Text.translate('block.kubejs.steam_generator'));

    // 添加上方小图标
    category.iconSupplier(() => {
      return guiHelper.createDrawableItemStack(Item.of('kubejs:steam_generator'));
    });

    category.setWidth(190);
    category.setHeight(160);
    category.background(guiHelper.createBlankDrawable(0, 0));

    // 动画状态
    let steamCount = 1;
    let waterCount = 0;
    let steamBlocks = [0];
    let waterBlocks = [];

    // 配方槽参数
    const energySlotWidth = $TextureSizeHelper.getTextureWidth(
      $EnergyGuiElement.BASE_ENERGY_STORAGE_EMPTY_TEXTURE
    );
    const energySlotHeight = $TextureSizeHelper.getTextureHeight(
      $EnergyGuiElement.BASE_ENERGY_STORAGE_EMPTY_TEXTURE
    );
    const recipeIOGapWidth = 90;
    const recipeInputSlotX = (category.getWidth() - 17 - recipeIOGapWidth - energySlotWidth + 1) / 2;
    const recipeInputSlotY = 10;
    const recipeOutputSlotX = recipeInputSlotX + recipeIOGapWidth;
    const recipeOutputSlotY = recipeInputSlotY + 17 - 8;
    const energySlotX = recipeOutputSlotX + 18;
    const energySlotY = recipeOutputSlotY + 8 - energySlotHeight / 2;

    // 配方箭头
    const recipeTime = 60;
    const recipeArrow = guiHelper.createAnimatedRecipeArrow(recipeTime);

    // 配方箭头参数
    const recipeArrowX = (recipeInputSlotX + 2 * 18 + recipeOutputSlotX - 3) / 2 - recipeArrow.getWidth() / 2;
    const recipeArrowY = recipeInputSlotY + 17 - recipeArrow.getHeight() / 2;

    // 组件参数
    const widgetWidth = 40;
    const widgetHeight = 22;
    const widgetX = category.getWidth() / 2 - widgetWidth / 2;
    const widgetY = 127;
    const buttonWidth = 9;
    const buttonHeight = 9;

    // 配方信息参数
    const recipeInfoX = recipeInputSlotX;
    const recipeInfoY = recipeInputSlotY + 2 * 18 + 4;

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      const data = recipe.recipeData;

      // 能量输出
      const energyElement = new $EnergyGuiElement(
        new $AbstractGuiElementProperties(0, 0, energySlotWidth, energySlotHeight, 0, null, null, null, null),
        $EnergyGuiElement.BASE_ENERGY_STORAGE_EMPTY_TEXTURE,
        $EnergyGuiElement.BASE_ENERGY_STORAGE_FILLED_TEXTURE,
        false
      );
      layoutBuilder
        .addSlot($RecipeIngredientRole.OUTPUT, energySlotX, energySlotY)
        .setCustomRenderer($CustomIngredientTypes.ENERGY, new $EnergyJEIIngredientRenderer(energyElement))
        .addIngredient($CustomIngredientTypes.ENERGY, new $Energy(42, 1, true))
        .addTooltipCallback((recipeSlotView, tooltip) => {
          // 配方信息计算
          const power = data.power(steamCount, waterCount);
          const totalEnergy = recipeTime * power;

          tooltip.set(
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

      // 流体输入
      // 润滑油
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, recipeInputSlotX + 18, recipeInputSlotY + 17 - 8)
        .setFluidRenderer(25, false, 16, 16)
        .addFluidStack('kubejs:lube_oil', 25);
      // 蒸汽
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, recipeInputSlotX, recipeInputSlotY)
        .setFluidRenderer(1000, false, 16, 16)
        .addFluidStack(data.typeId === 0 ? 'kubejs:pressurized_steam' : 'kubejs:superheated_steam', 1000)
        .addTooltipCallback((recipeSlotView, tooltip) => {
          let index = isNaN(parseInt(tooltip.get(1).getString(1))) ? 2 : 1;
          tooltip.set(index, Text.literal(`${steamCount},000 mB`).color(0xa8a8a8));
        });
      // 水
      if (data.typeId === 0) {
        layoutBuilder
          .addSlot($RecipeIngredientRole.INPUT, recipeInputSlotX, recipeInputSlotY + 18)
          .setSlotName('water_input')
          .setFluidRenderer(1000, false, 16, 16)
          .addFluidStack('minecraft:water', 1000)
          .addTooltipCallback((recipeSlotView, tooltip) => {
            let index = isNaN(parseInt(tooltip.get(1).getString(1))) ? 2 : 1;
            tooltip.set(index, Text.literal(`${waterCount},000 mB`).color(0xa8a8a8));
          });
      }

      // 流体输出
      if (data.typeId === 0) {
        layoutBuilder
          .addSlot($RecipeIngredientRole.OUTPUT, recipeOutputSlotX, recipeOutputSlotY)
          .setFluidRenderer(1000, false, 16, 16)
          .addFluidStack('minecraft:water', 1000)
          .addTooltipCallback((recipeSlotView, tooltip) => {
            let index = isNaN(parseInt(tooltip.get(1).getString(1))) ? 2 : 1;
            tooltip.set(index, Text.literal(`${steamCount},000 mB`).color(0xa8a8a8));
          });
      }
    });

    const chooseBlock = () => {
      const steamRet = chooseN([0, 1, 2, 3, 4, 5, 6, 7], steamCount);
      steamBlocks = steamRet.chosen.sort();
      const waterRet = chooseN(steamRet.remaining, waterCount);
      waterBlocks = waterRet.chosen.sort();
    };

    // 按钮组左上角
    const steamMinusButton = new ClickButton(widgetX, widgetY, buttonWidth, buttonHeight, Text.literal('-'))
      .onClick(() => {
        steamCount--;
        chooseBlock();
        return true;
      })
      .setEnableCallback(() => steamCount > 1);

    // 按钮组右上角
    const steamPlusButton = new ClickButton(
      widgetX + widgetWidth - buttonWidth,
      widgetY,
      buttonWidth,
      buttonHeight,
      Text.literal('+')
    )
      .onClick(() => {
        steamCount++;
        if (steamCount + waterCount > 8) {
          waterCount--;
        }
        chooseBlock();
        return true;
      })
      .setEnableCallback(() => steamCount + waterCount < 8 || waterCount > 0);

    // 按钮组左下角
    const waterMinusButton = new ClickButton(
      widgetX,
      widgetY + widgetHeight - buttonHeight,
      buttonWidth,
      buttonHeight,
      Text.literal('-')
    )
      .onClick(() => {
        waterCount--;
        chooseBlock();
        return true;
      })
      .setEnableCallback(() => waterCount > 0);

    // 按钮组右下角
    const waterPlusButton = new ClickButton(
      widgetX + widgetWidth - buttonWidth,
      widgetY + widgetHeight - buttonHeight,
      buttonWidth,
      buttonHeight,
      Text.literal('+')
    )
      .onClick(() => {
        waterCount++;
        if (steamCount + waterCount > 8) {
          steamCount--;
        }
        chooseBlock();
        return true;
      })
      .setEnableCallback(() => steamCount + waterCount < 8 || steamCount > 1);

    // Internal.RecipeExtrasBuilder[]
    let recipeExtrasBuilders = [];

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      const matrixStack = graphics.pose();
      const data = recipe.recipeData;

      // 水输入槽显示覆盖
      // 这是邪道方法，不要学
      const extraBuilder = recipeExtrasBuilders[data.typeId];
      if (!!extraBuilder) {
        if (data.typeId === 0) {
          if (waterCount === 0) {
            extraBuilder.getRecipeSlots().findSlotByName('water_input').get().createDisplayOverrides();
          } else {
            extraBuilder.getRecipeSlots().findSlotByName('water_input').get().clearDisplayOverrides();
          }
        }
      }

      // 按钮渲染
      steamMinusButton.draw(recipe, graphics, mouseX, mouseY);
      steamPlusButton.draw(recipe, graphics, mouseX, mouseY);
      if (data.typeId === 0) {
        waterMinusButton.draw(recipe, graphics, mouseX, mouseY);
        waterPlusButton.draw(recipe, graphics, mouseX, mouseY);
      }

      // 流体槽背景渲染
      drawFluidSlotBackground(graphics, recipeInputSlotX, recipeInputSlotY);
      drawFluidSlotBackground(graphics, recipeInputSlotX, recipeInputSlotY + 18);
      drawFluidSlotBackground(graphics, recipeInputSlotX + 18, recipeInputSlotY + 17 - 8);
      drawFluidSlotBackground(graphics, recipeOutputSlotX, recipeOutputSlotY);

      // 配方箭头渲染
      recipeArrow.draw(graphics, recipeArrowX, recipeArrowY);
      recipeArrow.draw(graphics, recipeArrowX, 103);

      // 蒸汽方块数量文本渲染
      drawCenteredString(
        graphics,
        Client.font,
        Text.literal(`S=${steamCount}`),
        widgetX + widgetWidth / 2,
        widgetY + buttonHeight / 2 - Client.font.lineHeight / 2,
        0xffffff,
        true
      );

      // 水方块数量文本渲染
      if (data.typeId === 0) {
        drawCenteredString(
          graphics,
          Client.font,
          Text.literal(`W=${waterCount}`),
          widgetX + widgetWidth / 2,
          widgetY + widgetHeight - buttonHeight / 2 - Client.font.lineHeight / 2,
          0xffffff,
          true
        );
      }

      // 配方信息计算
      const power = data.power(steamCount, waterCount);
      const totalEnergy = recipeTime * power;

      // 配方信息文本
      const putWord = (component, x, y) => {
        drawWordWrap(graphics, Client.font, component, x, y, 160, 0x000000, false);
      };
      const recipeInfoLineHeight = Client.font.lineHeight + 2;
      putWord(
        Text.translate('kubejs.jeiaddition.machine_total_energy', addThousandSeparator(totalEnergy)),
        recipeInfoX,
        recipeInfoY
      );
      putWord(
        Text.translate('kubejs.jeiaddition.machine_power', addThousandSeparator(power)),
        recipeInfoX,
        recipeInfoY + recipeInfoLineHeight
      );
      putWord(
        Text.translate('kubejs.jeiaddition.machine_recipe_time', recipeTime.toString()),
        recipeInfoX,
        recipeInfoY + 2 * recipeInfoLineHeight
      );

      // 单场景渲染函数
      const scale = 12;
      const renderScene = (x, y, steamId, waterId) => {
        matrixStack.pushPose();

        // 渲染像素偏移
        matrixStack.translate(x, y, 50);

        // 渲染轴旋转
        matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5));
        matrixStack.mulPose($Axis.YP.rotationDegrees(22.5));

        const renderBlock = (blockId, x, y, z) => {
          $GuiGameElement['of(net.minecraft.world.level.block.state.BlockState)'](
            Block.getBlock(blockId).defaultBlockState()
          )
            .scale(scale)
            .atLocal(x, y, z)
            .lighting($AnimatedKinetics.DEFAULT_LIGHTING)
            .render(graphics);
        };

        // 蒸汽发电机本体
        drawCustomMachineryMachine(graphics, 'dut:steam_generator', 'kubejs:steam_generator', 0, 0, 0, scale);

        // 外围固体方块
        let dx1 = [2, 2, 2, 1, 0, -1, -2, -2, -2, -1, 0, 1];
        let dy1 = [-1, 0, 1, 2, 2, 2, 1, 0, -1, -2, -2, -2];
        for (let i = 0; i < 12; ++i) {
          renderBlock(
            (((dx1[i] + dy1[i]) % 2) + 2) % 2 === 1
              ? 'minecraft:black_concrete'
              : 'minecraft:yellow_concrete',
            dx1[i],
            dy1[i],
            0
          );
        }

        // 液体
        let dy2 = [-1, -1, -1, 0, 0, 1, 1, 1];
        let dx2 = [-1, 0, 1, -1, 1, -1, 0, 1];
        const renderBlocks = (idxs, blockId) => {
          idxs.forEach((idx) => renderBlock(blockId, dx2[idx], dy2[idx], 0));
        };
        renderBlocks(steamBlocks, steamId);
        renderBlocks(waterBlocks, waterId);
        matrixStack.popPose();
      };

      // 渲染左右两个场景
      if (data.typeId === 0) {
        renderScene(category.getWidth() / 2 - 55 - 9, 125, 'kubejs:pressurized_steam', 'minecraft:water');
        renderScene(category.getWidth() / 2 + 55 - 9, 125, 'minecraft:water', 'minecraft:air');
      } else {
        renderScene(category.getWidth() / 2 - 55 - 9, 125, 'kubejs:superheated_steam', 'minecraft:air');
        renderScene(category.getWidth() / 2 + 55 - 9, 125, 'minecraft:air', 'minecraft:air');
      }
    });

    // 处理输入事件
    category.setInputHandler((recipe, mouseX, mouseY, input) => {
      if (recipe.recipeData.typeId === 0) {
        return (
          steamMinusButton.handleInput(recipe, mouseX, mouseY, input) ||
          steamPlusButton.handleInput(recipe, mouseX, mouseY, input) ||
          waterMinusButton.handleInput(recipe, mouseX, mouseY, input) ||
          waterPlusButton.handleInput(recipe, mouseX, mouseY, input)
        );
      } else {
        return (
          steamMinusButton.handleInput(recipe, mouseX, mouseY, input) ||
          steamPlusButton.handleInput(recipe, mouseX, mouseY, input)
        );
      }
    });

    // tooltip 显示
    const steamCountTooltip = new MutableRectengularTooltip(
      widgetX + buttonWidth,
      widgetY,
      widgetWidth - 2 * buttonWidth,
      buttonHeight
    ).setTooltipCallback((tooltip, recipe) => {
      const data = recipe.recipeData;
      if (data.typeId === 0) {
        tooltip.add(Text.translate('kubejs.jeiaddition.steam_generator.steam_count', steamCount));
      } else {
        tooltip.add(Text.translate('kubejs.jeiaddition.steam_generator.steam_count1', steamCount));
      }
    });

    const waterCountTooltip = new StaticRectengularTooltip(
      widgetX + buttonWidth,
      widgetY + widgetHeight - buttonHeight,
      widgetWidth - 2 * buttonWidth,
      buttonHeight
    ).addTranslate('kubejs.jeiaddition.steam_generator.water_count');

    const recipeInfoTooltip = new MutableRectengularTooltip(
      recipeInfoX,
      recipeInfoY,
      70,
      3 * (Client.font.lineHeight + 2)
    ).setTooltipCallback((tooltip, recipe) => {
      const data = recipe.recipeData;
      tooltip.add(Text.literal(data.formula));
      if (data.typeId === 0) {
        tooltip.add(Text.translate('kubejs.jeiaddition.floor_explain'));
      }
    });

    const gasDimension = ['minecraft:overworld', 'dut:slimeria', 'dut:slimeria_orbit', 'minecraft:the_end'];
    const tooltipCallback = (tooltip, recipe) => {
      if (recipe.recipeData.typeId === 0) {
        for (let i = 1; i <= 5; ++i) {
          tooltip.add(Text.translate(`kubejs.jeiaddition.steam_generator.machine${i}`));
        }
        gasDimension.forEach((dimension) => {
          tooltip.add(Text.literal(`* ${dimension}`));
        });
      } else {
        tooltip.add(Text.translate('kubejs.jeiaddition.steam_generator.machine1_1'));
        tooltip.add(Text.translate('kubejs.jeiaddition.steam_generator.machine3'));
        tooltip.add(Text.translate('kubejs.jeiaddition.steam_generator.machine4'));
      }
    };
    const machineTooltip1 = new MutableRectengularTooltip(10, 90, 60, 60);
    const machineTooltip2 = new MutableRectengularTooltip(120, 90, 60, 60);
    machineTooltip1.setTooltipCallback(tooltipCallback);
    machineTooltip2.setTooltipCallback(tooltipCallback);

    // 处理 tooltip 显示
    category.setTooltipHandlerOverride((tooltip, recipe, recipeSlotsView, mouseX, mouseY) => {
      steamCountTooltip.handleTooltip(tooltip, recipe, mouseX, mouseY);
      if (recipe.recipeData.typeId === 0) {
        waterCountTooltip.handleTooltip(tooltip, mouseX, mouseY);
      }
      recipeInfoTooltip.handleTooltip(tooltip, recipe, mouseX, mouseY);
      machineTooltip1.handleTooltip(tooltip, recipe, mouseX, mouseY);
      machineTooltip2.handleTooltip(tooltip, recipe, mouseX, mouseY);
    });

    category.setCreateRecipeExtrasHandler((builder, recipe, focuses) => {
      recipeExtrasBuilders[recipe.recipeData.typeId] = builder;
    });
  });
});
