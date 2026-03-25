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
      category.icon(guiHelper.createDrawableItemStack(Item.of('kubejs:productivity_module_3')));

      category.setWidth(200);
      category.setHeight(200);
      category.background(guiHelper.createBlankDrawable(0, 0));

      // 设置输入输出槽
      category.handleLookup((layoutBuilder, recipe, focuses) => {});

      /**
       * @type {Internal.IRecipeSlotDrawable[]}
       * 存放所有机器升级的 Drawable 对象，避免重复创建
       */
      const allUpgradeDrawable = [];

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

      /**
       * 当前选择的升级列表，用于渲染，实际升级信息存放在 MachineTile 之中
       * @type {Internal.IRecipeSlotDrawable[]}
       */
      const upgradeChosenList = [];
      const allowUpgradeCount = 9;

      const upgradeSelectGridX = 10;
      const upgradeSelectGridY = 140;
      const upgradeSelectListWidth = 3;

      // const upgradeChosenListX = (category.getWidth() - allowUpgradeCount * 18 - 2) / 2;
      const upgradeChosenListX = 10;
      const upgradeChosenListY = 10;

      const normalSlotDrawable = guiHelper.getSlotDrawable();
      const upgradeSlotDrawable = guiHelper
        .drawableBuilder(new ResourceLocation('kubejs', 'textures/gui/upgrade_slot.png'), 0, 0, 18, 18)
        .setTextureSize(18, 18)
        .build();

      // 模拟存放升级的机器
      const machineTile = new CustomMachineTile();

      // 配方上下文，包含了配方信息，用于计算各种参数的修改后数值
      const context = new CraftingContext(
        machineTile.getUpgradeManager(),
        new MachineRecipe(60, [
          new EnergyPerTickRequirement(RequirementIOMode.INPUT, 1024),
          new EnergyPerTickRequirement(RequirementIOMode.OUTPUT, 1024),
          new EnergyRequirement(RequirementIOMode.INPUT, 131072),
          new EnergyRequirement(RequirementIOMode.OUTPUT, 131072),
        ])
      );

      // 表格显示升级对配方参数的修改情况
      const table = new SimpleTable();
      table
        .pushRow([
          Text.translate('kubejs.jeiaddition.upgrade_calculator.header1'),
          Text.translate('kubejs.jeiaddition.upgrade_calculator.header2'),
          Text.translate('kubejs.jeiaddition.upgrade_calculator.header3'),
        ])
        .setColumnWidth(0, 40)
        .setColumnWidth(1, 70)
        .setColumnWidth(2, 70)
        .setTooltip(0, 0, Text.translate('kubejs.jeiaddition.upgrade_calculator.header1.tooltip'))
        .setTooltip(0, 1, Text.translate('kubejs.jeiaddition.upgrade_calculator.header2.tooltip'))
        .setTooltip(0, 2, Text.translate('kubejs.jeiaddition.upgrade_calculator.header3.tooltip'))
        .setPosition((category.getWidth() - table.getTableWidth()) / 2, 34);

      table.style = BorderStyle.ACADEMIC;

      // 数值输入框，允许输入非负整数，按回车确认
      const editBox = new EditBox(Client.font, 111, 140, 80, 18, '');
      editBox
        .setFilter((text) => {
          // 只允许整数
          return /^(\+?(([1-9]\d*)|0))$/.test(text);
        })
        .setConfirmCallback((text) => {
          console.log(`Confirmed value: ${text}`);
        })
        .setTooltip(Text.translate('kubejs.jeiaddition.upgrade_calculator.edit_box.tooltip'));

      // 切换按钮，控制是否显示变量名
      const toogleButton = new ToggleButton(
        editBox.x,
        editBox.y + 25,
        25,
        14,
        Text.translate('kubejs.jeiaddition.upgrade_calculator.use_variable')
      ).setTooltipCallback((builder, recipe, pressed, enable) => {
        builder.add(Text.translate('kubejs.jeiaddition.upgrade_calculator.use_variable.info.tooltip'));
        if (pressed) {
          builder.add(
            Text.translate('kubejs.jeiaddition.upgrade_calculator.use_variable.yes.tooltip').green()
          );
        } else {
          builder.add(Text.translate('kubejs.jeiaddition.upgrade_calculator.use_variable.no.tooltip').red());
        }
      });

      // 切换表格风格按钮
      let style = BorderStyle.ACADEMIC;
      const styleButton = new ClickButton(
        editBox.x + editBox.width - 25,
        editBox.y + 25,
        25,
        14,
        Text.translate('kubejs.jeiaddition.upgrade_calculator.style')
      )
        .setTooltipCallback((builder) => {
          builder.add(Text.translate('kubejs.jeiaddition.upgrade_calculator.style.info.tooltip'));
          builder.add(
            Text.translate(
              'kubejs.jeiaddition.upgrade_calculator.style.current.tooltip',
              style.toString()
            ).withStyle('gold', 'italic')
          );
        })
        .onClick(() => {
          switch (style) {
            case BorderStyle.NONE:
              style = BorderStyle.ALL;
              break;
            case BorderStyle.ALL:
              style = BorderStyle.ACADEMIC;
              break;
            case BorderStyle.ACADEMIC:
              style = BorderStyle.NONE;
              break;
          }
          table.style = style;
          return true;
        });

      // 表格第一列原始数值绑定的对象
      // speed -> null
      // recipe time -> MachineRecipe
      // 其他 -> AbstractRequirement
      let originalValueBinding = [];
      let selectIndex = null;
      let selectCellX = null;
      let selectCellY = null;
      let selectCellWidth = null;
      let selectCellHeight = null;

      // 点击表格数值单元格，选中该单元格并将对应的原始数值显示在输入框中，准备修改
      table.onClick((row, col) => {
        if (col != 1 || row <= 0) {
          return false;
        }
        const bindingObj = originalValueBinding[row - 1];
        if (!bindingObj) {
          return false;
        }
        selectIndex = row - 1;
        const position = table.getCellPosition(row, col);
        const size = table.getCellSize(row, col);
        selectCellX = position.x;
        selectCellY = position.y;
        selectCellWidth = size.width;
        selectCellHeight = size.height;

        editBox.setFocused(true);
        if (bindingObj instanceof MachineRecipe) {
          editBox.setText(bindingObj.getRecipeTime().toString());
        } else if (bindingObj instanceof AbstractRequirement) {
          editBox.setText(bindingObj.amount.toString());
        } else {
          console.error('Unknown binding object type:', bindingObj);
          return false;
        }
        return true;
      });

      // 选中输入框时，若没有选中的单元格，自动选中第一列中的第一个非 null 绑定对象的单元格
      editBox.onFocusSet((prev, now) => {
        if (now) {
          if (selectIndex === null) {
            for (let i = 0; i < originalValueBinding.length; ++i) {
              if (originalValueBinding[i]) {
                selectIndex = i;
                let position = table.getCellPosition(i + 1, 1);
                let size = table.getCellSize(i + 1, 1);
                selectCellX = position.x;
                selectCellY = position.y;
                selectCellWidth = size.width;
                selectCellHeight = size.height;

                if (originalValueBinding[i] instanceof MachineRecipe) {
                  editBox.setText(originalValueBinding[i].getRecipeTime().toString());
                } else if (originalValueBinding[i] instanceof AbstractRequirement) {
                  editBox.setText(originalValueBinding[i].amount.toString());
                }
                break;
              }
            }
          }
        }
      });

      // 输入框确认输入时，将值填入选中的单元格
      editBox.onConfirm((text) => {
        const value = parseInt(text);
        const bindingObj = originalValueBinding[selectIndex];
        if (!bindingObj) {
          return;
        }
        if (bindingObj instanceof MachineRecipe) {
          bindingObj.recipeTime = value;
        } else if (bindingObj instanceof AbstractRequirement) {
          bindingObj.amount = value;
        } else {
          console.error('Unknown binding object type:', bindingObj);
          return;
        }
        onArgumentChange();
      });

      // 当任何可能修改数值的事件（升级变化，原始数据变化）发生时调用，更新显示数据
      const onArgumentChange = () => {
        // 删除原表格信息
        table.deleteRow(1, table.getRowCount() - 1);
        originalValueBinding = [];

        // 获得当前所有升级所产生的modifier
        const allModifiers = machineTile.getUpgradeManager().getAllModifiers();

        // 检查是否需要显示速度/配方时间信息
        // 即，如果存在某个升级修改了速度
        if (
          allModifiers.modifiers.some((modifier) => modifier.shouldApply(RequirementType.SPEED, null, null))
        ) {
          let speed = context.getBaseSpeed();
          let modifiedSpeed = context.getModifiedSpeed();
          let speedTrace = context.getModifiedSpeedTrace(false);
          let speedVariableTrace = context.getModifiedSpeedTrace(true);

          // 显示速度信息
          table
            .pushRow([
              Text.translate('kubejs.jeiaddition.upgrade.modifier._speed'),
              Text.literal(speed.toString() + 'x'),
              Text.literal(addThousandSeparator(parseFloat(modifiedSpeed.toFixed(3))) + 'x'),
            ])
            .setAlignment(table.getRowCount() - 1, 0, Alignment.RIGHT)
            .setTooltipCallback(table.getRowCount() - 1, 0, (builder) => {
              builder.add(Text.translate('kubejs.jeiaddition.upgrade.modifier._speed.tooltip'));
              builder.add(Text.translate('kubejs.jeiaddition.upgrade.modifier._speed.warn.tooltip1').red());
              builder.add(Text.translate('kubejs.jeiaddition.upgrade.modifier._speed.warn.tooltip2').red());
            })
            .setTooltipCallback(table.getRowCount() - 1, 2, (builder) => {
              if (toogleButton.getState()) {
                builder.add(Text.literal('modified =').gold());
                speedVariableTrace.forEach((line) => {
                  builder.add(Text.literal(line).italic());
                });
              } else {
                builder.add(
                  Text.literal(addThousandSeparator(parseFloat(modifiedSpeed.toFixed(3))) + ' =').gold()
                );
                speedTrace.forEach((line) => {
                  builder.add(Text.literal(line).italic());
                });
              }
            });

          let recipeTime = context.getRecipe().getRecipeTime();
          let modifiedRecipeTime = context.getModifiedRecipeTime();
          let recipeTimeTrace = context.getModifiedRecipeTimeTrace(false);
          let recipeTimeVariableTrace = context.getModifiedRecipeTimeTrace(true);

          // 显示配方时间信息
          table
            .pushRow([
              Text.translate('kubejs.jeiaddition.upgrade.modifier.speed'),
              Text.translate('kubejs.jeiaddition.tick', addThousandSeparator(recipeTime)),
              Text.translate('kubejs.jeiaddition.tick', addThousandSeparator(modifiedRecipeTime)),
            ])
            .setAlignment(table.getRowCount() - 1, 0, Alignment.RIGHT)
            .setTooltip(
              table.getRowCount() - 1,
              0,
              Text.translate('kubejs.jeiaddition.upgrade.modifier.speed.tooltip')
            )
            .setTooltipCallback(table.getRowCount() - 1, 2, (builder) => {
              if (toogleButton.getState()) {
                builder.add(Text.literal('modified =').gold());
                recipeTimeVariableTrace.forEach((line) => {
                  builder.add(Text.literal(line).italic());
                });
              } else {
                builder.add(Text.literal(addThousandSeparator(modifiedRecipeTime) + ' =').gold());
                recipeTimeTrace.forEach((line) => {
                  builder.add(Text.literal(line).italic());
                });
              }
            });
          originalValueBinding.push(null, context.getRecipe());
        }

        // 对于其他的参数
        context
          .getRecipe()
          .getRequirements()
          .forEach((requirement) => {
            if (
              // 如果存在某个modifier修改了这个参数
              allModifiers.modifiers.some((modifier) =>
                modifier.shouldApply(requirement.getType(), requirement.mode, null)
              )
            ) {
              // 将这个参数显示在表格中
              let key = UpgradeModifier.toLocalizationKey(requirement.getType(), requirement.mode, null);

              let originalValue = requirement.amount;
              let modifiedValue = requirement.process(context);
              let trace = requirement.processTrace(context, false);
              let variableTrace = requirement.processTrace(context, true);
              table
                .pushRow([
                  Text.translate(key),
                  Text.literal(addThousandSeparator(originalValue) + ' ' + requirement.getUnit()),
                  Text.literal(addThousandSeparator(modifiedValue) + ' ' + requirement.getUnit()),
                ])
                .setAlignment(table.getRowCount() - 1, 0, Alignment.RIGHT)
                .setTooltip(table.getRowCount() - 1, 0, Text.translate(key + '.tooltip'))
                .setTooltipCallback(table.getRowCount() - 1, 2, (builder) => {
                  if (toogleButton.getState()) {
                    builder.add(Text.literal('modified =').gold());
                    variableTrace.forEach((line) => {
                      builder.add(Text.literal(line).italic());
                    });
                  } else {
                    builder.add(Text.literal(addThousandSeparator(modifiedValue) + ' =').gold());
                    trace.forEach((line) => {
                      builder.add(Text.literal(line).italic());
                    });
                  }
                });
              originalValueBinding.push(requirement);
            }
          });
      };

      // 当玩家选择或取消选择升级时调用
      const onSelectUpgradeChange = () => {
        selectIndex = null;
        editBox.setFocused(false);
        calcAvailableMachine();
        onArgumentChange();
      };

      let availableMachine = [];
      const calcAvailableMachine = () => {
        const upgrades = machineTile.getUpgrades().upgrades;
        if (upgrades.length === 0) {
          return;
        }

        let res = upgrades[0].machines;
        let len = upgrades.length;
        for (let i = 1; i < len; ++i) {
          res = res.filter((machine) => upgrades[i].machines.indexOf(machine) >= 0);
          if (res.length === 0) {
            break;
          }
        }
        res = res.map((machine) => machine.slice(1 + machine.lastIndexOf(':'))); // 只保留机器名称部分
        res = res.filter((machine) => machineUpgradeSlotCount.get(machine) >= upgrades.length);
        availableMachine = res;
      };

      const availableMachineTooltip = new MutableRectengularTooltip(176, 10, 16, 16);
      availableMachineTooltip.setTooltipCallback((builder) => {
        if (machineTile.getUpgrades().upgrades.length === 0) {
          builder.add(Text.translate('kubejs.jeiaddition.upgrade_calculator.avai_machine.no_select.tooltip'));
        } else if (!availableMachine || availableMachine.length === 0) {
          builder.add(Text.translate('kubejs.jeiaddition.upgrade_calculator.avai_machine.none.tooltip'));
        } else {
          builder.add(Text.translate('kubejs.jeiaddition.upgrade_calculator.avai_machine.following.tooltip'));
          availableMachine.forEach((machine) => {
            builder.add(Text.literal('* ').append(Text.translate('block.kubejs.' + machine).gold()));
          });
        }
      });

      category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
        // const matrixStack = graphics.pose();

        editBox.draw(graphics);
        toogleButton.draw(recipe, graphics, mouseX, mouseY);
        styleButton.draw(recipe, graphics, mouseX, mouseY);
        $Internal
          .getTextures()
          .getInfoIcon()
          .draw(graphics, availableMachineTooltip.x, availableMachineTooltip.y);
        table.draw(graphics);

        // 若有选中的单元格，且处于输入状态，高亮闪烁显示单元格
        if (selectIndex !== null && editBox.getFocused()) {
          graphics.fill(
            selectCellX,
            selectCellY,
            selectCellX + selectCellWidth,
            selectCellY + selectCellHeight,
            (Timer.getGlobalTick() % 20 < 10 ? 0x7f000000 : 0x3f000000) | Color.LIME_DYE.rgbJS
          );
        }

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
      });

      category.setInputHandler((recipe, mouseX, mouseY, input) => {
        if (toogleButton.handleInput(recipe, mouseX, mouseY, input)) return true;
        if (styleButton.handleInput(recipe, mouseX, mouseY, input)) return true;
        if (table.handleInput(mouseX, mouseY, input)) return true;

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
              machineTile.addUpgrade(MachineUpgrade.getAll()[index], 1);
              onSelectUpgradeChange();
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
              machineTile.removeUpgrade(index);
              onSelectUpgradeChange();
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
            tooltip.add(
              1,
              Text.translate('kubejs.jeiaddition.upgrade_calculator.remove.tooltip').withStyle(
                'italic',
                'gold'
              )
            );
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
            tooltip.add(
              1,
              Text.translate('kubejs.jeiaddition.upgrade_calculator.select.tooltip').withStyle(
                'italic',
                'gold'
              )
            );
            tooltipBuilder.addAll(tooltip);
          }
        }

        table.handleTooltip(tooltipBuilder, mouseX, mouseY);
        editBox.handleTooltip(tooltipBuilder, mouseX, mouseY);
        toogleButton.handleTooltip(tooltipBuilder, recipe, mouseX, mouseY);
        styleButton.handleTooltip(tooltipBuilder, recipe, mouseX, mouseY);
        availableMachineTooltip.handleTooltip(tooltipBuilder, recipe, mouseX, mouseY);
      });
    });
  });
})();
