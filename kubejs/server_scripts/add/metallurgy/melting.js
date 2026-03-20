ServerEvents.recipes(event => {
  //event.custom().id("dut_create:")
  //删除
  event.remove({ type: "createbigcannons:melting", not: { mod: 'kubejs' } })
  event.remove({ id: 'createbigcannons:compacting/forge_steel_ingot' })
  function melting(item, fluid, ingot_time, heatlevel) {
    event.custom({
      "type": "createbigcannons:melting",
      "heatRequirement": heatlevel,
      "ingredients": [{ "tag": "forge:storage_blocks/" + item }],
      "processingTime": ingot_time * 3,
      "results": [{ "amount": 810, "fluid": fluid }]
    }).id("dut_create:melting/" + item + '_block')
    event.custom({
      "type": "createbigcannons:melting",
      "heatRequirement": heatlevel,
      "ingredients": [{ "tag": "forge:ingots/" + item }],
      "processingTime": ingot_time ,
      "results": [{ "amount": 90, "fluid": fluid }]
    }).id("dut_create:melting/" + item + '_ingot')
    return 0
  }
  function compacting(item, fluid,item1) {
    event.custom({
      "type": "create:compacting",
      "ingredients": [{ "amount": 90, "fluid": fluid }],
      "results": [{ "item": item1 }],
    }).id("dut_create:fluid_compacting/" + item)
    return 0
  }
  melting('steel', 'createbigcannons:molten_steel', 60, "superheated")
  melting('nethersteel', 'createbigcannons:molten_nethersteel', 80, "superheated")
  melting('desh', 'kubejs:desh', 60, "superheated")
  melting('industrial_iron', 'kubejs:industrial_iron', 30, "heated")
  melting('brass', 'kubejs:brass', 30, "heated")
  melting('iron', 'kubejs:iron', 20, "heated")
  melting('copper', 'kubejs:copper', 20, "heated")
  melting('gold', 'kubejs:gold', 40, "heated")
  melting('tin', 'kubejs:tin', 20, "heated")
  melting('new_zinc', 'kubejs:new_zinc', 20, "heated")
  melting('cast_iron', 'createbigcannons:molten_cast_iron', 20, "heated")
  melting('aluminum', 'kubejs:aluminum', 30, "heated")
  
  //compacting
  compacting("brass","kubejs:brass","create:brass_ingot")
  compacting("desh","kubejs:desh","ad_astra:desh_ingot")
  compacting("iron","kubejs:iron","minecraft:iron_ingot")
  compacting("copper","kubejs:copper","minecraft:copper_ingot")
  compacting("new_zinc","kubejs:new_zinc","kubejs:new_zinc_ingot")
  compacting("gold","kubejs:gold","minecraft:gold_ingot")
  compacting("tin","kubejs:tin","kubejs:tin_ingot")
  compacting("industrial_iron","kubejs:industrial_iron","kubejs:industrial_iron_ingot")
  compacting("aluminum","kubejs:aluminum","kubejs:aluminum_ingot")
  
  function cryogenCooldownMetal(input, output) {
    event.custom({
      "type": "vintageimprovements:pressurizing",
      "secondaryFluidInput": 0,
      "ingredients": [
        { "fluid": "kubejs:cryogen", "amount": 100 },
        { "fluid": input, "amount": 450 }
      ],
      "results": [
        { "item": output, "count": 5 },
      ],
      "processingTime": 10
    }).id("dut_create:fluid_cooldown/" + input.split(':')[1])
  }
  cryogenCooldownMetal("kubejs:aluminum", "kubejs:aluminum_ingot")
  cryogenCooldownMetal("kubejs:industrial_iron", "kubejs:industrial_iron_ingot")
  cryogenCooldownMetal("kubejs:brass", "create:brass_ingot")
  cryogenCooldownMetal("kubejs:new_zinc", "kubejs:new_zinc_ingot")
  cryogenCooldownMetal("kubejs:iron", "minecraft:iron_ingot")
  cryogenCooldownMetal("kubejs:gold", "minecraft:gold_ingot")
  cryogenCooldownMetal("kubejs:copper", "minecraft:copper_ingot")
  cryogenCooldownMetal("createbigcannons:molten_steel", "ad_astra:steel_ingot")
  cryogenCooldownMetal("createbigcannons:molten_cast_iron", "createbigcannons:cast_iron_ingot")
  cryogenCooldownMetal("createbigcannons:molten_nethersteel", "createbigcannons:nethersteel_ingot")
  cryogenCooldownMetal("kubejs:desh", "ad_astra:desh_ingot")
  cryogenCooldownMetal("kubejs:tin", "kubejs:tin_ingot")
})