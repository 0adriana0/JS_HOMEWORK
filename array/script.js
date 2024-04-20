//!!1!!  
//for

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ', ';
  }
}

console.log(string);

//join

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = friends.join(', ');

// console.log(string);



//!!2!!
const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];


cards.splice(2, 1);
cards.splice(2, 0, "Карточка-Привітання");
cards.splice(3, 1, 'Карточка-6');
console.log(cards);

