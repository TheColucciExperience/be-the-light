
/**
  * These functions will handle adding the close greeting listener to the
  * greetings close button and actually close it
  */

function handleHideGreeting(windowObj, userData) {

  // Adding close listener to greetings button

  windowObj
    .document
    .querySelector( '.js-greetings-btn' )
    .addEventListener(
      'click',
      function callHideGreeting() {
        hideGreeting( windowObj, userData );
      }
    );

}

function hideGreeting(windowObj, userData) {

  // Getting refences to DOM elements which we need to manipulate

  const greetingsContainer =
    windowObj.document.querySelector( '.js-greetings-container' ),
    greetingsSection =
    windowObj.document.querySelector( '.js-greetings-section' );

  greetingsContainer.style.animation = 'fadeOut .4s ease forwards';
  greetingsSection.style.animation = 'slideToTop .4s ease forwards';
  userData.canMove = true;

  // Hiding greetings container

  window.setTimeout( function hideContainer() {
    greetingsContainer.style.display = 'none';
  }, 400 );

}

export default handleHideGreeting;
