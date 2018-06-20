
// Getting THREEJS and importing useful modules for this function

const THREE = require( 'three' );

import getRandomNumber from './get-random-number_module.js';

/**
  * This function will create a object geometry data with the random object
  * geometry and it's info.
  */

function createRandomObjectGeometry(objectRow, objectCol) {

  /**
    * Getting random number to create geometry and creating object geometry info
    * and the geometry itself
    */

  const geometryTypeNum = getRandomNumber( 1, 6 ),
    objectGeometryInfo = {};

  let objectGeometry;

  switch ( geometryTypeNum ) {

    case 1:

      // We'll create a box for the first case

      objectGeometryInfo.width = getRandomNumber( 10, 90 );
      objectGeometryInfo.height = getRandomNumber( 12, 28 );
      objectGeometryInfo.depth = getRandomNumber( 10, 90 );
      objectGeometryInfo.type = 'box';

      objectGeometry = new THREE.BoxBufferGeometry(
        objectGeometryInfo.width,
        objectGeometryInfo.height,
        objectGeometryInfo.depth
      );

      break;
    case 2:

      // We'll create a sphere with random radius and segments

      objectGeometryInfo.radius = getRandomNumber( 6, 14 );
      objectGeometryInfo.widthSegments = getRandomNumber( 30, 100 );
      objectGeometryInfo.heightSegments = getRandomNumber( 30, 100 );
      objectGeometryInfo.type = 'sphere';

      objectGeometry = new THREE.SphereBufferGeometry(
        objectGeometryInfo.radius,
        objectGeometryInfo.widthSegments,
        objectGeometryInfo.heightSegments
      );

      break;
    case 3:

      // Here we'll create a cone with a lot of variants

      objectGeometryInfo.radius = getRandomNumber( 5, 40 );
      objectGeometryInfo.height = getRandomNumber( 8, 29 );
      objectGeometryInfo.radialSegments = getRandomNumber( 4, 10 );
      objectGeometryInfo.heightSegments = getRandomNumber( 1, 4 );
      objectGeometryInfo.openEnded = getRandomNumber( 0, 1 );
      objectGeometryInfo.thetaStart = 0;
      objectGeometryInfo.thetaLength = Math.PI * 2;
      objectGeometryInfo.type = 'cone';

      objectGeometry = new THREE.ConeBufferGeometry(
        objectGeometryInfo.radius,
        objectGeometryInfo.height,
        objectGeometryInfo.radialSegments,
        objectGeometryInfo.heightSegments,
        objectGeometryInfo.openEnded,
        objectGeometryInfo.thetaStart,
        objectGeometryInfo.thetaLength
      );

      break;
    case 4:

      // The fourth geometry will be a cylinder, much like the cone geometry

      objectGeometryInfo.radiusTop = getRandomNumber( 5, 40 );
      objectGeometryInfo.radiusBottom = getRandomNumber( 5, 40 );
      objectGeometryInfo.height = getRandomNumber( 8, 29 );
      objectGeometryInfo.radialSegments = getRandomNumber( 4, 10 );
      objectGeometryInfo.heightSegments = getRandomNumber( 1, 4 );
      objectGeometryInfo.openEnded = !!getRandomNumber( 0, 1 );
      objectGeometryInfo.thetaStart = 0;
      objectGeometryInfo.thetaLength = Math.PI * 2;
      objectGeometryInfo.type = 'cylinder';

      objectGeometry = new THREE.CylinderBufferGeometry(
        objectGeometryInfo.radiusTop,
        objectGeometryInfo.radiusBottom,
        objectGeometryInfo.height,
        objectGeometryInfo.radialSegments,
        objectGeometryInfo.heightSegments,
        objectGeometryInfo.openEnded,
        objectGeometryInfo.thetaStart,
        objectGeometryInfo.thetaLength
      );

      break;
    case 5:

      // This one will be a ring-like torus geometry

      objectGeometryInfo.radius = getRandomNumber( 4, 10 );
      objectGeometryInfo.tube = getRandomNumber( 2, 5 );
      objectGeometryInfo.radialSegments = getRandomNumber( 8, 20 );
      objectGeometryInfo.tubularSegments = getRandomNumber( 6, 10 );
      objectGeometryInfo.type = 'torus';

      objectGeometry = new THREE.TorusBufferGeometry(
        objectGeometryInfo.radius,
        objectGeometryInfo.tube,
        objectGeometryInfo.radialSegments,
        objectGeometryInfo.tubularSegments
      );

      break;
    case 6:

      // The last one will be a simple octahedron

      objectGeometryInfo.radius = getRandomNumber( 3, 14 );
      objectGeometryInfo.type = 'octahedron';

      objectGeometry = new THREE.OctahedronBufferGeometry(
        objectGeometryInfo.radius
      );

      break;
    default:
      console.log( 'Warning: unknown object type.' );
      break;
  }

  // Returning the object geometry data

  return {
    geometry: objectGeometry,
    info: objectGeometryInfo
  }

}

export default createRandomObjectGeometry;
