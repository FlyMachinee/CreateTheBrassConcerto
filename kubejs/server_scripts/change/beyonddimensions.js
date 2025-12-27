ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({"item": ''})
  //event.remove({input: ''})
  //event.custom().id("dut_create:")
  //event.remove({ mod: '' })
  event.remove({ id: "beyonddimensions:schematicannon_pathway" })
  event.remove({ id: "beyonddimensions:ars_source_pathway" })
  event.remove({ id: "beyonddimensions:dimensional_connect_block" })
  event.remove({ id: "beyonddimensions:mana_pool_pathway" })
  event.remove({ id: "beyonddimensions:net_ae_storage_cell" })
  event.remove({ id: "beyonddimensions:net_control" })
  event.remove({ id: "beyonddimensions:net_creater" })
  event.remove({ id: "beyonddimensions:net_energy_pathway" })
  event.remove({ id: "beyonddimensions:net_feeder_item" })
  event.remove({ id: "beyonddimensions:net_furnace_block" })
  event.remove({ id: "beyonddimensions:net_hopper_block" })
  event.remove({ id: "beyonddimensions:net_interface" })
  event.remove({ id: "beyonddimensions:net_magnet_item" })
  event.remove({ id: "beyonddimensions:net_pathway" })
  event.remove({ id: "beyonddimensions:net_pump_block" })
  event.remove({ id: "beyonddimensions:net_terminal_block" })
  event.remove({ id: "beyonddimensions:net_terminal_item" })
  event.remove({ id: "beyonddimensions:rs_net_pathway" })
  event.remove({ id: "beyonddimensions:space_time_bar" })
  event.remove({ id: "beyonddimensions:space_time_stable_frame" })
  event.remove({ id: "beyonddimensions:unstable_space_time_fragment" })
  event.remove({ id: "beyonddimensions:xp_exchange_item" })
  event.remove({ id: "beyonddimensions:net_manager_inviter" })
  event.remove({ id: "beyonddimensions:net_member_inviter" })
  event.remove({ id: "beyonddimensions:net_destroyer" })
  event.remove({ id: "beyonddimensions:net_gifter" })
  //转化操作符
  Ingredient.of('#dut_create:net_operator').itemIds.forEach(i => {
    event.custom({
      "type": "minecraft:stonecutting",
      "ingredient": { "tag": 'dut_create:net_operator' },
      "result": i,
      "count": 1
    }).id("dut_create:transform/net_operator/" + i.split(':')[1])
  })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": { "item": 'kubejs:large_fries' },
      "B": { "item": "beyonddimensions:net_interface" }
    },
    "pattern": [
      "A",
      "B"
    ],
    "result": { "item": "beyonddimensions:net_feeder_item" },
    "show_notification": true
  }).id("dut_create:beyonddimensions/net_feeder_item")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": { "item": 'create:schematic_table' },
      "B": { "item": "beyonddimensions:net_interface" }
    },
    "pattern": [
      "A",
      "B"
    ],
    "result": { "item": "beyonddimensions:schematicannon_pathway" },
    "show_notification": true
  }).id("dut_create:beyonddimensions/schematicannon_pathway")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": { "item": 'create:redstone_link' },
      "B": { "item": "create:display_link" },
      "C": { "item": "create:precision_mechanism" }
    },
    "pattern": [
      "A",
      "B",
      "C"
    ],
    "result": { "item": "beyonddimensions:net_interface" },
    "show_notification": true
  }).id("dut_create:beyonddimensions/net_interface")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": { "item": 'create:redstone_link' },
      "C": { "item": "create:precision_mechanism" }
    },
    "pattern": [
      "A",
      "C"
    ],
    "result": { "item": "beyonddimensions:net_terminal_item" },
    "show_notification": true
  }).id("dut_create:beyonddimensions/net_terminal_item")
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "kubejs:tin_hard_disk", "nbt": { Damage: 0 } },
      { "item": "create:redstone_link" }
    ],
    "results": [{ "item": "beyonddimensions:net_member_inviter" }]
  }).id("dut_create:beyonddimensions/net_member_inviter")
  //网络扩展信息素
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:brass_hard_disk", "nbt": { Damage: 0 } },
    "loops": 1,
    "results": [
      { "item": "kubejs:matrix_2", "nbt": "{ascii:1,display:{Name:'{\"translate\":\"kubejs.matrix.netexpand\",\"italic\":false}'},matrix:[[[1,3],[-2,95]],[[-1,4],[1,-124]],[[1,-3],[3,103]],[[-1,2],[-2,-93]],[[1,4],[-1,106]],[[-1,-2],[3,-94]],[[-5,2],[1,-16]],[[10,-3],[7,8]],[[-4,5],[4,-34]],[[3,-7],[4,4]],[[2,13],[5,83]],[[-6,4],[5,-23]],[[11,3],[3,10]],[[8,-5],[6,10]],[[9,2],[5,14]],[[10,7],[2,6]],[[11,4],[5,12]],[[12,5],[12,14]],[[13,6],[-1,7]],[[5,3],[3,26]],[[6,5],[5,21]],[[7,8],[5,22]],[[8,9],[7,13]]],no_copy:1}","count":18 }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:brass_hard_disk" },
          { "item": "kubejs:productivity_module_2" }
        ],
        "results": [{ "item": "kubejs:brass_hard_disk" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:brass_hard_disk" },
          { "item": 'kubejs:electro_hydro_capacitor' }
        ],
        "results": [{ "item": "kubejs:brass_hard_disk" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:brass_hard_disk" },
          { "item": 'kubejs:phantom_fungus' }
        ],
        "results": [{ "item": "kubejs:brass_hard_disk" }]
      }
    ],
    "transitionalItem": {
      "item": "kubejs:brass_hard_disk"
    }
  }).id("dut_create:beyonddimensions/net_expander1")
})