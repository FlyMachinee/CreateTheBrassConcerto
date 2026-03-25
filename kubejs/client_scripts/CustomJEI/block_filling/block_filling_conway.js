JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'block_filling_conway');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('create:spout'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'block_filling_conway');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  // global.blockFillingConwayRecipes 在 startup_scripts/recipes/conway.js 中定义
  // recipeData 格式：
  // {
  //   innerId: number,
  //   medium: Object, // 可以是方块id，列表，标签
  //   fluid: string,
  //   fluidAmount: number,
  //   cap: string,
  //   stem: string,
  //   ratio: number,
  // }
  global.blockFillingConwayRecipes.forEach((recipe) => {
    recipeBuilder.add(recipe);
  });
});

/**
 * 生成一个随机的3x3x3张量，元素为0、1、2
 *
 * 0: air, 1: cap, 2: stem
 */
const generateRandom3x3x3Tensor = () => {
  let tensor = [];
  for (let i = 0; i < 3; i++) {
    let matrix = [];
    for (let j = 0; j < 3; j++) {
      let row = [];
      for (let k = 0; k < 3; k++) {
        row.push(randBetween(0, 2));
      }
      matrix.push(row);
    }
    tensor.push(matrix);
  }
  return tensor;
};

/**
 * 根据当前张量和比例计算下一张量，即模拟一步生命游戏
 * @param {Array} tensor 3x3x3张量
 * @param {number} idealRatio 比例
 * @returns 下一状态的3x3x3张量，以及张量是否发生变化
 */
const getNextTensor = (tensor, idealRatio) => {
  // 计算邻居菌盖和菌柄数量
  const countNeighbors = (x, y, z) => {
    let capCount = 0;
    let stemCount = 0;
    for (let i = Math.max(0, x - 1); i <= Math.min(2, x + 1); i++) {
      for (let j = Math.max(0, y - 1); j <= Math.min(2, y + 1); j++) {
        for (let k = Math.max(0, z - 1); k <= Math.min(2, z + 1); k++) {
          if (tensor[i][j][k] === 1) capCount++;
          if (tensor[i][j][k] === 2) stemCount++;
        }
      }
    }
    // 排除自身
    if (tensor[x][y][z] === 1) capCount--;
    else if (tensor[x][y][z] === 2) stemCount--;
    return { capCount: capCount, stemCount: stemCount };
  };

  // 计算下一状态张量
  let changed = false;

  let nextTensor = [];
  for (let i = 0; i < 3; i++) {
    let matrix = tensor[i];
    let nextMatrix = [];
    for (let j = 0; j < 3; j++) {
      let row = matrix[j];
      let nextRow = [];
      for (let k = 0; k < 3; k++) {
        let ret = countNeighbors(i, j, k);
        let capCount = ret.capCount;
        let stemCount = ret.stemCount;
        let totalCount = capCount + stemCount;
        let ratio = stemCount === 0 ? idealRatio + 1 : Math.round(capCount / stemCount);

        switch (row[k]) {
          case 0: // air
            if (5 < totalCount && totalCount < 13) {
              changed = true;
              if (capCount > stemCount) {
                nextRow.push(bernoulli(0.75) ? 1 : 2); // 75%概率生成菌盖
              } else if (stemCount > capCount) {
                nextRow.push(bernoulli(0.25) ? 1 : 2); // 25%概率生成菌盖
              } else {
                nextRow.push(2);
              }
            } else {
              nextRow.push(0);
            }
            break;
          case 1: // cap
            if (totalCount < 3 || totalCount > 8) {
              // 死亡
              nextRow.push(0);
              changed = true;
            } else if (ratio > idealRatio && bernoulli(0.5)) {
              // 变为菌柄
              nextRow.push(2);
              changed = true;
            } else {
              nextRow.push(1);
            }
            break;
          case 2: // stem
            if (totalCount < 3 || totalCount > 8) {
              // 死亡
              nextRow.push(0);
              changed = true;
            } else if (ratio < idealRatio && bernoulli(0.5)) {
              // 变为菌盖
              nextRow.push(1);
              changed = true;
            } else {
              nextRow.push(2);
            }
            break;
        }
      }
      nextMatrix.push(nextRow);
    }
    nextTensor.push(nextMatrix);
  }

  return { nextTensor: nextTensor, changed: changed };
};

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:block_filling_conway', (category) => {
    // 添加上方标题
    category.title(Text.translate('kubejs.jeiaddition.category.block_filling_conway.title'));

    // 添加上方小图标
    category.icon(
      new $DoubleItemIcon(
        () => Item.of('create:spout'),
        () => Item.of('minecraft:red_mushroom_block')
      )
    );

    category.setWidth(178);
    category.setHeight(160);
    category.background(guiHelper.createBlankDrawable(0, 0));

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      const data = recipe.recipeData;

      // 媒介方块
      // 暂时不考虑多媒介方块的情况
      try {
        layoutBuilder
          .addSlot($RecipeIngredientRole.CATALYST, 21, 45)
          .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
          .addTooltipCallback((slotView, builder) => {
            builder.add(1, Text.translate('kubejs.jeiaddition.not_consumed_medium').color(0xfca800));
          })
          .addItemStack(Item.of(data.medium));
      } catch (e) {
        console.error(`[Block Filling Conway] Invalid medium: ${data.medium}`);
        return;
      }

      // 输入流体槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, 21, 7)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .setFluidRenderer(data.fluidAmount * 2, false, 16, 16) // Capacity, show capacity, width, height
        .addFluidStack(data.fluid, data.fluidAmount);

      // 输出物品槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.OUTPUT, 130, 130)
        .setBackground($CreateRecipeCategory.getRenderedSlot(0), -1, -1)
        .addItemStack(Item.of(data.cap));
      layoutBuilder
        .addSlot($RecipeIngredientRole.OUTPUT, 151, 130)
        .setBackground($CreateRecipeCategory.getRenderedSlot(0), -1, -1)
        .addItemStack(Item.of(data.stem));

      // 隐形原料槽
      layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.INPUT).addItemStack(Item.of(data.cap));
      layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.INPUT).addItemStack(Item.of(data.stem));
    });

    // 配方动画持久数据
    // key: recipe innerId, value: { cycleCount, tensor, nextTensor, identicalCount }
    const animatedData = new Map();
    const buttonX = 133.5;
    const buttonY = 10;
    const buttonWidth = 30;
    const buttonHeight = 14;
    const allowIdenticalCount = 3;
    const clickButton = new ClickButton(
      buttonX,
      buttonY,
      buttonWidth,
      buttonHeight,
      Text.translate('kubejs.jeiaddition.reset')
    );

    clickButton.setEnableCallback((recipe) => animatedData.has(recipe.recipeData.innerId));
    clickButton.onClick((recipe) => {
      // 强制设置张量为重复状态，在下一个周期开始时将重置
      animatedData.get(recipe.recipeData.innerId).identicalCount = allowIdenticalCount;
      return true;
    });

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      const recipeData = recipe.recipeData;
      const scale = 20;
      const tick = $AnimationTickHolder.getRenderTime();
      const cycleCount = Math.floor(tick / 20);
      const cycleProgress = tick % 20;
      let recipeState = animatedData.get(recipeData.innerId);

      // 动画数据初始化
      if (!recipeState) {
        let tensor = generateRandom3x3x3Tensor();
        let ret = getNextTensor(tensor, recipeData.ratio);
        recipeState = {
          cycleCount: 0,
          tensor: tensor,
          nextTensor: ret.nextTensor,
          identicalCount: ret.changed ? 0 : 1,
        };
        animatedData.set(recipeData.innerId, recipeState);
      }

      // 渲染重置图标
      // 当张量连续多次未变化时显示
      if (recipeState.identicalCount >= allowIdenticalCount && cycleProgress >= 10) {
        $AllIcons.I_SEQ_REPEAT.render(graphics, buttonX - 20, buttonY + buttonHeight / 2 - 8);
      }

      // 渲染重置按钮
      clickButton.draw(recipe, graphics, mouseX, mouseY);

      // 比例文本
      drawRightAlignedString(
        graphics,
        Client.font,
        Text.translate('kubejs.jeiaddition.block_filling_conway.desc1', String(recipeData.ratio)),
        170,
        53,
        0xffffff,
        true
      );

      // 下箭头
      $AllGuiTextures.JEI_DOWN_ARROW.render(graphics, 135, 110);

      const matrixStack = graphics.pose();
      matrixStack.pushPose();

      // 渲染像素偏移
      matrixStack.translate(50, 23, 100);

      // 渲染轴旋转
      matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5));
      matrixStack.mulPose($Axis.YP.rotationDegrees(22.5));

      // 渲染注液器
      drawControlledAnimatedSpout(
        graphics,
        $AnimatedKinetics.DEFAULT_LIGHTING,
        recipeData.fluid,
        0,
        0,
        0,
        scale,
        tick,
        (tick) => {
          const cycleProgress = (tick % 20) / 20;
          const squeeze = JavaMath.sin(cycleProgress * JavaMath.PI);
          return squeeze;
        }
      );

      // 渲染媒介方块
      $AnimatedKinetics
        .defaultBlockElement(Block.getBlock(recipeData.medium).defaultBlockState())
        .atLocal(0, 2, 0)
        .scale(scale)
        .render(graphics);

      // 更新动画数据
      if (cycleCount !== recipeState.cycleCount) {
        // 进入新周期，更新张量状态
        recipeState.cycleCount = cycleCount;

        if (recipeState.identicalCount < allowIdenticalCount) {
          // 张量未连续 x 次相同，继续更新张量
          let ret = getNextTensor(recipeState.nextTensor, recipeData.ratio);
          let nextTensor = ret.nextTensor;
          let changed = ret.changed;
          recipeState.tensor = recipeState.nextTensor;
          recipeState.nextTensor = nextTensor;
          recipeState.identicalCount = changed ? 0 : recipeState.identicalCount + 1;
        } else {
          // 连续 x 次张量未变化，认为已经稳定
          // 如果张量不再变化，则重置为随机张量
          let tensor = generateRandom3x3x3Tensor();
          let ret = getNextTensor(tensor, recipeData.ratio);
          let nextTensor = ret.nextTensor;
          let changed = ret.changed;
          recipeState.tensor = tensor;
          recipeState.nextTensor = nextTensor;
          recipeState.identicalCount = changed ? 0 : 1;
        }
      }

      // 渲染方块
      const tensorToRender =
        cycleProgress < 10
          ? animatedData.get(recipeData.innerId).tensor
          : animatedData.get(recipeData.innerId).nextTensor;
      for (let i = 0; i < 3; i++) {
        let matrix = tensorToRender[i];
        for (let j = 0; j < 3; j++) {
          let row = matrix[j];
          for (let k = 0; k < 3; k++) {
            let cellValue = row[k];
            if (cellValue === 0) continue; // 空气不渲染

            let blockId = cellValue === 1 ? recipeData.cap : recipeData.stem;

            $AnimatedKinetics
              .defaultBlockElement(Block.getBlock(blockId).defaultBlockState())
              .atLocal(k - 1, 6 - i, j - 1)
              .scale(scale)
              .render(graphics);
          }
        }
      }

      matrixStack.popPose();
    });

    // 处理输入事件
    category.setInputHandler((recipe, mouseX, mouseY, input) => {
      return clickButton.handleInput(recipe, mouseX, mouseY, input);
    });
  });
});
