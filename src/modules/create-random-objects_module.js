
// Requiring THREEJS

const THREE = require( 'three' );

// Importing modules to create random object

import createRandomObjectGeometry from './create-random-object-geometry_module.js';
import createRandomObjectMaterial from './create-random-object-material_module.js';
import setObjectPosition from './set-object-position_module.js';

// Function to create random objects on scene

function createRandomObjects(interfaceCtrl, objectsSpace, floorLength) {

	/**
		* We'll get the approximate object cell number for each row/column
		* based on the floor length and each object space. E.g 5 means a 5x5 grid,
		* that means 25 cells of objectsSpace * objectsSpace area.
		*/

	const objectsCellNum = Math.floor( floorLength / objectsSpace );

	// We'll create objects will random properties including form, color, etc

	for ( let i = 0; i < objectsCellNum; i++ ) {

		// We'll need this loop to each column in a row

		for ( let j = 0; j < objectsCellNum; j++ ) {

			/**
			 	* This object geometry data will hold the object's geometry and
				* the info data, so we can place it in the plane in the right position
				* for it's form. We'll get it in the returning value of the
				* createRandomObjectGeometry function.
				*/

			const objectGeometryData = createRandomObjectGeometry();

			// We'll randomly create the properties of each object

			const object = new THREE.Mesh(
				objectGeometryData.geometry,
				createRandomObjectMaterial()
			);

			// Configuring object shadow properties

			object.castShadow = true;
			object.receiveShadow = true;

			// Positioning object based on it's geometry and it's properties

			setObjectPosition(
				object,
				objectGeometryData.info,
				i,
				j,
				objectsSpace,
				floorLength
			);

			/**
				* Pushing the object to the interface control, just in case we
				* need to reference it later
				*/

			interfaceCtrl.objects.randomObjects.push( object );

			// We won't change the object's position, so we disable auto update

			object.matrixAutoUpdate  = false;
			object.updateMatrix();

			// Finally adding object to the scene

			interfaceCtrl.scene.add( object );

		}

	}

}

export default createRandomObjects;
