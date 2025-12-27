ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //锭、粒、块转换
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [{ "tag": "forge:ingots/industrial_iron" }],
    "result": { "item": "kubejs:industrial_iron_nugget", "count": 9 }
  }).id("dut_create:industrial_iron/ingot_to_nugget")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [{ "tag": "forge:storage_blocks/industrial_iron" }],
    "result": { "item": "kubejs:industrial_iron_ingot", "count": 9 }
  }).id("dut_create:industrial_iron/block_to_ingot")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "key": { "#": { "tag": "forge:ingots/industrial_iron" } },
    "result": { "item": "create:industrial_iron_block" }
  }).id("dut_create:industrial_iron/ingot_to_block")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "key": { "#": { "tag": "forge:nuggets/industrial_iron" } },
    "result": { "item": "kubejs:industrial_iron_ingot" }
  }).id("dut_create:industrial_iron/nugget_to_ingot")
  //压板
  event.custom({
    "type": "create:pressing",
    "ingredients": [ {"tag": "forge:ingots/industrial_iron"}],
    "results": [ {"item": "kubejs:industrial_iron_sheet"}]
  }).id("dut_create:industrial_iron/get_sheet")
  //基础配方
  event.remove({ output: 'create:industrial_iron_block', not: { mod: "kubejs" } })
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "tag": "forge:plates/iron" },
      { "tag": "forge:plates/iron" },
      { "item": "create:andesite_alloy" }
    ],
    "results": [{ "item": "kubejs:industrial_iron_ingot", "count": 2 }],
    "heatRequirement": "superheated"
  }).id("dut_create:industrial_iron/get_common")
  //工业镀铁
  event.remove({ output: 'design_decor:industrial_plating_block', not: { mod: "kubejs" } })
  event.custom({
    "type": "create:cutting",
    "ingredients": [{ "tag": "forge:ingots/industrial_iron" }],
    "results": [{ "item": "design_decor:industrial_plating_block", "count": 2 }]
  }).id("dut_create:industrial_iron/get_plating")
  event.custom({
    "type": "create:pressing",
    "ingredients": [{ "item": "create:industrial_iron_block" }],
    "results": [{ "item": "design_decor:industrial_plating_block", "count": 18 }]
  }).id("dut_create:industrial_iron/get_plating_fast")
  
  event.custom({
    "type": "create:cutting",
    "ingredients": [{ "tag": "forge:ingots/industrial_iron" }],
    "results": [{ "item": "create:shaft", "count": 16 }]
  }).id("dut_create:industrial_iron/shaft")
  //齿轮
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "create:shaft" },
      { "item": "design_decor:industrial_plating_block" }
    ],
    "results": [{ "item": "design_decor:industrial_gear" }]
  }).id("dut_create:deploying/industrial_gear")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "item": "create:shaft" },
      { "item": "design_decor:industrial_plating_block" }
    ],
    "result": { "item": "design_decor:industrial_gear" }
  }).id("dut_create:crafting_shapeless/industrial_gear")
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "design_decor:industrial_gear" },
      { "item": "design_decor:industrial_plating_block" }
    ],
    "results": [{ "item": "design_decor:industrial_gear_large" }]
  }).id("dut_create:deploying/industrial_gear_large")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "item": "design_decor:industrial_gear" },
      { "item": "design_decor:industrial_plating_block" }
    ],
    "result": { "item": "design_decor:industrial_gear_large" }
  }).id("dut_create:crafting_shapeless/industrial_gear_large")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "item": "create:shaft" },
      { "item": "design_decor:industrial_plating_block" },
      { "item": "design_decor:industrial_plating_block" }
    ],
    "result": { "item": "design_decor:industrial_gear_large" }
  }).id("dut_create:crafting_shapeless/industrial_gear_large_from_shaft")

  //工业铁-替换配方
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "III",
      " i ",
      "iii"
    ],
    "key": {
      "I": { "item": "create:industrial_iron_block" },
      "i": { "tag": "forge:ingots/industrial_iron" }
    },
    "result": { "item": "minecraft:anvil", "count": 2 }
  }).id("dut_create:industrial_iron/anvil")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "# #",
      "# #",
      "###"
    ],
    "key": {
      "#": { "tag": "forge:ingots/industrial_iron" }
    },
    "result": { "item": "minecraft:cauldron", "count": 2 }
  }).id("dut_create:industrial_iron/cauldron")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "III",
      "IXI",
      "###"
    ],
    "key": {
      "#": { "item": "minecraft:smooth_stone" },
      "X": { "item": "minecraft:furnace" },
      "I": { "tag": "forge:ingots/industrial_iron" }
    },
    "result": { "item": "minecraft:blast_furnace", "count": 2 }
  }).id("dut_create:industrial_iron/blast_furnace")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "N",
      "I",
      "N"
    ],
    "key": {
      "I": { "tag": "forge:ingots/industrial_iron" },
      "N": { "tag": "forge:nuggets/industrial_iron" }
    },
    "result": { "item": "minecraft:chain", "count": 12 }
  }).id("dut_create:industrial_iron/chain")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "PAP"
    ],
    "key": {
      "A": { "item": "kubejs:electric_gear" },
      "P": { "tag": "forge:plates/industrial_iron" }
    },
    "result": { "item": "create:display_board", "count": 8 }
  }).id("dut_create:industrial_iron/display_board")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "I I",
      "ICI",
      " S "
    ],
    "key": {
      "C": { "tag": "forge:chests" },
      "I": { "tag": "forge:ingots/industrial_iron" },
      "S": { "tag": "forge:plates/industrial_iron" }
    },
    "result": { "item": "minecraft:hopper", "count": 8 }
  }).id("dut_create:industrial_iron/hopper")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "PPP",
      "CCC"
    ],
    "key": {
      "P": { "tag": "forge:plates/industrial_iron" },
      "C": { "item": "create:andesite_alloy" }
    },
    "result": {"item": "create:metal_girder", "count": 24 }
  }).id("dut_create:industrial_iron/metal_girder")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "SSS",
      "PCP"
    ],
    "key": {
      "S": { "tag": "forge:nuggets/industrial_iron"},
      "P": { "tag": "forge:ingots/industrial_iron" },
      "C": { "item": "create:andesite_alloy"}
    },
    "result": {"item": "create:metal_bracket","count": 12 }
  }).id("dut_create:industrial_iron/metal_bracket")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "A",
      "I",
      "A"
    ],
    "key": {
      "A": { "tag": "forge:plates/industrial_iron" },
      "I": { "item": "minecraft:barrel" }
    },
    "result": { "item": "create:item_vault", "count": 4 }
  }).id("dut_create:industrial_iron/item_vault")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": ["AIA"],
    "key": {
      "A": { "tag": "forge:plates/industrial_iron" },
      "I": { "item": "minecraft:barrel" }
    },
    "result": { "item": "createdieselgenerators:oil_barrel", "count": 4 }
  }).id("dut_create:industrial_iron/oil_barrel")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "N",
      "I",
      "N"
    ],
    "key": {
      "N": { "tag": "forge:ingots/industrial_iron" },
      "I": { "tag": "forge:nuggets/industrial_iron" }
    },
    "result": { "item": "createaddition:spool", "count": 64 }
  }).id("dut_create:industrial_iron/spool")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "NIN",
      " N "
    ],
    "key": {
      "N": { "tag": "forge:ingots/industrial_iron" },
      "I": { "item": "minecraft:glowstone_dust" }
    },
    "result": { "item": "design_decor:andesite_floodlight", "count": 6 }
  }).id("dut_create:industrial_iron/andesite_floodlight")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "IAI",
      "NNN"
    ],
    "key": {
      "N": { "tag": "forge:ingots/industrial_iron" },
      "I": { "item": "minecraft:redstone_torch" },
      "A": { "item": "minecraft:redstone" }
    },
    "result": { "item": "minecraft:repeater", "count": 3}
  }).id("dut_create:industrial_iron/repeater")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      " I ",
      "IAI",
      "NNN"
    ],
    "key": {
      "N": { "tag": "forge:ingots/industrial_iron" },
      "I": { "item": "minecraft:redstone_torch" },
      "A": { "item": "minecraft:quartz" }
    },
    "result": { "item": "minecraft:comparator", "count": 3}
  }).id("dut_create:industrial_iron/comparator")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "BAI",
      "NNN"
    ],
    "key": {
      "N": { "tag": "forge:ingots/industrial_iron" },
      "B": { "item": "kubejs:circuit_board" },
      "I": { "item": "minecraft:redstone_torch" },
      "A": { "tag": "forge:plates/brass" }
    },
    "result": { "item": "create:pulse_repeater", "count": 3}
  }).id("dut_create:industrial_iron/pulse_repeater")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "  I",
      "BAI",
      "NNN"
    ],
    "key": {
      "N": { "tag": "forge:ingots/industrial_iron" },
      "B": { "item": "kubejs:circuit_board" },
      "I": { "item": "minecraft:redstone_torch" },
      "A": { "tag": "forge:plates/brass" }
    },
    "result": { "item": "create:pulse_extender", "count": 3}
  }).id("dut_create:industrial_iron/pulse_extender")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      " I ",
      "ABA",
      "NNN"
    ],
    "key": {
      "N": { "tag": "forge:ingots/industrial_iron" },
      "I": { "item": "minecraft:lever" },
      "A": { "item": "minecraft:redstone" },
      "B": { "item": "minecraft:redstone_torch" }
    },
    "result": { "item": "create:powered_latch", "count": 3}
  }).id("dut_create:industrial_iron/powered_latch")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      " I ",
      " B ",
      "NNN"
    ],
    "key": {
      "N": { "tag": "forge:ingots/industrial_iron" },
      "I": { "item": "minecraft:lever" },
      "B": { "item": "minecraft:redstone_torch" }
    },
    "result": { "item": "create:powered_toggle_latch", "count": 3}
  }).id("dut_create:industrial_iron/powered_toggle_latch")
  event.custom({
    "type": "minecraft:stonecutting",
    "ingredient":  { "tag": "forge:ingots/industrial_iron" },
    "result": "design_decor:iron_railing",
    "count": 8
  }).id("dut_create:industrial_iron/iron_railing")
  event.custom({
    "type": "minecraft:stonecutting",
    "ingredient":  { "tag": "forge:ingots/industrial_iron" },
    "result": "design_decor:diagonal_metal_support",
    "count": 8
  }).id("dut_create:industrial_iron/diagonal_metal_support")
  event.custom({
    "type": "minecraft:stonecutting",
    "ingredient":  { "tag": "forge:ingots/industrial_iron" },
    "result": "design_decor:metal_support",
    "count": 8
  }).id("dut_create:industrial_iron/metal_support")
  event.custom({
    "type": "minecraft:stonecutting",
    "ingredient":  { "tag": "forge:ingots/industrial_iron" },
    "result": "design_decor:metal_sheet",
    "count": 8
  }).id("dut_create:industrial_iron/metal_sheet")
  event.custom({
    "type": "minecraft:stonecutting",
    "ingredient":  { "tag": "forge:ingots/industrial_iron" },
    "result": "design_decor:iron_catwalk",
    "count": 8
  }).id("dut_create:industrial_iron/iron_catwalk")
  //
  //event.custom().id("dut_create:industrial_iron/")
})
