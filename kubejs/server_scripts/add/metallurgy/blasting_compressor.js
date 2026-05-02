ServerEvents.recipes(event => {
  const BlastingCompressorStructure =
  {
    "type": "custommachinery:general_structure",
    "id": "main"
  }
  const BlastingCompressorSound = {
    "type": "custommachinery:sound",
    "phase": "starting",
    "sound": "createbigcannons:shell_explosion",
    "pos": [0, 3.5, 0]
  }
  const BlastingCompressorParticle1 = {
    "type": "custommachinery:particle",
    "phase": "starting",
    "particle": "minecraft:explosion_emitter",
    "pos": [0, 3.5, 0],
    "delta": [0, 0, 0],
    "speed": 0,
    "count": 1
  }
  const BlastingCompressorParticle2 = {
    "type": "custommachinery:particle",
    "phase": "starting",
    "particle": "minecraft:smoke",
    "pos": [0, 3.5, 0],
    "delta": [0.8, 0.3, 0.8],
    "speed": 0.3,
    "count": 32
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
      "time": 10,
      "priority": 1,
      "error": true,
      "requirements": [
        BlastingCompressorStructure,
        BlastingCompressorTNT,
        {
          "type": "custommachinery:command",
          "phase": "starting",
          "command": "/function dut:particle/blasting_compressor",
          "log": false,
          "permissionlevel": 5
        },
        BlastingCompressorParticle1,
        BlastingCompressorParticle2,
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
      "time": 10,
      "error": true,
      "hidden": true,
      "priority": 1,
      "requirements": [
        BlastingCompressorStructure,
        {
          "type": "custommachinery:command",
          "phase": "starting",
          "command": "/function dut:particle/blasting_compressor",
          "log": false,
          "permissionlevel": 5
        },
        BlastingCompressorParticle1,
        BlastingCompressorParticle2,
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

  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:blasting_compressor",
    "time": 5,
    "error": true,
    "priority": 0,
    "requirements": [
      BlastingCompressorStructure
    ]
  }).id("dut_create:blasting_compressor/empty")
  function BlastingCompressorIngot(input, output) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:blasting_compressor",
      "time": 10,
      "error": true,
      "priority": 2,
      "requirements": [
        BlastingCompressorStructure,
        BlastingCompressorTNT,
        {
          "type": "custommachinery:command",
          "phase": "starting",
          "command": "/function dut:particle/blasting_compressor",
          "log": false,
          "permissionlevel": 5
        },
        BlastingCompressorParticle1,
        BlastingCompressorParticle2,
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
      "time": 10,
      "priority": 2,
      "error": true,
      "requirements": [
        BlastingCompressorStructure,
        BlastingCompressorShell,
        {
          "type": "custommachinery:command",
          "phase": "starting",
          "command": "/function dut:particle/blasting_compressor",
          "log": false,
          "permissionlevel": 5
        },
        BlastingCompressorParticle1,
        BlastingCompressorParticle2,
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

  BlastingCompressorPlate("create:industrial_iron_block", "kubejs:industrial_iron_sheet", 81)

  BlastingCompressorPlate("create:brass_block", "create:brass_sheet", 81)

  BlastingCompressorPlate("kubejs:new_zinc_block", "kubejs:new_zinc_sheet", 81)

  BlastingCompressorPlate("minecraft:iron_block", "create:iron_sheet", 81)

  BlastingCompressorPlate("minecraft:gold_block", "create:golden_sheet", 81)

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