// priority: 512
/** 
* @param {number} min
* @param {number} max
*/
function randomOne(min, max) {
    min=Math.floor(min)
    max=Math.floor(max)
    if (min >= max) {
        return Math.floor(Math.random() * (min - max + 1)) + max
    }
    return Math.floor(Math.random() * (max - min + 1)) + min
}