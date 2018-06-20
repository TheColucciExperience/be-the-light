
// Getting THREEJS and Orbit Control

const THREE = require( 'three' );
import OrbitControls from 'orbit-controls-es6';

/**
  * This function will init the application and return an interface
  * object containing the main interface properties.
  */

function init() {

  // Interface object to return

  const interfaceCtrl = {
    renderer: new THREE.WebGLRenderer( {
      canvas: document.querySelector( '.main-canvas' )
    } ),
    camera: new THREE.PerspectiveCamera(
      70,                                         // FOV
      window.innerWidth / window.innerHeight,     // Aspect Ratio
      .1,                                         // Near
      3000                                        // Far
    ),
    scene: new THREE.Scene(),
    objects: {
      floor: null,
      randomObjects: []
    },
    info: {
      objectsSpace: 100,
      floorSideLength: 500
    }
    lights: {}
  };

  // Interface orbit controls and it's configurations

  interfaceCtrl.controls = new OrbitControls(
    interfaceCtrl.camera, document.querySelector( '.main-canvas' )
  );
  interfaceCtrl.controls.enableKeys = false;
  interfaceCtrl.controls.enablePan = false;

  // Settings for interface contents

  // Renderer config

  interfaceCtrl.renderer.physicallyCorrectLights = true;
	interfaceCtrl.renderer.gammaInput = true;
	interfaceCtrl.renderer.gammaOutput = true;
  interfaceCtrl.renderer.shadowMap.enabled = true;
  // To allow for very bright scenes.
  interfaceCtrl.renderer.toneMappingExposure = .65;
	interfaceCtrl.renderer.toneMapping = THREE.ReinhardToneMapping;
	interfaceCtrl.renderer.setPixelRatio( window.devicePixelRatio );
	interfaceCtrl.renderer.setSize( window.innerWidth, window.innerHeight );

  // Camera initial position settings

  interfaceCtrl.camera.position.set( 0, 150, 100 );

  // Returning interface control object

  return interfaceCtrl;

}

export default init;
