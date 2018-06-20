
// Getting THREEJS

const THREE = require( 'three' );

/**
 * This function will create the lights for the 3D environment, including
 * the hemisphere light and the point light which the user will control
 */

function createLights(interfaceCtrl) {

  // Creating hemisphere light

  interfaceCtrl.lights.hemisphereLight =
    new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 0.02 );
  interfaceCtrl.lights.hemisphereLight.intensity = .0001;

  // Creating user controlled point light

  interfaceCtrl.lights.pointLight = {
    bulb: new THREE.PointLight( 0xffee88, 1, 150, 2 ),
    bulbPower: interfaceCtrl.levels[ interfaceCtrl.user.level ].lightPower,
    bulbGeometry: new THREE.SphereBufferGeometry( 1.2, 100, 100 ),
    bulbMaterial: new THREE.MeshStandardMaterial( {
      emissive: 0xffffee,
      emissiveIntensity: 1,
      color: 0x000000
    }),
    bulbSpeed: interfaceCtrl.levels[ interfaceCtrl.user.level ].lightSpeed,
    bulbBias: -.001,
    userControl: {
      movingLeft: false,
      movingRight: false,
      movingForward: false,
      movingBackward: false,
      movingUp: false,
      movingDown: false
    }
  };

  // Adding mesh to point light and adjusting it's settings

  interfaceCtrl.lights.pointLight.bulb.add( new THREE.Mesh(
    interfaceCtrl.lights.pointLight.bulbGeometry,
    interfaceCtrl.lights.pointLight.bulbMaterial
  ) );
  interfaceCtrl.lights.pointLight.bulb.position.set( 0, 50, 0 );
  interfaceCtrl.lights.pointLight.bulb.castShadow = true;
  interfaceCtrl.lights.pointLight.bulb.shadow.bias =
    interfaceCtrl.lights.pointLight.bulbBias;

  // Adding lights to scene

	interfaceCtrl.scene.add(
    interfaceCtrl.lights.hemisphereLight,
    interfaceCtrl.lights.pointLight.bulb
  );

}

// Exporting createLights function

export default createLights;
