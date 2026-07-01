JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'schematic_test');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('minecraft:white_wool'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'schematic_test');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  recipeBuilder.add({});
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:schematic_test', (category) => {
    // 添加上方标题
    category.title(Text.literal('Schematic Test').color(0xfca800));

    // 添加上方小图标
    category.icon(guiHelper.createDrawableItemStack(Item.of('minecraft:barrier')));

    category.setWidth(200);
    category.setHeight(200);
    category.background(guiHelper.createBlankDrawable(0, 0));

    const clickButton = new ClickButton(10, 10, 50, 20, Text.literal('Load'));

    let schematicStructure = new SchematicStructure();
    const schematicRenderer = new SchematicRenderer(schematicStructure);

    const blockRenderer = new BlockRenderer();

    clickButton.onClick(() => {
      schematicStructure.loadFromFile('test.nbt');
      schematicStructure.listForEach((info) => {
        if (info.state.getBlock().equals($AllBlocks.ANDESITE_ENCASED_COGWHEEL.get())) {
          console.log(info.toString());
        }
      })
      console.log('Schematic loaded');
      return true;
    });

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      clickButton.draw(recipe, graphics, mouseX, mouseY);

      const matrixStack = graphics.pose();
      const scale = 15;

      if (schematicStructure.isLoad()) {
        matrixStack.pushPose();

        // 渲染像素偏移
        matrixStack.translate(10, 160, 100);

        // 渲染轴旋转
        matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5));
        matrixStack.mulPose($Axis.YP.rotationDegrees(22.5));
        matrixStack.scale(scale, scale, scale);

        schematicRenderer.render(graphics, $AnimatedKinetics.DEFAULT_LIGHTING);

        matrixStack.popPose();
      }
    });

    category.setInputHandler((recipe, mouseX, mouseY, input) => {
      return clickButton.handleInput(recipe, mouseX, mouseY, input);
    });
  });
});
