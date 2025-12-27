// requires:ratatouille
ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom().id("dut_create:")
  //event.remove({ mod: '' })
  //稻米脱粒
  event.remove({id:"ratatouille:threshing/rice_panicle"})
  event.custom({
    "type": "ratatouille:threshing",
    "ingredients": [
      {
        "item": "farmersdelight:rice_panicle"
      }
    ],
    "processingTime": 200,
    "results": [
      {
        "item": "farmersdelight:rice",
        "count": 2
      },
      {
        "item": "farmersdelight:rice",
        "count": 1,
        "chance": 0.5
      }
    ]
  }).id("dut_create:rice")
  //模具
  event.remove({id: 'create:compacting/cake_mold'})
  event.remove({id: 'create:compacting/chocolate_mold'})
  //煎鸡蛋
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "fluid": "ratatouille:egg_yolk","amount":200
      }
    ],
    "results": [
      {
        "item":"farmersdelight:fried_egg"
      }
    ]
  }).id("dut_create:fried_egg")
  //盐
  event.remove({id: 'ratatouille:salt'})
  event.remove({id: 'create:mixing/salty_dough'})
  event.remove({id: 'create:mixing/mince_meat'})
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "tag": "ratatouille:raw_meat"
      },
      {
        "item": "kubejs:salt"
      }
    ],
    "results": [
      {
        "amount": 250,
        "fluid": "ratatouille:mince_meat"
      }
    ]
  }).id("dut_create:mince_meat")
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "create:wheat_flour"
      },
      {
        "item": "kubejs:salt"
      },
      {
        "amount": 100,
        "fluid": "ratatouille:egg_yolk"
      }
    ],
    "results": [
      {
        "item": "ratatouille:salty_dough"
      }
    ]
  }).id("dut_create:salty_dough")
  //可可粉
  event.remove({id: 'create:milling/cocoapodwer'})
})