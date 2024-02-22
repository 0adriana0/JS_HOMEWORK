let result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);


let email = "example@email.com";
let containsAtSymbol = email.includes('@');
let emailLength = email.length;
console.log("Contains @ symbol:", containsAtSymbol);
console.log("Total characters:", emailLength);


let my = "My";
let name = "name";
let is = "is";
let fullName = my + " " + name + " " + is + " " + "Viktor";
console.log(fullName); 


let userName = "Олександр";
let payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
