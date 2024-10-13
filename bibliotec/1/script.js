const keyElement = document.getElementById('key');
const messageElement = document.getElementById('message');
const newGameButton = document.getElementById('newGame');

let currentKeyIndex = 0;
const keys = ['a', '8', 'l', 'v', 'w', 's', 'd', 'k', 't', 'z'];

function setNewKey() {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    keyElement.textContent = `Натисніть: ${keys[currentKeyIndex]}`;
    messageElement.textContent = ''; 
}

function handleKeyDown(event) {
    if (event.key === keys[currentKeyIndex]) {
        PNotify.success({
            text: 'Вірно!',
            delay: 500
        });
        setNewKey();
    } else {
        PNotify.error({
            text: `Неправірно.Спробуйте ще раз!`,
            delay: 500
        });
    }
}

function handleKeyPress(event) {
    event.preventDefault();
}


newGameButton.addEventListener('click', () => {
    PNotify.info({
        text: 'Починається нова гра!',
        delay: 500
    });
    setNewKey();
});


setNewKey();


document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keypress', handleKeyPress);

