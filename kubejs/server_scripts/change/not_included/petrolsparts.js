// requires:petrolsparts
ServerEvents.recipes(event => {
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom()
  //
  event.remove({ output: "petrolsparts:double_cardan_shaft" })
  event.remove({ output: "petrolsparts:differential" })
  event.remove({ output: "petrolsparts:planetary_gearset" })
  event.remove({ output: "petrolsparts:hydraulic_transmission" })

  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [{ "item": "kubejs:cardan_joint" }],
    "result": { "item": "petrolsparts:double_cardan_shaft"}
  }).id("dut_create:double_cardan_shaft")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [{ "item": "petrolsparts:double_cardan_shaft" }],
    "result": { "item": "kubejs:cardan_joint"}
  }).id("dut_create:double_cardan_shaft1")

  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [{ "item": "kubejs:planetary_gear" }],
    "result": { "item": "petrolsparts:planetary_gearset"}
  }).id("dut_create:planetary_gearset")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [{ "item": "petrolsparts:planetary_gearset" }],
    "result": { "item": "kubejs:planetary_gear"}
  }).id("dut_create:planetary_gearset1")

  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [{ "item": "kubejs:differential" }],
    "result": { "item": "petrolsparts:differential"}
  }).id("dut_create:differential")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [{ "item": "petrolsparts:differential" }],
    "result": { "item": "kubejs:differential"}
  }).id("dut_create:differential1")

})