const container = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const text = document.getElementById('meme-text');
const buttonFile = document.getElementById('meme-insert');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');
const memesProntos = document.getElementById('meme-1-2-3-4');
const buttons = document.getElementById('buttons');

function changeBorder(event) {
  const whoClicked = event.target;

  if (whoClicked.id === 'fire') {
    container.style.border = 'red dashed 3px';
  } else if (whoClicked.id === 'water') {
    container.style.border = 'blue double 5px';
  } else {
    container.style.border = 'green groove 6px';
  }
}

buttonFire.addEventListener('click', changeBorder);
buttonWater.addEventListener('click', changeBorder);
buttonEarth.addEventListener('click', changeBorder);
