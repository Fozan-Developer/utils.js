/**
 * Generates a progress bar using stars or squares based on the current and maximum values.
 * @param {object} argument - An object containing current, maximum, and type of progress bar.
 * @param {number} argument.current - The current value of the progress.
 * @param {number} argument.maximum - The maximum value of the progress.
 * @param {string} argument.type - Specifies the type of progress bar ('squares' or 'stars').
 * @returns {string} - A string representing the progress bar using stars or squares based on the type.
 * @throws {Error} - If current, maximum, or type arguments are missing.
 * @throws {TypeError} - If current or maximum are not numbers, or if type is not 'squares' or 'stars'.
 */
module.exports = function progressBar(argument) {
    const { current, maximum, type } = argument;

    // Validate input parameters
    if (!current || !maximum || !type) {
        throw new Error("Arguments 'current', 'maximum', and 'type' are required");
    }

    if (typeof current !== "number" || typeof maximum !== "number") {
        throw new TypeError("Fields 'current' and 'maximum' must be numbers");
    }

    if (current > maximum) {
        throw new Error("Field 'current' cannot be greater than 'maximum'");
    }

    if (type !== "squares" && type !== "stars") {
        throw new TypeError("Field 'type' must be either 'squares' or 'stars'");
    }

    // Calculate percentage progress
    let calc = (current / maximum) * 100;

    // Choose the progress representation based on type
    if (type === "stars") {
        return stars(calc);
    } else if (type === "squares") {
        return squares(calc);
    }
};

/**
 * Generates a star symbol progress bar based on a percentage value.
 * @param {number} calc - The calculated percentage value (0-100).
 * @returns {string} - Star symbol progress bar string.
 */
function stars(calc) {
    if (calc < 15) return `☆☆☆☆☆`;
    if (calc < 30) return `✯☆☆☆☆`;
    if (calc < 50) return `★✯☆☆☆`;
    if (calc < 70) return `★★✯☆☆`;
    if (calc < 90) return `★★★✯☆`;
    if (calc <= 100) return `★★★★✯`;
}

/**
 * Generates a square symbol progress bar based on a percentage value.
 * @param {number} calc - The calculated percentage value (0-100).
 * @returns {string} - Square symbol progress bar string.
 */
function squares(calc) {
    if (calc < 10) return `▫▫▫▫▫▫▫▫▫`;
    if (calc < 20) return `▪▫▫▫▫▫▫▫▫▫`;
    if (calc < 30) return `▪▪▫▫▫▫▫▫▫▫`;
    if (calc < 40) return `▪▪▪▫▫▫▫▫▫▫`;
    if (calc < 50) return `▪▪▪▪▫▫▫▫▫▫`;
    if (calc < 60) return `▪▪▪▪▪▫▫▫▫▫`;
    if (calc < 70) return `▪▪▪▪▪▪▫▫▫▫`;
    if (calc < 80) return `▪▪▪▪▪▪▪▫▫▫`;
    if (calc < 90) return `▪▪▪▪▪▪▪▪▫▫`;
    if (calc <= 100) return `▪▪▪▪▪▪▪▪▪▫`;
}
