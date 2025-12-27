//Love&War
//event.custom({}).id("dut_create:loveandwar/")
ServerEvents.recipes(event => {
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": 'createloveandwar:tar_clump' },
      { "fluid": "minecraft:water", "amount": 250 }
    ],
    "results": [
      { "fluid": "createdieselgenerators:crude_oil", "amount": 250 }
    ]
  }).id("dut_create:loveandwar/oil")
  event.remove({ id: "createloveandwar:mixing/duraplas" })
  event.remove({ id: "createloveandwar:crafting/ammopouch_rifle" })
  event.remove({ id: "createloveandwar:crafting/ammopouch_pistol" })
  event.remove({ id: "createloveandwar:mixing/crude_oil" })
  event.remove({ id: "createloveandwar:crafting/catalyst" })
  event.remove({ id: "createloveandwar:blasting/brass_blasting" })
  event.remove({ id: "createloveandwar:crafting/brass_mix" })
  event.remove({ id: "createloveandwar:sequenced_assembly/filled_heavy_rifle_casing" })
  event.remove({ id: "createloveandwar:compressing/bitumen" })
  event.remove({ id: "createloveandwar:crafting/smooth_asphalt"})
  event.remove({ id: "createloveandwar:crafting/smooth_asphalt_slab"})
  event.remove({ id: "createloveandwar:fractional_distillation/crude_oil" })
  event.remove({ id: "createloveandwar:compressing/fuel_pellet" })
  event.remove({ id: "createloveandwar:compressing/fuel_pellet" })
  event.custom({
    "type": "create:compacting",
    "ingredients": [{ "amount": 250, "fluidTag": "forge:diesel" }],
    "results": [{ "item": "createloveandwar:fuel_pellet" }],
  }).id("dut_create:loveandwar/fuel_pellet")
  event.remove({ id: "createloveandwar:mixing/propellant_from_chemicals" })
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": "createloveandwar:fuel_pellet" },
      { "item": "minecraft:sugar" },
      { "fluid": "kubejs:ethylene", "amount": 25 }
    ],
    "results": [
      { "item": "createloveandwar:propellant", "count": 8 }
    ]
  }).id("dut_create:loveandwar/propellant")
  //冲压机
  event.replaceInput({ id: 'createloveandwar:crafting/drawing_press' }, 'createloveandwar:tungsten', 'kubejs:industrial_iron_sheet')
  event.replaceInput({ id: 'createloveandwar:crafting/stamping_press' }, 'createloveandwar:tungsten', 'kubejs:industrial_iron_ingot')
  event.replaceInput({ id: 'createloveandwar:crafting/stamping_press' }, 'createloveandwar:tungsten_nugget', 'kubejs:industrial_iron_nugget')
  
  //弹壳
    event.remove({ id: "createloveandwar:deploying/filled_heavy_rifle_casing" })
    event.remove({ id: "createloveandwar:deploying/filled_pistol_casing" })
    event.remove({ id: "createloveandwar:deploying/filled_rifle_casing" })
    event.remove({ id: "createloveandwar:drawing/pistol_casing" })
    event.remove({ id: "createloveandwar:drawing/rifle_casing" })
    event.remove({ id: "createloveandwar:drawing/heavy_rifle_casing" })
    event.remove({ id: "createloveandwar:drawing/steel_cup" })
    event.remove({ id: "createloveandwar:deploying/rifle_bullet" })
    event.remove({ id: "createloveandwar:deploying/rifle_bullet_ap" })
    event.remove({ id: "createloveandwar:deploying/rifle_bullet_soft" })
    event.remove({ id: "createloveandwar:deploying/pistol_bullet" })
    event.remove({ id: "createloveandwar:deploying/pistol_bullet_ap" })
    event.remove({ id: "createloveandwar:deploying/pistol_bullet_soft" })
    event.remove({ id: "createloveandwar:deploying/heavy_rifle_bullet" })
    event.remove({ id: "createloveandwar:pressing/propellant_sheet" })
    event.remove({ id: "createloveandwar:stamping/propellant_moulded" })
  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "createloveandwar:propellant" },
    "template": { "item": "createloveandwar:template_grip" },
    "result": { "item": "createloveandwar:propellant_moulded","count":4 }
  }).id("dut_create:stamping/propellant_moulded")
  
  
  //专家级枪械工作台
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "D": { "item": "createloveandwar:steel_sheet" },
      "A": { "item": "create:precision_mechanism" },
      "E": { "item": "kubejs:differential" },
      "F": { "item": "kubejs:mechanical_core" }
    },
    "pattern": [
      "DDD",
      "EAE",
      "F F"
    ],
    "result": { "item": "createloveandwar:expert_workbench" },
    "show_notification": true
  }).id("dut_create:loveandwar/expert_workbench")
  //发射筒
  event.custom({
    "type": "vintageimprovements:curving",
    "mode": 3,
    "ingredients": [
      { "tag": "forge:plates/steel" }
    ],
    "results": [
      { "item": "createloveandwar:launcher_barrel" }
    ]
  }).id("dut_create:loveandwar/launcher_barrel")
  //电路板
  event.remove({ output: 'createloveandwar:redstone_circuit', not: { mod: 'kubejs' } })
  event.remove({ output: 'createloveandwar:percision_circuit', not: { mod: 'kubejs' } })
  event.remove({ output: 'createloveandwar:quantum_circuit', not: { mod: 'kubejs' } })
  //分馏塔控制器
  event.remove({ output: 'createloveandwar:thermostat', not: { mod: 'kubejs' } })
  //钨
  event.remove({ id: 'createloveandwar:crushing/crushed_tungsten'})
  event.remove({ id: 'createloveandwar:crushing/tungsten_ore'})
  event.remove({ id: 'createloveandwar:tungsten_from_blasting_crushed_tungsten'})
  event.remove({ id: 'createloveandwar:tungsten_from_blasting_raw_tungsten'})
  event.remove({ id: 'createloveandwar:tungsten_from_blasting_deepslate_tungsten_ore' })
  event.remove({ id: 'createloveandwar:tungsten_from_smelting_crushed_tungsten' })
  event.remove({ id: 'createloveandwar:tungsten_from_smelting_raw_tungsten' })
  event.remove({ id: 'createloveandwar:tungsten_from_smelting_deepslate_tungsten_ore'})
  //火药
  event.remove({ output: 'minecraft:gunpowder', input: "createloveandwar:sulphur" })
  //下界合金
  event.remove({ output: 'createloveandwar:netherite_sheet', not: { mod: 'kubejs' } })
  //钢
  event.remove({ output: 'createloveandwar:steel_ingot', not: { mod: 'kubejs' } })
  //硫粉
  event.custom({
    "type": "create:milling",
    "ingredients": [
      { "item": "createloveandwar:sulphur" }
    ],
    "results": [
      { "item": "kubejs:sulphur" }
    ],
    "processingTime": 300
  }).id("dut_create:milling/sulphur")
  //油石
  event.remove({ output: 'createloveandwar:tar_clump', not: { mod: 'kubejs' } })
  //两种塑料
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "S": { "item": "kubejs:polymer_ingot" }
    },
    "pattern": [
      "SS"
    ],
    "result": { "item": "createloveandwar:white_plastic", "count": 32 },
    "show_notification": true
  }).id("dut_create:loveandwar/white_plastic")
  event.remove({ output: 'createloveandwar:polymer_ingot', not: { mod: 'kubejs' } })
  event.remove({ input: 'createloveandwar:polymer_ingot', not: { mod: 'kubejs' } })
  event.remove({ output: 'kubejs:polymer_sheet', not: { mod: 'kubejs' } })
  //event.remove({ input: 'kubejs:polymer_sheet', not: { mod: 'kubejs' } })
  event.remove({ id: 'createloveandwar:stamping/upper_receiver_polymer' })
  event.remove({ id: 'createloveandwar:stamping/lower_receiver_polymer' })
  event.remove({ id: 'createloveandwar:stamping/stock_polymer' })
  event.remove({ id: 'createloveandwar:stamping/barrel_polymer' })
  event.remove({ id: 'createloveandwar:stamping/grip_polymer' })
  event.remove({ id: 'createloveandwar:stamping/handguard_polymer' })
  event.remove({ id: 'createloveandwar:stamping/bolt_action_polymer' })
  event.remove({ id: 'createloveandwar:stamping/revolver_action_polymer' })

  event.remove({ output: 'createloveandwar:duraplas_ingot', not: { mod: 'kubejs' } })
  event.remove({ input: 'createloveandwar:duraplas_ingot', not: { mod: 'kubejs' } })
  event.remove({ output: 'kubejs:duraplas_sheet', not: { mod: 'kubejs' } })
  //event.remove({ input: 'kubejs:duraplas_sheet', not: { mod: 'kubejs' } })
  event.remove({ id: 'createloveandwar:stamping/upper_receiver_duraplas' })
  event.remove({ id: 'createloveandwar:stamping/lower_receiver_duraplas' })
  event.remove({ id: 'createloveandwar:stamping/stock_duraplas' })
  event.remove({ id: 'createloveandwar:stamping/barrel_duraplas' })
  event.remove({ id: 'createloveandwar:stamping/grip_duraplas' })
  event.remove({ id: 'createloveandwar:stamping/handguard_duraplas' })
  event.remove({ id: 'createloveandwar:stamping/bolt_action_duraplas' })
  event.remove({ id: 'createloveandwar:stamping/revolver_action_duraplas' })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "S": { "item": "kubejs:duraplas_ingot" }
    },
    "pattern": [
      "SSS",
      "SSS",
      "SSS"
    ],
    "result": { "item": "createloveandwar:block_of_duraplas" },
    "show_notification": true
  }).id("dut_create:loveandwar/block_of_duraplas")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      { "item": "createloveandwar:block_of_duraplas" }
    ],
    "result": { "count": 9, "item": "kubejs:duraplas_ingot" }
  }).id("dut_create:loveandwar/duraplas_ingot")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "S": { "item": "kubejs:polymer_ingot" }
    },
    "pattern": [
      "SSS",
      "SSS",
      "SSS"
    ],
    "result": { "item": "createloveandwar:block_of_polymer" },
    "show_notification": true
  }).id("dut_create:loveandwar/block_of_polymer")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      { "item": "createloveandwar:block_of_polymer" }
    ],
    "result": { "count": 9, "item": "kubejs:polymer_ingot" }
  }).id("dut_create:loveandwar/polymer_ingot")

  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:polymer_sheet" },
    "template": { "item": "createloveandwar:template_upper_receiver" },
    "result": { "item": "createloveandwar:incomplete_polymer_receiver" }
  }).id("dut_create:stamping/incomplete_polymer_receiver")
  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:polymer_sheet" },
    "template": { "item": "createloveandwar:template_lower_receiver" },
    "result": { "item": "createloveandwar:lower_receiver_polymer" }
  }).id("dut_create:stamping/lower_receiver_polymer")
  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:polymer_sheet" },
    "template": { "item": "createloveandwar:template_stock" },
    "result": { "item": "createloveandwar:stock_polymer" }
  }).id("dut_create:stamping/stock_polymer")
  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:polymer_sheet" },
    "template": { "item": "createloveandwar:template_barrel" },
    "result": { "item": "createloveandwar:barrel_polymer" }
  }).id("dut_create:stamping/barrel_polymer")
  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:polymer_sheet" },
    "template": { "item": "createloveandwar:template_grip" },
    "result": { "item": "createloveandwar:grip_polymer" }
  }).id("dut_create:stamping/grip_polymer")
  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:polymer_sheet" },
    "template": { "item": "createloveandwar:template_handguard" },
    "result": { "item": "createloveandwar:handguard_polymer" }
  }).id("dut_create:stamping/handguard_polymer")
  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:polymer_sheet" },
    "template": { "item": "createloveandwar:template_bolt_action" },
    "result": { "item": "createloveandwar:bolt_action_polymer" }
  }).id("dut_create:stamping/bolt_action_polymer")
  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:polymer_sheet" },
    "template": { "item": "createloveandwar:template_revolver_action" },
    "result": { "item": "createloveandwar:revolver_action_polymer" }
  }).id("dut_create:stamping/revolver_action_polymer")


  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:duraplas_sheet" },
    "template": { "item": "createloveandwar:template_upper_receiver" },
    "result": { "item": "createloveandwar:incomplete_duraplas_receiver" }
  }).id("dut_create:stamping/incomplete_duraplas_receiver")
  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:duraplas_sheet" },
    "template": { "item": "createloveandwar:template_lower_receiver" },
    "result": { "item": "createloveandwar:lower_receiver_duraplas" }
  }).id("dut_create:stamping/lower_receiver_duraplas")
  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:duraplas_sheet" },
    "template": { "item": "createloveandwar:template_stock" },
    "result": { "item": "createloveandwar:stock_duraplas" }
  }).id("dut_create:stamping/stock_duraplas")
  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:duraplas_sheet" },
    "template": { "item": "createloveandwar:template_barrel" },
    "result": { "item": "createloveandwar:barrel_duraplas" }
  }).id("dut_create:stamping/barrel_duraplas")
  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:duraplas_sheet" },
    "template": { "item": "createloveandwar:template_grip" },
    "result": { "item": "createloveandwar:grip_duraplas" }
  }).id("dut_create:stamping/grip_duraplas")
  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:duraplas_sheet" },
    "template": { "item": "createloveandwar:template_handguard" },
    "result": { "item": "createloveandwar:handguard_duraplas" }
  }).id("dut_create:stamping/handguard_duraplas")
  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:duraplas_sheet" },
    "template": { "item": "createloveandwar:template_bolt_action" },
    "result": { "item": "createloveandwar:bolt_action_duraplas" }
  }).id("dut_create:stamping/bolt_action_duraplas")
  event.custom({
    "type": "createloveandwar:stamping",
    "input": { "item": "kubejs:duraplas_sheet" },
    "template": { "item": "createloveandwar:template_revolver_action" },
    "result": { "item": "createloveandwar:revolver_action_duraplas" }
  }).id("dut_create:stamping/revolver_action_duraplas")
  //史莱姆凝胶
  event.remove({ output: 'createloveandwar:slime_resin', not: { mod: 'kubejs' } })
  event.custom({
    "type": "create:compacting",
    "ingredients": [{ "amount": 100, "fluid": "kubejs:slime_colloid" }],
    "results": [{ "item": "createloveandwar:slime_resin" }],
  }).id("dut_create:loveandwar/slime_resin")
})