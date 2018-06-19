
/**
  * This function will check the view boundaries for the camera and the user
  * controlled light
  */

function checkLightBoundaries(light) {

  if ( light.bulb.position.x > 480 ) {
    light.bulb.position.x = 480;
  }

  if ( light.bulb.position.x < -480 ) {
    light.bulb.position.x = -480;
  }

  if ( light.bulb.position.z > 480 ) {
    light.bulb.position.z = 480;
  }

  if ( light.bulb.position.z < -480 ) {
    light.bulb.position.z = -480;
  }

}

// Exporting check boundaries function

export default checkLightBoundaries;
