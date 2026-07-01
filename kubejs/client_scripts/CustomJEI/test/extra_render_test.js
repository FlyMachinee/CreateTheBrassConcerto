JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'extra_render_test');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('minecraft:white_wool'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'extra_render_test');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  recipeBuilder.add({});
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:extra_render_test', (category) => {
    // 添加上方标题
    category.title(Text.literal('Extra Render Test').color(0xfca800));

    // 添加上方小图标
    category.icon(guiHelper.createDrawableItemStack(Item.of('minecraft:barrier')));

    category.setWidth(200);
    category.setHeight(200);
    category.background(guiHelper.createBlankDrawable(0, 0));

    const TRUE = $Boolean.valueOf('true');
    const FALSE = $Boolean.valueOf('false');

    const blockRenderer = new BlockRenderer();

    const funnel1 = $AllBlocks.BRASS_FUNNEL.getDefaultState()
      .setValue($FunnelBlock.FACING, Direction.SOUTH)
      .setValue($FunnelBlock.EXTRACTING, TRUE);
    const funnel2 = $AllBlocks.BRASS_FUNNEL.getDefaultState()
      .setValue($FunnelBlock.FACING, Direction.SOUTH)
      .setValue($FunnelBlock.EXTRACTING, FALSE);

    const pipe1 = $AllBlocks.FLUID_PIPE.getDefaultState();
    const pipe2 = $AllBlocks.FLUID_PIPE.getDefaultState()
      .setValue(BlockProperties.NORTH, TRUE)
      .setValue(BlockProperties.SOUTH, TRUE)
      .setValue(BlockProperties.EAST, FALSE)
      .setValue(BlockProperties.WEST, FALSE)
      .setValue(BlockProperties.UP, FALSE)
      .setValue(BlockProperties.DOWN, FALSE);
    const pipe3 = $AllBlocks.FLUID_PIPE.getDefaultState()
      .setValue(BlockProperties.NORTH, FALSE)
      .setValue(BlockProperties.SOUTH, FALSE)
      .setValue(BlockProperties.EAST, TRUE)
      .setValue(BlockProperties.WEST, TRUE)
      .setValue(BlockProperties.UP, FALSE)
      .setValue(BlockProperties.DOWN, FALSE);
    const pipe4 = $AllBlocks.FLUID_PIPE.getDefaultState()
      .setValue(BlockProperties.NORTH, FALSE)
      .setValue(BlockProperties.SOUTH, FALSE)
      .setValue(BlockProperties.EAST, FALSE)
      .setValue(BlockProperties.WEST, FALSE)
      .setValue(BlockProperties.UP, TRUE)
      .setValue(BlockProperties.DOWN, TRUE);
    const pipe5 = $AllBlocks.FLUID_PIPE.getDefaultState()
      .setValue(BlockProperties.NORTH, TRUE)
      .setValue(BlockProperties.SOUTH, TRUE)
      .setValue(BlockProperties.EAST, TRUE)
      .setValue(BlockProperties.WEST, TRUE)
      .setValue(BlockProperties.UP, TRUE)
      .setValue(BlockProperties.DOWN, TRUE);

    const deployer = $AllBlocks.DEPLOYER.getDefaultState().setValue(BlockProperties.FACING, Direction.SOUTH);
    const deployer2 = $AllBlocks.DEPLOYER.getDefaultState().setValue(BlockProperties.FACING, Direction.UP);

    const lighting = $AnimatedKinetics.DEFAULT_LIGHTING;

    const deployerRenderers = [
      new DeployerRenderer(),
      new DeployerRenderer(),
      new DeployerRenderer(),
      new DeployerRenderer(),
      new DeployerRenderer(),
    ];

    deployerRenderers[0]._mode = 'USE';
    deployerRenderers[1]._mode = 'USE';
    deployerRenderers[1]._item = Item.of('minecraft:diamond');
    deployerRenderers[2]._mode = 'PUNCH';
    deployerRenderers[3]._mode = 'PUNCH';
    deployerRenderers[3]._item = Item.of('minecraft:diamond_sword');
    deployerRenderers[4]._mode = 'USE';
    deployerRenderers[4]._item = Item.of('kubejs:mycetozoan');

    const speedZeroNbt = new $CompoundTag();
    speedZeroNbt.putFloat('Speed', 0.0);

    const hosePulleyRenderer = new HosePulleyRenderer();
    hosePulleyRenderer.setSpeedCallback(() => {
      const cycle = $AnimationTickHolder.getRenderTime() % 40;
      if (cycle < 20) {
        return 64;
      } else {
        return -64;
      }
    });
    hosePulleyRenderer.setOffsetCallback((_, speed, pt) => {
      const linear = speed / 512;
      const cycle = $AnimationTickHolder.getRenderTime() % 40;
      if (cycle < 20) {
        return cycle * linear;
      } else {
        return 20 * -linear + (cycle - 20) * linear;
      }
    });

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      const bufferSource = graphics.bufferSource();

      const matrixStack = graphics.pose();
      const scale = 25;

      const render = (state, x, y, z) => {
        matrixStack.pushPose();
        matrixStack.translate(x, y, z);
        $UIRenderHelper.flipForGuiRender(matrixStack);
        blockRenderer.render(
          new StructureBlockInfo(new BlockPos(x, y, z), state, null),
          $AnimationTickHolder.getPartialTicks(),
          matrixStack,
          bufferSource
        );
        matrixStack.popPose();
      };

      matrixStack.pushPose();

      // 渲染像素偏移
      matrixStack.translate(10, 80, 100);

      // 渲染轴旋转
      matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5));
      matrixStack.mulPose($Axis.YP.rotationDegrees(22.5));
      matrixStack.scale(scale, scale, scale);

      blockRenderer.beforeRender(matrixStack, lighting);

      render(funnel1, 0, 0, 0);
      render(funnel2, 1, 0, 0);
      render(pipe1, 2, 0, 0);
      render(pipe2, 3, 0, 0);
      render(pipe3, 4, 0, 0);
      render(pipe4, 5, 0, 0);
      render(pipe5, 6, 0, 0);
      render(Block.getBlock('minecraft:stone').defaultBlockState(), 7, 0, 0);

      blockRenderer.afterRender(matrixStack, lighting);

      let i = 0;
      const renderDeployer = (state, x, y, z) => {
        matrixStack.pushPose();
        matrixStack.translate(x, y, z);
        $UIRenderHelper.flipForGuiRender(matrixStack);
        let info = new StructureBlockInfo(new BlockPos(x, y, z), state, i === 4 ? speedZeroNbt : null);
        BlockRenderer.renderBlockState(state, matrixStack, bufferSource);
        deployerRenderers[i++].render(
          info,
          $AnimationTickHolder.getPartialTicks(),
          matrixStack,
          bufferSource
        );
        matrixStack.popPose();
      };

      renderDeployer(deployer, 1, 3, 0);
      renderDeployer(deployer, 2, 3, 0);
      renderDeployer(deployer, 3, 3, 0);
      renderDeployer(deployer, 4, 3, 0);
      renderDeployer(deployer2, -1, 3, 0);

      const renderPulley = (state, x, y, z) => {
        matrixStack.pushPose();
        matrixStack.translate(x, y, z);
        $UIRenderHelper.flipForGuiRender(matrixStack);
        let info = new StructureBlockInfo(new BlockPos(x, y, z), state, null);
        BlockRenderer.renderBlockState(state, matrixStack, bufferSource);
        hosePulleyRenderer.render(info, $AnimationTickHolder.getPartialTicks(), matrixStack, bufferSource);
        matrixStack.popPose();
      };

      renderPulley($AllBlocks.HOSE_PULLEY.getDefaultState().setValue(BlockProperties.HORIZONTAL_FACING, Direction.SOUTH), 6, 3, 0);

      matrixStack.popPose();
    });
  });
});
