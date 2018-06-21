
/**
  * This function will create messages to the user and hide them after a certain
  * timeout.
  */

function createMessage(
  title = 'Upgrade Available',
  text = '',
  isAnimated = false,
  timeout = 4000,
  windowObj
) {

  // Creating DOM elements and getting messages container

  const messagesContainer =
    windowObj.document.querySelector( '.b-messages-container' ),
    messageBox = windowObj.document.createElement( 'section' ),
    boxTitle = windowObj.document.createElement( 'h3' );

  // Adding classes to elements

  messageBox.classList.add( 'b-message-box' );
  boxTitle.classList.add( 'b-message-box__title' );

  if ( isAnimated ) {
    messageBox.classList.add( 'b-message-box--animated' );
  }

  // Adding content to title

  boxTitle.textContent = title;

  // Appending items

  messagesContainer.appendChild( messageBox );
  messageBox.appendChild( boxTitle );

  // Create message text, if any

  if ( text.trim() ) {

    const boxText = document.createElement( 'p' );
    boxText.classList( 'b-message-box__text' );
    boxText.textContent = text;
    messageBox.appendChild( boxText );

  }

  // Animating message box

  messageBox.style.animation = 'slideFromLeft .5s ease forwards';

  // Box timeout variable to check for minimum timeout length

  const boxTimeout = timeout >= 4000 ? timeout : 4000;

  // Timeout to hide the message box

  window.setTimeout( function startBoxHideAnimation() {

    messageBox.style.animation = 'slideToLeft .5s ease forwards';

    // Timeout to remove box from it's container

    window.setTimeout( function hideBox() {
      messagesContainer.removeChild( messageBox );
    }, 500 );

  }, boxTimeout );

}

export default createMessage;
