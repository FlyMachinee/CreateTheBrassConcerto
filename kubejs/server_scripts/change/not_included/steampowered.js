// requires:steampowered
ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom().id("dut_create:")
  //event.remove({ mod: 'automobility' })
  event.remove({ output: ['steampowered:cast_iron_flywheel','steampowered:steel_flywheel','steampowered:bronze_flywheel','steampowered:cast_iron_boiler','steampowered:steel_boiler','steampowered:bronze_boiler','steampowered:cast_iron_burner','steampowered:steel_burner','steampowered:bronze_burner','steampowered:cast_iron_steam_engine','steampowered:steel_steam_engine','steampowered:bronze_steam_engine','steampowered:cast_iron_cogwheel','steampowered:steel_cogwheel','steampowered:bronze_cogwheel','steampowered:cast_iron_large_cogwheel','steampowered:steel_large_cogwheel','steampowered:bronze_large_cogwheel','steampowered:alternator'] })
  //熔炉引擎
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item":"createbigcannons:cast_iron_block" },
      { "item": "create:mechanical_pump" }
    ],
    "results": [
      { "item": "steampowered:cast_iron_steam_engine" }
    ]
  }).id("dut_create:delpoying/cast_iron_steam_engine")
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "tag":"forge:storage_blocks/steel" },
      { "item": "create:mechanical_pump" }
    ],
    "results": [
      { "item": "steampowered:steel_steam_engine" }
    ]
  }).id("dut_create:delpoying/steel_steam_engine")
  //飞轮
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item":"createbigcannons:cast_iron_block" },
      { "item": "create:flywheel" }
    ],
    "results": [
      { "item": "steampowered:cast_iron_flywheel" }
    ]
  }).id("dut_create:delpoying/cast_iron_flywheel")
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "tag":"forge:storage_blocks/steel" },
      { "item": "create:flywheel" }
    ],
    "results": [
      { "item": "steampowered:steel_flywheel" }
    ]
  }).id("dut_create:delpoying/steel_flywheel")
  //燃烧室
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "minecraft:blast_furnace" },
      { "item":"createbigcannons:cast_iron_block" }
    ],
    "results": [
      { "item": "steampowered:cast_iron_burner" }
    ]
  }).id("dut_create:delpoying/cast_iron_burner")
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "minecraft:blast_furnace" },
      { "tag":"forge:storage_blocks/steel" }
    ],
    "results": [
      { "item": "steampowered:steel_burner" }
    ]
  }).id("dut_create:delpoying/steel_burner")
  //锅炉
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "create:fluid_tank" },
      { "item":"createbigcannons:cast_iron_block" }
    ],
    "results": [
      { "item": "steampowered:cast_iron_boiler" }
    ]
  }).id("dut_create:delpoying/cast_iron_boiler")
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "create:fluid_tank" },
      { "tag":"forge:storage_blocks/steel" }
    ],
    "results": [
      { "item": "steampowered:steel_boiler" }
    ]
  }).id("dut_create:delpoying/steel_boiler")
  
  //钢齿轮
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "steampowered:steel_cogwheel" },
      { "tag": "forge:ingots/steel" }
    ],
    "results": [{ "item": "steampowered:steel_large_cogwheel", "count": 8 }]
  }).id("dut_create:deploying/steel_large_cogwheel")
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "create:shaft" },
      { "tag": "forge:ingots/steel" }
    ],
    "results": [{ "item": "steampowered:steel_cogwheel", "count": 8 }]
  }).id("dut_create:deploying/steel_cogwheel")
  })