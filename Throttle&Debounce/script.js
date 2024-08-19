//1
const input = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');

input.addEventListener('input', _.debounce(() => {
  image.style.transform = `scale(${input.value / 50})`;
}, 100));

//2

const box = document.getElementById('box');
const moveBox = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
};
const debouncedMoveBox = _.debounce((event) => moveBox(event), 50);
document.addEventListener('mousemove', debouncedMoveBox);
