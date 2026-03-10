// priority: 4096

/**
 * 在数字字符串中添加千位分隔符
 * @param {number|string} num 待格式化的数字，可以是数字类型或字符串类型
 * @return {string} 格式化后的字符串，在整数部分每三位添加一个逗号作为分隔符，小数部分保持不变
 */
const addThousandSeparator = (num) => {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};
