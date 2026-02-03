JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'block_filling_extra_item');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('create:spout'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'block_filling_extra_item');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  // global.blockFillingExtraItemRecipes 在 startup_scripts/recipes/block_filling.js 中定义
  global.blockFillingExtraItemRecipes.forEach((obj) => {
    recipeBuilder.add(
      getBlockFillingItemRecipe(
        obj.input_fluid,
        obj.input_amount,
        obj.output_item,
        obj.output_amount,
        obj.medium_block,
        false
      )
    );
  });
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:block_filling_extra_item', (category) => {
    // 添加上方标题
    category.title(Text.translate('kubejs.jeiaddition.category.block_filling_extra_item.title'));

    // 添加上方小图标
    category.iconSupplier(() => {
      return new $DoubleItemIcon(
        () => Item.of('create:spout'),
        () => Item.of('minecraft:andesite')
      );
    });

    blockFillingItemCategoryRegisterHook(guiHelper, category);
  });
});
