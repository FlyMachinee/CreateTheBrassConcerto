
//火炮
ServerEvents.recipes(event => {
  event.remove({id:"createbigcannons:compacting/forge_bronze_ingot"})
  event.remove({id:"createbigcannons:melting/melt_bronze_nugget"})
  event.remove({id:"createbigcannons:melting/melt_bronze_ingot"})
  event.remove({id:"createbigcannons:melting/melt_bronze_block"})
  event.replaceInput({ output: 'createbigcannons:cannon_loader' }, '#forge:gunpowder', 'kubejs:differential')
  event.replaceInput({ output: 'createbigcannons:yaw_controller' }, '#forge:gunpowder', 'kubejs:differential')
  event.replaceInput({ output: 'createbigcannons:cannon_mount' }, '#forge:gunpowder', 'kubejs:differential')
  //大型弹药壳
  event.remove({ output: 'createbigcannons:big_cartridge', mod: 'createbigcannons' })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "createbigcannons:big_cartridge_sheet" },
    "loops": 5,
    "results": [
      { "item": "createbigcannons:big_cartridge" },
    ],
    "sequence": [
      {
        "type": "vintageimprovements:curving",
        "mode": 1,
        "ingredients": [{ "item": "createbigcannons:partially_formed_big_cartridge" }],
        "results": [{ "item": "createbigcannons:partially_formed_big_cartridge" }]
      }
    ],
    "transitionalItem": { "item": "createbigcannons:partially_formed_big_cartridge" }
  }).id("dut_create:createbigcannons/big_cartridge")
  //机炮弹药弹壳
  event.remove({ output: 'createbigcannons:empty_autocannon_cartridge', mod: 'createbigcannons' })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "createbigcannons:autocannon_cartridge_sheet" },
    "loops": 6,
    "results": [{ "item": "createbigcannons:empty_autocannon_cartridge" }],
    "sequence": [
      {
        "type": "vintageimprovements:curving",
        "mode": 1,
        "ingredients": [{ "item": "createbigcannons:partially_formed_autocannon_cartridge" }],
        "results": [{ "item": "createbigcannons:partially_formed_autocannon_cartridge" }]
      }
    ],
    "transitionalItem": { "item": "createbigcannons:partially_formed_autocannon_cartridge" }
  }).id("dut_create:createbigcannons/autocannon_cartridge")
  //铸造砂
  event.remove({id:"createbigcannons:casting_sand"})
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": "minecraft:sand" },
      { "item": "minecraft:sand" },
      { "item": "minecraft:dirt" },
      { "item": "minecraft:clay_ball" }
    ],
    "results": [
      { "item": "createbigcannons:casting_sand" ,"count":4}
    ]
  }).id("dut_create:mixing/casting_sand")
})
