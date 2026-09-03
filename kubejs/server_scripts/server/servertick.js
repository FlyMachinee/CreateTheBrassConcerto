/*
let TpsList = [0, 0, 0, 0, 0, 0, 0, 0]
ServerEvents.tick(event => {
    let worldTime = event.server.getLevel("minecraft:overworld").time
    if (worldTime & 128 != 0) { return }
    let s = event.server
    let tps = s.averageTickTime
    TpsList.unshift(tps)
    while (TpsList.length() > 8) {
        TpsList.pop()
    }
    let averageTps=TpsList.reduce((sum, num) => sum + num, 0)/8

    if (TpsList[0]-TpsList[1]>20){
        s.tell("警告，服务器TPS在过去128 tick中异常增长！记录如下："+TpsList.toString())
    }
    if (averageTps >= 100){
        s.tell("警告，服务器TPS过高！"+averageTps.toString())
    }

})
*/