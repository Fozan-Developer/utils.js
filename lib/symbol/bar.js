function stars(calc) {
	if(calc < 15) { var res = `☆☆☆☆☆` };
	if(calc >= 15 && calc < 30) { var res = `✯☆☆☆☆` };
	if(calc >= 30 && calc < 50) { var res = `★✯☆☆☆` };
	if(calc >= 50 && calc < 70) { var res = `★★✯☆☆` };
	if(calc >= 70 && calc < 90) { var res = `★★★✯☆` };
	if(calc >= 90 && calc < 100) { var res = `★★★★✯` };
	if(calc == 100) { var res = `★★★★★` };

	return res;
};

function squares(calc) {
	if(calc < 10) { var res = `▫▫▫▫▫▫▫▫▫▫` };
	if(calc >= 10 && calc < 20) { var res = `▪▫▫▫▫▫▫▫▫▫` };
	if(calc >= 20 && calc < 30) { var res = `▪▪▫▫▫▫▫▫▫▫` };
	if(calc >= 30 && calc < 40) { var res = `▪▪▪▫▫▫▫▫▫▫` };
	if(calc >= 40 && calc < 50) { var res = `▪▪▪▪▫▫▫▫▫▫` };
	if(calc >= 50 && calc < 60) { var res = `▪▪▪▪▪▫▫▫▫▫` };
	if(calc >= 60 && calc < 70) { var res = `▪▪▪▪▪▪▫▫▫▫` };
	if(calc >= 70 && calc < 80) { var res = `▪▪▪▪▪▪▪▫▫▫` };
	if(calc >= 80 && calc < 90) { var res = `▪▪▪▪▪▪▪▪▫▫` };
	if(calc >= 90 && calc < 100) { var res = `▪▪▪▪▪▪▪▪▪▫` };
	if(calc == 100) { var res = `▪▪▪▪▪▪▪▪▪▪` };

	return res;
};

module.exports = function bar(argument) {
	const { current, maximum, type } = argument;

	if(!current || !maximum || !type) throw new Error("Аргументы current, maximum, type обязательны");

	if(typeof current != "number" || typeof maximum != "number") throw new TypeError("Поля current и maximum должны быть числом");
	if(current > maximum) throw new Error("Поле current не может быть больше maximum");

	if(type != "squares" && type != "stars") throw new TypeError("Поле type должно быть или squares или stars");

	let calc = eval(current/maximum);
	calc = eval(calc*100);

	if(type == "stars") return stars(calc);
	if(type == "squares") return squares(calc);
};