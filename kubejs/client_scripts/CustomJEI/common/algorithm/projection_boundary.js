// priority: 4096

/**
 * @param {Internal.PoseStack} ms 当前的 PoseStack
 * @param {Vec3i} origin 长方体角落的某一个点
 * @param {Vec3i} far 长方体角落与 origin 相对的那个点
 */
const cuboidProjectionBoundary = (ms, origin, far) => {
  let corners = [
    origin,
    new Vec3i(far.x, origin.y, origin.z),
    new Vec3i(origin.x, far.y, origin.z),
    new Vec3i(far.x, far.y, origin.z),
    new Vec3i(origin.x, origin.y, far.z),
    new Vec3i(far.x, origin.y, far.z),
    new Vec3i(origin.x, far.y, far.z),
    far,
  ];

  return genericProjectionBoundary(ms, corners);
};

/**
 * @param {Internal.PoseStack} ms 当前的 PoseStack
 * @param {Vec3i[]} pointList
 */
const genericProjectionBoundary = (ms, pointList) => {
  const matrix = ms.last().pose(); // 提取当前的 Matrix4f

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  pointList.forEach((p) => {
    let vec = new Vec4f(p.x, p.y, p.z, 1.0);
    matrix.transform(vec);

    minX = Math.min(minX, vec.x());
    maxX = Math.max(maxX, vec.x());
    minY = Math.min(minY, vec.y());
    maxY = Math.max(maxY, vec.y());
  });

  return {
    minX: minX,
    minY: minY,
    width: maxX - minX,
    height: maxY - minY,
  };
};
