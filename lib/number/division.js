module.exports = function division(number, divider) {
    // Validate the input types
    if (typeof number !== "number") throw new TypeError("The 'number' parameter must be a number");
    if (typeof divider !== "string") throw new TypeError("The 'divider' parameter must be a string");

    // Convert number to string and reverse it
    const numStr = number.toString().split('').reverse().join('');

    // Match groups of 1 to 3 digits
    const parts = numStr.match(/[0-9]{1,3}/g);

    // Join the parts with the divider and reverse the string back
    const result = parts.join(divider).split('').reverse().join('');

    return result;
};
