
/**
	* This will be a utility function to return a pseudo-random
	* number whithin a range
	*/

function getRandomNumber(min, max) {
	return Math.floor( Math.random() * (max - min + 1) ) + min;
}

export default getRandomNumber;
