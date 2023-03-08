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

## ➗ Parse

### URL

```js
const url = utils.perase.url("https://github.com/Fozan-Developer/utils.js");
```

## 🟰 RegExp

**Содержание:**
* Validation Base64
* Validating a credit card number
* Validation Date
* Validation Email
* File extension
* Validation IPv4
* Validation ISBN
* isNumber
* Validation Number
* Validation URL
* Validation Username
* Validation Zip-Code

### Validation Base64

```js
const argument = "base64";

const base64 = utils.regexp.base64(argument); // false
```

### Validating a credit card number

```js
const sucs = utils.regexp.card("1111111111111111"); // true
const fail = utils.regexp.card("12345"); // false
```

### Validation Date

```js
const date1 = utils.regexp.date("29-02-2000"); // true
const date2 = utils.regexp.date("29-02-2001"); // false
```

### Validation Email

```js
const email = utils.regexp.email("test@gmail.com"); // true
```

### File extension

```js
const file_name = "index.js";

const file = utils.regexp.file(file_name); // js
```

### Validation IPv4

```js
const ipv4 = utils.regexp.ipv4("192.0.2.235");
```

### Validation ISBN

```js
const isbn1 = utils.regexp.isbn("ISBN 9781106998966"); // true
const isbn2 = utils.regexp.isbn("1106998966"); // true
const isbn3 = utils.regexp.isbn("110699896x"); // true
```

### isNumber

**Check for a number**

```js
const isNumber1 = utils.regexp.isNumber("123"); // true
const isNumber2 = utils.regexp.isNumber("123x"); // false
```

### Validation Number

**Validate phone number**

```js
const number1 = utils.regexp.isNumber("(121) 123-1234"); // true
const number2 = utils.regexp.isNumber("+1 123-123-1234"); // true
const number3 = utils.regexp.isNumber("+1 123-123-12-12"); // false
```

### Validation URL

```js
const url1 = utils.regexp.url("https://github.com/"); // true
const url2 = utils.regexp.url("abc"); // false
```

### Validation Username

**Validation of username by form:**
* Length from 3 to 16 characters
* Digits
* Small letters
* Characters - and _

```js
const username1 = utils.regexp.username("admin_owner-1"); // true
const username2 = utils.regexp.username("Admin_Owner-1"); // false
```

### Validation Zip-Code

```js
const rus = utils.regexp.zip_code("RUS", "537414"); // true
const usa = utils.regexp.zip_code("USA", "98765-4321"); // true
```

## ✡️ Symbol

**Содержание:**
* Smileys for different events
* Process-bar
* Number to character
* Random from an array

### Smileys for different events

**There are three kinds of events:**
* sucs - Successful
* fail - Not successful
* loading - Loading

```js
const sucs = utils.symbol.actions("sucs"); // ✅
const fail = utils.symbol.actions("fail"); // ✖️
const loading = utils.symbol.actions("loading"); // 🔄
```

### Process-bar

**Process-bar types:**
* stars - returns the process-bar as stars (★★★★★)
* squares - returns process-bar as squares (▪▪▪▪▪▪▪▪▪▪)

```js
const stars = utils.symbol.bar({ type: "stars" current: 50, maximum: 100 }); // ★★✯☆☆
const squares = utils.symbol.bar({ type: "squares" current: 10, maximum: 100 }); // ▪▫▫▫▫▫▫▫▫▫
```

### Number to character

**Returns a number in the form of characters**

```js
const number = utils.symbol.number(123); // 1️⃣2️⃣3️⃣
```

### Random from an array

**Method helps to get a random element from an array.**
**Use the _String_ data type in the array to work correctly.**

```js
const pick = utils.symbol.pick(["Java", "JavaScript", "Node.JS"]); // Node.JS
```