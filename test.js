const { numberToEmoji } = require('./index').number;

// Example usage:
const number = 1234567;
const divider = ',';

const result = numberToEmoji(number);
console.log(result); // "1,234,567"