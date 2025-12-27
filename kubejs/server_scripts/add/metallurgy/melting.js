ServerEvents.recipes(event => {
  //event.custom().id("dut_create:")
  //删除
  event.remove({ type: "createbigcannons:melting", not: { mod: 'kubejs' } })
  event.remove({ id: 'createbigcannons:compacting/forge_steel_ingot' })
  function melting(item, fluid, nugget_time, heatlevel) {
    event.custom({
      "type": "createbigcannons:melting",
      "heatRequirement": heatlevel,
      "ingredients": [{ "tag": "forge:storage_blocks/" + item }],
      "processingTime": nugget_time * 12,
      "results": [{ "amount": 810, "fluid": fluid }]
    }).id("dut_create:melting/" + item + '_block');
    event.custom({
      "type": "createbigcannons:melting",
      "heatRequirement": heatlevel,
      "ingredients": [{ "tag": "forge:plates/" + item }],
      "processingTime": nugget_time * 3,
      "results": [{ "amount": 90, "fluid": fluid }]
    }).id("dut_create:melting/" + item + '_sheet');
    event.custom({
      "type": "createbigcannons:melting",
      "heatRequirement": heatlevel,
      "ingredients": [{ "tag": "forge:ingots/" + item }],
      "processingTime": nugget_time * 4,
      "results": [{ "amount": 90, "fluid": fluid }]
    }).id("dut_create:melting/" + item + '_ingot');
    event.custom({
      "type": "createbigcannons:melting",
      "heatRequirement": heatlevel,
      "ingredients": [{ "tag": "forge:nuggets/" + item }],
      "processingTime": nugget_time,
      "results": [{ "amount": 10, "fluid": fluid }]
    }).id("dut_create:melting/" + item + '_nugget');
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
  melting('zinc', 'kubejs:zinc', 20, "heated")
  melting('gold', 'kubejs:gold', 40, "heated")
  melting('silver', 'kubejs:silver', 30, "heated")
  melting('tin', 'kubejs:tin', 20, "heated")
  melting('cast_iron', 'createbigcannons:molten_cast_iron', 20, "heated")
  
  event.custom({
    "type": "createbigcannons:melting",
    "heatRequirement": "superheated",
    "ingredients": [{ "tag": "forge:plates/aluminum" }],
    "processingTime": 90,
    "results": [{ "amount": 90, "fluid": "kubejs:aluminum" }]
  }).id("dut_create:melting/aluminum_sheet");
  event.custom({
    "type": "createbigcannons:melting",
    "heatRequirement": "superheated",
    "ingredients": [{ "tag": "forge:ingots/aluminum" }],
    "processingTime": 120,
    "results": [{ "amount": 90, "fluid": "kubejs:aluminum" }]
  }).id("dut_create:melting/aluminum_ingot");
  //compacting
  compacting("brass","kubejs:brass","create:brass_ingot")
  compacting("desh","kubejs:desh","ad_astra:desh_ingot")
  compacting("iron","kubejs:iron","minecraft:iron_ingot")
  compacting("copper","kubejs:copper","minecraft:copper_ingot")
  compacting("zinc","kubejs:zinc","create:zinc_ingot")
  compacting("gold","kubejs:gold","minecraft:gold_ingot")
  compacting("silver","kubejs:silver","iceandfire:silver_ingot")
  compacting("tin","kubejs:tin","kubejs:tin_ingot")
  compacting("industrial_iron","kubejs:industrial_iron","kubejs:industrial_iron_ingot")
  compacting("aluminum","kubejs:aluminum","kubejs:aluminum_ingot")
})