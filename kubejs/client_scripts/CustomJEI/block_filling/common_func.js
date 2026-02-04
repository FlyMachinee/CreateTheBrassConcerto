// priority: 2048

const getBlockFillingItemRecipe = (
  input_fluid,
  input_amount,
  output_item,
  output_amount,
  medium_block,
  consume_medium
) => ({
  input_fluid: input_fluid,
  input_amount: input_amount,
  output_item: output_item,
  output_amount: output_amount,
  medium_block: medium_block,
  consume_medium: consume_medium,
});

/**
 * @param {Internal.IGuiHelper} guiHelper
 * @param {Internal.RecipeCategoryBuilder<Internal.CustomJSRecipe>} category
 */
const blockFillingItemCategoryRegisterHook = (guiHelper, category) => {
  // 设置画布
  category.setWidth(178);
  category.setHeight(90);
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
    layoutBuilder
      .addSlot($RecipeIngredientRole.CATALYST, 21, 45)
      .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
      .addItemStack(Item.of(recipe.recipeData.medium_block))
      .addRichTooltipCallback((slotView, builder) => {
        if (recipe.recipeData.consume_medium) {
          builder.add(Text.translate('kubejs.jeiaddition.consumed_medium').color(0xfca800));
        } else {
          builder.add(Text.translate('kubejs.jeiaddition.not_consumed_medium').color(0xfca800));
        }
      });

    // 输出物品槽
    layoutBuilder
      .addSlot($RecipeIngredientRole.OUTPUT, 141, 66)
      .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
      .addItemStack(Item.of(recipe.recipeData.output_item, recipe.recipeData.output_amount));
  });

  category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
    // 圆形阴影
    $AllGuiTextures.JEI_SHADOW.render(graphics, 61 - $AllGuiTextures.JEI_SHADOW.width / 2, 75);

    // 普通箭头
    $AllGuiTextures.JEI_ARROW.render(graphics, 90, 70);

    // 文字提示
    drawWordWrap(
      graphics,
      Client.font,
      Text.translate('kubejs.jeiaddition.empty_depot_below'),
      88,
      category.getHeight() / 2 - Client.font.lineHeight / 2,
      75,
      0xffffff,
      true
    );

    const matrixStack = graphics.pose();
    matrixStack.pushPose();

    // 渲染像素偏移
    matrixStack.translate(48, 22, 100);

    // 渲染轴旋转
    matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5));
    matrixStack.mulPose($Axis.YP.rotationDegrees(22.5));

    const scale = 20;

    const tick = $AnimationTickHolder.getRenderTime();

    // 渲染注液器
    drawAnimatedSpout(
      graphics,
      $AnimatedKinetics.DEFAULT_LIGHTING,
      recipe.recipeData.input_fluid,
      0,
      0,
      0,
      scale,
      tick
    );

    // 渲染媒介方块
    const cycle = tick % 30;

    if (!recipe.recipeData.consume_medium || cycle < 10 || cycle >= 25) {
      $AnimatedKinetics
        .defaultBlockElement(Block.getBlock(recipe.recipeData.medium_block).defaultBlockState())
        .atLocal(0, 2, 0)
        .scale(scale)
        .render(graphics);
    }

    // 渲染置物台
    drawDepot(
      graphics,
      $AnimatedKinetics.DEFAULT_LIGHTING,
      $CustomLightingSettings.builder().firstLightRotation(0, -90).secondLightRotation(0, -90).build(),
      cycle < 10 || cycle >= 25
        ? null
        : Item.of(recipe.recipeData.output_item, recipe.recipeData.output_amount),
      0,
      3,
      0,
      scale,
      tick
    );

    matrixStack.popPose();
  });
};

const prettyMatrix_1 = Item.of("kubejs:matrix_2", "{ RGB: [ [ [ 1, 0 ], [ 0, 1 ] ], [ [ 0, 1 ], [ 0, 1 ] ], [ [ 1, 0 ], [ 1, 0 ] ] ], matrix: [ [ [ 1, 0 ], [ 0, 1 ] ], [ [ 0, 1 ], [ 0, 1 ] ], [ [ 1, 0 ], [ 1, 0 ] ] ] }");
const prettyMatrix_2 = Item.of("kubejs:matrix_2", "{ matrix: [ [ [ 1, -1 ], [ 0, 1 ] ], [ [ 0, 1 ], [ 0, 0 ] ], [ [ 0, 0 ], [ 0, -1 ] ] ] }");
const prettyMatrix_3 = Item.of("kubejs:matrix_2", "{ matrix: [ [ [ 1, 1 ], [ 1, 0 ] ], [ [ 1, 0 ], [ -1, 1 ] ], [ [ 1, 1 ], [ -1, 1 ] ] ] }");
const prettyMatrix_4 = Item.of("kubejs:matrix_2", "{ matrix: [ [ [ 1, -1 ], [ -1, 1 ] ], [ [ -1, 0 ], [ 1, -1 ] ], [ [ 0, 0 ], [ 0, 0 ] ] ] }");