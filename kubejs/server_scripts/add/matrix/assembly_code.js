ItemEvents.firstLeftClicked('create:clipboard', event => {
    if (event.player.username != "Slimeli_") {
        return
    }
    let code0 = event.item.tag?.Pages
    let code1 = []
    let code = []
    if (code0 != null) {
        for (let i = 0; i < code0.length; i++) {
            code1[i] = code0[i].Entries
        }
        let len = 0
        for (let i of code1) {
            for (let i1 of i) {
                code[len] = JSON.parse(i1.Text.toString()).text
                len += 1
            }
        }
    }
    //
    event.player.tell(" ")
    for (let i of code) { event.player.tell(i) }
    event.player.tell(" ")
    //
    let i1 = 0
    for (let i = 0; i < code.length; i++) {
        //如果是以#开头则视为注释，否则转化代码
        if (!code[i].startsWith("#")) {
            let bitcode = assemblyCodeTo8BitCode(code[i])
            if (bitcode.success) {
                code[i1] = bitcode.assemblycode
                event.player.tell(code[i1])
                i1 += 1
            } else {
                event.player.tell(`[Error in Line ${i1}]${bitcode.assemblycode}`)
                break
            }
        }
    }
    event.level.playSound(null, event.player.x, event.player.y, event.player.z, "minecraft:block.enchantment_table.use", "players", 0.6, 1)
    event.player.swing()
})
PlayerEvents.chat(event => {
    if (event.message.startsWith('to8bitCode ')) {
        let str = event.message.slice(11)
        event.player.tell(To8BitCode(str))
    }
})
function assemblyCodeTo8BitCode(code) {
    //按空格分隔，节取有效部分（前四项，不足的使用0填充）
    let Code = code.split(" ").filter(i => i !== "").slice(0, 4)
    while (Code.length < 4) {
        Code.push("0")
    }
    //转化为8位字节码，但是以十进制表示
    let assemblycode = `${To8BitCode(Code[0])} ${To8BitCode(Code[1])} ${To8BitCode(Code[2])} ${To8BitCode(Code[3])}`
    //如果有问题，抛出错误并返回对应的code
    if (!(/^[0-9 ]*$/.test(assemblycode))) { return { success: false, assemblycode: assemblycode } }
    //没有问题则仅返回对应的code
    return { success: true, assemblycode: assemblycode }
}
function To8BitCode(input) {
    const CodeMap = {
        //reg表示获取值用于确定一个寄存器编号 ram用作内存编号 rof用作字节偏移（内存内部） stk用作栈编号 num则是表示从获取值作为数据进行处理，未注明的输入为无效输入
        //输入共4个8bit字节，第一个为指令码，其余为参数。指令码前两位代表参数1和参数2为寄存地址还是立即数，其余为具体指令
        "in": "0",//reg
        "out": "1",//reg
        // 00xxxxxx表示两个参数均为寄存地址，使用该寄存器中的数值
        "imi": "128",// 10000000第一个参数为立即数
        "imii": "64",// 01000000第二个参数为立即数
        "im": "192",// 11000000两个参数均为立即数

        "data": "0",// 00000000数据流
        "condi": "8",// 00001000条件跳转1
        "condii": "16",// 00010000条件跳转2
        "mathi": "24",// 00011000算数1
        "mathii": "32",// 00100000算数2

        "mov": "0",
        "move": "0",// 00000000在寄存器间复制并粘贴数据 num reg
        "exc": "1",// 00000001交换寄存器数据 reg reg
        "push": "2",// 00000010从寄存器压栈 num stk
        "pop": "3",// 00000011弹栈至寄存器 reg stk
        "read": "4",// 00000100从内存读取至寄存器 ram rof reg
        "write": "5",// 00000101从寄存器存储至内存 ram rof num
        "pshr": "6",// 00000110从内存压栈 ram rof stk
        "popr": "7",// 00000111弹栈至内存 ram rof stk

        "call": "8",// 00001000跳转并将行址压栈 stk num
        "back": "9",// 00001001弹栈并跳转至对应行 stk
        "jpg": "10",// 00001010前大于后则跳转 num num reg
        "jpl": "11",// 00001011前小于后则跳转 num num reg
        "jpe": "12",// 00001100等于则跳转 num num reg
        "jpue": "13",// 00001101不等于则跳转 num num reg
        "jpge": "14",// 00001110前大于等于后则跳转 num num reg
        "jple": "15",// 00001111前小于等于后则跳转 num num reg

        "add": "24",// 00011000加法 num num reg
        "sub": "25",// 00011001减法 num num reg
        "mul": "26",// 00011010乘法 num num reg
        "div": "27",// 00011011整除 num num reg
        "gcd": "28",// 00011100取余 num num reg
        "abs": "29",// 00011101取绝对值 num reg
        "max": "30",// 00011110取大 num num reg
        "min": "31",// 00011111取小 num num reg

        "or": "32",// 00100000按位或 num num reg
        "and": "33",// 00100001按位与 num num reg
        "xor": "34",// 00100010按位异或 num num reg
        "xnor": "35",// 00100011按位同或 num num reg
        "not": "36",// 00100100按位非 num reg
        "rand": "37",// 00100101随机数 reg
        "shl": "38",// 00100110左移位 num num reg
        "shr": "39",// 00100111右移位 num num reg
    }
    let isValid = true//合法标记
    //B开头识别为二进制数
    let processed = input.replace(/B(\d+)/g, (match, get) => {
        if (/^[01]+$/.test(get)) {
            return parseInt(get, 2).toString()
        } else {
            isValid = false;
            return match
        }
    })
    if (!isValid) { return "Invalid Assembly Code - Error Binary Number" }
    // 处理普通十进制数字-模256
    processed = processed.replace(/(\d+)/g, (match, get) => {
        return (parseInt(get, 10) & 0xFF).toString()
    })
    // 处理指令码
    Object.keys(CodeMap).forEach(code => {
        const regex = new RegExp(`\\b${code}\\b`, 'g');
        processed = processed.replace(regex, CodeMap[code]);
    });
    // 非法排查
    const validString = new Set('0123456789 |&^~()+-*/%')
    if (!Array.from(processed).every(char => validString.has(char))) { return "Invalid Assembly Code - Invalid String" }

    let final = tryCalculate(processed)
    if (!final.success) { return final.error }
    if (typeof final.result !== 'number' || !isFinite(final.result)) {
        return `Invalid Assembly Code - Calculation result "${final.result}" is not a finite number`
    }
    return (final.result & 0xFF).toString()
}
//安全测试并运行算式
function tryCalculate(expression) {
    try {
        let result = new Function(`return ${expression}`)()
        return { success: true, result: result }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}