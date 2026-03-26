JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'entity_drop');
  const recipeBuilder = event.custom(typeId);

  const renderSalineWater = (graphics) => {
    const matrixStack = graphics.pose();
    matrixStack.pushPose();

    // 渲染像素偏移
    matrixStack.translate(30.5, 45, 100);

    // 渲染轴旋转
    matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5));
    matrixStack.mulPose($Axis.YP.rotationDegrees(22.5));

    drawFluidBox(graphics, 'kubejs:saline_water', 12, 0, 1, 0, 30);

    matrixStack.popPose();
  };

  // 添加配方
  const dropData = [
    {
      typeId: 0,
      entityId: 'minecraft:ender_dragon',
      entity: $EntityType.ENDER_DRAGON.create(Client.level),
      lootTable: [{ item: 'kubejs:phantom_fungus', quantity: [3, 9] }],
      extraTooltip: 'kubejs.jeiaddition.entity_drop.ender_dragon.tooltip',
    },
    {
      typeId: 0,
      entityId: 'minecraft:slime',
      entity: $EntityType.SLIME.create(Client.level),
      lootTable: [
        { item: 'kubejs:mycetozoan', quantity: 1, probability: 0.025 },
        { item: 'kubejs:myxomycetes_halophila', quantity: 1, probability: 0.025 },
      ],
      extraFluid: 'kubejs:saline_water',
      extraTooltip: 'kubejs.jeiaddition.entity_drop.slime.tooltip',
      extraInfos: [
        'kubejs.jeiaddition.entity_drop.slime.extra_info1',
        'kubejs.jeiaddition.entity_drop.slime.extra_info2',
      ],
      extraRender: renderSalineWater,
    },
    {
      typeId: 0,
      entityId: 'minecraft:magma_cube',
      entity: $EntityType.MAGMA_CUBE.create(Client.level),
      lootTable: [
        { item: 'kubejs:mycetozoan', quantity: 1, probability: 0.025 },
        { item: 'kubejs:myxomycetes_halophila', quantity: 1, probability: 0.025 },
      ],
      extraFluid: 'kubejs:saline_water',
      extraTooltip: 'kubejs.jeiaddition.entity_drop.slime.tooltip',
      extraInfos: [
        'kubejs.jeiaddition.entity_drop.slime.extra_info1',
        'kubejs.jeiaddition.entity_drop.slime.extra_info2',
      ],
      extraRender: renderSalineWater,
    },
  ];

  // 从战利品表中提取配方

  let root = $FMLPaths.GAMEDIR.get();
  let dir = $FilePaths.get(root.toString(), 'kubejs/data/minecraft/loot_tables/entities');
  try {
    /** @type {Internal.Path[]} */
    let paths = $Files.list(dir).toArray();

    paths.forEach((path) => {
      try {
        if (!$Files.isRegularFile(path) || !path.toString().endsWith('.json')) {
          return;
        }
        let jsonObj = JsonIO.readJson(path).getAsJsonObject();
        let entityName = path.getFileName().toString().replace('.json', '');

        if (!jsonObj.has('type') || jsonObj.get('type').getAsString() !== 'minecraft:entity') {
          return;
        }
        if (!jsonObj.has('pools')) {
          return;
        }

        let pools = jsonObj.getAsJsonArray('pools');
        let entityId = 'minecraft:' + entityName;

        dropData.push({
          typeId: 1,
          entityId: entityId,
          entity: $EntityType[entityName.toUpperCase()].create(Client.level),
          pools: pools,
        });
      } catch (e) {
        console.error('读取战利品表文件出错: ' + e + '，位置：' + path.toString());
      }
    });
  } catch (e) {
    console.error('遍历战利品表目录出错: ' + e + '，位置：' + dir.toString());
  }

  dropData.forEach((entry) => {
    recipeBuilder.add(entry);
  });
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:entity_drop', (category) => {
    // 添加上方标题
    category.title(Text.translate('kubejs.jeiaddition.category.entity_drop.title'));

    // 添加上方小图标
    category.icon(
      new $DoubleItemIcon(
        () => Item.of('minecraft:iron_sword'),
        () => Item.of('kubejs:phantom_fungus')
      )
    );

    category.setWidth(200);
    category.setHeight(100);
    category.background(guiHelper.createBlankDrawable(0, 0));

    /**
     * @type { Map<number, { rolls: number|null, bonusRolls: number|null, conditions: Internal.JsonArray|null, functionsMap: Map<string, Internal.JsonArray|null> }>}
     */
    const entryMap = new Map();

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      const data = recipe.recipeData;
      const outputSlotX = 116;
      const outputSlotY = 70;

      // 刷怪蛋隐形输入槽
      layoutBuilder
        .addInvisibleIngredients($RecipeIngredientRole.INPUT)
        .addItemStack(Item.of(data.entityId + '_spawn_egg'));

      switch (data.typeId) {
        case 0:
          // 额外流体隐形输入槽
          if (data.extraFluid) {
            layoutBuilder
              .addInvisibleIngredients($RecipeIngredientRole.INPUT)
              .addFluidStack(data.extraFluid, 1000);
          }

          // 输出物品槽
          for (let i = 0; i < data.lootTable.length; i++) {
            let entry = data.lootTable[i];
            layoutBuilder
              .addSlot($RecipeIngredientRole.OUTPUT, outputSlotX + i * 20, outputSlotY)
              .setBackground(
                entry.probability
                  ? $CreateRecipeCategory.getRenderedSlot(entry.probability)
                  : $CreateRecipeCategory.getRenderedSlot(),
                -1,
                -1
              )
              .addTooltipCallback((slotView, builder) => {
                let str = '';
                if (typeof entry.quantity === 'number') {
                  str += entry.quantity;
                } else {
                  str += `${entry.quantity[0]}-${entry.quantity[1]}`;
                }

                if (entry.probability < 1) {
                  str += ` (${entry.probability * 100}%)`;
                }

                builder.add(1, Text.literal(str));

                if (data.extraTooltip) {
                  builder.add(2, Text.translate(data.extraTooltip));
                }
              })
              .addItemStack(
                Item.of(entry.item, typeof entry.quantity === 'number' ? entry.quantity : entry.quantity[0])
              );
          }
          break;
        case 1:
          {
            /** @type {Internal.JsonArray} */
            let pools = data.pools;
            let index = 0;
            // 遍历抽取池
            pools.forEach((pool) => {
              const obj = pool.getAsJsonObject();

              if (obj.has('entries')) {
                let ingredient = Ingredient.none;
                let entries = obj.getAsJsonArray('entries');
                if (entries.size() !== 0) {
                  let functionsMap = new Map();

                  entries.forEach((entry) => {
                    let entryObj = entry.getAsJsonObject();
                    if (entryObj.has('type') && entryObj.get('type').getAsString() === 'minecraft:item') {
                      let itemId = (entryObj.get('name').getAsString() + '').toString();
                      ingredient = ingredient.or(itemId);

                      functionsMap.set(
                        itemId.toString(),
                        entryObj.has('functions') ? entryObj.getAsJsonArray('functions') : null
                      );
                    }
                  });

                  entryMap.set(index, {
                    rolls: obj.has('rolls') ? obj.get('rolls').getAsDouble() : null,
                    bonusRolls: obj.has('bonus_rolls') ? obj.get('bonus_rolls').getAsDouble() : null,
                    conditions: obj.has('conditions') ? obj.getAsJsonArray('conditions') : null,
                    functionsMap: functionsMap,
                  });

                  layoutBuilder
                    .addOutputSlot(outputSlotX + index * 20, outputSlotY)
                    .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                    .addTooltipCallback(generalTooltipCallback(index))
                    .addIngredients(ingredient);

                  ++index;
                }
              }
            });
          }
          break;
      }
    });

    /**
     * @param {number} index
     */
    const generalTooltipCallback = (index) => {
      /**
       * @param {Internal.IRecipeSlotView} slotView
       * @param {Internal.List<net.minecraft.network.chat.Component>} builder
       */
      return (slotView, builder) => {
        const optionalItemStack = slotView.getDisplayedItemStack();
        if (optionalItemStack.isEmpty()) {
          return;
        }

        let tooltipIndex = 1;
        let printCount = false;
        let affectedByLooting = false;

        const itemStack = optionalItemStack.get();
        const functionsMap = entryMap.get(index).functionsMap;
        const itemId = (itemStack.getItem().getId() + '').toString();

        if (functionsMap.has(itemId) && functionsMap.get(itemId) !== null) {
          let functions = functionsMap.get(itemId);
          functions.forEach((func) => {
            let funcObj = func.getAsJsonObject();
            if (funcObj.has('function')) {
              let funcType = funcObj.get('function').getAsString();
              switch (funcType) {
                case 'minecraft:set_count':
                  if (funcObj.has('count')) {
                    let count = funcObj.get('count');
                    printCount = true;
                    if (count.isJsonPrimitive() && count.getAsJsonPrimitive().isNumber()) {
                      builder.add(
                        tooltipIndex++,
                        Text.translate('kubejs.jeiaddition.entity_drop.set_count.tooltip', count.getAsInt())
                      );
                    } else if (
                      count.isJsonObject() &&
                      count.getAsJsonObject().has('min') &&
                      count.getAsJsonObject().has('max')
                    ) {
                      let min = count.getAsJsonObject().get('min').getAsInt();
                      let max = count.getAsJsonObject().get('max').getAsInt();
                      builder.add(
                        tooltipIndex++,
                        Text.translate('kubejs.jeiaddition.entity_drop.set_count.tooltip', `${min}-${max}`)
                      );
                    }
                  }
                  break;
                case 'minecraft:looting_enchant':
                  affectedByLooting = true;
                  if (funcObj.has('count')) {
                    let count = funcObj.get('count');
                    if (count.isJsonPrimitive() && count.getAsJsonPrimitive().isNumber()) {
                      builder.add(
                        tooltipIndex++,
                        Text.translate(
                          'kubejs.jeiaddition.entity_drop.looting_enchant.tooltip',
                          count.getAsInt()
                        )
                      );
                    } else if (
                      count.isJsonObject() &&
                      count.getAsJsonObject().has('min') &&
                      count.getAsJsonObject().has('max')
                    ) {
                      let min = count.getAsJsonObject().get('min').getAsInt();
                      let max = count.getAsJsonObject().get('max').getAsInt();
                      builder.add(
                        tooltipIndex++,
                        Text.translate(
                          'kubejs.jeiaddition.entity_drop.looting_enchant.tooltip',
                          `${min}-${max}`
                        )
                      );
                    }
                  }
                  break;
                // 其他函数类型可以继续添加
              }
            }
          });
        }

        if (!printCount) {
          let countString = Text.literal('1');
          let conditions = entryMap.get(index).conditions;
          if (conditions !== null) {
            conditions.forEach((condition) => {
              let conditionObj = condition.getAsJsonObject();
              if (conditionObj.has('condition')) {
                switch (conditionObj.get('condition').getAsString()) {
                  case 'minecraft:killed_by_player':
                    builder.add(
                      tooltipIndex++,
                      Text.translate('kubejs.jeiaddition.entity_drop.killed_by_player.tooltip')
                    );
                    break;
                  case 'minecraft:random_chance_with_looting':
                    affectedByLooting = true;
                    if (conditionObj.has('chance')) {
                      let chance = conditionObj.get('chance').getAsDouble();
                      if (
                        conditionObj.has('condition') &&
                        conditionObj.get('condition').getAsString() === 'minecraft:random_chance_with_looting'
                      ) {
                        let multiplier = conditionObj.get('looting_multiplier').getAsDouble();
                        countString.append(
                          Text.translate(
                            'kubejs.jeiaddition.entity_drop.random_chance_with_looting.tooltip',
                            (chance * 100).toString(),
                            (multiplier * 100).toString()
                          )
                        );
                      } else {
                        countString.append(Text.literal(` (${chance * 100}%)`));
                      }
                    }
                    break;
                  // 其他条件类型可以继续添加
                }
              }
            });
          }
          builder.add(tooltipIndex++, countString);
        }

        if (!affectedByLooting) {
          builder.add(
            tooltipIndex++,
            Text.translate('kubejs.jeiaddition.entity_drop.not_affected_by_looting.tooltip')
          );
        }

        const rolls = entryMap.get(index).rolls;
        if (rolls !== null && rolls !== 1) {
          builder.add(tooltipIndex++, Text.translate('kubejs.jeiaddition.entity_drop.rolls.tooltip', rolls));
        }

        const bonusRolls = entryMap.get(index).bonusRolls;
        if (bonusRolls !== null && bonusRolls !== 0) {
          builder.add(
            tooltipIndex++,
            Text.translate('kubejs.jeiaddition.entity_drop.bonus_rolls.tooltip', bonusRolls)
          );
        }
      };
    };

    /**
     * @param {Internal.LivingEntity} livingEntity
     * @returns {number}
     *
     * @note 参考 https://github.com/way2muchnoise/JustEnoughResources/blob/master/Common/src/main/java/jeresources/jei/mob/MobWrapper.java#L94
     */
    const getScale = (livingEntity) => {
      const width = livingEntity.getBbWidth();
      const height = livingEntity.getBbHeight();
      if (width <= height) {
        if (height < 0.9) return 50;
        else if (height < 1) return 35;
        else if (height < 1.8) return 33;
        else if (height < 2) return 32;
        else if (height < 3) return 24;
        else if (height < 4) return 20;
        else return 10;
      } else {
        if (width < 1) return 38;
        else if (width < 2) return 27;
        else if (width < 3) return 13;
        else return 9;
      }
    };

    /**
     * @param {Internal.LivingEntity} livingEntity
     * @returns {number}
     *
     * @note 参考 https://github.com/way2muchnoise/JustEnoughResources/blob/master/Common/src/main/java/jeresources/jei/mob/MobWrapper.java#L113
     */
    const getOffsetY = (livingEntity) => {
      let offsetY = 0;
      if (livingEntity instanceof $Zombie) offsetY = -25;
      return offsetY;
    };

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      const data = recipe.recipeData;

      // 下箭头
      $AllGuiTextures.JEI_DOWN_ARROW.render(graphics, 110, 50);

      const livingEntity = data.entity;

      const scale = getScale(livingEntity);
      const offsetY = getOffsetY(livingEntity);

      // 绘制实体
      drawEntity(graphics, 50, 60 - offsetY, scale, 51 - mouseX, 25 - offsetY - mouseY, livingEntity);

      // 实体名称
      drawWordWrap(
        graphics,
        Client.font,
        Text.literal(data.entity.getName().getString()),
        105,
        data.extraInfos ? 10 : 11 + Client.font.lineHeight,
        999,
        0xffffff,
        true
      );

      switch (data.typeId) {
        case 0:
          // 额外信息
          if (data.extraInfos) {
            let extraY = 11 + Client.font.lineHeight;
            data.extraInfos.forEach((info) => {
              drawWordWrap(graphics, Client.font, Text.translate(info), 105, extraY, 999, 0xffffff, true);
              extraY += Client.font.lineHeight + 1;
            });
          }

          // 额外渲染
          if (data.extraRender) {
            data.extraRender(graphics);
          }
          break;
      }
    });
  });
});
