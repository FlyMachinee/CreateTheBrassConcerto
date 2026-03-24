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

    category.setWidth(200);
    category.setHeight(150);
    category.background(guiHelper.createBlankDrawable(0, 0));

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      // 使用工具槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.CATALYST, 170, 15)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .addItemStack(Item.of(recipe.recipeData.crafting_with));

      // 使用对象槽
      let obj = recipe.recipeData.mapping[recipe.recipeData.crafting_on];
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, 170, 35)
        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
        .addItemStack(Item.of(typeof obj === 'string' ? obj : obj.id));

      // 输出物品槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.OUTPUT, 152, 100)
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

    // 额外绕渲染 y 轴旋转的角度
    let extraSpin = 0;

    // 旋转控制按钮
    // 逆时针旋转
    const leftSpinButton = new ToggleButton(30, 135, 14, 10, Text.literal('⟲'));
    // 重置旋转
    const resetSpinButton = new ClickButton(48, 135, 14, 10, Text.literal('R'));
    // 顺时针旋转
    const rightSpinButton = new ToggleButton(66, 135, 14, 10, Text.literal('⟳'));

    resetSpinButton.onClick(() => {
      extraSpin = 0;
      leftSpinButton.setState(false);
      rightSpinButton.setState(false);
      return true;
    });

    leftSpinButton.onClick((recipe, currentPressed) => {
      if (!currentPressed) {
        // false -> true
        rightSpinButton.setState(false);
      }
      return true;
    });

    rightSpinButton.onClick((recipe, currentPressed) => {
      if (!currentPressed) {
        // false -> true
        leftSpinButton.setState(false);
      }
      return true;
    });

    // 当前高亮的层（数学 z 轴），null 则为无高亮层，即全部显示
    let currentLayer = null;

    // 高亮层控制按钮
    // 高亮层上移
    const layerUpButton = new ClickButton(110, 65, 10, 14, Text.literal('↑'));
    // 重置高亮层
    const resetLayerButton = new ClickButton(110, 83, 10, 14, Text.literal('A'));
    // 高亮层下移
    const layerDownButton = new ClickButton(110, 101, 10, 14, Text.literal('↓'));

    resetLayerButton.onClick(() => {
      currentLayer = null;
      return true;
    });

    layerUpButton
      .onClick(() => {
        if (currentLayer === null) {
          currentLayer = 0;
        } else {
          ++currentLayer;
        }
        return true;
      })
      .setEnableCallback((recipe) => {
        return currentLayer === null || currentLayer < recipe.recipeData.pattern.length - 1;
      });

    layerDownButton
      .onClick((recipe) => {
        if (currentLayer === null) {
          currentLayer = recipe.recipeData.pattern.length - 1;
        } else {
          --currentLayer;
        }
        return true;
      })
      .setEnableCallback(() => {
        return currentLayer === null || currentLayer > 0;
      });

    /**
     * 鼠标指向的方块坐标（渲染轴）
     * @type {Vec3f}
     */
    let lookAt = null;

    /**
     * 上一个边界框（渲染轴），用于过渡动画
     * @type {Internal.AABB}
     */
    let prevBounds = null;

    /**
     * 当前边界框（渲染轴），用于渲染和过渡动画
     * @type {Internal.AABB}
     */
    let currentBounds = null;

    let lastTick = $AnimationTickHolder.getTicks();

    const getBlockInfo = (recipe, x, y, z) => {
      let new_xyz = recipe.recipeData.re_index(x, y, z);
      let char = recipe.recipeData.pattern[new_xyz[2]][new_xyz[1]][new_xyz[0]];
      return recipe.recipeData.mapping[char];
    };

    /**
     * 检查坐标位置（渲染轴）是否有方块
     */
    const hasBlockAt = (recipe, x, y, z) => {
      // 渲染时进行了变换（数学轴至渲染轴），这里反推时就需要对应的逆变换（渲染轴至数学轴）
      const reversedXYZ = reverseTransform(x, y, z);
      reversedXYZ[2] -= 1;

      // 长度检测
      let newXYZ = recipe.recipeData.re_index(reversedXYZ[0], reversedXYZ[1], reversedXYZ[2]);
      if (newXYZ[2] < 0 || newXYZ[2] >= recipe.recipeData.pattern.length) return false;
      if (newXYZ[1] < 0 || newXYZ[1] >= recipe.recipeData.pattern[newXYZ[2]].length) return false;
      if (newXYZ[0] < 0 || newXYZ[0] >= recipe.recipeData.pattern[newXYZ[2]][newXYZ[1]].length) return false;

      // 虚影检测
      if (currentLayer !== null && reversedXYZ[2] !== currentLayer) {
        // 无法选中虚影方块
        return false;
      }

      let block_info = getBlockInfo(recipe, reversedXYZ[0], reversedXYZ[1], reversedXYZ[2]);
      return block_info !== undefined && block_info !== 'minecraft:air';
    };

    let lastRenderTime = $AnimationTickHolder.getRenderTime();

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      // 圆形大阴影
      // 来自 Create Big Cannons
      $CBCGuiTextures.CANNON_CAST_SHADOW.render(
        graphics,
        54 - $CBCGuiTextures.CANNON_CAST_SHADOW.width / 2,
        85
      );

      // 下箭头
      $AllGuiTextures.JEI_DOWN_ARROW.render(graphics, 147, 80);

      // 使用文本
      drawRightAlignedString(
        graphics,
        Client.font,
        Text.translate('kubejs.jeiaddition.use'),
        160,
        15 + 8 - Client.font.lineHeight / 2,
        0xffffff,
        true
      );

      // 右键文本
      drawRightAlignedString(
        graphics,
        Client.font,
        Text.translate('kubejs.jeiaddition.right_click'),
        160,
        35 + 8 - Client.font.lineHeight / 2,
        0xffffff,
        true
      );

      // 进行合成文本
      drawRightAlignedString(
        graphics,
        Client.font,
        Text.translate('kubejs.jeiaddition.block_crafting.desc1'),
        187,
        60,
        0xffffff,
        true
      );

      // 渲染旋转按钮
      leftSpinButton.draw(recipe, graphics, mouseX, mouseY);
      rightSpinButton.draw(recipe, graphics, mouseX, mouseY);
      resetSpinButton.draw(recipe, graphics, mouseX, mouseY);

      if (recipe.recipeData.pattern.length > 1) {
        // 高度大于 1，渲染层数控制按钮
        layerUpButton.draw(recipe, graphics, mouseX, mouseY);
        layerDownButton.draw(recipe, graphics, mouseX, mouseY);
        resetLayerButton.draw(recipe, graphics, mouseX, mouseY);
      } else {
        currentLayer = null;
      }

      if (currentLayer != null && currentLayer >= recipe.recipeData.pattern.length) {
        // 选中层数超过最大层数，重置为无选中层，防溢出
        currentLayer = null;
      }

      // 旋转控制
      const renderTime = $AnimationTickHolder.getRenderTime();
      if (leftSpinButton.getState()) {
        // 逆时针旋转
        extraSpin = positiveMod(extraSpin + (renderTime - lastRenderTime) * 2, 360);
      } else if (rightSpinButton.getState()) {
        // 顺时针旋转
        extraSpin = positiveMod(extraSpin - (renderTime - lastRenderTime) * 2, 360);
      }
      lastRenderTime = renderTime;

      const scale = 20;

      const matrixStack = graphics.pose();
      matrixStack.pushPose();

      // 渲染像素偏移
      matrixStack.translate(44, 102, 100);

      // 渲染轴旋转
      // 这两个值来之不易，源码没翻出来，手动测试，与 Ponder 场景中的角度一致（至少肉眼看不出区别）
      const x_axis_angle = -35.5;
      const y_axis_angle = 54.5;

      matrixStack.mulPose($Axis.XP.rotationDegrees(x_axis_angle));
      matrixStack.scale(scale, scale, scale);
      matrixStack.translate(0.5, 0, 0.5);
      matrixStack.mulPose($Axis.YP.rotationDegrees(y_axis_angle + extraSpin));
      matrixStack.translate(-0.5, 0, -0.5);

      // 由于渲染轴不是默认值，需自定义光照
      const lighting = $CustomLightingSettings
        .builder()
        .firstLightRotation(0, 135)
        .secondLightRotation(0, 0)
        .build();

      // 渲染单个方块函数
      const renderBlock = (block_info, x, y, z, isPhantom) => {
        const coordinates = transform(x, y, z);

        const mainRender = () => {
          // 检查是否 skip
          if (typeof block_info !== 'string' && 'skip' in block_info && block_info.skip) {
            return;
          }

          matrixStack.pushPose();
          matrixStack.translate(coordinates[0], coordinates[1], coordinates[2]);

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

          // 进行方块旋转
          // 方块生成时，若不进行旋转，默认面向数学的 -x 轴
          let xRot = 0;
          let yRot = 0;
          let zRot = 0;
          if (typeof block_info !== 'string') {
            if ('face_center' in block_info) {
              // 朝向中心旋转
              let dx = x - 1;
              let dy = y - 1;

              if (dx !== 0) {
                if (dx > 0 !== block_info.face_center) {
                  // 面向中心
                  zRot = 180;
                }
              } else if (dy !== 0) {
                zRot = dy > 0 === block_info.face_center ? 90 : -90;
              }
            } else if ('face' in block_info) {
              // 朝向旋转
              switch (block_info.face) {
                case 'PX':
                  zRot = 180;
                  break;
                case 'NX':
                  // 默认朝向，无需旋转
                  break;
                case 'PY':
                  zRot = -90;
                  break;
                case 'NY':
                  zRot = 90;
                  break;
                case 'PZ':
                  yRot = 90;
                  break;
                case 'NZ':
                  yRot = -90;
                  break;
              }
            } else if ('rotate' in block_info) {
              // 自定义旋转
              xRot = block_info.rotate[0];
              yRot = block_info.rotate[1];
              zRot = block_info.rotate[2];
            } else {
              // 默认面向数学正 y 轴
              zRot = -90;
            }
          } else {
            // 默认面向数学正 y 轴
            zRot = -90;
          }

          if (isPhantom) {
            drawPhantomBlock(graphics, blockState, 0, 0, 0, 1, yRot, -zRot, -xRot, 0.2);
          } else {
            // 创建 builder，提供光照
            let builder =
              $GuiGameElement['of(net.minecraft.world.level.block.state.BlockState)'](blockState).lighting(
                lighting
              );
            rotateXYZ(builder, xRot, yRot, zRot);
            builder.render(graphics);
          }
          matrixStack.popPose();
        };

        const extraRender = () => {
          if (typeof block_info !== 'string' && 'extra' in block_info) {
            block_info.extra(
              graphics,
              lighting,
              coordinates[0],
              coordinates[1],
              coordinates[2],
              1,
              leftSpinButton.getState() || rightSpinButton.getState()
            );
          }
        };

        if (isPhantom) {
          mainRender();
        } else if (typeof block_info === 'string' || !('reverse' in block_info) || !block_info.reverse) {
          // 先渲染方块本体
          mainRender();
          extraRender();
        } else {
          // 先渲染额外结构
          extraRender();
          mainRender();
        }
      };

      // 渲染结构
      for (let z = 0; z < recipe.recipeData.pattern.length; ++z) {
        for (let y = 0; y < recipe.recipeData.pattern[z].length; ++y) {
          for (let x = 0; x < recipe.recipeData.pattern[z][y].length; ++x) {
            let block_info = getBlockInfo(recipe, x, y, z);
            if (block_info !== undefined && block_info !== 'minecraft:air') {
              let isPhantom = currentLayer !== null && currentLayer !== z;
              renderBlock(block_info, x, y, z, isPhantom);
            }
          }
        }
      }

      // 当前 tick 值（整数）
      const tick = $AnimationTickHolder.getTicks();

      // 获得当前鼠标指向的非空方块坐标位置
      let lookAtResult = checkMouseFocus(
        graphics,
        mouseX,
        mouseY,
        category.getWidth(),
        category.getHeight(),
        (x, y, z) => hasBlockAt(recipe, x, y, z)
      );

      if (!lookAtResult) {
        // 什么都没有，清空数据
        lookAt = null;
        prevBounds = null;
        currentBounds = null;
      } else {
        // 指向了方块，需要渲染
        let buffer = getSuperRenderTypeBuffer().getInstance();
        lookAt = lookAtResult;

        if (!currentBounds) {
          // 之前什么都没有指向，现在有了，直接设置当前边界框，无需过渡动画
          currentBounds = AABB.of(
            lookAt.x(),
            lookAt.y(),
            lookAt.z(),
            lookAt.x() + 1,
            lookAt.y() + 1,
            lookAt.z() + 1
          );
        } else {
          // 之前指向了某个方块，进行过渡动画
          // js 无法实现可让 JEI 调用的 tick 函数，只能在渲染函数中模拟
          while (lastTick < tick) {
            lastTick += 1;
            prevBounds = currentBounds;
            // 每 tick 前进当前剩余距离的一半，表现为距离指数衰减（1 - e^-t)
            currentBounds = AABB.of(
              lerp(currentBounds.minX, lookAt.x(), 0.5),
              lerp(currentBounds.minY, lookAt.y(), 0.5),
              lerp(currentBounds.minZ, lookAt.z(), 0.5),
              lerp(currentBounds.maxX, lookAt.x() + 1, 0.5),
              lerp(currentBounds.maxY, lookAt.y() + 1, 0.5),
              lerp(currentBounds.maxZ, lookAt.z() + 1, 0.5)
            );
          }
        }

        if (prevBounds) {
          // 如果有上一个边界框，说明正在进行过渡动画，渲染插值后的边界框
          // PartialTicks 是当前 tick 内的进度，范围 [0, 1)
          let pt = $AnimationTickHolder.getPartialTicks();
          let interpolatedBounds = AABB.of(
            lerp(prevBounds.minX, currentBounds.minX, pt),
            lerp(prevBounds.minY, currentBounds.minY, pt),
            lerp(prevBounds.minZ, currentBounds.minZ, pt),
            lerp(prevBounds.maxX, currentBounds.maxX, pt),
            lerp(prevBounds.maxY, currentBounds.maxY, pt),
            lerp(prevBounds.maxZ, currentBounds.maxZ, pt)
          );
          let outline = new $AABBOutline(interpolatedBounds);
          outline
            .getParams()
            .colored(0x6886c5)
            .withFaceTexture($AllSpecialTextures.HIGHLIGHT_CHECKERED)
            .lineWidth(1 / 16);
          outline.render(matrixStack, buffer, Vec3d.ZERO, 0);
          outline.getParams().clearTextures();
        } else {
          // 没有上一个边界框，说明之前没有指向任何方块，直接渲染当前边界框
          let outline = new $AABBOutline(currentBounds);
          outline
            .getParams()
            .colored(0x6886c5)
            .withFaceTexture($AllSpecialTextures.HIGHLIGHT_CHECKERED)
            .lineWidth(1 / 16);
          outline.render(matrixStack, buffer, Vec3d.ZERO, 0);
          outline.getParams().clearTextures();
        }
        buffer.draw();
      }
      matrixStack.popPose();
    });

    // 处理输入事件
    category.setInputHandler((recipe, mouseX, mouseY, input) => {
      if (recipe.recipeData.pattern.length <= 1) {
        // 高度为 1 的结构无需层数控制，隐藏层数控制按钮，并且不处理它们的输入事件
        return (
          leftSpinButton.handleInput(recipe, mouseX, mouseY, input) ||
          rightSpinButton.handleInput(recipe, mouseX, mouseY, input) ||
          resetSpinButton.handleInput(recipe, mouseX, mouseY, input)
        );
      } else {
        return (
          leftSpinButton.handleInput(recipe, mouseX, mouseY, input) ||
          rightSpinButton.handleInput(recipe, mouseX, mouseY, input) ||
          resetSpinButton.handleInput(recipe, mouseX, mouseY, input) ||
          layerUpButton.handleInput(recipe, mouseX, mouseY, input) ||
          layerDownButton.handleInput(recipe, mouseX, mouseY, input) ||
          resetLayerButton.handleInput(recipe, mouseX, mouseY, input)
        );
      }
    });

    let lastBlockId = null;
    let lastTooltip = null;

    category.setTooltipHandlerOverride((tooltipBuilder, recipe, recipeSlotsView, mouseX, mouseY) => {
      if (lookAt) {
        // 渲染时进行了变换，这里反推时就需要对应的逆变换
        let reversedXYZ = reverseTransform(lookAt.x(), lookAt.y(), lookAt.z());
        reversedXYZ[2] -= 1;

        let blockInfo = getBlockInfo(recipe, reversedXYZ[0], reversedXYZ[1], reversedXYZ[2]);
        let blockId;
        if (typeof blockInfo === 'string') {
          blockId = blockInfo;
        } else {
          blockId = blockInfo.id;
        }

        if (!blockId || blockId === 'minecraft:air') {
          return;
        }

        if (blockId === lastBlockId) {
          // 方块相同，复用上次的 tooltip 数据
          if (lastTooltip) {
            tooltipBuilder.addAll(lastTooltip);
            return;
          }
        }

        lastTooltip = $Screen.getTooltipFromItem(Client, Item.of(blockId));
        lastBlockId = blockId;
        tooltipBuilder.addAll(lastTooltip);
      }
    });
  });
});
