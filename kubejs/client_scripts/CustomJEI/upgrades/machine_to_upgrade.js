JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'machine_to_upgrade');
  const recipeBuilder = event.custom(typeId);

  /**
   * @type {Map<string, { slotCount: number, canUse: MachineUpgrade[] }>}
   */
  let machineToUpgrades = new Map();
  machineUpgradeSlotCount.forEach((count, machine) => {
    machineToUpgrades.set(machine, {
      slotCount: count,
      canUse: [],
    });
  });

  MachineUpgrade.getAll().forEach((upgrade) => {
    upgrade.machines.forEach((machine) => {
      const name = machine.slice(1 + machine.lastIndexOf(':'));
      if (machineToUpgrades.has(name)) {
        machineToUpgrades.get(name).canUse.push(upgrade);
      } else {
      }
    });
  });

  // 添加配方
  machineToUpgrades.forEach((data, machine) => {
    recipeBuilder.add({
      machine: machine,
      slotCount: data.slotCount,
      upgrades: data.canUse,
    });
  });
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:machine_to_upgrade', (category) => {
    // 添加上方标题
    category.title(Text.translate('kubejs.jeiaddition.category.machine_to_upgrade.title'));

    // 添加上方小图标
    category.icon(guiHelper.createDrawableItemStack(Item.of('kubejs:productivity_module_2')));

    category.setWidth(200);
    category.setHeight(60);
    category.background(guiHelper.createBlankDrawable(0, 0));

    const machinesX = 10;
    const machinesY = category.getHeight() / 2 - 8;

    const upgradesX = machinesX + 24;
    const upgradesY = category.getHeight() / 2 + 4;

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      /** @type {{ machine: string, slotCount: number, upgrades: MachineUpgrade[] }} */
      const data = recipe.recipeData;

      const machineId = 'kubejs:' + data.machine;

      // 机器输入槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, machinesX, machinesY)
        .setBackground(guiHelper.getOutputSlot(), -5, -5)
        .addItemStack(Item.of(machineId));

      // 隐形机器输出槽
      layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.OUTPUT).addItemStack(Item.of(machineId));

      // 插件输入槽、隐形插件输出槽
      data.upgrades.forEach((upgrade, index) => {
        layoutBuilder
          .addSlot($RecipeIngredientRole.INPUT, upgradesX + index * 18, upgradesY)
          .setBackground(guiHelper.getSlotDrawable(), -1, -1)
          .addItemStack(Item.of(upgrade.item));

        layoutBuilder
          .addInvisibleIngredients($RecipeIngredientRole.OUTPUT)
          .addItemStack(Item.of(upgrade.item));
      });
    });

    const slotX = upgradesX;
    const slotY = category.getHeight() / 2 - 4 - 16;

    const upgradeSlotDrawable = guiHelper
      .drawableBuilder(new ResourceLocation('kubejs', 'textures/gui/upgrade_slot.png'), 0, 0, 18, 18)
      .setTextureSize(18, 18)
      .build();

    const slotTextX = slotX + 4;
    const slotTextY = slotY + 8 - Client.font.lineHeight / 2;

    const upgradeTextX = upgradesX + 4;
    const upgradeTextY = upgradesY + 8 - Client.font.lineHeight / 2;

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      /** @type {{ machine: string, slotCount: number, upgrades: MachineUpgrade[] }} */
      const data = recipe.recipeData;

      for (let i = 0; i < data.slotCount; ++i) {
        upgradeSlotDrawable.draw(graphics, slotX + i * 18 - 1, slotY - 1);
      }

      if (data.slotCount <= 0) {
        drawWordWrap(
          graphics,
          Client.font,
          Text.translate('kubejs.jeiaddition.machine_to_upgrade.no_slots'),
          slotTextX,
          slotTextY,
          200,
          0xffffff,
          true
        );
      }

      if (data.upgrades.length <= 0) {
        drawWordWrap(
          graphics,
          Client.font,
          Text.translate('kubejs.jeiaddition.machine_to_upgrade.no_upgrades'),
          upgradeTextX,
          upgradeTextY,
          200,
          0xffffff,
          true
        );
      }
    });
  });
});
