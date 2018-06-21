
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
import showGreeting from './modules/show-greeting_module.js';
import handleHideGreeting from './modules/handle-hide-greeting_module.js';
import handleLightColorChange from './modules/handle-light-color-change_module.js';

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

  // Functions to show initial greeting message and hide it on user click

  showGreeting( window );
  handleHideGreeting( window, interfaceCtrl.user );

  // This function will handle changing the light color

  handleLightColorChange( window, interfaceCtrl.lights.pointLight );

  // Starting render loop

  render( window, interfaceCtrl );

} );
