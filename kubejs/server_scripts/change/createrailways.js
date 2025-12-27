ServerEvents.recipes(event => {
  event.replaceInput(
    { output: '#railways:conductor_caps'},
    'create:precision_mechanism',
    'kubejs:differential')
  event.replaceInput(
    { output: 'railways:track_switch_andesite'},
    'create:cogwheel',
    'kubejs:cardan_joint')
  event.replaceInput(
    { output: 'railways:track_switch_brass'},
    'create:precision_mechanism',
    'kubejs:cardan_joint')
  })