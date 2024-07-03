module.exports = function isNumber(value, checkInteger = false) {
    if (typeof value !== 'number' || isNaN(value)) {
        return false;
    }
    if (checkInteger && !Number.isInteger(value)) {
        return false;
    }
    return true;
}
