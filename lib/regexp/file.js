module.exports = function file(argument) {
	const regexp = /^(?:.*\.(?=(htm|html|class|js)$))?[^.]*$/i;

	return regexp.test(argument);
};