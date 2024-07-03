module.exports = function random(x, y) {
    // Validate the input parameters
    if (x === undefined) throw new Error("The maximum number is required");
    if (y === undefined && typeof x !== "number") throw new TypeError("The 'x' parameter must be a number");
    if (y !== undefined && (typeof x !== "number" || typeof y !== "number")) throw new TypeError("Both 'x' and 'y' parameters must be numbers");

    // Set min and max values
    const min = (y === undefined) ? 0 : x;
    const max = (y === undefined) ? x : y;

    // Return a random number between min and max
    return Math.round(Math.random() * (max - min)) + min;
};
