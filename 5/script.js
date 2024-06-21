//!1
// const selectDrink = document.getElementById('drink-select');
//   const message1 = document.getElementById('drink-message');

//   selectDrink.addEventListener('change', () => {
//     const selectedValue = selectDrink.value;
//     let message;

//     switch (selectedValue) {
//       case 'coffee':
//         message = 'Ви обрали каву!';
//         break;
//       case 'tea':
//         message = 'Ви обрали чай!';
//         break;
//       case 'juice':
//         message = 'Ви обрали сік!';
//         break;
//       default:
//         message = '';
//     }

//     message1.textContent = message;
//   });

  //!2
  // const inputDay = document.getElementById('day-input');
  // const buttonCheck = document.getElementById('btn-check');
  // const message2 = document.getElementById('day-message');

  // buttonCheck.addEventListener('click', () => {
  //   const inputValue = inputDay.value.trim().toLowerCase();
  //   let message;

  //   switch (inputValue) {
  //     case 'понеділок':
  //     case 'вівторок':
  //     case 'середа':
  //     case 'четвер':
  //     case "п'ятниця":
  //       message = 'Це робочий день!';
  //       break;
  //     case 'субота':
  //     case 'неділя':
  //       message = 'Це вихідний день!';
  //       break;
  //     default:
  //       message = 'Невірний день тижня!';
  //   }

  //   message2.textContent = message;
  // });

  //!3
  // const input = document.getElementById('month-input');
  // const buttonCheck = document.getElementById('check-btn');
  // const messageMonth = document.getElementById('month-message');

  // buttonCheck.addEventListener('click', () => {
  //   const inputValue = parseInt(input.value, 10);
  //   let message;

  //   if (inputValue >= 1 && inputValue <= 2) {
  //     message = 'Це зима!';
  //   } else if (inputValue >= 3 && inputValue <= 5) {
  //     message = 'Це весна!';
  //   } else if (inputValue >= 6 && inputValue <= 8) {
  //     message = 'Це літо!';
  //   } else if (inputValue >= 9 && inputValue <= 11) {
  //     message = 'Це осінь!';
  //   } else if (inputValue == 12) {
  //     message = 'Це зима!';
  //   } else {
  //     message = 'Невірний номер місяця!';
  //   }

  //   messageMonth.textContent = message;
  // });
//!4
  // const inputMonth = document.getElementById('month-input');
  // const buttonMonth = document.getElementById('month-btn');
  // const messageMonth = document.getElementById('month-message');

  // buttonMonth.addEventListener('click', () => {
  //   const inputValue = parseInt(inputMonth.value, 10);
  //   let message;

  //   switch (inputValue) {
  //     case 1:
  //     case 3:
  //     case 5:
  //     case 7:
  //     case 8:
  //     case 10:
  //     case 12:
  //       message = 'Цей місяць має 31 день!';
  //       break;
  //     case 4:
  //     case 6:
  //     case 9:
  //     case 11:
  //       message = 'Цей місяць має 30 днів!';
  //       break;
  //     case 2:
  //       message = 'Цей місяць має 28 (29) днів!';
  //       break;
  //     default:
  //       message = 'Невірний номер місяця!';
  //   }

  //   messageMonth.textContent = message;
  // });

  //!5
  //  const inputColor = document.getElementById('color-input');
  // const buttonColor = document.getElementById('color-btn');
  // const messageColor = document.getElementById('color-message');

  // buttonColor.addEventListener('click', () => {
  //   const inputValue = inputColor.value.trim().toLowerCase();
  //   let message;

  //   switch (inputValue) {
  //     case 'червоний':
  //       message = 'Стоп!';
  //       break;
  //     case 'зелений':
  //       message = 'Йти!';
  //       break;
  //     case 'жовтий':
  //       message = 'Чекати!';
  //       break;
  //     default:
  //       message = 'Невірний колір!';
  //   }

  //   messageColor.textContent = message;
  // });
  //!6
  const num1 = document.getElementById('num1-input');
  const num2 = document.getElementById('num2-input');
  const operation = document.getElementById('operation-select');
  const buttonCalculate = document.getElementById('calculate-btn');
  const messageResult = document.getElementById('result-message');

  buttonCalculate.addEventListener('click', () => {
    const num1Value = parseFloat(num1.value);
    const num2Value = parseFloat(num2.value);
    const operationValue = operation.value;

    let result;

    switch (operationValue) {
      case '+':
        result = num1Value + num2Value;
        break;
      case '-':
        result = num1Value - num2Value;
        break;
      case '*':
        result = num1Value * num2Value;
        break;
      case '/':
        if (num2Value === 0) {
          messageResult.textContent = 'Помилка: ділення на нуль!';
          return;
        }
        result = num1Value / num2Value;
        break;
      default:
        messageResult.textContent = 'Невірна операція!';
        return;
    }

    messageResult.textContent = `Результат: ${result}`;
  });