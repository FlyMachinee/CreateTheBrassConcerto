JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'spout_test');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('minecraft:white_wool'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'spout_test');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  recipeBuilder.add({});
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:spout_test', (category) => {
    // 添加上方标题
    category.title(Text.literal('Spout Test').color(0xfca800));

    // 添加上方小图标
    category.icon(guiHelper.createDrawableItemStack(Item.of('minecraft:barrier')));

    category.setWidth(200);
    category.setHeight(200);
    category.background(guiHelper.createBlankDrawable(0, 0));

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      const matrixStack = graphics.pose();
      matrixStack.pushPose();

      // 渲染像素偏移
      matrixStack.translate(50, 50, 100);

      // 渲染轴旋转
      matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5));
      matrixStack.mulPose($Axis.YP.rotationDegrees(22.5));

      const scale = 25;
      const tick = $AnimationTickHolder.getRenderTime();

      drawAnimatedSpout(
        graphics,
        $AnimatedKinetics.DEFAULT_LIGHTING,
        'minecraft:water',
        0,
        2,
        0,
        scale,
        tick
      );
      drawAnimatedSpout(
        graphics,
        $AnimatedKinetics.DEFAULT_LIGHTING,
        'minecraft:water',
        1,
        2,
        0,
        scale,
        tick
      );
      drawAnimatedSpout(
        graphics,
        $AnimatedKinetics.DEFAULT_LIGHTING,
        'minecraft:water',
        2,
        2,
        0,
        scale,
        tick
      );

      const renderBlock = (block, x, y, z) => {
        $AnimatedKinetics
          .defaultBlockElement(Block.getBlock(block).defaultBlockState())
          .atLocal(x, y, z)
          .scale(scale)
          .render(graphics);
      };

      for (let i = 16; i >= 8; --i) {
        drawFluidBox(graphics, 'minecraft:water', i, 12 - i, 0, 0, scale);
        renderBlock('minecraft:red_wool', 12 - i, 1, 0);
      }

      matrixStack.popPose();
    });
  });
});
