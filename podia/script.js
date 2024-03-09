// 1
const colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', function() {
        colorButton.style.backgroundColor = 'blue';
    });


const styleButton = document.getElementById('styleButton');
const heading = document.getElementById('heading');
styleButton.addEventListener('click', function () {
    heading.classList.add('highlight')
});


const inputField = document.getElementById('inputField');
    const displayArea = document.getElementById('displayArea');
    inputField.addEventListener('input', function() {
        displayArea.textContent = inputField.value;
    });


//2

const openModalButton = document.querySelector('[data-action="open-modal"]');
const closeModalButton = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('[data-action="modal"]');

    openModalButton.addEventListener('click', function() {
        backdrop.style.display = 'block';
    });
    

    closeModalButton.addEventListener('click', function() {
        backdrop.style.display = 'none';
    });