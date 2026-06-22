JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'covariant_reactor');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('kubejs:covariant_reactor'),
    recipeType
  );
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('kubejs:bronze_fuel_rod'),
    recipeType
  );
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('kubejs:carbon_electrode'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'covariant_reactor');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  recipeBuilder.add({
    type: 1, // 工作模式
    subtype: 1, // 正常工作模式
    powerCallback: (fuelCount, controllerCount) => 60 * Math.pow(2, fuelCount),
    powerFormula: 'P = 60 * 2^F FE/t',
    heatCallback: (fuelCount, controllerCount) =>
      fuelCount === 1 ? 1 : Math.pow(2, Math.floor(fuelCount * 1.5) + 1),
    heatFormula: 'dH/dt = 2^(1 + floor(1.5 * F)) mB/t',
  });
  recipeBuilder.add({
    type: 1, // 工作模式
    subtype: 2, // 电量满溢工作模式
    powerCallback: () => 0,
    powerFormula: 'P = 0 FE/t',
    heatCallback: (fuelCount, controllerCount) =>
      fuelCount === 1 ? 2 : Math.pow(2, Math.floor(fuelCount * 1.5) + 2),
    heatFormula: 'dH/dt = 2^(2 + floor(1.5 * F)) mB/t',
  });
  recipeBuilder.add({
    type: 2, // 冷却模式
    subtype: 1, // 冷却液冷却
    heatCallback: (cryogen) => 480 * cryogen,
    heatFormula: 'ΔH = -480 * N mB',
  });
  recipeBuilder.add({
    type: 2, // 冷却模式
    subtype: 2, // 元件冷却
    heatCallback: () => 23040,
    heatFormula: 'ΔH = -23040 mB',
  });
  recipeBuilder.add({
    type: 3, // 反应堆熔毁
  });
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:covariant_reactor', (category) => {
    // 添加上方标题
    category.title(Text.translate('block.kubejs.covariant_reactor'));

    // 添加上方小图标
    category.iconSupplier(() => {
      return guiHelper.createDrawableItemStack(Item.of('kubejs:covariant_reactor'));
    });

    category.setWidth(210);
    category.setHeight(152);
    category.background(guiHelper.createBlankDrawable(0, 0));

    const workInstance = new CovariantReactorWork(category);
    const cooldownInstance = new CovariantReactorCooldown(category);
    const meltdownInstance = new CovariantReactorMeltdown(category);

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      switch (recipe.recipeData.type) {
        case 1:
          workInstance.handleLookup(layoutBuilder, recipe, focuses);
          break;
        case 2:
          cooldownInstance.handleLookup(layoutBuilder, recipe, focuses);
          break;
        case 3:
          meltdownInstance.handleLookup(layoutBuilder, recipe, focuses);
          break;
      }
    });

    // 处理绘制
    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      switch (recipe.recipeData.type) {
        case 1:
          workInstance.handleDraw(recipe, recipeSlotsView, graphics, mouseX, mouseY);
          break;
        case 2:
          cooldownInstance.handleDraw(recipe, recipeSlotsView, graphics, mouseX, mouseY);
          break;
        case 3:
          meltdownInstance.handleDraw(recipe, recipeSlotsView, graphics, mouseX, mouseY);
          break;
      }
    });

    // 处理输入事件
    category.setInputHandler((recipe, mouseX, mouseY, input) => {
      switch (recipe.recipeData.type) {
        case 1:
          return workInstance.handleInput(recipe, mouseX, mouseY, input);
        case 3:
          return meltdownInstance.handleInput(recipe, mouseX, mouseY, input);
        default:
          return false;
      }
    });

    // 处理tooltip
    category.setTooltipHandlerOverride((tooltip, recipe, recipeSlotsView, mouseX, mouseY) => {
      switch (recipe.recipeData.type) {
        case 1:
          workInstance.handleTooltip(tooltip, recipe, recipeSlotsView, mouseX, mouseY);
          return;
        case 2:
          cooldownInstance.handleTooltip(tooltip, recipe, recipeSlotsView, mouseX, mouseY);
          return;
        case 3:
          meltdownInstance.handleTooltip(tooltip, recipe, recipeSlotsView, mouseX, mouseY);
          return;
      }
    });
  });
});
