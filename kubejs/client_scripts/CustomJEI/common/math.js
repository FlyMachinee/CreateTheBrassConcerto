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
