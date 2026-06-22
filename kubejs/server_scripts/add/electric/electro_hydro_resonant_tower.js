ServerEvents.recipes(event => {
  const ResonantTowerStructure = {
    "type": "custommachinery:general_structure",
    "id": "main"
  }
  const ResonantTowerSound = {
    "type": "custommachinery:sound",
    "phase": "starting",
    "sound": "createaddition:electric_motor_buzz",
    "pos": [0, 3.5, 0],
    "volume": 0.3,
    "pitch": 0.8
  }
  const ResonantTowerParticle = {
    "type": "custommachinery:particle",
    "phase": "crafting_tickable",
    "particle": "minecraft:electric_spark",
    "pos": [0, 12.5, 0],
    "delta": [1.5, 3.5, 1.5],
    "speed": 0.1,
    "count": 24,
    "chance": 0.75
  }
  const ResonantTowerLightning = {
    "type": "custommachinery:command",
    "phase": "ending",
    "command": "/summon minecraft:lightning_bolt ~ ~24 ~",
    "log": false,
    "permissionlevel": 5
  }
  const ResonantTowerLightningcheck = {
    "type": "custommachinery:entity",
    "mode": "input",
    "amount": 2,
    "radius": 26,
    "action": "kill",
    "filter": ["minecraft:lightning_bolt"],
    "whitelist": true
  }
  function ResonantTowerFluid(fluid, amount, mode) {
    return ({
      "type": "custommachinery:fluid",
      "mode": mode,
      "fluid": fluid,
      "amount": amount
    })
  }
  function ResonantTowerItem(item, amount, mode) {
    return ({
      "type": "custommachinery:item",
      "mode": mode,
      "item": item,
      "amount": amount
    })
  }
  function ResonantTowerItemChance(item, amount, chance, mode) {
    return ({
      "type": "custommachinery:item",
      "mode": mode,
      "item": item,
      "amount": amount
    })
  }
  function ResonantTowerEnergyInput(amount) {
    return ({
      "type": "custommachinery:energy_per_tick",
      "mode": "input",
      "amount": amount
    })
  }
  function ResonantTowerDimension(dimension) {
    return ({
      "type": "custommachinery:dimension",
      "filter": dimension,
      "blacklist": false
    })
  }
  function ResonantTowerBiome(biome) {
    return ({
      "type": "custommachinery:biome",
      "filter": biome,
      "blacklist": false
    })
  }
  function ResonantTowerRecipe(RequirementList, id, time) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:electro_hydro_resonant_tower",
      "time": time,
      "error": true,
      "priority": 1,
      "requirements": [
        ResonantTowerStructure,
        ResonantTowerLightning,
        ResonantTowerSound,
        ResonantTowerParticle,
      ].concat(RequirementList),
      "jei": [
        ResonantTowerStructure,
      ].concat(RequirementList)
    }).id("dut_create:electro_hydro_resonant_tower/" + id)
  }
  function ResonantTowerRecipeLightning(RequirementList, id, time) {
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "dut:electro_hydro_resonant_tower",
      "time": time,
      "error": true,
      "priority": 2,
      "requirements": [
        ResonantTowerStructure,
        ResonantTowerLightning,
        ResonantTowerSound,
        ResonantTowerParticle,
        ResonantTowerLightningcheck,
      ].concat(RequirementList),
      "jei": [
        ResonantTowerStructure,
        ResonantTowerLightningcheck,
      ].concat(RequirementList)
    }).id("dut_create:electro_hydro_resonant_tower/" + id + "_lightning")
  }

  ResonantTowerRecipe([
    ResonantTowerDimension('ad_astra:moon'),
    ResonantTowerEnergyInput(17280),
    ResonantTowerItem("kubejs:carbon_electrode", 4, "input"),
    ResonantTowerFluid("kubejs:covariant_heat", 500, "input"),
    ResonantTowerFluid("kubejs:electro_hydro", 500, "output"),
  ], "electro_hydro", 60)
  ResonantTowerRecipeLightning([
    ResonantTowerDimension('ad_astra:moon'),
    ResonantTowerEnergyInput(8640),
    ResonantTowerItem("kubejs:carbon_electrode", 4, "input"),
    ResonantTowerFluid("kubejs:covariant_heat", 500, "input"),
    ResonantTowerFluid("kubejs:electro_hydro", 500, "output"),
  ], "electro_hydro", 60)
  ResonantTowerRecipe([
    ResonantTowerDimension('ad_astra:moon'),
    ResonantTowerEnergyInput(12960),
    ResonantTowerFluid("kubejs:covariant_heat", 240, "input"),
    ResonantTowerItem("iceandfire:ghost_ingot", 4, "input"),
    ResonantTowerFluid("kubejs:electro_hydro", 2000, "output"),
  ], "electro_hydro_ghost", 60)
  ResonantTowerRecipeLightning([
    ResonantTowerDimension('ad_astra:moon'),
    ResonantTowerEnergyInput(6480),
    ResonantTowerFluid("kubejs:covariant_heat", 240, "input"),
    ResonantTowerItem("iceandfire:ghost_ingot", 4, "input"),
    ResonantTowerFluid("kubejs:electro_hydro", 2000, "output"),
  ], "electro_hydro_ghost", 60)
  ResonantTowerRecipe([
    ResonantTowerEnergyInput(4320),
    ResonantTowerItem("createloveandwar:tungsten_sheet", 16, "input"),
    ResonantTowerItem("kubejs:brass_parts_box", 4, "input"),
    ResonantTowerItem("kubejs:light_composite_plate", 4, "input"),
    ResonantTowerFluid("kubejs:electro_hydro", 2000, "input"),
    ResonantTowerFluid("kubejs:slime_colloid", 1000, "input"),
    ResonantTowerItem("kubejs:electro_hydro_capacitor", 4, "output"),
  ], "electro_hydro_capacitor", 60)
  ResonantTowerRecipeLightning([
    ResonantTowerEnergyInput(2160),
    ResonantTowerItem("createloveandwar:tungsten_sheet", 16, "input"),
    ResonantTowerItem("kubejs:brass_parts_box", 4, "input"),
    ResonantTowerItem("kubejs:light_composite_plate", 4, "input"),
    ResonantTowerFluid("kubejs:electro_hydro", 2000, "input"),
    ResonantTowerFluid("kubejs:slime_colloid", 1000, "input"),
    ResonantTowerItem("kubejs:electro_hydro_capacitor", 4, "output"),
  ], "electro_hydro_capacitor", 60)
  ResonantTowerRecipe([
    ResonantTowerEnergyInput(4320),
    ResonantTowerItem("kubejs:crushed_coal", 32, "input"),
    ResonantTowerItem("kubejs:graphite", 24, "output"),
  ], "graphite", 30)
  ResonantTowerRecipeLightning([
    ResonantTowerEnergyInput(2160),
    ResonantTowerItem("kubejs:crushed_coal", 32, "input"),
    ResonantTowerItem("kubejs:graphite", 24, "output"),
  ], "graphite", 30)
  ResonantTowerRecipe([
    ResonantTowerEnergyInput(4320),
    ResonantTowerItem("kubejs:carbon_electrode", 4, "input"),
    ResonantTowerFluid("kubejs:electro_hydro", 250, "input"),
    ResonantTowerItem("kubejs:silicon_plate", 32, "input"),
    ResonantTowerItem("kubejs:graphite", 32, "input"),
    ResonantTowerItem("kubejs:graphene_coil", 32, "output"),
  ], "graphene_coil", 60)
  ResonantTowerRecipeLightning([
    ResonantTowerEnergyInput(2160),
    ResonantTowerItem("kubejs:carbon_electrode", 4, "input"),
    ResonantTowerFluid("kubejs:electro_hydro", 250, "input"),
    ResonantTowerItem("kubejs:silicon_plate", 32, "input"),
    ResonantTowerItem("kubejs:graphite", 32, "input"),
    ResonantTowerItem("kubejs:graphene_coil", 32, "output"),
  ], "graphene_coil", 60)

  ResonantTowerRecipe([
    ResonantTowerEnergyInput(720),
    ResonantTowerDimension('ad_astra:moon'),
    ResonantTowerFluid("kubejs:carbon_dioxide", 4000, "input"),
    ResonantTowerFluid("#forge:hydrogen", 8000, "input"),
    ResonantTowerItem("minecraft:sugar", 36, "output"),
  ], "sugar", 30)
  ResonantTowerRecipeLightning([
    ResonantTowerDimension('ad_astra:moon'),
    ResonantTowerFluid("kubejs:carbon_dioxide", 4000, "input"),
    ResonantTowerFluid("#forge:hydrogen", 8000, "input"),
    ResonantTowerItem("minecraft:sugar", 36, "output"),
  ], "sugar", 30)

  ResonantTowerRecipe([
    ResonantTowerEnergyInput(72000),
    ResonantTowerDimension(["minecraft:overworld", 'ad_astra:earth_orbit']),
    ResonantTowerItem("kubejs:creative_motor_blueprint", 1, "input"),
    ResonantTowerItem("kubejs:productivity_module_2", 64, "input"),
    ResonantTowerItem("kubejs:electro_hydro_capacitor", 32, "input"),
    ResonantTowerItem("createdieselgenerators:huge_diesel_engine", 128, "input"),
    ResonantTowerFluid("kubejs:slime_colloid", 16000, "input"),
    ResonantTowerFluid("kubejs:cola_puree", 16000, "input"),
    ResonantTowerItem("create:creative_motor", 1, "output"),
  ], "creative_motor", 1200)
})