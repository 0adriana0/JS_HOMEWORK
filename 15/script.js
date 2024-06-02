//7
// Отримати загальну суму балансу (поле balance) всіх користувачів.

const users = [
  { user: 1, balance: 20000 },
  { user: 2, balance: 900 },
  { user: 3, balance: 16 },
];

const calculateTotalBalance = users => {
  let totalBalance = 0;
  for (let i = 0; i < users.length; i++) {
    totalBalance += users[i].balance;
  }
  return totalBalance;
};

console.log(calculateTotalBalance(users)); // 20916


//8
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.


const users8 = [
  { user: 1, name: 'Elma Head', friends: ['Anna', 'Goldie Gentry'] },
  { user: 2, name: 'Sharlene Bush', friends: ['Briana Decker', 'Anna'] },
  { user: 3, name: 'Sheree Anthony', friends: ['Briana Decker', 'Goldie Gentry'] },
  
];
const getUsersWithFriend = (users, friendName) => {
  return users.reduce((result, user) => {
    if (user.friends.includes(friendName)) {
      result.push(user.name);
    }
    return result;
  }, []);
};

console.log(getUsersWithFriend(users8, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users8, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//9
// Масив імен (поле name) людей, відсортованих в залежності 
// від кількості їх друзів(поле friends)
const people = [
  { name: 'Moore Hensley', friends: [] },
  { name: 'Sharlene Bush', friends: ['Briana Decker', 'Sharron Pace'] },
  { name: 'Elma Head', friends: ['Goldie Gentry', 'Aisha Tran'] },
  { name: 'Carey Barr', friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'] },
  { name: 'Blackburn Dotson', friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'] },
  { name: 'Sheree Anthony', friends: ['Goldie Gentry', 'Briana Decker', 'Sharron Pace', 'Glenna Norris', 'Josefina Fitzgerald'] },
  { name: 'Ross Vazquez', friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Vasquez Hull', 'Henderson Berry', 'Zelma Shaffer'] }
];

const getNamesSortedByFriendsCount = people => {
   return people.sort((a, b) => a.friends.length - b.friends.length).map(people => people.name);
};

console.log(getNamesSortedByFriendsCount(people));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


//10
//Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const users10 = [
  { name: 'Moore Hensley', skills: ['adipisicing', 'amet', 'anim'] },
  { name: 'Sharlene Bush', skills: ['commodo', 'culpa', 'elit'] },
  { name: 'Elma Head', skills: ['ex', 'ipsum', 'irure'] },
  { name: 'Carey Barr', skills: ['laborum', 'lorem', 'ollit'] },
  { name: 'Blackburn Dotson', skills: ['non', 'nostrud', 'nulla'] },
  { name: 'Sheree Anthony', skills: ['proident', 'tempor', 'elit'] },
  { name: 'Ross Vazquez', skills: ['veniam'] }
];

const getSortedUniqueSkills = users10 => {
  return [new Set(users10.reduce((acc, user10) => acc.concat(user10.skills), []).sort())];
};

console.log(getSortedUniqueSkills(users10));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
