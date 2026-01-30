JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'block_crafting');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  blockCraftingRecipes.forEach((obj) => {
    recipeBuilder.add(obj);
  });
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:block_crafting', (category) => {
    // 添加上方标题
    category.title(Text.translate('kubejs.jeiaddition.category.block_crafting.title'));

    // 添加上方小图标
    category.iconSupplier(() => {
      return new $DoubleItemIcon(
        () => Item.of('minecraft:grass_block'),
        () => Item.of('create:wrench')
      );
    });

    category.setWidth(178);
    category.setHeight(200);
    category.background(guiHelper.createBlankDrawable(0, 0));

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      // 使用工具槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.CATALYST, 150, 25)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .addItemStack(Item.of(recipe.recipeData.crafting_with));

      // 使用对象槽
      let obj = recipe.recipeData.mapping[recipe.recipeData.crafting_on];
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, 150, 50)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .addItemStack(Item.of(typeof obj === 'string' ? obj : obj.id));

      // 输出物品槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.OUTPUT, 135, 130)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .addItemStack(Item.of(recipe.recipeData.output_item, recipe.recipeData.output_count));

      // 隐形原料槽
      for (let key in recipe.recipeData.mapping) {
        if (key === recipe.recipeData.crafting_on) continue;

        let map_obj = recipe.recipeData.mapping[key];
        layoutBuilder
          .addInvisibleIngredients($RecipeIngredientRole.INPUT)
          .addItemStack(Item.of(typeof map_obj === 'string' ? map_obj : map_obj.id));
      }
    });

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      // 圆形大阴影
      // 来自 Create Big Cannons
      $CBCGuiTextures.CANNON_CAST_SHADOW.render(
        graphics,
        54 - $CBCGuiTextures.CANNON_CAST_SHADOW.width / 2,
        135
      );

      // 下箭头
      $AllGuiTextures.JEI_DOWN_ARROW.render(graphics, category.getWidth() / 2 + 40, 110);

      // 使用文本
      drawRightAlignedString(
        graphics,
        Client.font,
        Text.translate('kubejs.jeiaddition.use'),
        140,
        29,
        0xffffff,
        true
      );

      // 右键文本
      drawRightAlignedString(
        graphics,
        Client.font,
        Text.translate('kubejs.jeiaddition.right_click'),
        140,
        54,
        0xffffff,
        true
      );

      // 进行合成文本
      drawRightAlignedString(
        graphics,
        Client.font,
        Text.translate('kubejs.jeiaddition.block_crafting.desc1'),
        167,
        84,
        0xffffff,
        true
      );

      // 思索提示文本
      drawCenteredString(
        graphics,
        Client.font,
        Text.translate('kubejs.jeiaddition.block_crafting.desc2'),
        category.getWidth() / 2,
        185,
        0xffffff,
        true
      );

      const matrixStack = graphics.pose();
      matrixStack.pushPose();

      // 渲染像素偏移
      matrixStack.translate(41, 155, 100);

      // 渲染轴旋转
      // 这两个值来之不易，源码没翻出来，手动测试，与 Ponder 场景中的角度一致（至少肉眼看不出区别）
      const x_axis_angle = -35.5;
      const y_axis_angle = 54.5;
      matrixStack.mulPose($Axis.XP.rotationDegrees(x_axis_angle));
      matrixStack.mulPose($Axis.YP.rotationDegrees(y_axis_angle));

      // 由于渲染轴不是默认值，需自定义光照
      const lighting = $CustomLightingSettings
        .builder()
        .firstLightRotation(0, 135)
        .secondLightRotation(0, 0)
        .build();

      const scale = 20;

      // 渲染单个方块函数
      const renderBlock = (block_info, x, y, z) => {
        const coordinates = transform(x, y, z);

        // reverse 额外渲染
        if (
          typeof block_info !== 'string' &&
          'extra' in block_info &&
          'reverse' in block_info &&
          block_info.reverse
        ) {
          block_info.extra(
            graphics,
            lighting,
            coordinates[0],
            coordinates[1],
            coordinates[2],
            scale
          );
        }

        // 检查是否 skip
        if (typeof block_info === 'string' || !('skip' in block_info) || !block_info.skip) {
          // 正常渲染
          let blockState;

          // 设置方块状态
          if (typeof block_info === 'string') {
            blockState = Block.getBlock(block_info).defaultBlockState();
          } else {
            blockState = Block.getBlock(block_info.id).defaultBlockState();

            // 设置方块属性值
            if ('values' in block_info) {
              for (let i = 0; i < block_info.values.length; ++i) {
                let elem = block_info.values[i];
                blockState = blockState.setValue(elem[0], elem[1]);
              }
            }
          }

          // 创建 builder，提供光照
          let builder =
            $GuiGameElement['of(net.minecraft.world.level.block.state.BlockState)'](
              blockState
            ).lighting(lighting);

          // 进行方块旋转
          // 方块生成时，若不进行旋转，默认面向数学的 -x 轴
          if (typeof block_info !== 'string') {
            if ('face_center' in block_info) {
              // 朝向中心旋转
              let dx = x - 1;
              let dy = y - 1;

              if (dx !== 0) {
                if (dx > 0 !== block_info.face_center) {
                  // 面向中心
                  rotateXYZ(builder, 0, 0, 180);
                }
              } else if (dy !== 0) {
                rotateXYZ(builder, 0, 0, dy > 0 === block_info.face_center ? 90 : -90);
              }
            } else if ('face' in block_info) {
              // 朝向旋转
              switch (block_info.face) {
                case 'PX':
                  rotateXYZ(builder, 0, 0, 180);
                  break;
                case 'NX':
                  // 默认朝向，无需旋转
                  break;
                case 'PY':
                  rotateXYZ(builder, 0, 0, -90);
                  break;
                case 'NY':
                  rotateXYZ(builder, 0, 0, 90);
                  break;
                case 'PZ':
                  rotateXYZ(builder, 0, 90, 0);
                  break;
                case 'NZ':
                  rotateXYZ(builder, 0, -90, 0);
                  break;
              }
            } else if ('rotate' in block_info) {
              // 自定义旋转
              rotateXYZ(builder, block_info.rotate[0], block_info.rotate[1], block_info.rotate[2]);
            } else {
              // 默认面向数学正 y 轴
              rotateXYZ(builder, 0, 0, -90);
            }
          } else {
            // 默认面向数学正 y 轴
            rotateXYZ(builder, 0, 0, -90);
          }

          // 收尾
          builder
            .atLocal(coordinates[0], coordinates[1], coordinates[2])
            .scale(scale)
            .render(graphics);
        }

        // 额外渲染
        if (
          typeof block_info !== 'string' &&
          'extra' in block_info &&
          (!('reverse' in block_info) || !block_info.reverse)
        ) {
          block_info.extra(
            graphics,
            lighting,
            coordinates[0],
            coordinates[1],
            coordinates[2],
            scale
          );
        }
      };

      // 渲染结构
      for (let z = 0; z < recipe.recipeData.pattern.length; ++z) {
        for (let y = 0; y < recipe.recipeData.pattern[z].length; ++y) {
          for (let x = 0; x < recipe.recipeData.pattern[z][y].length; ++x) {
            let new_xyz = recipe.recipeData.re_index(x, y, z);

            let char = recipe.recipeData.pattern[new_xyz[2]][new_xyz[1]][new_xyz[0]];
            let block_info = recipe.recipeData.mapping[char];

            if (block_info !== undefined && block_info !== 'minecraft:air') {
              renderBlock(block_info, x, y, z);
            }
          }
        }
      }

      // 坐标轴
      // renderBlock('minecraft:glass', 0, 0, 0);
      // for (let i = 1; i <= 2; ++i) renderBlock('minecraft:red_wool', i, 0, 0); // X
      // for (let j = 1; j <= 2; ++j) renderBlock('minecraft:green_wool', 0, j, 0); // Y
      // for (let k = 1; k <= 7; ++k) renderBlock('minecraft:blue_wool', 0, 0, k); // Z

      // 旋转测试
      // for (let i = 0; i <= 2; ++i) {
      //   for (let z = 0; z <= 3; ++z) {
      //     let coordinates = transform(i, 1, z);
      //     let builder = $AnimatedKinetics.defaultBlockElement(
      //       // $AllBlocks.MECHANICAL_PUMP.getDefaultState()
      //       Block.getBlock('minecraft:spruce_stairs').defaultBlockState()
      //     );

      //     rotateXYZ(builder, i === 0 ? z * 90 : 0, i === 1 ? z * 90 : 0, i === 2 ? z * 90 : 0);

      //     builder
      //       .atLocal(coordinates[0], coordinates[1], coordinates[2])
      //       .scale(scale)
      //       .render(graphics);
      //   }

      //   renderBlock(
      //     ['minecraft:red_wool', 'minecraft:green_wool', 'minecraft:blue_wool'][i],
      //     i,
      //     1,
      //     -1
      //   );
      // }

      // 旋转优先级测试
      // let all_case = [
      //   [0, 0, 0],
      //   [0, 0, 1],
      //   [0, 1, 0],
      //   [1, 0, 0],
      //   [1, 1, 0],
      //   [1, 0, 1],
      //   [0, 1, 1],
      //   [1, 1, 1],
      // ];

      // for (let i = 0; i < all_case.length; ++i) {
      //   let coordinates = transform(1, 1, i);

      //   let builder = $AnimatedKinetics.defaultBlockElement(
      //     // $AllBlocks.MECHANICAL_PUMP.getDefaultState()
      //     Block.getBlock('minecraft:spruce_stairs').defaultBlockState()
      //   );

      //   rotateXYZ(builder, 
      //     all_case[i][0] === 1 ? 90 : 0, 
      //     all_case[i][1] === 1 ? 90 : 0, 
      //     all_case[i][2] === 1 ? 90 : 0
      //   );

      //   builder
      //     .atLocal(coordinates[0], coordinates[1], coordinates[2])
      //     .scale(scale)
      //     .render(graphics);
      // }

      matrixStack.popPose();
    });
  });
});
