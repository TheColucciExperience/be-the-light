
// Function to create random objects on scene

function createRandomObjects(interfaceCtrl, objectsSpace, floorLength) {

	/**
		* We'll get the approximate object cell number for each row/column
		* based on the floor length and each object space
		*/

	const objectsCellNum = Math.floor( floorLength / objectsSpace );

	// We'll create objects will random properties including form, color, etc

	for ( let i = 0; i < objectsCellNum; i++ ) {

		// We'll need this loop to each column in a row

		for ( let j = 0; j < objectsCellNum; i++ ) {

			// We'll randomly create the properties of each object

			const object = new THREE.Mesh(
				createRandomObjectGeometry( i, j ),
				createRandomObjectMaterial()
			);

			// Configuring object shadow properties

			object.castShadow = true;
			object.receiveShadow = true;

			/**
				* Pushing the object to the interface control, just in case we
				* need to reference it later
				*/

			interfaceCtrl.objects.randomObjects.push( object );

			// Finally adding object to the scene

			interfaceCtrl.scene.add( object );

		}		

	}

}

export default createRandomObjects;