ItemEvents.tooltip(event => {
  event.add(['minecraft:wooden_pickaxe'], Text.translate("kubejs.tooltip.wooden_pickaxe"))
  event.add(['create:blaze_burner'], Text.translate("kubejs.tooltip.blaze_burner"))
  event.add(['create:andesite_alloy'], Text.translate("kubejs.tooltip.andesite_alloy"))
  event.add(['kubejs:unknown_prototype'], Text.translate("kubejs.tooltip.unknown_prototype"))
  event.add(['create:crushing_wheel', "create_sa:brass_drone_item", "create:deployer", "createoreexcavation:drilling_machine", "createoreexcavation:extractor", "ad_astra:tier_1_rocket", "design_decor:industrial_iron_boiler_large", "design_decor:zinc_boiler_large", "design_decor:brass_boiler_large", "design_decor:gold_boiler_large", "design_decor:copper_boiler_large", "design_decor:cast_iron_boiler_large", "design_decor:andesite_boiler_large"], Text.translate("kubejs.tooltip.worldcraft"))
  event.add(['geckojs:stepping_caculator'], Text.translate("kubejs.tooltip.stepping_caculator"))
  event.add(['#minecraft:saplings'], Text.translate("kubejs.tooltip.sappling"))
  event.add(['minecraft:stone','minecraft:cobblestone'], Text.translate("kubejs.tooltip.stone"))
  event.add(["waystones:waystone",
    "waystones:sandy_waystone",
    "waystones:mossy_waystone",
    "waystones:portstone",
    "waystones:sharestone",
    "waystones:white_sharestone",
    "waystones:orange_sharestone",
    "waystones:magenta_sharestone",
    "waystones:light_blue_sharestone",
    "waystones:yellow_sharestone",
    "waystones:lime_sharestone",
    "waystones:pink_sharestone",
    "waystones:gray_sharestone",
    "waystones:light_gray_sharestone",
    "waystones:cyan_sharestone",
    "waystones:purple_sharestone",
    "waystones:blue_sharestone",
    "waystones:brown_sharestone",
    "waystones:green_sharestone",
    "waystones:red_sharestone",
    "waystones:black_sharestone"], Text.translate("kubejs.tooltip.waystone"))
  event.addAdvanced('kubejs:position_data', (item, advanced, text) => {
    if (item.nbt == null) { return }
    //数字代表第n行，0是物品名，1往后是Lore的位置
    text.remove(1)
    text.remove(2)
    text.add(1, Text.translate("kubejs.tooltip.position").color(Color.GOLD))
    text.add(2, "§e" + item.nbt.position[0] + ' ' + item.nbt.position[1] + ' ' + item.nbt.position[2])
    text.add(3, "§e" + item.nbt.dimension)
  })
  function checkMatrix(matrix, a, b, c) {
    if (matrix[a] == null) return 0
    if (matrix[a][b] == null) return 0
    if (matrix[a][b][c] == null) return 0
    return matrix[a][b][c]
  }
  event.addAdvanced('kubejs:matrix_2', (item, advanced, text) => {
    if (item.nbt?.matrix == null) {
      text.remove(1)
      text.add(1, Text.translate("kubejs.tooltip.matrix_warning").color(Color.RED))
      return
    }
    if (item.nbt?.no_copy == 1) {
      text.add(1, Text.translate("kubejs.tooltip.no_copy").color(Color.LIGHT_PURPLE))
    }
    if (item.nbt?.ascii == 1) {
      text.add(1, Text.translate("kubejs.tooltip.right_to_use").color(Color.LIGHT_PURPLE))
    }
    if (!event.isAlt()) { return }
    if (item.nbt?.RGB == "random") {
      text.remove(1)
      text.add(1, Text.translate("kubejs.tooltip.random_matrix").color(Color.YELLOW))
      return
    }
    text.remove(1)
    text.remove(1)
    text.remove(1)
    let c = 0
    for (let i = 0; i < item.nbt.matrix.length * 2; i++) {
      if (i % 2 == 0 && i > 0) {
        c += 1
        text.add(c, Text.of("----------").color(Color.YELLOW))
      }
      c += 1
      text.add(c, Text.of(`[${String(checkMatrix(item.nbt.matrix, Math.floor(i / 2), i % 2, 0)).padStart(4, ' ')},${String(checkMatrix(item.nbt.matrix, Math.floor(i / 2), i % 2, 1)).padStart(4, ' ')}]`).color(Color.GOLD))
    }
  })
})
//插件
ItemEvents.tooltip(event => {
  event.add(['design_decor:industrial_plating_block'], Text.translate("kubejs.tooltip.industrial_plating_block"))
  event.add(['kubejs:productivity_module'], Text.translate("kubejs.tooltip.productivity_module_item"))
  event.add(['kubejs:productivity_module'], Text.translate("kubejs.tooltip.productivity_module_speed"))
  event.add(['kubejs:productivity_module'], Text.translate("kubejs.tooltip.productivity_module_energy"))

  event.add(['kubejs:productivity_module_2'], Text.translate("kubejs.tooltip.productivity_module_2_item"))
  event.add(['kubejs:productivity_module_2'], Text.translate("kubejs.tooltip.productivity_module_2_speed"))
  event.add(['kubejs:productivity_module_2'], Text.translate("kubejs.tooltip.productivity_module_2_energy"))

  event.add(['kubejs:productivity_module_3'], Text.translate("kubejs.tooltip.productivity_module_3_item"))
  event.add(['kubejs:productivity_module_3'], Text.translate("kubejs.tooltip.productivity_module_3_speed"))
  event.add(['kubejs:productivity_module_3'], Text.translate("kubejs.tooltip.productivity_module_3_energy"))

  event.add(['kubejs:speed_module'], Text.translate("kubejs.tooltip.speed_module_speed"))
  event.add(['kubejs:speed_module'], Text.translate("kubejs.tooltip.speed_module_energy"))

  event.add(['kubejs:speed_module_2'], Text.translate("kubejs.tooltip.speed_module_2_speed"))
  event.add(['kubejs:speed_module_2'], Text.translate("kubejs.tooltip.speed_module_2_energy"))

  event.add(['kubejs:speed_module_3'], Text.translate("kubejs.tooltip.speed_module_3_speed"))
  event.add(['kubejs:speed_module_3'], Text.translate("kubejs.tooltip.speed_module_3_energy"))

  event.add(['kubejs:efficiency_module'], Text.translate("kubejs.tooltip.efficiency_module"))
  event.add(['kubejs:efficiency_module'], Text.translate("kubejs.tooltip.efficiency_module_out"))

  event.add(['kubejs:efficiency_module_2'], Text.translate("kubejs.tooltip.efficiency_module_2"))
  event.add(['kubejs:efficiency_module_2'], Text.translate("kubejs.tooltip.efficiency_module_2_out"))

  event.add(['kubejs:efficiency_module_3'], Text.translate("kubejs.tooltip.efficiency_module_3"))
  event.add(['kubejs:efficiency_module_3'], Text.translate("kubejs.tooltip.efficiency_module_3_out"))
})