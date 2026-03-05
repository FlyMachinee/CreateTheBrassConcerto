JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'entity_drop');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'entity_drop');
  const recipeBuilder = event.custom(typeId);

  const renderSalineWater = (graphics) => {
    const matrixStack = graphics.pose();
    matrixStack.pushPose();

    // 渲染像素偏移
    matrixStack.translate(30.5, 53, 50);

    // 渲染轴旋转
    matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5));
    matrixStack.mulPose($Axis.YP.rotationDegrees(22.5));

    $GuiGameElement['of(net.minecraft.world.level.block.state.BlockState)'](
      Block.getBlock('kubejs:saline_water')
        .defaultBlockState()
    )
      .scale(30)
      .atLocal(0, 1, 0)
      .lighting($AnimatedKinetics.DEFAULT_LIGHTING)
      .render(graphics);

    matrixStack.popPose();
  };

  // 添加配方
  const dropData = [
    {
      entityId: 'minecraft:ender_dragon',
      entity: $EntityType.ENDER_DRAGON.create($Minecraft.getInstance().level),
      lootTable: [{ item: 'kubejs:phantom_fungus', quantity: [3, 9] }],
      extraTooltip: 'kubejs.jeiaddition.entity_drop.ender_dragon.tooltip',
    },
    {
      entityId: 'minecraft:slime',
      entity: $EntityType.SLIME.create($Minecraft.getInstance().level),
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
      entityId: 'minecraft:magma_cube',
      entity: $EntityType.MAGMA_CUBE.create($Minecraft.getInstance().level),
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
    category.iconSupplier(() => {
      return new $DoubleItemIcon(
        () => Item.of('minecraft:iron_sword'),
        () => Item.of('kubejs:phantom_fungus')
      );
    });

    category.setWidth(200);
    category.setHeight(100);
    category.background(guiHelper.createBlankDrawable(0, 0));

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      const data = recipe.recipeData;

      // 额外流体隐形输入槽
      if (data.extraFluid) {
        layoutBuilder
          .addInvisibleIngredients($RecipeIngredientRole.INPUT)
          .addFluidStack(data.extraFluid, 1000);
      }

      // 刷怪蛋隐形输入槽
      layoutBuilder
        .addInvisibleIngredients($RecipeIngredientRole.INPUT)
        .addItemStack(Item.of(data.entityId + '_spawn_egg'));

      // 输出物品槽
      for (let i = 0; i < data.lootTable.length; i++) {
        let entry = data.lootTable[i];
        layoutBuilder
          .addSlot($RecipeIngredientRole.OUTPUT, 116 + i * 20, 70)
          .setBackground(
            entry.probability
              ? $CreateRecipeCategory.getRenderedSlot(entry.probability)
              : $CreateRecipeCategory.getRenderedSlot(),
            -1,
            -1
          )
          .addItemStack(
            Item.of(entry.item, typeof entry.quantity === 'number' ? entry.quantity : entry.quantity[0])
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
          });
      }
    });

    /**
     * @param {Internal.LivingEntity} livingEntity
     * @returns {number}
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
     */
    const getOffsetY = (livingEntity) => {
      const offsetY = 0;
      if (livingEntity instanceof $EnderDragon) offsetY = 15;
      return offsetY;
    };

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      const data = recipe.recipeData;

      // 下箭头
      $AllGuiTextures.JEI_DOWN_ARROW.render(graphics, 110, 50);

      const matrixStack = graphics.pose();
      matrixStack.pushPose();

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

      // 额外信息
      if (data.extraInfos) {
        let extraY = 11 + Client.font.lineHeight;
        data.extraInfos.forEach((info) => {
          drawWordWrap(graphics, Client.font, Text.translate(info), 105, extraY, 999, 0xffffff, true);
          extraY += Client.font.lineHeight + 1;
        });
      }

      matrixStack.popPose();

      // 额外渲染
      if (data.extraRender) {
        data.extraRender(graphics);
      }
    });
  });
});
