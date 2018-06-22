
// Importing necessary modules

import moveLight from './move-light_module.js';
import upgradeLight from './upgrade-light_module.js';

// Functions to handle small controller actions

function handleSmallController(windowObj, userData, lightObj, levels) {

  Array
    .from(
      windowObj
        .document
        .querySelectorAll( '.js-sm-control-btn' )
    )
    .forEach(
      function addListenersToButton(button) {

        button.addEventListener(
          'touchstart',
          function callAction(e) {

            e.preventDefault();

            // Small button animation

            button.style.top = '.2rem';

            if ( button.dataset.command === 'upgrade' &&
                 userData.upgradeStock > 0)
            {
              upgradeLight( userData, lightObj, levels );
            }
            else {
              moveLight(
                button.dataset.command,
                lightObj,
                true
              );
            }

          }
        );

        button.addEventListener(
          'touchend',
          function callAction(e) {

            e.preventDefault();

            button.style.top = '0';

            if ( !button.dataset.command !== 'upgrade' ) {
              moveLight(
                button.dataset.command,
                lightObj,
                false
              );
            }

          }
        );

      }
    );

}

export default handleSmallController;
