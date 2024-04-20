'use strict'

//!!1!!

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

const items = ['Mango', 'Poly', 'Ajax'];
logItems(items);

//!!2!!

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  const totalPrice = words.reduce((acc) => {
    return acc + pricePerWord;
  }, 0);
  return totalPrice;
}

const message = 'Деколи я просто думаю про життя';
const pricePerWord = 10;
const totalPrice = calculateEngravingPrice(message, pricePerWord);

console.log(`Ціна гравіювання слова: ${pricePerWord}`);
console.log(`Загальна ціна гравіювання: ${totalPrice}`);

//!!3!!

function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

const string = 'Web Development Tutorial';
const longestWord = findLongestWord(string);

console.log(`The longest word in the string "${string}" is: ${longestWord}`);

//!!4!!

function formatString(string2) {
  const maxLength = 40;

  if (string2.length <= maxLength) {
    return string2;
  }

  const truncatedString = string2.substring(0, maxLength) + '...';
  return truncatedString;
}

const string2 = 'Web Development Tutorial';
const formattedString = formatString(string2);

console.log(`The formatted string is: ${formattedString}`);

//!!5!!

function checkForSpam(message) {
  const forbiddenWords = ['spam', 'sale'];
  let messageLower = message.toLowerCase();

  for (let i = 0; i < forbiddenWords.length; i++) {
    if (messageLower.includes(forbiddenWords[i])) {
      return true;
    }
  }

  return false;
}

console.log(checkForSpam('Hello'));
console.log(checkForSpam('How are you'));
console.log(checkForSpam('spam'));

//!!6!!

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Please enter a number or press Cancel to finish');

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (isNaN(number)) {
    alert('Було введено не число, попробуйте ще раз');
  } else {
    numbers.push(number);
  }
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }

  console.log(`Загальна сума чисел дорівнює ${total}`);
}

//!!7!!

function isLoginValid(login) {
  const minLength = 4;
  const maxLength = 16;

  return login.length >= minLength && login.length <= maxLength;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Помилка! Логін повинен бути від 4 до 16 символів';
  }

  if (!isLoginUnique(allLogins, login)) {
    return 'Такий логін уже використовується!';
  }

  allLogins.push(login);
  return 'Логін успішно доданий!';
}

const logins = [];
console.log(addLogin(logins, 'short')); 
console.log(addLogin(logins, 'longlonglong'));
console.log(addLogin(logins, 'user'));
console.log(addLogin(logins, 'newuser'));
console.log(logins); 






