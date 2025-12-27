WorldgenEvents.remove(event => {
  //移除陨石
  event.removeFeatureById('#ae2:has_meteorites',"top_layer_modification",["ae2:meteorite"])
})