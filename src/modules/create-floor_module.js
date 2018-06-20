
// This function will create the scene floor

function createFloor(interfaceCtrl) {

	// Floor geometry

  const floorGeo = new THREE.PlaneBufferGeometry( 1000, 1000 );

  // Creating floor material with texture and bump map

  const floorMat = new THREE.MeshStandardMaterial( {
		roughness: 0.8,
		color: 0xffffff,
		metalness: 0.2,
		bumpScale: 0.0005,
    side: THREE.DoubleSide
	});

  // Loading floor texture , bump map and roughness map

	const textureLoader = new THREE.TextureLoader();


	textureLoader.load( './images/wood-floor_texture.jpg' , function( map ) {
		map.wrapS = THREE.RepeatWrapping;
		map.wrapT = THREE.RepeatWrapping;
		map.anisotropy = 4;
		map.repeat.set( 10, 24 );
		floorMat.map = map;
		floorMat.needsUpdate = true;
	} );

  textureLoader.load( './images/wood-floor_bump.jpg', function( map ) {
		map.wrapS = THREE.RepeatWrapping;
		map.wrapT = THREE.RepeatWrapping;
		map.anisotropy = 4;
		map.repeat.set( 10, 24 );
		floorMat.bumpMap = map;
		floorMat.needsUpdate = true;
	} );

	textureLoader.load( './images/wood-floor_roughness.jpg', function( map ) {
		map.wrapS = THREE.RepeatWrapping;
		map.wrapT = THREE.RepeatWrapping;
		map.anisotropy = 4;
		map.repeat.set( 10, 24 );
		floorMat.roughnessMap = map;
		floorMat.needsUpdate = true;
	} );

  // The actual floor

  interfaceCtrl.objects.floor = new THREE.Mesh( floorGeo, floorMat );

  /**
   * Rotating the floor to make it the right angle on scene and
   * adding the ability for it to receive light
   */

  interfaceCtrl.objects.floor.rotation.x -= Math.PI / 2;
  interfaceCtrl.objects.floor.receiveShadow = true;

  // Adding objects to scene

  interfaceCtrl.scene.add(
    interfaceCtrl.objects.floor
  );

}

export default createFloor;
