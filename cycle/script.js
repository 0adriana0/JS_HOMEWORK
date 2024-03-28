console.log("Виведення чисел від 1 до 10");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log("Виведення парних чисел від 2 до 20 ");
for (let num = 2; num <= 20; num++) {
    if (num % 2 !== 0) continue;
    console.log(num);
}

console.log("Таблиця множення числа 7:");
for (let i = 1; i <= 10; i++) {
    console.log("7 *", i, "=", 7 * i);
}

console.log("від 1 до 5");
let array = [1, 2, 3, 4, 5];
let index = 0;
while (index < array.length) {
    console.log(array[index]);
    index++;
}

console.log("Виведення чисел від 1 до 10, крім числа 7:");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of numbers) {
    if (num === 7) {
        break;
    }
    console.log(num);
}

let n = 20;
console.log("Виведення чисел менших за", n);
for (let i = 0; i < n; i++) {
    if (i >= n) break;
    console.log(i);
}

console.log("від 1 до 20, крім чисел, кратних 3");
let num = 1;
while (num <= 20) {
    if (num % 3 === 0) {
        num++;
        continue;
    }
    console.log(num);
    num++;
}