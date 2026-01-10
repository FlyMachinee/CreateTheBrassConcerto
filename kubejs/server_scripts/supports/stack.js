// priority: 512
/**
 * @name 栈
 * @namespace Slimeli
 */
function Stack() {
    /**小鱼干喵*/
    let items = []
    /**
     * @param {any} 压栈元素
     * 存一条喵
     */
    this.push = function (element) {
        items.push(element)
    }
    /**
     * @param {any} 压栈元素
     * 下面存一条喵
     */
    this.append = function (element) {
        items.unshift(element)
    }
    /**
     * @param {any} 弹栈元素
     * 偷吃喵
     */
    this.pop = function () {
        return items.pop()
    }
    /**
     * 偷看喵
     */
    this.peek = function () {
        return items[items.length - 1]
    }
    /**
     * 空了喵？
     */
    this.isEmpty = function () {
        return items.length == 0
    }
    /**
     * 几条喵？
     */
    this.size = function () {
        return items.length
    }
    /**
     * 吃完喵！
     */
    this.clear = function () {
        items = []
    }
}

/**
 * @name 有限栈
 * @namespace Slimeli
 */
function FiniteStack() {
    /**小鱼干喵*/
    let items = []
    /**能装几条喵*/
    let maxSize = 1
    /**
     * 修改容量喵
     * 如果存不下了先扔旧的喵
     */
    this.setMaxSize = function (size) {
        maxSize = Math.max(size, 1)
        while (items.length >= maxSize) {
            items.shift()
        }
    }
    /**
     * @param {any} 弹栈元素
     * 偷吃喵
     */
    this.pop = function () {
        return items.pop()
    }
    /**
     * 偷看喵
     */
    this.peek = function () {
        return items[items.length - 1]
    }
    /**
     * 空了喵？
     */
    this.isEmpty = function () {
        return items.length == 0
    }
    /**
     * 满了喵？
     */
    this.isFull = function () {
        return items.length >= maxSize
    }
    /**
     * 最多几条喵？
     */
    this.getMaxSize = function () {
        return maxSize
    }
    /**
     * 几条喵？
     */
    this.size = function () {
        return items.length
    }
    /**
     * 吃完喵！
     */
    this.clear = function () {
        items = []
    }
    /**
     * @param {any} 压栈元素
     * 存一条喵
     */
    this.push = function (element) {
        while (items.length >= maxSize) {
            items.shift()
        }
        items.push(element)
    }
    /**
     * @param {any} 压栈元素
     * 下面存一条喵
     */
    this.append = function (element) {
        while (items.length >= maxSize) {
            items.pop()
        }
        items.unshift(element)
    }
    /**
     * @param {any} 压栈元素
     * 尝试存一条喵
     */
    this.tryPush = function (element) {
        if (items.length >= maxSize) {
            return false
        }
        items.push(element)
        return true
    }
    /**
     * @param {any} 压栈元素
     * 尝试从下面存一条喵
     */
    this.tryAppend = function (element) {
        if (items.length >= maxSize) {
            return false
        }
        items.unshift(element)
        return true
    }
}
/*
//{type:'basic',key:xxx,start:xxx,x:xxx,line:xxx,draw:'',keeptime:xxx,speed:xxx}
function textDisplay() {
    function origin() {
        this.type = 'basic'
        this.key = ''
        this.start = 0
        this.x = 0
        this.line = 0
        this.draw = 'ingame'
        this.keeptime = 30
        this.speed = 1.0
        this.charNow = 0
        this.used = false
        this.charEnd = false
    }
    origin.call(this)
}
textDisplay.prototype.isUsed = function () {
    return this.used
}
textDisplay.prototype.remove = function () {
    delete this.x
    delete this.line
    delete this.draw
    this.used = true
}
    */
