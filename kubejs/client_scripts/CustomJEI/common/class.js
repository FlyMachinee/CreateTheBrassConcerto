// priority: 8192

function inheritPrototype(child, parent) {
  // 创建父类原型的副本
  var prototype = Object.create(parent.prototype);
  prototype.constructor = child; // 修复构造函数指向
  child.prototype = prototype;
}
