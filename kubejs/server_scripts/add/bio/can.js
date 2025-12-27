ServerEvents.recipes(event => {
  //塑料罐
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "dut_create:plates/polymer" },
    "loops": 1,
    "results": [
      { "item": "kubejs:empty_can", "count": 2 },
    ],
    "sequence": [
      {
        "type": "vintageimprovements:curving",
        "mode": 1,
        "ingredients": [{ "item": "kubejs:incomplete_can" }],
        "results": [{ "item": "kubejs:incomplete_can" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_can" },
        { "item": "create:andesite_alloy" }],
        "results": [{ "item": "kubejs:incomplete_can" }]
      },
      {
        "type": "vintageimprovements:curving",
        "mode": 1,
        "ingredients": [{ "item": "kubejs:incomplete_can" }],
        "results": [{ "item": "kubejs:incomplete_can" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_can" }
  }).id("dut_create:sequenced_assembly/empty_polymer_can")
  
})