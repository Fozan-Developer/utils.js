<h1 align="center">📖 Документация Utils.js/h1>

## Contents
* Connecting the library
* Date and time
* Declination

## 🚀 Connecting the library
```js
const utils = require('@mr_fozan/utils.js');
```

## 🕘 Date and time

### Getting timestamp

**Timestamp is a data type for storing date and time. The data is stored as the number of milliseconds elapsed since the beginning of the "Unix epoch". The range of values is: 1970-01-01 00:00:00 - 2038-12-31 00:00:00.**

```js
const timestamp = utils.date.timestamp(); // 1675871841130
```

### Millisecond calculator

**Simple millisecond calculator.**
* s - seconds
* m - minutes
* h - hours
* d - days

```js
const calculate = utils.date.inmls(10, "d"); // 864000000
```

### Date and time via timestamp

**This method will help to get the date and time timestamp**

```js
const timestamp = utils.date.timestamp();
const date_time = utils.date.getDate(timestamp); // [ '08.02.2023', ' 19:01:06' ]
```

### Expanded time

**This method helps to get an expanded time using milliseconds, e.g: 3600000 => 1 ч.**

**The result can be written in two languages:**
* ru - Russian language
* en - English language

```js
const unixStampLeft = utils.date.unixStampLeft({ time: 1000, lang: "ru" }); // 1 сек.
```

## 💬 Declination

### Declension by number

```js
const apple = utils.declination.number({
    number: 101,
    first: "Яблок",
    second: "Яблоко",
    third: "Яблока"
}); // Яблоко
```

## 🔢 Числа

### Number visualization

#### Separate the discharges

```js
const division = utils.number.visual({ type: "division", number: 1000, division: "."}); // 1.000
```

#### Add a suffix to a number

```js
const suffix = utils.number.vusial({ type: "word", number: 1000 }); // 1K
```

### Random numbers

```js
const random = utils.number.random(1, 1000); // min, max
const random2 = utils.number.random(1000); // max
```

### Getting a Percentage

```js
const percent = utils.number.percent(1, 100); // 1 %
```
