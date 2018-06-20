
// Importing utility function and add traveled distance function

import getLightBoundariesResult from './get-light-boundaries-result_module.js';
import addTraveledDistance from './add-traveled-distance_module.js';

/**
  * This function will update the position of the light bulb in case the
  * user is moving it
  */

function updateView(light, camera, cameraControls, speed, userData) {

  /**
    * This is the azimuthal angle for the camera. We'll need this to calculate
    * the left and right movements of the light based on the camera's angle.
    * We'll also get the light speed to compute the right distance to move in
    * the appropriate directions.
    */

  const angle = cameraControls.getAzimuthalAngle();

  if ( light.userControl.movingLeft ) {

    moveObj( 'left', light.bulb, angle, speed );

    if ( getLightBoundariesResult( light ) ) {
      moveObj( 'left', camera, angle, speed );
      addTraveledDistance( userData, speed );
    }

  }

  if ( light.userControl.movingRight ) {

    moveObj( 'right', light.bulb, angle, speed );

    if ( getLightBoundariesResult( light ) ) {
      moveObj( 'right', camera, angle, speed );
      addTraveledDistance( userData, speed );
    }

  }

  if ( light.userControl.movingForward ) {

    moveObj( 'forward', light.bulb, angle, speed );

    if ( getLightBoundariesResult( light ) ) {
      moveObj( 'forward', camera, angle, speed );
      addTraveledDistance( userData, speed );
    }

  }

  if ( light.userControl.movingBackward ) {

    moveObj( 'backward', light.bulb, angle, speed );

    if ( getLightBoundariesResult( light ) ) {
      moveObj( 'backward', camera, angle, speed );
      addTraveledDistance( userData, speed );
    }

  }

  if ( light.userControl.movingUp && light.bulb.position.y <= 80 ) {
    light.bulb.position.y += light.bulbSpeed;
    camera.position.y += light.bulbSpeed;
  }

  if ( light.userControl.movingDown && light.bulb.position.y >= 30 ) {
    light.bulb.position.y -= light.bulbSpeed;
    camera.position.y -= light.bulbSpeed;
  }

  cameraControls.target = light.bulb.position;
  cameraControls.update();

}

// Function to move objects accordingly to camera angle

function moveObj(direction, obj, angle, speed) {

  switch ( direction ) {

    case 'forward':
      obj.position.z -= speed * Math.cos( angle );
      obj.position.x -= speed * Math.sin( angle );
      break;
    case 'backward':
      obj.position.z += speed * Math.cos( angle );
      obj.position.x += speed * Math.sin( angle );
      break;
    case 'right':
      obj.position.z -= speed * Math.sin( angle );
      obj.position.x += speed * Math.cos( angle );
      break;
    case 'left':
      obj.position.z += speed * Math.sin( angle );
      obj.position.x -= speed * Math.cos( angle );
      break;
    default:
      break;

  }

}

// Exporting module

export default updateView;
