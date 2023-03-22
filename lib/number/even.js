module.exports = function even(number) {
	if(Number.isInteger(number) == true) {
		return number % 2 == 0;
	} else {
		return undefined;
	};
};