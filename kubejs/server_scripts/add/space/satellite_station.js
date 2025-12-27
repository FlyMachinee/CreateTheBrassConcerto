ServerEvents.recipes(event => {
  const SatelliteStationStructure =
  {
    "type": "custommachinery:structure",
    "pattern": [
      [
        "ABBBA",
        "ABBBA",
        "ABBBA",
        "ABBBA",
        "BBBBB",
        "BNNNB",
        "BNONB",
        " NNN "
      ],
      [
        "CDDDC",
        "CFFFC",
        "CFFFC",
        "CFFFC",
        "CDDDC",
        "MLLLM",
        " BPB ",
        "  m  "
      ],
      [
        "EDDDE",
        "G   G",
        "G   G",
        "G   G",
        "EDDDE",
        "     ",
        " BPB ",
        "     "
      ]
    ],
    "keys": {
      "C": "ad_astra:steel_pillar",
      "N": "design_decor:cast_iron_boiler_structure",
      "G": "design_decor:iron_railing",
      "M": "design_decor:cast_iron_boiler",
      "B": "create:industrial_iron_block",
      "L": "design_decor:industrial_iron_boiler",
      "P": "create:metal_girder",
      "D": "design_decor:ornate_grate",
      "E": "design_decor:andesite_floodlight",
      "F": "create:depot",
      "A": "ad_astra:steel_plating_slab",
      "O": "design_decor:cast_iron_boiler_large"
    },
    "jei": true
  }
  const SatelliteStationUp = {
    "type": "custommachinery:command",
    "phase": "starting",
    "command": "/function dut:satellite/set_satellite_station_up",
    "log": false,
    "permissionlevel": 5
  }
  const SatelliteStationDown = {
    "type": "custommachinery:command",
    "phase": "starting",
    "delay": 0.6,
    "command": "/function dut:satellite/set_satellite_station_down",
    "log": false,
    "permissionlevel": 5
  }
  const SatelliteStationBiome = {
    "type": "custommachinery:biome",
    "filter": ["ad_astra:orbit"],
    "blacklist": false
  }
  const SatelliteStationDataIn = SatelliteStationItem("kubejs:navigate_data_empty", 4, "input")
  const SatelliteStationDataInLocal = SatelliteStationItem("kubejs:navigate_data_empty", 16, "input")
  function SatelliteStationDimension(dimension) {
    return ({
      "type": "custommachinery:dimension",
      "filter": dimension,
      "blacklist": false
    })
  }
  function SatelliteStationDurability(item, amount, mode, breakable) {
    return ({
      "type": "custommachinery:durability",
      "mode": mode,
      "item": item,
      "amount": amount,
      "break": breakable
    })
  }
  function SatelliteStationFluid(fluid, amount) {
    return ({
      "type": "custommachinery:fluid",
      "mode": "input",
      "fluid": fluid,
      "amount": amount
    })
  }
  function SatelliteStationItem(item, amount, mode) {
    return ({
      "type": "custommachinery:item",
      "mode": mode,
      "item": item,
      "amount": amount
    })
  }
  function SatelliteStationItemChance(item, amount, mode, chance) {
    return ({
      "type": "custommachinery:item",
      "mode": mode,
      "item": item,
      "amount": amount,
      "chance": chance
    })
  }
  function SatelliteStationFliter(item) {
    return ({
      "type": "custommachinery:item_filter",
      "ingredient": { "item": item },
      "slot": "filter_data"
    })
  }
  function SatelliteStationModule(item) {
    return ({
      "type": "custommachinery:item",
      "mode": "input",
      "item": item,
      "amount": 1
    }, {
      "type": "custommachinery:item",
      "mode": "output",
      "item": item,
      "amount": 1
    })
  }
  function SatelliteStationGetData(filter, dataType, dimensionType) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:satellite_station",
      "time": 480,
      "priority": 2,
      "error": true,
      "requirements": [
        SatelliteStationStructure,
        SatelliteStationBiome,
        SatelliteStationUp,
        SatelliteStationDown,
        SatelliteStationDataIn,
        SatelliteStationFliter(filter),
        SatelliteStationItem("kubejs:brass_parts_box", 1, "input"),
        SatelliteStationItem("kubejs:radiator", 1, "input"),
        SatelliteStationFluid("kubejs:hydrogen", 500),
        SatelliteStationItem("kubejs:satellite_scanning_module", 1, "input"),
        SatelliteStationItem("kubejs:satellite_scanning_module", 1, "output"),
        SatelliteStationDurability("kubejs:brass_hard_disk", 32, "input", false),
        SatelliteStationItem("kubejs:navigate_data_" + dataType, 2, "output"),
        SatelliteStationItem("kubejs:navigate_data_" + dataType + "_orbit", 2, "output")
      ],
      "jei": [
        SatelliteStationStructure,
        SatelliteStationBiome,
        SatelliteStationDataIn,
        SatelliteStationFliter(filter),
        SatelliteStationItem("kubejs:brass_parts_box", 1, "input"),
        SatelliteStationItem("kubejs:radiator", 1, "input"),
        SatelliteStationFluid("kubejs:hydrogen", 500),
        SatelliteStationItem("kubejs:satellite_scanning_module", 1, "input"),
        SatelliteStationDurability("kubejs:brass_hard_disk", 32, "input", false),
        SatelliteStationItem("kubejs:navigate_data_" + dataType, 2, "output"),
        SatelliteStationItem("kubejs:navigate_data_" + dataType + "_orbit", 2, "output")
      ]
    }).id("dut_create:satellite_station/data_" + filter.split(":")[1])
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:satellite_station",
      "time": 480,
      "priority": 1,
      "error": true,
      "requirements": [
        SatelliteStationStructure,
        SatelliteStationDimension(dimensionType),
        SatelliteStationUp,
        SatelliteStationDown,
        SatelliteStationDataInLocal,
        SatelliteStationItem("kubejs:satellite_scanning_module_local", 1, "input"),
        SatelliteStationItem("kubejs:satellite_scanning_module_local", 1, "output"),
        SatelliteStationItem("kubejs:brass_parts_box", 1, "input"),
        SatelliteStationItem("kubejs:radiator", 1, "input"),
        SatelliteStationFluid("kubejs:hydrogen", 500),
        SatelliteStationDurability("kubejs:brass_hard_disk", 64, "input", true),
        SatelliteStationItem("kubejs:navigate_data_" + dataType, 8, "output"),
        SatelliteStationItem("kubejs:navigate_data_" + dataType + "_orbit", 8, "output")
      ],
      "jei": [
        SatelliteStationStructure,
        SatelliteStationDimension(dimensionType),
        SatelliteStationDataInLocal,
        SatelliteStationItem("kubejs:satellite_scanning_module_local", 1, "input"),
        SatelliteStationItem("kubejs:brass_parts_box", 1, "input"),
        SatelliteStationItem("kubejs:radiator", 1, "input"),
        SatelliteStationFluid("kubejs:hydrogen", 500),
        SatelliteStationDurability("kubejs:brass_hard_disk", 64, "input", true),
        SatelliteStationItem("kubejs:navigate_data_" + dataType, 8, "output"),
        SatelliteStationItem("kubejs:navigate_data_" + dataType + "_orbit", 8, "output")
      ]
    }).id("dut_create:satellite_station/data_local_" + filter.split(":")[1])
  }

  function SatelliteStationMining(filter, moduleCount, diskDamage, otherRequirement) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:satellite_station",
      "time": 480,
      "priority": 2,
      "error": true,
      "requirements": [
        SatelliteStationStructure,
        SatelliteStationUp,
        SatelliteStationDown,
        SatelliteStationFliter(filter),
        SatelliteStationItem("kubejs:satellite_mining_module", moduleCount, "input"),
        SatelliteStationItem("kubejs:brass_parts_box", 1, "input"),
        SatelliteStationItem("kubejs:radiator", 1, "input"),
        SatelliteStationFluid("kubejs:hydrogen", 500),
        SatelliteStationDurability("kubejs:tin_hard_disk", diskDamage, "input", false),
      ].concat(otherRequirement),
      "jei": [
        SatelliteStationStructure,
        SatelliteStationFliter(filter),
        SatelliteStationItem("kubejs:satellite_mining_module", moduleCount, "input"),
        SatelliteStationItem("kubejs:brass_parts_box", 1, "input"),
        SatelliteStationItem("kubejs:radiator", 1, "input"),
        SatelliteStationFluid("kubejs:hydrogen", 500),
        SatelliteStationDurability("kubejs:tin_hard_disk", diskDamage, "input", false),
      ].concat(otherRequirement)
    }).id("dut_create:satellite_station/mining/" + filter.split(":")[1])
  }

  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:satellite_station",
    "time": 10,
    "priority": 0,
    "hidden": true,
    "error": true,
    "requirements": [
      SatelliteStationStructure
    ]
  }).id("dut_create:satellite_station/empty")
  
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:satellite_station",
    "time": 1,
    "error": true,
    "priority": 10,
    "requirements": [
      SatelliteStationStructure,
      {
        "type": "custommachinery:item",
        "mode": "input",
        "item": "kubejs:tin_hard_disk",
        "amount": 1,
        "nbt": '{Damage:1024}'
      }, {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "kubejs:tin_hard_disk",
        "amount": 1,
        "nbt": '{Damage:1024}'
      }
    ],
  }).id("dut_create:satellite_station/disk_translate/tin")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:satellite_station",
    "time": 1,
    "error": true,
    "priority": 10,
    "requirements": [
      SatelliteStationStructure,
      {
        "type": "custommachinery:item",
        "mode": "input",
        "item": "kubejs:aluminum_hard_disk",
        "amount": 1,
        "nbt": '{Damage:1024}'
      }, {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "kubejs:aluminum_hard_disk",
        "amount": 1,
        "nbt": '{Damage:1024}'
      }
    ],
  }).id("dut_create:satellite_station/disk_translate/aluminum")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:satellite_station",
    "time": 1,
    "error": true,
    "priority": 10,
    "requirements": [
      SatelliteStationStructure,
      {
        "type": "custommachinery:item",
        "mode": "input",
        "item": "kubejs:brass_hard_disk",
        "amount": 1,
        "nbt": '{Damage:1024}'
      }, {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "kubejs:brass_hard_disk",
        "amount": 1,
        "nbt": '{Damage:1024}'
      }
    ],
  }).id("dut_create:satellite_station/disk_translate/brass")
  //谐振原虫
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:satellite_station",
    "time": 480,
    "priority": 2,
    "hidden": false,
    "error": true,
    "requirements": [
      SatelliteStationStructure,
      SatelliteStationBiome,
      SatelliteStationUp,
      SatelliteStationDown,
      SatelliteStationItem("kubejs:brass_parts_box", 1, "input"),
      SatelliteStationItem("kubejs:radiator", 1, "input"),
      SatelliteStationFluid("kubejs:hydrogen", 500),
      SatelliteStationDurability("kubejs:brass_hard_disk", 1, "input", false),
      SatelliteStationFliter("kubejs:resonant_bacteria"),
      SatelliteStationItem("kubejs:resonant_bacteria", 16, "output")
    ],
    "jei": [
      SatelliteStationStructure,
      SatelliteStationBiome,
      SatelliteStationItem("kubejs:brass_parts_box", 1, "input"),
      SatelliteStationItem("kubejs:radiator", 1, "input"),
      SatelliteStationFluid("kubejs:hydrogen", 500),
      SatelliteStationDurability("kubejs:brass_hard_disk", 1, "input", false),
      SatelliteStationFliter("kubejs:resonant_bacteria"),
      SatelliteStationItem("kubejs:resonant_bacteria", 16, "output")
    ]
  }).id("dut_create:satellite_station/resonant_bacteria")
  //坐标数据芯片
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:satellite_station",
    "time": 480,
    "priority": 2,
    "error": true,
    "requirements": [
      SatelliteStationStructure,
      SatelliteStationBiome,
      SatelliteStationUp,
      SatelliteStationDown,
      SatelliteStationItem("kubejs:navigate_data_empty", 1, "input"),
      SatelliteStationFliter("supplementaries:slice_map"),
      SatelliteStationItem("kubejs:satellite_scanning_module", 1, "input"),
      SatelliteStationItem("kubejs:satellite_scanning_module", 1, "output"),
      SatelliteStationItem("kubejs:brass_parts_box", 1, "input"),
      SatelliteStationItem("kubejs:radiator", 1, "input"),
      SatelliteStationFluid("kubejs:hydrogen", 500),
      SatelliteStationDurability("kubejs:brass_hard_disk", 1024, "input", false),
      SatelliteStationItem("kubejs:position_data", 1, "output"),
    ],
    "jei": [
      SatelliteStationStructure,
      SatelliteStationBiome,
      SatelliteStationItem("kubejs:navigate_data_empty", 1, "input"),
      SatelliteStationFliter("supplementaries:slice_map"),
      SatelliteStationItem("kubejs:satellite_scanning_module", 1, "input"),
      SatelliteStationItem("kubejs:brass_parts_box", 1, "input"),
      SatelliteStationItem("kubejs:radiator", 1, "input"),
      SatelliteStationFluid("kubejs:hydrogen", 500),
      SatelliteStationDurability("kubejs:brass_hard_disk", 1024, "input", false),
      SatelliteStationItem("kubejs:position_data", 1, "output"),
    ]
  }).id("dut_create:satellite_station/position_data")

  SatelliteStationGetData("supplementaries:globe", "earth", "ad_astra:earth_orbit")
  SatelliteStationGetData("supplementaries:globe_sepia", "earth", "ad_astra:earth_orbit")
  SatelliteStationGetData("ad_astra:earth_globe", "earth", "ad_astra:earth_orbit")
  SatelliteStationGetData("ad_astra:moon_globe", "moon", "ad_astra:moon_orbit")

  SatelliteStationMining("create:crushed_raw_iron", 1, 8, [
    SatelliteStationBiome,
    SatelliteStationItem("create:crushed_raw_iron", 72, "output"),
    SatelliteStationItemChance("create:crushed_raw_iron", 56, "output", 0.5),
    SatelliteStationItem("minecraft:andesite", 24, "output"),
    SatelliteStationItemChance("minecraft:redstone", 64, "output", 0.75)
  ])
  SatelliteStationMining("create:crushed_raw_copper", 1, 8, [
    SatelliteStationBiome,
    SatelliteStationItem("create:crushed_raw_copper", 56, "output"),
    SatelliteStationItemChance("create:crushed_raw_copper", 36, "output", 0.5),
    SatelliteStationItem("minecraft:calcite", 24, "output"),
    SatelliteStationItemChance("minecraft:dripstone_block", 32, "output", 0.5)
  ])
  SatelliteStationMining("create:crushed_raw_gold", 1, 8, [
    SatelliteStationBiome,
    SatelliteStationItem("create:crushed_raw_gold", 56, "output"),
    SatelliteStationItemChance("create:crushed_raw_gold", 36, "output", 0.5),
    SatelliteStationItem("minecraft:diorite", 24, "output"),
    SatelliteStationItemChance("minecraft:quartz", 48, "output", 0.5)
  ])
  SatelliteStationMining("create:crushed_raw_zinc", 1, 8, [
    SatelliteStationBiome,
    SatelliteStationItem("create:crushed_raw_zinc", 52, "output"),
    SatelliteStationItemChance("create:crushed_raw_zinc", 36, "output", 0.5),
    SatelliteStationItem("minecraft:tuff", 24, "output"),
    SatelliteStationItemChance("kubejs:sulphur", 48, "output", 0.5)
  ])
  SatelliteStationMining("create:crushed_raw_tin", 1, 8, [
    SatelliteStationBiome,
    SatelliteStationItem("create:crushed_raw_tin", 52, "output"),
    SatelliteStationItemChance("create:crushed_raw_tin", 36, "output", 0.5),
    SatelliteStationItem("minecraft:granite", 24, "output"),
    SatelliteStationItemChance("minecraft:glowstone_dust", 48, "output", 0.5)
  ])
  SatelliteStationMining("create:brass_ingot", 1, 8, [
    SatelliteStationBiome,
    SatelliteStationItem("create:brass_ingot", 36, "output"),
    SatelliteStationItemChance("create:brass_ingot", 24, "output", 0.5),
    SatelliteStationItem("kubejs:diorite_alloy", 8, "output"),
    SatelliteStationItem("kubejs:granite_alloy", 36, "output"),
    SatelliteStationItemChance("create:andesite_alloy", 36, "output", 0.5)
  ])
  SatelliteStationMining("kubejs:aluminite", 3, 64, [
    SatelliteStationBiome,
    SatelliteStationItem("kubejs:aluminite", 36, "output"),
    SatelliteStationItemChance("kubejs:aluminite", 24, "output", 0.5),
    SatelliteStationItem("kubejs:salt", 16, "output"),
    SatelliteStationItemChance("create:crushed_raw_silver", 24, "output", 0.5)
  ])
  SatelliteStationMining("kubejs:crushed_coal", 2, 8, [
    SatelliteStationBiome,
    SatelliteStationItem("kubejs:crushed_coal", 32, "output"),
    SatelliteStationItemChance("kubejs:crushed_coal", 24, "output", 0.5),
    SatelliteStationItem("kubejs:graphite", 24, "output"),
    SatelliteStationItemChance("ad_astra:sky_stone", 1, "output", 0.05),
    SatelliteStationItemChance("ad_astra:ice_shard", 24, "output", 0.5)
  ])
  SatelliteStationMining("minecraft:ice", 1, 8, [
    SatelliteStationBiome,
    SatelliteStationItem("minecraft:ice", 24, "output"),
    SatelliteStationItemChance("minecraft:packed_ice", 12, "output", 0.5),
    SatelliteStationItem("minecraft:packed_ice", 16, "output"),
    SatelliteStationItemChance("minecraft:blue_ice", 4, "output", 0.25),
    SatelliteStationItemChance("ad_astra:ice_shard", 48, "output", 0.5)
  ])
  SatelliteStationMining("createloveandwar:raw_tungsten", 6, 64, [
    SatelliteStationDimension('ad_astra:earth_orbit'),
    SatelliteStationItem("createloveandwar:raw_tungsten", 12, "output"),
    SatelliteStationItemChance("createloveandwar:crushed_tungsten", 8, "output", 0.5),
    SatelliteStationItem("createloveandwar:tungsten_nugget", 4, "output"),
    SatelliteStationItemChance("createloveandwar:tungsten_nugget", 6, "output", 0.5),
    SatelliteStationItemChance("create:crushed_raw_tin", 64, "output", 0.25)
  ])
})