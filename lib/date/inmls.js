/**
 * Converts time units to milliseconds based on the provided type.
 * @param {number} time - Time value to convert.
 * @param {string} type - Type of conversion ('s' for seconds, 'm' for minutes, 'h' for hours, 'd' for days).
 * @returns {number} - Time converted to milliseconds.
 * @throws {Error} - If required fields are missing or if type is invalid.
 * @throws {TypeError} - If time is not a number.
 */
module.exports = function inmls(time, type) {
    // Check if required fields are present
    if (!time || !type) throw new Error("Required fields are missing");

    // Validate type argument
    if (typeof time !== "number") throw new TypeError("Field 'time' must be a number");
    if (!["s", "m", "h", "d"].includes(type)) throw new TypeError("Invalid 'type' argument");

    // Convert time to milliseconds based on type
    let milliseconds;
    switch (type) {
        case 's':
            milliseconds = time * 1000;
            break;
        case 'm':
            milliseconds = time * 60000;
            break;
        case 'h':
            milliseconds = time * 3600000;
            break;
        case 'd':
            milliseconds = time * 86400000;
            break;
        default:
            throw new Error("Invalid 'type' argument");
    }

    return Number(milliseconds); // Ensure the result is returned as a number
};
