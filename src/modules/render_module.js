
/**
  * This function will render the 3D space continously
  */

function render(interfaceCtrl) {

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
