
// Main script for importing assets, modules, etc and to manage the application.

// Requiring THREEJS

const THREE = require( 'three' );

// Importing markup, styles and modules

import './index.html'
import './scss/styles.scss';
import init from './modules/init_module.js';
import createObjects from './modules/create-objects_module.js';
import render from './modules/render_module.js';
import handleWindowResize from './modules/handle-window-resize_module.js';
import createLights from './modules/create-lights_module.js';
import handleLightControl from './modules/handle-light-control_module.js';

window.addEventListener( 'load', function someAction() {

  const interfaceCtrl = init();

  // Creating objects

  createObjects( interfaceCtrl );

  // Creating lights

  createLights( interfaceCtrl );

  // Functions to handle window resize, light control and light upgrade

  handleWindowResize( window, interfaceCtrl );
  handleLightControl(
    window,
    interfaceCtrl.lights.pointLight,
    interfaceCtrl.user,
    interfaceCtrl.levels
  );

  // Starting render loop

  render( interfaceCtrl );

} );
