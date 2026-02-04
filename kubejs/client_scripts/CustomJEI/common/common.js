// priority: 6144

/**
 *
 * @param {Internal.Direction} facing {north, south, east, west}
 * @param {Internal.AttachFace} face {floor, wall, ceiling}
 */
const getItemRotationFromFacingAndFace = (facing, face) => {
  // 对于 item，默认等价 facing 为 south，face 为 wall

  // 优先级 y -> x -> z
  let yRot;
  let xRotFactor, zRotFactor;
  switch (facing) {
    case Direction.NORTH:
      yRot = 180;
      xRotFactor = -1;
      zRotFactor = 0;
      break;
    case Direction.WEST:
      yRot = -90;
      xRotFactor = 0;
      zRotFactor = 1;
      break;
    case Direction.SOUTH:
      yRot = 0;
      xRotFactor = 1;
      zRotFactor = 0;
      break;
    case Direction.EAST:
      yRot = 90;
      xRotFactor = 0;
      zRotFactor = -1;
      break;
  }
  const xzRot = face.equals($AttachFace.WALL) ? 0 : 90;
  return [xzRot * xRotFactor, (face.equals($AttachFace.CEILING) ? 180 : 0) + yRot, xzRot * zRotFactor];
};