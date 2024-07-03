const pick = require('./pick.js');

/**
 * Selects a random emoji based on the provided action type.
 * @param {string} action - The type of action ('sucs', 'fail', or 'loading').
 * @returns {string} - Randomly selected emoji corresponding to the action type.
 * @throws {Error} - If action is undefined, null, or not provided.
 * @throws {TypeError} - If action is not a string or does not match the specified types.
 */
module.exports = function actions(action) {
    // Validate input parameters
    if (!action) throw new Error("Field 'action' is required");

    const validActions = ["sucs", "fail", "loading"];
    if (!validActions.includes(action)) {
        throw new TypeError("Field 'action' must be one of 'sucs', 'fail', or 'loading'");
    }

    // Define emoji arrays for each action type
    const successEmojis = ['☑️', '✅', '🆗', '✔️', '🌟'];
    const failureEmojis = ['✖️', '➖', '🙅‍♂️', '🙅', '🙅‍♀️', '⛔️', '📛', '🚫', '😞'];
    const loadingEmojis = ['🔄', '🔁', '🔃', '⏳'];

    // Pick a random emoji based on the action type
    switch (action) {
        case "sucs":
            return pick(successEmojis);
        case "fail":
            return pick(failureEmojis);
        case "loading":
            return pick(loadingEmojis);
        default:
            throw new Error("Unexpected error occurred");
    }
};
