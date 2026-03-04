JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'upgrades');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'upgrades');
  const recipeBuilder = event.custom(typeId);

  // 添加配方

  /*
    const upgradesData: {
      item: string;
      machines: string[];
      modifiers: {
        requirement: string;
        mode: string;
        min: number;
        operation: string;
        modifier: number;
      }[];
    }[]
  */
  upgradesData.forEach((entry) => {
    recipeBuilder.add(entry);
  });
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:upgrades', (category) => {
    // 添加上方标题
    category.title(Text.translate('kubejs.jeiaddition.category.upgrades.title'));

    // 添加上方小图标
    category.iconSupplier(() => {
      return guiHelper.createDrawableItemStack(Item.of('kubejs:productivity_module'));
    });

    category.setWidth(178);
    category.setHeight(120);
    category.background(guiHelper.createBlankDrawable(0, 0));

    const upgradesX = category.getWidth() / 2 - 8;
    const upgradesY = 10;

    const machinesX = category.getWidth() / 2 - 80;
    const machinesY = 40;

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      const data = recipe.recipeData;

      // 插件输入槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, upgradesX, upgradesY)
        .setBackground(guiHelper.getOutputSlot(), -5, -5)
        .addItemStack(Item.of(data.item));

      // 隐形插件输出槽
      layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.OUTPUT).addItemStack(Item.of(data.item));

      // 机器输入槽、隐形机器输出槽
      data.machines.forEach((machine, index) => {
        const row = Math.floor(index / 9);
        const col = index % 9;
        const machineId = 'kubejs:' + machine.split(':')[1];

        layoutBuilder
          .addSlot($RecipeIngredientRole.INPUT, machinesX + col * 18, machinesY + row * 18)
          .setBackground(guiHelper.getSlotDrawable(), -1, -1)
          .addItemStack(Item.of(machineId));

        layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.OUTPUT).addItemStack(Item.of(machineId));
      });
    });

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      const data = recipe.recipeData;

      // 文本
      let line = 0;
      const textX = machinesX;
      const textY = machinesY + 40;

      for (let i = 0; i < data.modifiers.length; i++) {
        let modifier = data.modifiers[i];

        // 数值文本
        let modifierText;
        let good;
        if (modifier.operation === 'multiplication') {
          if (modifier.requirement === 'custommachinery:speed') {
            good = modifier.modifier < 1;
          } else if (modifier.requirement === 'custommachinery:energy_per_tick') {
            good = (modifier.mode === 'input') === modifier.modifier < 1;
          }
          modifierText = Text.literal(
            ` ${good ? '§a' : '§c'}${modifier.modifier >= 1 ? '+' : ''}${parseFloat(
              ((modifier.modifier - 1) * 100).toFixed(2)
            )}%§r`
          );
        } else {
          modifierText = Text.empty();
        }

        // 根据 requirement 和 mode 选择文本
        let text;
        let draw = false;
        if (modifier.requirement === 'custommachinery:speed') {
          text = Text['join(net.minecraft.network.chat.Component[])'](
            Text.translate('kubejs.jeiaddition.upgrades.speed'),
            modifierText
          );
          if (modifier.min) {
            text = Text['join(net.minecraft.network.chat.Component[])'](
              text,
              Text.literal(' '),
              Text.translate('kubejs.jeiaddition.upgrades.min'),
              Text.literal(` ${modifier.min} tick`)
            );
          }
          draw = true;
        } else if (modifier.requirement === 'custommachinery:energy_per_tick') {
          text = Text['join(net.minecraft.network.chat.Component[])'](
            Text.translate(`kubejs.jeiaddition.upgrades.${modifier.mode}`),
            Text.translate('kubejs.jeiaddition.upgrades.energy_per_tick'),
            modifierText
          );
          if (modifier.min) {
            text = Text['join(net.minecraft.network.chat.Component[])'](
              text,
              Text.literal(' '),
              Text.translate('kubejs.jeiaddition.upgrades.min'),
              Text.literal(` ${modifier.min} FE/t`)
            );
          }
          draw = true;
        }

        if (draw) {
          drawWordWrap(
            graphics,
            Client.font,
            text,
            textX,
            textY + line * (Client.font.lineHeight + 3),
            999,
            0xffffff,
            true
          );
          line++;
        }
      }
    });
  });
});
