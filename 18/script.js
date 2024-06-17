'use strict'
//!1


const categoriesList = document.getElementById('categories')
const items = categoriesList.querySelectorAll('.item');

console.log(`У списку ${items.length} категорії.`);


items.forEach(item => {

  const title = item.querySelector('h2').textContent;

  const elements = item.querySelectorAll('ul li');
  
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${elements.length}`);
});

//!2

const ingredients = [
 'Картопля',
 'Гриби',
 'Часник',
 'Помідори',
 'Зелень',
 'Приправи',
];
const ingredientsList = document.getElementById('ingredients');

const ingredientsHTML = ingredients.map((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  return li;
});

ingredientsList.append(...ingredientsHTML);

//! 3

const images = [
 {
  url:
   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url:
   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url:
   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];

const galleryList = document.getElementById('gallery');

const galleryHTML = images.map((image) => {
  return `<li><img src="${image.url}" alt="${image.alt}"></li>`;
}).join('');

galleryList.insertAdjacentHTML('beforeend', galleryHTML);

//! 4 
let counterValue = 0;

function increment() {
  counterValue++;
  updateCounterValue();
}

function decrement() {
  counterValue--;
  updateCounterValue();
}

function updateCounterValue() {
  document.getElementById('value').textContent = counterValue;
}

document.addEventListener('DOMContentLoaded', () => {
  const decrementButton = document.querySelector('[data-action="decrement"]');
  const incrementButton = document.querySelector('[data-action="increment"]');

  decrementButton.addEventListener('click', decrement);
  incrementButton.addEventListener('click', increment);
});

//! 5 
const inputField1 = document.getElementById('name-input');
const outputSpan = document.getElementById('name-output');

inputField1.addEventListener('input', () => {
  const inputValue = inputField1.value.trim();
  if (inputValue) {
    outputSpan.textContent = inputValue;
  } else {
    outputSpan.textContent = 'незнайомець';
  }
});

//! 6
const inputField = document.getElementById('validation-input');

inputField.addEventListener('blur', () => {
  const requiredLength = parseInt(inputField.getAttribute('data-length'));
  const inputValue = inputField.value.trim();
  const isValid = inputValue.length === requiredLength;

  if (isValid) {
    inputField.classList.add('valid');
    inputField.classList.remove('invalid');
  } else {
    inputField.classList.add('invalid');
    inputField.classList.remove('valid');
  }
});

//! 7
const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
  const fontSize = fontSizeControl.value + 'px';
  textElement.style.fontSize = fontSize;
});
//! 8
const inputElement = document.querySelector('input');
const renderButton = document.querySelector('[data-action="render"]');
const destroyButton = document.querySelector('[data-action="destroy"]');
const boxesElement = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let size = 30;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    size += 10;
    boxes.push(box);
  }

  boxesElement.append(...boxes);
}

function destroyBoxes() {
  boxesElement.innerHTML = '';
}

renderButton.addEventListener('click', () => {
  const amount = inputElement.value;
  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);

