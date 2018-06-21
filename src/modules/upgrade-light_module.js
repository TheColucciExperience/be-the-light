
// This function will upgrade the user controlled light

function upgradeLight(userData, lightObj, levels) {

  // Upgrading user level and updating light's properties

  userData.level++;
  userData.upgradeStock--;
  lightObj.bulbSpeed = levels[ userData.level ].lightSpeed;
  lightObj.bulbPower = levels[ userData.level ].lightPower;
  lightObj.bulb.power = lightObj.bulbPower; 

  // Update for DOM manipulations later

}

export default upgradeLight;
