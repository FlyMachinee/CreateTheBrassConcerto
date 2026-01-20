// priority: 8192
/**@name 维度所在星球 */
const DimensionToPlanet = {
    "minecraft:overworld": "earth",
    "minecraft:the_nether": "earth",
    "minecraft:the_end": "earth",
    "ad_astra:earth_orbit": "earth",
    "ad_astra:moon": "moon",
    "ad_astra:moon_orbit": "moon",
    "dut:slimeria": "slimeria",
    "dut:slimeria_orbit": "slimeria",
}

/**@name 维度》键名 */
const DimensionNameKey = {
    "dut:slimeria": "planet.dut.slimeria",
    "dut:slimeria_orbit": "planet.dut.slimeria_orbit",
    "minecraft:overworld": "planet.dut.earth",
    "minecraft:the_nether": "planet.dut.earth_nether",
    "minecraft:the_end": "planet.dut.earth_end",
    "ad_astra:earth_orbit": "planet.dut.earth_orbit",
    "ad_astra:moon": "planet.dut.moon",
    "ad_astra:moon_orbit": "planet.dut.moon_orbit"
}
/**
 * @name 尝试创建tag
 * @param {Internal.CompoundTag} pdata 
 * @param {string} tag 
 * @param {any} basic 
 */
function orCreateData(pdata, tag, basic) {
    if (!pdata.contains(tag)) {
        pdata[tag] = basic
    }
}
function orCreateDataTravel(pdata, path) {
    let PathList = path.split(".")
    let NewPath = pdata
    for (let i of PathList) {
        if (NewPath[i] === null || NewPath[i] === undefined) {
            NewPath[i] = {}
            NewPath = NewPath[i]
            continue
        }
        if (NewPath[i] === null || typeof NewPath[i] !== "object") {
            break
        }
        break
    }
}