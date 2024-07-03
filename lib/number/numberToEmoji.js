/**
 * Converts a number to a string of emoji digits.
 * @param {number} number - The number to convert to emoji.
 * @returns {string} - Emoji representation of the number.
 * @throws {Error} - If input is not a number.
 */
module.exports = function numberToEmoji(number) {
    // Check if input is a number
    if (typeof number !== 'number' || isNaN(number)) {
        throw new Error('Input must be a number');
    }
    
    // Convert number to string, then split into array of characters
    const digits = number.toString().split('');

    // Map each digit to its corresponding emoji
    const emojiDigits = digits.map(digit => {
        switch (digit) {
            case '0': return '0️⃣';
            case '1': return '1️⃣';
            case '2': return '2️⃣';
            case '3': return '3️⃣';
            case '4': return '4️⃣';
            case '5': return '5️⃣';
            case '6': return '6️⃣';
            case '7': return '7️⃣';
            case '8': return '8️⃣';
            case '9': return '9️⃣';
            default: return digit; // Handle non-digit characters gracefully
        }
    });

    // Join the array back into a single string
    return emojiDigits.join('');
};
