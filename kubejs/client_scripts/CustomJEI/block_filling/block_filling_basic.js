JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'block_filling_basic');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('create:spout'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'block_filling_basic');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  // global.blockFillingBasicRecipes 在 startup_scripts/recipes/block_filling.js 中定义
  global.blockFillingBasicRecipes.forEach((obj) =>
    recipeBuilder.add({
      input_fluid: obj.input_fluid,
      input_amount: obj.input_amount,
      input_blocks: obj.input_blocks,
      output_blocks: obj.output_blocks,
    })
  );
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:block_filling_basic', (category) => {
    // 添加上方标题
    category.title(Text.translate('kubejs.jeiaddition.category.block_filling_basic.title'));

    // 添加上方小图标
    category.icon(
      new $DoubleItemIcon(
        () => Item.of('create:spout'),
        () => Item.of('create:brass_block')
      )
    );

    category.setWidth(178);
    category.setHeight(70);
    category.background(guiHelper.createBlankDrawable(0, 0));

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      const data = recipe.recipeData;

      // 输入流体槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, 21, 10)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .setFluidRenderer(data.input_amount, false, 16, 16) // Capacity, show capacity, width, height
        .addFluidStack(data.input_fluid, data.input_amount);

      // 媒介方块
      let input = Ingredient.of(data.input_blocks[0]);
      for (let i = 1; i < data.input_blocks.length; i++) {
        input = input.or(data.input_blocks[i]);
      }

      layoutBuilder
        .addSlot($RecipeIngredientRole.CATALYST, 21, 45)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .addTooltipCallback((slotView, builder) => {
          builder.add(1, Text.translate('kubejs.jeiaddition.transform_block').color(0xfca800));
        })
        .addIngredients(input);

      // 输出物品槽
      const p = 1 / data.output_blocks.length;

      for (let i = 0; i < data.output_blocks.length; i++) {
        let row = i >> 1;
        let col = i & 1;
        layoutBuilder
          .addSlot($RecipeIngredientRole.OUTPUT, 110 + col * 20, 25 + row * 20)
          .setBackground($CreateRecipeCategory.getRenderedSlot(p), -1, -1)
          .addTooltipCallback((slotView, builder) => {
            if (data.output_blocks.length > 1) {
              // 百分比字符串
              const p_str = (p * 100).toFixed(1).replace(/\.0$/, '');

              builder.add(1, Text.translate('kubejs.jeiaddition.probability', p_str).color(0xfca800));
            }
          })
          .addItemStack(Item.of(data.output_blocks[i]));
      }
    });

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      const data = recipe.recipeData;

      // 圆形阴影
      $AllGuiTextures.JEI_SHADOW.render(graphics, 74 - $AllGuiTextures.JEI_SHADOW.width / 2, 55);

      // 下箭头
      $AllGuiTextures.JEI_DOWN_ARROW.render(graphics, category.getWidth() / 2 + 15, 4);

      const matrixStack = graphics.pose();
      matrixStack.pushPose();

      // 渲染像素偏移
      matrixStack.translate(60, 22, 100);

      // 渲染轴旋转
      matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5));
      matrixStack.mulPose($Axis.YP.rotationDegrees(22.5));

      const scale = 20;
      const tick = $AnimationTickHolder.getRenderTime();

      // 渲染注液器
      drawControlledAnimatedSpout(
        graphics,
        $AnimatedKinetics.DEFAULT_LIGHTING,
        data.input_fluid,
        0,
        0,
        0,
        scale,
        tick,
        (tick) => {
          const cycle = tick % 40;
          const squeeze = cycle >= 5 && cycle < 25 ? JavaMath.sin(((cycle - 5) / 20) * JavaMath.PI) : 0;
          return squeeze;
        }
      );

      const current_cycle = Math.floor(tick / 40);
      const total_cases = data.input_blocks.length * data.output_blocks.length;
      let index = current_cycle % total_cases;

      // 渲染方块
      if (total_cases > 0) {
        let input_idx = Math.floor(index / data.output_blocks.length);
        let output_idx = Math.floor(index % data.output_blocks.length);

        let input_block = data.input_blocks[input_idx];
        let output_block = data.output_blocks[output_idx];

        let cycle = tick % 40;
        if (input_block && output_block) {
          $AnimatedKinetics
            .defaultBlockElement(Block.getBlock(cycle < 15 ? input_block : output_block).defaultBlockState())
            .atLocal(0, 2, 0)
            .scale(scale)
            .render(graphics);
        }
      }

      matrixStack.popPose();
    });
  });
});
