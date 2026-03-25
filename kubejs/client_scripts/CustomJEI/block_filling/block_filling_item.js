JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'block_filling_item');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('create:spout'),
    recipeType
  );

  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('create:depot'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'block_filling_item');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  // global.blockFillingItemRecipes 在 startup_scripts/recipes/block_filling.js 中定义
  global.blockFillingItemRecipes.forEach((obj) => {
    recipeBuilder.add({
      input_fluid: obj.input_fluid,
      input_amount: obj.input_amount,
      output_item: obj.output_item,
      output_amount: obj.output_amount,
      medium_block: obj.medium_block,
      consume_medium: true,
    });
  });
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:block_filling_item', (category) => {
    // 添加上方标题
    category.title(Text.translate('kubejs.jeiaddition.category.block_filling_item.title'));

    // 添加上方小图标
    category.icon(
      new $DoubleItemIcon(
        () => Item.of('create:spout'),
        () => Item.of('minecraft:amethyst_cluster')
      )
    );

    blockFillingItemCategoryRegisterHook(guiHelper, category);
  });
});
