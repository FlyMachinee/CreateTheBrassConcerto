ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //
  event.remove({ id: 'ad_astra:space_station/earth_orbit_space_station' })
  event.remove({ id: 'ad_astra:space_station/moon_orbit_space_station' })
  event.custom({
    "type": "ad_astra:space_station_recipe",
    "dimension": "ad_astra:earth_orbit",
    "ingredients": [
      {
        "count": 64,
        "ingredient": {"item": "create:brass_casing"}
      },
      {
        "count": 32,
        "ingredient": {"item": "kubejs:planetary_gear"}
      },
      {
        "count": 32,
        "ingredient": {"item": "create:railway_casing"}
      },
      {
        "count": 32,
        "ingredient": {"item": "create:smart_fluid_pipe"}
      },
      {
        "count": 16,
        "ingredient": {"item": "kubejs:differential"}
      },
      {
        "count": 16,
        "ingredient": {"item": "kubejs:solar_panel"}
      }
    ],
    "structure": "ad_astra:space_station"
  }).id("dut_create:earth_orbit_space_station")
  event.custom({
    "type": "ad_astra:space_station_recipe",
    "dimension": "ad_astra:moon_orbit",
    "ingredients": [
      {
        "count": 64,
        "ingredient": {"item": "create:brass_casing"}
      },
      {
        "count": 32,
        "ingredient": {"item": "kubejs:planetary_gear"}
      },
      {
        "count": 32,
        "ingredient": {"item": "create:railway_casing"}
      },
      {
        "count": 32,
        "ingredient": {"item": "ad_astra:desh_plate"}
      },
      {
        "count": 16,
        "ingredient": {"item": "kubejs:differential"}
      },
      {
        "count": 16,
        "ingredient": {"item": "kubejs:solar_panel"}
      }
    ],
    "structure": "ad_astra:space_station"
  }).id("dut_create:moon_orbit_space_station")
})
