// priority: 4096

/**
 *
 * @param {GuiGraphics} guiGraphics
 * @param {CustomLightingSettings} lighting
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} scale
 * @param {Array<Array>} directions 形如 [[str, bool],...] 表示管道向 str 方向连接，bool 表示是否有管道口
 *
 * 管道方向与渲染轴关系：UP = -y, DOWN = +y, NORTH = -z, SOUTH = +z, WEST = -x, EAST = +x
 *
 * 管道方向与数学轴关系：UP = +z, DOWN = -z, NORTH = -x, SOUTH = +x, WEST = +y, EAST = -y
 */
const drawFluidPipe = (guiGraphics, lighting, x, y, z, scale, directions) => {
  let pipe_attachments = $AllPartialModels.PIPE_ATTACHMENTS; // EnumMap

  // 管道与管道的连接部分，这时无管道口
  // Map: Direction -> PartialModel
  let connections = pipe_attachments.get(
    $FluidTransportBehaviour.AttachmentTypes.ComponentPartials.CONNECTION
  );

  // 管道至管道口连接处，配合管道口使用
  // Map: Direction -> PartialModel
  let rim_connectors = pipe_attachments.get(
    $FluidTransportBehaviour.AttachmentTypes.ComponentPartials.RIM_CONNECTOR
  );

  // 管道口
  // Map: Direction -> PartialModel
  let rims = pipe_attachments.get($FluidTransportBehaviour.AttachmentTypes.ComponentPartials.RIM);

  // 龙头（当管道连接至容器时），这里我们不考虑龙头
  // Map: Direction -> PartialModel
  // let drains = pipe_attachments.get($FluidTransportBehaviour.AttachmentTypes.ComponentPartials.DRAIN);

  const renderPartial = (partialModel) => {
    $GuiGameElement['of(com.jozufozu.flywheel.core.PartialModel)'](partialModel)
      .lighting(lighting)
      .atLocal(x, y, z)
      .scale(scale)
      .render(guiGraphics);
  };

  let dir_list = [];
  directions.forEach((dir) => {
    dir_list.push(dir[0]);
  });

  let all_directions_str = ['NORTH', 'SOUTH', 'EAST', 'WEST', 'UP', 'DOWN'];
  let pipe_state = Block.getBlock('create:fluid_pipe').defaultBlockState();

  for (let dir_str of all_directions_str) {
    let index = dir_list.indexOf(dir_str);
    if (index !== -1) {
      pipe_state = pipe_state.setValue(BlockProperties[dir_str], $Boolean.valueOf(String(true)));
      let has_rim = directions[index][1];

      if (has_rim) {
        // 有管道口，渲染管道口以及短连接处
        let rim_connector = rim_connectors.get(Direction[dir_str]); // PartialModel
        let rim = rims.get(Direction[dir_str]); // PartialModel
        renderPartial(rim_connector);
        renderPartial(rim);
      } else {
        // 无管道口，渲染普通长连接处
        let connection = connections.get(Direction[dir_str]); // PartialModel
        renderPartial(connection);
      }
    } else {
      pipe_state = pipe_state.setValue(BlockProperties[dir_str], $Boolean.valueOf(String(false)));
    }
  }

  // 管道本体
  $GuiGameElement['of(net.minecraft.world.level.block.state.BlockState)'](pipe_state)
    .lighting(lighting)
    .atLocal(x, y, z)
    .scale(scale)
    .render(guiGraphics);
};