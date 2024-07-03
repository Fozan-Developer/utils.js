module.exports = function percent(currentValue, targetValue) {
    // Validate input parameters
    if (currentValue === undefined || targetValue === undefined) {
        throw new Error("Required arguments are missing");
    }
    if (typeof currentValue !== "number" || typeof targetValue !== "number") {
        throw new TypeError("Both arguments must be numbers");
    }

    // Calculate the percentage
    const percentage = Math.trunc((currentValue / targetValue) * 100);

    return percentage;
};
