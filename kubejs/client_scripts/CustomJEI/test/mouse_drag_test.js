JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'drag_test');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('minecraft:white_wool'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'drag_test');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  recipeBuilder.add({});
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:drag_test', (category) => {
    // 添加上方标题
    category.title(Text.literal('Drag Test').color(0xfca800));

    // 添加上方小图标
    category.icon(guiHelper.createDrawableItemStack(Item.of('minecraft:barrier')));

    category.setWidth(200);
    category.setHeight(200);
    category.background(guiHelper.createBlankDrawable(0, 0));

    let w = 50;
    let h = 30;
    let rectList = [
      new DraggableRectangle(10, 30, w, h),
      new DraggableRectangle(40, 60, w, h),
      new DraggableRectangle(70, 90, w, h),
    ];

    rectList[0].fillColor = Color.RED.argbJS;
    rectList[1].fillColor = Color.GREEN.argbJS;
    rectList[2].fillColor = Color.BLUE.argbJS;
    rectList[0].dragFillColor = Color.PINK_DYE.argbJS;
    rectList[1].dragFillColor = Color.LIME_DYE.argbJS;
    rectList[2].dragFillColor = Color.CYAN_DYE.argbJS;

    const mouseEventDriver = new MouseEventDriver().setXRange(0, 200).setYRange(0, 200);

    rectList.forEach((rect) => {
      mouseEventDriver
        .addMouseClickCallback((x, y, key) => rect.onMouseClick(x, y, key))
        .addMouseReleaseCallback((x, y, key) => rect.onMouseRelease(x, y, key))
        .addMouseDragCallback((x, y, key, dx, dy) => rect.onMouseDrag(x, y, key, dx, dy));
    });

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      for (let i = rectList.length - 1; i >= 0; --i) {
        rectList[i].draw(graphics);
      }

      mouseEventDriver.drive(mouseX, mouseY);
    });
  });
});
