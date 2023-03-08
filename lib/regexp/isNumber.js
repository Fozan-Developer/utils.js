module.exports = function isNumber(argument) {
	const regexp = /^\d{1,}$/;

	return regexp.test(argument);
};