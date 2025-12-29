ServerEvents.recipes(event => {
  //氢气
  event.custom({
    "type": "createaddition:liquid_burning",
    "input": {
      "fluidTag": "forge:hydrogen",
      "amount": 1000
    },
    "burnTime": 8000
  }).id("dut_create:liquid_burning/hydrogen")
  //天然气
  event.custom({
    "type": "createaddition:liquid_burning",
    "input": {
      "fluidTag": "forge:natural_gas",
      "amount": 1000
    },
    "burnTime": 18000
  }).id("dut_create:liquid_burning/natural_gas")
  //氨气
  event.custom({
    "type": "createaddition:liquid_burning",
    "input": {
      "fluid": "kubejs:ammonia",
      "amount": 1000
    },
    "superheated": true,
    "burnTime": 12000
  }).id("dut_create:liquid_burning/ammonia")
  //润滑油
  event.custom({
    "type": "createaddition:liquid_burning",
    "input": {
      "fluidTag": "forge:lube_oil",
      "amount": 1000
    },
    "superheated": true,
    "burnTime": 2000
  }).id("dut_create:liquid_burning/lube_oil")
  //精炼油
  event.custom({
    "type": "createaddition:liquid_burning",
    "input": {
      "fluidTag": "dut_create:refined_oil",
      "amount": 1000
    },
    "burnTime": 4000
  }).id("dut_create:liquid_burning/refined_oil")
  //生物柴油
  event.remove({ id: 'createaddition:liquid_burning/biodiesel' })
  event.custom({
    "type": "createaddition:liquid_burning",
    "input": {
      "fluidTag": "forge:biodiesel",
      "amount": 1000
    },
    "burnTime": 8000,
    "superheated": true,
    "conditions": [
      {
        "fluidTag": "forge:biodiesel",
        "type": "createaddition:has_fluid_tag"
      }
    ]
  }
  ).id("dut_create:liquid_burning/biodiesel")
  //柴油
  event.remove({ id: 'createaddition:liquid_burning/diesel' })
  event.custom({
    "type":"createaddition:liquid_burning",
    "input": {
          "fluidTag": "forge:diesel",
          "amount": 1000
    },
    "burnTime": 16000,
    "conditions": [
        {
            "fluidTag": "forge:diesel",
            "type": "createaddition:has_fluid_tag"
        }
    ]
  }).id("dut_create:liquid_burning/diesel")
  //汽油
  event.remove({ id: 'createaddition:liquid_burning/gasoline' })
  event.custom({
    "type": "createaddition:liquid_burning",
    "input": { "fluidTag": "forge:gasoline", "amount": 1000 },
    "burnTime": 12000,
    "conditions": [
      { "fluidTag": "forge:gasoline", "type": "createaddition:has_fluid_tag" }
    ]
  }
  ).id("dut_create:liquid_burning/gasoline")
})