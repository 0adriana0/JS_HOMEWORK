// 1
var age = 14;

console.log(age);

var name = "Адріана";

console.log(name);

var isStudent = true;

console.log(isStudent);

var myString = "Кращий спосіб почати робити – перестати говорити і почати робити";

console.log(myString);

var myNumber = 14;
myNumber += 10;

console.log(myNumber);

var myNull = null;

console.log(myNull);

// 2

var username = prompt("Будь ласка, введіть ваше ім'я:");

if (username !== null) {
    alert("Привіт, " + username + "!");
}

var confirmation = confirm("Підтвердьте дію:");

if (confirmation) {
    alert("Дякую за підтвердження!");
}
else {
    alert("Дію відмінено!");
}

alert("УВАГА! Дія небезпечна!");

var dangerousActionConfirmation = confirm("Підтвердьте дію:");

if (dangerousActionConfirmation) {
    alert("Дякую за підтвердження!");
}
else {
    alert("Дію відмінено!");
}