ServerEvents.recipes(event => {
  const SatelliteStationStructure ={
    "type": "custommachinery:general_structure",
    "id": "main"
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
      "time": 320,
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
      "time": 320,
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
      "time": 320,
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

  //谐振原虫
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:satellite_station",
    "time": 320,
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
    "time": 320,
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

  SatelliteStationMining("kubejs:aluminite", 4, 64, [
    SatelliteStationBiome,
    SatelliteStationItem("kubejs:aluminum_meteorite", 48, "output"),
    SatelliteStationItem("kubejs:salt", 32, "output"),
    SatelliteStationItem("minecraft:tuff", 32, "output")
  ])
  event.custom({
    "type": "create:pressing",
    "ingredients": [
      { "item": "kubejs:aluminum_meteorite" }
    ],
    "results": [
      { "item": "kubejs:aluminite", "count": 8 }
    ]
  }).id("dut_create:pressing_meteorite/aluminum_meteorite")

  SatelliteStationMining("kubejs:metal_meteorite", 1, 8, [
    SatelliteStationBiome,
    SatelliteStationItem("kubejs:metal_meteorite", 96, "output"),
    SatelliteStationItemChance("ad_astra:sky_stone", 1, "output", 0.01)
  ])
  event.custom({
    "type": "createbigcannons:melting",
    "heatRequirement": "heated",
    "ingredients": [{ "item": "kubejs:metal_meteorite" }],
    "processingTime": 20,
    "results": [
      { "fluid": "kubejs:tin", "amount": IngotFluid * 10 },
      { "item": "minecraft:glowstone_dust", "count": 1 }
    ]
  }).id("dut_create:melting_meteorite/tin")
  event.custom({
    "type": "createbigcannons:melting",
    "heatRequirement": "heated",
    "ingredients": [{ "item": "kubejs:metal_meteorite" }],
    "processingTime": 20,
    "results": [
      { "fluid": "kubejs:tin", "amount": IngotFluid * 10 },
      { "item": "kubejs:sulphur", "count": 5 }
    ]
  }).id("dut_create:melting_meteorite/tin_1")
  event.custom({
    "type": "createbigcannons:melting",
    "heatRequirement": "heated",
    "ingredients": [{ "item": "kubejs:metal_meteorite" }],
    "processingTime": 20,
    "results": [
      { "fluid": "kubejs:iron", "amount": IngotFluid * 10 },
      { "item": "minecraft:redstone", "count": 1 }
    ]
  }).id("dut_create:melting_meteorite/iron")
  event.custom({
    "type": "createbigcannons:melting",
    "heatRequirement": "heated",
    "ingredients": [{ "item": "kubejs:metal_meteorite" }],
    "processingTime": 20,
    "results": [
      { "fluid": "kubejs:copper", "amount": IngotFluid * 10 },
      { "item": "minecraft:amethyst_shard", "count": 16 }
    ]
  }).id("dut_create:melting_meteorite/copper")
  event.custom({
    "type": "createbigcannons:melting",
    "heatRequirement": "heated",
    "ingredients": [{ "item": "kubejs:metal_meteorite" }],
    "processingTime": 20,
    "results": [
      { "fluid": "kubejs:gold", "amount": IngotFluid * 10 },
      { "item": "create:cinder_flour", "count": 10 }
    ]
  }).id("dut_create:melting_meteorite/gold")

  SatelliteStationMining("create:brass_ingot", 1, 8, [
    SatelliteStationBiome,
    SatelliteStationItem("kubejs:alloy_meteorite", 64, "output"),
    SatelliteStationItemChance("ad_astra:sky_stone", 1, "output", 0.01)
  ])
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "item": "kubejs:alloy_meteorite" }
    ],
    "results": [
      { "item": "create:andesite_alloy", "count": 8 },
      { "item": "kubejs:granite_alloy", "count": 8 },
      { "item": "kubejs:diorite_alloy", "count": 8 }
    ]
  }).id("dut_create:compacting_meteorite/alloy_meteorite")
  event.custom({
    "type": "createbigcannons:melting",
    "heatRequirement": "heated",
    "ingredients": [{ "item": "kubejs:alloy_meteorite" }],
    "processingTime": 20,
    "results": [
      { "fluid": "kubejs:brass", "amount": IngotFluid * 10 },
      { "item": "kubejs:salt", "count": 16 }
    ]
  }).id("dut_create:melting_meteorite/brass")
  event.custom({
    "type": "createbigcannons:melting",
    "heatRequirement": "heated",
    "ingredients": [{ "item": "kubejs:alloy_meteorite" }],
    "processingTime": 20,
    "results": [
      { "fluid": "kubejs:industrial_iron", "amount": IngotFluid * 10 },
      { "item": "kubejs:granite_alloy", "count": 8 }
    ]
  }).id("dut_create:melting_meteorite/industrial_iron")

  SatelliteStationMining("kubejs:crushed_coal", 1, 8, [
    SatelliteStationBiome,
    SatelliteStationItem("kubejs:carbon_meteorite", 48, "output"),
    SatelliteStationItemChance("ad_astra:sky_stone", 1, "output", 0.05)
  ])
  event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "ingredients": [
      { "item": "kubejs:peat_protozoa" },
      { "item": "kubejs:carbon_meteorite" }
    ],
    "processingTime": 20,
    "results": [
      { "item": "kubejs:peat_protozoa" },
      { "item": "kubejs:crushed_coal", "count": 24 }
    ]
  }).id('dut_create:ferment_meteorite/crushed_coal')
  event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "ingredients": [
      { "item": "kubejs:peat_protozoa" },
      { "item": "kubejs:carbon_meteorite" }
    ],
    "processingTime": 20,
    "results": [
      { "item": "kubejs:peat_protozoa" },
      { "item": "kubejs:graphite", "count": 12 }
    ]
  }).id('dut_create:ferment_meteorite/graphite')

  SatelliteStationMining("createloveandwar:raw_tungsten", 6, 64, [
    SatelliteStationDimension('ad_astra:earth_orbit'),
    SatelliteStationItem("createloveandwar:raw_tungsten", 24, "output"),
    SatelliteStationItem("createloveandwar:tungsten_nugget", 8, "output"),
    SatelliteStationItemChance("create:crushed_raw_tin", 32, "output", 0.25)
  ])
})