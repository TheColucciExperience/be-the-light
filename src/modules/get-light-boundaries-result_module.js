
/**
  * This function will be a utility function to check if the light is inside
  * the boundaries and return the result
  */

function getLightBoundariesResult(light) {
  return light.bulb.position.x <= 490 &&
         light.bulb.position.x >= -490 &&
         light.bulb.position.z <= 490 &&
         light.bulb.position.z >= -490;
}

export default getLightBoundariesResult;
