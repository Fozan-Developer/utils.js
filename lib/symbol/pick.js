const random = require('../number/random.js');

/**
 * Picks a random element from the provided array.
 * @param {Array} array - The array from which to pick a random element.
 * @returns {*} - A randomly selected element from the array.
 * @throws {Error} - If the input array is undefined or null.
 * @throws {TypeError} - If the input is not an array.
 */
module.exports = function pick(array) {
    if (!array) {
        throw new Error("Argument 'array' is required");
    }
    if (!Array.isArray(array)) {
        throw new TypeError("Argument 'array' must be an array");
    }

    return array[random(array.length - 1)];
};
