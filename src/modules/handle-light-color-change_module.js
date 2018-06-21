
// Requiring THREEJS for color manipulation

const THREE = require( 'three' );

// These functions will handle the light color changes by the user

function handleLightColorChange(windowObj, lightObj) {

  // Adding listener to input on change

  windowObj
    .document
    .querySelector( '.js-light-color-input' )
    .addEventListener(
      'change',
      function callLightColorChange(e) {
        changeLightColor( lightObj, e.target.value );
      }
    );

}

function changeLightColor(lightObj, lightColor) {

  lightObj.bulb.color.set( lightColor );

  // Not working, adjust later

  lightObj.bulbMaterial.emissive.set( lightColor );

}

export default handleLightColorChange;
