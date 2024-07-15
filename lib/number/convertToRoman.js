function convertToRoman(num) {
    // Array of Roman numerals and their corresponding values
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    // String to hold the result Roman numeral
    let result = '';

    // Iterate over the Roman numerals array
    for (let i = 0; i < romanNumerals.length; i++) {
        // While the current value can be subtracted from num
        while (num >= romanNumerals[i].value) {
            // Add the corresponding Roman symbol to the result
            result += romanNumerals[i].symbol;
            // Subtract the value from num
            num -= romanNumerals[i].value;
        }
    }

    // Return the final Roman numeral representation
    return result;
}