// priority: 2048

/**
 *
 * @param {string} output_item 合成物品
 * @param {number} output_count 合成数量
 * @param {string} crafting_with 合成工具
 * @param {string} crafting_on 在什么方块上进行合成
 * @param {Array<Array<string>>} pattern 多方块结构
 * @param {Object} mapping 每个字符对应的方块
 * @param {Function} re_index 对结构进行重新索引的函数（可选），形如 (number, number, number) => [number, number, number]，默认为恒等变换
 *
 * mapping 可选键值如下
 *
 * 键：必须为单个 ASCII 字符
 *
 * 值：可为字符串或对象
 * 若为字符串，则表示方块 ID
 * 若为对象，则格式如下：
 * {
 *    id: 方块 ID（字符串）
 *    values: 可选，方块属性数组，格式为 [[属性名, 属性值], ...]，随后将提供 setValue 方块属性
 *
 *    （注：以下旋转相关选项互斥。未旋转时，方块将默认旋转至面向数学正 y 轴，即渲染负 x 轴）
 *    face_center: 可选，布尔值。出现时，若为真，绕数学 z 轴旋转该方块使其面向中心，否则使其背向中心
 *    face: 可选，字符串。出现时，将旋转方块至指定方向，可选值为 'PX', 'NX', 'PY', 'NY', 'PZ', 'NZ'，
 *          分别表示数学正 x 轴、负 x 轴、正 y 轴、负 y 轴、正 z 轴、负 z 轴
 *    rotate: 可选，数组，格式为 [角度, 角度, 角度]，随后将按数学轴 z, y, x 顺序（不知道为什么，测试出来的结果）绕轴旋转指定角度（度数制）
 *
 *    skip: 可选，布尔值，若为真，则跳过该方块本身的渲染（额外渲染会继续）
 *    reverse: 可选，布尔值，若为真，先执行 extra 额外渲染，再渲染方块本身
 *    extra: 可选，回调函数，格式为 (guiGraphics, lighting, x, y, z, scale) => void，用于额外渲染该方块相关结构
 * }
 */
const getBlockCraftingRecipe = (
  output_item,
  output_count,
  crafting_with,
  crafting_on,
  pattern,
  mapping,
  re_index
) => ({
  output_item: output_item,
  output_count: output_count,
  crafting_with: crafting_with,
  crafting_on: crafting_on,
  pattern: pattern,
  mapping: mapping,
  re_index: re_index === undefined ? (i, j, k) => [i, j, k] : re_index,
});

/**
 * 将数学上的坐标轴转换为渲染坐标轴
 *
 * 左手系，正上方为 z 轴，左后方为 y 轴，右后方为 x 轴
 */
let transform = (x, y, z) => [1 - y, -z, x - 1];

/**
 * 将在数学上的坐标系中的旋转应用到渲染坐标系中
 *
 * 顺序：z轴 -> y轴 -> x轴
 *
 * 数学坐标系中，规定沿轴向逆时针为正向（左手法则）
 */
let rotateXYZ = (builder, x_angle, y_angle, z_angle) => {
  builder.rotateBlock(y_angle, -z_angle, -x_angle);
};

/**
 * @param {Array<Array>} directions 形如 [[str, bool],...] 表示管道向 str 方向连接，bool 表示是否有管道口
 *
 * 管道方向与渲染轴关系：UP = -y, DOWN = +y, NORTH = -z, SOUTH = +z, WEST = -x, EAST = +x
 *
 * 管道方向与数学轴关系：UP = +z, DOWN = -z, NORTH = -x, SOUTH = +x, WEST = +y, EAST = -y
 */
const createFluidPipeInfo = (directions) => ({
  id: 'create:fluid_pipe',
  skip: true,
  extra: (guiGraphics, lighting, x, y, z, scale) => {
    drawFluidPipe(guiGraphics, lighting, x, y, z, scale, directions);
  },
});

const blockCraftingRecipes = [
  // 粉碎轮
  getBlockCraftingRecipe('create:crushing_wheel', 4, 'create:wrench', 'C', [['ABA', 'BCB', 'ABA']], {
    A: 'create:andesite_alloy_block',
    B: 'create:linear_chassis',
    C: 'minecraft:stone',
  }),

  // 无人机
  getBlockCraftingRecipe(
    'create_sa:brass_drone_item',
    1,
    'create:wrench',
    'F',
    [
      ['ACA', 'BFB', 'A#A'],
      ['DED', '###', 'D#D'],
    ],
    {
      A: {
        id: 'create:brass_scaffolding',
        values: [[BlockProperties.BOTTOM, $Boolean.valueOf(String(true))]],
      },
      B: {
        id: 'create:brass_funnel',
        face_center: false,
        extra: (guiGraphics, lighting, x, y, z, scale) => {
          for (let i = 0; i < 4; i++) {
            $GuiGameElement['of(com.jozufozu.flywheel.core.PartialModel)']($AllPartialModels.FUNNEL_FLAP)
              .lighting(lighting)
              .rotateBlock(0, z > 0 ? 180 : 0, 0)
              .atLocal(x + 0.075 / 16 + (z > 0 ? i : -i) * (3.05 / 16), y, z + (z > 0 ? -1 / 16 : 1 / 16))
              .scale(scale)
              .render(guiGraphics);
          }
        },
      },
      C: { id: 'create:stockpile_switch', face_center: true },
      D: {
        id: 'railways:smokestack_diesel',
        extra: (guiGraphics, lighting, x, y, z, scale) => {
          $GuiGameElement['of(com.jozufozu.flywheel.core.PartialModel)']($CRBlockPartials.DIESEL_STACK_FAN)
            .lighting(lighting)
            .rotateBlock(0, $AnimatedKinetics.getCurrentAngle(), 0)
            .atLocal(x, y - 0.75, z)
            .scale(scale)
            .render(guiGraphics);
        },
      },
      E: { id: 'create:display_link', rotate: [90, 0, -90] },
      F: 'create:content_observer',
      '#': 'minecraft:air',
    }
  ),

  // 机械手
  getBlockCraftingRecipe('create:deployer', 1, 'create_sa:brass_pickaxe', 'C', [['#A#', '#B#', '#C#']], {
    A: { id: 'create:piston_extension_pole', rotate: [90, 0, 0] },
    B: {
      id: 'create:mechanical_piston',
      extra: (guiGraphics, lighting, x, y, z, scale) => {
        let builder = $GuiGameElement['of(net.minecraft.world.level.block.state.BlockState)'](
          $AllBlocks.SHAFT.getDefaultState()
        ).lighting(lighting);

        rotateXYZ(builder, 0, 90, $AnimatedKinetics.getCurrentAngle() * 2);

        builder.atLocal(x, y, z).scale(scale).render(guiGraphics);
      },
    },
    C: 'minecraft:iron_block',
    '#': 'minecraft:air',
  }),

  // 矿物钻井
  getBlockCraftingRecipe(
    'createoreexcavation:drilling_machine',
    1,
    'create:wrench',
    'A',
    [
      ['BEB', 'CGD', 'BFB'],
      ['IJI', '#A#', 'IHI'],
    ],
    {
      A: 'create:mechanical_arm',
      B: 'create:railway_casing',
      C: { id: 'create:rotation_speed_controller', face: 'NX' },
      D: { id: 'create:sequenced_gearshift', rotate: [90, 0, 0] },
      E: {
        id: 'create:elevator_pulley',
        extra: (guiGraphics, lighting, x, y, z, scale) => {
          let builder = $GuiGameElement['of(com.jozufozu.flywheel.core.PartialModel)'](
            $AllPartialModels.ELEVATOR_COIL
          ).lighting(lighting);

          rotateXYZ(builder, $AnimatedKinetics.getCurrentAngle(), 0, -90);
          builder.atLocal(x, y, z).scale(scale).render(guiGraphics);
        },
      },
      F: {
        id: 'create:mechanical_pump',
        face: 'PZ',
        extra: (guiGraphics, lighting, x, y, z, scale) => {
          let builder = $GuiGameElement['of(com.jozufozu.flywheel.core.PartialModel)'](
            $AllPartialModels.MECHANICAL_PUMP_COG
          ).lighting(lighting);

          // rotateXYZ(builder, 0, 90, 0);
          rotateXYZ(builder, 90, $AnimatedKinetics.getCurrentAngle() * 2, -90);
          builder.atLocal(x, y, z).scale(scale).render(guiGraphics);
        },
      },
      G: { id: 'create:mechanical_drill', face: 'NZ' },
      H: { id: 'createdieselgenerators:huge_diesel_engine', face: 'NY' },
      I: {
        id: 'create:brass_funnel',
        face_center: false,
        extra: (guiGraphics, lighting, x, y, z, scale) => {
          for (let i = 0; i < 4; i++) {
            $GuiGameElement['of(com.jozufozu.flywheel.core.PartialModel)']($AllPartialModels.FUNNEL_FLAP)
              .lighting(lighting)
              .rotateBlock(0, z > 0 ? 180 : 0, 0)
              .atLocal(x + 0.075 / 16 + (z > 0 ? i : -i) * (3.05 / 16), y, z + (z > 0 ? -1 / 16 : 1 / 16))
              .scale(scale)
              .render(guiGraphics);
          }
        },
      },
      J: 'create:item_vault',
      '#': 'minecraft:air',
    },
    (i, j, k) => [2 - i, 2 - j, k]
  ),

  // 流体钻井
  getBlockCraftingRecipe(
    'createoreexcavation:extractor',
    1,
    'create:wrench',
    'A',
    [
      ['BFB', 'CGD', 'BaB'],
      ['bIc', 'XAY', 'dHe'],
    ],
    {
      A: 'create:mechanical_arm',
      B: 'create:railway_casing',
      C: { id: 'create:rotation_speed_controller', face: 'NX' },
      D: { id: 'create:sequenced_gearshift', rotate: [90, 0, 0] },
      F: {
        id: 'create:mechanical_pump',
        face: 'PZ',
        extra: (guiGraphics, lighting, x, y, z, scale) => {
          let builder = $GuiGameElement['of(com.jozufozu.flywheel.core.PartialModel)'](
            $AllPartialModels.MECHANICAL_PUMP_COG
          ).lighting(lighting);

          // rotateXYZ(builder, 0, 90, 0);
          rotateXYZ(builder, 90, $AnimatedKinetics.getCurrentAngle() * 2, -90);
          builder.atLocal(x, y, z).scale(scale).render(guiGraphics);
        },
      },
      G: 'create:hose_pulley',
      H: { id: 'createdieselgenerators:huge_diesel_engine', face: 'NY' },
      I: 'create:item_drain',
      a: createFluidPipeInfo([
        ['UP', true],
        ['WEST', true],
      ]),
      b: createFluidPipeInfo([
        ['NORTH', true],
        ['EAST', true],
      ]),
      c: createFluidPipeInfo([
        ['SOUTH', true],
        ['EAST', true],
      ]),
      d: createFluidPipeInfo([
        ['NORTH', true],
        ['WEST', true],
      ]),
      e: createFluidPipeInfo([
        ['SOUTH', true],
        ['WEST', true],
      ]),
      X: { id: 'create:smart_fluid_pipe', face: 'NY' },
      Y: 'create:smart_fluid_pipe',
    },
    (i, j, k) => [2 - i, 2 - j, k]
  ),
].concat(
  (() => {
    let ret = [];

    // 大型锅炉
    let mapping = {
      industrial_iron: 'create:industrial_iron_block',
      zinc: 'kubejs:new_zinc_block',
      brass: 'create:brass_block',
      gold: 'minecraft:gold_block',
      copper: 'minecraft:copper_block',
      cast_iron: 'createbigcannons:cast_iron_block',
      andesite: 'create:andesite_alloy_block',
    };

    for (let key in mapping) {
      let blockId = mapping[key];
      ret.push(
        getBlockCraftingRecipe(
          `design_decor:${key}_boiler_large`,
          1,
          'create:wrench',
          'C',
          [['AAA', 'ACA', 'AAA']],
          {
            A: blockId,
            C: 'create:fluid_tank',
          }
        )
      );
    }

    return ret;
  })()
);
