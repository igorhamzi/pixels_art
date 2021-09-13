function quadroDePixels() {
  const quadrado = 5;
  const quadro = document.querySelector('#pixel-board');

  for (let l = 1; l <= quadrado; l += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    quadro.appendChild(line);

    for (let p = 1; p <= quadrado; p += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
  const pixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', adicColor);
    console.log('teste');
  }
  // Requisito 12
  const arrayColor = [];
  for (index = 0; index <= 3; index += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const colorAleat = 'rgb(' + r + ',' + g + ',' + b + ')';
    arrayColor.push(colorAleat);
  }
  const colorAl = document.getElementsByClassName('color');
  for (let index = 1; index < colorAl.length; index += 1) {
    color[index].style.backgroundColor = arrayColor[index];
  }
}
window.onload = quadroDePixels;

// Requisto 7

let color = document.getElementsByClassName('color');

for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', selectColor);
}

function selectColor(origin) {
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
  }
  origin.target.classList.add('selected');
}


// Requisito 8

function adicColor(origin) {
  const paleta = document.querySelector('.selected');
  origin.target.style.backgroundColor = window.getComputedStyle(paleta, null).getPropertyValue('background-color');
}

// Requisito 9

function limpar() {
  const pix = document.getElementsByClassName('pixel');
  for (let index = 0; index < pix.length; index += 1) {
    pix[index].style.backgroundColor = 'white';
  }
}
const button = document.getElementById('clear-board');
button.addEventListener('click', limpar);

// Requisito 12 
//document.getElementById('colorRandom').addEventListener('clcik', colorRandom);
