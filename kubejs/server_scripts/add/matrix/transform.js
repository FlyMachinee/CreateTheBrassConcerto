
function matrixValue(i) {
    if (i == null) { i = 0 }
    return i % 256
}
function checkMatrix(matrix, a, b, c) {
    if (matrix[a] == null) return 0
    if (matrix[a][b] == null) return 0
    if (matrix[a][b][c] == null) return 0
    return matrix[a][b][c]
}
function matrix2x2del(A) {
    return A[0][0] * A[1][1] - A[0][1] * A[1][0]
}
function validCharCode(a) {
    if (a < 32) { return 32 }
    if (a > 126) { return 126 }
    return a
}
ServerEvents.customCommand('matrix_ascii', event => {
    if (event.player.mainHandItem.id != "kubejs:matrix_2") {
        event.player.tell("你手上不是信息素！")
        return
    }
    let matrix = JSON.parse(String(event.player.mainHandItem.nbt?.matrix) || "[[[0.0, 0.0], [0.0, 0.0]]]")
    let char = ""
    for (let i = 0; i < matrix.length; i++) {
        char += String.fromCharCode(validCharCode(matrix2x2del(matrix[i])))
    }
    event.player.tell("根据信息素矩阵结构生成的ASCII码转换后如下(ASCII有效范围:32-126)")
    event.player.tell(char)
    event.player.runCommand(char)
    event.player.swing()
    event.player.mainHandItem.shrink(1)
})
const ascii = {
    ' ': 32, '!': 33, '"': 34, '#': 35, '$': 36, '%': 37, '&': 38, "'": 39,
    '(': 40, ')': 41, '*': 42, '+': 43, ',': 44, '-': 45, '.': 46, '/': 47,
    '0': 48, '1': 49, '2': 50, '3': 51, '4': 52, '5': 53, '6': 54, '7': 55,
    '8': 56, '9': 57, ':': 58, ';': 59, '<': 60, '=': 61, '>': 62, '?': 63,
    '@': 64, 'A': 65, 'B': 66, 'C': 67, 'D': 68, 'E': 69, 'F': 70, 'G': 71,
    'H': 72, 'I': 73, 'J': 74, 'K': 75, 'L': 76, 'M': 77, 'N': 78, 'O': 79,
    'P': 80, 'Q': 81, 'R': 82, 'S': 83, 'T': 84, 'U': 85, 'V': 86, 'W': 87,
    'X': 88, 'Y': 89, 'Z': 90, '[': 91, '\\': 92, ']': 93, '^': 94, '_': 95,
    '`': 96, 'a': 97, 'b': 98, 'c': 99, 'd': 100, 'e': 101, 'f': 102, 'g': 103,
    'h': 104, 'i': 105, 'j': 106, 'k': 107, 'l': 108, 'm': 109, 'n': 110, 'o': 111,
    'p': 112, 'q': 113, 'r': 114, 's': 115, 't': 116, 'u': 117, 'v': 118, 'w': 119,
    'x': 120, 'y': 121, 'z': 122, '{': 123, '|': 124, '}': 125, '~': 126
}
PlayerEvents.chat(event => {
    if (event.message.startsWith('toCharCode ')) {
        let str = event.message.slice(11)
        let charCodeList = ""
        for (let i = 0; i < str.length; i++) {
            charCodeList += str.codePointAt(i)
            if (i != str.length - 1) {
                charCodeList += "-"
            }
        }
        event.player.tell("对应ASCII码如下")
        event.player.tell(charCodeList)
    }
})
//ascii[str[i]]||"Invaild"
ItemEvents.firstRightClicked('kubejs:matrix_2', event => {
    if (event.item.nbt?.ascii != 1) { return }
    let matrix = JSON.parse(String(event.player.mainHandItem.nbt?.matrix) || "[[[0.0, 0.0], [0.0, 0.0]]]")
    let char = ""
    for (let i = 0; i < matrix.length; i++) {
        char += String.fromCharCode(validCharCode(matrix2x2del(matrix[i])))
    }
    //event.player.tell(char)
    eval(char)
    event.level.playSound(null, event.player.x, event.player.y, event.player.z, "minecraft:block.enchantment_table.use", "players", 0.6, 1)
    event.player.swing()
    event.player.mainHandItem.shrink(1)
})
function newNet(player) {
    if (DimensionsNet.getNetFromPlayer(player) == null) {
        DimensionsNet.createNewNetForPlayer(player, 65536, 216)
        player.setStatusMessage(Text.translate("kubejs.tooltip.newnet"))
        return
    }
    player.setStatusMessage(Text.translate("kubejs.tooltip.hasnet"))
}

function expandNet(player) {
    if (DimensionsNet.getNetFromPlayer(player) == null) {
        player.setStatusMessage(Text.translate("kubejs.tooltip.neednet"))
        return
    }
    let newSize = DimensionsNet.getNetFromPlayer(player).getUnifiedStorage().slotMaxSize + 1
    let Slots = DimensionsNet.getNetFromPlayer(player).getUnifiedStorage().slotCapacity
    if (Slots != 65536) {
        DimensionsNet.getNetFromPlayer(player).getUnifiedStorage().setSlotCapacity(65536)
    }
    DimensionsNet.getNetFromPlayer(player).getUnifiedStorage().setSlotMaxSize(newSize)
    DimensionsNet.getNetFromPlayer(player).setDirty()
    player.setStatusMessage(Text.translate("kubejs.tooltip.expandnet"))
    player.tell(Text.translate("kubejs.tooltip.netdim").append(newSize.toString()))
}
