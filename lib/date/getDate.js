module.exports = function getDate(timeStamp) {
	let date = new Date(timeStamp);
	date = date.toLocaleString("ru").split(',');
	return date;
};