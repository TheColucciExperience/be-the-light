
/**
  * This function will add the controls listeners to the window and trigger
  * the light properties accordingly
  */

function handleLightControl(windowObj, light) {

  // Adding listeners to the window object for keydown and keyup events

  windowObj.addEventListener( 'keydown', function callKeydownHandler(e) {
    keyHandler(e, light, true);
  } );

  windowObj.addEventListener( 'keyup', function callKeydownHandler(e) {
    keyHandler(e, light, false);
  } );

}

// Functions to handle key events

function keyHandler(e, lightObj, isActivation) {

  // Checking if any of the controls keys are pressed

  switch (true) {

    case e.key === 'ArrowUp':
      lightObj.userControl.movingForward = isActivation;
      break;
    case e.key === 'ArrowDown':
      lightObj.userControl.movingBackward = isActivation;
      break;
    case e.key === 'ArrowLeft':
      lightObj.userControl.movingLeft = isActivation;
      break;
    case e.key === 'ArrowRight':
      lightObj.userControl.movingRight = isActivation;
      break;
    case e.key === 'w' || e.key === 'W':
      lightObj.userControl.movingUp = isActivation;
      break;
    case e.key === 's' || e.key === 'S':
      lightObj.userControl.movingDown = isActivation;
      break;
    default:
      break;

  }

}

export default handleLightControl;
