/**
 * Converts a timestamp to a formatted date string in Russian locale.
 * @param {number} timeStamp - Unix timestamp in milliseconds.
 * @returns {string[]} - Array containing formatted date and time parts.
 * @throws {TypeError} - If timeStamp is not a number.
 */
module.exports = function getDate(timeStamp) {
    // Validate timeStamp parameter
    if (typeof timeStamp !== 'number') {
        throw new TypeError('Parameter timeStamp must be a number');
    }

    // Create a new Date object from the provided timestamp
    let date = new Date(timeStamp);

    // Convert the date to a localized string in Russian locale
    let formattedDate = date.toLocaleString('ru');

    // Split the formatted string into date and time parts
    let dateParts = formattedDate.split(',');

    return dateParts;
};
