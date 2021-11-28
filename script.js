const container = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const text = document.getElementById('meme-text');
const buttonFile = document.getElementById('meme-insert');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

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

function containerMemePronto(event) {
  const whoClicked = event.target;

  if (whoClicked.id === 'meme-1') {
    container.style.backgroundImage = 'url(imgs/meme1.png)';
  } else if (whoClicked.id === 'meme-2') {
    container.style.backgroundImage = 'url(imgs/meme2.png)';
  } else if (whoClicked.id === 'meme-3') {
    container.style.backgroundImage = 'url(imgs/meme3.png)';
  } else {
    container.style.backgroundImage = 'url(imgs/meme4.png)';
  }
}

meme1.addEventListener('click', containerMemePronto);
meme2.addEventListener('click', containerMemePronto);
meme3.addEventListener('click', containerMemePronto);
meme4.addEventListener('click', containerMemePronto);
