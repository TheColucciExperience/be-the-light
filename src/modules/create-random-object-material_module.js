
// Getting THREEJS and importing useful modules for this function

const THREE = require( 'three' );

import getRandomNumber from './get-random-number_module.js';

/**
  * This function will create a MeshStandardMaterial with random metalness,
  * roughness and color
  */

function createRandomObjectMaterial() {

  return new THREE.MeshStandardMaterial( {
    color: getRandomColor(),
    roughness: Math.random(),
    metalness: Math.random(),
    side: THREE.DoubleSide
  } );

}

// Function to get a random color

function getRandomColor() {

  // Component colors

  const red = getRandomNumber( 0, 255 ),
    green = getRandomNumber( 0, 255 ),
    blue = getRandomNumber( 0, 255 );

  return new THREE.Color( `rgb(${red}, ${green}, ${blue})` );

}

export default createRandomObjectMaterial;
