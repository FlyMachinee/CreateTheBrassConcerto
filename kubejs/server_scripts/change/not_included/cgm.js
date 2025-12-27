// requires:cgm
//小龙虾
ServerEvents.recipes(event => {
  event.remove({ output: 'cgm:basic_bullet', mod: 'cgm' })
  event.remove({ output: 'cgm:advanced_bullet', mod: 'cgm' })
  event.remove({ output: 'cgm:shell', mod: 'cgm' })
  //枪械工作台
  event.remove({ output: 'cgm:workbench', mod: 'cgm' })
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": { "item": "create:precision_mechanism" },
      "P": { "tag": "dut_create:plates/duraplas" },
      "S": { "tag": "forge:plates/iron" }
    },
    "pattern": [
      " AAA ",
      "SPPPS",
      "S   S",
    ],
    "result": { "item": "cgm:workbench" }
  }).id("dut_create:workbench")
  //弹壳
  event.custom({
    "type": "vintageimprovements:curving",
    "mode": 1,
    "ingredients": [{ "tag": "forge:plates/copper" }],
    "results": [{ "item": "kubejs:bullet_shells"}]
  }).id("dut_create:bullet_shells_from_copper")
  event.custom({
    "type": "vintageimprovements:curving",
    "mode": 1,
    "ingredients": [{ "tag": "forge:plates/brass" }],
    "results": [{ "item": "kubejs:bullet_shells", "count": 3 }]
  }).id("dut_create:bullet_shells_from_brass")
  //装填弹壳
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:bullet_shells" },
    "loops": 1,
    "results": [
      { "item": "kubejs:filled_bullets" },
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:bullet_shells" },
          { "item": "createbigcannons:nitropowder" }
        ],
        "results": [{ "item": "kubejs:bullet_shells" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:bullet_shells" }
  }).id("dut_create:filled_bullets_nitropowder")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:bullet_shells" },
    "loops": 1,
    "results": [
      { "item": "kubejs:filled_bullets" },
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:bullet_shells" },
          { "tag": "forge:gunpowder" }
        ],
        "results": [{ "item": "kubejs:bullet_shells" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:bullet_shells" },
          { "tag": "forge:gunpowder" }
        ],
        "results": [{ "item": "kubejs:bullet_shells" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:bullet_shells" },
          { "tag": "forge:gunpowder" }
        ],
        "results": [{ "item": "kubejs:bullet_shells" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:bullet_shells" },
          { "tag": "forge:gunpowder" }
        ],
        "results": [{ "item": "kubejs:bullet_shells" }]
      },
      {
        "type": "vintageimprovements:curving",
        "mode": 1,
        "ingredients": [
          { "item": "kubejs:bullet_shells" }
        ],
        "results": [{ "item": "kubejs:bullet_shells" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:bullet_shells" }
  }).id("dut_create:filled_bullets")
  //基础弹药
  event.custom(
    {
      "type": "create:deploying",
      "ingredients": [
        { "item": "kubejs:filled_bullets" },
        { "tag": "forge:nuggets/copper" }
      ],
      "results": [
        { "item": "cgm:basic_bullet", "count": 8 }
      ]
    }
  ).id("dut_create:delpoying/basic_bullet")
  //高级弹药
  event.custom(
    {
      "type": "create:deploying",
      "ingredients": [
        { "item": "kubejs:filled_bullets" },
        { "tag": "forge:nuggets/brass" }
      ],
      "results": [
        { "item": "cgm:advanced_bullet", "count": 4 }
      ]
    }
  ).id("dut_create:delpoying/advanced_bullet")
  //霰弹
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "kubejs:filled_bullets" },
      { "item": "createbigcannons:shot_balls" }
    ],
    "results": [
      { "item": "cgm:shell", "count": 2 }
    ]
  }).id("dut_create:shell1")
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "kubejs:filled_bullets" },
    "loops": 3,
    "results": [
      { "item": "cgm:shell", "count": 2 },
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:filled_bullets" },
          { "tag": "forge:nuggets/gold" }
        ],
        "results": [{ "item": "kubejs:filled_bullets" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:filled_bullets" }
  }).id("dut_create:shell")
})
