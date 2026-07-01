JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'rotation_test');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('minecraft:white_wool'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'rotation_test');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  recipeBuilder.add({});
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:rotation_test', (category) => {
    // 添加上方标题
    category.title(Text.literal('Rotation Test').color(0xfca800));

    // 添加上方小图标
    category.icon(guiHelper.createDrawableItemStack(Item.of('minecraft:barrier')));

    category.setWidth(200);
    category.setHeight(200);
    category.background(guiHelper.createBlankDrawable(0, 0));

    let xRot = 0;
    let yRot = 0;
    let zRot = 0;

    const xButton = new ClickButton(10, 10, 10, 10, Text.literal('X').color(0xff0000));
    const yButton = new ClickButton(30, 10, 10, 10, Text.literal('Y').color(0x00ff00));
    const zButton = new ClickButton(50, 10, 10, 10, Text.literal('Z').color(0x0000ff));

    const xClearButton = new ClickButton(70, 10, 10, 10, Text.literal('CX').color(0xffffff));
    const yClearButton = new ClickButton(90, 10, 10, 10, Text.literal('CY').color(0xffffff));
    const zClearButton = new ClickButton(110, 10, 10, 10, Text.literal('CZ').color(0xffffff));

    xButton.onClick(() => {
      xRot = (xRot + 5) % 360;
      return true;
    });

    yButton.onClick(() => {
      yRot = (yRot + 5) % 360;
      return true;
    });

    zButton.onClick(() => {
      zRot = (zRot + 5) % 360;
      return true;
    });

    xClearButton.onClick(() => {
      xRot = 0;
      return true;
    });

    yClearButton.onClick(() => {
      yRot = 0;
      return true;
    });

    zClearButton.onClick(() => {
      zRot = 0;
      return true;
    });

    /** @type {Vec3f} */
    let lookAt = null;

    /** @type {ChasingAABBOutlineWrapper} */
    let chasingAABBOutline = null;

    let lastTick = $AnimationTickHolder.getTicks();

    const mouseEventDriver = new MouseEventDriver();
    mouseEventDriver
      .setXRange(0, category.getWidth())
      .setYRange(0, category.getHeight())
      .addMouseDragCallback((mouseX, mouseY, key, dragX, dragY) => {
        if (key === $InputConstants.MOUSE_BUTTON_LEFT) {
          let sensitivity = 1;

          xRot -= dragY * sensitivity;
          yRot += dragX * sensitivity;
          return true;
        }
        return false;
      });

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      const matrixStack = graphics.pose();
      let guiX = matrixStack.last().pose().m30();
      let guiY = matrixStack.last().pose().m31();

      // if ($AllKeys.isMouseButtonDown($InputConstants.MOUSE_BUTTON_LEFT)) {
      //   console.log(`Mouse down`);
      // }

      mouseEventDriver.drive(mouseX, mouseY);

      matrixStack.pushPose();

      xButton.draw(recipe, graphics, mouseX, mouseY);
      yButton.draw(recipe, graphics, mouseX, mouseY);
      zButton.draw(recipe, graphics, mouseX, mouseY);
      xClearButton.draw(recipe, graphics, mouseX, mouseY);
      yClearButton.draw(recipe, graphics, mouseX, mouseY);
      zClearButton.draw(recipe, graphics, mouseX, mouseY);
      const putWord = (component, x, y) => {
        drawWordWrap(graphics, Client.font, component, x, y, 2000, 0xffffff, true);
      };
      putWord(Text.literal(`X: ${xRot}°`).color(0xff0000), 10, 30);
      putWord(Text.literal(`Y: ${yRot}°`).color(0x00ff00), 40, 30);
      putWord(Text.literal(`Z: ${zRot}°`).color(0x0000ff), 70, 30);
      let window = Client.getWindow();
      Client.getCurrentScreen().mouse;
      putWord(
        Text.literal(`guiScaled: ${window.getGuiScaledWidth()}x${window.getGuiScaledHeight()}`).color(
          0xffffff
        ),
        10,
        50
      );
      putWord(Text.literal(`window: ${window.getWidth()}x${window.getHeight()}`).color(0xffffff), 10, 70);
      putWord(Text.literal(`mouse: ${mouseX},${mouseY}`).color(0xffffff), 10, 90);

      let screenScale = Client.getWindow().getGuiScale();
      putWord(
        Text.literal(`global mouse: ${Client.mouseHandler.xpos()},${Client.mouseHandler.ypos()}`).color(
          0xffffff
        ),
        10,
        110
      );
      putWord(
        Text.literal(
          `global mouse scaled: ${Math.floor(Client.mouseHandler.xpos() / screenScale)},${Math.floor(
            Client.mouseHandler.ypos() / screenScale
          )}`
        ).color(0xffffff),
        10,
        130
      );

      // 渲染像素偏移
      matrixStack.translate(90, 100, 100);

      // 渲染轴旋转
      matrixStack.mulPose($Axis.ZP.rotationDegrees(zRot));
      matrixStack.mulPose($Axis.XP.rotationDegrees(xRot));
      matrixStack.mulPose($Axis.YP.rotationDegrees(yRot));

      const scale = 20;
      const tick = $AnimationTickHolder.getTicks();

      graphics.hLine(-20, 100, 0, Color.RED.argbJS);
      graphics.vLine(0, -20, 100, Color.GREEN.argbJS);
      matrixStack.scale(scale, scale, scale);

      const renderBlock = (block, x, y, z) => {
        $AnimatedKinetics
          .defaultBlockElement(Block.getBlock(block).defaultBlockState())
          .atLocal(x, y + 1, z)
          .render(graphics);
      };

      renderBlock('minecraft:white_wool', 0, 0, 0);
      renderBlock('minecraft:red_wool', 1, 0, 0);
      renderBlock('minecraft:red_wool', 2, 0, 0);
      renderBlock('minecraft:green_wool', 0, 1, 0);
      renderBlock('minecraft:green_wool', 0, 2, 0);
      renderBlock('minecraft:blue_wool', 0, 0, 1);
      renderBlock('minecraft:blue_wool', 0, 0, 2);
      renderBlock('minecraft:glass', 2, 2, 0);
      renderBlock('minecraft:glass', 2, 0, 2);
      renderBlock('minecraft:glass', 0, 2, 2);
      renderBlock('minecraft:glass', 2, 2, 2);

      const hasBlockAt = (x, y, z) => {
        if (x === 0 && y === 0 && z === 0) return true;
        if (x === 1 && y === 0 && z === 0) return true;
        if (x === 2 && y === 0 && z === 0) return true;
        if (x === 0 && y === 1 && z === 0) return true;
        if (x === 0 && y === 2 && z === 0) return true;
        if (x === 0 && y === 0 && z === 1) return true;
        if (x === 0 && y === 0 && z === 2) return true;
        if (x === 0 && y === 2 && z === 2) return true;
        if (x === 2 && y === 0 && z === 2) return true;
        if (x === 2 && y === 2 && z === 0) return true;
        if (x === 2 && y === 2 && z === 2) return true;

        return false;
      };

      let lookAtResult = checkMouseFocus(
        graphics,
        mouseX,
        mouseY,
        category.getWidth(),
        category.getHeight(),
        hasBlockAt
      );

      if (!lookAtResult) {
        lookAt = null;
      } else {
        let buffer = getSuperRenderTypeBuffer().getInstance();
        if (!chasingAABBOutline) {
          chasingAABBOutline = new ChasingAABBOutlineWrapper(
            AABB.of(
              lookAtResult.x(),
              lookAtResult.y(),
              lookAtResult.z(),
              lookAtResult.x() + 1,
              lookAtResult.y() + 1,
              lookAtResult.z() + 1
            )
          );
        } else {
          if (!lookAtResult.equals(lookAt)) {
            chasingAABBOutline.setTarget(
              AABB.of(
                lookAtResult.x(),
                lookAtResult.y(),
                lookAtResult.z(),
                lookAtResult.x() + 1,
                lookAtResult.y() + 1,
                lookAtResult.z() + 1
              )
            );
          }
          while (lastTick < tick) {
            lastTick += 1;
            chasingAABBOutline.tick();
          }
          chasingAABBOutline.render(matrixStack, buffer, Vec3d.ZERO, $AnimationTickHolder.getPartialTicks());
        }
        lookAt = lookAtResult;
        buffer.draw();
      }

      const boundary = cuboidProjectionBoundary(matrixStack, Vec3i.ZERO, new Vec3i(3, 3, 3));
      matrixStack.popPose();

      boundary.minX -= guiX;
      boundary.minY -= guiY;

      const color = Color.RED.argbJS;
      graphics.hLine(boundary.minX, boundary.minX + boundary.width, boundary.minY, color);
      graphics.hLine(boundary.minX, boundary.minX + boundary.width, boundary.minY + boundary.height, color);
      graphics.vLine(boundary.minX, boundary.minY, boundary.minY + boundary.height, color);
      graphics.vLine(boundary.minX + boundary.width, boundary.minY, boundary.minY + boundary.height, color);
    });

    category.setInputHandler((recipe, mouseX, mouseY, input) => {
      return (
        xButton.handleInput(recipe, mouseX, mouseY, input) ||
        yButton.handleInput(recipe, mouseX, mouseY, input) ||
        zButton.handleInput(recipe, mouseX, mouseY, input) ||
        xClearButton.handleInput(recipe, mouseX, mouseY, input) ||
        yClearButton.handleInput(recipe, mouseX, mouseY, input) ||
        zClearButton.handleInput(recipe, mouseX, mouseY, input)
      );
    });

    let lastBlockId = null;
    let lastTooltip = null;

    category.setTooltipHandlerOverride((tooltipBuilder, recipe, recipeSlotsView, mouseX, mouseY) => {
      const blockAt = (x, y, z) => {
        if (x === 0 && y === 0 && z === 0) return 'minecraft:white_wool';
        if (x === 1 && y === 0 && z === 0) return 'minecraft:red_wool';
        if (x === 2 && y === 0 && z === 0) return 'minecraft:red_wool';
        if (x === 0 && y === 1 && z === 0) return 'minecraft:green_wool';
        if (x === 0 && y === 2 && z === 0) return 'minecraft:green_wool';
        if (x === 0 && y === 0 && z === 1) return 'minecraft:blue_wool';
        if (x === 0 && y === 0 && z === 2) return 'minecraft:blue_wool';
        if (x === 0 && y === 2 && z === 2) return 'minecraft:glass';
        if (x === 2 && y === 0 && z === 2) return 'minecraft:glass';
        if (x === 2 && y === 2 && z === 0) return 'minecraft:glass';
        if (x === 2 && y === 2 && z === 2) return 'minecraft:glass';
        return 'minecraft:air';
      };

      if (lookAt) {
        let blockId = blockAt(lookAt.x(), lookAt.y(), lookAt.z());
        if (!blockId || blockId === 'minecraft:air') {
          return;
        }

        if (blockId === lastBlockId) {
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


