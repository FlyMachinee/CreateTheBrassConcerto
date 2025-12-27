// priority: 501
function matrix2x2del(A) {
    return A[0][0] * A[1][1] - A[0][1] * A[1][0]
}
function matrix3x3AlgebraicCofactor(A, i, j) {
    let C = []
    switch (`${i - 1}${j - 1}`) {
        case "00":
            C = [
                [A[1][1], A[1][2]],
                [A[2][1], A[2][2]]
            ]
            break
        case "01":
            C = [
                [A[1][0], A[1][2]],
                [A[2][0], A[2][2]]
            ]
            break
        case "02":
            C = [
                [A[1][0], A[1][1]],
                [A[2][0], A[2][1]]
            ]
            break
        case "10":
            C = [
                [A[0][1], A[0][2]],
                [A[2][1], A[2][2]]
            ]
            break
        case "11":
            C = [
                [A[0][0], A[0][2]],
                [A[2][0], A[2][2]]
            ]
            break
        case "12":
            C = [
                [A[0][0], A[0][1]],
                [A[2][0], A[2][1]]
            ]
            break
        case "20":
            C = [
                [A[0][1], A[0][2]],
                [A[1][1], A[1][2]]
            ]
            break
        case "21":
            C = [
                [A[0][0], A[0][2]],
                [A[1][0], A[1][2]]
            ]
            break
        case "22":
            C = [
                [A[0][0], A[0][1]],
                [A[1][0], A[1][1]]
            ]
            break
    }
    return Math.pow(-1, i + j) * matrix2x2del(C)
}
function matrix3x3Adjoint(A) {
    return [
        [matrix3x3AlgebraicCofactor(A, 0, 0), matrix3x3AlgebraicCofactor(A, 0, 1), matrix3x3AlgebraicCofactor(A, 0, 2)],
        [matrix3x3AlgebraicCofactor(A, 1, 0), matrix3x3AlgebraicCofactor(A, 1, 1), matrix3x3AlgebraicCofactor(A, 1, 2)],
        [matrix3x3AlgebraicCofactor(A, 2, 0), matrix3x3AlgebraicCofactor(A, 2, 1), matrix3x3AlgebraicCofactor(A, 2, 2)]
    ]
}