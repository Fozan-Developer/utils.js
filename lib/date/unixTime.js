/**
 * Formats a UNIX timestamp based on type and language.
 * @param {object} options - Options object containing time, type, and lang.
 * @param {number} options.time - The UNIX timestamp.
 * @param {string} options.type - The type of formatting ('full' or 'short').
 * @param {string} options.lang - The language for full formatting ('ru' or 'en').
 * @returns {string} - Formatted time string.
 * @throws {Error} - If required arguments are missing or invalid types.
 */
module.exports = function option({ time, type, lang }) {
    if (!time || !type) throw new Error("Arguments 'time' and 'type' are required");
    if (typeof time !== "number") throw new Error("Field 'time' must be a number");

    if (type === "full") {
        if (!lang) throw new Error("Argument 'lang' is required for full format");
        if (typeof lang !== "string") throw new Error("Field 'lang' must be a string");
        if (lang !== "ru" && lang !== "en") throw new Error("Supported languages: ru, en");

        return unixTimeFull(time, lang);
    } else if (type === "short") {
        return unixTimeShort(time);
    } else {
        throw new Error(`Unsupported type '${type}'`);
    }
};

/**
 * Formats a UNIX timestamp into a full textual representation.
 * @param {number} stamp - The UNIX timestamp.
 * @param {string} lang - The language for formatting ('ru' or 'en').
 * @returns {string} - Formatted time string.
 */
function unixTimeFull(stamp, lang) {
    const { days, hours, minutes, seconds } = langs[lang];

    stamp = stamp / 1000;
    let s = stamp % 60;
    stamp = (stamp - s) / 60;
    let m = stamp % 60;
    stamp = (stamp - m) / 60;
    let h = stamp % 24;
    let d = (stamp - h) / 24;
    let text = "";

    if (d > 0) text += Math.floor(d) + days;
    if (h > 0) text += Math.floor(h) + hours;
    if (m > 0) text += Math.floor(m) + minutes;
    if (s > 0) text += Math.floor(s) + seconds;

    return text;
}

/**
 * Formats a UNIX timestamp into a short time format (HH:mm:ss).
 * @param {number} milliseconds - The UNIX timestamp.
 * @returns {string} - Formatted time string.
 */
function unixTimeShort(milliseconds) {
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    // Add leading zeros if necessary
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

const langs = {
    ru: {
        days: " д. ",
        hours: " ч. ",
        minutes: " мин. ",
        seconds: " сек."
    },
    en: {
        days: " d. ",
        hours: " h. ",
        minutes: " min. ",
        seconds: " sec."
    }
};
