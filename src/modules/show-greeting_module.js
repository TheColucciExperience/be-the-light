
// This function will show the initial greeting message

function showGreeting( windowObj ) {

  // Getting references to DOM elements

  const greetingsContainer =
    windowObj.document.querySelector( '.js-greetings-container' ),
    greetingsSection =
    windowObj.document.querySelector( '.js-greetings-section' );

  // Showing greetings container and sliding greetings section

  greetingsContainer.style.zIndex = '100';
  greetingsContainer.style.animation = 'fadeIn .4s ease forwards';
  greetingsSection.style.animation = 'slideFromTop .4s ease forwards';

}

export default showGreeting;
