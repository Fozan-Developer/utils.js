module.exports = function number(int) {
	if(!int || typeof int != "number") throw new Error("Не указан аргумент или аргумент не является числом");
	int = String(int);

	let res = "";
	for(i in int) {
		if(int[i] == 0) res += "0️⃣";
		if(int[i] == 1) res += "1️⃣";
		if(int[i] == 2) res += "2️⃣";
		if(int[i] == 3) res += "3️⃣";
		if(int[i] == 4) res += "4️⃣";
		if(int[i] == 5) res += "5️⃣";
		if(int[i] == 6) res += "6️⃣";
		if(int[i] == 7) res += "7️⃣";
		if(int[i] == 8) res += "8️⃣";
		if(int[i] == 9) res += "9️⃣";
	};

	return res;
};
