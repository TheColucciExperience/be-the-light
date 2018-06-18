
// Main script for importing assets, modules, etc and to manage the application.

// Requiring THREEJS

const THREE = require( 'three' );

import './index.html'
import './scss/styles.scss';
import init from './modules/init_module.js';
import createObjects from './modules/create-objects_module.js';
import render from './modules/render_module.js';
import handleWindowResize from './modules/handle-window-resize_module.js';

window.addEventListener( 'load', function someAction() {

  const interfaceCtrl = init();

  // Creating objects

  createObjects( interfaceCtrl );

  // Function to handle window resize

  handleWindowResize( window, interfaceCtrl );

  // Starting render loop

  render( interfaceCtrl );

  // **** Temporary tests

  const boxGeometry = new THREE.BoxGeometry( 100, 100, 100 );
  const boxMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
  const box = new THREE.Mesh( boxGeometry, boxMaterial );
  box.position.y += 50;
  box.castShadow = true;
  box.receiveShadow = true;

  // To see things before official light gets finished

  const light = new THREE.PointLight( 0xffffff, 1 );
  light.position.set( 100, 200, 0 );
  light.castShadow = true;

  interfaceCtrl.scene.add( box, light );

  interfaceCtrl.renderer.render( interfaceCtrl.scene, interfaceCtrl.camera );

} );
