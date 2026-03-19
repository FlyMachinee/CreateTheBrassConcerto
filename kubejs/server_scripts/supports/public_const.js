// priority: 8192
/**@name 金属锭与金属流体比值 */
const IngotFluid = 90
/**@name 存在的维度 */
const AllPlanet = [
    "minecraft:overworld",
    "minecraft:the_nether",
    "minecraft:the_end",
    "ad_astra:earth_orbit",
    "ad_astra:moon",
    "ad_astra:moon_orbit",
    "dut:slimeria",
    "dut:slimeria_orbit"
]
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
/**@name 星球对应维度 */
const PlanetToDimension = {
    "earth": "minecraft:overworld",
    "earth_orbit": "ad_astra:earth_orbit",
    "moon": "ad_astra:moon",
    "moon_orbit":"ad_astra:moon_orbit" ,
    "slimeria": "dut:slimeria",
    "slimeria_orbit":"dut:slimeria_orbit" ,
}
/**@name 维度所在星球的轨道 */
const DimensionToOrbit = {
    "minecraft:overworld": "ad_astra:earth_orbit",
    "minecraft:the_nether": "ad_astra:earth_orbit",
    "minecraft:the_end": "ad_astra:earth_orbit",
    "ad_astra:earth_orbit": "ad_astra:earth_orbit",
    "ad_astra:moon": "ad_astra:moon_orbit",
    "ad_astra:moon_orbit": "ad_astra:moon_orbit",
    "dut:slimeria": "dut:slimeria_orbit",
    "dut:slimeria_orbit": "dut:slimeria_orbit",
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
function orCreateDir(targetDir) {
    if (!$Files.exists(targetDir)) {
        try {
            $Files.createDirectories(targetDir)
        } catch (e) {
            console.error(e)
        }
    }
}
function orCreateFiles(targetFile) {
    if (!$Files.exists(targetFile)) {
        try {
            $Files.createFile(targetFile)
        } catch (e) {
            console.error(e)
        }
    }
}