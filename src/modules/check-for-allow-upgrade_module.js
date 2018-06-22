
// Importing module to create messages to the user

import createMessage from './create-message_module.js';

/**
  * This function will check if the user can upgrade based on the distance
  * traveled. If he can, we augment the upgrade stock.
  */

const checkForAllowUpgrade = (function returnAllowUpgradeChecker() {

  /** Private object for reference to check whether the user has already
    * traveled a certain distance
    */

  const upgradeReference = {
    upgradeIndex: 0,
    levels: [
      {
        upgradeAllowed: false,
        distanceRequired: 1000
      }, {
        upgradeAllowed: false,
        distanceRequired: 8000
      }
    ]
  }

  // Returning actual checker

  return function upgradeChecker(windowObj, userData) {

    const levelToUpgrade = upgradeReference.levels[ upgradeReference.upgradeIndex ];

    // Checking if user has reached the checkpoint distance to allow upgrade

    if ( levelToUpgrade && !levelToUpgrade.upgradeAllowed &&
         userData.distanceTraveled >= levelToUpgrade.distanceRequired )
    {
      levelToUpgrade.upgradeAllowed = true;
      upgradeReference.upgradeIndex++;
      userData.upgradeStock++;
      createMessage( 'Upgrade Available', '', 6000, windowObj );
    }

  }

})();

export default checkForAllowUpgrade;
