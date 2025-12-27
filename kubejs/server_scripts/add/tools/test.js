
//乘法
function matrix2x2Multiply(A, B) {
    return [
        [(A[0][0] * B[0][0] + A[0][1] * B[1][0]) % 128, (A[0][0] * B[0][1] + A[0][1] * B[1][1]) % 128],
        [(A[1][0] * B[0][0] + A[1][0] * B[1][0]) % 128, (A[0][0] * B[0][1] + A[0][1] * B[1][1]) % 128]
    ]
}
function matrix2x2Add(A, B) {
    return ([
        [A[0][0] + B[0][0], A[0][1] + B[0][1]],
        [A[1][0] + B[1][0], A[1][1] + B[1][1]]
    ])
}
function matrixAdd(A, B) {
    let len = Math.max(A.length, B.length)
    let C = []
    for (let i = 0; i < len; i++) {
        C[i] = matrix2x2Add(A[i] || [[0, 0], [0, 0]], B[i] || [[0, 0], [0, 0]])
    }
    return C
}
const matrixFacing = { west: [[-1, -1, 0], [1, -1, 0]], east: [[1, -1, 0], [-1, -1, 0]], south: [[0, -1, 1], [0, -1, -1]], north: [[0, -1, -1], [0, -1, 1]] }

const $Integer = Java.loadClass("java.lang.Integer")
//a
//give @s kubejs:matrix_2{RGB:[[[-1,1],[2,0]]],matrix:[[[-1,1],[2,0]]]}
//b
//give @s kubejs:matrix_2{RGB:[[[1,0],[2,0]]],matrix:[[[1,0],[2,0]]]}
//c
//give @s kubejs:matrix_2{RGB:[[[2,0],[0,1]]],matrix:[[[2,0],[0,1]]]}
//d
//give @s kubejs:matrix_2{RGB:[[[0,1],[2,0]]],matrix:[[[0,1],[2,0]]]}
//e
//give @s kubejs:matrix_2{RGB:[[[1,1],[3,1]]],matrix:[[[1,1],[3,1]]]}
//A
//give @s kubejs:matrix_2{RGB:[[[1,1],[0,1]]],matrix:[[[1,1],[0,1]]]}
//B
//give @s kubejs:matrix_2{RGB:[[[0,2],[0,1]]],matrix:[[[0,2],[0,1]]]}
//give @s kubejs:matrix_2{RGB:[[[2,3],[3,2]],[[0,-1],[-1,0]]],matrix:[[[2,3],[3,2]],[[0,-1],[-1,0]]]}

//give @s kubejs:matrix_2{matrix:[[[47,0],[0,1]],[[103,0],[0,1]],[[97,0],[0,1]],[[109,0],[0,1]],[[101,0],[0,1]],[[109,0],[0,1]],[[111,0],[0,1]],[[100,0],[0,1]],[[101,0],[0,1]],[[32,0],[0,1]],[[99,0],[0,1]],[[114,0],[0,1]],[[101,0],[0,1]],[[97,0],[0,1]],[[116,0],[0,1]],[[105,0],[0,1]],[[118,0],[0,1]],[[101,0],[0,1]]]}