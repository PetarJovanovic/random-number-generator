const result = document.querySelector('.number');
const generate = document.querySelector('.generate');

function randomNumber() {
  result.innerHTML = Math.floor(Math.random() * 100 + 1);
}

generate.addEventListener('click', randomNumber);
