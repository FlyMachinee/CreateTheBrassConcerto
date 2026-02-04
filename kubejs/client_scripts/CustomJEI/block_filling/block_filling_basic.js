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

const getBlockFillingBasicRecipe = (input_fluid, input_amount, input_blocks, output_blocks) => ({
  input_fluid: input_fluid,
  input_amount: input_amount,
  input_blocks: input_blocks,
  output_blocks: output_blocks,
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'block_filling_basic');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  // global.blockFillingBasicRecipes 在 startup_scripts/recipes/block_filling.js 中定义
  global.blockFillingBasicRecipes.forEach((obj) => {
    recipeBuilder.add(
      getBlockFillingBasicRecipe(
        obj.input_fluid,
        obj.input_amount,
        obj.input_blocks,
        obj.output_blocks
      )
    );
  });
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:block_filling_basic', (category) => {
    // 添加上方标题
    category.title(Text.translate('kubejs.jeiaddition.category.block_filling_basic.title'));

    // 添加上方小图标
    category.iconSupplier(() => {
      return new $DoubleItemIcon(
        () => Item.of('create:spout'),
        () => Item.of('create:brass_block')
      );
    });

    category.setWidth(178);
    category.setHeight(70);
    category.background(guiHelper.createBlankDrawable(0, 0));

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      // 输入流体槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, 21, 10)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .setFluidRenderer(recipe.recipeData.input_amount, false, 16, 16) // Capacity, show capacity, width, height
        .addFluidStack(recipe.recipeData.input_fluid, recipe.recipeData.input_amount);

      // 媒介方块
      let input = Ingredient.of(recipe.recipeData.input_blocks[0]);
      for (let i = 1; i < recipe.recipeData.input_blocks.length; i++) {
        input = input.or(recipe.recipeData.input_blocks[i]);
      }

      layoutBuilder
        .addSlot($RecipeIngredientRole.CATALYST, 21, 45)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        // .addItemStack(Item.of(recipe.recipeData.input_blocks[0]))
        .addIngredients(input)
        .addTooltipCallback((slotView, builder) => {
          builder.add(1, Text.translate('kubejs.jeiaddition.transform_block').color(0xfca800));
        });

      // 输出物品槽
      const p = 1 / recipe.recipeData.output_blocks.length;

      for (let i = 0; i < recipe.recipeData.output_blocks.length; i++) {
        let row = Math.floor(i / 2);
        let col = i % 2;
        layoutBuilder
          .addSlot($RecipeIngredientRole.OUTPUT, 110 + col * 20, 25 + row * 20)
          .setBackground($CreateRecipeCategory.getRenderedSlot(p), -1, -1)
          .addItemStack(Item.of(recipe.recipeData.output_blocks[i]))
          .addTooltipCallback((slotView, builder) => {
            if (recipe.recipeData.output_blocks.length > 1) {
              // 百分比字符串
              const p_str = (p * 100).toFixed(1).replace(/\.0$/, '');

              builder.add(
                1,
                Text.translate('kubejs.jeiaddition.probability', p_str).color(0xfca800)
              );
            }
          });
      }
    });

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {

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
        recipe.recipeData.input_fluid,
        0,
        0,
        0,
        scale,
        tick,
        (tick) => {
          const cycle = tick % 40;
          const squeeze =
            cycle >= 5 && cycle < 25 ? JavaMath.sin(((cycle - 5) / 20) * JavaMath.PI) : 0;
          return squeeze;
        }
      );

      const current_cycle = Math.floor(tick / 40);
      const total_cases = recipe.recipeData.input_blocks.length * recipe.recipeData.output_blocks.length;
      let index = current_cycle % total_cases;
      
      // 渲染方块
      if (total_cases > 0) {
        let input_idx = Math.floor(index / recipe.recipeData.output_blocks.length);
        let output_idx = Math.floor(index % recipe.recipeData.output_blocks.length);
        
        let input_block = recipe.recipeData.input_blocks[input_idx];
        let output_block = recipe.recipeData.output_blocks[output_idx];
        
        let cycle = tick % 40;
        if (input_block && output_block) {
          $AnimatedKinetics
            .defaultBlockElement(
              Block.getBlock(cycle < 15 ? input_block : output_block).defaultBlockState()
            )
            .atLocal(0, 2, 0)
            .scale(scale)
            .render(graphics);
        }
      }

      matrixStack.popPose();
    });
  });
});
