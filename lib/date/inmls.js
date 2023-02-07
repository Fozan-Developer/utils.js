module.exports = function inmls(time, type) {
	if(!time || !type) throw new Error("Отсутствует обязательные поля");

	if(typeof time != "number") throw new TypeError("Поле time должно быть числом");
	if(type != "s" && type != "m" && type != "h" && type != "d") throw new TypeError("Неверный аргумент type");

	if(type == `s`) {
		var res = Number(time*1000);
		return res;
	};
	if(type == `m`) {
		var res = Number(time*60000);
		return res;
	};
	if(type == `h`) {
		var res = Number(time*3600000);
		return res;
	};
	if(type == `d`) {
		var res = Number(time*86400000);
		return res;
	};
};