// priority: 500
function Stack() {
    //小鱼干喵
    let items = [];
    //存一条喵
    this.push = function (element) {
        items.push(element);
    };
    //下面存一条喵
    this.append = function (element) {
        items.unshift(element);
    };
    //偷吃喵
    this.pop = function () {
        return items.pop();
    };
    //偷看喵
    this.peek = function () {
        return items[items.length - 1];
    };
    //空了喵？
    this.isEmpty = function () {
        return items.length == 0;
    };
    //几条喵？
    this.size = function () {
        return items.length;
    }
    //吃完喵！
    this.clear = function () {
        items = []
    }
}

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
