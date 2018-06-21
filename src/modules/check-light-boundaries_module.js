
/**
  * This function will check the view boundaries for the camera and the user
  * controlled light
  */

function checkLightBoundaries(light) {

  if ( light.bulb.position.x > 490 ) {
    light.bulb.position.x = 490;
  }

  if ( light.bulb.position.x < -490 ) {
    light.bulb.position.x = -490;
  }

  if ( light.bulb.position.z > 490 ) {
    light.bulb.position.z = 490;
  }

  if ( light.bulb.position.z < -490 ) {
    light.bulb.position.z = -490;
  }

}

// Exporting check boundaries function

export default checkLightBoundaries;
