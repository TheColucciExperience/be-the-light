
// Importing random number utility function

import getRandomNumber from './get-random-number_module.js';

/**
  * This function will position the object on the scene based on it's form.
  * The default is the object center starting at (0, 0, 0), so we'll use the
  * object's info and it's row/column position to calculate a semi random position
  * for the object whithin it's cell
  */

function setObjectPosition(object, info, rowNum, columnNum, cellSpace, floorLength) {

  /** We'll check the object type and adjust it's y position for it to be flush
    * with the floor. Then we'll get it's width/depth and calculate random
    * positions for them inside the cell.
    */

  switch ( info.type ) {

    case 'box':

      // Random x based on object's row, column and cell space

      const boxX = getRandomNumber(
          columnNum * cellSpace + info.width / 2 - floorLength / 2,
          ( columnNum + 1 ) * cellSpace - info.width / 2 - floorLength / 2
        ),
        // We need to lift the box to it's height to make it flush with the floor
        boxY = info.height / 2,
        boxZ = getRandomNumber(
          rowNum * cellSpace + info.depth / 2 - floorLength / 2,
          ( rowNum + 1 ) * cellSpace - info.depth / 2 - floorLength / 2
        );

      object.position.set( boxX, boxY, boxZ );

      break;
    case 'sphere':
    case 'octahedron':

      // We'll adjust the sphere/octahedron position based mostly on it's radius

      const objX = getRandomNumber(
          columnNum * cellSpace + info.radius - floorLength / 2,
          ( columnNum + 1 ) * cellSpace - info.radius - floorLength / 2
        ),
        objY = info.radius,
        objZ = getRandomNumber(
          rowNum * cellSpace + info.radius - floorLength / 2,
          ( rowNum + 1 ) * cellSpace - info.radius - floorLength / 2
        );

      object.position.set( objX, objY, objZ );

      break;
    case 'cone':

      /**
        * With cone the same concepts applies as for the sphere,
        * except for the height
        */

      const coneX = getRandomNumber(
          columnNum * cellSpace + info.radius - floorLength / 2,
          ( columnNum + 1 ) * cellSpace - info.radius - floorLength / 2
        ),
        coneY = info.height / 2,
        coneZ = getRandomNumber(
          rowNum * cellSpace + info.radius - floorLength / 2,
          ( rowNum + 1 ) * cellSpace - info.radius - floorLength / 2
        );

      object.position.set( coneX, coneY, coneZ );

      break;
    case 'cylinder':

      // The radius we'll use is the larget, so we check for it ( top vs bottom )

      const largeRadius =
        info.radiusTop >= info.radiusBottom ? info.radiusTop : info.radiusBottom,
        cylinderX = getRandomNumber(
          columnNum * cellSpace + largeRadius - floorLength / 2,
          ( columnNum + 1 ) * cellSpace - largeRadius - floorLength / 2
        ),
        cylinderY = info.height / 2,
        cylinderZ = getRandomNumber(
          rowNum * cellSpace + largeRadius - floorLength / 2,
          ( rowNum + 1 ) * cellSpace - largeRadius - floorLength / 2
        );

      object.position.set( cylinderX, cylinderY, cylinderZ );

      break;
    case 'torus':

      // For the torus we'll need to calculate the total radius of the object

      const totalRadius = info.radius + info.tube,
        torusX = getRandomNumber(
          columnNum * cellSpace + totalRadius - floorLength / 2,
          ( columnNum + 1 ) * cellSpace - totalRadius - floorLength / 2
        ),
        torusY = totalRadius,
        torusZ = getRandomNumber(
          rowNum * cellSpace + totalRadius - floorLength / 2,
          ( rowNum + 1 ) * cellSpace - totalRadius - floorLength / 2
        );

      object.position.set( torusX, torusY, torusZ );

      break;
    default:
      console.log( 'Warning: object type not found' );
      break;
  }

}

export default setObjectPosition;
