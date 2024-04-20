//1

// const field1 = document.getElementById('field1');
// const field2 = document.getElementById('field2');
// const checkButton = document.getElementById('check-button');
// const result = document.getElementById('result');

// checkButton.addEventListener('click', function() {
//   if (field1.value && field2.value) {
//     result.textContent = 'Обидва поля заповнені';
//   } else {
//     result.textContent = 'Не всі поля заповнені';
//   }
// });

//2

// const field1 = document.getElementById('field1');
// const field2 = document.getElementById('field2');
// const checkButton = document.getElementById('check-button');
// const result = document.getElementById('result');
// let sum = "";

// checkButton.addEventListener('click', function() {
//   const sum = Number(field1.value) + Number(field2.value);
//   if (sum > 10) {
//     result.textContent = 'Сума більша за 10';
//   } else {
//     result.textContent = 'Сума менша або дорівнює 10';
//   }
// });

//3

// const field = document.getElementById('field');
// const checkButton = document.getElementById('check-button');
// const result = document.getElementById('result');

// checkButton.addEventListener('click', function() {
//   if (field.value.includes('JavaScript')) {
//     result.textContent = 'Текст містить слово JavaScript';
//   } else {
//     result.textContent = 'Текст не містить слово JavaScript';
//   }
// });


//4

// const form = document.getElementById('form');
// const numberField = document.getElementById('number');
// const result = document.getElementById('result');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const number = Number(numberField.value);

//   if (number > 10 && number < 20) {
//     result.textContent = 'Число входить в діапазон від 10 до 20';
//   } else {
//     result.textContent = 'Число не входить в діапазон від 10 до 20';
//   }
// });

//5

const form = document.getElementById('form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const result = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const password = passwordField.value.trim();

  if (name.length < 3) {
    result.textContent = 'Помилка: ім’я повинно містити не менше 3 символів';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    result.textContent = 'Помилка: email повинен містити символ @ та крапку після неї';
    return;
  }

  if (password.length < 6) {
    result.textContent = 'Помилка: пароль повинен містити не менше 6 символів';
    return;
  }

  window.location.href = 'https://www.pinterest.com/tetyanastetsiyk/%D0%B3%D0%B0%D1%80%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B4%D0%BD%D1%8F/';
});