
// Importing necessary modules to run on the render function

import updateView from './update-view_module.js';
import checkLightBoundaries from './check-light-boundaries_module.js';
import checkForAllowUpgrade from  './check-for-allow-upgrade_module.js';

/**
  * This function will render the 3D space continously
  */

function render(interfaceCtrl) {

  // Updating bulb light properties

  interfaceCtrl.lights.pointLight.bulb.power =
    interfaceCtrl.lights.pointLight.bulbPower;

  // convert from intensity to irradiance at bulb surface

	interfaceCtrl.lights.pointLight.bulbMaterial.emissiveIntensity =
    interfaceCtrl.lights.pointLight.bulb.intensity / Math.pow( 0.02, 2.0 );

  // Updating the user controlled light's position and checking it's boundaries

  updateView(
    interfaceCtrl.lights.pointLight,
    interfaceCtrl.camera,
    interfaceCtrl.controls,
    interfaceCtrl.levels[ interfaceCtrl.user.level ].lightSpeed,
    interfaceCtrl.user
  );

  // Checking light boundaries

  checkLightBoundaries( interfaceCtrl.lights.pointLight );

  // Checking if we can allow upgrade

  checkForAllowUpgrade( interfaceCtrl.user );

  // Rendering the scene

  interfaceCtrl.renderer.render(
    interfaceCtrl.scene,
    interfaceCtrl.camera
  );

  // Recursive call

  window.requestAnimationFrame(
    function recursiveCall() {
      render( interfaceCtrl );
    }
  );

}

// Exporting render function

export default render;
