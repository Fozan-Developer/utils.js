module.exports = function formatNumberWithSuffix(number) {
    // Check if the argument is a number
    if (typeof number !== "number") {
        throw new TypeError("Argument must be a number");
    }

    // Handle cases for null and zero
    if (number === null) return null;
    if (number === 0) return "0";

    // Define the number of decimal places
    let fixed = 0;

    // Calculate the exponent for suffix calculation
    let exponent = Math.floor(Math.log10(Math.abs(number)) / 3);
    // Normalize the number based on the exponent
    let normalizedNumber = (number / Math.pow(10, exponent * 3)).toFixed(fixed);
    // Determine the suffix based on the exponent
    let suffix = ['', 'K', 'M', 'B', 'T'][exponent];

    // Replace non-numeric characters
    let formattedNumber = normalizedNumber.replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1");

    // Return the formatted number with suffix
    return formattedNumber + suffix;
};
