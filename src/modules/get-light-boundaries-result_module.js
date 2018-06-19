
/**
  * This function will be a utility function to check if the light is inside
  * the boundaries and return the result
  */

function getLightBoundariesResult(light) {
  return light.bulb.position.x <= 480 &&
         light.bulb.position.x >= -480 &&
         light.bulb.position.z <= 480 &&
         light.bulb.position.z >= -480;
}

export default getLightBoundariesResult;
