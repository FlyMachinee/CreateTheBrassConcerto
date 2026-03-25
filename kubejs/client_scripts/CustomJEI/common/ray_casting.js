// priority: 4096

/**
 * @param {Internal.GuiGraphics} guiGraphics
 * @param {number} mouseX
 * @param {number} mouseY
 * @param {number} width
 * @param {number} height
 * @param {function(number, number, number): boolean} blockCheckFunc
 * @return {Vec3f|null}
 */
const checkMouseFocus = (guiGraphics, mouseX, mouseY, width, height, blockCheckFunc) => {
  if (mouseX < 0 || mouseY < 0 || mouseX >= width || mouseY >= height) {
    return null;
  }

  let window = Client.getWindow();
  let windowScale = window.getGuiScale();
  let globalMouseX = Client.mouseHandler.xpos() / windowScale;
  let globalMouseY = Client.mouseHandler.ypos() / windowScale;
  let windowWidth = window.getGuiScaledWidth();
  let windowHeight = window.getGuiScaledHeight();

  let projectionMatrix = new Matrix4f($RenderSystem.getProjectionMatrix());
  let modelViewMatrix = new Matrix4f(guiGraphics.pose().last().pose());

  return getTargetBlock(
    globalMouseX,
    globalMouseY,
    windowWidth,
    windowHeight,
    projectionMatrix,
    modelViewMatrix,
    20,
    blockCheckFunc
  );
};

/**
 * @param {number} mouseX
 * @param {number} mouseY
 * @param {number} screenWidth
 * @param {number} screenHeight
 * @param {Matrix4f} projectionMatrix
 * @param {Matrix4f} modelViewMatrix
 * @param {number} maxDistance
 * @param {function(number, number, number): boolean} blockCheckFunc
 * @return {Vec3f|null}
 */
const getTargetBlock = (
  mouseX,
  mouseY,
  screenWidth,
  screenHeight,
  projectionMatrix,
  modelViewMatrix,
  maxDistance,
  blockCheckFunc
) => {
  let ndcX = (2 * mouseX) / screenWidth - 1;
  let ndcY = 1 - (2 * mouseY) / screenHeight;

  let invVP = new Matrix4f();
  projectionMatrix.mul(modelViewMatrix, invVP);
  invVP.invert();

  let clipStart = new Vec4f(ndcX, ndcY, -1, 1);
  let clipEnd = new Vec4f(ndcX, ndcY, 1, 1);

  let worldStart = invVP.transform(clipStart);
  worldStart.div(worldStart.w());
  let worldEnd = invVP.transform(clipEnd);
  worldEnd.div(worldEnd.w());

  let pushBackDistance = worldStart.length() + maxDistance / 2;
  let direction = new Vec3f(
    worldEnd.x() - worldStart.x(),
    worldEnd.y() - worldStart.y(),
    worldEnd.z() - worldStart.z()
  ).normalize();
  let origin = new Vec3f(
    worldStart.x() - direction.x() * pushBackDistance,
    worldStart.y() - direction.y() * pushBackDistance,
    worldStart.z() - direction.z() * pushBackDistance
  );

  return performDDA(origin, direction, maxDistance, blockCheckFunc);
};

/**
 * @param {Vec3f} origin
 * @param {Vec3f} direction
 * @param {number} maxDistance
 * @param {function(number, number, number): boolean} blockCheckFunc
 * @return {Vec3f|null}
 */
const performDDA = (origin, direction, maxDistance, blockCheckFunc) => {
  let x = Math.floor(origin.x());
  let y = Math.floor(origin.y());
  let z = Math.floor(origin.z());

  let stepX = direction.x() > 0 ? 1 : direction.x() < 0 ? -1 : 0;
  let stepY = direction.y() > 0 ? 1 : direction.y() < 0 ? -1 : 0;
  let stepZ = direction.z() > 0 ? 1 : direction.z() < 0 ? -1 : 0;

  let tDeltaX = stepX !== 0 ? Math.abs(1 / direction.x()) : Number.POSITIVE_INFINITY;
  let tDeltaY = stepY !== 0 ? Math.abs(1 / direction.y()) : Number.POSITIVE_INFINITY;
  let tDeltaZ = stepZ !== 0 ? Math.abs(1 / direction.z()) : Number.POSITIVE_INFINITY;

  let tMaxX =
    stepX !== 0 ? (stepX > 0 ? x + 1 - origin.x() : origin.x() - x) * tDeltaX : Number.POSITIVE_INFINITY;
  let tMaxY =
    stepY !== 0 ? (stepY > 0 ? y + 1 - origin.y() : origin.y() - y) * tDeltaY : Number.POSITIVE_INFINITY;
  let tMaxZ =
    stepZ !== 0 ? (stepZ > 0 ? z + 1 - origin.z() : origin.z() - z) * tDeltaZ : Number.POSITIVE_INFINITY;

  let distance = 0;
  while (distance < maxDistance) {
    if (blockCheckFunc(x, y, z)) {
      return new Vec3f(x, y, z);
    }

    if (tMaxX < tMaxY) {
      if (tMaxX < tMaxZ) {
        x += stepX;
        distance = tMaxX;
        tMaxX += tDeltaX;
      } else {
        z += stepZ;
        distance = tMaxZ;
        tMaxZ += tDeltaZ;
      }
    } else {
      if (tMaxY < tMaxZ) {
        y += stepY;
        distance = tMaxY;
        tMaxY += tDeltaY;
      } else {
        z += stepZ;
        distance = tMaxZ;
        tMaxZ += tDeltaZ;
      }
    }
  }

  return null;
};
