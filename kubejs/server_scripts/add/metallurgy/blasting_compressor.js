ServerEvents.recipes(event => {
  const BlastingCompressorStructure =
  {
    "type": "custommachinery:structure",
    "pattern":
      [
        [
          "  A  ",
          " GGG ",
          "AGOGA",
          " GGG ",
          "  A  "
        ],
        [
          "  A  ",
          "     ",
          "A P A",
          "     ",
          "  A  "
        ],
        [
          "  B  ",
          "     ",
          "B P B",
          "     ",
          "  B  "
        ],
        [
          " CAC ",
          "     ",
          "A P A",
          "     ",
          " CAC "
        ],
        [
          " B B ",
          "CGGGC",
          "AGOGA",
          "CGGGC",
          " B B "
        ],
        [
          " A A ",
          "BBKBB",
          "SSmSS",
          "BBKBB",
          " A A "
        ],
        [
          " BBB ",
          "BLLLB",
          "PLVLP",
          "BLLLB",
          " BBB "
        ]
      ],
    "keys": {
      "S": "#dut_create:shaft",
      "G": "design_decor:brass_boiler_structure",
      "O": "design_decor:brass_boiler_large",
      "P": "design_decor:industrial_iron_boiler",
      "A": "create:industrial_iron_block",
      "C": "design_decor:diagonal_metal_support",
      "L": "design_decor:cast_iron_boiler_structure",
      "K": "#dut_create:container",
      "B": "create:metal_girder",
      "V": "design_decor:cast_iron_boiler_large",
    },
    "jei": true
  }
  const BlastingCompressorTNT = {
    "type": "custommachinery:entity",
    "mode": "input",
    "amount": 3,
    "radius": 6,
    "action": "kill",
    "filter": ["minecraft:tnt", "minecraft:creeper"],
    "whitelist": true
  }
  const BlastingCompressorShell = {
    "type": "custommachinery:entity",
    "mode": "input",
    "amount": 1,
    "radius": 6,
    "action": "kill",
    "filter": ["createbigcannons:primed_propellant", "minecraft:end_crystal"],
    "whitelist": true
  }
  const BlastingCompressorSound = {
    "type": "custommachinery:command",
    "phase": "starting",
    "command": "/function dut:particle/blasting_compressor",
    "log": false,
    "permissionlevel": 5
  }
  const BlastingCompressorStress = {
    "type": "custommachinery:contraption",
    "mode": "input",
    "speed": 256
  }
  function BlastingCompressorFluid(fluid, amount) {
    return ({
      "type": "custommachinery:fluid",
      "mode": "input",
      "fluid": fluid,
      "amount": amount,
      "tank": "3"
    })
  }
  function BlastingCompressorItemOut(item, amount) {
    return ({
      "type": "custommachinery:item",
      "mode": "output",
      "item": item,
      "amount": amount
    })
  }
  function BlastingCompressorItemIn(item, amount, slot) {
    return ({
      "type": "custommachinery:item",
      "mode": "input",
      "item": item,
      "slot": slot,
      "amount": amount
    })
  }
  function BlastingCompressorInput(block) {
    return ({
      "type": "custommachinery:block",
      "mode": "input",
      "action": "replace_destroy",
      "amount": 9,
      "pos": [1, 3, 1, -1, 3, -1],
      "filter": [block],
      "whitelist": true,
      "block": "minecraft:air"
    })
  }
  function BlastingCompressorPlate(item, item1, amount) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:blasting_compressor",
      "time": 20,
      "priority": 1,
      "error": true,
      "requirements": [
        BlastingCompressorStructure,
        BlastingCompressorTNT,
        BlastingCompressorSound,
        BlastingCompressorStress,
        BlastingCompressorInput(item),
        BlastingCompressorItemOut(item1, amount)
      ],
      "jei": [
        BlastingCompressorStructure,
        BlastingCompressorStress,
        BlastingCompressorItemIn("minecraft:tnt", 3, "1"),
        BlastingCompressorItemIn(item, 9, "2"),
        BlastingCompressorInput(item),
        BlastingCompressorItemOut(item1, amount)
      ]
    }).id("dut_create:blasting_compressor/" + item.split(':')[1])
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:blasting_compressor",
      "time": 20,
      "error": true,
      "hidden": true,
      "priority": 1,
      "requirements": [
        BlastingCompressorStructure,
        BlastingCompressorShell,
        BlastingCompressorSound,
        BlastingCompressorStress,
        BlastingCompressorInput(item),
        BlastingCompressorItemOut(item1, amount)
      ],
      "jei": [
        BlastingCompressorStructure,
        BlastingCompressorStress,
        BlastingCompressorItemIn("createbigcannons:powder_charge", 1, "1"),
        BlastingCompressorItemIn(item, 9, "2"),
        BlastingCompressorInput(item),
        BlastingCompressorItemOut(item1, amount)
      ]
    }).id("dut_create:blasting_compressor/powder_charge/" + item.split(':')[1])
  }

  function BlastingCompressorIngot(input, output) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:blasting_compressor",
      "time": 20,
      "error": true,
      "priority": 1,
      "requirements": [
        BlastingCompressorStructure,
        BlastingCompressorTNT,
        BlastingCompressorSound,
        BlastingCompressorStress,
        BlastingCompressorInput(input + "[level=0]"),
        BlastingCompressorItemOut(output, 100)
      ],
      "jei": [
        BlastingCompressorStructure,
        BlastingCompressorStress,
        BlastingCompressorItemIn("minecraft:tnt", 3, "1"),
        BlastingCompressorFluid(input, 9000),
        BlastingCompressorInput(input + "[level=0]"),
        BlastingCompressorItemOut(output, 100)
      ]
    }).id("dut_create:blasting_compressor/tnt/" + output.split(':')[1])
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:blasting_compressor",
      "time": 20,
      "priority": 1,
      "error": true,
      "requirements": [
        BlastingCompressorStructure,
        BlastingCompressorShell,
        BlastingCompressorSound,
        BlastingCompressorStress,
        BlastingCompressorInput(input + "[level=0]"),
        BlastingCompressorItemOut(output, 100)
      ],
      "jei": [
        BlastingCompressorStructure,
        BlastingCompressorStress,
        BlastingCompressorItemIn("createbigcannons:powder_charge", 1, "1"),
        BlastingCompressorFluid(input, 9000),
        BlastingCompressorInput(input + "[level=0]"),
        BlastingCompressorItemOut(output, 100)
      ]
    }).id("dut_create:blasting_compressor/powder_charge/" + output.split(':')[1])
  }
  
  BlastingCompressorPlate("create:shadow_steel_casing", "vintageimprovements:shadow_steel_sheet", 9)

  BlastingCompressorPlate("create:industrial_iron_block", "kubejs:industrial_iron_sheet", 81)

  BlastingCompressorPlate("create:brass_block", "create:brass_sheet", 81)

  BlastingCompressorPlate("create:zinc_block", "createaddition:zinc_sheet", 81)

  BlastingCompressorPlate("minecraft:iron_block", "create:iron_sheet", 81)

  BlastingCompressorPlate("minecraft:gold_block", "create:golden_sheet", 81)

  BlastingCompressorPlate("iceandfire:silver_block", "vintageimprovements:silver_sheet", 81)

  BlastingCompressorPlate("#dut_create:copper_block", "create:copper_sheet", 81)

  event.remove({ output: "ad_astra:steel_plate" })
  event.remove({ output: "createloveandwar:tungsten_sheet" })
  BlastingCompressorPlate("createloveandwar:tungsten_block", "createloveandwar:tungsten_sheet", 81)
  BlastingCompressorPlate("ad_astra:steel_block", "ad_astra:steel_plate", 81)

  BlastingCompressorPlate("ad_astra:desh_block", "ad_astra:desh_plate", 81)

  BlastingCompressorPlate("kubejs:tin_block", "kubejs:tin_sheet", 81)

  BlastingCompressorPlate("kubejs:aluminum_block", "kubejs:aluminum_sheet", 81)

  BlastingCompressorPlate("minecraft:netherite_block", "vintageimprovements:netherite_sheet", 81)

  BlastingCompressorPlate("minecraft:coal_block", "minecraft:diamond", 3)
})