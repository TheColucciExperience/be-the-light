
// This function will upgrade the user controlled light

function upgradeLight(userData, lightObj, levels) {

  // Upgrading user level and updating light's properties

  userData.level++;
  lightObj.bulb.bulbSpeed = levels[ userData.level ].lightSpeed;
  lightObj.bulb.bulbPower = levels[ userData.level ].lightPower;
  console.log( 'upgraded' );

  // Update for DOM manipulations later

}

export default upgradeLight;
