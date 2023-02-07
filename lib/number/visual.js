function division(argument) {
	const { division } = argument;
	var number = argument.number.toString();

	return number.split('').reverse().join('').match(/[0-9]{1,3}/g).join(division == undefined ? "" : division).split('').reverse().join('');
};

function word(argument) {
	const { number } = argument;

	let fixed = 0;
	if (number == null) return null;
	if (number == 0) return 0;
	fixed = (!fixed || fixed < 0) ? 0 : fixed;
	let b = (number).toPrecision(2).split('e'),
		k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
		c = k < 1 ? number.toFixed(0 + fixed) : (number / Math.pow(10, k * 3) ).toFixed(1 + fixed),
		d = c < 0 ? c : Math.abs(c),
		e = d + ['', 'K', 'M', 'B', 'T'][k];

		e = e.replace(/e/g, '');
		e = e.replace(/\+/g, '');
		e = e.replace(/Infinity/g, '∞');

	return e;
};

module.exports = function visual(argument) {
	const { type, number } = argument;
	if(!type || !number) throw new Error("Отсутствует поле type или number");
	if(typeof type != "string") throw new TypeError("Поле type должно быть строкой");
	if(typeof number != "number") throw new TypeError("Поле number должно быть числом");

	if(type == "division") return division_number(argument);
	if(type == "word") return word_number(argument);

	return;
};