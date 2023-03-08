module.exports = function isbn(argument) {
	const regexp = /\b(?:ISBN(?:: ?| ))?((?:97[89])?\d{9}[\dx])\b/i;

	return regexp.test(argument);
};