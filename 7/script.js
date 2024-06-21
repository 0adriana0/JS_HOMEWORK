//!1
let array = [1, 2, 3];

array[1] = 10;

console.log(array);

//!2
let animals = ['Fish', 'Cat', 'Dog'];

animals.push('Bird');

console.log(animals);
//!3
let array3 = [1, 6, 3, 0, 9];

let sum = array3.reduce((acc, current) => acc + current, 0);

console.log(sum);
//!4
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log(`Елемент масиву: ${numbers[i]}`);
}
//!5
let strings = ["Whose","What","Where","Why","How"];

for (let i = 0; i < strings.length; i++) {
  if (strings[i].length > 5) {
    console.log(`Містить бульше 5 символів: ${strings[i]}`);
  }
}
//!6
let numbers6 = [12, 45, 7, 23, 56, 89, 34, 19, 67, 25];

let max = numbers6[0];

for (let i = 1; i < numbers6.length; i++) {
  if (numbers6[i] > max) {
    max = numbers6[i];
  }
}

console.log(`Max: ${max}`);
//!7
let numbers7 = [2, 45, 7, 23, 56, 80, 34, 19, 67, 25];

let evenNumbers = [];

for (let i = 0; i < numbers7.length; i++) {
  if (numbers7[i] % 2 === 0) {
    evenNumbers.push(numbers7[i]);
  }
}

console.log("Numbers:");
for (let i = 0; i < evenNumbers.length; i++) {
  console.log(` ${evenNumbers[i]}`);
}