JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'block_filling_matrix_multi_phase');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('create:spout'),
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
  const typeId = new ResourceLocation('dut_create', 'block_filling_matrix_multi_phase');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  recipeBuilder.add({
    type: 1,
    fluid: 'createdieselgenerators:ethanol',
    amount: 250,
    medium: 'minecraft:red_mushroom_block',
    input_structure: '[A, B, C,...]',
    output_structure: '[A^T, B^T, C^T,...]',
    desc: 'kubejs.jeiaddition.block_filling_matrix_multi_phase.transposition',
  });
  recipeBuilder.add({
    type: 1,
    fluid: 'createdieselgenerators:ethanol',
    amount: 250,
    medium: 'minecraft:brown_mushroom_block',
    input_structure: '[A, B, C,...]',
    output_structure: '[A^iT, B^iT, C^iT,...]',
    desc: 'kubejs.jeiaddition.block_filling_matrix_multi_phase.anti_transposition',
  });
  recipeBuilder.add({
    type: 2,
    fluid: 'kubejs:aeronos_spore',
    amount: 250,
    medium: 'ad_astra:aeronos_cap',
    input_structure_1: '[A, B,...]',
    input_structure_2: '[P, Q, R,...]',
    output_structure: '[AP, AQ, AR,...]',
    desc: 'kubejs.jeiaddition.block_filling_matrix_multi_phase.left_evolution',
  });
  recipeBuilder.add({
    type: 2,
    fluid: 'kubejs:strophar_spore',
    amount: 250,
    medium: 'ad_astra:strophar_cap',
    input_structure_1: '[A, B,...]',
    input_structure_2: '[P, Q, R,...]',
    output_structure: '[PA, QA, RA,...]',
    desc: 'kubejs.jeiaddition.block_filling_matrix_multi_phase.right_evolution',
  });
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:block_filling_matrix_multi_phase', (category) => {
    // 添加上方标题
    category.title(Text.translate('kubejs.jeiaddition.category.block_filling_matrix_multi_phase.title'));

    // 添加上方小图标
    category.iconSupplier(() => {
      return new $DoubleItemIcon(
        () => Item.of(prettyMatrix_3),
        () => Item.of('design_decor:m_sign')
      );
    });

    category.setWidth(178);
    category.setHeight(80);
    category.background(guiHelper.createBlankDrawable(0, 0));

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      const recipeData = recipe.recipeData;
      // 输入流体槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, 31, 11)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .setFluidRenderer(500, false, 16, 16) // Capacity, show capacity, width, height
        .addFluidStack(recipeData.fluid, recipeData.amount);

      if (recipeData.type === 1) {
        // 史莱姆水晶
        layoutBuilder
          .addSlot($RecipeIngredientRole.CATALYST, 31, 28)
          .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
          .addItemStack(Item.of('kubejs:slime_crystal'))
          .addTooltipCallback((slotView, builder) => {
            builder.add(1, Text.translate('kubejs.jeiaddition.no_consumption').color(0xfca800));
          });

        // 输入矩阵
        layoutBuilder
          .addSlot($RecipeIngredientRole.INPUT, 7, 53)
          .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
          .addItemStack(Item.of('kubejs:matrix_2'))
          .addTooltipCallback((slotView, builder) => {
            builder.add(1, Text.ofString(recipeData.input_structure).color(0xfca800));
          });
      } else {
        // 输入矩阵 1
        layoutBuilder
          .addSlot($RecipeIngredientRole.INPUT, 31, 28)
          .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
          .addItemStack(Item.of('kubejs:matrix_2'))
          .addTooltipCallback((slotView, builder) => {
            builder.add(1, Text.ofString(recipeData.input_structure_1).color(0xfca800));
          });

        // 输入矩阵 2
        layoutBuilder
          .addSlot($RecipeIngredientRole.INPUT, 7, 53)
          .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
          .addItemStack(Item.of('kubejs:matrix_2'))
          .addTooltipCallback((slotView, builder) => {
            builder.add(1, Text.ofString(recipeData.input_structure_2).color(0xfca800));
          });
      }

      // 媒介方块
      layoutBuilder
        .addSlot($RecipeIngredientRole.CATALYST, 7, 11)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .addItemStack(Item.of(recipeData.medium))
        .addTooltipCallback((slotView, builder) => {
          builder.add(1, Text.translate('kubejs.jeiaddition.not_consumed_medium').color(0xfca800));
        });

      // 输出矩阵
      layoutBuilder
        .addSlot($RecipeIngredientRole.OUTPUT, 141, 56)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .addItemStack(Item.of('kubejs:matrix_2'))
        .addTooltipCallback((slotView, builder) => {
          builder.add(1, Text.ofString(recipeData.output_structure).color(0xfca800));
        });
    });

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      const recipeData = recipe.recipeData;
      const ms = graphics.pose();
      const scale = 20;
      const tick = $AnimationTickHolder.getRenderTime();
      const cycle = tick % 30;

      // 圆形阴影
      $AllGuiTextures.JEI_SHADOW.render(graphics, 61 - $AllGuiTextures.JEI_SHADOW.width / 2, 65);

      // 下箭头
      $AllGuiTextures.JEI_DOWN_ARROW.render(graphics, 136, 38);

      // 文字提示
      drawRightAlignedString(graphics, Client.font, Text.translate(recipeData.desc), 170, 10, 0xffffff, true);
      drawRightAlignedString(
        graphics,
        Client.font,
        Text.translate('kubejs.jeiaddition.block_filling_matrix_multi_phase.desc1'),
        170,
        24,
        0xffffff,
        true
      );

      ms.pushPose();

      // 渲染像素偏移
      ms.translate(48, 27, 100);

      // 渲染轴旋转
      ms.mulPose($Axis.XP.rotationDegrees(-15.5));
      ms.mulPose($Axis.YP.rotationDegrees(22.5));

      const itemLighting = $CustomLightingSettings
        .builder()
        .firstLightRotation(0, -90)
        .secondLightRotation(0, -90)
        .build();

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

      // 置物板
      drawPlacard(
        graphics,
        $AnimatedKinetics.DEFAULT_LIGHTING,
        itemLighting,
        recipeData.type === 1 ? Item.of('kubejs:slime_crystal') : cycle < 15 ? prettyMatrix_1 : null,
        0,
        1,
        0,
        scale,
        Direction.WEST,
        $AttachFace.FLOOR
      );

      // 媒介方块
      $AnimatedKinetics
        .defaultBlockElement(Block.getBlock(recipeData.medium).defaultBlockState())
        .atLocal(0, 2, 0)
        .scale(scale)
        .render(graphics);

      // 置物台 1
      drawDepot(
        graphics,
        $AnimatedKinetics.DEFAULT_LIGHTING,
        itemLighting,
        cycle < 15
          ? recipeData.type === 1
            ? Item.of(prettyMatrix_1, 64)
            : Item.of(prettyMatrix_2, 64)
          : null,
        -1,
        2,
        0,
        scale
      );

      // 置物台 2
      drawDepot(
        graphics,
        $AnimatedKinetics.DEFAULT_LIGHTING,
        itemLighting,
        cycle >= 15
          ? recipeData.type === 1
            ? Item.of(prettyMatrix_2, 64)
            : Item.of(prettyMatrix_3, 64)
          : null,
        1,
        2,
        0,
        scale
      );
      ms.popPose();

            // 绘制参考线
      // for (let col = 0; col * 10 <= category.getWidth(); ++col) {
      //   graphics.vLine(col * 10, 0, category.getHeight(), col % 5 === 0 ? 0x7fffffff : 0x3fffffff);
      // }
      // for (let row = 0; row * 10 <= category.getHeight(); ++row) {
      //   graphics.hLine(0, category.getWidth(), row * 10, row % 5 === 0 ? 0x7fffffff : 0x3fffffff);
      // }
    });
  });
});
