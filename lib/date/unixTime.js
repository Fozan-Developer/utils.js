module.exports = function option({ time, type, lang }) {

    if(!time || !type) throw new Error("Аргументы time и type обязательные");
    if(typeof time != "number") throw new Error("Поле time должно быть числом");

    if(type == "full") {
        if(!lang) throw new Error("Аргумент lang является обязательным");
        if(typeof lang != "string") throw new Error("Поле lang должно быть строкой");
        if(lang != "ru" && lang != "en") throw new Error("Доступные языки: ru, en");

        return unixTimeFull(time, lang);
    };

    if(type == "short") {
        return unixTimeShort(time);
    };
};

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

function unixTimeFull(stamp, lang) {
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

function unixTimeShort(milliseconds) {
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
  
    // Добавление ведущих нулей, если необходимо
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
  
    return `${hours}:${minutes}:${seconds}`;
};