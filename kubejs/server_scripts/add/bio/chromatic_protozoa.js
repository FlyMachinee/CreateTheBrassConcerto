ServerEvents.recipes(event => {
  //染料转化
  function dyeCycling(List) {
    for (let i = 0; i < List.length; i++) {
      event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "ingredients": [
          { "fluid": "vintageimprovements:sulfur_dioxide", "amount": 50 },
          { "item": "kubejs:chromatic_protozoa" },
          { "item": "minecraft:" + List[i] },
          { "item": "minecraft:" + List[i] },
          { "item": "minecraft:" + List[i] },
          { "item": "minecraft:" + List[i] }
        ],
        "processingTime": 50,
        "results": [
          { "item": "minecraft:" + List[(i + 1) % List.length], "count": 4 },
          { "item": "kubejs:chromatic_protozoa" },
          { "fluid": "vintageimprovements:sulfur_trioxide", "amount": 50 }
        ]
      }).id("dut_create:chormatic/" + List[i] + "_to_" + List[(i + 1) % List.length])
      event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "ingredients": [
          { "fluid": "vintageimprovements:sulfuric_acid", "amount": 50 },
          { "item": "kubejs:chromatic_protozoa" },
          { "item": "minecraft:" + List[i] },
          { "item": "minecraft:" + List[i] },
          { "item": "minecraft:" + List[i] },
          { "item": "minecraft:" + List[i] }
        ],
        "processingTime": 50,
        "results": [
          { "item": "minecraft:" + List[(i + 1) % List.length], "count": 4 },
          { "item": "kubejs:chromatic_protozoa" },
          { "fluid": "minecraft:water", "amount": 50 }
        ]
      }).id("dut_create:chormatic/acid/" + List[i] + "_to_" + List[(i + 1) % List.length])
    }
  }
  const WhiteAndBlack = ["white_dye", "black_dye"]
  const Colorful = ["brown_dye", "red_dye", "yellow_dye", "green_dye", "blue_dye"]
  const SubColorful = ["purple_dye", "lime_dye", "orange_dye", "cyan_dye", "pink_dye", "magenta_dye"]
  dyeCycling(WhiteAndBlack)
  dyeCycling(Colorful)
  dyeCycling(SubColorful)
  //异彩废料
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "superheated",
    "ingredients": [
      { "fluid": "vintageimprovements:sulfuric_acid", "amount": 500 },
      { "item": "kubejs:chromatic_protozoa" },
      { "item": "minecraft:white_dye" },
      { "item": "minecraft:black_dye" },
      { "item": "minecraft:brown_dye" },
      { "item": "minecraft:red_dye" },
      { "item": "minecraft:yellow_dye" },
      { "item": "minecraft:green_dye" },
      { "item": "minecraft:blue_dye" }
    ],
    "processingTime": 300,
    "results": [
      { "fluid": "kubejs:chromatic_waste", "amount": 250 },
      { "item": "kubejs:chromatic_protozoa" }
    ]
  }).id("dut_create:chromatic/chromatic_waste")
  //异彩化合物1
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "heatRequirement": "superheated",
    "ingredients": [
      { "fluid": "kubejs:chromatic_waste", "amount": 250 },
      { "tag": "forge:ingots/shadow_steel" },
      { "item": "kubejs:chromatic_protozoa" }
    ],
    "processingTime": 200,
    "results": [
      { "item": "create:chromatic_compound" },
      { "item": "kubejs:chromatic_protozoa" }
    ]
  }).id("dut_create:chromatic/from_shadow_steel")
  //
  event.replaceInput({ input: 'create_dd:chromatic_compound' }, 'create_dd:chromatic_compound', '#forge:ingots/chromatic')
  event.replaceInput({ input: 'create_dd:refined_radiance' }, 'create_dd:refined_radiance', '#forge:ingots/refined_radiance')
  event.replaceInput({ input: 'create_dd:shadow_steel' }, 'create_dd:shadow_steel', '#forge:ingots/shadow_steel')
  //转化超经验
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      { "fluid": "create_enchantment_industry:experience", "amount": 1000 },
      { "item": "kubejs:chromatic_protozoa" },
      { "tag": "forge:ingots/chromatic" }
    ],
    "processingTime": 400,
    "results": [
      { "item": "kubejs:chromatic_protozoa" },
      { "fluid": "create_enchantment_industry:hyper_experience", "amount": 200 }
    ]
  }).id("dut_create:chromatic/experience")

})