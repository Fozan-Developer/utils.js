module.exports = function username(argument) {
	const regexp = /^[a-z0-9_-]{3,16}$/;

	return regexp.test(argument);
};