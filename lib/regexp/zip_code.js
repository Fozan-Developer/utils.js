module.exports = function zip_code(country, code) {
	if(!country || !code) throw new Error("Обязательными полями являются country и code");

	country = country.toUpperCase();

	if(country == "RUS") {
		const regexp = /^\d{6}$/;

		return regexp.test(code);
	};

	if(country == "USA") {
		const regexp = /^\d{5}(?:[-\s]\d{4})?$/;

		return regexp.test(code);
	};

	return false;
};