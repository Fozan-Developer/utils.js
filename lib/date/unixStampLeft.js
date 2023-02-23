const langs = {
    ru: {
        days: " д. ",
        hours: " ч. ",
        minutes: " мин. ",
        secundes: " сек."
    },
    en: {
        days: " d. ",
        hours: " h. ",
        minutes: " min. ",
        secundes: " sec."
    }
};

function unixStampLeft(stamp, lang) { //юникс
    var { days, hours, minutes, secundes } = langs[lang];

    stamp = stamp / 1000;
    let s = stamp % 60;
    stamp = (stamp - s) / 60;
    let m = stamp % 60;
    stamp = (stamp - m) / 60;
    let h = (stamp) % 24;
    let d = (stamp - h) / 24;
    let text = ``;
    if (d > 0) text += Math.floor(d) + days;
    if (h > 0) text += Math.floor(h) + hours;
    if (m > 0) text += Math.floor(m) + minutes;
    if (s > 0) text += Math.floor(s) + secundes;

    return text;
};

module.exports = function option(argument) {
    const { time, lang } = argument;

    if(!time || !lang) throw new Error("Аргументы time и lang обязательные");

    if(typeof time != "number") throw new Error("Поле time должно быть числом");
    if(typeof lang != "string") throw new Error("Поле lang должно быть строкой");

    if(lang != "ru" && lang != "en") throw new Error("Доступные языки: ru, en");

    return unixStampLeft(time, lang);
};
