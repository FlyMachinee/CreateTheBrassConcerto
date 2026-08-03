ServerEvents.recipes(event => {
  //移除无效配方
  //原油-盐水
  event.custom({
    "type": "createoreexcavation:extracting",
    "drill": {
      "tag": "dut_create:drills"
    },
    "fluid": { "amount": 250, "fluid": "kubejs:saline_water" },
    "output": { "amount": 500, "fluid": "createdieselgenerators:crude_oil" },
    "priority": 0,
    "stress": 384,
    "ticks": 20,
    "vein_id": "createoreexcavation:ore_vein_type/crude_oil"
  }).id("dut_create:extractor/oil_saline_water")
  //奇异石油-钻井液
  event.custom({
    "type": "createoreexcavation:extracting",
    "drill": { "tag": "dut_create:drills" },
    "fluid": { "amount": 100, "fluid": "kubejs:drilling_fluid", },
    "output": { "amount": 500, "fluid": "kubejs:refined_oil" },
    "priority": 0,
    "stress": 256,
    "ticks": 20,
    "vein_id": "createoreexcavation:ore_vein_type/refined_oil"
  }).id("dut_create:extractor/oil_drilling_fluid")
  //可燃冰
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": { "item": "createoreexcavation:netherite_drill" },
    "fluid": { "amount": 250, "fluid": "kubejs:cryogen" },
    "output": [
      { "item": "ad_astra:ice_shard", "count": 2 },
      { "item": "ad_astra:ice_shard", "count": 8, "chance": 0.25 }
    ],
    "priority": 0,
    "stress": 384,
    "ticks": 50,
    "vein_id": "createoreexcavation:ore_vein_type/burnable_ice"
  }).id("dut_create:extractor/burnable_ice")
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": { "item": "createoreexcavation:netherite_drill" },
    "fluid": { "amount": 250, "fluid": "kubejs:cryogen" },
    "output": [
      { "item": "ad_astra:ice_shard", "count": 2 },
      { "item": "ad_astra:ice_shard", "count": 8, "chance": 0.25 }
    ],
    "priority": 0,
    "stress": 384,
    "ticks": 50,
    "vein_id": "createoreexcavation:ore_vein_type/burnable_ice_earth"
  }).id("dut_create:extractor/burnable_ice_earth")
  //月球铝
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": { "item": "createoreexcavation:netherite_drill" },
    "fluid": { "amount": 150, "fluid": "kubejs:drilling_fluid" },
    "output": [
      { "item": "kubejs:aluminite", "count": 6 }
    ],
    "priority": 0,
    "stress": 384,
    "ticks": 15,
    "vein_id": "createoreexcavation:ore_vein_type/moon/moon_aluminite"
  }).id("dut_create:drilling/moon_aluminite")
  //月球戴斯
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": { "item": "createoreexcavation:netherite_drill" },
    "fluid": { "amount": 500, "fluid": "kubejs:drilling_fluid" },
    "output": [
      { "item": "ad_astra:raw_desh", "count": 12 }
    ],
    "priority": 0,
    "stress": 1024,
    "ticks": 20,
    "vein_id": "createoreexcavation:ore_vein_type/moon/moon_desh"
  }).id("dut_create:drilling/moon_desh")
  //月壤
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": {
      "tag": "dut_create:drills"
    },
    "output": [
      { "item": "ad_astra:moon_sand", "count": 2 },
      { "item": "ad_astra:moon_sand", "count": 2, "chance": 0.25 },
      { "item": "ad_astra:moon_stone", "count": 2 },
      { "item": "ad_astra:moon_deepslate", "count": 1, "chance": 0.25 },
      { "item": "ad_astra:moon_cobblestone", "count": 1, "chance": 0.25 },
    ],
    "priority": 0,
    "stress": 96,
    "ticks": 10,
    "vein_id": "createoreexcavation:ore_vein_type/moon/moon_stone"
  }).id("dut_create:drilling/moon_stone")
  //月球铁
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": { "item": "createoreexcavation:netherite_drill" },
    "fluid": { "amount": 100, "fluid": "kubejs:drilling_fluid" },
    "output": [
      { "item": "kubejs:industrial_iron_ingot", "count": 12 },
      { "item": "ad_astra:steel_nugget", "count": 4 }
    ],
    "priority": 0,
    "stress": 512,
    "ticks": 20,
    "vein_id": "createoreexcavation:ore_vein_type/moon/moon_iron"
  }).id("dut_create:drilling/moon_iron")
  //工业废料
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": { "item": "create:mechanical_arm" },
    "fluid": { "amount": 100, "fluid": "minecraft:milk" },
    "output": [
      { "item": "kubejs:scrap", "count": 2 },
      { "item": "kubejs:scrap_2", "chance": 0.5 }
    ],
    "priority": 0,
    "stress": 384,
    "ticks": 5,
    "vein_id": "createoreexcavation:ore_vein_type/moon/scrap"
  }).id("dut_create:drilling/scrap")
  //电气废料
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": { "item": "create:mechanical_arm" },
    "fluid": { "amount": 250, "fluid": "kubejs:nitrogen" },
    "output": [
      { "item": "kubejs:scrap_1", "count": 3 },
      { "item": "kubejs:scrap_3", "count": 1 },
      { "item": "kubejs:creative_motor_blueprint", "chance": 0.00001 }
    ],
    "priority": 0,
    "stress": 448,
    "ticks": 10,
    "vein_id": "createoreexcavation:ore_vein_type/moon/scrap_1"
  }).id("dut_create:drilling/scrap_1")
  //硫
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": {
      "tag": "dut_create:drills"
    },
    "output": [{ "item": "createloveandwar:raw_sulphur", "count": 2 },
    { "item": "createloveandwar:sulphur", "chance": 0.5 }],
    "priority": 0,
    "stress": 196,
    "ticks": 30,
    "vein_id": "createoreexcavation:ore_vein_type/sulphur"
  }).id("dut_create:drilling/sulphur")
  //粘土
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": {
      "tag": "dut_create:drills"
    },
    "output": [{ "item": "minecraft:clay_ball", "count": 6 },
    { "item": "minecraft:quartz", "chance": 0.5 }],
    "priority": 0,
    "stress": 48,
    "ticks": 20,
    "vein_id": "createoreexcavation:ore_vein_type/clay"
  }).id("dut_create:drilling/clay")
  //钨
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": { "item": "createoreexcavation:netherite_drill" },
    "fluid": { "amount": 180, "fluid": "kubejs:tin" },
    "output": [
      { "item": "createloveandwar:raw_tungsten", "count": 3 },
      { "item": "createloveandwar:raw_tungsten", "count": 2, "chance": 0.5 },
      { "item": "create:crushed_raw_tin", "chance": 0.5 }
    ],
    "priority": 0,
    "stress": 512,
    "ticks": 30,
    "vein_id": "createoreexcavation:ore_vein_type/tungsten"
  }).id("dut_create:drilling/tungsten")
  //安山岩
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": {
      "tag": "dut_create:drills"
    },
    "output": [{ "item": "minecraft:andesite", "count": 4 },
    { "item": "minecraft:andesite", "count": 8, "chance": 0.25 }],
    "priority": 0,
    "stress": 96,
    "ticks": 30,
    "vein_id": "createoreexcavation:ore_vein_type/stone/andesite"
  }).id("dut_create:drilling/andesite")
  //闪长岩
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": {
      "tag": "dut_create:drills"
    },
    "output": [{ "item": "minecraft:diorite", "count": 4 },
    { "item": "minecraft:diorite", "count": 8, "chance": 0.25 }],
    "priority": 0,
    "stress": 96,
    "ticks": 30,
    "vein_id": "createoreexcavation:ore_vein_type/stone/diorite"
  }).id("dut_create:drilling/diorite")
  //花岗岩
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": {
      "tag": "dut_create:drills"
    },
    "output": [{ "item": "minecraft:granite", "count": 4 },
    { "item": "minecraft:granite", "count": 8, "chance": 0.25 }],
    "priority": 0,
    "stress": 96,
    "ticks": 30,
    "vein_id": "createoreexcavation:ore_vein_type/stone/granite"
  }).id("dut_create:drilling/granite")
  //凝灰岩
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": {
      "tag": "dut_create:drills"
    },
    "output": [{ "item": "minecraft:tuff", "count": 4 },
    { "item": "minecraft:tuff", "count": 8, "chance": 0.25 }],
    "priority": 0,
    "stress": 96,
    "ticks": 30,
    "vein_id": "createoreexcavation:ore_vein_type/stone/tuff"
  }).id("dut_create:drilling/tuff")
  //方解石
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": {
      "tag": "dut_create:drills"
    },
    "output": [{ "item": "minecraft:calcite", "count": 4 },
    { "item": "minecraft:calcite", "count": 8, "chance": 0.25 },
    { "item": "kubejs:salt", "count": 6, "chance": 0.25 },
    { "item": "minecraft:bone_meal", "count": 12, "chance": 0.25 }],
    "priority": 0,
    "stress": 192,
    "ticks": 30,
    "vein_id": "createoreexcavation:ore_vein_type/stone/calcite"
  }).id("dut_create:drilling/calcite")
  //煤炭
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": { "tag": "dut_create:drills" },
    "fluid": { "amount": 100, "fluid": "kubejs:caustic_soda" },
    "output": [
      { "item": "minecraft:coal", "count": 2 },
      { "item": "kubejs:crushed_coal", "count": 4, "chance": 0.5 },
      { "item": "kubejs:graphite", "count": 2, "chance": 0.25 }
    ],
    "priority": 0,
    "stress": 384,
    "ticks": 15,
    "vein_id": "createoreexcavation:ore_vein_type/coal"
  }).id("dut_create:drilling/coal")
  //青金石
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": { "tag": "dut_create:drills" },
    "output": [
      { "item": "minecraft:lapis_lazuli", "count": 4 },
      { "item": "create:crushed_raw_iron", "chance": 0.25 }
    ],
    "priority": 0,
    "stress": 384,
    "ticks": 20,
    "vein_id": "createoreexcavation:ore_vein_type/lapis"
  }).id("dut_create:drilling/lapis")
  //绿宝石
  event.custom({
    "type": "createoreexcavation:drilling",
    "drill": { "tag": "dut_create:drills" },
    "output": [
      { "item": "minecraft:emerald", "count": 4 }
    ],
    "priority": 0,
    "stress": 384,
    "ticks": 20,
    "vein_id": "createoreexcavation:ore_vein_type/emerald"
  }).id("dut_create:drilling/emerald")
  //
  //event.custom({"type": "createoreexcavation:drilling","drill": {"tag": "dut_create:drills"},"output": [{"item": "minecraft:","count":4},{"item": "minecraft:","count":4,"chance":0.25}],"priority": 0,"stress": 96,"ticks": 300,"vein_id": "dut_create:ore_vein_type/"}).id("dut_create:drilling/")
  //
})