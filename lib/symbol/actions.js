const pick = require('./pick.js');

module.exports = function actions(action) {
	if(!action) throw new Error("Поле action обязательное");

	if(action != "sucs" && action != "fail") throw new TypeError("Поле action должно быть sucs или fail");

	const success = pick(['☑️', '✅', '🆗', '✔️']);
	const failure = pick(['✖️', '➖', '🙅‍♂️', '🙅', '🙅‍♀️', '⛔️', '📛', '🚫']);

	if(action == "sucs") return success;
	if(action == "fail") return failure;
};