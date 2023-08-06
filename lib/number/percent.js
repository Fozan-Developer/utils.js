module.exports = function percent(currentValue, targetValue) {
	if(currentValue == undefined || targetValue == undefined) throw new Error("Нет обязательных аргументов");
	if(typeof currentValue != "number" || typeof targetValue != "number") throw new TypeError("Оба аргумента должны быть числами");

	currentValue = currentValue.toString();
	targetValue = targetValue.toString();

	return Math.trunc((currentValue/targetValue)*100);
};