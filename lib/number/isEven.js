module.exports = function isEven(number) {
    if (Number.isInteger(number)) {
        return number % 2 === 0;
    } else {
        return undefined;
    }
};
