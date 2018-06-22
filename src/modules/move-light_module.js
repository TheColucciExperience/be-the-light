
// This function will move the light around the scene.

function moveLight(direction, lightObj, isActivation) {

  switch ( direction ) {

    case 'forward':
      lightObj.userControl.movingForward = isActivation;
      break;
    case 'backward':
      lightObj.userControl.movingBackward = isActivation;
      break;
    case 'left':
      lightObj.userControl.movingLeft = isActivation;
      break;
    case 'right':
      lightObj.userControl.movingRight = isActivation;
      break;
    default:
      break;

  }

}

export default moveLight;
