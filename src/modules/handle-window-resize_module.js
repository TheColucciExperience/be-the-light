
// Function to update interface aspects on resize

function manageResize(interfaceCtrl) {

  /**
   * We'll need to update the camera aspect ratio, projection matrix and
   * renderer size
   */

  interfaceCtrl.camera.aspect = window.innerWidth / window.innerHeight;
  interfaceCtrl.camera.updateProjectionMatrix();
  interfaceCtrl.renderer.setSize( window.innerWidth, window.innerHeight );

}

// Function to add listener to handle window resize

function handleWindowResize(windowObj, interfaceCtrl) {

  windowObj.addEventListener( 'resize', function handleResize() {
    manageResize( interfaceCtrl );
  } );

}

export default handleWindowResize;
