// Importing modules from their respective directories
const number = require('./lib/number');
const date = require('./lib/date');
const symbol = require('./lib/symbol');
const declination = require('./lib/declination');
const regexp = require('./lib/regexp');
const parse = require('./lib/parse');

// Exporting all modules as a single object
module.exports = { number, date, symbol, declination, regexp, parse };
