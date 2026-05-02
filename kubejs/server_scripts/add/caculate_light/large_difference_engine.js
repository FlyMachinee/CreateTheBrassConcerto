
ServerEvents.recipes(event => {
  const LargeDifferenceEngineStructure ={
    "type": "custommachinery:general_structure",
    "id": "main"
  }
  const LargeDifferenceEngineStress = {
    "type": "custommachinery:contraption",
    "mode": "input",
    "speed": 64
  }
  function LargeDifferenceEngineFluid(fluid, amount, mode) {
    return ({
      "type": "custommachinery:fluid",
      "mode": mode,
      "fluid": fluid,
      "amount": amount
    })
  }
  function LargeDifferenceEngineItem(item, amount) {
    return ({
      "type": "custommachinery:durability",
      "mode": "output",
      "item": item,
      "amount": amount
    })
  }
  function LargeDifferenceEngineFluidPerTick(fluid, mode, amount) {
    return ({
      "type": "custommachinery:fluid_per_tick",
      "mode": mode,
      "fluid": fluid,
      "amount": amount
    })
  }
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 20,
    "priority": 10,
    "hidden": true,
    "error": true,
    "requirements": [
      LargeDifferenceEngineStructure,
      LargeDifferenceEngineStress,
      LargeDifferenceEngineFluidPerTick("kubejs:kibibyte", "output", 128)
    ],
  }).id("dut_create:large_difference_engine/common_1")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 20,
    "priority": 12,
    "hidden": true,
    "error": true,
    "requirements": [
      LargeDifferenceEngineStructure,
      LargeDifferenceEngineStress,
      LargeDifferenceEngineFluidPerTick("kubejs:mebibyte", "output", 64)
    ],
  }).id("dut_create:large_difference_engine/common_0")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 20,
    "priority": 13,
    "error": true,
    "requirements": [
      LargeDifferenceEngineStructure,
      LargeDifferenceEngineStress,
      LargeDifferenceEngineFluidPerTick("kubejs:mebibyte", "output", 128),
      LargeDifferenceEngineFluidPerTick("kubejs:kibibyte", "output", 128)
    ],
  }).id("dut_create:large_difference_engine/common")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 8,
    "priority": 11,
    "error": true,
    "requirements": [
      LargeDifferenceEngineStructure,
      LargeDifferenceEngineStress,
      LargeDifferenceEngineFluid("kubejs:gibibyte", 1, "output")
    ],
  }).id("dut_create:large_difference_engine/common_gib")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 20,
    "priority": 15,
    "error": true,
    "requirements": [
      LargeDifferenceEngineStructure,
      LargeDifferenceEngineStress,
      LargeDifferenceEngineFluidPerTick("kubejs:pressurized_steam", "input", 10),
      LargeDifferenceEngineFluidPerTick("kubejs:mebibyte", "output", 256),
      LargeDifferenceEngineFluidPerTick("kubejs:kibibyte", "output", 256)
    ],
  }).id("dut_create:large_difference_engine/steam")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 20,
    "priority": 16,
    "error": true,
    "requirements": [
      LargeDifferenceEngineStructure,
      LargeDifferenceEngineStress,
      LargeDifferenceEngineFluidPerTick("kubejs:pressurized_steam", "input", 10),
      LargeDifferenceEngineFluidPerTick("kubejs:gibibyte", "output", 5)
    ],
  }).id("dut_create:large_difference_engine/steam1")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 1,
    "priority": 1,
    "hidden": true,
    "error": true,
    "requirements": [
      LargeDifferenceEngineFluid("kubejs:kibibyte", 1, "input"),
      LargeDifferenceEngineItem("kubejs:tin_hard_disk", 1)
    ],
  }).id("dut_create:large_difference_engine/tin")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 1,
    "priority": 2,
    "hidden": true,
    "error": true,
    "requirements": [
      LargeDifferenceEngineFluid("kubejs:kibibyte", 16, "input"),
      LargeDifferenceEngineItem("kubejs:tin_hard_disk", 16)
    ],
  }).id("dut_create:large_difference_engine/tin_1")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 1,
    "priority": 20,
    "hidden": true,
    "error": true,
    "requirements": [
      LargeDifferenceEngineFluid("kubejs:kibibyte", 1024, "input"),
      LargeDifferenceEngineItem("kubejs:tin_hard_disk", 1024)
    ],
  }).id("dut_create:large_difference_engine/tin_2")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 1,
    "priority": 20,
    "hidden": true,
    "error": true,
    "requirements": [
      LargeDifferenceEngineFluid("kubejs:mebibyte", 1, "input"),
      LargeDifferenceEngineItem("kubejs:tin_hard_disk", 1024)
    ],
  }).id("dut_create:large_difference_engine/tin_3")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 1,
    "priority": 1,
    "hidden": true,
    "error": true,
    "requirements": [
      LargeDifferenceEngineFluid("kubejs:mebibyte", 1, "input"),
      LargeDifferenceEngineItem("kubejs:aluminum_hard_disk", 1)
    ],
  }).id("dut_create:large_difference_engine/aluminum")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 1,
    "priority": 2,
    "hidden": true,
    "error": true,
    "requirements": [
      LargeDifferenceEngineFluid("kubejs:mebibyte", 16, "input"),
      LargeDifferenceEngineItem("kubejs:aluminum_hard_disk", 16)
    ],
  }).id("dut_create:large_difference_engine/aluminum_1")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 1,
    "priority": 21,
    "hidden": true,
    "error": true,
    "requirements": [
      LargeDifferenceEngineStructure,
      LargeDifferenceEngineFluid("kubejs:mebibyte", 1024, "input"),
      LargeDifferenceEngineItem("kubejs:aluminum_hard_disk", 1024)
    ],
  }).id("dut_create:large_difference_engine/aluminum_2")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 1,
    "priority": 20,
    "hidden": true,
    "error": true,
    "requirements": [
      LargeDifferenceEngineFluid("kubejs:gibibyte", 1, "input"),
      LargeDifferenceEngineItem("kubejs:aluminum_hard_disk", 1024)
    ],
  }).id("dut_create:large_difference_engine/aluminum_3")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 1,
    "priority": 1,
    "hidden": true,
    "error": true,
    "requirements": [
      LargeDifferenceEngineFluid("kubejs:gibibyte", 1, "input"),
      LargeDifferenceEngineItem("kubejs:brass_hard_disk", 1)
    ],
  }).id("dut_create:large_difference_engine/brass")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 1,
    "priority": 2,
    "hidden": true,
    "error": true,
    "requirements": [
      LargeDifferenceEngineFluid("kubejs:gibibyte", 8, "input"),
      LargeDifferenceEngineItem("kubejs:brass_hard_disk", 8)
    ],
  }).id("dut_create:large_difference_engine/brass_1")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:large_difference_engine",
    "time": 1,
    "priority": 25,
    "hidden": true,
    "error": true,
    "requirements": [
      LargeDifferenceEngineFluid("kubejs:gibibyte", 1024, "input"),
      LargeDifferenceEngineItem("kubejs:brass_hard_disk", 1024)
    ],
  }).id("dut_create:large_difference_engine/brass_2")
})