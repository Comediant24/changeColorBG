const button = document.querySelector('.button')
const colorList = ['#BCADD6', '#FFCF01', '#F37054', '#49B9BB', '#775BA6',
'#4CBD9F', '#F15C72', '#F48B90', '#7D8A3A', '#0082CE']

const color = document.querySelector('.color')

const changeColor = function () {
  const indexColor = Math.floor(Math.random() * colorList.length);
  color.style.backgroundColor = colorList[indexColor];
}

button.addEventListener('click', changeColor)