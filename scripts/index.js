const button = document.querySelector('.button');
const color = document.querySelector('.color');

button.addEventListener('click', () => {
  fetch('http://www.colr.org/json/color/random')
    .then(res => res.json())
    .then(data => color.style.backgroundColor = `#${data.new_color}`);
})