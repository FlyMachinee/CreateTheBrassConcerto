JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'block_filling_matrix_double');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('create:spout'),
    recipeType
  );

  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('minecraft:amethyst_cluster'),
    recipeType
  );

  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('create:placard'),
    recipeType
  );

  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('create:depot'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'block_filling_matrix_double');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  recipeBuilder.add({
    fluid: 'kubejs:red_mushroom_spore',
    amount: 250,
    input_structure_1: '[A, B, C,...]',
    input_structure_2: '[P, Q, R,...]',
    output_structure: '[A + P, B + Q, C + R,...]',
    desc: 'kubejs.jeiaddition.block_filling_matrix_double.positive_phase_overlay',
  });
  recipeBuilder.add({
    fluid: 'kubejs:brown_mushroom_spore',
    amount: 250,
    input_structure_1: '[A, B, C,...]',
    input_structure_2: '[P, Q, R,...]',
    output_structure: '[A - P, B - Q, C - R,...]',
    desc: 'kubejs.jeiaddition.block_filling_matrix_double.negative_phase_overlay',
  });
  recipeBuilder.add({
    fluid: 'kubejs:cola_puree',
    amount: 125,
    input_structure_1: '[A, B,..., X]',
    input_structure_2: '[P, Q,..., Y]',
    output_structure: '[A, B,..., X, P, Q,..., Y]',
    desc: 'kubejs.jeiaddition.block_filling_matrix_double.chain_mergence',
  });
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  const prettyMatrix_1 = Item.of(
    'kubejs:matrix_2',
    '{ RGB: [ [ [ 1, 0 ], [ 0, 1 ] ], [ [ 0, 1 ], [ 0, 1 ] ], [ [ 1, 0 ], [ 1, 0 ] ] ], matrix: [ [ [ 1, 0 ], [ 0, 1 ] ], [ [ 0, 1 ], [ 0, 1 ] ], [ [ 1, 0 ], [ 1, 0 ] ] ] }'
  );
  const prettyMatrix_2 = Item.of(
    'kubejs:matrix_2',
    '{ matrix: [ [ [ 1, -1 ], [ 0, 1 ] ], [ [ 0, 1 ], [ 0, 0 ] ], [ [ 0, 0 ], [ 0, -1 ] ] ] }'
  );
  const prettyMatrix_3 = Item.of(
    'kubejs:matrix_2',
    '{ matrix: [ [ [ 1, 1 ], [ 1, 0 ] ], [ [ 1, 0 ], [ -1, 1 ] ], [ [ 1, 1 ], [ -1, 1 ] ] ] }'
  );

  event.custom('dut_create:block_filling_matrix_double', (category) => {
    // 添加上方标题
    category.title(Text.translate('kubejs.jeiaddition.category.block_filling_matrix_double.title'));

    // 添加上方小图标
    category.icon(
      new $DoubleItemIcon(
        () => Item.of(prettyMatrix_2),
        () => Item.of('design_decor:2_sign')
      )
    );

    category.setWidth(178);
    category.setHeight(90);
    category.background(guiHelper.createBlankDrawable(0, 0));

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      const recipeData = recipe.recipeData;
      // 输入流体槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, 21, 10)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .setFluidRenderer(500, false, 16, 16) // Capacity, show capacity, width, height
        .addFluidStack(recipeData.fluid, recipeData.amount);

      // 输入矩阵 1
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, 21, 65)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .addTooltipCallback((slotView, builder) => {
          builder.add(1, Text.ofString(recipeData.input_structure_1).color(0xfca800));
        })
        .addItemStack(Item.of('kubejs:matrix_2'));

      // 输入矩阵 2
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, 84, 65)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .addTooltipCallback((slotView, builder) => {
          builder.add(1, Text.ofString(recipeData.input_structure_2).color(0xfca800));
        })
        .addItemStack(Item.of('kubejs:matrix_2'));

      // 输出矩阵
      layoutBuilder
        .addSlot($RecipeIngredientRole.OUTPUT, 141, 66)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .addTooltipCallback((slotView, builder) => {
          builder.add(1, Text.ofString(recipeData.output_structure).color(0xfca800));
        })
        .addItemStack(Item.of('kubejs:matrix_2'));
    });

    const itemLighting = $CustomLightingSettings
      .builder()
      .firstLightRotation(0, -90)
      .secondLightRotation(0, -90)
      .build();

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      const recipeData = recipe.recipeData;
      const ms = graphics.pose();
      const scale = 20;
      const tick = $AnimationTickHolder.getRenderTime();
      const cycle = tick % 30;

      // 圆形阴影
      $AllGuiTextures.JEI_SHADOW.render(graphics, 61 - $AllGuiTextures.JEI_SHADOW.width / 2, 75);

      // 下箭头
      $AllGuiTextures.JEI_DOWN_ARROW.render(graphics, 136, 48);

      // 文字提示
      drawRightAlignedString(graphics, Client.font, Text.translate(recipeData.desc), 170, 10, 0xffffff, true);
      drawRightAlignedString(
        graphics,
        Client.font,
        Text.translate('kubejs.jeiaddition.block_filling_matrix_double.desc1'),
        170,
        32,
        0xffffff,
        true
      );

      ms.pushPose();

      // 渲染像素偏移
      ms.translate(48, 22, 100);

      // 渲染轴旋转
      ms.mulPose($Axis.XP.rotationDegrees(-15.5));
      ms.mulPose($Axis.YP.rotationDegrees(22.5));

      // 注液器
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
          const cycle = tick % 30;
          return cycle >= 5 && cycle < 25 ? JavaMath.sin(((cycle - 5) / 20) * JavaMath.PI) : 0;
        }
      );

      // 紫水晶簇
      $AnimatedKinetics
        .defaultBlockElement(Block.getBlock('minecraft:amethyst_cluster').defaultBlockState())
        .rotateBlock(0, 0, -90)
        .atLocal(0, 2, 0)
        .scale(scale)
        .render(graphics);

      // 置物板 1
      drawPlacard(
        graphics,
        $AnimatedKinetics.DEFAULT_LIGHTING,
        $AnimatedKinetics.DEFAULT_LIGHTING,
        cycle < 15 ? Item.of(prettyMatrix_1) : null,
        -1,
        3,
        0,
        scale,
        Direction.WEST,
        $AttachFace.WALL
      );

      // 置物板 2
      drawPlacard(
        graphics,
        $AnimatedKinetics.DEFAULT_LIGHTING,
        $AnimatedKinetics.DEFAULT_LIGHTING,
        cycle < 15 ? Item.of(prettyMatrix_2) : null,
        1,
        3,
        0,
        scale,
        Direction.EAST,
        $AttachFace.WALL
      );

      // 置物台
      drawDepot(
        graphics,
        $AnimatedKinetics.DEFAULT_LIGHTING,
        itemLighting,
        cycle >= 15 ? Item.of(prettyMatrix_3) : null,
        0,
        3,
        0,
        scale
      );
      ms.popPose();
    });
  });
});
