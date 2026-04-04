ServerEvents.recipes(event => {
  const ShaftFurnaceStructure =
  {
    "type": "custommachinery:structure",
    "pattern":
      [
        [
          "AAAA   AAAA",
          "AAAA   AAAA",
          "AAAC   CAAA",
          "ACCCKKKCCCA",
          "ACCCKKKCCCA",
          "ACCCKKKCCCA",
          "AAACCCCCAAA",
          "AAACCCCCAAA",
          "AAACCCCCAAA",
          "  ACCCCCA  ",
          "  ACCCCCA  ",
          "  AACCCAA  "
        ],
        [
          "           ",
          "           ",
          "   D   D   ",
          " D  LLL  D ",
          "    LLL    ",
          " D  LLL  D ",
          "   DZ ZD   ",
          "    [a[    ",
          "   Z]]]Z   ",
          "   Z]]]Z   ",
          "   Z]]]Z   ",
          "    ZZZ    "
        ],
        [
          "           ",
          "           ",
          "   EFFFE   ",
          " MMEAAAEMM ",
          " MMEAAAEMM ",
          " MMEAAAEMM ",
          "   EZ ZE   ",
          "    [a[    ",
          "    ]]]    ",
          "    ]]]    ",
          "    ]]]    ",
          "           "
        ],
        [
          "           ",
          "   bbbbb   ",
          "  d  G  B  ",
          "  d NNN B  ",
          "  STNUNTS  ",
          "  d NNN B  ",
          "  d Z Z B  ",
          "   c[a[c   ",
          "    ]]]    ",
          "    ]]]    ",
          "    ]]]    ",
          "           "
        ],
        [
          "           ",
          "           ",
          "     H     ",
          "    OOO    ",
          "  VVOWOVV  ",
          "    OOO    ",
          "    FXF    ",
          "    FXF    ",
          "    ]]]    ",
          "    ]]]    ",
          "    ]]]    ",
          "           "
        ],
        [
          "           ",
          "           ",
          "     G     ",
          "    OOO    ",
          "   GOWOG   ",
          "    OOO    ",
          "     G     ",
          "           ",
          "    ]]]    ",
          "    ]]]    ",
          "    ]]]    ",
          "           "
        ],
        [
          "           ",
          "           ",
          "     D     ",
          "    OOO    ",
          "   DOWOD   ",
          "    OOO    ",
          "     D     ",
          "           ",
          "    ]]]    ",
          "    ]]]    ",
          "    ]]]    ",
          "           "
        ],
        [
          "           ",
          "           ",
          "     I     ",
          "    NNN    ",
          "   INUNI   ",
          "    NNN    ",
          "     I     ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           "
        ],
        [
          "           ",
          "           ",
          "     J     ",
          "    PEP    ",
          "   JEXEJ   ",
          "    PEP    ",
          "     J     ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           "
        ],
        [
          "           ",
          "           ",
          "           ",
          "     E     ",
          "    EXE    ",
          "     E     ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           "
        ],
        [
          "           ",
          "           ",
          "     J     ",
          "    QEQ    ",
          "     X     ",
          "    QEQ    ",
          "     J     ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           "
        ],
        [
          "           ",
          "           ",
          "     J     ",
          "     E     ",
          "    FXF    ",
          "     E     ",
          "     J     ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           "
        ],
        [
          "           ",
          "           ",
          "           ",
          "     F     ",
          "    GXG    ",
          "     F     ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           "
        ],
        [
          "           ",
          "           ",
          "           ",
          "     G     ",
          "    DXD    ",
          "     G     ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           "
        ],
        [
          "           ",
          "           ",
          "           ",
          "     D     ",
          "    DXD    ",
          "     D     ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           "
        ],
        [
          "           ",
          "           ",
          "           ",
          "     D     ",
          "    IXI    ",
          "     D     ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           "
        ],
        [
          "           ",
          "           ",
          "           ",
          "     I     ",
          "     X     ",
          "     I     ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           "
        ],
        [
          "           ",
          "           ",
          "           ",
          "           ",
          "     T     ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           "
        ],
        [
          "           ",
          "           ",
          "           ",
          "     R     ",
          "    RmR    ",
          "     R     ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           "
        ],
        [
          "           ",
          "           ",
          "           ",
          "     D     ",
          "    DYD    ",
          "     D     ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           "
        ],
        [
          "           ",
          "           ",
          "           ",
          "     I     ",
          "    IXI    ",
          "     I     ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           ",
          "           "
        ]
      ],
    "keys": {
      "A": "design_decor:ornate_grate",
      "B": "design_decor:iron_railing[west=true]",
      "d": "design_decor:iron_railing[east=true]",
      "b": "design_decor:iron_railing[south=true]",
      "c": "design_decor:iron_railing[north=true]",
      "C": "create:railway_casing",
      "D": "create:metal_girder",
      "E": "create:industrial_iron_block",
      "F": "ad_astra:iron_plating_slab",
      "G": "design_decor:diagonal_metal_support",
      "H": "design_decor:stepped_lever",
      "I": "design_decor:diagonal_girder",
      "J": "design_decor:brass_lamp",
      "K": "create:encased_fluid_pipe",
      "L": "createaddition:liquid_blaze_burner{fuelLevel:2}",
      "M": "create:copper_casing",
      "N": "design_decor:brass_boiler_structure",
      "O": "design_decor:industrial_iron_boiler_structure",
      "P": "create:andesite_bars",
      "Q": "#dut_create:funnel",
      "R": "#dut_create:funnel",
      "S": "design_decor:copper_boiler",
      "T": "design_decor:brass_boiler",
      "U": "design_decor:brass_boiler_large",
      "V": "create_things_and_misc:brass_brick_slab",
      "W": "design_decor:industrial_iron_boiler_large",
      "X": "design_decor:industrial_iron_boiler",
      "Y": "railways:smokestack_oilburner",
      "Z": "ad_astra:iron_pillar",
      "[": "create:andesite_encased_cogwheel",
      "a": "create:mechanical_pump",
      "]": "create:fluid_tank"
    },
    "jei": true
  }
  function ShaftFurnaceFluid(fluid, amount, tank, mode) {
    return ({
      "type": "custommachinery:fluid",
      "mode": mode,
      "tank": tank,
      "fluid": fluid,
      "amount": amount
    })
  }
  function ShaftFurnaceItem(item, amount, mode) {
    return ({
      "type": "custommachinery:item",
      "mode": mode,
      "item": item,
      "amount": amount
    })
  }
  function ShaftFurnaceItemNBT(mode, item, amount,nbt) {
  return ({
    "type": "custommachinery:item",
    "mode": mode,
    "item": item,
    "nbt":nbt,
    "amount": amount
  })
}
  function ShaftFurnaceItemChance(item, amount, chance) {
    return ({
      "type": "custommachinery:item",
      "mode": "output",
      "chance": chance,
      "item": item,
      "amount": amount
    })
  }
  function ShaftFurnaceDimension(dimension) {
    return ({
      "type": "custommachinery:dimension",
      "filter": dimension,
      "blacklist": false
    })
  }
  function ShaftFurnaceBiome(biome) {
    return ({
      "type": "custommachinery:biome",
      "filter": biome,
      "blacklist": false
    })
  }
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:shaft_furnace",
    "time": 10,
    "error": true,
    "priority": 5,
    "requirements": [
      ShaftFurnaceStructure,
      ShaftFurnaceItem("#forge:dough", 48, "input"),
      ShaftFurnaceItemChance("minecraft:bread", 48, 0.02),
      ShaftFurnaceItemChance("minecraft:charcoal", 48, 0.98)
    ]
  }).id("dut_create:shaft_furnace/bread_egg")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:shaft_furnace",
    "time": 60,
    "error": true,
    "priority": 5,
    "requirements": [
      ShaftFurnaceStructure,
      ShaftFurnaceItem("kubejs:crushed_coal", 48, "input"),
      ShaftFurnaceItem("#dut_create:shaft_furnace", 3, "input"),
      ShaftFurnaceItem("#dut_create:make_steel", 16, "input"),
      ShaftFurnaceFluid("kubejs:oxygen", 8000, "oxygen", "input"),
      ShaftFurnaceFluid("kubejs:industrial_iron", 2880, "fluid", "input"),
      ShaftFurnaceFluid("kubejs:incomplete_steel", 3240, "fluid_output", "output"),
      ShaftFurnaceItem("kubejs:granite_alloy", 16, "output"),
      ShaftFurnaceItem("kubejs:diorite_alloy", 16, "output")
    ],
  }).id("dut_create:shaft_furnace/incomplete_steel")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:shaft_furnace",
    "time": 60,
    "error": true,
    "priority": 5,
    "requirements": [
      ShaftFurnaceStructure,
      ShaftFurnaceItem("kubejs:crushed_coal", 36, "input"),
      ShaftFurnaceItemNBT("input", "kubejs:matrix_2", 1, '{matrix:[[[2,3],[3,2]],[[0,-1],[-1,0]]]}'),
      ShaftFurnaceItemNBT("output", "kubejs:matrix_2", 1, '{matrix:[[[0,0],[0,0]]]}'),
      ShaftFurnaceFluid("kubejs:industrial_iron", 2880, "fluid", "input"),
      ShaftFurnaceFluid("kubejs:incomplete_steel", 4320, "fluid_output", "output"),
      ShaftFurnaceItem("kubejs:granite_alloy", 24, "output"),
      ShaftFurnaceItem("kubejs:diorite_alloy", 24, "output")
    ],
  }).id("dut_create:shaft_furnace/incomplete_steel/matrix")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:shaft_furnace",
    "time": 120,
    "error": true,
    "priority": 5,
    "requirements": [
      ShaftFurnaceStructure,
      ShaftFurnaceItem("createloveandwar:crushed_tungsten", 32, "input"),
      ShaftFurnaceItem("#dut_create:shaft_furnace", 3, "input"),
      ShaftFurnaceItem("minecraft:tuff", 24, "input"),
      ShaftFurnaceFluid("kubejs:muriatic_acid", 6000, "fluid", "input"),
      ShaftFurnaceFluid("kubejs:oxygen", 8000, "oxygen", "input"),
      ShaftFurnaceFluid("kubejs:ammonia", 2000, "fluid_output", "output"),
      ShaftFurnaceItem("createloveandwar:tungsten", 48, "output"),
      ShaftFurnaceItem("create:crushed_raw_tin", 32, "output"),
      ShaftFurnaceItem("kubejs:diorite_alloy", 24, "output")
    ],
  }).id("dut_create:shaft_furnace/tungsten")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:shaft_furnace",
    "time": 80,
    "error": true,
    "priority": 5,
    "requirements": [
      ShaftFurnaceStructure,
      ShaftFurnaceItem("createloveandwar:crushed_tungsten", 32, "input"),
      ShaftFurnaceItemNBT("input", "kubejs:matrix_2", 1, '{matrix:[[[3,7],[0,0]],[[0,-2],[0,1]]]}'),
      ShaftFurnaceItemNBT("output", "kubejs:matrix_2", 1, '{matrix:[[[0,0],[0,0]]]}'),
      ShaftFurnaceFluid("kubejs:muriatic_acid", 4000, "fluid", "input"),
      ShaftFurnaceFluid("kubejs:oxygen", 3000, "oxygen", "input"),
      ShaftFurnaceFluid("kubejs:ammonia", 3000, "fluid_output", "output"),
      ShaftFurnaceItem("createloveandwar:tungsten", 64, "output"),
      ShaftFurnaceItem("create:crushed_raw_tin", 24, "output"),
      ShaftFurnaceItem("kubejs:diorite_alloy", 36, "output")
    ],
  }).id("dut_create:shaft_furnace/tungsten/matrix")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:shaft_furnace",
    "time": 60,
    "error": true,
    "priority": 5,
    "requirements": [
      ShaftFurnaceStructure,
      ShaftFurnaceItem("kubejs:aluminite_powder", 48, "input"),
      ShaftFurnaceItem("kubejs:diorite_alloy", 4, "input"),
      ShaftFurnaceFluid("kubejs:caustic_soda", 3000, "fluid", "input"),
      ShaftFurnaceFluid("kubejs:fused_alumina", 2880, "fluid_output", "output"),
      ShaftFurnaceItem("kubejs:granite_alloy", 32, "output")
    ],
  }).id("dut_create:shaft_furnace/fused_alumina_from_powder")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:shaft_furnace",
    "time": 60,
    "error": true,
    "priority": 5,
    "requirements": [
      ShaftFurnaceStructure,
      ShaftFurnaceItem("ad_astra:steel_ingot", 16, "input"),
      ShaftFurnaceItem("ad_astra:cheese", 16, "input"),
      ShaftFurnaceItem("kubejs:cheese_moonalgae", 4, "input"),
      ShaftFurnaceFluid("kubejs:brass", 2880, "fluid", "input"),
      ShaftFurnaceFluid("kubejs:desh", 2880, "fluid_output", "output"),
      ShaftFurnaceItem("kubejs:cheese_moonalgae", 8, "output")
    ],
  }).id("dut_create:shaft_furnace/desh")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:shaft_furnace",
    "time": 60,
    "error": true,
    "priority": 5,
    "requirements": [
      ShaftFurnaceStructure,
      ShaftFurnaceItem("ad_astra:cheese", 16, "input"),
      ShaftFurnaceFluid("kubejs:desh", 4320, "fluid_output", "output"),
      ShaftFurnaceItemNBT("input", "kubejs:matrix_2", 1, '{matrix:[[[0,3],[0,7]],[[0,0],[1,-2]]]}'),
      ShaftFurnaceItemNBT("output", "kubejs:matrix_2", 1, '{matrix:[[[0,0],[0,0]]]}'),
      ShaftFurnaceItem("kubejs:cheese_moonalgae", 8, "output")
    ],
  }).id("dut_create:shaft_furnace/desh/matrix")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:shaft_furnace",
    "time": 60,
    "error": true,
    "priority": 5,
    "requirements": [
      ShaftFurnaceStructure,
      ShaftFurnaceItem("createaddition:biomass_pellet_block", 48, "input"),
      ShaftFurnaceFluid("kubejs:oxygen", 6000, "oxygen", "input"),
      ShaftFurnaceFluid("kubejs:nitrogen_dioxide", 3000, "fluid_output", "output")
    ],
  }).id("dut_create:shaft_furnace/nitrogen_dioxide")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:shaft_furnace",
    "time": 60,
    "error": true,
    "priority": 5,
    "requirements": [
      ShaftFurnaceStructure,
      ShaftFurnaceItem("ad_astra:cheese_block", 18, "input"),
      ShaftFurnaceFluid("kubejs:oxygen", 6000, "oxygen", "input"),
      ShaftFurnaceFluid("kubejs:nitrogen_dioxide", 6000, "fluid_output", "output")
    ],
  }).id("dut_create:shaft_furnace/nitrogen_dioxide_cheese")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:shaft_furnace",
    "time": 720,
    "error": true,
    "priority": 5,
    "requirements": [
      ShaftFurnaceStructure,
      ShaftFurnaceItem("iceandfire:fire_dragon_blood", 4, "input"),
      ShaftFurnaceItem("ad_astra:steel_plate", 4, "input"),
      ShaftFurnaceItem("kubejs:blaze_chlamydia", 4, "input"),
      ShaftFurnaceFluid("kubejs:oxygen", 4000, "oxygen", "input"),
      ShaftFurnaceItem("iceandfire:dragonsteel_fire_ingot", 4, "output")
    ],
  }).id("dut_create:shaft_furnace/dragonsteel_fire_ingot")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:shaft_furnace",
    "time": 20,
    "error": true,
    "priority": 5,
    "requirements": [
      ShaftFurnaceStructure,
      ShaftFurnaceItem("#dut_create:fire_dragonegg", 1, "input"),
      ShaftFurnaceItem("#forge:plates/gold", 24, "input"),
      ShaftFurnaceFluid("kubejs:covariant_heat", 250, "fluid", "input"),
      ShaftFurnaceItemChance('iceandfire:dragonscales_red', 72, 1)
    ],
  }).id("dut_create:shaft_furnace/fire_dragonegg")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:shaft_furnace",
    "time": 20,
    "error": true,
    "priority": 5,
    "requirements": [
      ShaftFurnaceStructure,
      ShaftFurnaceDimension("minecraft:the_nether"),
      ShaftFurnaceItem("#dut_create:fire_dragonegg", 1, "input"),
      ShaftFurnaceItem("#forge:plates/gold", 24, "input"),
      ShaftFurnaceItemChance('iceandfire:dragonscales_red', 72, 1)
    ],
  }).id("dut_create:shaft_furnace/fire_dragonegg_nether")
})