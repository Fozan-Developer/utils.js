module.exports = function number(argument) {
	const { number, first, second, third } = argument;

	if(!number || !first || !second || !third) throw new Error("Какой-то из обязательных аргументов отсутствует");
	if(typeof number != "number") throw new TypeError("Поле number должно быть числом");

	if (String(number).length == 1) {
        if (number == 0) return first;
        if (number == 1) return second;
        if (number == 2) return third;
        if (number == 3) return third;
        if (number == 4) return third;
        if (number == 5) return first;
        if (number == 6) return first;
        if (number == 7) return first;
        if (number == 8) return first;
        if (number == 9) return first;
    };

    if (String(number).length == 2 && String(number)[0] == 1) return first;

    if (String(number).length >= 2) {
        var stringCount = String(number);
        var bigNumber = stringCount[stringCount.length - 1];
        if (bigNumber == 0) return first;
        if (bigNumber == 1) return second;
        if (bigNumber == 2) return third;
        if (bigNumber == 3) return third;
        if (bigNumber == 4) return third;
        if (bigNumber == 5) return first;
        if (bigNumber == 6) return first;
        if (bigNumber == 7) return first;
        if (bigNumber == 8) return first;
        if (bigNumber == 9) return first;
    };
};