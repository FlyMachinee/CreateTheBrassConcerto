JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'lighting_test');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('minecraft:white_wool'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'lighting_test');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  recipeBuilder.add({});
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:lighting_test', (category) => {
    // 添加上方标题
    category.title(Text.literal('Lighting Test').color(0xfca800));

    // 添加上方小图标
    category.icon(guiHelper.createDrawableItemStack(Item.of('minecraft:barrier')));

    category.setWidth(240);
    category.setHeight(200);
    category.background(guiHelper.createBlankDrawable(0, 0));

    let xRot = 0;
    let yRot = 0;
    let zRot = 0;

    let firstLightingXRot = 0;
    let firstLightingYRot = 0;
    let secondLightingXRot = 0;
    let secondLightingYRot = 0;

    const xButton = new ClickButton(10, 10, 10, 10, Text.literal('X').color(0xff0000));
    const yButton = new ClickButton(30, 10, 10, 10, Text.literal('Y').color(0x00ff00));
    const zButton = new ClickButton(50, 10, 10, 10, Text.literal('Z').color(0x0000ff));

    const xClearButton = new ClickButton(70, 10, 10, 10, Text.literal('CX').color(0xffffff));
    const yClearButton = new ClickButton(90, 10, 10, 10, Text.literal('CY').color(0xffffff));
    const zClearButton = new ClickButton(110, 10, 10, 10, Text.literal('CZ').color(0xffffff));

    const firstYButton = new ClickButton(10, 30, 10, 10, Text.literal('1YP'));
    const firstXButton = new ClickButton(30, 30, 10, 10, Text.literal('1XN'));
    const secondYButton = new ClickButton(50, 30, 10, 10, Text.literal('2YP'));
    const secondXButton = new ClickButton(70, 30, 10, 10, Text.literal('2XN'));

    const firstYClearButton = new ClickButton(90, 30, 10, 10, Text.literal('1CY'));
    const firstXClearButton = new ClickButton(110, 30, 10, 10, Text.literal('1CX'));
    const secondYClearButton = new ClickButton(130, 30, 10, 10, Text.literal('2CY'));
    const secondXClearButton = new ClickButton(150, 30, 10, 10, Text.literal('2CX'));

    xButton.onClick((_, key) => {
      switch (key) {
        case 0:
          xRot = (xRot + 5) % 360;
          return true;
        case 1:
          xRot = positiveMod(xRot - 5, 360);
          return true;
        default:
          return false;
      }
    });

    yButton.onClick((_, key) => {
      switch (key) {
        case 0:
          yRot = (yRot + 5) % 360;
          return true;
        case 1:
          yRot = positiveMod(yRot - 5, 360);
          return true;
        default:
          return false;
      }
    });

    zButton.onClick((_, key) => {
      switch (key) {
        case 0:
          zRot = (zRot + 5) % 360;
          return true;
        case 1:
          zRot = positiveMod(zRot - 5, 360);
          return true;
        default:
          return false;
      }
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

    firstXButton.onClick((_, key) => {
      switch (key) {
        case 0:
          firstLightingXRot = (firstLightingXRot + 5) % 360;
          return true;
        case 1:
          firstLightingXRot = positiveMod(firstLightingXRot - 5, 360);
          return true;
        default:
          return false;
      }
    });

    firstYButton.onClick((_, key) => {
      switch (key) {
        case 0:
          firstLightingYRot = (firstLightingYRot + 5) % 360;
          return true;
        case 1:
          firstLightingYRot = positiveMod(firstLightingYRot - 5, 360);
          return true;
        default:
          return false;
      }
    });

    secondXButton.onClick((_, key) => {
      switch (key) {
        case 0:
          secondLightingXRot = (secondLightingXRot + 5) % 360;
          return true;
        case 1:
          secondLightingXRot = positiveMod(secondLightingXRot - 5, 360);
          return true;
        default:
          return false;
      }
    });

    secondYButton.onClick((_, key) => {
      switch (key) {
        case 0:
          secondLightingYRot = (secondLightingYRot + 5) % 360;
          return true;
        case 1:
          secondLightingYRot = positiveMod(secondLightingYRot - 5, 360);
          return true;
        default:
          return false;
      }
    });

    firstXClearButton.onClick(() => {
      firstLightingXRot = 0;
      return true;
    });

    firstYClearButton.onClick(() => {
      firstLightingYRot = 0;
      return true;
    });

    secondXClearButton.onClick(() => {
      secondLightingXRot = 0;
      return true;
    });

    secondYClearButton.onClick(() => {
      secondLightingYRot = 0;
      return true;
    });

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      const matrixStack = graphics.pose();
      matrixStack.pushPose();

      xButton.draw(recipe, graphics, mouseX, mouseY);
      yButton.draw(recipe, graphics, mouseX, mouseY);
      zButton.draw(recipe, graphics, mouseX, mouseY);
      xClearButton.draw(recipe, graphics, mouseX, mouseY);
      yClearButton.draw(recipe, graphics, mouseX, mouseY);
      zClearButton.draw(recipe, graphics, mouseX, mouseY);
      firstXButton.draw(recipe, graphics, mouseX, mouseY);
      firstYButton.draw(recipe, graphics, mouseX, mouseY);
      secondXButton.draw(recipe, graphics, mouseX, mouseY);
      secondYButton.draw(recipe, graphics, mouseX, mouseY);
      firstXClearButton.draw(recipe, graphics, mouseX, mouseY);
      firstYClearButton.draw(recipe, graphics, mouseX, mouseY);
      secondXClearButton.draw(recipe, graphics, mouseX, mouseY);
      secondYClearButton.draw(recipe, graphics, mouseX, mouseY);

      const putWord = (component, x, y) => {
        drawWordWrap(graphics, Client.font, component, x, y, 2000, 0xffffff, true);
      };
      putWord(Text.literal(`X: ${xRot}°`).color(0xff0000), 10, 20);
      putWord(Text.literal(`Y: ${yRot}°`).color(0x00ff00), 40, 20);
      putWord(Text.literal(`Z: ${zRot}°`).color(0x0000ff), 70, 20);

      putWord(Text.literal(`1YP: ${firstLightingYRot}°`), 10, 40);
      putWord(Text.literal(`1XN: ${firstLightingXRot}°`), 50, 40);

      putWord(Text.literal(`2YP: ${secondLightingYRot}°`), 10, 50);
      putWord(Text.literal(`2XN: ${secondLightingXRot}°`), 50, 50);

      // 渲染像素偏移
      matrixStack.translate(90, 100, 100);

      // 渲染轴旋转
      matrixStack.mulPose($Axis.ZP.rotationDegrees(zRot));
      matrixStack.mulPose($Axis.XP.rotationDegrees(xRot));
      matrixStack.mulPose($Axis.YP.rotationDegrees(yRot));

      const scale = 20;

      graphics.hLine(-20, 100, 0, Color.RED.argbJS);
      graphics.vLine(0, -20, 100, Color.GREEN.argbJS);
      matrixStack.scale(scale, scale, scale);

      const lighting = $CustomLightingSettings
        .builder()
        .firstLightRotation(firstLightingYRot, firstLightingXRot)
        .secondLightRotation(secondLightingYRot, secondLightingXRot)
        .build();

      const renderBlock = (block, x, y, z) => {
        $AnimatedKinetics
          .defaultBlockElement(Block.getBlock(block).defaultBlockState())
          .atLocal(x, y + 1, z)
          .lighting(lighting)
          .render(graphics);
      };

      renderBlock('minecraft:white_wool', 0, 0, 0);
      renderBlock('minecraft:red_wool', 1, 0, 0);
      renderBlock('minecraft:red_wool', 2, 0, 0);
      renderBlock('minecraft:green_wool', 0, 1, 0);
      renderBlock('minecraft:green_wool', 0, 2, 0);
      renderBlock('minecraft:blue_wool', 0, 0, 1);
      renderBlock('minecraft:blue_wool', 0, 0, 2);

      matrixStack.popPose();

      const renderLightingRotation = (yLightingRot, xLightingRot) => {
        const renderBlock = (block, x, y, z) => {
          $AnimatedKinetics
            .defaultBlockElement(Block.getBlock(block).defaultBlockState())
            .atLocal(x, y + 1, z)
            .scale(5)
            .render(graphics);
        };

        matrixStack.pushPose();
        matrixStack.mulPose($Axis.YP.rotationDegrees(yLightingRot));
        matrixStack.mulPose($Axis.XN.rotationDegrees(xLightingRot));

        renderBlock('minecraft:white_wool', 0, 0, 0);
        for (let i = 1; i <= 5; ++i) {
          renderBlock('minecraft:blue_wool', 0, 0, i);
        }
        renderBlock('minecraft:red_wool', 1, 0, 0);
        renderBlock('minecraft:green_wool', 0, 1, 0);

        matrixStack.popPose();
      };

      matrixStack.pushPose();
      matrixStack.translate(200, 40, 100);
      renderLightingRotation(firstLightingYRot, firstLightingXRot);
      matrixStack.popPose();

      matrixStack.pushPose();
      matrixStack.translate(200, 120, 100);
      renderLightingRotation(secondLightingYRot, secondLightingXRot);
      matrixStack.popPose();
    });

    category.setInputHandler((recipe, mouseX, mouseY, input) => {
      return (
        xButton.handleInput(recipe, mouseX, mouseY, input) ||
        yButton.handleInput(recipe, mouseX, mouseY, input) ||
        zButton.handleInput(recipe, mouseX, mouseY, input) ||
        xClearButton.handleInput(recipe, mouseX, mouseY, input) ||
        yClearButton.handleInput(recipe, mouseX, mouseY, input) ||
        zClearButton.handleInput(recipe, mouseX, mouseY, input) ||
        firstXButton.handleInput(recipe, mouseX, mouseY, input) ||
        firstYButton.handleInput(recipe, mouseX, mouseY, input) ||
        secondXButton.handleInput(recipe, mouseX, mouseY, input) ||
        secondYButton.handleInput(recipe, mouseX, mouseY, input) ||
        firstXClearButton.handleInput(recipe, mouseX, mouseY, input) ||
        firstYClearButton.handleInput(recipe, mouseX, mouseY, input) ||
        secondXClearButton.handleInput(recipe, mouseX, mouseY, input) ||
        secondYClearButton.handleInput(recipe, mouseX, mouseY, input)
      );
    });
  });
});
