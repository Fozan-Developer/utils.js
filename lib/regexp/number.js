module.exports = function number(argument) {
	const regexp = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;

	return regexp.test(argument);
};