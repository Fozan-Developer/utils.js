module.exports = function percent(x, y) {
	if(!x || !y) throw new Error("Нет обязательных аргументов");
	if(typeof x != "number" || typeof y != "number") throw new TypeError("Оба аргумента должны быть числами");

	x = x.toString();
	y = y.toString();
	let res = (x/y);
	res = Math.trunc(res*100);
	return `${res} %`;
};