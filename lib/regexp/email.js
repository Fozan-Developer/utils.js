module.exports = function email(argument) {
	const regexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

	return regexp.test(argument);
};