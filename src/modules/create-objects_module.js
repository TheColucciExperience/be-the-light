
// Getting THREEJS

const THREE = require( 'three' );

// Importing necessary modules

import createFloor from './create-floor_module.js';
import createRandomObjects from './create-random-objects_module.js';

// This function will create the objects that compose the scene

function createObjects(interfaceCtrl) {

  // We'll take the interface control as a parameter  

  // Constructing scene floor

  createFloor( interfaceCtrl );

  // Creating random scene objects

  createRandomObjects(
  	interfaceCtrl,
  	interfaceCtrl.info.objectsSpace,
  	interfaceCtrl.info.floorSideLength
  );

}

export default createObjects;
