module.exports = function base64(argument) {
	const regexp = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

	return regexp.test(argument);
};