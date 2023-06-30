module.exports = function division(number, division) {
	if(typeof number != "number") throw new TypeError("Поле number должно быть числом");
	if(typeof division != "string") throw new TypeError("Поле number должно быть строкой");

	var number = number.toString();

	return number.split('').reverse().join('').match(/[0-9]{1,3}/g).join(division == undefined ? "" : division).split('').reverse().join('');
};