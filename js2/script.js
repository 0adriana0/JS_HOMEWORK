let celsiusTemperature = 25;
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log("Температура у Фаренгейтах:", fahrenheitTemperature);

let daysInMonth = 31;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log("Кількість годин у місяці:", hoursInMonth);
console.log("Кількість хвилин у місяці:", minutesInMonth);

let health = 100;
let energy = 80;
health -= 20;
energy -= 10;
console.log("Рівень здоров'я після віднімання:", health);
console.log("Рівень енергії після віднімання:", energy);

let purchaseAmount = 500;
let discountedAmount = purchaseAmount * 0.9;
console.log("Сума покупки після застосування знижки:", discountedAmount);

let floatingNumber = 9.99;
let floorNumber = Math.floor(floatingNumber);
console.log("Округлене число до меншого:", floorNumber);

let stringFloatNumber = "3.14";
let parsedFloatNumber = parseFloat(stringFloatNumber);
console.log("Рядок у десяткове число:", parsedFloatNumber);

let stringInteger = "42";
let parsedInteger = parseInt(stringInteger);
console.log("Рядок у ціле число:", parsedInteger);

let number = 16;
let squareRoot = Math.sqrt(number);
console.log("Квадратний корінь числа:", squareRoot);

let integer = 10;
let stringNumber = "25";
let parsedStringToInteger = parseInt(stringNumber);
console.log("Рядок у ціле число:", parsedStringToInteger);
let integerToString = integer.toString();
console.log("Ціле число у рядок:", integerToString);