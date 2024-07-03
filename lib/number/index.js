// Importing number utility functions from their respective files
const division = require('./division');
const random = require('./random');
const percent = require('./percent');
const even = require('./isEven');
const suffix = require('./suffix');
const isNumber = require('./isNumber');
const numberToEmoji = require('./numberToEmoji');

// Exporting all number utility functions as a single object
module.exports = { division, random, percent, even, suffix, isNumber, numberToEmoji };
