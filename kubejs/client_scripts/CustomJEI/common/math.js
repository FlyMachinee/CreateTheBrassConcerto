// priority: 6144

/**
 * @param {number} p 概率生成1的概率
 */
const bernoulli = (p) => {
  return Math.random() < p ? 1 : 0;
};

/**
 * @param {number} min
 * @param {number} max
 * @returns {number} 生成[min, max]之间的随机整数
 */
const randBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 从列表中随机选择n个元素，返回选中的元素列表以及剩余的元素列表
 * @param {Array} list
 * @param {number} n
 * @return {{chosen: Array, remaining: Array}} 选中的元素列表和剩余的元素列表，不保证原始列表的顺序
 */
const chooseN = (list, n) => {
  if (n >= list.length) {
    return { chosen: list.slice(), remaining: [] };
  }
  if (n > list.length / 2) {
    const result = chooseN(list, list.length - n);
    return { chosen: result.remaining, remaining: result.chosen };
  }
  for (let i = 0; i < n; i++) {
    let idx = randBetween(i, list.length - 1);
    let temp = list[i];
    list[i] = list[idx];
    list[idx] = temp;
  }
  return { chosen: list.slice(0, n), remaining: list.slice(n) };
};

/**
 * 线性插值
 * @param {number} a 起始值
 * @param {number} b 结束值
 * @param {number} t 插值参数，范围[0, 1]，0对应a，1对应b
 * @return {number} 插值结果
 */
const lerp = (a, b, t) => {
  return a + (b - a) * t;
};

/**
 * 将value限制在[min, max]范围内
 * @param {number} value 待限制的值
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @return {number} 限制后的值，若value小于min则返回min，若value大于max则返回max，否则返回value
 */
const clamp = (value, min, max) => {
  return Math.max(min, Math.min(max, value));
};

/**
 * @param {number} a 实数
 * @param {number} b 正数
 * @returns {number} a mod b 的正数结果，即结果在[0, b)范围内
 */
const positiveMod = (a, b) => {
  return ((a % b) + b) % b;
}
