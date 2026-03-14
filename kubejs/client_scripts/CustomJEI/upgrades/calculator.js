(() => {
  JEIAddedEvents.registerRecipeCatalysts((event) => {
    const { data } = event;
    const { jeiHelpers } = data;

    // 与 registerCategories 中相同
    const typeId = new ResourceLocation('dut_create', 'upgrade_calculator');
    const recipeType = jeiHelpers.getRecipeType(typeId).get();

    // 添加左侧边栏
    MachineUpgrade.getAll().forEach((upgrade) => {
      data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
        Item.of(upgrade.item),
        recipeType
      );
    });
  });

  JEIAddedEvents.registerRecipes((event) => {
    // 与 registerCategories 中相同
    const typeId = new ResourceLocation('dut_create', 'upgrade_calculator');
    const recipeBuilder = event.custom(typeId);
    recipeBuilder.add({});
  });

  /** @type {Internal.IJeiRuntime} */
  let jeiRuntime;

  JEIAddedEvents.onRuntimeAvailable((event) => {
    jeiRuntime = event.data;
  });

  JEIAddedEvents.registerCategories((event) => {
    const { data } = event;
    const { jeiHelpers } = data;
    const { guiHelper } = jeiHelpers;

    event.custom('dut_create:upgrade_calculator', (category) => {
      // 添加上方标题
      category.title(Text.translate('kubejs.jeiaddition.category.upgrade_calculator.title'));

      // 添加上方小图标
      category.iconSupplier(() => {
        return guiHelper.createDrawableItemStack(Item.of('kubejs:productivity_module'));
      });

      category.setWidth(200);
      category.setHeight(200);
      category.background(guiHelper.createBlankDrawable(0, 0));

      // 设置输入输出槽
      category.handleLookup((layoutBuilder, recipe, focuses) => {});

      const editBox = new EditBox(Client.font, 100, 100, 80, 18, '');
      editBox.setFilter((text) => {
        // 只允许整数或浮点数
        return /^(\d+(\.\d*)?|\.\d+)$/.test(text);
      });
      editBox.setConfirmCallback((text) => {
        console.log(`Confirmed value: ${text}`);
      });

      /** @type {Internal.IRecipeSlotDrawable[]} */
      let allUpgradeDrawable = [];

      /**
       * @returns {Internal.IRecipeSlotDrawable[]}
       */
      const getAllUpgradeDrawable = () => {
        if (allUpgradeDrawable.length === 0) {
          if (!jeiRuntime) {
            console.error('JEI Runtime not available');
            return [];
          }
          MachineUpgrade.getAll().forEach((upgrade) => {
            let temp = jeiRuntime
              .getRecipeManager()
              .createRecipeSlotDrawable(
                $RecipeIngredientRole.RENDER_ONLY,
                $List.of(jeiRuntime.getIngredientManager().createTypedIngredient(Item.of(upgrade.item))),
                $IntSet.of(0),
                0
              );
            allUpgradeDrawable.push(temp);
          });
        }
        return allUpgradeDrawable;
      };

      /** @type {Internal.IRecipeSlotDrawable[]} */
      let upgradeChosenList = [];
      const allowUpgradeCount = 9;

      const upgradeSelectGridX = 10;
      const upgradeSelectGridY = 100;
      const upgradeSelectListWidth = 3;

      const upgradeChosenListX = (category.getWidth() - allowUpgradeCount * 18 - 2) / 2;
      const upgradeChosenListY = 50;

      const normalSlotDrawable = guiHelper.getSlotDrawable();
      const upgradeSlotDrawable = guiHelper
        .drawableBuilder(new ResourceLocation('kubejs', 'textures/gui/upgrade_slot.png'), 0, 0, 18, 18)
        .setTextureSize(18, 18)
        .build();

      category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
        const matrixStack = graphics.pose();

        // 输入框背景
        editBox.draw(graphics);

        // 绘制已选择的升级
        upgradeChosenList.forEach((drawable, index) => {
          const x = upgradeChosenListX + 18 * index;
          const y = upgradeChosenListY;
          drawable.setPosition(x, y);
          drawable.draw(graphics);
          if (drawable.isMouseOver(mouseX, mouseY)) {
            drawable.drawHoverOverlays(graphics);
          }
        });

        // 绘制已选择升级的槽位背景
        for (let i = 0; i < allowUpgradeCount; ++i) {
          upgradeSlotDrawable.draw(graphics, upgradeChosenListX + 18 * i - 1, upgradeChosenListY - 1);
        }

        // 绘制升级选项
        getAllUpgradeDrawable().forEach((drawable, index) => {
          const x = upgradeSelectGridX + (index % upgradeSelectListWidth) * 18;
          const y = upgradeSelectGridY + Math.floor(index / upgradeSelectListWidth) * 18;
          drawable.setPosition(x, y);
          drawable.draw(graphics);
          if (drawable.isMouseOver(mouseX, mouseY)) {
            drawable.drawHoverOverlays(graphics);
          }
        });

        // 绘制升级选项的槽位背景
        for (let i = 0; i < getAllUpgradeDrawable().length; ++i) {
          let x = upgradeSelectGridX + (i % upgradeSelectListWidth) * 18;
          let y = upgradeSelectGridY + Math.floor(i / upgradeSelectListWidth) * 18;
          normalSlotDrawable.draw(graphics, x - 1, y - 1);
        }

        // 绘制参考线
        for (let col = 0; col * 10 <= category.getWidth(); ++col) {
          graphics.vLine(col * 10, 0, category.getHeight(), col % 5 === 0 ? 0x7fffffff : 0x3fffffff);
        }
        for (let row = 0; row * 10 <= category.getHeight(); ++row) {
          graphics.hLine(0, category.getWidth(), row * 10, row % 5 === 0 ? 0x7fffffff : 0x3fffffff);
        }
      });

      category.setInputHandler((recipe, mouseX, mouseY, input) => {
        if (input.getValue() === $InputConstants.MOUSE_BUTTON_LEFT) {

          // 处理点击待选升级
          if (
            mouseX >= upgradeSelectGridX &&
            mouseX < upgradeSelectGridX + upgradeSelectListWidth * 18 &&
            mouseY >= upgradeSelectGridY
          ) {
            let col = Math.floor((mouseX - upgradeSelectGridX) / 18);
            let row = Math.floor((mouseY - upgradeSelectGridY) / 18);
            let index = row * upgradeSelectListWidth + col;
            if (index < getAllUpgradeDrawable().length && upgradeChosenList.length < allowUpgradeCount) {
              let drawable = getAllUpgradeDrawable()[index];
              upgradeChosenList.push(drawable);
              return true;
            }
          }

          // 处理点击已选升级（取消选择）
          if (
            mouseY >= upgradeChosenListY &&
            mouseY < upgradeChosenListY + 18 &&
            mouseX >= upgradeChosenListX
          ) {
            let index = Math.floor((mouseX - upgradeChosenListX) / 18);
            if (index < upgradeChosenList.length) {
              upgradeChosenList.splice(index, 1);
              return true;
            }
          }
        }

        if (editBox.handleInput(mouseX, mouseY, input)) return true;

        return false;
      });

      // 处理 tooltip 显示
      category.setTooltipHandlerOverride((tooltipBuilder, recipe, recipeSlotsView, mouseX, mouseY) => {

        // 已选择升级的 tooltip
        if (
          mouseY >= upgradeChosenListY &&
          mouseY < upgradeChosenListY + 18 &&
          mouseX >= upgradeChosenListX
        ) {
          let index = Math.floor((mouseX - upgradeChosenListX) / 18);
          if (index < upgradeChosenList.length) {
            let drawable = upgradeChosenList[index];
            let tooltip = drawable.getTooltip();
            tooltip.add(1, Text.literal('点击以取消选择').withStyle('italic', 'gold'));
            tooltipBuilder.addAll(tooltip);
          }
        }

        // 升级选项的 tooltip
        if (
          mouseX >= upgradeSelectGridX &&
          mouseX < upgradeSelectGridX + upgradeSelectListWidth * 18 &&
          mouseY >= upgradeSelectGridY
        ) {
          let col = Math.floor((mouseX - upgradeSelectGridX) / 18);
          let row = Math.floor((mouseY - upgradeSelectGridY) / 18);
          let index = row * upgradeSelectListWidth + col;
          if (index < getAllUpgradeDrawable().length) {
            let drawable = getAllUpgradeDrawable()[index];
            let tooltip = drawable.getTooltip();
            tooltip.add(1, Text.literal('点击以选择').withStyle('italic', 'gold'));
            tooltipBuilder.addAll(tooltip);
          }
        }
      });
    });
  });
})();
