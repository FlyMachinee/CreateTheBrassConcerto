// priority: 500
/** 
* @param {number} min
* @param {number} max
*/
function randomOne(min, max) {
    min=Math.floor(min)
    max=Math.floor(max)
    if (min >= max) {
        return max
    }
    let random = Math.round(Math.random() * (max - min + 1)) + min
    if (random == max + 1) {
        return min
    }
    return random
}