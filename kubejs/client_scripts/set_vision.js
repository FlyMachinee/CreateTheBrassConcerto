NetworkEvents.dataReceived("setVision", event => {
    switch (event.data.type) {
        case "thridb":
            Client.options.cameraType = $CameraType.THIRD_PERSON_BACK
            break
        case "thridf":
            Client.options.cameraType = $CameraType.THIRD_PERSON_FRONT
            break
        case "first":
            Client.options.cameraType = $CameraType.FIRST_PERSON
            break
    }
})