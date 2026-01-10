ServerEvents.recipes(event => {
  function cycleMeat(itemList) {
    event.custom({
      "type": "create:haunting",
      "ingredients": [
        { "item": itemList[itemList.length - 1] }
      ],
      "results": [
        { "item": itemList[0] }
      ]
    }).id('dut_create:synthetic_meat/' + itemList[itemList.length - 1].split(":")[1] + '_to_' + itemList[0].split(":")[1])
    for (let i = 1; i < itemList.length; i++) {
      event.custom({
        "type": "create:haunting",
        "ingredients": [
          { "item": itemList[i - 1] }
        ],
        "results": [
          { "item": itemList[i] }
        ]
      }).id('dut_create:synthetic_meat/' + itemList[i - 1].split(":")[1] + '_to_' + itemList[i].split(":")[1])
    }
    return 0
  }
  function getSpawnEgg(inputItem, eggId, chance, a) {
    event.custom({
      "type": "vintageimprovements:pressurizing",
      "ingredients": [{ "item": "minecraft:egg" },
      { "item": "kubejs:blaze_wart" },
      { "item": inputItem }
      ],
      "results": [{ "item": eggId, "chance": chance }],
      "processingTime": 60
    }).id("dut_create:blaze_wart/get_" + eggId.split(":")[1] + a);
    return 0
  }
  function getDragonEgg(flower, eggIdList, id) {
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "ingredients": [{ "item": "minecraft:dragon_egg" },
        { "item": "kubejs:blaze_wart" },
        { "item": flower }
        ],
        "results": eggIdList,
        "processingTime": 60
      }).id("dut_create:blaze_wart/get_" + id);
    return 0
  }
  //粗制的药水
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "ingredients": [
      { "item": "kubejs:blaze_wart" },
      { "amount": 250, "fluid": "minecraft:water" }
    ],
    "results": [
      { "amount": 250, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:awkward" } },
      { "item": "kubejs:blaze_wart" }
    ],
    "processingTime": 15
  }).id('dut_create:blaze_wart/awkward_potion')
  //刷怪蛋制造
  getSpawnEgg("minecraft:beef", "minecraft:cow_spawn_egg", 1, "")
  getSpawnEgg("minecraft:gunpowder", "minecraft:creeper_spawn_egg", 0.25, "")
  getSpawnEgg("minecraft:tnt", "minecraft:creeper_spawn_egg", 0.75, "1")
  getSpawnEgg("minecraft:blaze_powder", "minecraft:blaze_spawn_egg", 1, "")
  getSpawnEgg("minecraft:turtle_egg", "minecraft:turtle_spawn_egg", 1, "")
  getSpawnEgg("minecraft:scute", "minecraft:turtle_egg", 1, "")
  getSpawnEgg("minecraft:honeycomb", "minecraft:bee_spawn_egg", 1, "")
  getSpawnEgg("minecraft:shulker_shell", "minecraft:shulker_spawn_egg", 1, "")
  getSpawnEgg("minecraft:prismarine_crystals", "minecraft:guardian_spawn_egg", 1, "")
  getSpawnEgg("minecraft:prismarine_shard", "minecraft:guardian_spawn_egg", 1, "1")
  getSpawnEgg("minecraft:sniffer_egg", "minecraft:sniffer_spawn_egg", 1, "")
  getSpawnEgg("minecraft:feather", "minecraft:chicken_spawn_egg", 1, "")
  getSpawnEgg("minecraft:rabbit_hide", "minecraft:rabbit_spawn_egg", 1, "")
  getSpawnEgg("minecraft:leather", "minecraft:horse_spawn_egg", 1, "")
  getSpawnEgg("minecraft:wither_skeleton_skull", "minecraft:wither_skeleton_spawn_egg", 1, "")
  //getSpawnEgg("iceandfire:hippogryph_skull", "iceandfire:spawn_egg_hippogryph", 1, "")
  //getSpawnEgg("iceandfire:hydra_skull", "iceandfire:spawn_egg_hydra", 1, "")
  getSpawnEgg("iceandfire:cyclops_skull", 'iceandfire:spawn_egg_cyclops', 1, "")
  getSpawnEgg("iceandfire:stymphalian_skull", 'iceandfire:spawn_egg_stymphalian_bird', 1, "")
  //getSpawnEgg("iceandfire:troll_skull", 'iceandfire:spawn_egg_troll', 1, "")
  //getSpawnEgg("iceandfire:amphithere_skull", 'iceandfire:spawn_egg_amphithere', 1, "")
  //getSpawnEgg("iceandfire:seaserpent_skull", 'iceandfire:spawn_egg_sea_serpent', 1, "")
  //getSpawnEgg("iceandfire:cockatrice_skull", 'iceandfire:spawn_egg_cockatrice', 1, "")
  getSpawnEgg('iceandfire:ectoplasm', 'iceandfire:spawn_egg_ghost', 1, "")
  //getSpawnEgg('iceandfire:myrmex_jungle_resin', 'iceandfire:myrmex_jungle_egg', 1, "")
  //getSpawnEgg('iceandfire:myrmex_desert_resin', 'iceandfire:myrmex_desert_egg', 1, "")
  getDragonEgg("iceandfire:fire_lily", [
    { "item": "iceandfire:dragonegg_red", "chance": 0.25 },
    { "item": "iceandfire:dragonegg_green", "chance": 0.25 },
    { "item": "iceandfire:dragonegg_bronze", "chance": 0.25 },
    { "item": "iceandfire:dragonegg_gray", "chance": 0.25 },
  ], "fire_dragon")
  getDragonEgg("iceandfire:frost_lily", [
    { "item": "iceandfire:dragonegg_blue", "chance": 0.25 },
    { "item": "iceandfire:dragonegg_white", "chance": 0.25 },
    { "item": "iceandfire:dragonegg_sapphire", "chance": 0.25 },
    { "item": "iceandfire:dragonegg_silver", "chance": 0.25 },
  ], "ice_dragon")
  getDragonEgg("iceandfire:lightning_lily", [
    { "item": "iceandfire:dragonegg_electric", "chance": 0.25 },
    { "item": "iceandfire:dragonegg_amythest", "chance": 0.25 },
    { "item": "iceandfire:dragonegg_copper", "chance": 0.25 },
    { "item": "iceandfire:dragonegg_black", "chance": 0.25 },
  ], "lightning_dragon")

  //合成肉
  event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "ingredients": [
      { "amount": 500, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:awkward" } },
      { "tag": "forge:dyes/red" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" }
    ],
    "processingTime": 20,
    "results": [
      { "item": "minecraft:beef", "count": 3 },
      { "amount": 250, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:thick" } }
    ]
  }).id('dut_create:synthetic_meat/beef')
  event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "ingredients": [
      { "amount": 250, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:awkward" } },
      { "tag": "forge:dyes/pink" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" }
    ],
    "processingTime": 20,
    "results": [
      { "item": "minecraft:porkchop", "count": 4 },
      { "amount": 100, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:thick" } }
    ]
  }).id('dut_create:synthetic_meat/porkchop')
  event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "ingredients": [
      { "amount": 250, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:awkward" } },
      { "tag": "forge:dyes/white" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" }
    ],
    "processingTime": 20,
    "results": [
      { "item": "minecraft:cod", "count": 3 },
      { "amount": 150, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:thick" } }
    ]
  }).id('dut_create:synthetic_meat/cod')
  event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "ingredients": [
      { "amount": 250, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:awkward" } },
      { "item": "minecraft:ink_sac" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" }
    ],
    "processingTime": 20,
    "results": [
      { "item": "minecraft:ink_sac", "count": 4 },
      { "amount": 150, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:thick" } }
    ]
  }).id('dut_create:synthetic_meat/squid')
  event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "ingredients": [
      { "amount": 250, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:awkward" } },
      { "tag": "forge:dyes/yellow" },
      { "item": "createaddition:biomass" },
      { "item": "createaddition:biomass" }
    ],
    "processingTime": 20,
    "results": [
      { "item": "minecraft:pufferfish", "count": 3 },
      { "amount": 500, "fluid": "create:potion", nbt: { Bottle: "REGULAR", Potion: "minecraft:thick" } }
    ]
  }).id('dut_create:synthetic_meat/pufferfish')
  //循环转化
  cycleMeat(["minecraft:beef", "minecraft:mutton"])
  cycleMeat(["minecraft:porkchop", "minecraft:chicken", "minecraft:rabbit"])
  cycleMeat(["minecraft:cod", "minecraft:salmon", "minecraft:tropical_fish"])
})