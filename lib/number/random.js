module.exports = function random(x, y) {
	if(!x && !y) throw new Error("Максимальное число является обязательным");

	let min = 0; max = 0;

	if(!y && x) {
		min = 0;
		max = x;
	} else {
		min = x;
		max = y;
	};

	if(min && typeof max != "number") throw new TypeError("Минимальное и максимальное значение должно быть числом");
	if(typeof max != "number") throw new TypeError("Минимальное и максимальное значение должно быть числом");

	return max ? Math.round(Math.random() * (max - min)) + min : Math.round(Math.random() * min);
};