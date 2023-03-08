module.exports = function url(argument) {
	const urlAPI = require('url');

	return urlAPI.parse(argument);
};