const random = require('../number/random.js');

module.exports = function pick(array) {
	if(!array) throw new Error("Нет обязательного поля array");
	if(Array.isArray(array) == false) throw new TypeError("Поле должно быть массивом");

	return array[random(array.length - 1)];
};